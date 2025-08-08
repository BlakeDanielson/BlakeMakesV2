"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Sparkles, Code, Users, Briefcase, Cpu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { HeroParallax } from "@/components/hero-parallax"
import { Badge } from "@/components/ui/badge"
import { AnimatedText } from "@/components/animated-text"
import { FeaturedMusicPlayer } from "@/components/featured-music-player"
import { FeaturedArticles } from "@/components/featured-articles"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const futureGoalsRef = useRef<HTMLDivElement>(null)

  const heroItems = [
    {
      title: "Abstract Gradient",
      thumbnail: "/hero-backgrounds/abstract-gradient.jpg",
    },
    {
      title: "Nature Landscape",
      thumbnail: "/hero-backgrounds/nature-landscape.jpg",
    },
    {
      title: "Urban Geometric",
      thumbnail: "/hero-backgrounds/urban-geometric.jpg",
    },
    {
      title: "Tech Particles",
      thumbnail: "/hero-backgrounds/tech-particles.jpg",
    },
  ]

  // Identity/role phrases for animation
  const identityPhrases = [
    "a Product Manager",
    "a wizard with AI",
    "a Bandwidth Expander",
    "a Pretty Chill Guy",
    "an Entrepreneur",
    "a Music Producer",
    "a Great +1 to a Wedding",
    "a Strategic Thinker",
    "a safe motorcycle rider",
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
    "Market Research",
    "Strategic Partnerships",
  ]

  // Technical skills
  const technicalSkills = [
    "Prompt Engineering",
    "Python",
    "TypeScript", 
    "React/Next",
    "Node.js",
    "FastAPI/Express",
    "AI/LLM Integration",
    "PostgreSQL/MySQL",
    "Web App Development",
    "Database Design",
    "Automation Scripts",
    "Cloud Deployment"
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <MainNav />

      {/* Hero Section with Parallax */}
      <HeroParallax items={heroItems}>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-4xl text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-2xl font-bold tracking-tight text-white text-animation-container sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                  <span className="leading-tight">Hi, I&apos;m Blake, I&apos;m</span>
                  <div className="min-h-[1.2em] sm:min-h-[1.5em] flex items-center justify-center">
                    <AnimatedText phrases={identityPhrases} highlightClassName="text-purple-500" />
                  </div>
                </div>
              </h1>
              <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
              <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-medium px-2 sm:px-0 leading-relaxed">
                  Expert at translating complex technical concepts into actionable business strategies that stakeholders of all backgrounds can understand and buy into.
                </p>

                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-medium px-2 sm:px-0 leading-relaxed">
                  Seeking a leadership role at a visionary company where I can leverage my demonstrated track record of success to drive breakthrough innovation and scale transformative products that define markets.
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 px-4 sm:px-0 max-w-4xl mx-auto">
                {/* About Me Tile */}
                <div 
                  className="group bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  onClick={() => {
                    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">👋</div>
                    <div className="text-white font-semibold text-sm mb-1">About Me</div>
                    <div className="text-purple-100 text-xs">The origin story</div>
                  </div>
                </div>

                {/* View Projects Tile */}
                <Link href="/projects" className="block">
                  <div className="group bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🚀</div>
                      <div className="text-white font-semibold text-sm mb-1">View Projects</div>
                      <div className="text-purple-100 text-xs">Cool stuff I built</div>
                    </div>
                  </div>
                </Link>

                {/* Consulting Tile */}
                <Link href="/consulting" className="block">
                  <div className="group bg-gradient-to-br from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    <div className="text-center">
                      <div className="text-2xl mb-2">💼</div>
                      <div className="text-white font-semibold text-sm mb-1">Consulting</div>
                      <div className="text-blue-100 text-xs">Let's build together</div>
                    </div>
                  </div>
                </Link>

                {/* Hire Me Tile */}
                <Link href="/contact" className="block">
                  <div className="group bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden">
                    <div className="text-center relative z-10">
                      <div className="text-2xl mb-2 transition-all duration-300 group-hover:scale-110">😲</div>
                      <div className="text-white font-semibold text-sm mb-1">Hire Me!</div>
                      <div className="text-blue-100 text-xs opacity-100 group-hover:opacity-0 transition-opacity duration-300">Rare opportunity</div>
                      <div className="text-blue-100 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-2">Limited time!</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 z-10 -translate-x-1/2">
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 animate-bounce text-white opacity-70" />
        </div>
      </HeroParallax>

      {/* About Section */}
      <div ref={aboutRef} className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-12 text-center">
            <Badge className="mb-2 bg-purple-500/20 text-purple-300 text-xs sm:text-sm">About Me</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 px-4 sm:px-0">
              Hi, I&apos;m Blake, I&apos;m a <span className="text-purple-500">Product Manager</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-purple-500 rounded-full mx-auto my-4"></div>
          </div>

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-12">
            {/* Image Column - Full width on mobile, 5 columns on desktop */}
            <div className="lg:col-span-5 relative order-1 lg:order-1">
              <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-purple-500/20 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl shadow-purple-900/10 max-w-md mx-auto lg:max-w-none lg:sticky lg:top-24">
                <Image 
                  src="/blake.jpg" 
                  alt="Blake Danielson" 
                  width={600} 
                  height={800} 
                  className="object-cover w-full h-auto" 
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/4"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 bg-zinc-900/90 backdrop-blur-sm rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-white leading-tight">
                      Finance grad leaving the dark side for the Product world
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column - Full width on mobile, 7 columns on desktop */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-2">
              {/* Main Content */}
              <div className="space-y-4">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-4 sm:w-6 bg-purple-500 rounded-full"></div>
                    <h3 className="text-lg sm:text-xl font-bold text-purple-400">My Journey</h3>
                    <div className="h-1 flex-1 bg-purple-500/20 rounded-full"></div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                I studied finance at the University of Denver and quickly realized my edge was transforming complex technical challenges into strategic business opportunities.
                While in college, I built a crypto arbitrage platform, wrote two weekly financial newsletters for 10,000+ paying subscribers, and became a top cannabis analyst on Seeking Alpha.
                I also interned in investment banking as well as at Snoop Dogg&apos;s VC fund, Casa Verde Capital. 

                </p>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">

                </p>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  
                  While staying in finance would&apos;ve been the comfortable path, I took the opportunity to work for a high-growth startup and reported directly to the CEO, a member of the Young Presidents&apos; Organization (YPO).
                  
                  I helped deploy $80 million to build what became California&apos;s largest indoor cannabis facility, acquired four LA based dispensaries,
                  and launched brands in every cannabis product category.
                  <br />
                  <br />
                  After a few intense years in cannabis, I didn&apos;t want to be known as the &quot;the weed guy.&quot; I&apos;d learned a ton about scaling fast and navigating messy, unregulated markets, but I was ready for a new challenge.
                  So I did a hard pivot and joined a family office in South Florida led by another YPO CEO.
                  The portfolio was diverse, one company specialized in rescuing stranded backpackers, another protected foreign heads of state during political visits.
                  There were operations in armored vehicle logistics, freight and cargo security. The industries were intense, the stakes were high, and so were the expectations.
                  <br />
                  <br />
                  I built AI Agents that helped overhaul operations to save over $100K annually by automating workflows. But the real win was spotting the silent friction points—closing the communication gaps that were jamming up entire teams and reshaping how the whole organization made decisions: faster, smarter, and more aligned.
                </p>
              </div>

              {/* Core Competencies - Stack on mobile, grid on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 flex-shrink-0">
                      <Code className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">More Than Just Finance</h3>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Been technical since I was 10 (started with Minecraft mods, now I build web apps), but business and communication have always been my strength.
                    I can actually design, pitch, and build the stuff I&apos;m talking about, not just PowerPoint it.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 flex-shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">Good With People</h3>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    I work well with both technical teams and business stakeholders. Good at taking vague &quot;I&apos;ll know it when I see it&quot; requirements and turning them into something everyone can understand and execute on.
                  </p>
                </div>
              </div>

              {/* Button Row */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto text-sm sm:text-base"
                  onClick={() => {
                    futureGoalsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/projects" className="w-full sm:w-auto">
                  <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 w-full sm:w-auto text-sm sm:text-base">
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Skills Section with Dot + Label Style */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="mb-8 sm:mb-12 text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-300 text-xs sm:text-sm">My Skills</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white px-4 sm:px-0">Expertise & Capabilities</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Business & Leadership Skills Tile */}
              <div className="rounded-xl border border-purple-500/30 bg-zinc-900/30 p-4 sm:p-6 shadow-lg shadow-purple-500/5 hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 flex-shrink-0">
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Business & Leadership</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-6">
                  {businessSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-purple-500 flex-shrink-0"></div>
                      <span className="text-purple-300 text-xs sm:text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Tile */}
              <div className="rounded-xl border border-teal-500/30 bg-zinc-900/30 p-4 sm:p-6 shadow-lg shadow-teal-500/5 hover:border-teal-500/50 transition-all">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 flex-shrink-0">
                    <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Technical Skills</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-6">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-teal-500 flex-shrink-0"></div>
                      <span className="text-teal-300 text-xs sm:text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Consulting Teaser Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="relative rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/10 via-zinc-900/50 to-blue-900/10 p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Briefcase className="h-16 w-16 text-purple-400" />
              </div>
              <div className="relative">
                <Badge className="mb-4 bg-purple-500/20 text-purple-300">Available for Consulting</Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Need Help Building Something <span className="text-purple-400">Amazing</span>?
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                  I help companies bridge the gap between technical complexity and business strategy. 
                  From AI integrations to full-stack applications, I deliver solutions that drive real results.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                    <span className="text-zinc-300 text-sm">AI Product Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                    <span className="text-zinc-300 text-sm">Strategic Consulting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                    <span className="text-zinc-300 text-sm">Full-Stack Development</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/consulting">
                    <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                      View Services & Pricing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 w-full sm:w-auto">
                      Start a Conversation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div ref={futureGoalsRef} className="mt-16 sm:mt-20 lg:mt-24">
            <div className="mb-8 sm:mb-12 text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-300 text-xs sm:text-sm">What's Next</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white px-4 sm:px-0">Ready for New Challenges</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-zinc-400 px-4 sm:px-0 leading-relaxed">Open to full-time opportunities and consulting projects that make a real impact</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Employment Opportunities */}
              <div className="relative rounded-xl border border-purple-500/20 bg-gradient-to-br from-zinc-900 to-black p-6 sm:p-8">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#000000,transparent)]"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Users className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Full-Time Opportunities</h3>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                    Looking for a role within Product Management, Corporate Strategy, or Strategic Partnerships where I can work on big problems that actually matter.
                  </p>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                    I excel at working with both technical and business teams, especially when things are unclear and expectations are high.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto text-sm">
                      Discuss Opportunities
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Consulting Projects */}
              <div className="relative rounded-xl border border-blue-500/20 bg-gradient-to-br from-zinc-900 to-blue-950/20 p-6 sm:p-8">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#000000,transparent)]"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Briefcase className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Consulting Projects</h3>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                    Available for strategic consulting and custom development projects. I help companies build AI-powered solutions and bridge technical-business gaps.
                  </p>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                    From MVP development to full-scale applications, I deliver solutions that drive real business value.
                  </p>
                  <Link href="/consulting">
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto text-sm">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="border-t border-zinc-800 bg-gradient-to-br from-zinc-900 to-purple-950/20 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 sm:mb-12 text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-300 text-xs sm:text-sm">Featured Projects</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white px-4 sm:px-0">My Best Work</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-zinc-400 px-4 sm:px-0 leading-relaxed">
                A selection of projects that showcase my skills and expertise. <Link href="/consulting" className="text-purple-400 hover:text-purple-300 underline">Available for similar custom development work.</Link>
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
              {/* Project 1 - Mood2Song */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-purple-500/5">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?key=x9wrf"
                    alt="Mood2Song"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute right-3 top-3">
                    <Badge className="bg-purple-500/20 text-purple-300 text-xs">Music</Badge>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="mb-2 text-lg sm:text-xl font-bold text-white">Mood2Song</h3>
                  <p className="mb-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    A music discovery platform that helps users find songs based on their mood, persona, or specific vibe—combining my passion for music with intuitive UX design.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">Music Discovery</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">React</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">API Integration</span>
                  </div>
                  <Link href="/projects/mood2song" className="flex items-center text-xs sm:text-sm font-medium text-purple-400">
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Project 2 - Caren's Cookbook */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-purple-500/5">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/culinary-innovation-lab.png"
                    alt="Caren's Cookbook"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute right-3 top-3">
                    <Badge className="bg-purple-500/20 text-purple-300 text-xs">AI</Badge>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="mb-2 text-lg sm:text-xl font-bold text-white">Caren's Cookbook</h3>
                  <p className="mb-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    AI-Powered Recipe Management Platform that transforms how users collect, organize, and manage recipes with intelligent extraction from URLs and images.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">AI</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">Recipe Management</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">Computer Vision</span>
                  </div>
                  <Link
                    href="/projects/carens-cookbook"
                    className="flex items-center text-xs sm:text-sm font-medium text-purple-400"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Project 3 - Mugshot Matcher */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-purple-500/5 md:col-span-2 xl:col-span-1">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/mugshot-matching-game.png"
                    alt="Mugshot Matcher"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute right-3 top-3">
                    <Badge className="bg-purple-500/20 text-purple-300 text-xs">AI</Badge>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="mb-2 text-lg sm:text-xl font-bold text-white">Mugshot Matcher</h3>
                  <p className="mb-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Interactive criminal profiling game that challenges players to match mugshots with their corresponding crimes. Built as a Progressive Web App with 400+ real criminal records.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">Criminal Profiling</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">Interactive Game</span>
                    <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">Educational</span>
                  </div>
                  <Link
                    href="/projects/mugshot-matcher"
                    className="flex items-center text-xs sm:text-sm font-medium text-purple-400"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <Link href="/projects">
                <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 w-full sm:w-auto text-sm sm:text-base">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles Section */}
      <FeaturedArticles />

      {/* Featured Music Player */}
      <div className="border-t border-zinc-800 bg-black py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 sm:mb-12 text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-300 text-xs sm:text-sm">Featured Tracks</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white px-4 sm:px-0">My Music (BLVKE)</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-zinc-400 px-4 sm:px-0 leading-relaxed">
                Been making music since I was 8. Started as just messing around and never saving anything, still messing around but hitting save sometimes.
              </p>
            </div>

            <FeaturedMusicPlayer />

            <div className="mt-8 sm:mt-12 text-center">
              <Link href="/music">
                <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto text-sm sm:text-base">
                  Some More Songs and Beats
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
