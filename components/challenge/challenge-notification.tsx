"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/auth-context";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ChallengeNotification() {
  const { user } = useAuth();
  const [challenges, setChallenges] = useState<any[]>([]);

  useEffect(() => {
    async function loadChallenges(attempt = 1, maxAttempts = 3) {
      try {
        console.log(`🔔 DEBUG: Starting loadChallenges... (attempt ${attempt})`);
        const { data, error } = await supabase
          .from("user_challenges")
          .select("id, challenger_id, challenged_id, created_at, expires_at, status, question_count, time_limit, category, difficulty")
          .eq("challenged_id", user?.id);
        if (error) throw error;
        console.log(`🔔 DEBUG: Challenges query result:`, { error, count: data?.length });
        console.log(`🔔 DEBUG: Found ${data?.length || 0} raw challenges`, data);
        const validChallenges = data?.filter((challenge) => {
          console.log(`Challenge expires_at: ${challenge.expires_at}, status: ${challenge.status}`);
          return challenge.status === "pending" && new Date(challenge.expires_at) > new Date();
        }) || [];
        console.log(`🔔 DEBUG: After expiry filter: ${validChallenges.length} valid challenges`);
        setChallenges(validChallenges);
        console.log("🔔 DEBUG: loadChallenges completed");
      } catch (error) {
        console.error(`❌ Challenge error (attempt ${attempt}):`, error);
        if (attempt < maxAttempts) {
          console.log(`🔄 Retrying... (attempt ${attempt + 1})`);
          setTimeout(() => loadChallenges(attempt + 1, maxAttempts), 1000);
        } else {
          console.log("🔄 Using fallback challenges");
          setChallenges([]);
        }
      }
    }
    if (user?.id) loadChallenges();
  }, [user]);

  return (
    <Card className="bg-card border rounded-lg shadow-md fixed bottom-4 right-4 max-w-sm">
      <CardContent className="p-4">
        {challenges.length > 0 ? (
          <div>
            <p>{challenges.length} pending challenge{challenges.length > 1 ? "s" : ""}</p>
            {challenges.map((challenge) => (
              <Link key={challenge.id} href={`/challenge-results/${challenge.id}`}>
                <Badge variant="secondary" className="mt-2 block">
                  {challenge.category} ({challenge.difficulty})
                </Badge>
              </Link>
            ))}
          </div>
        ) : (
          <p>No pending challenges</p>
        )}
      </CardContent>
    </Card>
  );
}
