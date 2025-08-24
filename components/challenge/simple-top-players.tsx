"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, RefreshCw, Users, Database, Cloud } from "lucide-react";
import { supabase } from "@/lib/supabase-client";
import { useAuth } from "@/contexts/auth-context";
import CategoryFirstChallengeDialog from "./category-first-challenge-dialog";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Player {
  id: string;
  username: string;
  full_name?: string;
  total_score: number;
  best_percentage: number;
}

interface SimpleTopPlayersProps {
  params: { lang: string };
}

function ChallengeDialog({ open, onOpenChange, dict }: { open: boolean; onOpenChange: (open: boolean) => void; dict: any }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dict.challenges.create_challenge}</DialogTitle>
          <DialogDescription>{dict.challenges.challenge_player}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default function SimpleTopPlayers({ params }: SimpleTopPlayersProps) {
  const { user, loading: authLoading } = useAuth();
  const [dict, setDict] = useState<any>(null);
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

  const fallbackPlayers: Player[] = [];

  useEffect(() => {
    async function fetchDictionary() {
      try {
        const response = await fetch(`/translations/${params.lang}/translation.json`);
        if (!response.ok) throw new Error("Failed to load translations");
        const data = await response.json();
        setDict(data);
      } catch (err) {
        console.error("Error loading translations:", err);
      }
    }
    fetchDictionary();
  }, [params.lang]);

  const syncMissingProfiles = async () => {
    try {
      setSyncing(true);
      console.log("🔄 Attempting to sync missing user profiles...");
      const { data: testData, error: testError } = await Promise.race([
        supabase.from("user_profiles").select("count").limit(1),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Test query timeout")), 3000)),
      ]);

      if (testError) {
        console.error("❌ Test query failed:", testError);
        throw testError;
      }
      console.log("✅ Database connection working, proceeding with sync...");
      const authResult = await Promise.race([
        supabase.auth.admin.listUsers(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Auth query timeout")), 5000)),
      ]);

      const { data: authUsers, error: authError } = authResult as any;
      if (authError) {
        console.error("❌ Error fetching auth users:", authError);
        throw authError;
      }
      console.log("👥 Found auth users:", authUsers.users.length);

      const { data: existingProfiles } = await supabase.from("user_profiles").select("user_id");
      const existingIds = new Set(existingProfiles?.map((p) => p.user_id) || []);

      const profilesToInsert = authUsers.users
        .filter((u: any) => !existingIds.has(u.id))
        .map((u: any) => ({
          user_id: u.id,
          username: u.email?.split("@")[0] || "user_" + u.id.slice(0, 8),
          created_at: new Date().toISOString(),
        }));

      if (profilesToInsert.length > 0) {
        const { error: insertError } = await supabase.from("user_profiles").insert(profilesToInsert);
        if (insertError) throw insertError;
        console.log("✅ Inserted new profiles:", profilesToInsert.length);
      }

      setSyncing(false);
      setRetryCount(retryCount + 1);
    } catch (error) {
      console.error("❌ Sync failed:", error);
      setError(dict?.challenges.error || "Failed to sync profiles");
      setSyncing(false);
    }
  };

  useEffect(() => {
    async function fetchPlayers() {
      if (!mountedRef.current || loadingRef.current) return;
      loadingRef.current = true;
      setLoading(true);

      try {
        const { data, error } = await supabase
          .from("user_profiles")
          .select("user_id, username, full_name, total_score, best_percentage")
          .order("total_score", { ascending: false })
          .limit(showAll ? 100 : 10);

        if (error) throw error;

        if (data && data.length > 0) {
          setPlayers(data as Player[]);
          setDataSource("Supabase");
          setIsUsingFallback(false);
        } else {
          setPlayers(fallbackPlayers);
          setDataSource("Fallback");
          setIsUsingFallback(true);
        }
      } catch (err) {
        console.error("Error fetching players:", err);
        setError(dict?.challenges.error || "Failed to load players");
        setPlayers(fallbackPlayers);
        setDataSource("Fallback");
        setIsUsingFallback(true);
      } finally {
        setLoading(false);
        loadingRef.current = false;
      }
    }

    if (!authLoading) fetchPlayers();
    return () => {
      mountedRef.current = false;
    };
  }, [authLoading, retryCount, showAll, dict]);

  if (!dict) return <div>Loading...</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dict.challenges.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}
        {loading || authLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin h-5 w-5 text-gray-500" />
          </div>
        ) : players.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500 mb-2 text-sm">{dict.challenges.no_players}</p>
            <Button size="sm" onClick={syncMissingProfiles} disabled={syncing} className="text-xs">
              {syncing ? dict.challenges.syncing : dict.challenges.sync_profiles}
            </Button>
          </div>
        ) : (
          <div className="space-y-2 md:space-y-3">
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
                      {isUsingFallback ? dict.challenges.registered_user : dict.challenges.player}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                  {!isUsingFallback && (
                    <div className="text-right mr-1 md:mr-2">
                      <p className="font-medium text-xs md:text-sm">{player.total_score} pts</p>
                      <p className="text-xs text-gray-500">{player.best_percentage}%</p>
                    </div>
                  )}
                  {user && user.id !== player.id && (
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedOpponent({
                          id: player.id,
                          username: player.username,
                          full_name: player.full_name,
                          total_score: player.total_score,
                          best_percentage: player.best_percentage,
                        });
                        setChallengeDialogOpen(true);
                      }}
                      className="h-7 md:h-8 py-0 px-2 md:px-3 text-xs bg-green-600 hover:bg-green-700"
                    >
                      {dict.challenges.challenge}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {selectedOpponent && (
        <ChallengeDialog
          open={challengeDialogOpen}
          onOpenChange={(open) => {
            setChallengeDialogOpen(open);
            if (!open) setSelectedOpponent(null);
          }}
          dict={dict}
        />
      )}
    </Card>
  );
}
