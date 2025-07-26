"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MagicTweet, TweetSkeleton } from "@/components/magicui/tweet-card"
import { Quote, Star } from "lucide-react"

// Mock tweet data - replace with real tweet IDs
const featuredTweets = [
  {
    id: "1234567890", // Replace with real tweet ID
    fallback: {
      user: {
        name: "Alex Chen",
        screen_name: "alexchen_web3",
        profile_image_url_https: "/placeholder.png",
        verified: true
      },
      text: "Working with Set in Stone transformed our DeFi protocol launch. Their strategic guidance helped us go from idea to $50M TVL in 6 months. Absolutely incredible results! 🚀",
      created_at: "2024-01-15"
    }
  },
  {
    id: "1234567891", // Replace with real tweet ID  
    fallback: {
      user: {
        name: "Sarah Martinez",
        screen_name: "sarahm_nft",
        profile_image_url_https: "/placeholder.png",
        verified: false
      },
      text: "The tokenomics design and community strategy from @SetInStone was game-changing for our NFT project. We sold out in 12 minutes and built a thriving community of 50k+ holders.",
      created_at: "2024-01-10"
    }
  },
  {
    id: "1234567892", // Replace with real tweet ID
    fallback: {
      user: {
        name: "Marcus Johnson",
        screen_name: "marcus_dao",
        profile_image_url_https: "/placeholder.png", 
        verified: true
      },
      text: "Set in Stone helped us transition from Web2 to Web3 seamlessly. Their regulatory compliance guidance and technical expertise saved us months of development time.",
      created_at: "2024-01-05"
    }
  }
]

const testimonials = [
  {
    quote: "Set in Stone didn't just provide consulting - they became true partners in our journey. Their deep understanding of both Web3 technology and traditional business helped us bridge the gap perfectly.",
    author: "Jennifer Liu",
    role: "CEO, ChainBridge Protocol",
    company: "DeFi Infrastructure",
    rating: 5,
    gradient: "from-cyan-400/15 to-cyan-500/10 dark:from-cyan-400/20 dark:to-cyan-500/15",
    border: "border-cyan-400/30"
  },
  {
    quote: "The strategic clarity they provided was exactly what we needed. From tokenomics to community building, every piece of advice was actionable and results-driven.",
    author: "David Rodriguez", 
    role: "Founder, MetaVerse Studios",
    company: "Gaming & NFTs",
    rating: 5,
    gradient: "from-green-400/15 to-green-500/10 dark:from-green-400/20 dark:to-green-500/15",
    border: "border-green-400/30"
  },
  {
    quote: "Working with Set in Stone was a game-changer for our DAO. They helped us structure governance, design incentives, and build a sustainable ecosystem that continues to thrive.",
    author: "Emily Chen",
    role: "Community Lead, DecentralDAO",
    company: "Governance & DAOs", 
    rating: 5,
    gradient: "from-blue-400/15 to-blue-500/10 dark:from-blue-400/20 dark:to-blue-500/15",
    border: "border-blue-400/30"
  }
]

// Mock tweet component for fallback
const MockTweet = ({ data }: { data: any }) => (
  <div className="flex size-full max-w-lg flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700/50">
    <div className="flex flex-row justify-between tracking-tight">
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
          {data.user.name.charAt(0)}
        </div>
        <div>
          <div className="flex items-center whitespace-nowrap font-semibold">
            {data.user.name}
            {data.user.verified && (
              <div className="ml-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            )}
          </div>
          <div className="text-sm text-gray-500">
            @{data.user.screen_name}
          </div>
        </div>
      </div>
      <div className="w-5 h-5 text-[#3BA9EE]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
        </svg>
      </div>
    </div>
    <div className="break-words leading-normal tracking-tighter">
      <span className="text-sm font-normal">{data.text}</span>
    </div>
  </div>
)

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-gray-100/50 dark:from-slate-800/50 dark:via-slate-900/50 dark:to-slate-800/50">
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
            Client <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-green-500 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. See how we've helped Web3 projects achieve 
            breakthrough success and build thriving communities.
          </p>
        </motion.div>

        {/* Tweet Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
            What Our Clients Are Saying
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTweets.map((tweet, index) => (
              <motion.div
                key={tweet.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="flex justify-center"
              >
                {/* Use MockTweet for now - replace with TweetCard when you have real tweet IDs */}
                <MockTweet data={tweet.fallback} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Traditional Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
            In-Depth Client Testimonials
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className={`p-6 h-full relative overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 border-gray-200 dark:border-slate-700/50 ${testimonial.border} transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10`}>
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Quote icon */}
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-cyan-400 dark:text-cyan-300" />
                  </div>

                  {/* Testimonial text */}
                  <div className="relative mb-6">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="relative flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author info */}
                  <div className="relative">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Hover effect accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/10 via-green-400/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Ready to become our next success story?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <div className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-green-600 hover:from-cyan-400 hover:via-blue-400 hover:to-green-500 text-white rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer">
              <span className="font-semibold text-lg">Start Your Success Story →</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 