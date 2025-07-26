"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Globe, TrendingUp, Zap } from "lucide-react"

const expertiseAreas = [
  {
    icon: Globe,
    title: "Web3 & XRPL Expertise",
    description: "Deep knowledge of blockchain ecosystems, tokenomics, and the XRP Ledger. Whether you're building DeFi protocols, NFT projects, or exploring cross-chain solutions, we bring specialized expertise that's hard to find elsewhere."
  },
  {
    icon: TrendingUp,
    title: "Strategic Bridge Building",
    description: "We help Web2 companies transition into Web3 and Web3 projects scale sustainably. Our approach connects traditional business strategy with emerging technologies, ensuring you don't lose sight of fundamentals while innovating."
  },
  {
    icon: Zap,
    title: "Practical, Not Theoretical",
    description: "Every recommendation is grounded in real-world experience and market realities. No buzzword-heavy presentations—just clear, actionable strategies that help you build something people actually want and use."
  }
]

export function ExpertiseSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Why choose strategic advisory over{" "}
            <span className="text-cyan-600 dark:text-cyan-400">going it alone?</span>
          </h2>
        </motion.div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="p-8 h-full relative overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10">
                  {/* Background blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon with glow effect */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 dark:group-hover:shadow-cyan-400/25 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-white dark:text-slate-900" />
                    </div>
                    {/* Green accent glow effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 relative">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative">
                    {area.description}
                  </p>

                  {/* Floating particles effect - green accents */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-green-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse" />
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-green-300/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
                  <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-green-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-100" />
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 