import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Linkedin } from "lucide-react"
import { FaLinkedin, FaGithub, FaSoundcloud } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedText } from "@/components/animated-text"

export default function AboutPage() {
  // Identity/role phrases for animation
  const identityPhrases = [
    "a product manager",
    "a great +1",
    "an entrepreneur",
    "a consultant",
    "a music producer",
    "a financial analyst",
    "an executive advisor",
    "great at learning",
  ]

  return (
    <div className="min-h-screen bg-black">
      <MainNav />

      {/* Header Section */}
      <div className="relative bg-zinc-900 pt-24">
        <div className="absolute inset-0 bg-grid-white/5 opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-zinc-900"></div>

        <div className="container relative z-10 mx-auto px-4 py-16 text-center">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300">Finance Professional & Product Manager</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            About <span className="text-purple-400">Me</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
            From financial analysis to product management, also please listen to my music
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Bio Section */}
          <div className="relative rounded-xl border border-purple-500/20 bg-gradient-to-br from-zinc-900 to-black p-1">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#000000,transparent)]"></div>
            <div className="relative grid gap-8 p-6 md:grid-cols-2 md:p-10">
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-2xl font-bold text-white text-animation-container sm:text-3xl">
                  <span className="flex items-center whitespace-nowrap">
                    <span className="whitespace-nowrap">I'm Blake, I'm&nbsp;</span>
                    <AnimatedText phrases={identityPhrases} highlightClassName="text-purple-400" inline={true} />
                  </span>
                </h2>

                <div className="space-y-4 text-zinc-400">
                  <p>
                    I started in computer science but found my passion bridging people, technology, and business—leading to a finance degree from the University of Denver. During college, I co-founded a cryptocurrency arbitrage group and built financial newsletters that generated $100k+ in subscriptions, earning an internship with Snoop Dogg's VC fund, Casa Verde Capital.
                  </p>
                  <p>
                    Since graduating, I've worked directly with Fortune 50 companies and California's largest cannabis operator, helping deploy $80M in strategic investments and launched several online businesses. I specialize in turning complex data into actionable insights others may have missed and have a knack for learning new things quickly.
                  </p>
                  <p>
                    Beyond work, I'm passionate about music—producing EDM and hip-hop, and catching shows at Red Rocks whenever possible.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/projects">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                      Get in Touch
                    </Button>
                  </Link>
                  {/* Social media links */}
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.linkedin.com/in/blakedan97/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-zinc-800 p-3 text-zinc-400 transition-colors hover:bg-purple-500/20 hover:text-purple-300"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://github.com/BlakeDanielson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-zinc-800 p-3 text-zinc-400 transition-colors hover:bg-purple-500/20 hover:text-purple-300"
                    >
                      <FaGithub className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://soundcloud.com/blvkemusic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-zinc-800 p-3 text-zinc-400 transition-colors hover:bg-purple-500/20 hover:text-purple-300"
                    >
                      <FaSoundcloud className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl"></div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                  <Image src="/blake.jpg" alt="Blake Danielson" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-lg border border-zinc-800 bg-zinc-900/90 p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium text-white">Future search fund operator in the making</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="mt-24">
            <div className="mb-12 text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-300">Experience</Badge>
              <h2 className="text-3xl font-bold text-white">Professional Journey</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                My path through finance, business development, and product management
              </p>
            </div>

            {/* Horizontal Timeline for Desktop */}
            <div className="relative hidden md:block">
              {/* Timeline line */}
              <div className="absolute left-0 right-0 top-16 h-0.5 bg-gradient-to-r from-purple-500/50 via-purple-500/30 to-zinc-800"></div>

              {/* Timeline items */}
              <div className="relative mx-auto max-w-6xl">
                <div className="grid grid-cols-3 gap-6">
                  {/* Item 1 - Present */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-16 -ml-3 h-6 w-6 -translate-y-1/2 transform">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-purple-500/30 bg-zinc-900 shadow-lg shadow-purple-500/10">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                    </div>

                    <div className="pt-24">
                      <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                        Present
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-white">Director of Sales</h3>
                      <p className="mt-1 text-zinc-400">Stealth Startup</p>
                      <p className="mt-4 text-zinc-400">
                        Building SaaS tools for the home service industry. Managing SQL databases, designing automation
                        systems, and integrating data from multiple sources to create unified platforms.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-zinc-700">
                          SQL
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700">
                          Automation
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700">
                          Data Integration
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-16 -ml-3 h-6 w-6 -translate-y-1/2 transform">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-purple-500/30 bg-zinc-900 shadow-lg shadow-purple-500/10">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                    </div>

                    <div className="pt-24">
                      <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                        Previous
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-white">Director of Research and Analysis</h3>
                      <p className="mt-1 text-zinc-400">Dalton Capital</p>
                      <p className="mt-4 text-zinc-400">
                        Led operational efficiency initiatives saving $100K+ annually, built financial models for
                        Fortune 100 executives, and directed research on emerging technologies like AI to inform company
                        strategy.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-zinc-700">
                          Financial Modeling
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700">
                          Process Optimization
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700">
                          Product Development
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative">
                    <div className="absolute left-1/2 top-16 -ml-3 h-6 w-6 -translate-y-1/2 transform">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-purple-500/30 bg-zinc-900 shadow-lg shadow-purple-500/10">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      </div>
                    </div>

                    <div className="pt-24">
                      <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                        Previous
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-white">Special Projects Manager</h3>
                      <p className="mt-1 text-zinc-400">Vertical Companies</p>
                      <p className="mt-4 text-zinc-400">
                        Partnered with executive leadership to secure $80M in fundraising, led M&A due diligence for
                        dispensary acquisitions, and built executive dashboards that centralized real-time data across
                        operations.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-zinc-700">
                          Fundraising
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700">
                          M&A
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700">
                          Cannabis Industry
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-24">
            <div className="mb-12 text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-300">The Future</Badge>
              <h2 className="text-3xl font-bold text-white">Where I'm Headed</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">My vision for the next chapter</p>
            </div>

            <div className="relative rounded-xl border border-purple-500/20 bg-gradient-to-br from-zinc-900 to-black p-8">
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#000000,transparent)]"></div>
              <div className="relative">
                <p className="text-lg text-zinc-300">
                  My long-term ambition is to continue honing my entrepreneurial skills by building and scaling a series of small applications and online businesses. Each venture serves as a stepping stone, allowing me to generate capital and gain invaluable experience in preparation for my next major goal.
                </p>
                <p className="mt-4 text-lg text-zinc-300">
                  This journey is ultimately aimed at launching a search fund. Through this fund, I plan to acquire a promising small, independent business right here in the Denver area—a community I'm passionate about.
                </p>
                <p className="mt-4 text-lg text-zinc-300">
                  I'm excited by the prospect of deeply engaging with the acquired company, taking on a hands-on operational leadership role for several years. The objective will be to drive significant growth and create lasting value, culminating in a successful and profitable sale. This path perfectly aligns my passions for technology, business strategy, and direct operational impact.
                </p>
                <div className="mt-8">
                  <Link href="/contact">
                    <div className="flex justify-end">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Let's Discuss Opportunities
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Music Section */}
          <div className="mt-24">
            <div className="mb-12 text-center">
              <Badge className="mb-2 bg-purple-500/20 text-purple-300">Passion Project</Badge>
              <h2 className="text-3xl font-bold text-white">Music Production</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                I don't understand what Genres are, I like making sounds that sound cool
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-xl border border-zinc-800">
                <Image
                  src="/professional-music-studio.png"
                  alt="Music Production Setup"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">The Studio</h3>
                  <p className="mt-2 text-zinc-300">Where the magic happens</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-300 leading-relaxed">
                  Music production has been my creative outlet for since I started learning guitar when I was 8. Unlike
                  my other pursuits, this one has always been purely for the love of it, and wasn't something I ever
                  shared publically until quite recently.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  I specialize in bass music, EDM, and hip hop beats that absolutely slap. You can find my tracks on
                  YouTube, SoundCloud, Instagram, TikTok, and I sell beats on BeatStars and Traktrain.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  When I'm not producing, I'm out experiencing live music at Denver venues. I'm either going wild
                  dancing in the pit or the nerd against the wall taking notes on production techniques I want to try
                  out. Either way, I'm soaking up inspiration from artists at the top of their game.
                </p>
                <div className="pt-4">
                  <Link href="/music">
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Explore My Music
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
