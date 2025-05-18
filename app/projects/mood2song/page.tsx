import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Sparkles, Music, Headphones, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function Mood2SongPage() {
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
            <Badge className="mb-4 bg-purple-500/20 text-purple-300">Music Discovery</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Mood2Song</h1>
            <p className="mt-4 text-xl text-zinc-400">
              A music discovery platform that helps users find songs based on their mood, persona, or specific vibe.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 max-w-3xl mx-auto">
            <Image
              src="/music-discovery-mood.png"
              alt="Mood2Song Interface"
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
                  Traditional music discovery platforms often rely on genre classifications or algorithmic
                  recommendations based on listening history. However, these approaches don't always capture the
                  emotional context in which people want to discover music. Most users struggle to find music that
                  matches their current mood or specific vibe they're looking for.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">The Solution</h2>
                <p className="mt-4 text-zinc-400">
                  Mood2Song provides an intuitive interface for discovering music based on emotional states, personas,
                  and specific contexts. Users can select from a variety of moods, create or choose persona profiles,
                  and apply advanced filters to find the perfect soundtrack for any moment. The platform integrates with
                  streaming services to provide immediate playback and saving options.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Key Features</h2>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Mood Selection with options like Melancholic, Energetic, Relaxed, and more</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Persona Profiles that represent different music personality types</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Advanced filtering by genre, era, discovery level, and language</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Natural language input for describing specific vibes or contexts</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Integration with popular streaming platforms for seamless listening</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Technical Implementation</h2>
                <p className="mt-4 text-zinc-400">
                  Mood2Song leverages several technologies to create a seamless music discovery experience:
                </p>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>React and Next.js for a responsive, interactive frontend</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Node.js backend for API integration and data processing</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Spotify API for accessing a vast library of music and metadata</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Natural language processing to analyze user inputs and match with music</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>TailwindCSS for responsive design and consistent UI components</span>
                  </li>
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src="/music-mood-selector.png"
                    alt="Mood Selection Interface"
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src="/music-persona-profiles.png"
                    alt="Persona Profiles Interface"
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
                      <p className="font-medium text-white">Approx. X weeks</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-zinc-500">Technologies</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-zinc-700">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Spotify API
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      TailwindCSS
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      NLP
                    </Badge>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href="https://mood2song.com" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Try Mood2Song
                    </Button>
                  </Link>
                  <Link href="https://github.com/BlakeDanielson" target="_blank" rel="noopener noreferrer">
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
                    <Music className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Music enthusiasts looking to discover new songs</span>
                  </li>
                  <li className="flex items-start">
                    <Headphones className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Playlist creators seeking mood-specific tracks</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Content creators needing soundtrack recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-bold text-white">User Testimonial</h3>
                <svg
                  className="h-8 w-8 text-zinc-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  ></path>
                </svg>
                <p className="mt-4 italic text-zinc-400">
                  "Mood2Song has completely changed how I discover music. Instead of scrolling through endless
                  playlists, I can just select my current mood or describe a specific vibe I'm looking for, and it
                  delivers perfect recommendations every time."
                </p>
                <div className="mt-4">
                  <p className="font-medium text-white">Michael Torres</p>
                  <p className="text-sm text-zinc-500">Music Producer & DJ</p>
                </div>
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
