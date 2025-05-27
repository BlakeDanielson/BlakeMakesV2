import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Sparkles, Dice6, Sword, Shield, Scroll, Zap } from "lucide-react"

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
            <Badge className="mb-4 bg-purple-500/20 text-purple-300">AI</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">SoloRealms</h1>
            <p className="mt-4 text-xl text-zinc-400">
              An AI-powered Dungeons & Dragons game that follows 5e rules, allowing players to embark on epic solo adventures with an intelligent DM.
            </p>
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
                <h2 className="text-2xl font-bold text-white">The Challenge</h2>
                <p className="mt-4 text-zinc-400">
                  Many D&amp;D enthusiasts struggle to find consistent groups or available Dungeon Masters for regular gameplay. 
                  Traditional solo D&amp;D experiences lack the dynamic storytelling and rule enforcement that make tabletop RPGs engaging. 
                  Players want the full D&amp;D experience but often can&apos;t coordinate schedules or find experienced DMs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">The Solution</h2>
                <p className="mt-4 text-zinc-400">
                  SoloRealms brings the complete D&amp;D 5e experience to solo players through an AI Dungeon Master that understands 
                  the rules, creates compelling narratives, and adapts to player choices in real-time. The platform combines 
                                      official D&amp;D 5e mechanics with advanced AI storytelling to create immersive adventures that feel authentic 
                  to the tabletop experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Key Features</h2>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <Dice6 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Full D&amp;D 5e rule implementation with automated dice rolling and stat tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Scroll className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Dynamic story generation that adapts to player choices and character background</span>
                  </li>
                  <li className="flex items-start">
                    <Sword className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Intelligent combat system with tactical AI for monsters and NPCs</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Character creation wizard with all official D&amp;D 5e classes, races, and backgrounds</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Persistent world with memorable NPCs and consequences for player actions</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Campaign management with save states and adventure progression tracking</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Technical Implementation</h2>
                <p className="mt-4 text-zinc-400">
                  SoloRealms leverages cutting-edge AI and game development technologies to create an authentic D&amp;D experience:
                </p>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>GPT-4 fine-tuned on D&amp;D 5e rules and adventure modules for accurate gameplay</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Custom rule engine that enforces D&amp;D 5e mechanics and validates player actions</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Procedural content generation for dungeons, NPCs, and quest lines</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Real-time character sheet management with automatic stat calculations</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Contextual AI that remembers player history and adapts storytelling accordingly</span>
                  </li>
                </ul>
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
                  <p className="text-sm text-zinc-500">Technologies</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-zinc-700">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      OpenAI API
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      D&D 5e API
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      PostgreSQL
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Prisma
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Tailwind CSS
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
                <h3 className="text-lg font-bold text-white">Development Highlights</h3>
                <div className="mt-4 space-y-3 text-sm text-zinc-400">
                  <div className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-500" />
                    <span>Implemented complete D&amp;D 5e rule system with 500+ spells and abilities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-500" />
                    <span>Created AI DM that maintains narrative consistency across sessions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-500" />
                    <span>Built procedural dungeon generator with balanced encounters</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-500" />
                    <span>Designed intuitive character sheet interface for complex D&amp;D mechanics</span>
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