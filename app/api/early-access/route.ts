import { NextRequest, NextResponse } from 'next/server';

// Supabase client configuration
const SUPABASE_URL = 'https://aiwzwynntrbrzzoqxcrw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpd3p3eW5udHJicnp6b3F4Y3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3OTg1MzYsImV4cCI6MjA3MTM3NDUzNn0.8Zg9sEX0-pSvOuiDZ9TeSFRXC1E0uE8sQhZhK3oYVN0';

export async function POST(request: NextRequest) {
  try {
    const { wallet_address, source } = await request.json();

    // Validation
    if (!wallet_address || typeof wallet_address !== 'string') {
      return NextResponse.json(
        { error: 'Wallet address is required' },
        { status: 400 }
      );
    }

    // ETH address format validation
    if (!/^0x[a-fA-F0-9]{40}$/.test(wallet_address)) {
      return NextResponse.json(
        { error: 'Invalid Ethereum wallet address format' },
        { status: 400 }
      );
    }

    // Check if wallet address already exists
    const existingUser = await fetch(`${SUPABASE_URL}/rest/v1/early_access_users?wallet_address=eq.${wallet_address}`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'count=exact'
      }
    });

    if (existingUser.ok) {
      const existingData = await existingUser.json();
      if (existingData && existingData.length > 0) {
        return NextResponse.json(
          { error: 'Wallet address already registered' },
          { status: 409 }
        );
      }
    }

    // Insert new user
    const response = await fetch(`${SUPABASE_URL}/rest/v1/early_access_users`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        wallet_address: wallet_address.toLowerCase(),
        source: source || 'landing-page',
        verified: false
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Supabase error:', errorData);
      return NextResponse.json(
        { error: 'Failed to register user' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully registered for early access',
        wallet_address: wallet_address.toLowerCase()
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Early access registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get total count of early access users
    const response = await fetch(`${SUPABASE_URL}/rest/v1/early_access_users?select=id`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'count=exact'
      }
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch data' },
        { status: 500 }
      );
    }

    const count = response.headers.get('content-range')?.split('/')[1] || '0';

    return NextResponse.json({
      total_users: parseInt(count),
      message: 'Early access statistics'
    });

  } catch (error) {
    console.error('Early access stats error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
