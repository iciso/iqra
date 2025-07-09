import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
  const supabase = createClient();
  try {
    const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();
    if (authError) throw authError;

    const { data: existingProfiles, error: profilesError } = await supabase
      .from("user_profiles")
      .select("id");
    if (profilesError) throw profilesError;

    const existingIds = new Set(existingProfiles?.map((p: any) => p.id) || []);
    const missingUsers = authUsers.users.filter((authUser: any) => !existingIds.has(authUser.id));

    if (missingUsers.length === 0) {
      return NextResponse.json({ message: "All users already have profiles" });
    }

    const newProfiles = missingUsers.map((authUser: any) => ({
      id: authUser.id,
      username: authUser.user_metadata?.username || authUser.email?.split("@")[0] || "user",
      full_name: authUser.user_metadata?.full_name || authUser.user_metadata?.name || null,
      email: authUser.email,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));

    const { data: insertedProfiles, error: insertError } = await supabase
      .from("user_profiles")
      .insert(newProfiles)
      .select();
    if (insertError) throw insertError;

    return NextResponse.json({ message: "Profiles synced", count: insertedProfiles.length });
  } catch (error: any) {
    console.error("Sync error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
