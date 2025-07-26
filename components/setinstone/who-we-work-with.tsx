"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const clientCategories = [
  {
    title: "Web3 Founders & Startups",
    description: "Early-stage blockchain projects and innovative Web3 entrepreneurs",
    clients: ["Web3 Founders", "Blockchain Startups", "DeFi Protocol Teams", "Token Launch Teams"],
    gradient: "from-cyan-400/15 to-cyan-500/10 dark:from-cyan-400/20 dark:to-cyan-500/15",
    border: "border-cyan-400/30 hover:border-cyan-400/50",
    shadow: "hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/25"
  },
  {
    title: "Digital Asset Projects",
    description: "NFT collections, DAOs, and creator economy initiatives",
    clients: ["NFT Project Leaders", "DAO Contributors", "Creator Economy Projects", "Community-Driven Projects"],
    gradient: "from-green-400/15 to-green-500/10 dark:from-green-400/20 dark:to-green-500/15", 
    border: "border-green-400/30 hover:border-green-400/50",
    shadow: "hover:shadow-green-500/25 dark:hover:shadow-green-400/25"
  },
  {
    title: "Enterprise & Transition",
    description: "Traditional companies exploring blockchain and Web3 adoption",
    clients: ["Web2 to Web3 Transitions", "Enterprise Blockchain", "Traditional VCs", "Regulatory Compliance"],
    gradient: "from-blue-400/15 to-blue-500/10 dark:from-blue-400/20 dark:to-blue-500/15",
    border: "border-blue-400/30 hover:border-blue-400/50", 
    shadow: "hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25"
  },
  {
    title: "Gaming & Metaverse",
    description: "Next-generation gaming studios and virtual world builders",
    clients: ["GameFi Studios", "Metaverse Builders", "Cross-Chain Projects", "XRPL Developers"],
    gradient: "from-purple-400/15 to-purple-500/10 dark:from-purple-400/20 dark:to-purple-500/15",
    border: "border-purple-400/30 hover:border-purple-400/50",
    shadow: "hover:shadow-purple-500/25 dark:hover:shadow-purple-400/25"
  },
  {
    title: "Professional Services",
    description: "Supporting the Web3 ecosystem with specialized expertise",
    clients: ["Smart Contract Auditors", "Web3 Marketing Agencies", "Tokenomics Designers", "Crypto Investment Firms"],
    gradient: "from-slate-400/15 to-slate-500/10 dark:from-slate-400/20 dark:to-slate-500/15",
    border: "border-slate-400/30 hover:border-slate-400/50",
    shadow: "hover:shadow-slate-500/25 dark:hover:shadow-slate-400/25"
  }
]

export function WhoWeWorkWith() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50/50 via-white to-gray-100/50 dark:from-slate-900/50 dark:via-slate-800/50 dark:to-slate-900/50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Who We <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Work With</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From early-stage Web3 founders to established companies exploring blockchain, 
            we partner with visionaries who are building the future. Whether you're launching 
            your first token or scaling a DeFi protocol, we provide the strategic clarity you need.
          </p>
        </motion.div>

        {/* Client category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className={`p-6 h-full relative overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700/50 ${category.border} transition-all duration-500 shadow-lg hover:shadow-2xl ${category.shadow}`}>
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Category title */}
                <div className="relative mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {category.description}
                  </p>
                </div>

                {/* Client tags */}
                <div className="relative flex flex-wrap gap-2">
                  {category.clients.map((client, clientIndex) => (
                    <motion.span
                      key={client}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (clientIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="text-xs px-3 py-1.5 bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 group-hover:bg-white/90 dark:group-hover:bg-slate-600/90"
                    >
                      {client}
                    </motion.span>
                  ))}
                </div>

                {/* Hover effect accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/10 via-green-400/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Don't see your category? We work with all types of Web3 innovators.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <div className="px-8 py-3 bg-gradient-to-r from-cyan-500/10 to-green-500/10 dark:from-cyan-400/20 dark:to-green-400/20 text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-400/30 dark:border-cyan-400/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/25 transition-all duration-300 cursor-pointer">
              <span className="font-medium">Let's discuss your project →</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 