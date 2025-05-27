import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Sparkles, Video, Upload, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function JumpscareGeneratorPage() {
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
            <Badge className="mb-4 bg-purple-500/20 text-purple-300">Web App</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">JumpScare Generator</h1>
            <p className="mt-4 text-xl text-zinc-400">
              A web application that lets users create custom jump scare videos by combining uploaded content with
              startling effects and sounds.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 max-w-3xl mx-auto">
            <Image
              src="/jumpscare-preview.png"
              alt="JumpScare Generator"
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
                  Creating effective jump scares requires precise timing, audio-visual synchronization, and technical
                  knowledge of video editing. Most people don't have access to professional video editing software or
                  the skills to create these effects, despite their popularity in social media pranks and content
                  creation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">The Solution</h2>
                <p className="mt-4 text-zinc-400">
                  The JumpScare Generator is a user-friendly web application that automates the creation of customized
                  jump scare videos. Users can upload their own content, select from a library of scare effects and
                  sounds, and adjust timing parameters. The application handles all the complex video processing behind
                  the scenes, delivering a ready-to-use scare video that can be downloaded or shared directly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Key Features</h2>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Intuitive drag-and-drop interface for uploading videos and images</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Library of pre-made scare effects, faces, and sounds</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Customizable timing controls for perfect scare moments</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Real-time preview of the final result</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>One-click download or direct sharing to social platforms</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Technical Implementation</h2>
                <p className="mt-4 text-zinc-400">
                  The JumpScare Generator combines modern web technologies with powerful backend processing:
                </p>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>React and Next.js for a responsive, interactive frontend experience</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Python backend for processing video and audio manipulation</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>FFmpeg for high-quality video compositing and effects</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Uploadthing for seamless file uploads and management</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>WebSockets for real-time processing status updates</span>
                  </li>
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src="/jumpscare-interface.png"
                    alt="JumpScare Generator Interface"
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src="/jumpscare-effects.png"
                    alt="JumpScare Effects Library"
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
                      <p className="font-medium text-white">3 months</p>
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
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      FFmpeg
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Uploadthing
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      WebSockets
                    </Badge>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Try JumpScare Generator
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
                    <Video className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Content creators looking to add suspense to their videos</span>
                  </li>
                  <li className="flex items-start">
                    <Upload className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Social media users wanting to create viral prank content</span>
                  </li>
                  <li className="flex items-start">
                    <Code className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Game developers needing quick scare assets</span>
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
