import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Sparkles,
  Music,
  Headphones,
  BarChart,
  Brain,
  Database,
  Globe,
  Smartphone,
  Clock,
  CheckCircle,
  BookOpen,
  Zap,
  Shield,
  Search,
  Tag,
  Video,
  Upload,
  Code,
  Target,
  Gamepad2,
  Trophy,
  ChefHat,
  Heart,
  Star,
  Palette,
  Wand2,
  CreditCard,
  Truck,
  Baby,
  TrendingUp
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data"

// Icon map for rendering icons from string names
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Music,
  Headphones,
  BarChart,
  Brain,
  Database,
  Globe,
  Smartphone,
  Clock,
  CheckCircle,
  BookOpen,
  Zap,
  Shield,
  Search,
  Tag,
  Video,
  Upload,
  Code,
  Target,
  Gamepad2,
  Trophy,
  ChefHat,
  Heart,
  Star,
  Palette,
  Wand2,
  CreditCard,
  Truck,
  Baby,
  TrendingUp,
  Users
}

// Generate static params for all projects
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <MainNav />

      <div className="container py-12 pt-24 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-zinc-400 transition-colors hover:text-purple-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="mt-8">
            <Badge className={`mb-4 ${project.badge.color}`}>{project.badge.text}</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-4 text-xl text-zinc-400">{project.tagline}</p>

            {/* Status Badges if available */}
            {project.statusBadges && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.statusBadges.map((badge, index) => {
                  const IconComponent = badge.icon ? iconMap[badge.icon] : null
                  return (
                    <Badge key={index} className={`${badge.color} border-0 flex items-center gap-1`}>
                      {IconComponent && <IconComponent className="h-3 w-3" />}
                      {badge.text}
                    </Badge>
                  )
                })}
              </div>
            )}
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 max-w-3xl mx-auto">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-6 md:col-span-2">
              {project.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>

                  {/* Content paragraph */}
                  {typeof section.content === "string" && <p className="mt-4 text-zinc-400">{section.content}</p>}

                  {/* Simple bullet list */}
                  {section.items && (
                    <ul className="mt-4 space-y-2 text-zinc-400 list-disc list-inside">
                      {section.items.map((item, i) => (
                        <li key={i}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Grid items with icons */}
                  {section.gridItems && (
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {section.gridItems.map((gridItem, i) => {
                        const IconComponent = iconMap[gridItem.icon] || Brain
                        return (
                          <div key={i} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <IconComponent className="h-5 w-5 text-purple-500" />
                              <h3 className="font-semibold text-white">{gridItem.title}</h3>
                            </div>
                            <ul className="text-sm text-zinc-400 space-y-1">
                              {gridItem.items.map((subItem, j) => (
                                <li key={j}>• {subItem}</li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-bold text-white">Project Details</h3>
                <div className="mt-4 space-y-4">
                  {project.team && (
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="text-sm text-zinc-500">Team Size</p>
                        <p className="font-medium text-white">{project.team}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="mt-6">
                  <p className="text-sm text-zinc-500">Technologies</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-zinc-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-col gap-3">
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.slug === "linkedin-applicant-counter" ? "View Extension" : "Try Live Demo"}
                      </Button>
                    </Link>
                  )}
                  {project.demoLink && (
                    <Link href={project.demoLink}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Try Demo
                      </Button>
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-zinc-700">
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* Key Features if available */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                  <h3 className="text-lg font-semibold text-white">Key Features</h3>
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    {project.keyFeatures.map((feature) => (
                      <li key={feature} className="text-sm text-zinc-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Target Users */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-bold text-white">
                  {project.slug === "linkedin-applicant-counter" ? "Value" : "Target Users"}
                </h3>
                <ul className="mt-4 space-y-3 text-zinc-400 list-disc list-inside">
                  {project.targetUsers.map((user, index) => (
                    <li key={index}>
                      {user.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional sidebar sections */}
              {project.sidebarExtras?.map((extra, index) => (
                <div key={index} className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                  <h3 className="text-lg font-semibold text-white">{extra.title}</h3>
                  <div className="mt-4 space-y-3">
                    {extra.items.map((item, i) => (
                      <div key={i} className="text-sm">
                        <span className="text-zinc-400">{item.label}:</span>
                        <span className="text-white block">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
