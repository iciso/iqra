"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";

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
    console.log("User from useAuth:", user);
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
    if (!user?.id) {
      console.error("❌ No user ID for challenge");
      toast.error("Please log in to send a challenge");
      return;
    }
    console.log(`Attempting to challenge user ${opponentId}`);
    try {
      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;
      console.log("Access token:", token ? "Present" : "Missing");
      if (!token) {
        throw new Error("No access token available");
      }

      const response = await fetch("/api/challenges/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          challengedId: opponentId,
          category: "General",
          difficulty: "Medium",
          questionCount: 10,
          timeLimit: 600,
        }),
      });

      const result = await response.json();
      console.log("API response:", result);
      if (!response.ok) {
        throw new Error(result.error || "Failed to create challenge");
      }

      console.log(`✅ Challenge sent to user ${opponentId}`, result);
      toast.success(`Challenge sent to ${players.find(p => p.user_id === opponentId)?.name || "opponent"}!`);
    } catch (error: any) {
      console.error("❌ Error sending challenge:", error.message);
      toast.error(`Failed to send challenge: ${error.message}`);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border rounded-lg shadow-md">
          <CardContent className="p-6 w-full overflow-x-hidden">
            <Skeleton className="h-8 w-full mb-4" />
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full mb-2" />
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-card border rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Top Players ({players.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-6 w-full overflow-x-hidden">
          <div className="grid grid-cols-[50px_2fr_1fr_1fr_1fr] gap-4 font-semibold border-b pb-2 text-sm">
            <span className="text-left">Rank</span>
            <span className="text-left">Name</span>
            <span className="text-center">Score</span>
            <span className="text-center">Percentage</span>
            <span className="text-center">Action</span>
          </div>
          {players.map((player, index) => (
            <div
              key={player.user_id}
              className="grid grid-cols-[50px_2fr_1fr_1fr_1fr] gap-4 items-center py-2 border-b text-sm"
            >
              <span className="text-left">{index + 1}</span>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={player.avatar_url || "/placeholder.svg"} alt={player.name} />
                  <AvatarFallback className="bg-primary/10 text-primary">{player.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="truncate max-w-[300px]">{player.name}</span>
                {index === 0 && <Trophy className="h-5 w-5 text-yellow-500" />}
                {index === 1 && <Medal className="h-5 w-5 text-gray-500" />}
                {index === 2 && <Award className="h-5 w-5 text-orange-500" />}
              </div>
              <span className="text-center">{player.score}/{player.totalQuestions}</span>
              <span className="text-center">{player.percentage}%</span>
              <span className="text-center">
                {user && user.id && user.id !== player.user_id ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      console.log("Challenge button clicked for:", player.user_id, { userId: user.id });
                      handleChallenge(player.user_id);
                    }}
                    className="text-primary border-primary hover:bg-primary/10"
                  >
                    Challenge
                  </Button>
                ) : (
                  <span>-</span>
                )}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
