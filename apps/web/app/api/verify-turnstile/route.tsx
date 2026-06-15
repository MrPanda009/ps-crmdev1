import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body' }, { status: 400 });
  }

  const token = body?.token as string | undefined;

  if (!token) {
    return NextResponse.json({ success: false, message: 'No Turnstile token provided' }, { status: 400 });
  }

  // Handle local development bypass if configured
  if (token === 'dev_mock_token' && process.env.NODE_ENV === 'development') {
    return NextResponse.json({ success: true });
  }

  const secretKey = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secretKey) {
    console.error('Turnstile verification error: TURNSTILE_SECRET_KEY environment variable is not configured.');
    return NextResponse.json(
      { success: false, message: 'Server captcha configuration is missing (TURNSTILE_SECRET_KEY).' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.warn('Turnstile verification failed:', data['error-codes']);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Turnstile verification failed.',
          'error-codes': data['error-codes'] 
        }, 
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Failed to verify Turnstile token with Cloudflare API:', error);
    return NextResponse.json(
      { success: false, message: 'Could not reach Cloudflare Turnstile verification service.' },
      { status: 502 }
    );
  }
}
