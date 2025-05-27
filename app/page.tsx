"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Sparkles, Code, Users, DollarSign, BarChart, Briefcase, Cpu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { HeroParallax } from "@/components/hero-parallax"
import { Badge } from "@/components/ui/badge"
import { AnimatedText } from "@/components/animated-text"
import { FeaturedMusicPlayer } from "@/components/featured-music-player"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)

  const heroItems = [
    {
      title: "Abstract Gradient",
      link: "/projects/financial-modeling",
      thumbnail: "/hero-backgrounds/abstract-gradient.jpg",
    },
    {
      title: "Nature Landscape",
      link: "/projects/operational-efficiency",
      thumbnail: "/hero-backgrounds/nature-landscape.jpg",
    },
    {
      title: "Urban Geometric",
      link: "/projects/data-integration",
      thumbnail: "/hero-backgrounds/urban-geometric.jpg",
    },
    {
      title: "Tech Particles",
      link: "/projects/strategic-partnerships",
      thumbnail: "/hero-backgrounds/tech-particles.jpg",
    },
  ]

  // Identity/role phrases for animation
  const identityPhrases = [
    "a Product Manager",
    "a Technical Softskiller",
    "a Bandwidth Expander",
    "a Pretty Chill Guy",
    "an Entrepreneur",
    "a Music Producer",
    "a Great +1 to a Wedding",
    "a Strategic Advisor",
    "a Financial Writer",
  ]

  // Business/Leadership skills
  const businessSkills = [
    "Financial Modeling",
    "Strategic Planning",
    "Communication",
    "Stakeholder Management",
    "Process Optimization",
    "Data Analysis",
    "Executive Presentations",
    "Team Leadership",
    "Business Development",
    "Project Management",
    "Cross-Functional Collaboration",
    "Strategic Partnerships",
  ]

  // Technical skills
  const technicalSkills = [
    "Python",
    "React",
    "Next.js",
    "SQL",
    "TypeScript",
    "Tailwind CSS",
    "Data Integration",
    "Automation",
    "API Development",
    "Git/GitHub",
    "Business Intelligence",
    "Database Design",
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <MainNav />

      {/* Hero Section with Parallax */}
      <HeroParallax items={heroItems}>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold tracking-tight text-white text-animation-container sm:text-4xl md:text-5xl lg:text-6xl">
                <div className="flex flex-col items-center">
                  <span>Hi, I'm Blake, I'm</span>
                  <div className="min-h-[1.5em] flex items-center justify-center">
                    <AnimatedText phrases={identityPhrases} highlightClassName="text-purple-500" />
                  </div>
                </div>
              </h1>
              <div className="space-y-3 mt-6">
                <p className="text-lg text-zinc-300 font-medium">
                  Aspiring Product Manager with a talent for working with different teams and communicating technical
                  and business concepts to any audience.
                </p>
                <p className="text-lg text-zinc-300 font-medium">
                  Looking for a role where I can drive innovation at a fast-growing company where the best idea wins and
                  I never feel like the smartest person in the room.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="group bg-purple-600 hover:bg-purple-700"
                  onClick={() => {
                    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-800 bg-zinc-950/50 text-white backdrop-blur-sm hover:bg-zinc-900/50 hover:text-purple-300"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
          <ChevronDown className="h-8 w-8 animate-bounce text-white opacity-70" />
        </div>
      </HeroParallax>

      {/* About Section */}
      <div ref={aboutRef} className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <Badge className="mb-2 bg-purple-500/20 text-purple-300">About Me</Badge>
            <h2 className="text-3xl font-bold text-white mb-3">
              Hi, I'm Blake, I'm a <span className="text-purple-500">Product Manager</span>
            </h2>
            <div className="w-24 h-1 bg-purple-500 rounded-full mx-auto my-4"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-12">
            {/* Image Column - 5 columns on desktop */}
            <div className="md:col-span-5 relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl"></div>
              <div className="sticky top-24 relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl shadow-purple-900/10">
                <Image src="/blake.jpg" alt="Blake Danielson" width={600} height={800} className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/4"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-zinc-900/90 backdrop-blur-sm rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium text-white">
                      Finance grad leaving the dark side for the Product world
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column - 7 columns on desktop */}
            <div className="md:col-span-7 space-y-6">
              {/* Main Content */}
              <div className="space-y-4">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-6 bg-purple-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-purple-400">My Journey</h3>
                    <div className="h-1 flex-1 bg-purple-500/20 rounded-full"></div>
                  </div>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  I started my academic journey in computer science, but quickly realized my true strength lies not just
                  in coding, but in bridging people, technology, and business. While studying finance at the University
                  of Denver, I developed an entrepreneurial edge, founded a cryptocurrency arbitrage project and became
                  one of the most followed analysts on Seeking Alpha for the cannabis industry.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  My industry insights caught attention, leading to newsletter writing opportunities that generated over
                  $100k in subscriptions and an Senior intership with Snoop Dogg's venture capital fund, Casa Verde
                  Capital.
                </p>

                <p className="text-zinc-300 leading-relaxed">
                  Post-graduation, my career accelerated as I worked directly with the CEO of California's largest legal
                  cannabis operator, helping deploy $80 million in strategic investments. My expertise in financial
                  modeling and analysis has landed partnerships with Fortune 50 companies, while my executive dashboards
                  have transformed decision-making processes across organizations.
                </p>
              </div>

              {/* Core Competencies - First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                      <Code className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-white">Technical-ish</h3>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Self-taught skid (script kiddie) since 2007, started with minecraft mods, ended up using AI.
                    Experience in process automation, database management, and system architecture. integration
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                      <Users className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-white">Cross-Functional Leadership</h3>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Thrives in ambigous situations with vague "I'll know it when I see it" goals. Skilled at working
                    with both technical and business teams, communicating complex concepts to stakeholders of varying
                    technical backgrounds.
                  </p>
                </div>
              </div>

              {/* Core Competencies - Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                      <DollarSign className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-white">Revenue Generation</h3>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Developed sophisticated financial models and executive presentations that secured partnerships with
                    Fortune 50 companies. Collaborated directly with the CEO to raise and strategically deploy $80M in
                    capital investments, driving company-wide growth initiatives.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                      <BarChart className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-white">Data-Driven Leadership</h3>
                  </div>
                  <p className="text-zinc-400 text-sm">
                    Led company-wide automation project to reduce manual work and tedious tasks that slashed annual
                    costs by $100K+ while enhancing team productivity by 35%.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Link href="/about">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    More About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Skills Section with Dot + Label Style */}
          <div className="mt-24">
            <div className="mb-12 text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-300">My Skills</Badge>
              <h2 className="text-3xl font-bold text-white">Expertise & Capabilities</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                A blend of business acumen and technical know-how that bridges the gap between strategy and execution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business & Leadership Skills Tile */}
              <div className="rounded-xl border border-purple-500/30 bg-zinc-900/30 p-6 shadow-lg shadow-purple-500/5 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Business & Leadership</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {businessSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-purple-500"></div>
                      <span className="text-purple-300 text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Tile */}
              <div className="rounded-xl border border-teal-500/30 bg-zinc-900/30 p-6 shadow-lg shadow-teal-500/5 hover:border-teal-500/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Technical Expertise</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-teal-500"></div>
                      <span className="text-teal-300 text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="border-t border-zinc-800 bg-gradient-to-br from-zinc-900 to-purple-950/20 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-300">Featured Projects</Badge>
              <h2 className="text-3xl font-bold text-white">My Best Work</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                A selection of projects that showcase my skills and expertise
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-purple-500/5">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/forest-friends-picnic.png"
                    alt="OurStories"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute right-3 top-3">
                    <Badge className="bg-purple-500/20 text-purple-300">AI</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">OurStories</h3>
                  <p className="mb-4 text-sm text-zinc-400">
                    A bedtime story generator that makes your child the star of the story, with AI-generated images and
                    physical printing options.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">AI</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">NLP</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">Image Generation</span>
                  </div>
                  <Link href="/projects/ourstories" className="flex items-center text-sm font-medium text-purple-400">
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-purple-500/5">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/audio-spectrum-display.png"
                    alt="Music Production Analyzer"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute right-3 top-3">
                    <Badge className="bg-purple-500/20 text-purple-300">Music</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">Music Production Analyzer</h3>
                  <p className="mb-4 text-sm text-zinc-400">
                    An AI tool that analyzes dense and long music production videos and podcasts to extract specific
                    tips and techniques.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">AI</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">Music</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">Content Analysis</span>
                  </div>
                  <Link
                    href="/projects/music-production-analyzer"
                    className="flex items-center text-sm font-medium text-purple-400"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-purple-500/5">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/jumpscare-preview.png"
                    alt="JumpScare Generator"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute right-3 top-3">
                    <Badge className="bg-purple-500/20 text-purple-300">Web App</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">JumpScare Generator</h3>
                  <p className="mb-4 text-sm text-zinc-400">
                    A web application that lets users create custom jump scare videos by combining uploaded content with
                    startling effects.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">React</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">Python</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">FFmpeg</span>
                  </div>
                  <Link
                    href="/projects/jumpscare-generator"
                    className="flex items-center text-sm font-medium text-purple-400"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/projects">
                <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Music Player */}
      <div className="border-t border-zinc-800 bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-300">Featured Tracks</Badge>
              <h2 className="text-3xl font-bold text-white">My Music</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                Music has been my creative outlet since I was 8. What started as a private passion has evolved into a
                serious side project—crafting bass-heavy beats that absolutely slap.
              </p>
            </div>

            <FeaturedMusicPlayer />

            <div className="mt-12 text-center">
              <Link href="/music">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Explore Full Music Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
