import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Sparkles, Shield, CheckCircle, Target, Globe, TrendingUp, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function LinkedinApplicantCounterPage() {
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
            <Badge className="mb-4 bg-purple-500/20 text-purple-300">Chrome Extension</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">LinkedIn Applicant Counter</h1>
            <p className="mt-4 text-xl text-zinc-400">
              A privacy-first Chrome extension that automatically reveals the real number of applicants on LinkedIn job postings. It parses job data already available to your browser and displays a clean, accessible count on the page.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-zinc-800 max-w-3xl mx-auto">
            <Image
              src="/linkedin-applicant-counter.png"
              alt="LinkedIn Applicant Counter screenshot"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div className="space-y-6 md:col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">🔍 What is LinkedIn Applicant Counter?</h2>
                <p className="mt-4 text-zinc-400">
                  A privacy-first Chrome extension that reveals the true applicant count on LinkedIn job postings by
                  parsing data already available to your browser — no servers, no tracking.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">The Problem</h2>
                <p className="mt-4 text-zinc-400">
                  LinkedIn often abstracts applicant counts (e.g., “10+ applicants”), making it hard to gauge true competition. Manually digging through DevTools works, but it’s tedious and inconsistent across job templates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">The Solution</h2>
                <p className="mt-4 text-zinc-400">
                  The extension automates the known manual method: it observes page data and safe, allowed globals to extract applicant counts when available, then renders a small banner at the top of the job view—no servers, no tracking.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🎯 Core User Features</h2>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Automatic detection on linkedin.com/jobs/view/* pages</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Accessible UI with aria-live status and clear typography</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>SPA navigation handling; avoids duplicate banners</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Privacy-first: no external servers; minimal local storage</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">🏗️ Technical Architecture</h2>
                <ul className="mt-4 space-y-2 text-zinc-400">
                  <li className="flex items-start">
                    <Target className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Manifest v3 content script runs at document_start and observes SPA route changes</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Multiple bounded strategies: DOM scripts, safe globals, and best-effort fetch when CSRF is available</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Toolbar badge shows last detected count; popup surfaces recent activity</span>
                  </li>
                </ul>
              </div>

              {/* No AI section for this project */}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src="/soundcloud-logo-on-headphones.png"
                    alt="Abstract UI panel"
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src="/chess-midgame-control.png"
                    alt="Decision-making illustration"
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
                      <p className="font-medium text-white">1 week to MVP</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-zinc-500">Technologies</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "Chrome Manifest v3",
                      "Content Scripts",
                      "Chrome Storage",
                      "Tailwind-esque CSS"
                    ].map((tech) => (
                      <Badge key={tech} variant="outline" className="border-zinc-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href="https://github.com/BlakeDanielson/HowManyApplied" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-zinc-700">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="text-lg font-bold text-white">Value</h3>
                <ul className="mt-4 space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <TrendingUp className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Apply strategically with real competition data</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                    <span>Works wherever LinkedIn exposes counts via page data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                    <span>Lightweight, fast, and unobtrusive</span>
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


