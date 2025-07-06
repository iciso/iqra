"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Crown, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface Player {
  name: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  user_id: string;
}

const fallbackPlayers: Player[] = [
  {
    name: "Fallback User",
    score: 10,
    totalQuestions: 10,
    percentage: 100,
    user_id: "fallback-1",
  },
].filter((player) => !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.name));

export default function SimpleTopPlayers({ user }: { user: any }) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers(attempt = 1, maxAttempts = 3) {
      try {
        setLoading(true);
        console.log(`📊 Fetching simple top players... (attempt ${attempt})`);
        const { data, error } = await supabase
          .from("user_profiles")
          .select("id, username, full_name, total_score, total_questions")
          .not("username", "in", '("Test User","Build Time User","Demo User","test-1748153442262")')
          .order("total_score", { ascending: false });
        if (error) throw error;
        console.log("Raw players:", data);
        const filteredPlayers = data
          .filter((player) => !user || player.id !== user.id)
          .map((player) => ({
            name: player.full_name || player.username || "Unknown User",
            score: player.total_score || 0,
            totalQuestions: player.total_questions || 0,
            percentage: player.total_questions > 0 ? Math.round((player.total_score / player.total_questions) * 100) : 0,
            user_id: player.id,
          }));
        console.log(`✅ Players loaded from Supabase: ${filteredPlayers.length} players`, filteredPlayers.map(p => p.name));
        setPlayers(filteredPlayers.length > 0 ? filteredPlayers : fallbackPlayers);
      } catch (error) {
        console.error(`❌ Supabase error (attempt ${attempt}):`, error);
        if (attempt < maxAttempts) {
          console.log(`🔄 Retrying... (attempt ${attempt + 1})`);
          setTimeout(() => fetchPlayers(attempt + 1, maxAttempts), 1000);
        } else {
          console.log("🔄 Using fallback players");
          setPlayers(fallbackPlayers);
        }
      } finally {
        if (attempt === 1) setLoading(false);
      }
    }
    fetchPlayers();
  }, [user]);

  const handleChallenge = async (opponentId: string) => {
    try {
      const { error } = await supabase
        .from("user_challenges")
        .insert({
          challenger_id: user.id,
          opponent_id: opponentId,
          created_at: new Date().toISOString(),
          status: "pending",
        });
      if (error) throw error;
      console.log(`✅ Challenge sent to user ${opponentId}`);
    } catch (error) {
      console.error("❌ Error sending challenge:", error);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent>Loading...</CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Players ({players.length})</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[70vh] overflow-y-auto">
        {players.map((player, index) => (
          <div key={player.user_id} className="flex justify-between items-center py-2 border-b">
            <div>
              {index + 1}. {player.name} - {player.score}/{player.totalQuestions} ({player.percentage}%)
            </div>
            {user && user.id !== player.user_id && (
              <Button onClick={() => handleChallenge(player.user_id)}>Challenge</Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
