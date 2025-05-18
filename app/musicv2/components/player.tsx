"use client"

import type React from "react"

import Image from "next/image"
import { useSpotify } from "../spotify-provider"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  VolumeX,
  Maximize2,
  Laptop,
  ListMusic,
  Heart,
} from "lucide-react"
import { ensureValidImageSrc, getPlaceholderImage } from "../utils/image-helpers"

export function Player() {
  const {
    currentTrack,
    isPlaying,
    volume,
    progress,
    duration,
    pauseTrack,
    resumeTrack,
    nextTrack,
    prevTrack,
    setVolume,
    setProgress,
    toggleShuffle,
    toggleRepeat,
    isShuffled,
    repeatMode,
  } = useSpotify()

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return

    const progressBar = e.currentTarget
    const rect = progressBar.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const newProgress = percent * duration

    setProgress(newProgress)
  }

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const volumeBar = e.currentTarget
    const rect = volumeBar.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const newVolume = Math.max(0, Math.min(100, percent * 100))

    setVolume(newVolume)
  }

  return (
    <div className="spotify-player">
      {/* Left: Current track info */}
      <div className="spotify-player-left">
        {currentTrack ? (
          <div className="spotify-player-track">
            <div className="spotify-player-track-image">
              <Image
                src={
                  ensureValidImageSrc(currentTrack.cover, getPlaceholderImage(56, 56, "music note")) ||
                  "/placeholder.svg"
                }
                alt={currentTrack.title}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <div className="spotify-player-track-info">
              <div className="spotify-player-track-name">{currentTrack.title}</div>
              <div className="spotify-player-track-artist">{currentTrack.artist}</div>
            </div>
            <button className="spotify-player-control-button ml-4">
              <Heart className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="spotify-player-track">
            <div className="spotify-player-track-image bg-zinc-800"></div>
            <div className="spotify-player-track-info">
              <div className="spotify-player-track-name">No track playing</div>
              <div className="spotify-player-track-artist">Select a track to play</div>
            </div>
          </div>
        )}
      </div>

      {/* Center: Playback controls and progress */}
      <div className="spotify-player-center">
        <div className="spotify-player-controls">
          <button
            className={`spotify-player-control-button ${isShuffled ? "text-spotify-green" : ""}`}
            onClick={toggleShuffle}
          >
            <Shuffle className="h-4 w-4" />
          </button>
          <button className="spotify-player-control-button" onClick={prevTrack}>
            <SkipBack className="h-4 w-4" />
          </button>
          <button
            className="spotify-player-play-button"
            onClick={isPlaying ? pauseTrack : resumeTrack}
            disabled={!currentTrack}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 pl-0.5" />}
          </button>
          <button className="spotify-player-control-button" onClick={nextTrack}>
            <SkipForward className="h-4 w-4" />
          </button>
          <button
            className={`spotify-player-control-button ${repeatMode !== "off" ? "text-spotify-green" : ""}`}
            onClick={toggleRepeat}
          >
            <Repeat className="h-4 w-4" />
            {repeatMode === "one" && <span className="absolute -mt-2 ml-1 text-[8px]">1</span>}
          </button>
        </div>
        <div className="spotify-player-progress">
          <span>{formatTime(progress)}</span>
          <div className="spotify-player-progress-bar" onClick={handleProgressChange}>
            <div
              className="spotify-player-progress-bar-fill"
              style={{ width: `${(progress / (duration || 1)) * 100}%` }}
            ></div>
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right: Volume and additional controls */}
      <div className="spotify-player-right">
        <div className="spotify-player-actions">
          <button className="spotify-player-control-button">
            <ListMusic className="h-4 w-4" />
          </button>
          <button className="spotify-player-control-button">
            <Laptop className="h-4 w-4" />
          </button>
          <div className="spotify-player-volume">
            <button className="spotify-player-control-button">
              {volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <div className="spotify-player-volume-bar" onClick={handleVolumeChange}>
              <div className="spotify-player-volume-bar-fill" style={{ width: `${volume}%` }}></div>
            </div>
          </div>
          <button className="spotify-player-control-button">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
