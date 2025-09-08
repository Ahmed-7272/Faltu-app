"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageSquare,
  Headphones,
  Play,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Mic,
  Bot,
  Cpu,
  Code,
  Database,
  Pause,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function ServicesPage() {
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
              <Link href="/services" className="text-neon-blue font-bold">
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
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-semibold neon-glow">
                Try Now
              </Button>
            </div>
            <MobileNav currentPage="/services" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold glass-card text-neon-blue border-neon-blue/30 mb-8">
              <Code className="w-4 h-4 mr-2" />
              Advanced AI Architecture
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              AI Agents
            </span>
            <br />
            <span className="text-white">Built with</span>
            <br />
            <span className="neon-text text-neon-green">Cutting-Edge Tech</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 font-light">
            Three specialized AI agents powered by <span className="text-neon-blue font-semibold">n8n automation</span>,{" "}
            <span className="text-neon-purple font-semibold">VAPI voice AI</span>, and{" "}
            <span className="text-neon-green font-semibold">advanced workflows</span> - crafted by our lead developer{" "}
            <span className="text-neon-blue font-bold">Ahmed</span>.
          </p>
        </div>
      </section>

      {/* Inbound Agent Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-blue/40 rounded-2xl flex items-center justify-center mr-6 neon-glow">
                  <Phone className="w-8 h-8 text-neon-blue" />
                </div>
                <h2 className="text-4xl font-display font-bold text-white">Inbound Agent</h2>
              </div>
              <p className="text-lg text-white/70 mb-8 font-light leading-relaxed">
                Handle incoming customer queries with{" "}
                <span className="text-neon-blue font-semibold">intelligent responses</span>, natural conversation flow,
                and seamless call routing powered by{" "}
                <span className="text-neon-purple font-semibold">n8n workflows</span> and{" "}
                <span className="text-neon-green font-semibold">VAPI integration</span>.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-blue/20">
                  <CheckCircle className="w-5 h-5 text-neon-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">24/7 availability with n8n automation workflows</span>
                </div>
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-blue/20">
                  <CheckCircle className="w-5 h-5 text-neon-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">Advanced NLP processing with n8n workflow automation</span>
                </div>
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-blue/20">
                  <CheckCircle className="w-5 h-5 text-neon-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">Intelligent routing with n8n decision nodes</span>
                </div>
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-blue/20">
                  <CheckCircle className="w-5 h-5 text-neon-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">CRM integration via n8n connectors and webhooks</span>
                </div>
              </div>

              <Button
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-bold neon-glow transform hover:scale-105 transition-all duration-300"
                onClick={() => playAudioDemo("inbound", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ElevenLabs_2025-08-03T12_57_02_Alice_pre_sp100_s50_sb75_se0_b_m2-jWjOVFusJFhMhFhD1PrOeefiDh6CH4.mp3")}
              >
                {playingAudio === "inbound" ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {playingAudio === "inbound" ? "Stop Demo" : "Try Live Demo"}
              </Button>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-neon-blue/30 neon-glow">
              <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
                <Cpu className="w-6 h-6 mr-3 text-neon-blue" />
                Tech Stack & Use Cases
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-neon-blue/10 to-transparent rounded-xl p-6 border border-neon-blue/20">
                  <h4 className="font-display font-semibold text-white mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-neon-blue" />
                    Customer Support Automation
                  </h4>
                  <p className="text-white/70 text-sm font-light">
                    Built with n8n automation workflows and VAPI integration for real-time query processing
                  </p>
                </div>
                <div className="bg-gradient-to-r from-neon-purple/10 to-transparent rounded-xl p-6 border border-neon-purple/20">
                  <h4 className="font-display font-semibold text-white mb-3 flex items-center">
                    <Database className="w-4 h-4 mr-2 text-neon-purple" />
                    Lead Qualification Engine
                  </h4>
                  <p className="text-white/70 text-sm font-light">
                    Advanced algorithms with n8n workflow logic for intelligent lead scoring and routing
                  </p>
                </div>
                <div className="bg-gradient-to-r from-neon-green/10 to-transparent rounded-xl p-6 border border-neon-green/20">
                  <h4 className="font-display font-semibold text-white mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-neon-green" />
                    Appointment Scheduling
                  </h4>
                  <p className="text-white/70 text-sm font-light">
                    Calendar integrations with n8n scheduling nodes and VAPI voice confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outbound Agent Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dark-800/50 to-dark-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-3xl p-8 border border-neon-purple/30 neon-glow order-2 lg:order-1">
              <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-3 text-neon-purple" />
                Advanced Architecture
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-neon-purple/10 to-transparent rounded-xl p-6 border border-neon-purple/20">
                  <h4 className="font-display font-semibold text-white mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-neon-purple" />
                    Sales Outreach Engine
                  </h4>
                  <p className="text-white/70 text-sm font-light">
                    Automated cold calling with n8n-powered personalized script generation
                  </p>
                </div>
                <div className="bg-gradient-to-r from-neon-blue/10 to-transparent rounded-xl p-6 border border-neon-blue/20">
                  <h4 className="font-display font-semibold text-white mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-neon-blue" />
                    Follow-up Automation
                  </h4>
                  <p className="text-white/70 text-sm font-light">
                    n8n-powered nurture sequences with VAPI voice engagement
                  </p>
                </div>
                <div className="bg-gradient-to-r from-neon-green/10 to-transparent rounded-xl p-6 border border-neon-green/20">
                  <h4 className="font-display font-semibold text-white mb-3 flex items-center">
                    <Database className="w-4 h-4 mr-2 text-neon-green" />
                    Survey & Analytics
                  </h4>
                  <p className="text-white/70 text-sm font-light">
                    Real-time feedback collection with n8n data processing and VAPI voice surveys
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple/20 to-neon-purple/40 rounded-2xl flex items-center justify-center mr-6 neon-glow">
                  <MessageSquare className="w-8 h-8 text-neon-purple" />
                </div>
                <h2 className="text-4xl font-display font-bold text-white">Outbound Agent</h2>
              </div>
              <p className="text-lg text-white/70 mb-8 font-light leading-relaxed">
                Automate sales calls and follow-ups with{" "}
                <span className="text-neon-purple font-semibold">personalized scripts</span>, natural conversations, and
                intelligent lead nurturing powered by{" "}
                <span className="text-neon-blue font-semibold">n8n automation</span> and{" "}
                <span className="text-neon-green font-semibold">VAPI voice technology</span>.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-purple/20">
                  <CheckCircle className="w-5 h-5 text-neon-purple mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">Dynamic script generation with n8n workflow logic</span>
                </div>
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-purple/20">
                  <CheckCircle className="w-5 h-5 text-neon-purple mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">Automated sequences with n8n trigger-based workflows</span>
                </div>
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-purple/20">
                  <CheckCircle className="w-5 h-5 text-neon-purple mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">Real-time conversation adaptation with n8n conditional logic</span>
                </div>
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-purple/20">
                  <CheckCircle className="w-5 h-5 text-neon-purple mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">Advanced CRM integration with n8n native connectors</span>
                </div>
              </div>

              <Button
                className="bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-purple/80 hover:to-neon-pink/80 text-white font-bold neon-glow transform hover:scale-105 transition-all duration-300"
                onClick={() => playAudioDemo("outbound", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ElevenLabs_2025-08-03T12_55_15_Brian_pre_sp101_s50_sb75_se0_b_m2-HA0lquY9vpqzODxrNsuxpa7nt2LbDL.mp3")}
              >
                {playingAudio === "outbound" ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {playingAudio === "outbound" ? "Stop Demo" : "Try Live Demo"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Agent Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-green/40 rounded-2xl flex items-center justify-center mr-6 neon-glow">
                  <Headphones className="w-8 h-8 text-neon-green" />
                </div>
                <h2 className="text-4xl font-display font-bold text-white">Support Agent</h2>
              </div>
              <p className="text-lg text-white/70 mb-8 font-light leading-relaxed">
                Provide 24/7 customer support with{" "}
                <span className="text-neon-green font-semibold">instant problem resolution</span>, knowledge base
                integration, and intelligent escalation powered by{" "}
                <span className="text-neon-blue font-semibold">n8n workflows</span> and{" "}
                <span className="text-neon-purple font-semibold">VAPI voice AI</span>.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-green/20">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">Instant knowledge base access with n8n data retrieval</span>
                </div>
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-green/20">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">Multi-language support with n8n translation workflows</span>
                </div>
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-green/20">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">Sentiment analysis with n8n AI processing nodes</span>
                </div>
                <div className="flex items-start glass-card p-4 rounded-xl border border-neon-green/20">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/80">Advanced ticket management with n8n workflow automation</span>
                </div>
              </div>

              <Button
                className="bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-green/80 hover:to-neon-blue/80 text-white font-bold neon-glow transform hover:scale-105 transition-all duration-300"
                onClick={() => playAudioDemo("support", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ElevenLabs_2025-08-03T12_56_07_Callum_pre_sp109_s50_sb75_se0_b_m2-va6y1jztJwTNnBlYFQM7Z6hsm3f17r.mp3")}
              >
                {playingAudio === "support" ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {playingAudio === "support" ? "Stop Demo" : "Try Live Demo"}
              </Button>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-neon-green/30 neon-glow">
              <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-neon-green" />
                Enterprise Solutions
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-neon-green/10 to-transparent rounded-xl p-6 border border-neon-green/20">
                  <h4 className="font-display font-semibold text-white mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-neon-green" />
                    Technical Support Engine
                  </h4>
                  <p className="text-white/70 text-sm font-light">
                    Advanced troubleshooting with n8n diagnostic workflows and VAPI voice guidance
                  </p>
                </div>
                <div className="bg-gradient-to-r from-neon-blue/10 to-transparent rounded-xl p-6 border border-neon-blue/20">
                  <h4 className="font-display font-semibold text-white mb-3 flex items-center">
                    <Database className="w-4 h-4 mr-2 text-neon-blue" />
                    Account Management
                  </h4>
                  <p className="text-white/70 text-sm font-light">
                    Billing and subscription management with n8n automation and secure processing
                  </p>
                </div>
                <div className="bg-gradient-to-r from-neon-purple/10 to-transparent rounded-xl p-6 border border-neon-purple/20">
                  <h4 className="font-display font-semibold text-white mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2 text-neon-purple" />
                    Product Intelligence
                  </h4>
                  <p className="text-white/70 text-sm font-light">
                    Detailed product information with n8n data workflows and real-time VAPI updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Powered by
            </span>
            <br />
            <span className="text-white">Next-Gen Technology</span>
          </h2>
          <p className="text-xl text-white/70 mb-16 font-light">
            Built with the most advanced web technologies for enterprise-grade performance
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card border-neon-blue/30 hover:border-neon-blue/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-blue/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-neon-blue/20 to-neon-blue/40 rounded-2xl flex items-center justify-center mx-auto mb-8 neon-glow">
                  <Mic className="w-10 h-10 text-neon-blue" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">VAPI Integration</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Advanced voice AI platform integrated with n8n workflows for natural, human-like conversations with
                  ultra-low latency.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-purple/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-neon-purple/20 to-neon-purple/40 rounded-2xl flex items-center justify-center mx-auto mb-8 neon-glow">
                  <Brain className="w-10 h-10 text-neon-purple" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Relevance AI</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Intelligent automation platform powered by n8n workflow orchestration for context-aware responses and
                  decision making.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon-green/30 hover:border-neon-green/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-green/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-neon-green/20 to-neon-green/40 rounded-2xl flex items-center justify-center mx-auto mb-8 neon-glow">
                  <Zap className="w-10 h-10 text-neon-green" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">GPT Technology</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Latest GPT models integrated with n8n AI nodes for advanced language understanding and generation
                  capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 neon-glow">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Ready to Deploy
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent block">
                Your AI Agents?
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-12 font-light">
              Get started with CallMint.tech today and transform your business communications with cutting-edge
              technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white px-12 py-4 text-lg font-bold neon-glow transform hover:scale-105 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-white/30 text-white hover:bg-white/10 px-12 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Bot className="w-5 h-5 mr-2" />
                  Book Demo
                </Button>
              </Link>
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
                Next-generation AI call automation built with n8n, VAPI, and advanced workflows by developer Ahmed for
                the future of business.
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
