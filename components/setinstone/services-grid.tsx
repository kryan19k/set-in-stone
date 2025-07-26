"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { 
  Map, 
  Coins, 
  Zap, 
  Target, 
  Presentation, 
  ArrowRightLeft, 
  Shield, 
  Users, 
  TestTube, 
  TrendingUp 
} from "lucide-react"

const services = [
  {
    icon: Map,
    title: "Strategic Planning & Roadmapping",
    description: "Transform scattered ideas into clear, actionable roadmaps. We help you define milestones, prioritize features, and create realistic timelines that align with your vision and market opportunities."
  },
  {
    icon: Coins,
    title: "Tokenomics Design & Analysis", 
    description: "Design sustainable token economies that drive real utility and value. From supply mechanics to governance structures, we ensure your tokenomics support long-term project success."
  },
  {
    icon: Zap,
    title: "XRPL Integration Strategy",
    description: "Leverage the XRP Ledger's unique capabilities for your project. Whether it's payments, NFTs, or DeFi, we guide you through technical decisions and implementation strategies."
  },
  {
    icon: Target,
    title: "Go-to-Market Planning",
    description: "Develop launch strategies that cut through the noise. From community building to partnership development, we help you reach the right audience at the right time."
  },
  {
    icon: Presentation,
    title: "Investor Pitch Preparation",
    description: "Craft compelling narratives that resonate with investors. We help you articulate your value proposition, market opportunity, and competitive advantages clearly and convincingly."
  },
  {
    icon: ArrowRightLeft,
    title: "Web2 to Web3 Transition",
    description: "Navigate the shift from traditional business models to blockchain-enabled ones. We help you identify opportunities, mitigate risks, and maintain operational continuity during the transition."
  },
  {
    icon: Shield,
    title: "Regulatory & Compliance Guidance",
    description: "Stay ahead of evolving regulations while building innovative products. We help you understand compliance requirements and structure your project for long-term sustainability."
  },
  {
    icon: Users,
    title: "Partnership & Ecosystem Development",
    description: "Build strategic alliances that accelerate your growth. From technical integrations to business partnerships, we help you identify and cultivate valuable relationships."
  },
  {
    icon: TestTube,
    title: "Product-Market Fit Validation",
    description: "Test and refine your assumptions before full-scale launch. We guide you through user research, MVP development, and iterative improvement processes."
  },
  {
    icon: TrendingUp,
    title: "Scaling & Operations Optimization",
    description: "Prepare your project for sustainable growth. From team structure to technical architecture, we help you build systems that can handle increased demand and complexity."
  }
]

export function ServicesGrid() {
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
            Comprehensive <span className="text-cyan-600 dark:text-cyan-400">Strategic Support</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Designed to help you build smarter and scale faster
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="p-6 h-full relative overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon with animated glow */}
                  <div className="relative mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-cyan-500/25 dark:group-hover:shadow-cyan-400/25 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-6 h-6 text-white dark:text-slate-900" />
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 w-12 h-12 bg-cyan-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 relative group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative text-sm">
                    {service.description}
                  </p>

                  {/* Subtle decorative elements */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-green-400/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 