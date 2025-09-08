"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CreditCard, Loader2 } from "lucide-react"
import { loadStripe } from "@stripe/stripe-js"
import { useState } from "react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface StripeButtonProps {
  plan: {
    name: string
    monthlyPrice: number
    annualPrice?: number
  }
  isAnnual?: boolean
}

export function StripeButton({ plan, isAnnual = false }: StripeButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleStripePayment = async () => {
    setLoading(true)
    
    try {
      const stripe = await stripePromise
      if (!stripe) {
        throw new Error("Stripe failed to load")
      }

      const amount = isAnnual && plan.annualPrice ? plan.annualPrice : plan.monthlyPrice
      const planType = isAnnual ? "Annual" : "Monthly"

      // Create checkout session
      const response = await fetch("/api/stripe-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planName: plan.name,
          amount: amount,
          planType: planType,
        }),
      })

      const { sessionId, error } = await response.json()

      if (error) {
        throw new Error(error)
      }

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({ sessionId })

      if (result.error) {
        throw new Error(result.error.message)
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert(`Payment failed: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white shadow-2xl neon-glow transform hover:scale-105 transition-all duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      onClick={handleStripePayment}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="w-5 h-5 mr-2" />
          Pay with Stripe
          <ArrowRight className="w-4 h-4 ml-2" />
        </>
      )}
    </Button>
  )
}
