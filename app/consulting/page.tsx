"use client"

import { useRef } from "react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/consulting/hero-section"
import { AboutSection } from "@/components/consulting/about-section"
import { ServicesSection } from "@/components/consulting/services-section"
import { ProcessSection } from "@/components/consulting/process-section"
import { WhyWorkSection } from "@/components/consulting/why-work-section"
import { PricingSection } from "@/components/consulting/pricing-section"
import { ContactSection } from "@/components/consulting/contact-section"

export default function ConsultingPage() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleServicesClick = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <MainNav />
      
      <HeroSection 
        onContactClick={handleContactClick}
        onServicesClick={handleServicesClick}
      />
      
      <AboutSection />
      
      <ServicesSection ref={servicesRef} />
      
      <ProcessSection />
      
      <WhyWorkSection />
      
      <PricingSection onContactClick={handleContactClick} />
      
      <ContactSection ref={contactRef} />

      <SiteFooter />
    </div>
  )
} 