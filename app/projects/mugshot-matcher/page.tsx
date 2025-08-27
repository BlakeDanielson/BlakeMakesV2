import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Sparkles, Target, Shield, Brain, Gamepad2, Trophy, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function MugshotMatcherPage() {
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
            <Badge className="mb-4 bg-purple-500/20 text-purple-300">Interactive Criminal Profiling Game</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Mug Matcher</h1>
            <p className="mt-4 text-xl text-zinc-400">
              An interactive detective skills game that challenges players to match mugshots with their corresponding crimes, 
              combining visual recognition with criminal justice education.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 max-w-3xl mx-auto">
            <Image
              src="/mugshotmatcher.png"
              alt="Mug Matcher Game Interface"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div className="space-y-6 md:col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">🕵️ What is Mug Matcher?</h2>
                <p className="mt-4 text-zinc-400">
                  Mug Matcher is a detective-skills web game where players match mugshots to crimes. It blends visual
                  recognition with criminal justice education and a polished PWA experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">The Challenge</h2>
                <p className="mt-4 text-zinc-400">
                  Traditional criminal justice education and detective training often rely on theoretical knowledge without practical application. 
                  Law enforcement professionals, criminology students, and true crime enthusiasts lack engaging, interactive tools to develop 
                  their visual recognition skills and understanding of criminal behavior patterns. The challenge was to create an educational 
                  yet entertaining platform that tests visual recognition abilities, builds understanding of crime categorization, provides 
                  immediate feedback, and remains engaging across multiple play sessions while working seamlessly across desktop and mobile devices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">The Solution</h2>
                <p className="mt-4 text-zinc-400">
                  Mug Matcher is a web-based detective skills game that challenges players to match mugshots with their corresponding crimes. 
                  Built as a Progressive Web App using Next.js 15, the game combines visual recognition challenges with criminal justice education. 
                  Players are presented with 6 mugshots and 6 crime descriptions, testing their ability to make connections based on visual cues, 
                  crime patterns, and criminal profiling knowledge. The game features a sophisticated points system that rewards accuracy, speed, 
                  and consecutive correct matches, while providing detailed feedback to help players learn from their mistakes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🎯 Core User Features</h2>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <Brain className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Intelligent Crime Matching System with 400+ real criminal records</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Smart crime categorization preventing similar offenses in single rounds</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Sophisticated scoring system considering accuracy, speed, and attempt count</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Real-time statistics with accuracy percentage and completion time tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Gamepad2 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Dual UI themes: Professional ShadCN and animated Aceternity interfaces</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Progressive Web App with mobile-first responsive design and haptic feedback</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🏗️ Technical Architecture</h2>
                <p className="mt-4 text-zinc-400">
                  Mug Matcher combines cutting-edge web technologies with sophisticated game mechanics:
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Frontend Architecture</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li className="flex items-start">
                        <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                        <span>Next.js 15 with React 19 and TypeScript</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                        <span>Tailwind CSS with custom animations</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                        <span>Radix UI with ShadCN/UI and Aceternity UI</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                        <span>Framer Motion for smooth transitions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Backend & Data</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li className="flex items-start">
                        <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                        <span>Next.js API routes with error handling</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                        <span>CSV-based system with Papa Parse</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                        <span>Singleton pattern for in-memory caching</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                        <span>Multi-layer data validation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* No AI section explicitly separated here since features are gameplay-first */}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src="/mugshotmatcher.png"
                    alt="Game Interface with Mugshots"
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src="/historical-mugshot-database.png"
                    alt="Crime Matching System"
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-bold text-white">Project Details</h3>

                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-zinc-500">My Role</p>
                      <p className="font-medium text-white">Founder & Lead Developer</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-zinc-500">Timeline</p>
                      <p className="font-medium text-white">6 weeks</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-zinc-500">Technologies</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-zinc-700">
                      Next.js 15
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      React 19
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Tailwind CSS
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Framer Motion
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Progressive Web App
                    </Badge>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href="https://mugshotmatcher.app" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Play Mug Matcher
                    </Button>
                  </Link>
                  <Link href="https://github.com/BlakeDanielson/mug-matcher" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-zinc-700">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-bold text-white">Target Users</h3>
                <ul className="mt-4 space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <Shield className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Law enforcement professionals seeking to sharpen visual recognition skills</span>
                  </li>
                  <li className="flex items-start">
                    <Brain className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Criminology students and educators needing interactive learning tools</span>
                  </li>
                  <li className="flex items-start">
                    <Gamepad2 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>True crime enthusiasts and gamers who enjoy detective work and puzzles</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-bold text-white">Monetization Ready</h3>
                <ul className="mt-4 space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Integrated Buy Me A Coffee support</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Google AdSense preparation with strategic ad zones</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Built-in analytics hooks for user behavior tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-between">
            <Link href="/projects">
              <Button variant="outline" className="border-zinc-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700">Discuss a Project</Button>
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
