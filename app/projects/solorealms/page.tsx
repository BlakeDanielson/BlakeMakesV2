import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Sparkles, Dice6, Sword, Shield, Scroll, Zap, Brain, Database, Globe, Gamepad2, MessageSquare, Clock, CheckCircle, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function SoloRealmsPage() {
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
            <Badge className="mb-4 bg-purple-500/20 text-purple-300">AI-Powered RPG</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">SoloRealms</h1>
            <p className="mt-4 text-xl text-zinc-400">
              AI-Powered Solo D&D Game - A sophisticated web-based solo Dungeons & Dragons experience where GPT-4o acts as your personal Dungeon Master.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-yellow-500/10 text-yellow-400 border-0 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                45% Complete
              </Badge>
              <Badge className="bg-green-500/10 text-green-400 border-0">
                In Development
              </Badge>
              <Badge className="bg-purple-500/10 text-purple-400 border-0">
                Freemium
              </Badge>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 max-w-3xl mx-auto">
            <Image
              src="/dnd-fantasy-tavern.png"
              alt="SoloRealms - AI D&D Adventure"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div className="space-y-6 md:col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">🎮 What is SoloRealms?</h2>
                <p className="mt-4 text-zinc-400">
                  SoloRealms is a sophisticated web-based solo Dungeons & Dragons experience where GPT-4o acts as your personal Dungeon Master. 
                  It&apos;s designed for players who want to enjoy D&D adventures on their own schedule, with AI-driven storytelling that adapts 
                  to their choices and creates immersive, personalized narratives.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🏗️ Technical Architecture</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold text-white">Frontend (Next.js 15 + React 19)</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Next.js 15 with React 19 and TypeScript</li>
                      <li>• Clerk for secure user management</li>
                      <li>• Tailwind CSS with custom components</li>
                      <li>• Framer Motion for smooth UI transitions</li>
                      <li>• XState for combat flow management</li>
                      <li>• WebSocket integration for live gameplay</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-5 w-5 text-green-500" />
                      <h3 className="font-semibold text-white">Backend (FastAPI + Python)</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• FastAPI with async support</li>
                      <li>• PostgreSQL with SQLAlchemy ORM</li>
                      <li>• Alembic for database schema management</li>
                      <li>• OpenAI GPT-4o for narrative generation</li>
                      <li>• WebSocket support for live game updates</li>
                      <li>• Clerk integration for secure API access</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🎯 Core Game Features</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">AI Dungeon Master</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Dynamic storytelling with GPT-4o</li>
                      <li>• Adaptive responses based on character history</li>
                      <li>• Combat narration and detailed descriptions</li>
                      <li>• Optional text-to-speech voice narration</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Complete D&D 5e Character System</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Full D&D races, classes, and ability scores</li>
                      <li>• Experience points and leveling system</li>
                      <li>• Inventory management with magical items</li>
                      <li>• HP tracking and status effects</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Scroll className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">6-Stage Story Structure</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Intro - Setting the scene</li>
                      <li>• Inciting Incident - Main conflict begins</li>
                      <li>• First Combat - Initial tactical encounter</li>
                      <li>• Twist - Story revelation or complication</li>
                      <li>• Final Conflict - Climactic battle</li>
                      <li>• Resolution - Story conclusion and rewards</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sword className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Advanced Combat System</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Turn-based combat with full D&D 5e rules</li>
                      <li>• Initiative system and turn order</li>
                      <li>• Action economy with reactions</li>
                      <li>• Visual target selection with range validation</li>
                      <li>• XState-powered combat flow</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🎲 How the Game Works</h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <h3 className="font-semibold text-white mb-2">Game Flow</h3>
                    <ol className="text-sm text-zinc-400 space-y-1">
                      <li>1. Character Creation: Players create D&D characters with stats and backstory</li>
                      <li>2. Adventure Selection: Choose from short-form (~30 min) or campaign adventures</li>
                      <li>3. AI Narration: GPT-4o describes scenes and responds to player actions</li>
                      <li>4. Player Actions: Type actions, speech, or thoughts to interact with the world</li>
                      <li>5. Dice Integration: Roll dice when prompted for skill checks and combat</li>
                      <li>6. Combat Encounters: Engage in tactical turn-based battles</li>
                      <li>7. Story Progression: Advance through the 6-stage narrative structure</li>
                    </ol>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-5 w-5 text-blue-500" />
                        <h3 className="font-semibold text-white">Real-Time Interaction</h3>
                      </div>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• WebSocket communication for live updates</li>
                        <li>• Instant AI responses</li>
                        <li>• State synchronization across components</li>
                        <li>• Robust error handling and reconnection</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="h-5 w-5 text-green-500" />
                        <h3 className="font-semibold text-white">Data Persistence</h3>
                      </div>
                      <ul className="text-sm text-zinc-400 space-y-1">
                        <li>• Character progression saved to PostgreSQL</li>
                        <li>• Adventure progress and world state tracking</li>
                        <li>• Inventory and equipment persistence</li>
                        <li>• Detailed combat history logs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">📊 Development Status (~45% Complete)</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-green-800 bg-green-900/20 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <h3 className="font-semibold text-green-400">✅ Completed Features</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Authentication system (90%)</li>
                      <li>• Character creation and management (85%)</li>
                      <li>• Basic game interface (75%)</li>
                      <li>• Backend infrastructure (80%)</li>
                      <li>• Database models (95%)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-yellow-800 bg-yellow-900/20 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                      <h3 className="font-semibold text-yellow-400">🚧 In Progress</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Story system (25%)</li>
                      <li>• Combat system (30%)</li>
                      <li>• Adventure management (10%)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-blue-800 bg-blue-900/20 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold text-blue-400">📋 Planned Features</h3>
                    </div>
                    <ul className="text-sm text-zinc-400 space-y-1">
                      <li>• Social features and adventure sharing</li>
                      <li>• Advanced AI voice integration</li>
                      <li>• Multiplayer party support</li>
                      <li>• Admin tools and content management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Game Features</h2>
                <p className="mt-4 text-zinc-400">
                  Experience the full depth of D&amp;D 5e with features designed for solo play:
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Dice6 className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Character Creation</h3>
                    </div>
                    <p className="text-sm text-zinc-400">
                      Full D&amp;D 5e character creation with all official classes, races, and backgrounds. 
                      Automated stat generation and equipment selection.
                    </p>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Scroll className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Dynamic Storytelling</h3>
                    </div>
                    <p className="text-sm text-zinc-400">
                      AI-generated adventures that adapt to your character&apos;s background, choices, 
                      and play style for unique experiences every time.
                    </p>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sword className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Combat System</h3>
                    </div>
                    <p className="text-sm text-zinc-400">
                      Turn-based combat following D&amp;D 5e rules with intelligent enemy AI 
                      and tactical decision-making support.
                    </p>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-white">Campaign Management</h3>
                    </div>
                    <p className="text-sm text-zinc-400">
                      Save and resume campaigns, track character progression, 
                      and maintain persistent relationships with NPCs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src="/placeholder.svg?height=300&width=400&query=fantasy character sheet interface"
                    alt="Character sheet interface"
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src="/placeholder.svg?height=300&width=400&query=fantasy dungeon combat scene"
                    alt="Combat interface"
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
                      <p className="font-medium text-white">Lead Developer & Game Designer</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-zinc-500">Timeline</p>
                      <p className="font-medium text-white">4 months</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-zinc-500">Status</p>
                      <p className="font-medium text-white">In Development</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-zinc-500">Frontend Technologies</p>
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
                      Clerk Auth
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Tailwind CSS
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Framer Motion
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      XState
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      WebSocket
                    </Badge>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-zinc-500">Backend Technologies</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-zinc-700">
                      FastAPI
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      PostgreSQL
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      SQLAlchemy
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Alembic
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      GPT-4o
                    </Badge>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href="https://solorealms.app" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Play SoloRealms
                    </Button>
                  </Link>
                  <Link href="https://github.com/yourusername/solorealms" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-zinc-700">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-bold text-white">🚀 Key Technical Highlights</h3>
                <div className="mt-4 space-y-3 text-sm text-zinc-400">
                  <div className="flex items-start gap-2">
                    <Brain className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-500" />
                    <span>AI Integration: Context management for story continuity across sessions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Gamepad2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-500" />
                    <span>Performance: Optimized rendering with React memoization and caching</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-500" />
                    <span>Real-Time: WebSocket implementation for live gameplay interactions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Database className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-500" />
                    <span>Database: Complex relational models for game data with indexed queries</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-500" />
                    <span>Security: Comprehensive authentication with Clerk integration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-500" />
                    <span>UX: Immersive gaming interface with smooth animations and accessibility</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-bold text-white">🎯 Portfolio Highlights</h3>
                <div className="mt-4 space-y-2 text-sm text-zinc-400">
                  <p className="font-medium text-white">SoloRealms demonstrates expertise in:</p>
                  <ul className="space-y-1 ml-2">
                    <li>• Full-Stack Development with modern React/Next.js and FastAPI</li>
                    <li>• AI Integration with sophisticated GPT-4o context management</li>
                    <li>• Real-Time Systems using WebSocket for live gameplay</li>
                    <li>• Advanced State Management with XState for game logic</li>
                    <li>• Performance optimization for real-time gaming interactions</li>
                  </ul>
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