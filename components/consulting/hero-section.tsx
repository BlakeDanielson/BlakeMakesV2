"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface HeroSectionProps {
  onContactClick: () => void
  onServicesClick: () => void
}

export function HeroSection({ onContactClick, onServicesClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <Badge className="mb-4 bg-purple-500/20 text-purple-300">
            Custom Development & Consulting
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Let&apos;s Build Something{" "}
            <span className="text-purple-500">Amazing</span> Together
          </h1>
          
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Custom AI-powered applications and strategic product development for forward-thinking companies
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="group bg-purple-600 hover:bg-purple-700"
              onClick={onContactClick}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-zinc-800 bg-zinc-950/50 text-white backdrop-blur-sm hover:bg-zinc-900/50 hover:text-purple-300"
              onClick={onServicesClick}
            >
              View Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 