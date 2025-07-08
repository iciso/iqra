"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, RefreshCw, Search, Users, Database, Cloud } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/auth-context";
import CategoryFirstChallengeDialog from "./category-first-challenge-dialog";
import { searchUsers } from "@/lib/supabase-queries";
import { Input } from "@/components/ui/input"; // Added missing import

interface Player {
  id: string;
  username: string;
  full_name?: string;
  total_score: number;
  best_percentage: number;
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

  // ONLY real users from the actual leaderboard - ALL 10 users, NO POINTS to avoid ranking issues
  const fallbackPlayers: Player[] = [
    {
      id: "83813437-5d7e-4aef-b915-96b99ac96fa0",
      username: "afsarkam1962",
      full_name: "KAM Afsar",
      total_score: 0,
      best_percentage: 0,
    },
    {
      id: "cc6504c4-8efd-442a-aadc-7b44e7da02f8",
      username: "ebahammed",
      full_name: "E Basheer Ahammed",
      total_score: 0,
      best_percentage: 0,
    },
    {
      id: "aefe42f1-297b-4649-b664-934d37edc957",
      username: "ihmi",
      full_name: "IHMIW",
      total_score: 0,
      best_percentage: 0,
    },
    {
      id: "9e599448-b4c8-4c8b-8b4a-1234567890ab",
      username: "feroza.rafique",
      full_name: "feroza.rafique",
      total_score: 0,
      best_percentage: 0,
    },
    {
      id: "ddd8b850-1b56-4781-bd03-1be615f9e3ec",
      username: "drmurtazaa50",
      full_name: "Dr.Muhammad Murtaza Ikram",
      total_score: 0,
      best_percentage: 0,
    },
    {
      id: "e299ae2c-9581-47eb-bb0e-daabf686b469",
      username: "aiesha",
      full_name: "aiesha waseem",
      total_score: 0,
      best_percentage: 0,
    },
    {
      id: "8d46dbdc-3104-4de9-9735-a00c3aec1619",
      username: "joy",
      full_name: "Joy Ahmed",
      total_score: 0,
      best_percentage: 0,
    },
    {
      id: "7bdc8022-2a23-45db-a388-a2ea71a71b52",
      username: "hashim",
      full_name: "Hashim Mohammed",
      total_score: 0,
      best_percentage: 0,
    },
    {
      id: "871d3522-512b-4930-a9de-a092f2e33783",
      username: "rafique",
      full_name: "Mohamed Essa Rafique",
      total_score: 0,
      best_percentage: 0,
    },
    {
      id: "94e7149b-ce48-4d9a-8ee4-730698bc1bc5",
      username: "essa",
      full_name: "essa nilu",
      total_score: 0,
      best_percentage: 0,
    },
  ].filter((player) => !["Test User", "Build Time User", "Demo User", "test-1748153442262"].includes(player.username));

  const syncMissingProfiles = async () => {
    try {
      setSyncing(true);
      console.log("?? Attempting to sync missing user profiles...");

      // Try a very simple query first
      const { data: testData, error: testError } = await Promise.race([
        supabase.from("user_profiles").select("count").limit(1),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Test query timeout")), 5000)),
      ]);

      if (testError) {
        console.error("? Test query failed:", testError);
        throw testError;
      }

      console.log("? Database connection working, proceeding with sync...");

      // Get auth users with timeout
      const authResult = await Promise.race([
        supabase.auth.admin.listUsers(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Auth query timeout")), 5000)),
      ]);

      const { data: authUsers, error: authError } = authResult as any;

      if (authError) {
        console.error("? Error fetching auth users:", authError);
        throw authError;
      }

      console.log("?? Found auth users:", authUsers.users.length);

      // Get existing profiles with timeout
      const profilesResult = await Promise.race([
        supabase.from("user_profiles").select("id"),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Profiles query timeout")), 5000)),
      ]);

      const { data: existingProfiles, error: profilesError } = profilesResult as any;

      if (profilesError) {
        console.error("? Error fetching existing profiles:", profilesError);
        throw profilesError;
      }

      const existingIds = new Set(existingProfiles?.map((p: any) => p.id) || []);
      console.log("?? Existing profile IDs:", existingIds.size);

      // Find missing profiles
      const missingUsers = authUsers.users.filter((authUser: any) => !existingIds.has(authUser.id));
      console.log("?? Missing profiles for users:", missingUsers.length);

      if (missingUsers.length === 0) {
        console.log("? All users already have profiles");
        return;
      }

      // Create missing profiles
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

      console.log(
        "? Creating profiles for:",
        newProfiles.map((p) => p.full_name || p.username),
      );

      const insertResult = await Promise.race([
        supabase.from("user_profiles").insert(newProfiles).select(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Insert query timeout")), 10000)),
      ]);

      const { data: insertedProfiles, error: insertError } = insertResult as any;

      if (insertError) {
        console.error("? Error creating profiles:", insertError);
        throw insertError;
      }

      console.log("? Successfully created profiles:", insertedProfiles?.length);

      // Reload players after sync
      loadPlayers();
    } catch (err: any) {
      console.error("? Sync error:", err);
      alert(`Sync failed: ${err.message}. Using fallback data.`);
    } finally {
      setSyncing(false);
    }
  };

  const loadPlayers = async () => {
    // Prevent concurrent loading
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

      // Wait for auth to be ready
      if (authLoading) {
        console.log("? Waiting for auth to complete...");
        return;
      }

      console.log("?? Step 1: Auth ready, trying Supabase...");

      const limit = showAll ? 50 : 40;

      // Use searchUsers if a search term exists, otherwise
