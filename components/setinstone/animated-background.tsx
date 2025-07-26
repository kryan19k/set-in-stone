"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient background - dark grey theme like Bullish Cafe */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#1a1b23] dark:via-[#1e1f28] dark:to-[#16171e]" />
      
      {/* Cyan/teal orbs for the dark theme */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-cyan-500/5 dark:from-cyan-400/25 dark:to-cyan-500/20 rounded-full blur-3xl" />
      
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-400/8 to-slate-500/5 dark:from-cyan-600/20 dark:to-cyan-700/15 rounded-full blur-3xl" />
      
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-green-300/6 to-green-600/4 dark:from-cyan-300/15 dark:to-cyan-600/12 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern overlay with cyan accent */}
      <div className="absolute inset-0 opacity-[0.005] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </div>
  )
} 