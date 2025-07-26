"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  User, 
  Settings, 
  LogOut, 
  MessageSquare, 
  Calendar,
  X,
  Mail,
  Phone
} from "lucide-react"

export function FloatingAvatar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  // Mock user data - replace with actual user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    role: "Entrepreneur",
    avatar: "", // Add avatar URL here
    joinDate: "March 2024"
  }

  return (
    <>
      {/* Floating Avatar Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsProfileOpen(true)}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-green-400 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
          <Avatar className="relative w-14 h-14 border-2 border-white dark:border-slate-800 shadow-xl">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white dark:border-slate-800 rounded-full animate-pulse"></div>
        </motion.button>
      </motion.div>

      {/* Profile Modal */}
      <AnimatePresence>
        {isProfileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsProfileOpen(false)}
            />

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 right-6 z-50 w-80"
            >
              <Card className="p-6 bg-background/95 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    Profile
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsProfileOpen(false)}
                    className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  >
                    <X size={16} />
                  </Button>
                </div>

                {/* User Info */}
                <div className="text-center mb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-blue-200 dark:border-blue-800">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xl font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                    {user.name}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    {user.role}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    Member since {user.joinDate}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail size={16} className="text-slate-500" />
                    <span className="text-slate-600 dark:text-slate-400">{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone size={16} className="text-slate-500" />
                    <span className="text-slate-600 dark:text-slate-400">{user.phone}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/50"
                  >
                    <Calendar size={16} className="mr-2" />
                    Book Another Session
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <MessageSquare size={16} className="mr-2" />
                    Send Message
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Settings size={16} className="mr-2" />
                    Settings
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 border-red-200 dark:border-red-800"
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </Button>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 