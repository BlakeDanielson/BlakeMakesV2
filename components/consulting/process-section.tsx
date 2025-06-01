"use client"

import { motion } from "framer-motion"
import { Target, Briefcase, Code, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your vision, requirements, and business objectives",
    icon: Target
  },
  {
    step: "02", 
    title: "Strategy",
    description: "Technical architecture planning and detailed project roadmap",
    icon: Briefcase
  },
  {
    step: "03",
    title: "Development", 
    description: "Agile development with regular check-ins and transparent progress",
    icon: Code
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deployment, optimization, and ongoing support for your success",
    icon: Rocket
  }
]

export function ProcessSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300">Process</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How We&apos;ll Work Together
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A proven process that ensures your project is delivered on time, on budget, and exceeds expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-purple-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 