import { Navbar } from "@/components/setinstone/navbar"
import { AnimatedBackground } from "@/components/setinstone/animated-background"
import { HeroSection } from "@/components/setinstone/hero-section"
import { ProcessSteps } from "@/components/setinstone/process-steps"
import { ExpertiseSection } from "@/components/setinstone/expertise-section"
import { WhoWeWorkWith } from "@/components/setinstone/who-we-work-with"
import { ServicesGrid } from "@/components/setinstone/services-grid"
import { ContactSection } from "@/components/setinstone/contact-section"
import { FloatingAvatar } from "@/components/setinstone/floating-avatar"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <ProcessSteps />
        <ExpertiseSection />
        <WhoWeWorkWith />
        <ServicesGrid />
        <ContactSection />
      </div>
      
      {/* Floating Avatar */}
      <FloatingAvatar />
    </div>
  )
}
