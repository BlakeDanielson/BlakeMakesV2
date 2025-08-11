"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Filter, Music, BookOpen, Sparkles, Code, BrainCircuit, ExternalLink, Github, Calendar, Clock, Star, Zap, ChefHat } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Project, CategoryTheme, StatusInfo } from "./types"

// Project categories
const categories = ["All", "AI", "Music", "Web App", "NLP", "Data Viz", "RPG"]

// Tech stack icons mapping (deduplicated with aliases)
const techIconByCanonical: Record<string, string> = {
  "React": "⚛️",
  "Next.js": "▲",
  "TypeScript": "📘",
  "JavaScript": "🟨",
  "Python": "🐍",
  "FastAPI": "⚡",
  "PostgreSQL": "🐘",
  "Prisma": "🔺",
  "OpenAI": "🤖",
  "GPT-4o": "🤖",
  "Google Gemini": "💎",
  "Clerk": "🔐",
  "Redis": "🔴",
  "WebSocket": "🔌",
  "XState": "🔄",
  "AI": "🤖",
  "NLP": "💬",
  "Node.js": "🟢",
  "FFmpeg": "🎬",
  "API": "🔌",
  "Database": "🗄️",
  "Machine Learning": "🧠",
  "Game": "🎮",
  "E-commerce": "🛒",
  "Audio": "🎵",
  "Video": "🎬",
  "Spotify": "🎵",
  "Web Scraping": "🕷️",
  "Image Processing": "🖼️",
  "UX Design": "🎨",
  "D&D": "🎲",
  "RPG": "⚔️",
  "Interactive Fiction": "📖",
  "Real-time": "⚡",
  "CSS": "🎨",
  "Chrome APIs": "🧩",
  "Manifest v3": "📄"
}

const techIconAliases: Record<string, string> = {
  "React 19": "React",
  "Next": "Next.js",
  "Next.js 15": "Next.js",
  "Typescript": "TypeScript",
  "Web Game": "Game"
}

function getTechIcon(tech: string): string {
  const canonical = techIconAliases[tech] || tech
  return techIconByCanonical[canonical] || "⚡"
}

// Category colors and themes
const categoryThemes: Record<string, CategoryTheme> = {
  "AI": {
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/30"
  },
  "Music": {
    color: "from-pink-500 to-red-600", 
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-400",
    borderColor: "border-pink-500/30"
  },
  "Web App": {
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10", 
    textColor: "text-green-400",
    borderColor: "border-green-500/30"
  },
  "NLP": {
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-400", 
    borderColor: "border-yellow-500/30"
  },
  "Data Viz": {
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-400",
    borderColor: "border-indigo-500/30"
  },
  "RPG": {
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/30"
  }
}

// Project data with enhanced details
const projects: Project[] = [
  {
    title: "LinkedIn Applicant Counter",
    description:
      "A Chrome extension that automatically reveals the true number of applicants on LinkedIn job postings by extracting counts from API data and displaying them directly on the page.",
    image: "/linkedin-applicant-counter.png",
    category: "Web App",
    tags: ["Chrome Extension", "LinkedIn", "Job Search", "UX"],
    techStack: ["JavaScript", "Manifest v3", "Chrome APIs", "CSS"],
    link: "/projects/linkedin-applicant-counter",
    githubLink: "https://github.com/BlakeDanielson/HowManyApplied",
    liveLink: null,
    featured: false,
    icon: <Code className="h-5 w-5" />,
    status: "Live",
    pricing: "Free",
    completionDate: "2025-08",
    duration: "1 week"
  },
  {
    title: "Mood2Song",
    description:
      "I created this music discovery platform that helps users find songs based on their mood, persona, or specific vibe—combining my passion for music with intuitive UX design.",
    image: "/mood2song.png",
    category: "Music",
    tags: ["Music Discovery", "React", "API Integration", "UX Design"],
    techStack: ["Next", "Typescript", "API", "AI", "React", "Spotify"],
    link: "/projects/mood2song",
    githubLink: "https://github.com/BlakeDanielson/mood2song",
    liveLink: "https://mood2song.com",
    featured: false,
    icon: <Music className="h-5 w-5" />,
    status: "Live",
    pricing: "Free",
    completionDate: "2025-04",
    duration: "1 month"
  },
  {
    title: "Mug Matcher",
    description:
      "Interactive criminal profiling game that challenges players to match mugshots with their corresponding crimes. Built as a Progressive Web App with 400+ real criminal records, sophisticated scoring system, and dual UI themes for an engaging educational experience.",
    image: "/mugshotmatcher.png",
    category: "AI",
    tags: ["Criminal Profiling", "Interactive Game", "Educational", "Progressive Web App"],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Game"],
    link: "/projects/mugshot-matcher",
    githubLink: "https://github.com/BlakeDanielson/mug-matcher",
    liveLink: "https://mugshotmatcher.com",
    featured: false,
    icon: <BrainCircuit className="h-5 w-5" />,
    status: "Live",
    pricing: "Free",
    completionDate: "2025-04",
    duration: "6 weeks"
  },
  {
    title: "Music Production Analyzer",
    description:
      "I built this AI tool after spending countless hours watching production tutorials, wishing I could quickly extract specific techniques without watching entire videos.",
    image: "/audio-spectrum-display.png",
    category: "Music",
    tags: ["AI", "Music Production", "Content Analysis", "Audio Processing"],
    techStack: ["Next", "Typescript", "API", "AI", "React", "Audio"],
    link: "/projects/music-production-analyzer",
    githubLink: "https://github.com/BlakeDanielson/music-analyzer",
    liveLink: null,
    featured: false,
    icon: <Music className="h-5 w-5" />,
    status: "In Development",
    pricing: "Freemium",
    completionDate: "2025-04",
    duration: "2 months"
  },
  {
    title: "Constant-Craft",
    description:
      "During a weekend coding sprint, I recreated the popular Infinite Craft game as a technical challenge to sharpen my React skills.",
    image: "/mystical-alchemy-table.png",
    category: "Web App",
    tags: ["Web Game", "React", "Interactive", "Clone"],
    techStack: ["Next", "Typescript", "API", "AI", "React", "Game"],
    link: "/projects/constant-craft",
    githubLink: "https://github.com/BlakeDanielson/constant-craft",
    liveLink: "https://constant-craft.vercel.app",
    featured: false,
    icon: <Sparkles className="h-5 w-5" />,
    status: "In Development",
    pricing: "Free",
    completionDate: "2025-03",
    duration: "1 week"
  },
  {
    title: "JumpScare Generator",
    description:
      "I built this web app to help content creators easily add perfectly-timed jump scares to their videos without needing complex editing software.",
    image: "/jumpscare-preview.png",
    category: "Web App",
    tags: ["React", "Python", "FFmpeg", "Uploadthing"],
    techStack: ["Next", "Typescript", "API", "AI", "React", "Video"],
    link: "/projects/jumpscare-generator",
    githubLink: "https://github.com/BlakeDanielson/jumpscare-generator",
    liveLink: "https://jumpscare.pro",
    featured: false,
    icon: <Code className="h-5 w-5" />,
    status: "Live",
    pricing: "Free",
    completionDate: "2025-03",
    duration: "2 weeks"
  },
  {
    title: "OurStories",
    description:
      "I created this bedtime story generator that makes children the stars of their own stories—complete with AI-generated images that incorporate their photos. A passion project that combines storytelling with cutting-edge AI.",
    image: "/forest-friends-picnic.png",
    category: "AI",
    tags: ["AI", "NLP", "Image Generation", "E-commerce"],
    techStack: ["Next", "Typescript", "API", "AI", "React"],
    link: "/projects/ourstories",
    githubLink: "https://github.com/BlakeDanielson/OurStoriesV3",
    liveLink: "https://ourstories.app",
    featured: false,
    icon: <BookOpen className="h-5 w-5" />,
    status: "In Development",
    pricing: "Premium",
    completionDate: "2025-03",
    duration: "3 months"
  },
  {
    title: "Caren's Cookbook",
    description:
      "AI-Powered Recipe Management Platform that transforms how users collect, organize, and manage recipes with intelligent extraction from URLs and images, smart categorization, and personalized digital cookbook experience.",
    image: "/carenscookbook.png",
    category: "AI",
    tags: ["AI", "Recipe Management", "Computer Vision", "NLP", "Web Scraping"],
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "OpenAI", "Google Gemini", "Clerk", "Redis"],
    link: "/projects/carens-cookbook",
    githubLink: "https://github.com/BlakeDanielson/FinalMothersDayV2",
    liveLink: "https://carenscookbook.com",
    featured: true,
    icon: <ChefHat className="h-5 w-5" />,
    status: "In Development",
    pricing: "Freemium",
    completionDate: "2025-06",
    duration: "4-6 months"
  },
  {
    title: "SoloRealms",
    description:
      "A sophisticated web-based solo Dungeons & Dragons experience where GPT-4o acts as your personal Dungeon Master. Designed for players who want to enjoy D&D adventures on their own schedule, with AI-driven storytelling that adapts to their choices and creates immersive, personalized narratives.",
    image: "/dnd-fantasy-tavern.png",
    category: "RPG",
    tags: ["AI", "D&D", "RPG", "Interactive Fiction", "WebSocket", "Real-time"],
    techStack: ["Next.js 15", "React 19", "TypeScript", "FastAPI", "PostgreSQL", "GPT-4o", "WebSocket", "XState"],
    link: "/projects/solorealms",
    githubLink: "https://github.com/BlakeDanielson/solorealms",
    liveLink: "https://solorealms.app",
    featured: false,
    icon: <BrainCircuit className="h-5 w-5" />,
    status: "In Development",
    pricing: "Freemium",
    completionDate: "2025-06",
    duration: "4 months"
  },
]

// Helper function to get status color and icon
function getStatusInfo(status: string): StatusInfo {
  switch (status) {
    case "Live":
      return { color: "text-green-400", bgColor: "bg-green-500/10", icon: <Zap className="h-3 w-3" /> }
    case "In Development":
      return { color: "text-yellow-400", bgColor: "bg-yellow-500/10", icon: <Clock className="h-3 w-3" /> }
    case "Archived":
      return { color: "text-gray-400", bgColor: "bg-gray-500/10", icon: <Star className="h-3 w-3" /> }
    default:
      return { color: "text-gray-400", bgColor: "bg-gray-500/10", icon: <Star className="h-3 w-3" /> }
  }
}

// Helper function to get pricing color
function getPricingColor(pricing: string) {
  switch (pricing) {
    case "Free":
      return "text-green-400"
    case "Freemium":
      return "text-yellow-400"
    case "Premium":
      return "text-purple-400"
    default:
      return "text-gray-400"
  }
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  const categoryTheme = categoryThemes[project.category as keyof typeof categoryThemes] || categoryThemes["Web App"]
  const statusInfo = getStatusInfo(project.status)
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={project.link} className="block h-full">
        <Card className={`h-full overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:${categoryTheme.borderColor} hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-purple-500/5 cursor-pointer`}>
          <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} project screenshot`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            
          </div>
          
          {/* Content Section */}
          <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="mb-3 flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${categoryTheme.bgColor} ${categoryTheme.textColor}`}>
                {project.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white truncate">{project.title}</h3>
            </div>
            
            
             {/* Project Tags */}
             <div className="mb-4">
               <div className="flex flex-wrap gap-2">
                 <Badge className={`${statusInfo.bgColor} ${statusInfo.color} border-0 flex items-center gap-1`}>
                   {statusInfo.icon}
                   {project.status}
                 </Badge>
                 <Badge className={`${categoryTheme.bgColor} ${categoryTheme.textColor} border-0`}>
                   {project.category}
                 </Badge>
                 <Badge className={`bg-zinc-800 ${getPricingColor(project.pricing)} border-0`}>
                   {project.pricing}
                 </Badge>
               </div>
             </div>
            
             {/* Tech Stack */}
             <div className="mb-4">
               <p className="text-xs text-zinc-500 mb-2">Tech Stack</p>
               <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech: string) => (
                   <span 
                     key={tech} 
                     className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300"
                     title={tech}
                   >
                      <span className="text-sm">{getTechIcon(tech)}</span>
                     <span className="hidden sm:inline">{tech}</span>
                   </span>
                 ))}
               </div>
             </div>

            {/* Actions */}
            <div className="mt-2 flex flex-wrap gap-3">
              <Button 
                size="sm"
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"
              >
                More Info
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {(project.liveLink || project.githubLink) && (
                <Button 
                  size="sm"
                  variant="outline" 
                  className="border-zinc-700 hover:bg-zinc-800"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    const targetUrl = project.liveLink || project.githubLink
                    if (targetUrl) window.open(targetUrl, '_blank')
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Link
                </Button>
              )}
            </div>
                       </div>
         </CardContent>
       </Card>
     </Link>
   </motion.div>
 )
}

// Featured Project Component
function FeaturedProject({ project }: { project: Project }) {
  const categoryTheme = categoryThemes[project.category as keyof typeof categoryThemes] || categoryThemes["Web App"]
  const statusInfo = getStatusInfo(project.status)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={project.link} className="block">
        <div
          className={`relative overflow-hidden rounded-xl border ${categoryTheme.borderColor} bg-gradient-to-br from-zinc-900 to-black p-1 group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10`}
        >
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#000000,transparent)]"></div>
          <div className="relative grid gap-6 p-6 lg:grid-cols-2 lg:gap-8 lg:p-10">
            <div className="flex flex-col justify-center space-y-4 lg:space-y-6">
              {/* Status and Category Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge className={`${statusInfo.bgColor} ${statusInfo.color} border-0 flex items-center gap-1`}>
                  {statusInfo.icon}
                  {project.status}
                </Badge>
                <Badge className={`${categoryTheme.bgColor} ${categoryTheme.textColor} border-0`}>
                  {project.category}
                </Badge>
                <Badge className={`bg-black/50 ${getPricingColor(project.pricing)} border-0`}>
                  {project.pricing}
                </Badge>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{project.title}</h2>
              
              {/* Tech Stack */}
              <div>
                <p className="text-xs text-zinc-500 mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech: string) => (
                    <span 
                      key={tech} 
                      className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      <span className="text-sm">{getTechIcon(tech)}</span>
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Actions for featured card removed per user request */}
              
              {/* Project Details */}
              <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                {project.completionDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(project.completionDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{project.duration}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button 
                  className={`bg-gradient-to-r ${categoryTheme.color} hover:opacity-90 text-white`}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                {project.liveLink && (
                  <Button 
                    variant="outline" 
                    className="border-zinc-700 hover:bg-zinc-800"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      if (project.liveLink) window.open(project.liveLink, '_blank')
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
                {project.githubLink && (
                  <Button 
                    variant="outline" 
                    className="border-zinc-700 hover:bg-zinc-800"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      if (project.githubLink) window.open(project.githubLink, '_blank')
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                )}
              </div>
            </div>
            
            <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-800 order-first lg:order-last">
              <Image 
                src={project.image || "/placeholder.svg"} 
                alt={`${project.title} project screenshot`} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const featuredProjects = projects.filter((project) => project.featured)
  const filteredProjects =
    selectedCategory === "All"
      ? projects.filter((project) => !project.featured)
      : projects.filter((project) => project.category === selectedCategory && !project.featured)

  return (
    <div className="min-h-screen bg-black">
      <MainNav />

      {/* Header Section */}
      <div className="relative bg-zinc-900 pt-24">
        <div className="absolute inset-0 bg-grid-white/5 opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-zinc-900"></div>

        <div className="container relative z-10 mx-auto px-4 py-16 text-center">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300">My Portfolio</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Projects That <span className="text-purple-400">Made an Impact</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
            From executive dashboards that transformed decision-making to AI tools that solve real problems—these are
            the projects I&apos;m most proud of.
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="space-y-8 mb-12 lg:mb-16">
              {featuredProjects.map((project) => (
                <FeaturedProject key={project.title} project={project} />
              ))}
            </div>
          )}

          {/* Filter Categories */}
          <div className="mb-8 mt-12 lg:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-zinc-400" />
              <span className="text-sm text-zinc-400">Filter by category:</span>
            </div>
            <Tabs defaultValue="All" value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="bg-zinc-900 grid grid-cols-3 sm:grid-cols-6 w-full sm:w-auto h-auto p-1">
                {categories.map((category) => {
                  const theme = categoryThemes[category as keyof typeof categoryThemes]
                  return (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className={`text-xs sm:text-sm px-3 sm:px-4 py-2.5 min-h-[44px] touch-manipulation rounded-md ${
                        selectedCategory === category 
                          ? `${theme?.bgColor || 'bg-purple-900'} ${theme?.textColor || 'text-white'}` 
                          : 'data-[state=active]:bg-purple-900 data-[state=active]:text-white hover:bg-zinc-800'
                      }`}
                    >
                      {category}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </Tabs>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-lg text-zinc-400">No projects found in this category.</p>
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700" onClick={() => setSelectedCategory("All")}>
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="border-t border-zinc-800 bg-gradient-to-br from-zinc-900 to-purple-950/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white">Have a project in mind?</h2>
            <p className="mt-4 text-zinc-400">
              I&apos;m always looking for interesting challenges and creative collaborations. Whether you need help with data
              integration, process optimization, or building something entirely new—I&apos;d love to hear about it.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Let&apos;s Work Together
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
