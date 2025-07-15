"use client"
import { neon } from "@neondatabase/serverless";
import { createClient } from "@/lib/supabase/server";

const sql = neon(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || process.env.iqra_DATABASE_URL || '');

export async function pingNeon() {
  try {
    const { data, error } = await sql`SELECT 1`;
    if (error) {
      console.error("❌ Neon ping failed:", error);
      throw error;
    }
    console.log("✅ Neon ping successful:", data);
    return data;
  } catch (error) {
    console.error("❌ Neon ping error:", error);
    throw error;
  }
}

export async function getLeaderboard(limit: number = 10) {
  try {
    const { data, error } = await sql`
      SELECT username, total_score, total_questions, best_percentage
      FROM profiles
      WHERE total_questions > 0
      ORDER BY total_score DESC, total_questions ASC
      LIMIT ${limit}
    `;
    if (error) {
      console.error("❌ Leaderboard fetch error:", error);
      throw error;
    }
    console.log("✅ Leaderboard fetched:", data);
    return data;
  } catch (error) {
    console.error("❌ Leaderboard error:", error);
    throw error;
  }
}

export async function getUserProfile(userId: string) {
  try {
    const { data, error } = await sql`
      SELECT id, username, full_name, avatar_url, bio, total_score, total_questions, best_percentage
      FROM profiles
      WHERE id = ${userId}
    `;
    if (error) {
      console.error("❌ Profile fetch error:", error);
      throw error;
    }
    console.log("✅ Profile fetched:", data[0]);
    return data[0] || null;
  } catch (error) {
    console.error("❌ Profile error:", error);
    throw error;
  }
}

export async function updateUserProfile(userId: string, updates: { username?: string; full_name?: string; avatar_url?: string; bio?: string }) {
  try {
    const { data, error } = await sql`
      UPDATE profiles
      SET
        username = COALESCE(${updates.username}, username),
        full_name = COALESCE(${updates.full_name}, full_name),
        avatar_url = COALESCE(${updates.avatar_url}, avatar_url),
        bio = COALESCE(${updates.bio}, bio),
        updated_at = ${new Date().toISOString()}
      WHERE id = ${userId}
      RETURNING *
    `;
    if (error) {
      console.error("❌ Profile update error:", error);
      throw error;
    }
    console.log("✅ Profile updated:", data[0]);
    return data[0] || null;
  } catch (error) {
    console.error("❌ Profile update error:", error);
    throw error;
  }
}

export async function getPendingFriendRequests(userId: string) {
  try {
    const { data, error } = await sql`
      SELECT fr.id, fr.sender_id, fr.status, p.username, p.full_name, p.avatar_url
      FROM friend_requests fr
      JOIN profiles p ON fr.sender_id = p.id
      WHERE fr.receiver_id = ${userId}
      AND fr.status = 'pending'
      ORDER BY fr.created_at DESC
    `;
    if (error) {
      console.error("❌ Friend requests fetch error:", error);
      throw error;
    }
    console.log("✅ Friend requests fetched:", data);
    return data;
  } catch (error) {
    console.error("❌ Friend requests error:", error);
    throw error;
  }
}
