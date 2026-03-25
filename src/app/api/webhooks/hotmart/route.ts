import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Hotmart Webhook Payload structure (simplified)
    // event: 'PURCHASE_APPROVED'
    // data: { purchase: { status: 'APPROVED' }, buyer: { email, checkout_phone }, product: { id, name } }
    
    const { event, data } = body;

    if (event === 'PURCHASE_APPROVED') {
      const { buyer, product } = data;
      const phone = buyer.checkout_phone;
      const email = buyer.email;
      const productId = product.id;

      console.log(`Purchase approved for ${email} (${phone}) - Product: ${productId}`);

      // 1. Generate a Magic Token (Simulated)
      const token = Buffer.from(`${email}:${productId}:${Date.now()}`).toString('base64');

      // 2. TODO: Store token in Vercel KV or Database
      // await kv.set(`token:${token}`, { email, productId, plan: 'kit' });

      // 3. Send WhatsApp via Evolution API
      const message = `Olá! Seu acesso ao Lab em Aula está liberado! 🧪\n\nClique no link para acessar seus roteiros:\nhttps://lab-em-aula.vercel.app/api/auth/magic?token=${token}`;
      
      // await sendWhatsApp(phone, message);

      return NextResponse.json({ status: 'ok', message: 'Access granted' });
    }

    return NextResponse.json({ status: 'ignored', event });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ status: 'error', message: 'Internal Server Error' }, { status: 500 });
  }
}
