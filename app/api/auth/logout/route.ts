import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Logout is handled client-side by removing the token from localStorage
    // This endpoint can be used for server-side cleanup if needed
    return NextResponse.json(
      { success: true, message: 'Logged out successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
