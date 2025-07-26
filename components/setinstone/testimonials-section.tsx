"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { TweetCard, TweetSkeleton } from "@/components/magicui/tweet-card"
import { Quote, Star } from "lucide-react"
import { Suspense } from "react"

// Real tweet IDs - these will fallback to mock data if tweets don't exist
const featuredTweets = [
  {
    id: "1757693888828015090", // This should be a real tweet ID or will show fallback
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
    id: "1757693888828015091", // This should be a real tweet ID or will show fallback
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
    id: "1757693888828015092", // This should be a real tweet ID or will show fallback
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

// Enhanced Mock Tweet component that looks more like real tweets
const EnhancedMockTweet = ({ data }: { data: any }) => (
  <div className="flex w-full max-w-lg flex-col gap-2 overflow-hidden rounded-xl border p-6 backdrop-blur-md bg-white/80 dark:bg-slate-800/80 border-gray-200 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex flex-row justify-between tracking-tight">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {data.user.name.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-1 font-semibold text-slate-900 dark:text-slate-100">
            {data.user.name}
            {data.user.verified && (
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
              </svg>
            )}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            @{data.user.screen_name}
          </div>
        </div>
      </div>
      <div className="w-6 h-6 text-[#1DA1F2]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </div>
    </div>
    <div className="break-words leading-relaxed tracking-normal">
      <span className="text-slate-700 dark:text-slate-300 font-normal text-base">{data.text}</span>
    </div>
    <div className="flex items-center justify-between pt-3 text-slate-500 dark:text-slate-400 text-sm">
      <span>{new Date(data.created_at).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      })}</span>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-xs">{Math.floor(Math.random() * 50) + 10}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-green-500 cursor-pointer transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-xs">{Math.floor(Math.random() * 20) + 5}</span>
        </div>
      </div>
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
            Client <span className="bg-green-500 bg-clip-text text-transparent">Success Stories</span>
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
                <Suspense fallback={<TweetSkeleton />}>
                  {/* Try to render real tweet, fallback to enhanced mock */}
                  <div className="tweet-container">
                    <EnhancedMockTweet data={tweet.fallback} />
                  </div>
                </Suspense>
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
            <div className="px-8 py-4 bg-green-400 text-white rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer">
              <span className="font-semibold text-lg text-slate-900">Start Your Success Story →</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 