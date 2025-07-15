import { NextResponse } from 'next/server';

export async function GET() {
  const env = {
    DATABASE_URL: process.env.DATABASE_URL ? 'Set' : 'Missing',
    iqra_DATABASE_URL: process.env.iqra_DATABASE_URL ? 'Set' : 'Missing',
    NEON_DATABASE_URL: process.env.NEON_DATABASE_URL ? 'Set' : 'Missing',
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing',
  };
  console.log("🔍 ENV CHECK:", env);
  return NextResponse.json(env);
}
