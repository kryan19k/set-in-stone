"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { HyperText } from "@/components/magicui/hyper-text"

// Lightweight text rotator - no blur effects or complex animations
function SimpleTextRotator({ texts, className }: { texts: string[], className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 3000) // Change every 3 seconds
    
    return () => clearInterval(interval)
  }, [texts.length])
  
  return (
    <div className={className}>
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {texts[currentIndex]}
      </motion.span>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-52 overflow-hidden">
      {/* Simple static pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px',
            color: 'rgb(34 211 238 / 0.3)'
          }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main content - centered and properly spaced */}
        <div className="text-center space-y-8 relative z-20 px-4">
          {/* Brand title with clean styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-amsterdam font-bold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-slate-700 to-green-500 bg-clip-text text-transparent drop-shadow-2xl">
                Set in Stone
              </span>
            </h1>
          </motion.div>

          {/* Simple rotating text tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <SimpleTextRotator
              texts={[
                "Building Tomorrow",
                "Scaling Smarter", 
                "Thinking Bigger",
                "Creating Value",
                "Growing Together",
                "Innovating Always"
              ]}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white h-12 md:h-16  pt-24 flex items-center justify-center"
            />
          </motion.div>

          {/* Enhanced subtitle with HyperText */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl font-medium max-w-4xl mx-auto leading-relaxed"
          >
            <div className="text-lg md:text-xl lg:text-2xl font-medium text-gray-300 leading-relaxed">
              Whether you're in Web3 or Web2, launching a product, shaping strategy, or finding your next breakthrough— I help you move forward with absolute clarity.
            </div>
          </motion.div>

          {/* Enhanced CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-green-600 hover:from-cyan-400 hover:via-blue-400 hover:to-green-500 text-white border-0 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-105 px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold rounded-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Let's Transform Your Vision
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 border-green-400/50 bg-transparent hover:bg-green-400/10 text-green-300 hover:text-white shadow-2xl hover:shadow-cyan-400/50 transition-all duration-500 transform hover:scale-105 px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-semibold rounded-2xl backdrop-blur-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Our Network
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>

          {/* Stats or features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 pt-12 md:pt-16"
          >
            {[
              { number: "50+", label: "Success Stories" },
              { number: "5x", label: "Average Growth" },
              { number: "24/7", label: "Strategic Support" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center backdrop-blur-xl bg-white/5 rounded-xl p-4 md:p-6 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Simple scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center backdrop-blur-xl bg-white/10">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 