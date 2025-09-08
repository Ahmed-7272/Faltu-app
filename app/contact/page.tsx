"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bot, Mail, MapPin, Clock, ArrowRight, CheckCircle, Phone, Zap } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    planInterest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setPreviewUrl(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          plan: formData.planInterest,
          message: formData.message,
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }
      
      // Check for preview URL (for testing with Ethereal)
      if (data.previewUrl) {
        setPreviewUrl(data.previewUrl)
      }
      
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          planInterest: "",
          message: "",
        })
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
      console.error('Error submitting form:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 cyber-grid opacity-10"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-2xl animate-pulse-neon"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-2xl animate-pulse-neon delay-1000"></div>

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
              <Link href="/pricing" className="text-white/80 hover:text-neon-blue transition-colors font-medium">
                Pricing
              </Link>
              <Link href="/chatbot" className="text-white/80 hover:text-neon-blue transition-colors font-medium">
                Chatbot
              </Link>
              <Link href="/contact" className="text-neon-blue font-bold">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-semibold neon-glow">
                Try Now
              </Button>
            </div>
            <MobileNav currentPage="/contact" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 font-light px-4">
            Ready to revolutionize your business with AI? Let's build the future together.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <Card className="glass-card border-neon-blue/30 shadow-2xl neon-glow">
              <CardHeader className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-t-lg border-b border-white/10">
                <CardTitle className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-neon-blue" />
                  Get Started
                </CardTitle>
                <p className="text-white/70 font-light text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 neon-glow">
                      <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 sm:mb-4">Message Sent!</h3>
                    <p className="text-white/70 text-base sm:text-lg font-light">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="name" className="text-white font-semibold mb-2 block text-sm sm:text-base">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="glass border-white/20 focus:border-neon-blue text-white placeholder:text-white/50 bg-white/5"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white font-semibold mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="glass border-white/20 focus:border-neon-blue text-white placeholder:text-white/50 bg-white/5"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-white font-semibold mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="glass border-white/20 focus:border-neon-blue text-white placeholder:text-white/50 bg-white/5"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-white font-semibold mb-2 block">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="glass border-white/20 focus:border-neon-blue text-white placeholder:text-white/50 bg-white/5"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="planInterest" className="text-white font-semibold mb-2 block">
                        Plan Interest
                      </Label>
                      <Select
                        value={formData.planInterest}
                        onValueChange={(value) => handleInputChange("planInterest", value)}
                      >
                        <SelectTrigger className="glass border-white/20 focus:border-neon-blue text-white bg-white/5">
                          <SelectValue placeholder="Select a plan you're interested in" />
                        </SelectTrigger>
                        <SelectContent className="glass border-white/20 bg-dark-800">
                          <SelectItem value="starter">Starter - $49/month</SelectItem>
                          <SelectItem value="business">Business - $99/month</SelectItem>
                          <SelectItem value="enterprise">Enterprise - Custom</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white font-semibold mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="glass border-white/20 focus:border-neon-blue text-white placeholder:text-white/50 bg-white/5"
                        rows={4}
                        placeholder="Tell us about your business needs and how we can help..."
                      />
                    </div>

                    {error && (
                      <div className="p-4 mb-4 bg-red-500/20 border border-red-500/50 rounded-md text-white">
                        <p className="font-medium">{error}</p>
                      </div>
                    )}
                    
                    {previewUrl && (
                      <div className="p-4 mb-4 bg-blue-500/20 border border-blue-500/50 rounded-md text-white">
                        <p className="font-medium">Test Mode:</p>
                        <p>This is a test email. You can view it here:</p>
                        <a 
                          href={previewUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 underline"
                        >
                          View Test Email
                        </a>
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white py-4 text-lg font-bold neon-glow transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-pulse">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5 mr-2" />
                          Send Message
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass-card border-neon-purple/30 neon-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-8">Contact Information</h3>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-blue/40 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 neon-glow">
                        <Mail className="w-6 h-6 text-neon-blue" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-white mb-2">Email</h4>
                        <p className="text-white/70">info@callmint.tech</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-purple/20 to-neon-purple/40 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 neon-glow">
                        <Phone className="w-6 h-6 text-neon-purple" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-white mb-2">Phone</h4>
                        <p className="text-white/70 text-lg font-semibold">+91 82176 87679</p>
                        <p className="text-white/50 text-sm">Mon-Fri 9AM-6PM IST</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-neon-green/40 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 neon-glow">
                        <MapPin className="w-6 h-6 text-neon-green" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-white mb-2">Address</h4>
                        <p className="text-white/70">123 AI Street</p>
                        <p className="text-white/70">San Francisco, CA 94105</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-pink/20 to-neon-pink/40 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 neon-glow">
                        <Clock className="w-6 h-6 text-neon-pink" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-white mb-2">Business Hours</h4>
                        <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        <p className="text-white/70">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-neon-green/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Enterprise Sales</h3>
                  <p className="text-white/70 mb-6 font-light">
                    Need unlimited AI power for your enterprise? Our specialists are ready to help.
                  </p>
                  <div className="space-y-3 text-sm text-white/60 mb-6">
                    <p className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-neon-green mr-2" />
                      Custom pricing and packages
                    </p>
                    <p className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-neon-green mr-2" />
                      Dedicated AI specialist
                    </p>
                    <p className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-neon-green mr-2" />
                      Priority support and SLA
                    </p>
                    <p className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-neon-green mr-2" />
                      Custom AI integrations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Common Questions
              </span>
            </h2>
            <p className="text-white/70 font-light">Can't find what you're looking for? Contact us directly.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass-card p-6 border-white/10">
                <h3 className="font-display font-semibold text-white mb-3">How quickly can I get started?</h3>
                <p className="text-white/70 font-light">
                  Most customers have their AI agents running within 24 hours of signing up.
                </p>
              </div>

              <div className="glass-card p-6 border-white/10">
                <h3 className="font-display font-semibold text-white mb-3">Do you offer training?</h3>
                <p className="text-white/70 font-light">
                  Yes! We provide comprehensive AI onboarding and training for all customers.
                </p>
              </div>

              <div className="glass-card p-6 border-white/10">
                <h3 className="font-display font-semibold text-white mb-3">Can I integrate with my existing CRM?</h3>
                <p className="text-white/70 font-light">
                  We support integrations with all major CRM systems including Salesforce, HubSpot, and more.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 border-white/10">
                <h3 className="font-display font-semibold text-white mb-3">What's your uptime guarantee?</h3>
                <p className="text-white/70 font-light">
                  We maintain 99.9% uptime with quantum-grade infrastructure and real-time monitoring.
                </p>
              </div>

              <div className="glass-card p-6 border-white/10">
                <h3 className="font-display font-semibold text-white mb-3">Is my data secure?</h3>
                <p className="text-white/70 font-light">
                  Yes, we're SOC 2 compliant with military-grade encryption and zero-trust architecture.
                </p>
              </div>

              <div className="glass-card p-6 border-white/10">
                <h3 className="font-display font-semibold text-white mb-3">Can I cancel anytime?</h3>
                <p className="text-white/70 font-light">
                  Yes, you can cancel your subscription at any time with no cancellation fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center neon-glow">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-display font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  CallMint.tech
                </span>
              </div>
              <p className="text-white/60 font-light">
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
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2025 CallMint.tech. All rights reserved. Built with React, Node.js & Next.js.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
