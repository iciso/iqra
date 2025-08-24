"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";
import { supabase } from "@/lib/supabase-client";
import type { NextPage } from "next";

interface LoginPageProps {
  params: Promise<{ lang: string }>;
}

const Login: NextPage<LoginPageProps> = async ({ params }) => {
  const { lang } = await params;
  const [dict, setDict] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const response = await fetch(`/translations/${lang}/translations.json`);
        if (!response.ok) throw new Error("Failed to load translations");
        const data = await response.json();
        setDict(data);
      } catch (err) {
        console.error("Error loading translations:", err);
      }
    }
    fetchDictionary();
  }, [lang]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      await signIn();
      router.push(`/${lang}${redirect}`);
    } catch (err: any) {
      setError(dict?.login?.error?.replace("{{message}}", err.message) || "Login failed");
    }
  };

  if (!dict) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{dict.login.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">{dict.login.email}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">{dict.login.password}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              {dict.login.sign_in}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
