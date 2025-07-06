"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Player {
  id: string;
  username: string;
  full_name?: string;
  total_score: number;
  total_questions: number;
}

const fallbackPlayers: Player[] = [
  {
    id: "fallback-1",
    username: "Fallback User",
    full_name: "Fallback User",
    total_score: 10,
    total_questions: 10,
  },
].filter((player) => !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.username));

export default function TopPlayers({ user }: { user: any }) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers(attempt = 1, maxAttempts = 3) {
      try {
        setLoading(true);
        console.log(`🏆 Loading top players... (attempt ${attempt})`);
        const { data, error } = await supabase
          .from("user_profiles")
          .select("*")
          .not("username", "in", '("Test User","Build Time User","Demo User","test-1748153442262")')
          .order("total_score", { ascending: false });
        if (error) throw error;
        console.log("Raw players:", data);
        const filteredPlayers = data
          .filter((player: Player) => (!user || player.id !== user.id) && !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.username))
          .map((player: Player) => ({
            id: player.id,
            username: player.username,
            full_name: player.full_name || player.username,
            total_score: player.total_score || 0,
            total_questions: player.total_questions || 0,
          }));
        console.log(`✅ Players loaded from Supabase: ${filteredPlayers.length} players`, filteredPlayers.map(p => p.username));
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

  if (loading) {
    return (
      <Card>
        <CardContent>Loading...</CardContent>
      </Card>
    );
  }

  if (players.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>All Players (0)</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No players found</p>
          <button onClick={() => fetchPlayers()}>Sync User Profiles</button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Players ({players.length})</CardTitle>
      </CardHeader>
      <CardContent>
        {players.map((player, index) => (
          <div key={player.id}>
            {index + 1}. {player.full_name} - {player.total_score}/{player.total_questions}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
