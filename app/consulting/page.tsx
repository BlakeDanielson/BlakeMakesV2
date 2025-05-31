"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Cpu, 
  Users, 
  Briefcase, 
  Clock,
  Target,
  Rocket,
  Mail,
  Calendar
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConsultingPage() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

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
      description: "From initial concept to final deployment, you own the project and I own the project'ssuccess"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <MainNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <Badge className="mb-4 bg-purple-500/20 text-purple-300">
              Custom Development & Consulting
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-purple-500">Amazing</span> Together
            </h1>
            
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Custom AI-powered applications and strategic product development for forward-thinking companies
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Button
                size="lg"
                className="group bg-purple-600 hover:bg-purple-700"
                onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-800 bg-zinc-950/50 text-white backdrop-blur-sm hover:bg-zinc-900/50 hover:text-purple-300"
                onClick={() => servicesRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-zinc-950/50">
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

      {/* Process Section */}
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

      {/* Why Work With Me Section */}
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

      {/* Pricing Section */}
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
                      onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
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

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300">Get Started</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready To Build Your Vision?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Let&apos;s discuss your project and how I can help bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <span className="text-zinc-300">blakejdanielson@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-purple-400" />
                    <span className="text-zinc-300">Schedule a call to discuss your project</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-purple-400" />
                    <span className="text-zinc-300">Typically respond within 24 hours</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <h4 className="text-lg font-semibold text-white mb-3">What to Include in Your Message:</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Brief description of your project or idea</li>
                  <li>• Your timeline and budget expectations</li>
                  <li>• Any specific technologies or requirements</li>
                  <li>• Your business goals and success metrics</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white">Start Your Project</CardTitle>
                <CardDescription className="text-zinc-400">
                  Tell me about your vision and I&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-zinc-300 mb-2 block">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-zinc-300 mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-zinc-300 mb-2 block">Company (Optional)</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-300 mb-2 block">Project Type</label>
                  <select className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-purple-500 focus:outline-none">
                    <option value="">Select a service</option>
                    <option value="consultation">Product/Strategy Consultation</option>
                    <option value="consultation">Business/Financial Consultation</option>
                    <option value="mvp">MVP Development</option>
                    <option value="full-product">Full Product Development</option>
                    <option value="ai-integration">AI/LLM Integration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-300 mb-2 block">Budget Range</label>
                  <select className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-purple-500 focus:outline-none">
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="discuss">Let&apos;s discuss</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-300 mb-2 block">Project Description</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-purple-500 focus:outline-none resize-none"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
} 