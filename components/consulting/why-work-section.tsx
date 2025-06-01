"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, Target, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const whyWorkWithMe = [
  {
    icon: Users,
    title: "Bridge Technical & Business",
    description: "Expert at translating complex and high-level ideas into actionable business strategies"
  },
  {
    icon: Briefcase,
    title: "$80M+ Deployment Experience",
    description: "Proven track record working with CEOs and facilitating major technology deployments and investments"
  },
  {
    icon: Target,
    title: "ROI-Focused Solutions",
    description: "Finance-first approach ensures every solution is built with clear business value and returns"
  },
  {
    icon: Rocket,
    title: "End-to-End Ownership",
    description: "From initial concept to final deployment, you own the project and I own the project's success"
  }
]

export function WhyWorkSection() {
  return (
    <section className="py-20 bg-zinc-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300">Why Choose Me</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Your Success Is My Priority
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Unique combination of technical expertise and business acumen to deliver solutions that truly matter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {whyWorkWithMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="p-3 bg-purple-500/20 rounded-lg h-fit">
                <item.icon className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 