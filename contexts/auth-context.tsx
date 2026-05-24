"use client"

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface CustomUser {
  id: string;
  username: string;
  email: string;
  fullName?: string;
}

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
  user: CustomUser | null;
  profile: UserProfile | null;
  loading: boolean;
  authInitialized: boolean;
  signIn: (usernameOrEmail: string, password: string) => Promise<{ error: any }>;
  signUp: (username: string, email: string, password: string, fullName?: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}
 
const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  authInitialized: false,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => {},
  refreshProfile: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<CustomUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [authInitialized, setAuthInitialized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Define public routes
  const publicRoutes = ["/", "/leaderboard", "/about", "/why", "/toc", "/auth"];

  const fetchProfile = async (userId: string) => {
    try {
      const response = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: localStorage.getItem("authToken") }),
      });

      if (!response.ok) return null;

      const data = await response.json();
      return data.profile || null;
    } catch (error) {
      console.error("Error fetching profile:", error);
      return null;
    }
  };

  const refreshProfile = async () => {
    if (user) {
      const profileData = await fetchProfile(user.id);
      if (profileData) {
        setProfile(profileData);
      }
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

    // Get initial session from localStorage token
    const getInitialSession = async () => {
      try {
        console.log("Getting initial session...");
        const token = localStorage.getItem("authToken");
        const userData = localStorage.getItem("user");

        if (token && userData) {
          try {
            const user = JSON.parse(userData);
            console.log("Setting user from localStorage:", user.id);
            setUser(user);
            const profileData = await fetchProfile(user.id);
            if (mounted) {
              setProfile(profileData);
            }
          } catch (e) {
            console.error("Error parsing user data:", e);
            localStorage.removeItem("authToken");
            localStorage.removeItem("user");
            setUser(null);
            setProfile(null);
          }
        } else {
          console.log("No session found in localStorage");
          setUser(null);
          setProfile(null);
          // Only redirect to auth for non-public routes
          if (!publicRoutes.includes(pathname)) {
            console.log("Redirecting to /auth from:", pathname);
            router.push(`/auth?redirect=${encodeURIComponent(pathname)}`);
          }
        }
      } catch (error) {
        console.error("Error getting initial session:", error);
        if (mounted) {
          setUser(null);
          setProfile(null);
          if (!publicRoutes.includes(pathname)) {
            console.log("Redirecting to /auth from:", pathname);
            router.push(`/auth?redirect=${encodeURIComponent(pathname)}`);
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

    return () => {
      mounted = false;
    };
  }, [pathname, router]);

  const signIn = async (usernameOrEmail: string, password: string) => {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usernameOrEmail, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        return { error: new Error(data.error || "Failed to sign in") };
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);
      setProfile(data.profile || null);
      return { error: null };
    } catch (error) {
      console.error("Error signing in:", error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (username: string, email: string, password: string, fullName?: string) => {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, fullName: fullName || username }),
      });

      if (!response.ok) {
        const data = await response.json();
        return { error: new Error(data.error || "Failed to sign up") };
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);
      setProfile(null);
      return { error: null };
    } catch (error) {
      console.error("Error signing up:", error);
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
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
    authInitialized,
    signIn,
    signUp,
    signOut,
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
