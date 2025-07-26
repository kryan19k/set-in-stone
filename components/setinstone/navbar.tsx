"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/app/providers"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Network", href: "/network" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1a1b23]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Image 
                  src="/Slogo.png" 
                  alt="Set in Stone Logo" 
                  width={40} 
                  height={40}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <span className="font-amsterdam font-bold text-lg text-slate-800 dark:text-slate-200 ml-2">
                et in Stone
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="border-cyan-500/50 dark:border-cyan-400/50 text-cyan-600 dark:text-green-400 hover:bg-green-500 dark:hover:bg-cyan-400/10 hover:border-cyan-600 dark:hover:border-cyan-400"
                >
                  Submit Story
                </Button>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-cyan-500 hover:from-cyan-600 hover:to-cyan-700 dark:hover:from-cyan-500 dark:hover:to-cyan-600 text-white dark:text-slate-900 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/25 transition-all duration-300 font-semibold">
                  Book Session
                </Button>
                <ModeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <ModeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-[#1a1b23]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700/30 md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.6 }}
                className="pt-4 space-y-3"
              >
                <Button
                  variant="outline"
                  className="w-full border-cyan-500/50 dark:border-cyan-400/50 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-400/10 hover:border-cyan-600 dark:hover:border-cyan-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Submit Story
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500 hover:from-cyan-600 hover:to-cyan-700 dark:hover:from-cyan-500 dark:hover:to-cyan-600 text-white dark:text-slate-900 shadow-lg font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Session
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
} 