"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface SupabaseChallengeButtonProps {
  userId: string;
  userName: string;
  className?: string;
}

export default function SupabaseChallengeButton({ userId, userName, className = "" }: SupabaseChallengeButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const handleChallenge = async () => {
    if (!user) {
      console.log("❌ No user - sign in required");
      toast({
        title: "Sign in required",
        description: "Please sign in to challenge other players",
        variant: "destructive",
      });
      return;
    }
    try {
      setIsLoading(true);
      console.log(`🎯 Creating challenge for: ${userName} (${userId}), by: ${user.id}`);
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24);
      const { data, error } = await supabase
        .from("user_challenges")
        .insert({
          challenger_id: user.id,
          challenged_id: userId,
          category: "quran",
          difficulty: "mixed",
          question_count: 10,
          time_limit: 300,
          status: "pending",
          expires_at: expiresAt.toISOString(),
        })
        .select()
        .single();
      if (error) {
        console.error("❌ Database error:", error);
        throw new Error(error.message);
      }
      console.log(`✅ Challenge created successfully:`, data);
      toast({
        title: "Challenge Created!",
        description: `You've challenged ${userName}. Take your quiz now!`,
      });
      const challengeUrl = `/quiz?category=quran&difficulty=mixed&challenge=${data.id}&questions=10&opponent=${userId}&opponentName=${encodeURIComponent(userName)}&challengerTurn=true`;
      console.log(`🔗 Redirecting to:`, challengeUrl);
      router.push(challengeUrl);
    } catch (error: any) {
      console.error("❌ Error creating challenge:", error);
      toast({
        title: "Challenge Failed",
        description: error.message || "Failed to create challenge",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={() => {
        console.log("Button clicked for:", userId, { userId: user?.id });
        handleChallenge();
      }}
      disabled={isLoading || !user}
      className={`bg-green-600 hover:bg-green-700 ${className}`}
      size="sm"
    >
      {isLoading ? (
        <>
          <div className="mr-1 h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          Challenging...
        </>
      ) : (
        <>
          <Gamepad2 className="h-3 w-3 mr-1" />
          Challenge
        </>
      )}
    </Button>
  );
}
