"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Check, X, Clock, RefreshCw, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface Challenge {
  id: string;
  challenger_id: string;
  category: string;
  difficulty: string;
  question_count: number;
  created_at: string;
  expires_at: string;
  status: string;
  challenger: {
    username: string;
    full_name?: string;
    avatar_url?: string;
  };
}

export default function ProfileChallengeNotifications() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  const addDebug = (message: string) => {
    console.log("🔔 DEBUG:", message);
    setDebugInfo((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const loadChallenges = async () => {
    // ... (same as before)
  };

  const acceptChallenge = async (challengeId: string, category: string, difficulty: string, opponentName: string, opponentId: string) => {
    try {
      const { error } = await supabase.from("user_challenges").update({ status: "accepted" }).eq("id", challengeId);
      if (error) throw error;
      toast({
        title: "Challenge Accepted! 🎯",
        description: "Redirecting to quiz...",
      });
      setChallenges((prev) => prev.filter((c) => c.id !== challengeId));
      const challengeUrl = `/quiz?category=${encodeURIComponent(category)}&difficulty=${encodeURIComponent(difficulty)}&challenge=${challengeId}&questions=10&opponentId=${opponentId}&opponentName=${encodeURIComponent(opponentName)}&challengerTurn=false`;
      console.log(`🔗 Redirecting to:`, challengeUrl);
      router.push(challengeUrl);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const declineChallenge = async (challengeId: string) => {
    // ... (same as before)
  };

  const formatTimeLeft = (dateString: string) => {
    // ... (same as before)
  };

  const getUserInitials = (challenger: Challenge["challenger"]) => {
    // ... (same as before)
  };

  const categoryLabels: Record<string, string> = {
    quran: "Quran Knowledge",
    seerah: "Seerah",
    fiqh: "Fiqh",
    hadeeth: "Hadeeth",
    aqeedah: "Aqeedah",
    tafsir: "Tafsir",
    comparative: "Comparative Religion",
    "islamic-finance": "Islamic Finance",
    tazkiyah: "Tazkiyah",
    history: "Islamic History",
    dawah: "Dawah",
    "new-muslims": "New Muslims",
  };

  useEffect(() => {
    if (!authLoading && user) {
      loadChallenges();
    }
  }, [user, authLoading]);

  // ... (rest of the JSX same as before)
}
