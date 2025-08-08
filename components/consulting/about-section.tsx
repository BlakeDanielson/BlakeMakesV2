"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Users, Target, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section className="py-20 bg-zinc-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300">About Blake</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Your Technical & Business Partner
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <Image
                src="/blake.jpg"
                alt="Blake Danielson"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-zinc-800"
                width={300}
                height={300}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Hi, I&apos;m Blake Danielson
              </h3>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                I&apos;m a startup veteran who keeps coming back to the trenches. I bridge the gap between complex technical solutions and real business value. With 5+ years bringing <span className="text-purple-400 font-semibold">Founder's and CEO's visions to life</span>, I help people and companies turn ambitious ideas into profitable realities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative flex items-start gap-3 p-4 bg-zinc-900/80 border border-purple-500/30 rounded-xl backdrop-blur-sm group-hover:border-purple-400/50 transition-all duration-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg mt-1 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Code className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-purple-100 transition-colors duration-300">Technical Expertise</h4>
                    <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">AI/LLM integrations, React/Next.js, Python, full-stack development, data models, cloud architecture</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative flex items-start gap-3 p-4 bg-zinc-900/80 border border-purple-500/30 rounded-xl backdrop-blur-sm group-hover:border-purple-400/50 transition-all duration-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg mt-1 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Users className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-purple-100 transition-colors duration-300">Business Acumen</h4>
                    <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Product strategy, ROI optimization, stakeholder management, financial modeling</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative flex items-start gap-3 p-4 bg-zinc-900/80 border border-purple-500/30 rounded-xl backdrop-blur-sm group-hover:border-purple-400/50 transition-all duration-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg mt-1 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Target className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-purple-100 transition-colors duration-300">Proven Results</h4>
                    <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">CEO-level consulting, major deployment experience, finance-first approach</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative flex items-start gap-3 p-4 bg-zinc-900/80 border border-purple-500/30 rounded-xl backdrop-blur-sm group-hover:border-purple-400/50 transition-all duration-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg mt-1 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Rocket className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-purple-100 transition-colors duration-300">End-to-End Delivery</h4>
                    <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">From concept to deployment, with ongoing support and optimization</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="pt-4">
              <p className="text-zinc-400 italic">
                &ldquo;I don&apos;t just build software—I build solutions that drive measurable business growth and competitive advantage.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 