"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Player {
  name: string;
  score: number;
  totalQuestions: number;
  percentage: number;
}

const fallbackPlayers: Player[] = [
  {
    name: "Fallback User",
    score: 10,
    totalQuestions: 10,
    percentage: 100,
  },
].filter((player) => !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.name));

export default function SimpleTopPlayers() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        setLoading(true);
        console.log("📊 Fetching simple top players...");
        const { data, error } = await supabase
          .from("user_profiles")
          .select("*")
          .not("username", "in", '("Test User","Build Time User","Demo User","test-1748153442262")')
          .order("total_score", { ascending: false })
          .timeout(10000);
        if (error) throw error;
        console.log("Raw players:", data);
        const filteredPlayers = data.map((player) => ({
          name: player.full_name || player.username || "Unknown User",
          score: player.total_score || 0,
          totalQuestions: player.total_questions || 0,
          percentage: player.total_questions > 0 ? Math.round((player.total_score / player.total_questions) * 100) : 0,
        }));
        console.log(`✅ Players loaded from Supabase: ${filteredPlayers.length} players`);
        setPlayers(filteredPlayers.length > 0 ? filteredPlayers : fallbackPlayers);
      } catch (error) {
        console.error("❌ Supabase error:", error);
        console.log("🔄 Using fallback players");
        setPlayers(fallbackPlayers);
      } finally {
        setLoading(false);
      }
    }
    fetchPlayers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {players.map((player, index) => (
        <div key={index}>
          {index + 1}. {player.name} - {player.score}/{player.totalQuestions} ({player.percentage}%)
        </div>
      ))}
    </div>
  );
}
