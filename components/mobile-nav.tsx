"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, Menu, X } from "lucide-react"
import Link from "next/link"

interface MobileNavProps {
  currentPage?: string
}

export function MobileNav({ currentPage }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/chatbot", label: "Chatbot" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg glass border border-white/20 hover:border-neon-blue/50 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-dark-800 border-l border-white/20 shadow-2xl">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center space-x-3" onClick={toggleMenu}>
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center neon-glow">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-display font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    CallMint.tech
                  </span>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4 mb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      currentPage === item.href
                        ? "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <Link href="/pricing" onClick={toggleMenu}>
                <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-semibold neon-glow">
                  Try Now
                </Button>
              </Link>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="space-y-3 text-sm text-white/60">
                  <p className="flex items-center">
                    <span className="text-neon-blue mr-2">📞</span>
                    +91 82176 87679
                  </p>
                  <p className="flex items-center">
                    <span className="text-neon-blue mr-2">📧</span>
                    ayaaz.5819@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
