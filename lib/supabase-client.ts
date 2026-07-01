// lib/supabase-client.ts
// Supabase has been removed from this app.
// This stub keeps existing imports working without making any network requests.

const noopQuery = () => ({
  select: () => noopQuery(),
  insert: () => noopQuery(),
  update: () => noopQuery(),
  delete: () => noopQuery(),
  upsert: () => noopQuery(),
  eq: () => noopQuery(),
  neq: () => noopQuery(),
  gt: () => noopQuery(),
  lt: () => noopQuery(),
  gte: () => noopQuery(),
  lte: () => noopQuery(),
  or: () => noopQuery(),
  order: () => noopQuery(),
  limit: () => noopQuery(),
  single: () => Promise.resolve({ data: null, error: { message: "Supabase removed" } }),
  then: (resolve: any) => resolve({ data: null, error: { message: "Supabase removed" } }),
})

export const supabase = {
  from: (_table: string) => noopQuery(),

  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ data: null, error: { message: "Auth removed" } }),
    signUp: async () => ({ data: null, error: { message: "Auth removed" } }),
    signOut: async () => ({ error: null }),
    onAuthStateChange: (_callback: any) => ({
      data: { subscription: { unsubscribe: () => {} } },
    }),
    admin: {
      listUsers: async () => ({ data: { users: [] }, error: null }),
    },
  },

  channel: (_name: string) => ({
    on: (_event: any, _config: any, _callback: any) => ({
      subscribe: () => ({ unsubscribe: () => {} }),
    }),
    subscribe: () => ({ unsubscribe: () => {} }),
  }),

  rpc: async (_fn: string, _params?: any) => ({ data: null, error: null }),
}
