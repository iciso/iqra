import { neon } from "@neondatabase/serverless";

export async function getLeaderboardFromFallback() {
  console.log("📊 Fetching leaderboard from Neon...");
  try {
    const sql = neon(process.env.iqra_DATABASE_URL!);
    const neonData = await sql`
      SELECT * FROM user_profiles
      WHERE username NOT IN ('Test User', 'Build Time User', 'Demo User', 'test-1748153442262')
      ORDER BY total_score DESC
    `;
    const leaderboard = neonData.map((player) => ({
      name: player.full_name || player.username || "Unknown User",
      score: player.total_score || 0,
      totalQuestions: player.total_questions || 0,
      percentage: player.total_questions > 0 ? Math.round((player.total_score / player.total_questions) * 100) : 0,
      date: new Date().toLocaleDateString(),
      category: "All Categories",
      challenge: "all",
      user_id: player.id,
    }));
    console.log(`✅ Retrieved ${leaderboard.length} entries from Neon`);
    return { data: leaderboard, source: "Neon Database" };
  } catch (error) {
    console.error("❌ Neon error:", error);
    console.log("🔄 Using fallback players");
    const fallbackPlayers = [
      {
        name: "Fallback User",
        score: 10,
        totalQuestions: 10,
        percentage: 100,
        date: new Date().toLocaleDateString(),
        category: "All Categories",
        challenge: "all",
      },
    ].filter((player) => !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.name));
    return { data: fallbackPlayers, source: "Fallback Data" };
  }
}
