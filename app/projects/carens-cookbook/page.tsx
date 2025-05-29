import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Sparkles, ChefHat, Camera, Brain, Database, Globe, Smartphone, Clock, CheckCircle, AlertCircle, Utensils, BookOpen, Zap, Shield, Search, Tag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function CarensCookbookPage() {
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
            <Badge className="mb-4 bg-green-500/20 text-green-300">AI Recipe Management</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Caren's Cookbook</h1>
            <p className="mt-4 text-xl text-zinc-400">
              AI-Powered Recipe Management Platform - Transform how you collect, organize, and manage recipes with intelligent extraction from URLs and images, smart categorization, and personalized digital cookbook experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-yellow-500/10 text-yellow-400 border-0 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Planning Phase
              </Badge>
              <Badge className="bg-blue-500/10 text-blue-400 border-0">
                In Development
              </Badge>
              <Badge className="bg-purple-500/10 text-purple-400 border-0">
                Freemium
              </Badge>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 max-w-3xl mx-auto">
            <Image
              src="/culinary-innovation-lab.png"
              alt="Caren's Cookbook - AI Recipe Management"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div className="space-y-6 md:col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">🍳 What is Caren's Cookbook?</h2>
                <p className="mt-4 text-zinc-400">
                  Caren's Cookbook is a Next.js-based web application that leverages AI to transform how users collect, organize, and manage their recipes. 
                  The platform uses advanced computer vision and natural language processing to automatically extract recipe data from multiple sources, 
                  then intelligently categorizes and organizes them in a personalized digital cookbook.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🏗️ Technical Architecture</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold text-white">Frontend (Next.js 15)</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Next.js 15 with TypeScript</li>
                      <li>• Clerk for secure user authentication</li>
                      <li>• Tailwind CSS with custom components</li>
                      <li>• Framer Motion for smooth animations</li>
                      <li>• React Query for data fetching</li>
                      <li>• Radix UI for accessible components</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-5 w-5 text-green-500" />
                      <h3 className="font-semibold text-white">Backend & Database</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• PostgreSQL with Prisma ORM</li>
                      <li>• RESTful API routes</li>
                      <li>• Redis for caching</li>
                      <li>• Image processing pipeline</li>
                      <li>• Web scraping with Cheerio</li>
                      <li>• Zod for runtime validation</li>
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
                      <h3 className="font-semibold text-white">Multi-Modal Recipe Extraction</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Extract from URLs with HTML parsing</li>
                      <li>• Process single or multiple images (up to 5)</li>
                      <li>• Support for HEIC, JPEG, PNG, WebP formats</li>
                      <li>• Dual AI processing (OpenAI GPT-4.1-mini & Google Gemini)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Smart Categorization</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• 18 predefined recipe categories</li>
                      <li>• AI-powered auto-categorization</li>
                      <li>• Custom category creation</li>
                      <li>• Confidence scoring and source tracking</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Personalized Experience</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• 7-step progressive onboarding</li>
                      <li>• 12 dietary preference options</li>
                      <li>• Skill-based customization</li>
                      <li>• Household size optimization</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Search className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Advanced Organization</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Intelligent search and filtering</li>
                      <li>• Recipe versioning and source tracking</li>
                      <li>• Favorites and bookmarking system</li>
                      <li>• Multiple image support per recipe</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🎯 Core User Features</h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <h3 className="font-semibold text-white mb-2">Recipe Collection Workflow</h3>
                    <ol className="text-sm text-zinc-400 space-y-1">
                      <li>1. <strong>Input Sources</strong>: Add recipes via URL, single image, or multiple images</li>
                      <li>2. <strong>AI Processing</strong>: Choose between OpenAI or Google Gemini for extraction</li>
                      <li>3. <strong>Smart Parsing</strong>: Advanced HTML parsing and computer vision recognition</li>
                      <li>4. <strong>Auto-Categorization</strong>: AI assigns categories with confidence scoring</li>
                      <li>5. <strong>Review & Edit</strong>: User validation with easy editing capabilities</li>
                      <li>6. <strong>Organization</strong>: Intelligent filing in personalized digital cookbook</li>
                      <li>7. <strong>Access & Share</strong>: Searchable, filterable recipe collection</li>
                    </ol>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-blue-500" />
                        <h3 className="font-semibold text-white">Data Management</h3>
                      </div>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• Secure user authentication with Clerk</li>
                        <li>• Recipe versioning and source tracking</li>
                        <li>• Comprehensive error handling</li>
                        <li>• Data validation with Zod schemas</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-green-500" />
                        <h3 className="font-semibold text-white">Performance Features</h3>
                      </div>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• Redis caching for improved response times</li>
                        <li>• Image optimization and compression</li>
                        <li>• Strategic database indexing</li>
                        <li>• Lazy loading for better UX</li>
                      </ul>
                    </div>
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
                        <li>• Touch-optimized interactions</li>
                        <li>• Progressive web app capabilities</li>
                        <li>• Offline recipe access</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-orange-500" />
                        <h3 className="font-semibold text-white">Intuitive Navigation</h3>
                      </div>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• Clean, cookbook-inspired interface</li>
                        <li>• Smart search with filters</li>
                        <li>• Visual recipe cards with images</li>
                        <li>• Easy category management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🚀 Development Roadmap</h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <h3 className="font-semibold text-white mb-3">Phase 1: Core Platform (Months 1-2)</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium text-green-400 mb-2">✅ Foundation</h4>
                        <ul className="text-xs text-zinc-400 space-y-1">
                          <li>• Next.js 15 project setup</li>
                          <li>• Database schema design</li>
                          <li>• User authentication system</li>
                          <li>• Basic UI components</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-yellow-400 mb-2">🔄 In Progress</h4>
                        <ul className="text-xs text-zinc-400 space-y-1">
                          <li>• AI recipe extraction pipeline</li>
                          <li>• Category management system</li>
                          <li>• Image processing workflow</li>
                          <li>• Onboarding flow</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <h3 className="font-semibold text-white mb-3">Phase 2: Advanced Features (Months 3-4)</h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium text-blue-400 mb-2">📋 Planned</h4>
                        <ul className="text-xs text-zinc-400 space-y-1">
                          <li>• Advanced search and filtering</li>
                          <li>• Recipe sharing capabilities</li>
                          <li>• Meal planning integration</li>
                          <li>• Shopping list generation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-purple-400 mb-2">🔮 Future</h4>
                        <ul className="text-xs text-zinc-400 space-y-1">
                          <li>• Recipe recommendations</li>
                          <li>• Nutritional analysis</li>
                          <li>• Social features</li>
                          <li>• Mobile app development</li>
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
                        <h3 className="font-semibold text-white mb-2">🍳 Home Cooking Enthusiasts</h3>
                        <p className="text-sm text-zinc-400">
                          Passionate cooks who collect recipes from multiple sources and want a centralized, organized digital cookbook 
                          with AI-powered categorization and smart recipe extraction from photos and websites.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">👨‍👩‍👧‍👦 Busy Families</h3>
                        <p className="text-sm text-zinc-400">
                          Parents and caregivers who need quick access to organized meal planning with dietary preference filtering, 
                          household size optimization, and the ability to quickly digitize family recipes from handwritten notes or cookbook photos.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">📱 Digital-First Millennials & Gen Z</h3>
                        <p className="text-sm text-zinc-400">
                          Tech-savvy users who prefer mobile-first experiences and want to seamlessly capture and organize recipes 
                          from social media, food blogs, and cooking videos using AI-powered extraction and intelligent categorization.
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
                    <span className="text-zinc-400">Expected Launch:</span>
                    <span className="text-white">Q2 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-400">Duration:</span>
                    <span className="text-white">4-6 months</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-zinc-400" />
                    <span className="text-zinc-400">Team Size:</span>
                    <span className="text-white">Solo Project</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Next.js 15",
                    "TypeScript", 
                    "PostgreSQL",
                    "Prisma",
                    "Clerk",
                    "OpenAI",
                    "Google Gemini",
                    "Tailwind CSS",
                    "Framer Motion",
                    "React Query",
                    "Radix UI",
                    "Redis",
                    "Zod"
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
                    "AI Recipe Extraction",
                    "Smart Categorization", 
                    "Multi-Image Support",
                    "Progressive Onboarding",
                    "Dietary Preferences",
                    "Recipe Versioning",
                    "Advanced Search",
                    "Mobile-First Design"
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
                    <Link href="#" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" disabled>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo (Coming Soon)
                  </Button>
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