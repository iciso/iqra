"use client"

import type React from "react";
import { createContext, useContext } from "react";

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
  loading: false,
  authInitialized: true,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => {},
  refreshProfile: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const value = {
    user: null,
    profile: null,
    loading: false,
    authInitialized: true,
    signIn: async () => ({ error: null }),
    signUp: async () => ({ error: null }),
    signOut: async () => {},
    refreshProfile: async () => {},
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
