"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, ExternalLink, Music } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { BeautifulMusicPlayer } from "@/components/BeautifulMusicPlayer"
import { getMusicTracks, LocalMusicTrack } from "@/lib/music-utils"

interface SocialPlatform {
  name: string;
  icon: string;
  url: string;
  color: string;
}

// Get local music tracks from the blvke-beats folder
const musicTracks: LocalMusicTrack[] = getMusicTracks();

// Social platform links (BeatStars can remain, or be replaced/supplemented)
const socialPlatforms: SocialPlatform[] = [
  {
    name: "BeatStars",
    icon: "/abstract-music-waves.png",
    url: "https://www.beatstars.com/blvke",
    color: "bg-purple-600 hover:bg-purple-700",
  },
  {
    name: "SoundCloud",
    icon: "/soundcloud-logo-on-headphones.png",
    url: "https://soundcloud.com/blvkemusic", // Your main SoundCloud profile
    color: "bg-orange-600 hover:bg-orange-700",
  },
  {
    name: "YouTube",
    icon: "/youtube-logo-display.png",
    url: "https://www.youtube.com/", // Add your specific YouTube channel URL
    color: "bg-red-600 hover:bg-red-700",
  },
];

// Main Music Page Component
export default function MusicPage() {
  const [activePlayerTrackId, setActivePlayerTrackId] = useState<string | null>(null);

  const handlePlayerClick = (trackId: string) => {
    setActivePlayerTrackId(trackId);
  };

  const handlePlay = (trackId: string) => {
    setActivePlayerTrackId(trackId);
  };

  const handlePause = () => {
    // Keep the active player ID for visual state
  };


  return (
    <div className="min-h-screen bg-black">
      <MainNav />

      {/* New Header Section (replacing hero) */}
      <div className="relative bg-zinc-900 pt-24">
        <div className="absolute inset-0 bg-grid-white/5 opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-zinc-900"></div>

        <div className="container relative z-10 mx-auto px-4 py-16 text-center">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300">Music Producer</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            My Music <span className="text-purple-400">Portfolio</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
            Explore my original compositions, productions, and musical projects
          </p>
          
          {/* Social Platforms integrated into header */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {socialPlatforms.map((platform) => (
              <TooltipProvider key={platform.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors ${platform.color}`}
                    >
                      <div className="relative h-5 w-5">
                        <Image
                          src={platform.icon || "/placeholder.svg"}
                          alt={platform.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {platform.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit my {platform.name} profile</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl">
          
          <div className="space-y-6">
            {musicTracks.map((track) => (
              <BeautifulMusicPlayer
                key={track.id}
                track={track}
                isActive={track.id === activePlayerTrackId}
                onPlayerClick={handlePlayerClick}
                onPlay={handlePlay}
                onPause={handlePause}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Collaboration */}
      <div className="border-t border-zinc-800 bg-gradient-to-br from-zinc-900 to-purple-950/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-xl border border-purple-500/20 bg-zinc-900/80 p-8 backdrop-blur-md">
              <h2 className="mb-6 text-2xl font-bold text-white">Featured Collaboration</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src="/collaborative-rhythms.png" alt="Music Collaboration" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-16 w-16 rounded-full border-purple-500/50 bg-purple-500/20 text-white hover:bg-purple-500/30"
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <Badge className="mb-2 w-fit bg-purple-500/20 text-purple-300">New Release</Badge>
                  <h3 className="text-2xl font-bold text-white">Cosmic Horizons</h3>
                  <p className="mb-2 text-sm text-zinc-400">Collaboration with Stellar Sounds • 2023</p>
                  <p className="mb-6 text-zinc-300">
                    An experimental journey through space and time, blending electronic elements with orchestral
                    arrangements.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-purple-600 hover:bg-purple-700">Listen Now</Button>
                    <Button variant="outline" className="border-zinc-700">
                      Behind the Scenes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-zinc-800 bg-black">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white">Stay Updated</h2>
            <p className="mt-2 text-zinc-400">
              Subscribe to get notified about new releases, collaborations, and exclusive content.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-md border border-zinc-800 bg-zinc-900 px-4 py-2 text-white focus:border-purple-500 focus:outline-none"
              />
              <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}


