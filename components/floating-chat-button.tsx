"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Bot, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function FloatingChatButton() {
  const [isVisible, setIsVisible] = useState(true)
  const pathname = usePathname()
  
  // Hide the button if we're already on the chatbot page
  useEffect(() => {
    setIsVisible(pathname !== "/chatbot")
  }, [pathname])
  
  if (!isVisible) return null
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="/chatbot">
        <Button 
          size="lg"
          className="rounded-full w-14 h-14 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white neon-glow shadow-lg animate-pulse-slow"
          aria-label="Chat with our AI assistant"
        >
          <Bot className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  )
}