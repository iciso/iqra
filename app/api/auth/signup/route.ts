import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-env';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password, fullName } = body;

    // Validation
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in database
    const { data, error } = await supabase
      .from('users_auth')
      .insert([
        {
          username,
          email,
          password_hash: hashedPassword,
          full_name: fullName || username,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Signup error:', error);
      if (error.message.includes('duplicate')) {
        return NextResponse.json(
          { error: 'Username or email already exists' },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: 'Failed to create account' },
        { status: 500 }
      );
    }

    // Create JWT token
    const token = jwt.sign(
      { id: data.id, username: data.username, email: data.email },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    // Also create user_profiles entry if it doesn't exist
    await supabase.from('user_profiles').insert([
      {
        id: data.id,
        username: data.username,
        full_name: data.full_name,
      },
    ]).select();

    return NextResponse.json(
      {
        success: true,
        user: {
          id: data.id,
          username: data.username,
          email: data.email,
          fullName: data.full_name,
        },
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
