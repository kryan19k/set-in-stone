"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, Network, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900 dark:text-slate-100">
            Ready to explore what's{" "}
            <span className="text-green-600 dark:text-green-400">possible?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8">
            If you're feeling stuck, scattered, or overloaded, you don't need to 
            figure it all out by yourself.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Let's Talk Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <Card className="p-8 h-full relative overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 dark:group-hover:shadow-cyan-400/25 transition-all duration-300 group-hover:scale-110">
                  <MessageSquare className="w-8 h-8 text-white dark:text-slate-900" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 relative">
                Let's Talk
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                Schedule a strategic session to discuss your challenges, goals, 
                and explore how we can help you move forward with clarity.
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 hover:from-cyan-600 hover:to-cyan-700 dark:hover:from-cyan-500 dark:hover:to-cyan-600 text-white dark:text-slate-900 border-0 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/25 transition-all duration-300 transform group-hover:scale-105 py-6 text-lg font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Session
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500 dark:from-cyan-500 dark:to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Card>
          </motion.div>

          {/* Explore Network Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <Card className="p-8 h-full relative overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700/50 hover:border-green-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-green-500/10 dark:hover:shadow-green-400/10">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 dark:group-hover:shadow-green-400/25 transition-all duration-300 group-hover:scale-110">
                  <Network className="w-8 h-8 text-white dark:text-slate-900" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 relative">
                Community Network
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                Connect with verified XRPL community leaders, innovative projects, 
                and strategic partners who have collaborated with Stone.
              </p>

              {/* CTA Button */}
              <Button
                variant="outline"
                size="lg"
                className="w-full border-green-500/50 dark:border-green-400/50 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-400/10 hover:border-green-600 dark:hover:border-green-400 shadow-lg hover:shadow-xl hover:shadow-green-500/25 dark:hover:shadow-green-400/25 transition-all duration-300 transform group-hover:scale-105 py-6 text-lg backdrop-blur-sm group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Network
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Card>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-cyan-500/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-400/5 to-green-500/5 rounded-full blur-2xl opacity-50" />
      </div>
    </section>
  )
} 