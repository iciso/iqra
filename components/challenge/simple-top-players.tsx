"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";  
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, RefreshCw, Search, Users, Database } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/auth-context";
import CategoryFirstChallengeDialog from "./category-first-challenge-dialog";
import { searchUsers, getTopPlayers } from "@/lib/supabase-queries";
import { Input } from "@/components/ui/input";

interface Player {
  id: string;
  username: string;
  full_name?: string;
}

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
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const shouldRefresh = searchParams.get("refresh") === "true";

  const fallbackPlayers: Player[] = [
    { id: "83813437-5d7e-4aef-b915-96b99ac96fa0", username: "afsarkam1962", full_name: "KAM Afsar" },
    { id: "cc6504c4-8efd-442a-aadc-7b44e7da02f8", username: "ebahammed", full_name: "E Basheer Ahammed" },
    { id: "aefe42f1-297b-4649-b664-934d37edc957", username: "ihmi", full_name: "IHMIW" },
    { id: "9e599448-b4c8-4c8b-8b4a-1234567890ab", username: "feroza.rafique", full_name: "feroza.rafique" },
    { id: "ddd8b850-1b56-4781-bd03-1be615f9e3ec", username: "drmurtazaa50", full_name: "Dr.Muhammad Murtaza Ikram" },
    { id: "e299ae2c-9581-47eb-bb0e-daabf686b469", username: "aiesha", full_name: "aiesha waseem" },
    { id: "8d46dbdc-3104-4de9-9735-a00c3aec1619", username: "joy", full_name: "Joy Ahmed" },
    { id: "7bdc8022-2a23-45db-a388-a2ea71a71b52", username: "hashim", full_name: "Hashim Mohammed" },
    { id: "871d3522-512b-4930-a9de-a092f2e33783", username: "rafique", full_name: "Mohamed Essa Rafique" },
    { id: "94e7149b-ce48-4d9a-8ee4-730698bc1bc5", username: "essa", full_name: "essa nilu" },
  ].filter((player) => !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.username));

  const syncMissingProfiles = async () => {
    try {
      setSyncing(true);
      console.log("?? Attempting to sync missing user profiles...");

      const response = await fetch("/api/sync-profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Sync failed");

      console.log("? Sync successful:", result.message);
      loadPlayers();
    } catch (err: any) {
      console.error("? Sync error:", err.message);
      alert(`Sync failed: ${err.message}. Using fallback data.`);
    } finally {
      setSyncing(false);
    }
  };

  const loadPlayers = async () => {
    if (loadingRef.current) {
      console.log("?? Already loading players, skipping...");
      return;
    }

    try {
      loadingRef.current = true;
      setLoading(true);
      setError(null);
      setIsUsingFallback(false);
      console.log("?? Loading top players... (attempt", retryCount + 1, ")");

      if (authLoading) {
        console.log("? Waiting for auth to complete...");
        return;
      }

      console.log("?? Step 1: Auth ready, trying Supabase...");

      const limit = showAll ? 30 : 10;

      const queryFn = searchTerm
        ? () => searchUsers(searchTerm, limit)
        : () => getTopPlayers(limit);
      const queryResult = await Promise.race([
        queryFn(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Supabase query timeout")), 10000)),
      ]);

      const { data, error } = queryResult as any;
      if (error) throw error;

      if (data && data.length > 0) {
        console.log("? Players loaded from Supabase:", data.length, "players");
        const validPlayers = data
          .filter(
            (player: any) =>
              player.id &&
              player.username &&
              !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.username)
          )
          .map((player: any) => ({
            id: player.id,
            username: player.username,
            full_name: player.full_name,
          }));
        if (mountedRef.current) {
          setPlayers(validPlayers);
          setDataSource("Supabase");
          setIsUsingFallback(false);
        }
        return;
      }
    } catch (err: any) {
      console.error("? Load error:", err.message);

      if (mountedRef.current) {
        console.log("?? Using registered users as fallback data");
        setPlayers(fallbackPlayers);
        setDataSource("Registered Users");
        setIsUsingFallback(true);
        setError(null);
      }

      if (retryCount < 2 && mountedRef.current) {
        const delay = (retryCount + 1) * 2000;
        console.log(`?? Will retry in ${delay}ms... (attempt ${retryCount + 1}/2)`);
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

  const resetLoadingState = () => {
    console.log("?? Resetting loading state...");
    loadingRef.current = false;
    setLoading(false);
    setRetryCount(0);
  };

  const handleChallenge = (player: Player) => {
    setSelectedOpponent(player);
    setChallengeDialogOpen(true);
  };

  const handleRetry = () => {
    console.log("?? Manual retry triggered by user");
    resetLoadingState();
    loadPlayers();
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setTimeout(() => loadPlayers(), 100);
  };

  const getSourceIcon = () => {
    if (dataSource.includes("Supabase")) return <Database className="h-4 w-4" />;
    return <Users className="h-4 w-4" />;
  };

  const getSourceColor = () => {
    if (dataSource.includes("Supabase")) return "bg-blue-100 text-blue-800";
    return "bg-purple-100 text-purple-800";
  };

  useEffect(() => {
    console.log("?? SimpleTopPlayers component mounted");
    mountedRef.current = true;

    if (!authLoading) {
      console.log("? Auth is ready, loading players...");
      loadPlayers();
    } else {
      const timeout = setTimeout(() => {
        console.log("Auth loading timeout - forcing completion");
        loadPlayers();
      }, 3000);
      return () => clearTimeout(timeout);
    }

    return () => {
      console.log("?? SimpleTopPlayers component unmounting");
      mountedRef.current = false;
    };
  }, [authLoading]);

  useEffect(() => {
    if (!authLoading && user && mountedRef.current) {
      console.log("?? Auth state changed, reloading players...");
      loadPlayers();
    }
  }, [user, authLoading]);

  useEffect(() => {
    if (!authLoading && mountedRef.current && shouldRefresh) {
      console.log("?? Refresh triggered, reloading players...");
      loadPlayers();
    }
  }, [shouldRefresh, authLoading]);

  useEffect(() => {
    if (!authLoading && mountedRef.current) {
      loadPlayers();
    }
  }, [showAll, searchTerm]);

  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      if (loading && mountedRef.current) {
        console.log("?? Safety timeout triggered - forcing fallback data");
        setPlayers(fallbackPlayers);
        setDataSource("Registered Users");
        setIsUsingFallback(true);
        setLoading(false);
        loadingRef.current = false;
      }
    }, 5000);

    return () => clearTimeout(safetyTimeout);
  }, [loading]);

  if (authLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Top Players
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent"></div>
            <span className="ml-2 text-sm">Initializing...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (loading && retryCount === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Top Players
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-yellow-500 border-t-transparent"></div>
            <span className="ml-2 text-sm">Loading top players...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  const cardTitle = isUsingFallback
    ? `All Players (${players.length})`
    : showAll
    ? `All Players (${players.length})`
    : `Top Players (${players.length})`;

  return (
    <Card>
      <CardHeader className="px-3 md:px-6 py-4">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 md:gap-2">
              <Trophy className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
              <span className="text-sm md:text-base">{cardTitle}</span>
            </div>
            <span className={`text-xs px-1 md:px-2 py-0.5 md:py-1 rounded flex items-center gap-1 ${getSourceColor()}`}>
              {getSourceIcon()}
              <span className="hidden xs:inline">{dataSource}</span>
            </span>
          </div>
          <div className="flex gap-1 md:gap-2">
            <Input
              placeholder="🔎 Search User..."
              className="pl-7 text-sm h-7 md:h-8 w-32 md:w-40"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="outline"
              size="sm"
              onClick={syncMissingProfiles}
              disabled={syncing}
              title="Sync missing user profiles from auth"
              className="h-7 w-7 md:h-8 md:w-8 p-0"
            >
              <Database className={`h-3 w-3 md:h-4 md:w-4 ${syncing ? "animate-spin" : ""}`} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleShowAll}
              title={showAll ? "Show top players only" : "Show all players"}
              className="h-7 w-7 md:h-8 md:w-8 p-0"
            >
              <Users className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRetry}
              disabled={loading}
              className="h-7 w-7 md:h-8 md:w-8 p-0"
            >
              <RefreshCw className={`h-3 w-3 md:h-4 md:w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 md:px-6 py-2 md:py-4">
        {players.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-gray-500 mb-2 text-sm">No players found</p>
            <Button size="sm" onClick={syncMissingProfiles} disabled={syncing} className="text-xs">
              {syncing ? "Syncing..." : "Sync User Profiles"}
            </Button>
          </div>
        ) : (
          <div className="space-y-2 md:space-y-3 max-h-80 md:max-h-96 overflow-y-auto">
            {players.map((player, index) => (
              <div key={player.id} className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                  {!isUsingFallback && (
                    <span className="w-5 md:w-6 text-xs md:text-sm font-medium text-gray-500">{index + 1}</span>
                  )}
                  <Avatar className="h-7 w-7 md:h-8 md:w-8 flex-shrink-0">
                    <AvatarFallback className="bg-blue-100 text-blue-700 text-xs md:text-sm">
                      {(player.full_name || player.username).charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-xs md:text-sm truncate">{player.full_name || player.username}</p>
                    <p className="text-xs text-gray-500 hidden xs:block">
                      {isUsingFallback ? "Registered User" : "Player"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                  {user && user.id !== player.id && (
                    <Button
                      size="sm"
                      onClick={() =>
                        handleChallenge({
                          id: player.id,
                          username: player.username,
                          full_name: player.full_name,
                        })
                      }
                      className="h-7 md:h-8 py-0 px-2 md:px-3 text-xs bg-green-600 hover:bg-green-700"
                    >
                      Challenge
                    </Button>
                  )}
                </div>
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
  );
}
