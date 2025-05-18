"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, ExternalLink, Music, AudioWaveformIcon as Waveform } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { SoundCloudPlayerCard } from "@/components/SoundCloudPlayerCard"

// Define TypeScript interfaces
interface MusicTrack {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  soundcloudUrl?: string;
  duration: string;
  genre: string;
  year: string;
}

interface MusicProject {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tracks: number;
  year: string;
  link: string;
}

interface SocialPlatform {
  name: string;
  icon: string;
  url: string;
  color: string;
}

// Updated music data for SoundCloud - REPLACE PLACEHOLDER URLS
const musicTracks: MusicTrack[] = [
  {
    id: "track-1",
    title: "Midnight Echoes",
    description: "An ambient electronic piece with layered synths and atmospheric textures.",
    coverImage: "/sonic-abstraction.png",
    soundcloudUrl: "YOUR_SOUNDCLOUD_URL_HERE_1", // Replace with actual SoundCloud track URL
    duration: "3:45",
    genre: "Electronic",
    year: "2023",
  },
  {
    id: "track-2",
    title: "Urban Reflections",
    description: "Hip-hop instrumental with jazz influences and melodic samples.",
    coverImage: "/rhythmic-cityscape.png",
    soundcloudUrl: "YOUR_SOUNDCLOUD_URL_HERE_2", // Replace with actual SoundCloud track URL
    duration: "4:12",
    genre: "Hip-Hop",
    year: "2023",
  },
  {
    id: "track-3",
    title: "Digital Dreams",
    description: "Experimental electronic track with glitchy beats and evolving synthesizers.",
    coverImage: "/sonic-spectrum.png",
    soundcloudUrl: "YOUR_SOUNDCLOUD_URL_HERE_3", // Replace with actual SoundCloud track URL
    duration: "5:30",
    genre: "Experimental",
    year: "2022",
  },
  {
    id: "track-4",
    title: "Sunset Boulevard",
    description: "Chill lo-fi beat with warm analog textures and subtle piano melodies.",
    coverImage: "/sunset-soundscape.png",
    soundcloudUrl: "YOUR_SOUNDCLOUD_URL_HERE_4", // Replace with actual SoundCloud track URL
    duration: "3:18",
    genre: "Lo-Fi",
    year: "2022",
  },
  {
    id: "track-5",
    title: "Neural Network",
    description: "Futuristic techno track with complex rhythms and AI-inspired sound design.",
    coverImage: "/sonic-cityscape.png",
    soundcloudUrl: "YOUR_SOUNDCLOUD_URL_HERE_5", // Replace with actual SoundCloud track URL
    duration: "6:24",
    genre: "Techno",
    year: "2023",
  },
  // Add more tracks here as needed, with their SoundCloud URLs
];

// Sample music projects/albums (remains the same for now)
const musicProjects: MusicProject[] = [
  {
    id: "project-1",
    title: "Synthetic Memories",
    description: "A collection of tracks exploring the intersection of technology and human emotion",
    coverImage: "/abstract-circuitry-pulse.png",
    tracks: 8,
    year: "2023",
    link: "#synthetic-memories",
  },
  {
    id: "project-2",
    title: "Urban Landscapes",
    description: "Hip-hop instrumentals inspired by city life and urban environments",
    coverImage: "/urban-rhythms.png",
    tracks: 6,
    year: "2022",
    link: "#urban-landscapes",
  },
];

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

// Project Card Prop Types (no change)
interface ProjectCardProps {
  project: MusicProject;
}

// Project Card Component (no change for now)
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.link}>
      <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-purple-500/5">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={project.coverImage || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">
                {project.tracks} tracks • {project.year}
              </p>
              <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// Main Music Page Component
export default function MusicPage() {
  const [activeTab, setActiveTab] = useState("tracks");
  const [activePlayerTrackId, setActivePlayerTrackId] = useState<string | null>(null);
  const [soundCloudWidgets, setSoundCloudWidgets] = useState<{ [key: string]: any }>({});

  const handlePlayerClick = (trackId: string) => {
    setActivePlayerTrackId(trackId);
  };

  const handlePlayerReady = (trackId: string, playerInstance: any) => {
    setSoundCloudWidgets(prevWidgets => ({
      ...prevWidgets,
      [trackId]: playerInstance,
    }));

    // Bind to this player's PLAY event
    playerInstance.bind((SC as any).Widget.Events.PLAY, () => {
      // When THIS player starts playing, pause all others
      Object.entries(soundCloudWidgets).forEach(([tId, widget]) => {
        if (widget && tId !== trackId) { // Ensure widget exists and is not the current one
          widget.pause();
        }
      });
      // Also set this one as active visually if not already
      setActivePlayerTrackId(trackId); 
    });
  };
  
  // Ensure SC is available (this is a basic check; proper handling might involve checking window.SC)
  useEffect(() => {
    if (typeof SC === 'undefined') {
      // console.warn("SoundCloud Widget API (SC) not loaded yet.");
      // Potentially load the script here if not using next/script in _app or layout
    }
  }, []);


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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mx-auto max-w-5xl">
          <TabsList className="grid w-full grid-cols-2 bg-zinc-900">
            <TabsTrigger value="tracks" className="data-[state=active]:bg-purple-900 data-[state=active]:text-white">
              <Music className="mr-2 h-4 w-4" />
              Tracks
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-purple-900 data-[state=active]:text-white">
              <Waveform className="mr-2 h-4 w-4" />
              Projects
            </TabsTrigger>
          </TabsList>

          {/* Tracks Tab */}
          <TabsContent value="tracks" className="mt-8 border-none p-0">
            <div className="space-y-6">
              {musicTracks.map((track) => (
                track.soundcloudUrl && track.soundcloudUrl !== "YOUR_SOUNDCLOUD_URL_HERE" ? ( // Check if URL is valid
                  <SoundCloudPlayerCard
                    key={track.id}
                    track={track}
                    isActive={track.id === activePlayerTrackId}
                    onPlayerClick={handlePlayerClick}
                    onPlayerReady={handlePlayerReady}
                  />
                ) : (
                  <div key={track.id} className="my-4 p-4 border border-zinc-700 rounded-md bg-zinc-800 text-center">
                    <p className="text-sm text-yellow-400">
                      SoundCloud player for "{track.title}" is currently unavailable (URL missing).
                    </p>
                  </div>
                )
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="mt-8 border-none p-0">
            <div className="grid gap-6 sm:grid-cols-2">
              {musicProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
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

// Make SC globally available for type checking, assuming it's loaded by next/script
declare global {
  interface Window {
    SC?: any;
  }
}
const SC = typeof window !== 'undefined' ? window.SC : undefined;
