import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || process.env.iqra_DATABASE_URL || '');

export async function POST() {
  const supabase = createClient();
  try {
    console.log("🔄 Syncing profiles to Neon...");
    const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();
    if (authError) {
      console.error("❌ Auth error:", authError.message);
      throw authError;
    }

    const { data: existingProfiles, error: profilesError } = await sql`
      SELECT id FROM profiles
    `;
    if (profilesError) {
      console.error("❌ Profiles error:", profilesError.message);
      throw profilesError;
    }

    const existingIds = new Set(existingProfiles?.map((p: any) => p.id) || []);
    const missingUsers = authUsers.users.filter((authUser: any) => !existingIds.has(authUser.id));

    if (missingUsers.length === 0) {
      console.log("✅ No new profiles to sync");
      return NextResponse.json({ message: "All users already have profiles" });
    }

    const newProfiles = missingUsers.map((authUser: any) => ({
      id: authUser.id,
      username: authUser.user_metadata?.username || authUser.email?.split("@")[0] || "user",
      avatar_url: authUser.user_metadata?.avatar_url || null,
      bio: authUser.user_metadata?.bio || null,
      total_score: 0,
      total_questions: 0,
      best_percentage: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));

    const values = newProfiles.map((profile: any) => `(
      ${sql.escapeLiteral(profile.id)},
      ${sql.escapeLiteral(profile.username)},
      ${profile.avatar_url ? sql.escapeLiteral(profile.avatar_url) : 'NULL'},
      ${profile.bio ? sql.escapeLiteral(profile.bio) : 'NULL'},
      ${profile.total_score},
      ${profile.total_questions},
      ${profile.best_percentage},
      ${sql.escapeLiteral(profile.created_at)},
      ${sql.escapeLiteral(profile.updated_at)}
    )`).join(',');

    const { data: insertedProfiles, error: insertError } = await sql`
      INSERT INTO profiles (id, username, avatar_url, bio, total_score, total_questions, best_percentage, created_at, updated_at)
      VALUES ${sql.raw(values)}
      RETURNING *
    `;
    if (insertError) {
      console.error("❌ Insert error:", insertError.message);
      throw insertError;
    }

    console.log(`✅ Synced ${insertedProfiles.length} profiles to Neon`);
    return NextResponse.json({ message: "Profiles synced", count: insertedProfiles.length });
  } catch (error: any) {
    console.error("❌ Sync error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}       
