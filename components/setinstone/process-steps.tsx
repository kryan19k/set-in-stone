"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Listen",
    description: "We start with understanding where you are and where you want to go. No assumptions, no generic playbooks—just honest conversation about your challenges, goals, and the real constraints you're working with."
  },
  {
    number: "02", 
    title: "Clarify",
    description: "Together, we turn scattered thoughts into structured strategy. Whether it's refining your value proposition, mapping out tokenomics, or defining your go-to-market approach, we bring clarity to complexity."
  },
  {
    number: "03",
    title: "Build", 
    description: "With a clear roadmap in place, we help you execute with confidence. From MVP planning to investor pitch prep, we provide the strategic guidance and tactical support to move from idea to reality."
  },
  {
    number: "04",
    title: "Scale",
    description: "As you grow, we adapt our support to match your evolving needs. Whether it's expanding into new markets, optimizing operations, or preparing for the next funding round, we're here for the long haul."
  }
]

export function ProcessSteps() {
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
            Our <span className="text-cyan-600 dark:text-cyan-400">Process</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A structured approach to turning your vision into reality
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="p-8 h-full relative overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Step number */}
                <div className="relative mb-6">
                  <div className="text-6xl font-bold text-slate-300/40 dark:text-slate-600/30 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 relative -mt-8 ml-2">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative">
                  {step.description}
                </p>

                {/* Hover effect overlay - green accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 