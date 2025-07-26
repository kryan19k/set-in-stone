import { AnimatedBackground } from "@/components/setinstone/animated-background"
import { HeroSection } from "@/components/setinstone/hero-section"
import { ProcessSteps } from "@/components/setinstone/process-steps"
import { ExpertiseSection } from "@/components/setinstone/expertise-section"
import { WhoWeWorkWith } from "@/components/setinstone/who-we-work-with"
import { TestimonialsSection } from "@/components/setinstone/testimonials-section"
import { ServicesGrid } from "@/components/setinstone/services-grid"
import { ContactSection } from "@/components/setinstone/contact-section"

export default function SetInStonePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <ProcessSteps />
        <ExpertiseSection />
        <WhoWeWorkWith />
        <TestimonialsSection />
        <ServicesGrid />
        <ContactSection />
      </div>
    </div>
  )
} 