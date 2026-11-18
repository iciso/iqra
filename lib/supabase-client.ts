// lib/supabase-client.ts
// Supabase has been removed from this app.
// This stub keeps existing imports working without making any network requests.

export type DbError = { message: string }
export type DbResult<T> = { data: T | null; error: DbError | null }

// Chainable query builder. Every call returns the builder; awaiting it (or .single()) resolves to "removed".
export interface QueryBuilder<Row> extends PromiseLike<DbResult<Row[]>> {
  select(columns?: string): QueryBuilder<Row>
  insert(values: unknown): QueryBuilder<Row>
  update(values: unknown): QueryBuilder<Row>
  delete(): QueryBuilder<Row>
  upsert(values: unknown): QueryBuilder<Row>
  eq(column: string, value: unknown): QueryBuilder<Row>
  neq(column: string, value: unknown): QueryBuilder<Row>
  gt(column: string, value: unknown): QueryBuilder<Row>
  lt(column: string, value: unknown): QueryBuilder<Row>
  gte(column: string, value: unknown): QueryBuilder<Row>
  lte(column: string, value: unknown): QueryBuilder<Row>
  or(filters: string): QueryBuilder<Row>
  order(column: string, options?: { ascending?: boolean }): QueryBuilder<Row>
  limit(count: number): QueryBuilder<Row>
  single(): Promise<DbResult<Row>>
}

const removed: DbError = { message: "Supabase removed" }

function noopQuery<Row>(): QueryBuilder<Row> {
  const query: QueryBuilder<Row> = {
    select: () => query,
    insert: () => query,
    update: () => query,
    delete: () => query,
    upsert: () => query,
    eq: () => query,
    neq: () => query,
    gt: () => query,
    lt: () => query,
    gte: () => query,
    lte: () => query,
    or: () => query,
    order: () => query,
    limit: () => query,
    single: () => Promise.resolve({ data: null, error: removed }),
    then: (onfulfilled, onrejected) =>
      Promise.resolve<DbResult<Row[]>>({ data: null, error: removed }).then(onfulfilled, onrejected),
  }
  return query
}

export interface StubSession {
  user: { id: string }
}

type AuthChangeCallback = (event: string, session: StubSession | null) => void

export const supabase = {
  from: <Row = Record<string, unknown>>(table: string): QueryBuilder<Row> => {
    void table
    return noopQuery<Row>()
  },

  auth: {
    getSession: async (): Promise<{ data: { session: StubSession | null }; error: DbError | null }> => ({
      data: { session: null },
      error: null,
    }),
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ data: null, error: { message: "Auth removed" } }),
    signUp: async () => ({ data: null, error: { message: "Auth removed" } }),
    signOut: async () => ({ error: null }),
    onAuthStateChange: (callback: AuthChangeCallback) => {
      void callback
      return { data: { subscription: { unsubscribe: () => {} } } }
    },
    admin: {
      listUsers: async () => ({ data: { users: [] }, error: null }),
    },
  },

  channel: (name: string) => {
    void name
    return {
      on: (event: string, config: unknown, callback: unknown) => {
        void event
        void config
        void callback
        return { subscribe: () => ({ unsubscribe: () => {} }) }
      },
      subscribe: () => ({ unsubscribe: () => {} }),
    }
  },

  rpc: async (fn: string, params?: unknown): Promise<DbResult<null>> => {
    void fn
    void params
    return { data: null, error: null }
  },
}
