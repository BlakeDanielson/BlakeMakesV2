"use client"

import { forwardRef } from "react"
import { ArrowRight, Mail, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-zinc-950/50">
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
  )
})

ContactSection.displayName = "ContactSection" 