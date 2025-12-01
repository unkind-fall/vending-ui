import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { productId, slot } = body;

  // Simulate payment processing delay
  await new Promise((resolve) => setTimeout(resolve, 2500));

  // 80% success rate for demo
  const success = Math.random() > 0.2;

  if (success) {
    return NextResponse.json({
      success: true,
      message: 'Payment successful',
      slot,
      transactionId: `TXN-${Date.now()}`,
    });
  }

  return NextResponse.json(
    {
      success: false,
      message: 'Payment failed. Please try again.',
      error: 'PAYMENT_DECLINED',
    },
    { status: 402 }
  );
}
