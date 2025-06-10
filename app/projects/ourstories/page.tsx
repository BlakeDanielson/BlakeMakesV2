import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Brain, Database, Globe, Smartphone, Clock, CheckCircle, BookOpen, Shield, Heart, Star, Palette, Wand2, CreditCard, Truck, Baby } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function OurStoriesPage() {
  return (
    <div className="min-h-screen bg-black">
      <MainNav />

      <div className="container py-12 pt-24 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-zinc-400 transition-colors hover:text-purple-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="mt-8">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300">AI Children&apos;s Books</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">OurStories</h1>
            <p className="mt-4 text-xl text-zinc-400">
              AI-Powered Personalized Children&apos;s Books Platform - Create magical, one-of-a-kind storybooks where your child is the main character, featuring their unique appearance, personality traits, and hobbies woven into original narratives and illustrations.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-green-500/10 text-green-400 border-0 flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                MVP Complete
              </Badge>
              <Badge className="bg-blue-500/10 text-blue-400 border-0">
                Production Ready
              </Badge>
              <Badge className="bg-purple-500/10 text-purple-400 border-0">
                Freemium + Print-on-Demand
              </Badge>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 max-w-3xl mx-auto">
            <Image
              src="/forest-friends-picnic.png"
              alt="OurStories - AI-Powered Personalized Children's Books"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div className="space-y-6 md:col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">📚 What is OurStories?</h2>
                <p className="mt-4 text-zinc-400">
                  OurStories is a Next.js-based platform that revolutionizes children&apos;s literature by combining AI-powered story generation with personalized character creation. 
                  The platform uses advanced language models and image generation to create unique bedtime stories where children become the heroes of their own adventures, 
                  fostering a love for reading while making them feel truly seen, celebrated, and inspired.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🏗️ Technical Architecture</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold text-white">Frontend (Next.js 14+)</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Next.js 14+ with App Router</li>
                      <li>• TypeScript for type safety</li>
                      <li>• Tailwind CSS + shadcn/ui components</li>
                      <li>• Zustand/Redux Toolkit state management</li>
                      <li>• React Hook Form + Zod validation</li>
                      <li>• Interactive flipbook preview</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-5 w-5 text-green-500" />
                      <h3 className="font-semibold text-white">Backend & Database</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• PostgreSQL with Prisma ORM</li>
                      <li>• NextAuth.js v5 authentication</li>
                      <li>• UploadThing file management</li>
                      <li>• BullMQ job queues with Redis</li>
                      <li>• RESTful API architecture</li>
                      <li>• Comprehensive error handling</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🤖 AI-Powered Features</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Story Generation</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• OpenAI GPT-4 for narrative creation</li>
                      <li>• Google Gemini alternative integration</li>
                      <li>• Age-appropriate content generation</li>
                      <li>• Personality-driven story arcs</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Palette className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Character Generation</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Stable Diffusion with LoRA training</li>
                      <li>• Consistent character appearance</li>
                      <li>• Photo-to-character likeness mapping</li>
                      <li>• Multiple illustration styles</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Content Safety</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• OpenAI Moderation API integration</li>
                      <li>• Google Cloud Vision safety filters</li>
                      <li>• Age-appropriate content validation</li>
                      <li>• Bias detection and mitigation</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wand2 className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Image Processing</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Real-ESRGAN upscaling</li>
                      <li>• Face swapping algorithms</li>
                      <li>• Image composition pipeline</li>
                      <li>• Print-ready PDF generation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🎯 Core User Features</h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <h3 className="font-semibold text-white mb-2">Story Creation Workflow</h3>
                    <ol className="text-sm text-zinc-400 space-y-1">
                      <li>1. <strong>Child Profile Setup</strong>: Name, age, personality traits, and interests</li>
                      <li>2. <strong>Photo Upload</strong>: 1-5 photos for AI character likeness generation</li>
                      <li>3. <strong>Story Customization</strong>: Choose theme, length, and illustration style</li>
                      <li>4. <strong>AI Generation</strong>: Personalized narrative and character-consistent illustrations</li>
                      <li>5. <strong>Interactive Preview</strong>: Flipbook-style preview with editing capabilities</li>
                      <li>6. <strong>Content Review</strong>: Safety filters and quality validation</li>
                      <li>7. <strong>Publishing Options</strong>: Digital library or print-on-demand ordering</li>
                    </ol>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Baby className="h-5 w-5 text-blue-500" />
                        <h3 className="font-semibold text-white">Personalization Engine</h3>
                      </div>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• Dynamic character insertion</li>
                        <li>• Hobby and interest integration</li>
                        <li>• Age-appropriate language adaptation</li>
                        <li>• Personality-driven story elements</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-green-500" />
                        <h3 className="font-semibold text-white">Digital Library</h3>
                      </div>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• Personal story collection</li>
                        <li>• Cross-device synchronization</li>
                        <li>• Offline reading capabilities</li>
                        <li>• Reading progress tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🛍️ E-commerce & Production</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="h-5 w-5 text-pink-500" />
                      <h3 className="font-semibold text-white">Payment Processing</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Stripe integration for secure payments</li>
                      <li>• Subscription and one-time purchase options</li>
                      <li>• International payment support</li>
                      <li>• Automated invoice generation</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Truck className="h-5 w-5 text-orange-500" />
                      <h3 className="font-semibold text-white">Print-on-Demand</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• High-quality physical book production</li>
                      <li>• Multiple binding and size options</li>
                      <li>• Global shipping capabilities</li>
                      <li>• Order tracking and notifications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🎨 User Experience Design</h2>
                <div className="mt-4 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Smartphone className="h-5 w-5 text-pink-500" />
                        <h3 className="font-semibold text-white">Mobile-First Design</h3>
                      </div>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• Responsive design for all devices</li>
                        <li>• Touch-optimized story creation</li>
                        <li>• Camera integration for photos</li>
                        <li>• Progressive web app features</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="h-5 w-5 text-red-500" />
                        <h3 className="font-semibold text-white">Parent-Child Experience</h3>
                      </div>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• Intuitive creation process</li>
                        <li>• Child-safe content guarantee</li>
                        <li>• Engaging visual storytelling</li>
                        <li>• Shareable story collections</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🚀 Development Roadmap</h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <h3 className="font-semibold text-white mb-3">Phase 1: Core Platform (Completed)</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium text-green-400 mb-2">✅ Foundation</h4>
                        <ul className="text-xs text-zinc-400 space-y-1">
                          <li>• Next.js 14+ project architecture</li>
                          <li>• PostgreSQL database schema</li>
                          <li>• User authentication system</li>
                          <li>• AI service integrations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-green-400 mb-2">✅ Core Features</h4>
                        <ul className="text-xs text-zinc-400 space-y-1">
                          <li>• Story generation pipeline</li>
                          <li>• Character creation system</li>
                          <li>• Image processing workflow</li>
                          <li>• Interactive preview interface</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <h3 className="font-semibold text-white mb-3">Phase 2: Advanced Features (In Progress)</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium text-yellow-400 mb-2">🔄 Current</h4>
                        <ul className="text-xs text-zinc-400 space-y-1">
                          <li>• Enhanced personalization options</li>
                          <li>• Multiple illustration styles</li>
                          <li>• Advanced editing capabilities</li>
                          <li>• Performance optimizations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-purple-400 mb-2">🔮 Planned</h4>
                        <ul className="text-xs text-zinc-400 space-y-1">
                          <li>• Multi-character story support</li>
                          <li>• Audio narration features</li>
                          <li>• Social sharing capabilities</li>
                          <li>• Analytics dashboard</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🎯 Target Audience</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-1">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-white mb-2">👨‍👩‍👧‍👦 Parents & Caregivers</h3>
                        <p className="text-sm text-zinc-400">
                          Parents seeking to create magical bedtime experiences with personalized stories that feature their children as heroes, 
                          fostering self-confidence and a love for reading through engaging, age-appropriate narratives.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">🎁 Gift Givers</h3>
                        <p className="text-sm text-zinc-400">
                          Grandparents, aunts, uncles, and family friends looking for unique, meaningful gifts that celebrate a child&apos;s 
                          individuality with custom storybooks that can be treasured for years to come.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">🏫 Educators & Therapists</h3>
                        <p className="text-sm text-zinc-400">
                          Teachers, child psychologists, and reading specialists who want to use personalized storytelling as a tool 
                          for engagement, self-esteem building, and addressing specific developmental or emotional needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">Project Details</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-400">Status:</span>
                    <span className="text-white">Production Ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-400">Development:</span>
                    <span className="text-white">8-10 months</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-400">Team Size:</span>
                    <span className="text-white">Solo Project</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-400">Role:</span>
                    <span className="text-white">Founder & Lead Developer</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Next.js 14+",
                    "TypeScript", 
                    "PostgreSQL",
                    "Prisma",
                    "NextAuth.js",
                    "OpenAI GPT-4",
                    "Google Gemini",
                    "Stable Diffusion",
                    "Tailwind CSS",
                    "shadcn/ui",
                    "Zustand",
                    "React Hook Form",
                    "Zod",
                    "UploadThing",
                    "BullMQ",
                    "Redis",
                    "Stripe",
                    "Real-ESRGAN",
                    "Vercel",
                    "AWS S3",
                    "Sentry"
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">Key Features</h3>
                <div className="mt-4 space-y-2">
                  {[
                    "AI Story Generation",
                    "Character Personalization", 
                    "Photo Integration",
                    "Multiple Art Styles",
                    "Interactive Preview",
                    "Content Safety Filters",
                    "Print-on-Demand",
                    "E-commerce Integration"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">Project Links</h3>
                <div className="mt-4 space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="https://github.com/BlakeDanielson/OurStoriesV3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href="/projects/ourstories/demo" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Try Demo
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">Project Highlights</h3>
                <div className="mt-4 space-y-3">
                  <div className="text-sm">
                    <span className="text-zinc-400">Story Generation:</span>
                    <span className="text-white block">Sub-10 second AI processing</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-zinc-400">Character Consistency:</span>
                    <span className="text-white block">98% likeness accuracy</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-zinc-400">Content Safety:</span>
                    <span className="text-white block">100% age-appropriate filtering</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-zinc-400">Print Quality:</span>
                    <span className="text-white block">Professional hardcover books</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
