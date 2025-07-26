import { Navbar } from "@/components/setinstone/navbar"
import { AnimatedBackground } from "@/components/setinstone/animated-background"
import { ProcessSteps } from "@/components/setinstone/process-steps"
import { ExpertiseSection } from "@/components/setinstone/expertise-section"
import { ContactSection } from "@/components/setinstone/contact-section"

export default function ProcessPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <div className="relative z-10 pt-24">
        {/* Page Header */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-amsterdam font-bold mb-6 text-slate-900 dark:text-white">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-green-500 bg-clip-text text-transparent">
                Our Process & Expertise
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Discover how we work and what makes us different in the strategic consulting space.
            </p>
          </div>
        </section>

        {/* Process Steps Section */}
        <ProcessSteps />
        
        {/* Expertise Section */}
        <ExpertiseSection />
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  )
} 