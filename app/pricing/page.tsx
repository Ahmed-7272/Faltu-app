"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, CheckCircle, ArrowRight, Star, Zap, Users, Shield, Headphones, CreditCard, Play } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

import { StripeButton } from "@/components/stripe-button"

export default function PricingPage() {

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses entering the AI revolution",
      monthlyPrice: 299,
      annualPrice: 299,
      features: [
        "1 AI Agent (Inbound or Outbound)",
        "1,000 call minutes per month",
        "Basic AI analytics",
        "Email support",
        "Standard voice quality",
        "CRM integration (basic)",
        "Call recording",
        "Business hours support",
      ],
      popular: false,
      gradient: "from-neon-blue/20 to-neon-blue/5",
      borderColor: "border-neon-blue/30",
      hoverBorder: "hover:border-neon-blue/60",
    },
    {
      name: "Business",
      description: "For growing companies ready to scale with AI",
      monthlyPrice: 499,
      annualPrice: 499,
      features: [
        "3 AI Agents (All types included)",
        "3,000 call minutes per month",
        "Advanced AI analytics & insights",
        "Priority chat & email support",
        "Premium voice quality",
        "Full CRM integration",
        "Call recording & transcription",
        "Custom AI scripts",
        "24/7 support",
        "API access",
        "Webhook integrations",
      ],
      popular: true,
      gradient: "from-neon-purple/20 to-neon-purple/5",
      borderColor: "border-neon-purple/50",
      hoverBorder: "hover:border-neon-purple/80",
    },
    {
      name: "Enterprise",
      description: "Unlimited AI power for enterprise domination",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited AI Agents",
        "Unlimited call minutes",
        "Custom AI dashboard",
        "Dedicated AI specialist",
        "Ultra-premium voice quality",
        "Custom integrations",
        "Military-grade security",
        "Custom AI training",
        "SLA guarantee",
        "White-label options",
        "On-premise deployment",
        "Custom AI models",
      ],
      popular: false,
      gradient: "from-neon-green/20 to-neon-green/5",
      borderColor: "border-neon-green/30",
      hoverBorder: "hover:border-neon-green/60",
    },
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 cyber-grid opacity-10"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-2xl animate-pulse-neon"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-2xl animate-pulse-neon delay-1000"></div>

      {/* Navigation */}
      <nav className="glass fixed top-0 w-full z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center neon-glow">
                <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-lg sm:text-2xl font-display font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                CallMint.tech
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/80 hover:text-neon-blue transition-colors font-medium">
                Home
              </Link>
              <Link href="/services" className="text-white/80 hover:text-neon-blue transition-colors font-medium">
                Services
              </Link>
              <Link href="/pricing" className="text-neon-blue font-bold">
                Pricing
              </Link>
              <Link href="/chatbot" className="text-white/80 hover:text-neon-blue transition-colors font-medium">
                Chatbot
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-neon-blue transition-colors font-medium">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-semibold neon-glow">
                Try Now
              </Button>
            </div>
            <MobileNav currentPage="/pricing" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Pricing
            </span>
            <span className="text-white"> That Scales</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12 font-light px-4">
            Choose your AI revolution plan. Start free, scale infinitely.
          </p>

          {/* Pricing Info */}
          <div className="flex items-center justify-center mb-12 sm:mb-16">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm sm:text-lg font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full neon-glow">
              Pay-per-minute pricing
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative group glass-card ${plan.borderColor} ${plan.hoverBorder} ${
                  plan.popular ? "sm:scale-105 shadow-2xl shadow-neon-purple/20" : ""
                } hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br ${plan.gradient}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-neon-purple to-neon-pink text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold flex items-center shadow-2xl neon-glow">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-6 sm:pb-8 pt-8 sm:pt-12">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-8 rounded-3xl flex items-center justify-center bg-gradient-to-br ${
                      plan.name === "Starter"
                        ? "from-neon-blue/20 to-neon-blue/40"
                        : plan.name === "Business"
                          ? "from-neon-purple/20 to-neon-purple/40"
                          : "from-neon-green/20 to-neon-green/40"
                    } neon-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  <CardTitle className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 sm:mb-4">{plan.name}</CardTitle>
                  <p className="text-white/70 mb-6 sm:mb-8 leading-relaxed font-light text-sm sm:text-base">{plan.description}</p>

                  <div className="mb-6 sm:mb-8">
                    {plan.monthlyPrice ? (
                      <div>
                        <span className="text-4xl sm:text-6xl font-display font-black bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                          ${plan.monthlyPrice}
                        </span>
                        <span className="text-white/60 ml-2 text-sm sm:text-lg">{plan.name === 'Business' ? '/3,000 min' : '/1,000 min'}</span>
                        <div className="text-xs sm:text-sm text-neon-blue mt-2 font-semibold">
                          One-time payment
                        </div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl sm:text-6xl font-display font-black text-white">Custom</span>
                        <div className="text-white/60 mt-2 text-sm sm:text-base">Contact for pricing</div>
                      </div>
                    )}
                  </div>

                  {plan.monthlyPrice ? (
                    <StripeButton plan={plan} />
                  ) : (
                    <Button
                      className="w-full bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-green/80 hover:to-neon-blue/80 text-white shadow-2xl neon-glow transform hover:scale-105 transition-all duration-300 font-bold"
                      onClick={() => {
                        window.location.href = "/contact"
                      }}
                    >
                      <Bot className="w-5 h-5 mr-2" />
                      Contact Sales
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardHeader>

                <CardContent className="px-4 sm:px-8 pb-6 sm:pb-8">
                  <ul className="space-y-3 sm:space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-white/80 leading-relaxed text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold mb-4 sm:mb-6">
              <span className="text-white">Why Choose </span>
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                CallMint.tech?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-light">All plans include these revolutionary features</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-neon-blue/20 to-neon-blue/40 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 neon-glow group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-neon-blue" />
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2 sm:mb-3">Lightning Setup</h3>
              <p className="text-white/60 text-xs sm:text-sm">AI agents ready in 24 hours</p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-neon-purple/20 to-neon-purple/40 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 neon-glow group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-neon-purple" />
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2 sm:mb-3">Infinite Scale</h3>
              <p className="text-white/60 text-xs sm:text-sm">Handle millions of calls</p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-neon-green/20 to-neon-green/40 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 neon-glow group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-neon-green" />
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2 sm:mb-3">Quantum Security</h3>
              <p className="text-white/60 text-xs sm:text-sm">Military-grade protection</p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-neon-pink/20 to-neon-pink/40 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 neon-glow group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-neon-pink" />
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2 sm:mb-3">24/7 AI Support</h3>
              <p className="text-white/60 text-xs sm:text-sm">Always-on assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-6 sm:p-12 neon-glow">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-6 sm:mb-8">
              Ready to Dominate
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent block">
                Your Industry?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12 font-light">
              Join the AI revolution. Your competitors won't know what hit them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold neon-glow transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Book Live Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-white/30 text-white hover:bg-white/10 px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start 14-Day Pilot
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center neon-glow">
                  <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-lg sm:text-2xl font-display font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  CallMint.tech
                </span>
              </div>
              <p className="text-white/60 font-light text-sm sm:text-base">
                Next-generation AI call automation built with React, Node.js, and Next.js for the future of business.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-3 text-white/60">
                <li>
                  <Link href="/services" className="hover:text-neon-blue transition-colors">
                    AI Services
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-neon-blue transition-colors">
                    Pricing Plans
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-neon-blue transition-colors">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3 text-white/60">
                <li>
                  <Link href="/contact" className="hover:text-neon-blue transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-neon-blue transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-neon-blue transition-colors">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-white mb-6">Contact</h4>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-center space-x-2">
                  <span className="text-neon-blue">📞</span>
                  <span>+1 833 722 1177 (Toll-free)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-neon-blue">📱</span>
                  <span>+1 323 649 8803 (LA Local)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-neon-blue">📍</span>
                  <span>1111 B S Governors Ave STE ###, Dover DE</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2025 CallMint.tech. All rights reserved. Built with React, Node.js & Next.js.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
