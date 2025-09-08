"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageSquare,
  Headphones,
  Play,
  ArrowRight,
  Zap,
  Shield,
  Bot,
  Sparkles,
  Cpu,
  Pause,
} from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({})

  const playAudioDemo = (agentType: string, audioPath: string) => {
    // Stop any currently playing audio
    Object.values(audioRefs.current).forEach((audio) => {
      if (audio && !audio.paused) {
        audio.pause()
        audio.currentTime = 0
      }
    })

    // If clicking the same button that's playing, stop it
    if (playingAudio === agentType) {
      setPlayingAudio(null)
      return
    }

    // Create or get audio element
    if (!audioRefs.current[agentType]) {
      audioRefs.current[agentType] = new Audio(audioPath)
      audioRefs.current[agentType].addEventListener("ended", () => {
        setPlayingAudio(null)
      })
    }

    // Play the audio
    audioRefs.current[agentType].play()
    setPlayingAudio(agentType)
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 cyber-grid opacity-10"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-2xl animate-pulse-neon"></div>
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
              <Link href="/contact" className="text-white/80 hover:text-neon-blue transition-colors font-medium">
                Contact
              </Link>
              <Link href="/pricing">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-semibold neon-glow">
                  Try Now
                </Button>
              </Link>
            </div>
            <MobileNav currentPage="/" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold glass-card text-neon-blue border-neon-blue/30 mb-6 sm:mb-8">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Next-Gen AI Call Automation
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="neon-text text-neon-blue">Business</span>
            <br />
            <span className="text-white/90">with AI Agents</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Deploy intelligent AI call agents powered by{" "}
            <span className="text-neon-blue font-semibold">n8n automation</span>,{" "}
            <span className="text-neon-purple font-semibold">VAPI voice AI</span>, and{" "}
            <span className="text-neon-green font-semibold">advanced workflows</span> - crafted by our lead developer{" "}
            <span className="text-neon-blue font-bold">Ahmed</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-2xl neon-glow transform hover:scale-105 transition-all duration-300"
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
                className="glass-card border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Start 14-Day Pilot
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto px-4">
            <div className="glass-card rounded-2xl p-4 sm:p-8 transform hover:scale-105 transition-all duration-300 animate-float">
              <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <div className="text-white/60 font-medium text-sm sm:text-base">Calls Automated Daily</div>
            </div>
            <div className="glass-card rounded-2xl p-4 sm:p-8 transform hover:scale-105 transition-all duration-300 animate-float delay-200">
              <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-white/60 font-medium text-sm sm:text-base">Uptime Guarantee</div>
            </div>
            <div className="glass-card rounded-2xl p-4 sm:p-8 transform hover:scale-105 transition-all duration-300 animate-float delay-400">
              <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-white/60 font-medium text-sm sm:text-base">AI Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                AI Agents
              </span>
              <span className="text-white"> That Never Sleep</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light px-4">
              Three specialized AI agents working in perfect harmony to revolutionize your business communications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Inbound Agent */}
            <Card className="group glass-card border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl hover:shadow-neon-blue/20">
              <CardContent className="p-4 sm:p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-neon-blue/20 to-neon-blue/40 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-8 neon-glow group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 sm:w-12 sm:h-12 text-neon-blue" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">Inbound Agent</h3>
                  <p className="text-white/70 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    Handle incoming customer queries with superhuman intelligence and seamless call routing.
                  </p>
                  <Button
                    variant="outline"
                    className="glass border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 font-semibold bg-transparent text-sm sm:text-base"
                    onClick={() => playAudioDemo("inbound", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ElevenLabs_2025-08-03T12_57_02_Alice_pre_sp100_s50_sb75_se0_b_m2-jWjOVFusJFhMhFhD1PrOeefiDh6CH4.mp3")}
                  >
                    {playingAudio === "inbound" ? (
                      <Pause className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    ) : (
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    )}
                    {playingAudio === "inbound" ? "Stop Demo" : "Try Demo"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Outbound Agent */}
            <Card className="group glass-card border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl hover:shadow-neon-purple/20">
              <CardContent className="p-4 sm:p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-neon-purple/20 to-neon-purple/40 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-8 neon-glow group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-8 h-8 sm:w-12 sm:h-12 text-neon-purple" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">Outbound Agent</h3>
                  <p className="text-white/70 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    Automate sales calls with personalized scripts and natural, persuasive conversations.
                  </p>
                  <Button
                    variant="outline"
                    className="glass border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 font-semibold bg-transparent text-sm sm:text-base"
                    onClick={() => playAudioDemo("outbound", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ElevenLabs_2025-08-03T12_55_15_Brian_pre_sp101_s50_sb75_se0_b_m2-HA0lquY9vpqzODxrNsuxpa7nt2LbDL.mp3")}
                  >
                    {playingAudio === "outbound" ? (
                      <Pause className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    ) : (
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    )}
                    {playingAudio === "outbound" ? "Stop Demo" : "Try Demo"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Support Agent */}
            <Card className="group glass-card border-neon-green/30 hover:border-neon-green/60 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl hover:shadow-neon-green/20">
              <CardContent className="p-4 sm:p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-neon-green/20 to-neon-green/40 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-8 neon-glow group-hover:scale-110 transition-transform duration-300">
                    <Headphones className="w-8 h-8 sm:w-12 sm:h-12 text-neon-green" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">Support Agent</h3>
                  <p className="text-white/70 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    Provide instant 24/7 support with advanced problem-solving and escalation intelligence.
                  </p>
                  <Button
                    variant="outline"
                    className="glass border-neon-green/50 text-neon-green hover:bg-neon-green/10 font-semibold bg-transparent text-sm sm:text-base"
                    onClick={() => playAudioDemo("support", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ElevenLabs_2025-08-03T12_56_07_Callum_pre_sp109_s50_sb75_se0_b_m2-va6y1jztJwTNnBlYFQM7Z6hsm3f17r.mp3")}
                  >
                    {playingAudio === "support" ? (
                      <Pause className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    ) : (
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    )}
                    {playingAudio === "support" ? "Stop Demo" : "Try Demo"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold mb-4 sm:mb-6">
              <span className="text-white">Why Choose </span>
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                CallMint.tech?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-neon-blue/20 to-neon-blue/40 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-8 neon-glow group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-neon-blue" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">Lightning Fast</h3>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                Deploy AI agents in minutes, not months. Revolutionary speed meets enterprise reliability.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-neon-purple/20 to-neon-purple/40 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-8 neon-glow group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-neon-purple" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">Infinitely Scalable</h3>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                Handle millions of calls simultaneously with quantum-grade infrastructure.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-neon-green/20 to-neon-green/40 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-8 neon-glow group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-neon-green" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">Military-Grade Security</h3>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                Enterprise security with quantum encryption and zero-trust architecture.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-12 sm:mt-16">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-green-600/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-green-500/30">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm sm:text-base">HIPAA-Ready</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-500/30">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm sm:text-base">Powered by GPT-5</span>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="glass-card rounded-2xl p-4 sm:p-8 border border-white/10">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm sm:text-lg">JD</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Dr. John Davis</h4>
                  <p className="text-white/60 text-xs sm:text-sm">Medical Director, HealthFirst Clinic</p>
                </div>
              </div>
              <p className="text-white/80 italic text-sm sm:text-base">"CallMint.tech transformed our patient scheduling. The AI handles 200+ calls daily with 99% accuracy. Game changer!"</p>
            </div>
            <div className="glass-card rounded-2xl p-4 sm:p-8 border border-white/10">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm sm:text-lg">SM</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Sarah Martinez</h4>
                  <p className="text-white/60 text-xs sm:text-sm">CEO, TechFlow Solutions</p>
                </div>
              </div>
              <p className="text-white/80 italic text-sm sm:text-base">"Our sales team productivity increased 300% with CallMint's AI agents. ROI in the first month!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-6 sm:p-12 neon-glow">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-6 sm:mb-8">
              Ready to Enter the
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent block">
                Future?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12 font-light">
              Join the AI revolution. Transform your business with intelligent automation.
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
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center neon-glow">
                  <Bot className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-lg sm:text-2xl font-display font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  CallMint.tech
                </span>
              </Link>
              <p className="text-white/60 font-light text-sm sm:text-base">
                Next-generation AI call automation built with n8n, VAPI, and advanced workflows by developer Ahmed for
                the future of business.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base">
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
              <h4 className="font-display font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base">
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
              <h4 className="font-display font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">Contact</h4>
              <ul className="space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base">
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

          <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-white/60">
            <p className="text-xs sm:text-sm">&copy; 2025 CallMint.tech. All rights reserved. Built with n8n, VAPI & advanced workflows by Ahmed.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
