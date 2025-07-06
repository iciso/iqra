"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, RefreshCw, Users, Database, Cloud } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/auth-context";
import CategoryFirstChallengeDialog from "./category-first-challenge-dialog";

interface Player {
  id: string;
  username: string;
  full_name?: string;
  total_score: number;
  best_percentage: number;
  avatar_url?: string;
}

const fallbackPlayers: Player[] = [
  {
    id: "aefe42f1-297b-4649-b664-934d37edc957",
    username: "ihmi",
    full_name: "India Hypertension Management Initiative Wayanad",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "",
  },
  {
    id: "871d3522-512b-4930-a9de-a092f2e33783",
    username: "rafique",
    full_name: "Mohamed Essa Rafique",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "",
  },
  {
    id: "9e599448-b4c8-4c8b-8b4a-1234567890ab",
    username: "feroza.rafique",
    full_name: "feroza.rafique",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "",
  },
  {
    id: "ddd8b850-1b56-4781-bd03-1be615f9e3ec",
    username: "drmurtazaa50",
    full_name: "Dr.Muhammad Murtaza Ikram",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "",
  },
  {
    id: "e299ae2c-9581-47eb-bb0e-daabf686b469",
    username: "aiesha",
    full_name: "aiesha waseem",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "",
  },
  {
    id: "83813437-5d7e-4aef-b915-96b99ac96fa0",
    username: "afsarkam1962",
    full_name: "KAM Afsar",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "",
  },
  {
    id: "8d46dbdc-3104-4de9-9735-a00c3aec1619",
    username: "joy",
    full_name: "Joy Ahmed",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "",
  },
  {
    id: "d3e5eba5-f706-4065-8639-797bd180f40d",
    username: "francis",
    full_name: "francis raj",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "",
  },
  {
    id: "7bdc8022-2a23-45db-a388-a2ea71a71b52",
    username: "hashim",
    full_name: "Hashim Mohammed",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "",
  },
  {
    id: "94e7149b-ce48-4d9a-8ee4-730698bc1bc5",
    username: "essa",
    full_name: "essa nilu",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "",
  },
].filter((player) => !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.username));

export default function SimpleTopPlayers() {
  const { user, loading: authLoading } = useAuth();
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [dataSource, setDataSource] = useState<string>("Loading...");
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const mountedRef = useRef(true);
  const loadingRef = useRef(false);
  const [challengeDialogOpen, setChallengeDialogOpen] = useState(false);
  const [selectedOpponent, setSelectedOpponent] = useState<Player | null>(null);

  const syncMissingProfiles = async () => {
    try {
      setSyncing(true);
      console.log("🔄 Attempting to sync missing user profiles...");
      const { data: testData, error: testError } = await Promise.race([
        supabase.from("user_profiles").select("count").limit(1),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Test query timeout")), 3000)),
      ]);
      if (testError) throw testError;
      console.log("✅ Database connection working, proceeding with sync...");
      const { data: authUsers, error: authError } = (await Promise.race([
        supabase.auth.admin.listUsers(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Auth query timeout")), 5000)),
      ])) as any;
      if (authError) throw authError;
      console.log("👥 Found auth users:", authUsers.users.length);
      const { data: existingProfiles, error: profilesError } = (await Promise.race([
        supabase.from("user_profiles").select("id"),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Profiles query timeout")), 5000)),
      ])) as any;
      if (profilesError) throw profilesError;
      const existingIds = new Set(existingProfiles?.map((p: any) => p.id) || []);
      console.log("📋 Existing profile IDs:", existingIds.size);
      const missingUsers = authUsers.users.filter((authUser: any) => !existingIds.has(authUser.id));
      console.log("🔍 Missing profiles for users:", missingUsers.length);
      if (missingUsers.length === 0) {
        console.log("✅ All users already have profiles");
        return;
      }
      const newProfiles = missingUsers.map((authUser: any) => ({
        id: authUser.id,
        username: authUser.user_metadata?.username || authUser.email?.split("@")[0] || "user",
        full_name: authUser.user_metadata?.full_name || authUser.user_metadata?.name || null,
        email: authUser.email,
        total_score: 0,
        best_percentage: 0,
        quiz_count: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }));
      console.log("➕ Creating profiles for:", newProfiles.map((p) => p.full_name || p.username));
      const { data: insertedProfiles, error: insertError } = (await Promise.race([
        supabase.from("user_profiles").insert(newProfiles).select(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Insert query timeout")), 10000)),
      ])) as any;
      if (insertError) throw insertError;
      console.log("✅ Successfully created profiles:", insertedProfiles?.length);
      loadPlayers();
    } catch (err: any) {
      console.error("❌ Sync error:", err);
      setError(`Sync failed: ${err.message}. Using fallback data.`);
    } finally {
      setSyncing(false);
    }
  };

  const loadPlayers = async () => {
    if (loadingRef.current) {
      console.log("🛑 Already loading players, skipping...");
      return;
    }
    try {
      loadingRef.current = true;
      setLoading(true);
      setError(null);
      setIsUsingFallback(false);
      console.log(`🏆 Loading top players... (attempt ${retryCount + 1})`);
      if (authLoading) {
        console.log("⏳ Waiting for auth to complete...");
        return;
      }
      console.log("🔍 Step 1: Auth ready, trying Supabase...");
      const limit = showAll ? 50 : 10;
      try {
        const { data, error } = (await Promise.race([
          supabase
            .from("user_profiles")
            .select("id, username, full_name, total_score, best_percentage, avatar_url")
            .not("username", "in", '("Test User","Build Time User","Demo User","test-1748153442262")')
            .order("total_score", { ascending: false })
            .order("best_percentage", { ascending: false })
            .order("total_questions", { ascending: false })
            .limit(limit),
          new Promise((_, reject) => setTimeout(() => reject(new Error("Supabase query timeout")), 3000)),
        ])) as any;
        if (error) throw error;
        if (data && data.length > 0) {
          console.log(`✅ Players loaded from Supabase: ${data.length} players`, data.map((p: any) => p.full_name));
          if (mountedRef.current) {
            setPlayers(data.filter((p: Player) => !user || p.id !== user?.id));
            setDataSource("Supabase");
            setIsUsingFallback(false);
          }
          return;
        }
      } catch (supabaseError) {
        console.error("❌ Supabase error:", supabaseError);
      }
      console.log("🔍 Step 2: Trying Neon fallback...");
      try {
        const neonPlayers = await Promise.race([
          import("@/lib/neon-fallback").then((module) => module.getTopPlayersFromFallback(limit)),
          new Promise<null>((_, reject) => setTimeout(() => reject(new Error("Neon query timeout")), 3000)),
        ]);
        if (neonPlayers && neonPlayers.length > 0) {
          console.log(`✅ Players loaded from Neon: ${neonPlayers.length} players`);
          if (mountedRef.current) {
            setPlayers(neonPlayers.filter((p: Player) => !user || p.id !== user?.id));
            setDataSource("Neon");
            setIsUsingFallback(false);
          }
          return;
        }
      } catch (neonError) {
        console.error("❌ Neon error:", neonError);
      }
      console.log("🔍 Step 3: Getting actual leaderboard data...");
      try {
        const leaderboardResult = await Promise.race([
          import("@/lib/database-with-fallback").then((module) => module.getLeaderboardWithFallback()),
          new Promise<null>((_, reject) => setTimeout(() => reject(new Error("Leaderboard query timeout")), 3000)),
        ]);
        if (leaderboardResult && leaderboardResult.data && leaderboardResult.data.length > 0) {
          const leaderboardPlayers = leaderboardResult.data
            .filter((entry: any) => entry.user_id && (!user || entry.user_id !== user?.id))
            .map((entry: any) => ({
              id: entry.user_id,
              username: entry.name.split(" ")[0].toLowerCase(),
              full_name: entry.name,
              total_score: entry.score,
              best_percentage: entry.percentage,
              avatar_url: entry.avatar_url || "",
            }));
          console.log(`✅ Players loaded from leaderboard: ${leaderboardPlayers.length} players`);
          if (mountedRef.current) {
            setPlayers(leaderboardPlayers.slice(0, limit));
            setDataSource("Live Leaderboard");
            setIsUsingFallback(false);
          }
          return;
        }
      } catch (leaderboardError) {
        console.error("❌ Leaderboard error:", leaderboardError);
      }
      console.log("🔍 Step 4: Using registered users as final fallback...");
      if (mountedRef.current) {
        console.log(`✅ Using registered users as fallback: ${fallbackPlayers.length} users`);
        setPlayers(fallbackPlayers.filter((p) => !user || p.id !== user?.id));
        setDataSource("Registered Users");
        setIsUsingFallback(true);
      }
    } catch (err: any) {
      console.error("❌ Load error:", err.message);
      if (mountedRef.current) {
        console.log("🔄 Using registered users as fallback data");
        setPlayers(fallbackPlayers.filter((p) => !user || p.id !== user?.id));
        setDataSource("Registered Users");
        setIsUsingFallback(true);
        setError(null);
      }
      if (retryCount < 2 && mountedRef.current) {
        const delay = (retryCount + 1) * 2000;
        console.log(`🔄 Will retry in ${delay}ms... (attempt ${retryCount + 1}/2)`);
        setTimeout(() => {
          if (mountedRef.current) {
            setRetryCount(retryCount + 1);
            loadingRef.current = false;
            loadPlayers();
          }
        }, delay);
      }
    } finally {
      if (mountedRef.current) {
        setLoading(false);
      }
      loadingRef.current = false;
    }
  };

  const handleChallenge = (player: Player) => {
    console.log("Challenge button clicked for:", player.id, { userId: user?.id });
    setSelectedOpponent(player);
    setChallengeDialogOpen(true);
  };

  const handleRetry = () => {
    console.log("🔄 Manual retry triggered by user");
    loadingRef.current = false;
    setLoading(false);
    setRetryCount(0);
    loadPlayers();
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setTimeout(() => loadPlayers(), 100);
  };

  const getSourceIcon = () => {
    if (dataSource.includes("Supabase")) return <Cloud className="h-4 w-4" />;
    if (dataSource.includes("Neon")) return <Database className="h-4 w-4" />;
    return <Users className="h-4 w-4" />;
  };

  const getSourceColor = () => {
    if (dataSource.includes("Supabase")) return "bg-green-100 text-green-800";
    if (dataSource.includes("Neon")) return "bg-blue-100 text-blue-800";
    return "bg-purple-100 text-purple-800";
  };

  useEffect(() => {
    console.log("🚀 SimpleTopPlayers component mounted");
    mountedRef.current = true;
    if (!authLoading) {
      console.log("✅ Auth is ready, loading players...");
      loadPlayers();
    }
    return () => {
      console.log("🚫 SimpleTopPlayers component unmounting");
      mountedRef.current = false;
    };
  }, [authLoading]);

  useEffect(() => {
    if (!authLoading && user && mountedRef.current) {
      console.log("🔄 Auth state changed, reloading players...");
      loadPlayers();
    }
  }, [user, authLoading]);

  useEffect(() => {
    if (!authLoading && mountedRef.current) {
      loadPlayers();
    }
  }, [showAll]);

  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      if (loading && mountedRef.current) {
        console.log("⚠️ Safety timeout triggered - forcing fallback data");
        setPlayers(fallbackPlayers.filter((p) => !user || p.id !== user?.id));
        setDataSource("Registered Users");
        setIsUsingFallback(true);
        setLoading(false);
        loadingRef.current = false;
      }
    }, 5000);
    return () => clearTimeout(safetyTimeout);
  }, [loading, user]);

  if (authLoading || (loading && retryCount === 0)) {
    return (
      <div className="max-w-6xl mx-auto px-4">
        <Card className="bg-card border rounded-lg shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Top Players
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 w-full overflow-x-hidden">
            <div className="flex justify-center py-4">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent"></div>
              <span className="ml-2 text-sm">{authLoading ? "Initializing..." : "Loading top players..."}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const cardTitle = isUsingFallback
    ? `Registered Users (${players.length})`
    : showAll
    ? `All Players (${players.length})`
    : `Top Players (${players.length})`;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Card className="bg-card border rounded-lg shadow-md">
        <CardHeader className="px-6 py-4">
          <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span>{cardTitle}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${getSourceColor()}`}>
                {getSourceIcon()}
                <span className="hidden xs:inline">{dataSource}</span>
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={syncMissingProfiles}
                disabled={syncing}
                title="Sync missing user profiles from auth"
                className="h-8 w-8 p-0"
              >
                <Database className={`h-4 w-4 ${syncing ? "animate-spin" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleShowAll}
                title={showAll ? "Show top players only" : "Show all players"}
                className="h-8 w-8 p-0"
              >
                <Users className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRetry}
                disabled={loading}
                className="h-8 w-8 p-0"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 w-full overflow-x-hidden">
          {players.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-gray-500 mb-2 text-sm">No players found</p>
              <Button size="sm" onClick={syncMissingProfiles} disabled={syncing} className="text-xs">
                {syncing ? "Syncing..." : "Sync User Profiles"}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-[40px_2fr_1fr_1fr_1fr] gap-4 text-sm">
              <span className="font-semibold text-left">Rank</span>
              <span className="font-semibold text-left">Name</span>
              <span className="font-semibold text-center">Score</span>
              <span className="font-semibold text-center">Percentage</span>
              <span className="font-semibold text-center">Action</span>
              {players.map((player, index) => (
                <div
                  key={player.id}
                  className="grid grid-cols-[40px_2fr_1fr_1fr_1fr] gap-4 items-center py-2 border-b"
                >
                  <span className="text-left">{isUsingFallback ? "-" : index + 1}</span>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={player.avatar_url || "/placeholder.svg"} alt={player.full_name || player.username} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {(player.full_name || player.username).charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate max-w-[300px]">{player.full_name || player.username}</span>
                    {index === 0 && !isUsingFallback && <Trophy className="h-5 w-5 text-yellow-500" />}
                  </div>
                  <span className="text-center">{isUsingFallback ? "-" : `${player.total_score} pts`}</span>
                  <span className="text-center">{isUsingFallback ? "-" : `${player.best_percentage}%`}</span>
                  <span className="text-center">
                    {user && user.id && user.id !== player.id ? (
                      <Button
                        size="sm"
                        onClick={() => {
                          console.log("Challenge button clicked for:", player.id, { userId: user.id });
                          handleChallenge(player);
                        }}
                        className="h-8 px-3 bg-green-600 hover:bg-green-700 text-xs"
                      >
                        Challenge
                      </Button>
                    ) : (
                      <span>-</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        {selectedOpponent && (
          <CategoryFirstChallengeDialog
            isOpen={challengeDialogOpen}
            onClose={() => {
              setChallengeDialogOpen(false);
              setSelectedOpponent(null);
            }}
            opponent={selectedOpponent}
          />
        )}
      </Card>
    </div>
  );
}
