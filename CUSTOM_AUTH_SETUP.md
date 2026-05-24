# Custom Authentication System Setup

## Overview
The application has been migrated from Supabase Auth + Google OAuth to a custom username/password authentication system stored in your PostgreSQL database.

## What Changed

### Removed
- Google OAuth integration
- Supabase Auth dependency
- OAuth providers (Google, GitHub)

### Added
- Custom `users_auth` table in PostgreSQL
- 4 API routes: `/api/auth/signup`, `/api/auth/login`, `/api/auth/verify`, `/api/auth/logout`
- JWT-based token system
- localStorage-based session management
- Simple username/password authentication

## Setup Steps

### 1. Install Required Dependencies

Run the following command to install the required packages:

```bash
npm install bcryptjs jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

Or with yarn:
```bash
yarn add bcryptjs jsonwebtoken
yarn add --dev @types/jsonwebtoken
```

### 2. Set Environment Variables

Add the following to your `.env.local` file:

```env
# Database URLs (already set)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_key

# New JWT Secret (generate a strong random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

To generate a strong JWT_SECRET, you can use:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Create the users_auth Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create users_auth table
CREATE TABLE IF NOT EXISTS users_auth (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_auth_username ON users_auth(username);
CREATE INDEX IF NOT EXISTS idx_users_auth_email ON users_auth(email);

-- Enable RLS (optional but recommended)
ALTER TABLE users_auth ENABLE ROW LEVEL SECURITY;

-- Allow public signup
CREATE POLICY "Allow public signup" ON users_auth
  FOR INSERT WITH CHECK (true);
```

### 4. Verify the Implementation

The following changes have been made to your codebase:

**API Routes:**
- `/app/api/auth/signup/route.ts` - User registration
- `/app/api/auth/login/route.ts` - User login
- `/app/api/auth/verify/route.ts` - Token verification
- `/app/api/auth/logout/route.ts` - Logout handler

**Updated Files:**
- `/contexts/auth-context.tsx` - Refactored to use custom API endpoints
- `/components/auth/auth-modal.tsx` - Removed Google button, updated to use username/password
- `/app/auth/page.tsx` - Updated to work with new auth flow

## Key Features

### User Registration
- Users can sign up with: username, email, password, and optional full name
- Passwords are hashed with bcrypt (10 rounds)
- Duplicate usernames/emails are rejected

### User Login
- Login with username OR email
- Password verification using bcrypt
- JWT token generation (30-day expiration)
- User profile fetched on login

### Session Management
- Tokens stored in localStorage
- User data persisted in localStorage
- Automatic session restoration on page reload
- Automatic logout on token expiration

### Error Handling
- Validation on all inputs
- Clear error messages to users
- Graceful fallback for auth failures

## Testing

### Sign Up
1. Go to `/auth`
2. Click "Sign Up" tab
3. Enter username, email, password
4. Account is created immediately

### Sign In
1. Go to `/auth`
2. Click "Sign In" tab
3. Enter username or email and password
4. Redirected to `/categories` on success

### Protected Routes
All routes except `/`, `/leaderboard`, `/about`, `/why`, `/toc`, and `/auth` require authentication.

## Security Notes

1. **Change JWT_SECRET**: The default `JWT_SECRET` is for development only. Generate a new strong secret for production.
2. **HTTPS**: Always use HTTPS in production.
3. **Password Requirements**: Minimum 6 characters (can be increased in signup route).
4. **Token Expiration**: Tokens expire after 30 days (configurable in API routes).
5. **Database Security**: Enable Row Level Security (RLS) on `users_auth` table for production.

## Troubleshooting

### "Cannot find module 'bcryptjs' or 'jsonwebtoken'"
- Make sure you ran `npm install bcryptjs jsonwebtoken`
- Restart your dev server: `npm run dev`

### "JWT_SECRET not set"
- Add `JWT_SECRET=your-secret-key` to `.env.local`
- Generate a new secret if needed

### "Duplicate key value violates unique constraint"
- Username or email already exists
- Try with a different username/email

### Token validation fails
- Check that `JWT_SECRET` is the same in all API routes
- Verify token hasn't expired (30 days)
- Clear localStorage and log in again

## Future Enhancements

Consider adding:
1. Email verification on signup
2. Password reset functionality
3. Two-factor authentication
4. Account recovery options
5. Rate limiting on login attempts
6. Session management dashboard

---

**Questions?** Check the auth-context.tsx and API route files for implementation details.
