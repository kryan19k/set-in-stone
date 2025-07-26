"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient background - light mode: white/gray, dark mode: slate */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Simple static orbs - no animation */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-cyan-500/5 dark:from-cyan-400/15 dark:to-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-400/8 to-slate-500/5 dark:from-slate-600/12 dark:to-slate-700/8 rounded-full blur-3xl" />
      
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-green-300/6 to-green-600/4 dark:from-green-300/8 dark:to-green-600/6 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.005] dark:opacity-[0.01]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </div>
  )
} 