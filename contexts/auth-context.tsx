"use client"

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { useRouter, usePathname } from "next/navigation";

interface UserProfile {
  id: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  total_score: number;
  total_questions: number;
  best_percentage: number;
  badges_earned: string[];
  is_online: boolean;
  last_seen: string;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  signInWithProvider: (provider: "google" | "github") => Promise<{ error: any }>;
  refreshProfile: () => Promise<void>;
}
 
const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => {},
  signInWithProvider: async () => ({ error: null }),
  refreshProfile: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [authInitialized, setAuthInitialized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Define public routes
  const publicRoutes = ["/", "/leaderboard", "/about", "/why", "/toc", "/login"];

  const fetchProfile = async (userId: string) => {
    try {
      console.log("Fetching profile for user:", userId);
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
        return null;
      }

      console.log("Profile fetched successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in fetchProfile:", error);
      return null;
    }
  };

  const refreshProfile = async () => {
    if (user) {
      const profileData = await fetchProfile(user.id);
      setProfile(profileData);
    }
  };

  // Force timeout to prevent infinite loading
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        console.log("Auth loading timeout - forcing completion");
        setLoading(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    console.log("AuthProvider: Initializing...");
    let mounted = true;

    // Get initial session
    const getInitialSession = async () => {
      try {
        console.log("Getting initial session...");
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        console.log("Initial session result:", {
          hasSession: !!session,
          userId: session?.user?.id,
          error: error?.message,
        });

        if (!mounted) return;

        if (session?.user) {
          console.log("Setting user from session:", session.user.id);
          setUser(session.user);
          const profileData = await fetchProfile(session.user.id);
          if (mounted) {
            setProfile(profileData);
          }
        } else {
          console.log("No session found");
          setUser(null);
          setProfile(null);
          // Only redirect to login for non-public routes
          if (!publicRoutes.includes(pathname)) {
            console.log("Redirecting to /login from:", pathname);
            router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
          }
        }
      } catch (error) {
        console.error("Error getting initial session:", error);
        if (mounted) {
          setUser(null);
          setProfile(null);
          if (!publicRoutes.includes(pathname)) {
            console.log("Redirecting to /login from:", pathname);
            router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
          }
        }
      } finally {
        if (mounted) {
          setLoading(false);
          setAuthInitialized(true);
        }
      }
    };

    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", {
        event,
        hasSession: !!session,
        userId: session?.user?.id,
      });

      if (!mounted) return;

      if (session?.user) {
        setUser(session.user);
        const profileData = await fetchProfile(session.user.id);
        if (mounted) {
          setProfile(profileData);
        }
      } else {
        setUser(null);
        setProfile(null);
        if (!publicRoutes.includes(pathname)) {
          console.log("Redirecting to /login from:", pathname);
          router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
        }
      }

      if (mounted) {
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [pathname, router]);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error };
    } catch (error) {
      console.error("Error signing in:", error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });
      return { error };
    } catch (error) {
      console.error("Error signing up:", error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signInWithProvider = async (provider: "google" | "github") => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      return { error };
    } catch (error) {
      console.error("Error signing in with provider:", error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      setUser(null);
      setProfile(null);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    signInWithProvider,
    refreshProfile,
  };

  console.log("AuthProvider render:", { user: !!user, profile: !!profile, loading, authInitialized });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
