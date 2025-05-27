"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Play, Clock, Download, Share, MoreHorizontal, Search } from "lucide-react"
import { useSpotify } from "../../spotify-provider"
import { Topbar } from "../../components/topbar"
import { ensureValidImageSrc, getPlaceholderImage } from "../../utils/image-helpers"

export default function PlaylistPage() {
  const params = useParams()
  const { playlists, currentTrack, isPlaying, playTrack, pauseTrack, resumeTrack } = useSpotify()
  const [playlist, setPlaylist] = useState(playlists.find((p) => p.id === params.id) || null)
  const [isHeaderCompact, setIsHeaderCompact] = useState(false)

  useEffect(() => {
    const foundPlaylist = playlists.find((p) => p.id === params.id)
    setPlaylist(foundPlaylist || null)
  }, [params.id, playlists])

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderCompact(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePlayPause = (track: any) => {
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        pauseTrack()
      } else {
        resumeTrack()
      }
    } else {
      playTrack(track, playlist || undefined)
    }
  }

  if (!playlist) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl text-white">Playlist not found</p>
      </div>
    )
  }

  // Create a collage of album art for the playlist header
  const collageImages = playlist.tracks.slice(0, 4).map((track) => track.cover)
  while (collageImages.length < 4) {
    collageImages.push(playlist.cover)
  }

  return (
    <div className="relative min-h-full">
      <div className="spotify-playlist-gradient" style={{ "--gradient-color": "#535353" } as any}></div>

      <Topbar />

      <div className="spotify-playlist-content">
        {/* Playlist Header */}
        <div className={`spotify-playlist-header ${isHeaderCompact ? "compact" : ""}`}>
          <div className="spotify-playlist-header-content">
            <div className="spotify-playlist-image-container">
              {playlist.id.includes("blvke") ? (
                // Single image for BLVKE playlists
                <div className="spotify-playlist-image">
                  <Image
                    src={
                      ensureValidImageSrc(playlist.cover, getPlaceholderImage(300, 300, playlist.title)) ||
                      "/placeholder.svg"
                    }
                    alt={playlist.title}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
              ) : (
                // Collage for other playlists
                <div className="spotify-playlist-collage">
                  {collageImages.map((image, index) => (
                    <div key={index} className="spotify-playlist-collage-item">
                      <Image
                        src={
                          ensureValidImageSrc(
                            image,
                            getPlaceholderImage(150, 150, `Collage ${index || "/placeholder.svg"}`),
                          ) || "/placeholder.svg"
                        }
                        alt={`Playlist collage ${index}`}
                        width={150}
                        height={150}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="spotify-playlist-info">
              <div className="spotify-playlist-type">{playlist.isPrivate ? "Private Playlist" : "Playlist"}</div>
              <h1 className="spotify-playlist-title">{playlist.title}</h1>
              <p className="spotify-playlist-description">{playlist.description}</p>
              <div className="spotify-playlist-meta">
                <div className="spotify-playlist-owner">
                  <Image
                    src={
                      ensureValidImageSrc("/blake.jpg", getPlaceholderImage(24, 24, playlist.owner)) ||
                      "/placeholder.svg"
                    }
                    alt={playlist.owner}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span>{playlist.owner}</span>
                </div>
                <span className="spotify-playlist-stats">
                  • {playlist.totalTracks} songs, {playlist.totalDuration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Controls */}
        <div className="spotify-playlist-controls">
          <button className="spotify-play-button">
            <Play className="h-6 w-6 fill-black text-black" />
          </button>
          <button className="spotify-download-button">
            <Download className="h-5 w-5" />
          </button>
          <button className="spotify-share-button">
            <Share className="h-5 w-5" />
          </button>
          <button className="spotify-more-button">
            <MoreHorizontal className="h-6 w-6" />
          </button>
          <div className="flex-grow"></div>
          <div className="spotify-search-container">
            <Search className="h-4 w-4" />
            <input type="text" placeholder="Search in playlist" className="spotify-search-input" />
          </div>
          <button className="spotify-custom-order">Custom order</button>
        </div>

        {/* Playlist Tracks */}
        <div className="spotify-playlist-tracks">
          <div className="spotify-playlist-tracks-header">
            <div className="spotify-track-number">#</div>
            <div className="spotify-track-title">Title</div>
            <div className="spotify-track-album">Album</div>
            <div className="spotify-track-date">Date added</div>
            <div className="spotify-track-duration">
              <Clock className="h-4 w-4" />
            </div>
          </div>

          <div className="spotify-playlist-tracks-list">
            {playlist.tracks.map((track, index) => (
              <div
                key={track.id}
                className={`spotify-playlist-track ${currentTrack?.id === track.id ? "playing" : ""}`}
                onClick={() => handlePlayPause(track)}
              >
                <div className="spotify-track-number">
                  {currentTrack?.id === track.id && isPlaying ? (
                    <div className="spotify-playing-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="spotify-track-title">
                  <div className="spotify-track-image">
                    <Image
                      src={
                        ensureValidImageSrc(track.cover, getPlaceholderImage(40, 40, track.title)) || "/placeholder.svg"
                      }
                      alt={track.title}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="spotify-track-info">
                    <div className="spotify-track-name">{track.title}</div>
                    <div className="spotify-track-artist">{track.artist}</div>
                  </div>
                </div>
                <div className="spotify-track-album">{track.album}</div>
                <div className="spotify-track-date">{track.date}</div>
                <div className="spotify-track-duration">{track.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
