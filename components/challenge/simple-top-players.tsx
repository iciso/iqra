"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, RefreshCw, Users, Database, Cloud } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/auth-context";
import CategoryFirstChallengeDialog from "./category-first-challenge-dialog";
import {toast} from "@/hooks/use-toast";

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
    id: "fallback-1",
    username: "Player1",
    full_name: "Ahmad Abdullah",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "/placeholder.svg",
  },
  {
    id: "fallback-2",
    username: "Player2",
    full_name: "Fatima Zainab",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "/placeholder.svg",
  },
  {
    id: "fallback-3",
    username: "Player3",
    full_name: "Yusuf Ibrahim",
    total_score: 0,
    best_percentage: 0,
    avatar_url: "/placeholder.svg",
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
    if (syncing) return;
    setSyncing(true);
    try {
      console.log("🔄 Syncing missing profiles...");
      const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();
      if (authError) throw authError;

      const { data: existingProfiles, error: profileError } = await supabase
        .from("user_profiles")
        .select("id");
      if (profileError) throw profileError;

      const existingIds = new Set(existingProfiles.map((p) => p.id));
      const missingUsers = authUsers.users.filter((u) => !existingIds.has(u.id) && u.email);

      for (const missingUser of missingUsers) {
        await supabase.from("user_profiles").insert({
          id: missingUser.id,
          username: missingUser.email?.split("@")[0] || `user_${missingUser.id.slice(0, 8)}`,
          email: missingUser.email,
          created_at: new Date().toISOString(),
        });
      }
      console.log(`✅ Synced ${missingUsers.length} missing profiles`);
      toast({
        title: "Profiles Synced",
        description: `Successfully synced ${missingUsers.length} user profiles`,
      });
      await loadPlayers();
    } catch (error: any) {
      console.error("❌ Error{error} syncing profiles:", error);
      toast({
        title: "Error",
        description: "Failed to sync profiles",
        variant: "destructive",
      });
    } finally {
      setSyncing(false);
    }
  };

  const loadPlayers = async () => {
    if (loadingRef.current) {
      console.log("🛑 Already loading players, skipping...");
      return;
    }
    loadingRef.current = true;
    setLoading(true);
    setError(null);
    console.log(`🏆 Loading top players... (attempt ${retryCount + 1})`);

    try {
      console.log("🔍 Step 1: Auth ready, trying Supabase...");
      const { data, error } = await supabase
        .from("user_profiles")
        .select("id, username, full_name, total_score, best_percentage, avatar_url")
        .order("total_score", { ascending: false })
        .limit(showAll ? 100 : 10);

      if (error) throw error;

      const validPlayers = data.filter(
        (player: Player) =>
          player.id &&
          player.username &&
          !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.username)
      );

      console.log(`✅ Players loaded from Supabase: ${validPlayers.length} players`, validPlayers);

      if (validPlayers.length === 0 && retryCount < 3) {
        console.log("🔄 No players found, retrying...");
        setRetryCount((prev) => prev + 1);
        setTimeout(() => loadPlayers(), 1000);
        return;
      }

      setPlayers(validPlayers.length > 0 ? validPlayers : fallbackPlayers);
      setDataSource(validPlayers.length > 0 ? "Supabase" : "Fallback Data");
      setIsUsingFallback(validPlayers.length === 0);
    } catch (error: any) {
      console.error("❌ Error loading players:", error);
      setError(error.message || "Failed to load players");
      setPlayers(fallbackPlayers);
      setDataSource("Fallback Data");
      setIsUsingFallback(true);

      if (retryCount < 3) {
        console.log(`🔄 Retrying... (attempt ${retryCount + 2})`);
        setRetryCount((prev) => prev + 1);
        setTimeout(() => loadPlayers(), 1000);
      }
    } finally {
      loadingRef.current = false;
      setLoading(false);
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
    return isUsingFallback ? (
      <Cloud className="h-3 w-3" />
    ) : (
      <Database className="h-3 w-3" />
    );
  };

  const getSourceColor = () => {
    return isUsingFallback ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800";
  };

  useEffect(() => {
    console.log("🚀 SimpleTopPlayers component mounted");
    return () => {
      console.log("🚫 SimpleTopPlayers component unmounting");
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!authLoading && mountedRef.current) {
      loadPlayers();
    }
  }, [authLoading]);

  useEffect(() => {
    if (!authLoading && user && mountedRef.current) {
      loadPlayers();
    }
  }, [user, authLoading]);

  useEffect(() => {
    if (!authLoading && mountedRef.current) {
      loadPlayers();
    }
  }, [showAll]);

  useEffect(() => {
    if (!authLoading && loading && mountedRef.current) {
      loadPlayers();
    }
  }, [loading, user]);

  if (authLoading || (loading && retryCount === 0)) {
    return (
      <div className="max-w-6xl mx-auto px-4">
        <Card className="bg-card border rounded-lg shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <Trophy className="h-6 w-6 text-yellow-500" />
              Top Players
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 w-full overflow-x-hidden">
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Card className="bg-card border rounded-lg shadow-md">
        <CardHeader className="px-6 py-4">
          <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-yellow-500" />
                <span className="text-2xl font-bold">{cardTitle}</span>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 ${getSourceColor()}`}>
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
                className="h-9 px-3"
              >
                <Database className={`h-4 w-4 ${syncing ? "animate-spin" : ""}`} />
                <span className="ml-2 hidden sm:inline">Sync</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleShowAll}
                title={showAll ? "Show top players only" : "Show all players"}
                className="h-9 px-3"
              >
                <Users className="h-4 w-4" />
                <span className="ml-2 hidden sm:inline">{showAll ? "Top 10" : "All"}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRetry}
                disabled={loading}
                className="h-9 px-3"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                <span className="ml-2 hidden sm:inline">Refresh</span>
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 w-full overflow-x-hidden">
          {players.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-gray-500 mb-4 text-base">No players found</p>
              <Button size="sm" onClick={syncMissingProfiles} disabled={syncing} className="bg-green-600 hover:bg-green-700">
                {syncing ? "Syncing..." : "Sync User Profiles"}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-[40px_minmax(200px,2fr)_100px_100px_100px] gap-4 text-base items-center">
              <span className="font-semibold text-left">Rank</span>
              <span className="font-semibold text-left">Name</span>
              <span className="font-semibold text-center">Score</span>
              <span className="font-semibold text-center">Percentage</span>
              <span className="font-semibold text-center">Action</span>
              {players.map((player, index) => (
                <div
                  key={player.id}
                  className={`grid grid-cols-[40px_minmax(200px,2fr)_100px_100px_100px] gap-4 items-center py-3 border-b ${
                    index === 0 && !isUsingFallback ? "bg-yellow-50" : ""
                  }`}
                >
                  <span className="text-left font-medium">{isUsingFallback ? "-" : index + 1}</span>
                  <div className="flex items-center gap-3 min-w-0">
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarImage src={player.avatar_url || "/placeholder.svg"} alt={player.full_name || player.username} />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {(player.full_name || player.username).charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate min-w-0 text-base">{player.full_name || player.username}</span>
                    {index === 0 && !isUsingFallback && <Trophy className="h-5 w-5 text-yellow-500 flex-shrink-0" />}
                  </div>
                  <span className="text-center font-medium">{isUsingFallback ? "-" : `${player.total_score} pts`}</span>
                  <span className="text-center font-medium">{isUsingFallback ? "-" : `${player.best_percentage.toFixed(2)}%`}</span>
                  <span className="text-center">
                    {user && user.id && user.id !== player.id ? (
                      <Button
                        size="sm"
                        onClick={() => handleChallenge(player)}
                        className="h-9 px-4 bg-green-600 hover:bg-green-700 text-sm font-medium"
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
