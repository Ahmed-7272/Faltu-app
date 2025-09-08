import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
})

export async function POST(request: NextRequest) {
  try {
    const { planName, amount, planType } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `CallMint.tech ${planName} Plan - ${planType}`,
              description: `AI-powered call automation - ${planName} plan`,
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/payment-success?plan=${planName}`,
      cancel_url: `${request.nextUrl.origin}/pricing`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json({ error: 'Payment failed' }, { status: 500 })
  }
}
