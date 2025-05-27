"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Pause, Clock, MoreHorizontal, Heart, ExternalLink } from "lucide-react"
import { useSpotify } from "../spotify-provider"
import { Topbar } from "../components/topbar"

interface Track {
  id: string
  title: string
  artist: string
  duration: string
  cover?: string
  bpm?: number
  genre?: string
  date?: string
  plays?: number
}

export default function BeatStarsPage() {
  const {
    playlists,
    currentPlaylist,
    setCurrentPlaylist,
    playTrack,
    currentTrack,
    isPlaying,
    pauseTrack,
    resumeTrack,
  } = useSpotify()

  const beatStarsPlaylist = playlists.find((p) => p.id === "blvke-beats")

  useEffect(() => {
    if (beatStarsPlaylist && (!currentPlaylist || currentPlaylist.id !== beatStarsPlaylist.id)) {
      setCurrentPlaylist(beatStarsPlaylist)
    }
  }, [beatStarsPlaylist, currentPlaylist, setCurrentPlaylist])

  if (!beatStarsPlaylist) {
    return <div>Playlist not found</div>
  }

  const handlePlayPause = () => {
    if (!currentPlaylist || currentPlaylist.id !== beatStarsPlaylist.id) {
      // Start playing the first track of this playlist
      if (beatStarsPlaylist.tracks.length > 0) {
        playTrack(beatStarsPlaylist.tracks[0], beatStarsPlaylist)
      }
    } else if (isPlaying) {
      pauseTrack()
    } else {
      resumeTrack()
    }
  }

  const handleTrackPlay = (track: Track) => {
    playTrack(track, beatStarsPlaylist)
  }

  const isPlaylistPlaying = isPlaying && currentPlaylist?.id === beatStarsPlaylist.id

  return (
    <div className="relative min-h-full">
      <div
        className="spotify-playlist-gradient"
        style={{
          background: "linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%), #1e3a8a",
        }}
      ></div>

      <Topbar />

      <div className="spotify-playlist-header">
        <div className="spotify-playlist-cover">
          <Image
            src="/placeholder.svg?height=300&width=300&query=BLVKE%20producer%20logo"
            alt={beatStarsPlaylist.title}
            width={232}
            height={232}
            className="h-full w-full object-cover shadow-lg"
          />
        </div>

        <div className="spotify-playlist-info">
          <span className="text-xs uppercase">BeatStars Collection</span>
          <h1 className="spotify-playlist-title">{beatStarsPlaylist.title}</h1>
          <p className="spotify-playlist-description">{beatStarsPlaylist.description}</p>

          <div className="spotify-playlist-meta">
            <span className="font-bold">{beatStarsPlaylist.owner}</span>
            <span>•</span>
            <span>{beatStarsPlaylist.totalTracks} beats,</span>
            <span className="text-zinc-400">{beatStarsPlaylist.totalDuration}</span>
            <span>•</span>
            <Link
              href="https://www.beatstars.com/BLVKE/tracks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              <span>BeatStars</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="spotify-playlist-actions px-8">
        <button className="spotify-play-button" onClick={handlePlayPause}>
          {isPlaylistPlaying ? (
            <Pause className="h-6 w-6 fill-black text-black" />
          ) : (
            <Play className="h-6 w-6 fill-black text-black pl-1" />
          )}
        </button>
      </div>

      <div className="spotify-track-list mt-6">
        <div className="spotify-track-list-header">
          <div className="spotify-track-number">#</div>
          <div>Title</div>
          <div>BPM</div>
          <div>Genre</div>
          <div>Date added</div>
          <div>Plays</div>
          <div className="flex justify-end">
            <Clock className="h-4 w-4" />
          </div>
        </div>

        {beatStarsPlaylist.tracks.map((track, index) => {
          const isCurrentTrack = currentTrack?.id === track.id

          return (
            <div
              key={track.id}
              className={`spotify-track ${isCurrentTrack ? "bg-zinc-700/50" : ""}`}
              onDoubleClick={() => handleTrackPlay(track)}
            >
              <div className="spotify-track-number relative flex items-center justify-center">
                {isCurrentTrack && isPlaying ? (
                  <div className="h-4 w-4 flex-none">
                    <span className="sr-only">Playing</span>
                    <span className="block h-full w-[2px] animate-music-bar-1 bg-spotify-green"></span>
                    <span className="ml-[3px] block h-full w-[2px] animate-music-bar-2 bg-spotify-green"></span>
                    <span className="ml-[3px] block h-full w-[2px] animate-music-bar-3 bg-spotify-green"></span>
                  </div>
                ) : (
                  <span className="group-hover:hidden">{index + 1}</span>
                )}
                <button
                  className="absolute inset-0 hidden items-center justify-center group-hover:flex"
                  onClick={() => handleTrackPlay(track)}
                >
                  {isCurrentTrack && isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
              </div>

              <div className="spotify-track-title">
                <div className="relative h-10 w-10 flex-shrink-0">
                  <Image
                    src={track.cover || "/placeholder.svg?height=300&width=300&query=beat%20artwork"}
                    alt={track.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="spotify-track-title-text">
                  <span className={`font-medium ${isCurrentTrack ? "text-spotify-green" : ""}`}>{track.title}</span>
                  <span className="spotify-track-artist">{track.artist}</span>
                </div>
              </div>

              <div className="spotify-track-bpm">{track.bpm} BPM</div>
              <div className="spotify-track-genre">{track.genre}</div>
              <div className="spotify-track-date">{track.date}</div>
              <div className="spotify-track-plays">{track.plays?.toLocaleString()}</div>
              <div className="spotify-track-duration flex items-center justify-end gap-4">
                <button className="invisible group-hover:visible">
                  <Heart className="h-4 w-4 text-zinc-400 hover:text-white" />
                </button>
                <span>{track.duration}</span>
                <button className="invisible group-hover:visible">
                  <MoreHorizontal className="h-4 w-4 text-zinc-400 hover:text-white" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="spotify-playlist-footer mt-8 px-8 pb-24">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span>Visit</span>
          <Link
            href="https://www.beatstars.com/BLVKE/tracks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline"
          >
            BeatStars.com/BLVKE
            <ExternalLink className="h-3 w-3" />
          </Link>
          <span>to purchase these beats</span>
        </div>
      </div>
    </div>
  )
}
