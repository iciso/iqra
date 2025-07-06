"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/auth-context";

interface Player {
  name: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  user_id: string;
  avatar_url?: string;
}

const fallbackPlayers: Player[] = [
  {
    name: "Fallback User",
    score: 10,
    totalQuestions: 10,
    percentage: 100,
    user_id: "fallback-1",
    avatar_url: "",
  },
].filter((player) => !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.name));

export default function SimpleTopPlayers() {
  const { user } = useAuth();
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers(attempt = 1, maxAttempts = 3) {
      try {
        setLoading(true);
        console.log(`📊 Fetching simple top players... (attempt ${attempt})`);
        const { data, error } = await supabase
          .from("user_profiles")
          .select("id, username, full_name, total_score, total_questions, avatar_url")
          .not("username", "in", '("Test User","Build Time User","Demo User","test-1748153442262")')
          .order("total_score", { ascending: false });
        if (error) throw error;
        console.log("Raw players:", data);
        const filteredPlayers = data
          .filter((player) => !user || player.id !== user?.id)
          .map((player) => ({
            name: player.full_name || player.username || "Unknown User",
            score: player.total_score || 0,
            totalQuestions: player.total_questions || 0,
            percentage: player.total_questions > 0 ? Math.round((player.total_score / player.total_questions) * 100) : 0,
            user_id: player.id,
            avatar_url: player.avatar_url || "",
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
          challenger_id: user?.id,
          challenged_id: opponentId,
          created_at: new Date().toISOString(),
          expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days expiry
          status: "pending",
          question_count: 10,
          time_limit: 600,
          category: "General",
          difficulty: "Medium",
        });
      if (error) throw error;
      console.log(`✅ Challenge sent to user ${opponentId}`);
    } catch (error) {
      console.error("❌ Error sending challenge:", error);
    }
  };

  if (loading) {
    return (
      <Card className="bg-card border rounded-lg shadow-md">
        <CardContent>
          <Skeleton className="h-8 w-full mb-2" />
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full mb-2" />
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border rounded-lg shadow-md">
      <CardHeader>
        <CardTitle>Top Players ({players.length})</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[70vh] overflow-y-auto">
        <div className="grid grid-cols-5 gap-4 font-semibold border-b pb-2">
          <span>Rank</span>
          <span>Name</span>
          <span>Score</span>
          <span>Percentage</span>
          <span>Action</span>
        </div>
        {players.map((player, index) => (
          <div key={player.user_id} className="grid grid-cols-5 gap-4 items-center py-2 border-b">
            <span>{index + 1}</span>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={player.avatar_url} alt={player.name} />
                <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{player.name}</span>
              {index === 0 && <Trophy className="h-5 w-5 text-yellow-500" />}
              {index === 1 && <Medal className="h-5 w-5 text-gray-500" />}
              {index === 2 && <Award className="h-5 w-5 text-orange-500" />}
            </div>
            <span>{player.score}/{player.totalQuestions}</span>
            <span>{player.percentage}%</span>
            <span>
              {user && user.id !== player.user_id && (
                <Button variant="outline" size="sm" onClick={() => handleChallenge(player.user_id)}>
                  Challenge
                </Button>
              )}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
