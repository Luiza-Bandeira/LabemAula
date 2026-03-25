import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/?error=missing_token', req.url));
  }

  // 1. TODO: Verify token in Vercel KV
  // const session = await kv.get(`token:${token}`);
  
  // Simulation: decode base64 for demo purposes
  try {
    const decoded = Buffer.from(token, 'base64').toString();
    const [email, productId] = decoded.split(':');

    if (email && productId) {
      // 2. Set Session Cookie
      (await cookies()).set('user_plan', 'kit', { 
        httpOnly: true, 
        secure: true, 
        maxAge: 60 * 60 * 24 * 30 // 30 days
      });

      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  } catch (e) {
    return NextResponse.redirect(new URL('/?error=invalid_token', req.url));
  }

  return NextResponse.redirect(new URL('/?error=expired_token', req.url));
}
