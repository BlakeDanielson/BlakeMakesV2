"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Download, Heart, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { LocalMusicTrack } from "@/lib/music-utils"

interface MainMusicPlayerProps {
  currentTrack: LocalMusicTrack | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  allTracks: LocalMusicTrack[];
}

// Function to get cover image based on genre
const getCoverImageForGenre = (genre: string): string => {
  const coverImages = {
    'Hip-Hop': '/rhythmic-cityscape.png',
    'Trap': '/sonic-abstraction.png',
    'Chill': '/sunset-soundscape.png',
    'Electronic': '/sonic-spectrum.png',
    'Dark Trap': '/sonic-cityscape.png',
    'Drill': '/urban-geometric.jpg',
  }
  return coverImages[genre as keyof typeof coverImages] || '/sonic-abstraction.png'
}

// Function to determine genre from track title and metadata
const getGenreFromTrack = (track: LocalMusicTrack): string => {
  const title = track.title.toLowerCase()
  const filename = track.filename.toLowerCase()
  
  if (title.includes('drill') || filename.includes('drill')) return 'Drill'
  if (title.includes('trap') || filename.includes('trap')) return 'Trap'
  if (title.includes('dark') || filename.includes('dark')) return 'Dark Trap'
  if (title.includes('chill') || title.includes('vacation') || title.includes('sunbathing') || title.includes('comfortable')) return 'Chill'
  if (title.includes('electronic') || title.includes('5g')) return 'Electronic'
  
  // Default to Hip-Hop for other tracks
  return 'Hip-Hop'
}

export function MainMusicPlayer({ 
  currentTrack, 
  isPlaying, 
  onPlayPause, 
  onNext, 
  onPrevious,
  allTracks 
}: MainMusicPlayerProps) {
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [isSeeking, setIsSeeking] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const previousVolume = useRef(volume)

  // Update audio source when track changes
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.src = currentTrack.filepath
      audioRef.current.load()
    }
  }, [currentTrack])

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current

      const handleTimeUpdate = () => {
        if (audio.duration && !isSeeking) {
          setProgress((audio.currentTime / audio.duration) * 100)
        }
      }

      const handleLoadedMetadata = () => {
        setDuration(audio.duration)
      }

      const handleEnded = () => {
        onNext()
      }

      audio.addEventListener("timeupdate", handleTimeUpdate)
      audio.addEventListener("loadedmetadata", handleLoadedMetadata)
      audio.addEventListener("ended", handleEnded)

      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate)
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
        audio.removeEventListener("ended", handleEnded)
      }
    }
  }, [currentTrack, isSeeking, onNext])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  const handleProgressChange = (newValue: number[]) => {
    if (audioRef.current && duration) {
      const newTime = (newValue[0] / 100) * duration
      setProgress(newValue[0])
      audioRef.current.currentTime = newTime
      
      if (!isSeeking) {
        setIsSeeking(true)
      }
    }
  }

  const handleProgressStart = () => {
    setIsSeeking(true)
  }

  const handleProgressEnd = (newValue: number[]) => {
    if (audioRef.current && duration) {
      const newTime = (newValue[0] / 100) * duration
      audioRef.current.currentTime = newTime
      setProgress(newValue[0])
    }
    setTimeout(() => {
      setIsSeeking(false)
    }, 100)
  }

  const handleVolumeChange = (newValue: number[]) => {
    const newVolume = newValue[0]
    setVolume(newVolume)
    previousVolume.current = newVolume
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    if (isMuted) {
      setVolume(previousVolume.current)
      setIsMuted(false)
    } else {
      previousVolume.current = volume
      setVolume(0)
      setIsMuted(true)
    }
  }

  const handleDownload = () => {
    if (currentTrack) {
      const link = document.createElement('a')
      link.href = currentTrack.filepath
      link.download = currentTrack.filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const formatTime = (time: number) => {
    if (!time) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  if (!currentTrack) {
    return (
      <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
            <Play className="h-8 w-8 text-zinc-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">No Track Selected</h3>
            <p className="text-sm text-zinc-400">Choose a song from the collection below to start listening</p>
          </div>
        </div>
      </div>
    )
  }

  const genre = getGenreFromTrack(currentTrack)
  const coverImage = getCoverImageForGenre(genre)

  return (
    <div className="space-y-4">
      <audio ref={audioRef} preload="metadata" />

      {/* Main Player */}
      <div className="relative rounded-xl border border-purple-500/20 bg-zinc-900/70 p-6 backdrop-blur-sm">
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          {/* Album Art */}
          <div className="relative aspect-square overflow-hidden rounded-lg border border-zinc-800">
            <Image
              src={coverImage}
              alt={currentTrack.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full border-purple-500/50 bg-purple-500/20 text-white hover:bg-purple-500/30"
                onClick={onPlayPause}
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
              </Button>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col justify-between">
            <div>
              <Badge className="mb-2 bg-purple-500/20 text-purple-300">{genre}</Badge>
              <h3 className="text-2xl font-bold text-white">{currentTrack.title}</h3>
              <p className="mt-1 text-zinc-400">
                {genre} {currentTrack.bpm ? `• ${currentTrack.bpm} BPM` : ''}{currentTrack.key ? ` • ${currentTrack.key}` : ''}
              </p>
              <p className="mt-1 text-sm text-zinc-500">BLVKE • 2024</p>
            </div>

            <div className="mt-6 space-y-4">
              {/* Progress Bar */}
              <div className="space-y-2">
                <Slider
                  value={[progress]}
                  max={100}
                  step={0.1}
                  onValueChange={handleProgressChange}
                  onValueCommit={handleProgressEnd}
                  onPointerDown={handleProgressStart}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-zinc-500">
                  <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</span>
                  <span>{duration ? formatTime(duration) : currentTrack.duration}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={toggleMute} className="text-zinc-400 hover:text-white">
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                  <div className="w-24">
                    <Slider
                      value={[volume]}
                      max={100}
                      step={1}
                      onValueChange={handleVolumeChange}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onPrevious}
                    className="h-10 w-10 rounded-full text-zinc-400 hover:bg-purple-500/10 hover:text-white"
                  >
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={onPlayPause}
                    className="h-14 w-14 rounded-full border-purple-500/50 bg-purple-500/10 text-white hover:bg-purple-500/20"
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onNext}
                    className="h-10 w-10 rounded-full text-zinc-400 hover:bg-purple-500/10 hover:text-white"
                  >
                    <SkipForward className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleFavorite}
                    className={`h-10 w-10 rounded-full ${
                      isFavorite 
                        ? 'text-red-500 hover:text-red-400' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDownload}
                    className="h-10 w-10 rounded-full text-zinc-400 hover:text-white"
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full text-zinc-400 hover:text-white"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 