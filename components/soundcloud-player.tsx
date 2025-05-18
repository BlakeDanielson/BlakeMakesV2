"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ExternalLink, Heart, Share2, Clock, Music } from "lucide-react"
import { cn } from "@/lib/utils"

interface SoundCloudTrack {
  id: string
  title: string
  description: string
  genre?: string
  artwork?: string
  duration?: string
}

interface SoundCloudPlayerProps {
  username: string
  tracks: SoundCloudTrack[]
}

export function SoundCloudPlayer({ username, tracks }: SoundCloudPlayerProps) {
  const [activeTrack, setActiveTrack] = useState<SoundCloudTrack | null>(tracks[0] || null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const widgetRef = useRef<any>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  // Initialize SoundCloud Widget API
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://w.soundcloud.com/player/api.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Setup widget when iframe is loaded
  useEffect(() => {
    if (iframeRef.current && window.SC) {
      widgetRef.current = window.SC.Widget(iframeRef.current)

      widgetRef.current.bind(window.SC.Widget.Events.READY, () => {
        widgetRef.current.bind(window.SC.Widget.Events.PLAY, () => {
          setIsPlaying(true)
        })
        widgetRef.current.bind(window.SC.Widget.Events.PAUSE, () => {
          setIsPlaying(false)
        })
        widgetRef.current.bind(window.SC.Widget.Events.PLAY_PROGRESS, (e: any) => {
          setProgress((e.currentPosition / e.loadedProgress.duration) * 100)
          setCurrentTime(e.currentPosition)
          setDuration(e.loadedProgress.duration)
        })
      })
    }
  }, [iframeRef.current])

  // Load track when activeTrack changes
  useEffect(() => {
    if (widgetRef.current && activeTrack) {
      widgetRef.current.load(`https://api.soundcloud.com/tracks/${activeTrack.id}`, {
        auto_play: isPlaying,
      })
    }
  }, [activeTrack])

  const togglePlay = () => {
    if (widgetRef.current) {
      if (isPlaying) {
        widgetRef.current.pause()
      } else {
        widgetRef.current.play()
      }
    }
  }

  const toggleMute = () => {
    if (widgetRef.current) {
      widgetRef.current.setVolume(isMuted ? 100 : 0)
      setIsMuted(!isMuted)
    }
  }

  const handleTrackClick = (track: SoundCloudTrack) => {
    if (activeTrack?.id === track.id) {
      togglePlay()
    } else {
      setActiveTrack(track)
      setIsPlaying(true)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && widgetRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect()
      const clickPosition = (e.clientX - rect.left) / rect.width
      const seekPosition = duration * clickPosition
      widgetRef.current.seekTo(seekPosition)
    }
  }

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm">
      {/* Hidden iframe for SoundCloud API */}
      <iframe
        ref={iframeRef}
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${activeTrack?.id}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
        style={{ display: "none" }}
      ></iframe>

      {/* Main player */}
      <div className="flex flex-col">
        {/* Player header with artwork */}
        <div className="relative h-64 w-full overflow-hidden sm:h-80">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${activeTrack?.artwork || "/audio-spectrum-display.png"})`,
              filter: "blur(8px)",
              transform: "scale(1.1)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="flex w-full max-w-3xl flex-col items-center gap-6 sm:flex-row sm:items-start">
              {/* Artwork */}
              <div className="relative aspect-square w-40 flex-shrink-0 overflow-hidden rounded-lg shadow-xl sm:w-48">
                <img
                  src={activeTrack?.artwork || "/audio-spectrum-display.png"}
                  alt={activeTrack?.title || "Track artwork"}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
                  <button
                    onClick={togglePlay}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/90 text-white transition-transform hover:scale-105"
                  >
                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 pl-1" />}
                  </button>
                </div>
              </div>

              {/* Track info */}
              <div className="flex flex-1 flex-col items-center text-center sm:items-start sm:text-left">
                <div className="mb-1 rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-300">
                  {activeTrack?.genre || "SoundCloud"}
                </div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">{activeTrack?.title}</h2>
                <p className="mt-2 text-sm text-zinc-400">{activeTrack?.description}</p>

                <div className="mt-4 flex gap-3">
                  <a
                    href={`https://soundcloud.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-full bg-orange-500 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-orange-600"
                  >
                    Follow
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  <button className="flex items-center gap-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700">
                    <Heart className="h-4 w-4" />
                    Like
                  </button>
                  <button className="flex items-center gap-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-4 pt-4">
          <div
            ref={progressBarRef}
            className="relative h-2 w-full cursor-pointer overflow-hidden rounded-full bg-zinc-800"
            onClick={handleProgressClick}
          >
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-1 flex justify-between text-xs text-zinc-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls and track list */}
        <div className="flex flex-col p-4 lg:flex-row lg:gap-6">
          {/* Main controls */}
          <div className="mb-6 flex items-center justify-between lg:mb-0 lg:w-64">
            <button
              onClick={togglePlay}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white transition-transform hover:scale-105"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 pl-0.5" />}
            </button>

            <div className="flex items-center gap-2">
              <button onClick={toggleMute} className="text-zinc-400 hover:text-white">
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <a
                href={`https://soundcloud.com/${username}/tracks`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-zinc-700"
              >
                View All
                <ExternalLink className="ml-0.5 h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Track list */}
          <div className="flex-1 overflow-hidden">
            <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">More Tracks</div>
            <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {tracks.map((track) => (
                <motion.div
                  key={track.id}
                  whileHover={{ y: -2 }}
                  className={cn(
                    "group cursor-pointer rounded-lg border p-3 transition-colors",
                    activeTrack?.id === track.id
                      ? "border-orange-500/30 bg-orange-500/10"
                      : "border-zinc-800 bg-zinc-800/50 hover:border-zinc-700",
                  )}
                  onClick={() => handleTrackClick(track)}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded bg-zinc-900">
                      {track.artwork ? (
                        <img
                          src={track.artwork || "/placeholder.svg"}
                          alt={track.title}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-orange-500/20 text-orange-400">
                          <Music className="h-5 w-5" />
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                        {activeTrack?.id === track.id && isPlaying ? (
                          <Pause className="h-4 w-4 text-white" />
                        ) : (
                          <Play className="h-4 w-4 pl-0.5 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <h3 className="truncate text-sm font-medium text-white">{track.title}</h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-xs text-zinc-400">
                          {track.genre || "Track"}
                        </span>
                        {track.duration && (
                          <span className="flex items-center text-xs text-zinc-500">
                            <Clock className="mr-1 h-3 w-3" />
                            {track.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
