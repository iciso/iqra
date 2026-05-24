/**
 * Database Setup for Custom Authentication
 * Run this once to create the necessary tables and functions
 * Usage: Call this from a server action or run manually in Supabase SQL editor
 */

export const setupAuthDatabase = async () => {
  // This SQL should be executed in Supabase SQL Editor
  const sql = `
    -- Create users_auth table if it doesn't exist
    CREATE TABLE IF NOT EXISTS users_auth (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      username VARCHAR(255) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      full_name VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    -- Create index for faster lookups
    CREATE INDEX IF NOT EXISTS idx_users_auth_username ON users_auth(username);
    CREATE INDEX IF NOT EXISTS idx_users_auth_email ON users_auth(email);

    -- Enable RLS
    ALTER TABLE users_auth ENABLE ROW LEVEL SECURITY;

    -- RLS Policies - Users can only read their own record
    CREATE POLICY "Users can read own record" ON users_auth
      FOR SELECT USING (id = auth.uid());

    -- Allow public signup (insert without auth)
    CREATE POLICY "Allow public signup" ON users_auth
      FOR INSERT WITH CHECK (true);

    -- Allow users to update their own record
    CREATE POLICY "Users can update own record" ON users_auth
      FOR UPDATE USING (id = auth.uid());
  `;

  return sql;
};
