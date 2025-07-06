"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface Player {
  id: string;
  username: string;
  full_name?: string;
  total_score: number;
  total_questions: number;
  avatar_url?: string;
}

const fallbackPlayers: Player[] = [
  {
    id: "fallback-1",
    username: "Fallback User",
    full_name: "Fallback User",
    total_score: 10,
    total_questions: 10,
    avatar_url: "",
  },
].filter((player) => !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.username));

export default function TopPlayers() {
  const { user } = useAuth();
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("User from useAuth:", user);
    async function fetchPlayers(attempt = 1, maxAttempts = 3) {
      try {
        setLoading(true);
        console.log(`🏆 Loading top players... (attempt ${attempt})`);
        const { data, error } = await supabase
          .from("user_profiles")
          .select("id, username, full_name, total_score, total_questions, avatar_url")
          .not("username", "in", '("Test User","Build Time User","Demo User","test-1748153442262")')
          .order("total_score", { ascending: false });
        if (error) throw error;
        console.log("Raw players:", data);
        const filteredPlayers = data
          .filter((player: Player) => !user || player.id !== user?.id)
          .map((player: Player) => ({
            id: player.id,
            username: player.username,
            full_name: player.full_name || player.username,
            total_score: player.total_score || 0,
            total_questions: player.total_questions || 0,
            avatar_url: player.avatar_url || "",
          }));
        console.log(`✅ Players loaded from Supabase: ${filteredPlayers.length} players`, filteredPlayers.map(p => p.full_name));
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
      toast.success(`Challenge sent to ${players.find(p => p.id === opponentId)?.full_name || "opponent"}!`);
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

  if (players.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>All Players (0)</CardTitle>
          </CardHeader>
          <CardContent className="p-6 w-full overflow-x-hidden">
            <p>No players found</p>
            <Button onClick={() => fetchPlayers()}>Sync User Profiles</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-card border rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>All Players ({players.length})</CardTitle>
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
              key={player.id}
              className="grid grid-cols-[50px_2fr_1fr_1fr_1fr] gap-4 items-center py-2 border-b text-sm"
            >
              <span className="text-left">{index + 1}</span>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={player.avatar_url || "/placeholder.svg"} alt={player.full_name} />
                  <AvatarFallback className="bg-primary/10 text-primary">{player.full_name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="truncate max-w-[300px]">{player.full_name}</span>
                {index === 0 && <Trophy className="h-5 w-5 text-yellow-500" />}
                {index === 1 && <Medal className="h-5 w-5 text-gray-500" />}
                {index === 2 && <Award className="h-5 w-5 text-orange-500" />}
              </div>
              <span className="text-center">{player.total_score}/{player.total_questions}</span>
              <span className="text-center">{Math.round((player.total_score / player.total_questions) * 100) || 0}%</span>
              <span className="text-center">
                {user && user.id && user.id !== player.id ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      console.log("Challenge button clicked for:", player.id, { userId: user.id });
                      handleChallenge(player.id);
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
