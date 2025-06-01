"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Code, Cpu, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Cpu,
    title: "AI Product Development",
    description: "Custom AI integrations, LLM applications, and intelligent automation solutions",
    features: [
      "Custom AI/LLM integrations",
      "Intelligent automation workflows",
      "Data analysis and insights",
      "AI-powered user experiences"
    ]
  },
  {
    icon: Users,
    title: "Strategic Consulting",
    description: "Product strategy, technical roadmapping, and stakeholder alignment",
    features: [
      "Product strategy and roadmapping",
      "Technical architecture planning",
      "Stakeholder communication",
      "ROI-focused solutions"
    ]
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Complete web applications from concept to deployment",
    features: [
      "React/Next.js applications",
      "Database design and optimization",
      "API development and integration",
      "Cloud deployment and scaling"
    ]
  }
]

export const ServicesSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-zinc-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300">Services</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What I Can Build For You
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From AI integrations to full-stack applications, I deliver solutions that drive real business value
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-purple-500/50 transition-colors h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <service.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-zinc-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

ServicesSection.displayName = "ServicesSection" 