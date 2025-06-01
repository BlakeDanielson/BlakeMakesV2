"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const pricingTiers = [
  {
    name: "Consultation",
    price: "Starting at $200/hr",
    description: "Strategy sessions and technical audits",
    features: [
      "Technical architecture review",
      "Product strategy sessions",
      "Technology recommendations",
      "Implementation roadmap",
      "Stakeholder presentations"
    ],
    cta: "Book Consultation",
    priority: "low"
  },
  {
    name: "MVP Development", 
    price: "Starting at $5,000",
    description: "Rapid prototyping and proof of concepts",
    features: [
      "Everything in Consultation",
      "Functional prototype development",
      "Core feature implementation",
      "Basic deployment setup",
      "2 weeks of support"
    ],
    cta: "Start MVP",
    priority: "medium"
  },
  {
    name: "Full Product",
    price: "Starting at $15,000",
    description: "Complete application development and deployment",
    features: [
      "Everything in MVP",
      "Full application development",
      "Production deployment",
      "3 months of support",
      "Training and documentation"
    ],
    cta: "Build Full Product",
    priority: "high"
  }
]

interface PricingSectionProps {
  onContactClick: () => void
}

export function PricingSection({ onContactClick }: PricingSectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300">Pricing</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Flexible Options For Every Need
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Whether you need strategic guidance or a complete solution, I have options that fit your budget and timeline
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full transition-all duration-300 hover:scale-105 ${
                tier.priority === 'high' 
                  ? 'bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-blue-900/40 border-purple-400/60 ring-2 ring-purple-400/30 shadow-2xl shadow-purple-500/20' 
                  : tier.priority === 'medium'
                  ? 'bg-gradient-to-br from-purple-900/20 via-zinc-900/50 to-purple-900/20 border-purple-500/40 ring-1 ring-purple-500/20 shadow-lg shadow-purple-500/10'
                  : 'bg-zinc-900/50 border-zinc-700 hover:border-zinc-600'
              }`}>
                <CardHeader className="text-center">
                  <CardTitle className={`text-2xl ${
                    tier.priority === 'high' ? 'text-white' : 'text-white'
                  }`}>{tier.name}</CardTitle>
                  <div className={`text-3xl font-bold mt-2 ${
                    tier.priority === 'high' 
                      ? 'text-purple-300' 
                      : tier.priority === 'medium'
                      ? 'text-purple-400'
                      : 'text-purple-400'
                  }`}>{tier.price}</div>
                  <CardDescription className={`mt-2 ${
                    tier.priority === 'high' 
                      ? 'text-zinc-300' 
                      : 'text-zinc-400'
                  }`}>
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className={`flex items-center gap-2 text-sm ${
                        tier.priority === 'high' ? 'text-zinc-200' : 'text-zinc-300'
                      }`}>
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${
                          tier.priority === 'high' 
                            ? 'text-purple-300' 
                            : tier.priority === 'medium'
                            ? 'text-purple-400'
                            : 'text-purple-400'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 transition-all duration-300 ${
                      tier.priority === 'high' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25' 
                        : tier.priority === 'medium'
                        ? 'bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-500/20'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                    onClick={onContactClick}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 