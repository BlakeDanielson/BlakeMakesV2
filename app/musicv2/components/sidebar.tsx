"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, Search, Library, Plus, ChevronRight } from "lucide-react"
import { useSpotify } from "../spotify-provider"

export function Sidebar() {
  const { playlists } = useSpotify()

  return (
    <div className="spotify-sidebar">
      <div className="p-4">
        <div className="mb-6 space-y-4">
          <Link href="/musicv2" className="flex items-center gap-4 rounded-md px-3 py-2 text-white hover:bg-zinc-800">
            <Home className="h-6 w-6" />
            <span className="font-bold">Home</span>
          </Link>
          <Link
            href="/musicv2/search"
            className="flex items-center gap-4 rounded-md px-3 py-2 text-zinc-400 hover:text-white"
          >
            <Search className="h-6 w-6" />
            <span className="font-bold">Search</span>
          </Link>
        </div>
      </div>

      <div className="spotify-library-header">
        <button className="spotify-library-title">
          <Library className="h-6 w-6" />
          <span>Your Library</span>
        </button>
        <div className="spotify-library-buttons">
          <button className="spotify-library-button">
            <Plus className="h-5 w-5" />
          </button>
          <button className="spotify-library-button">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="spotify-library-filters">
        <button className="spotify-library-filter active">Playlists</button>
        <button className="spotify-library-filter">Podcasts</button>
        <button className="spotify-library-filter">Albums</button>
        <button className="spotify-library-filter">Artists</button>
        <button className="spotify-library-filter">Episodes</button>
      </div>

      <div className="spotify-library-search">
        <button className="spotify-library-search-button">
          <Search className="h-4 w-4" />
        </button>
        <div className="spotify-library-sort">
          <span>Recents</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
          </svg>
        </div>
      </div>

      <div className="spotify-library-items">
        {playlists.slice(0, 10).map((playlist, index) => (
          <Link key={playlist.id} href={`/musicv2/playlist/${playlist.id}`} className="spotify-library-item">
            <div className="spotify-library-item-image">
              <Image
                src={playlist.cover || "/placeholder.svg?height=48&width=48&query=music%20playlist"}
                alt={playlist.title}
                width={48}
                height={48}
              />
            </div>
            <div className="spotify-library-item-info">
              <div className="spotify-library-item-title">{index === 0 ? "LockJaw" : playlist.title}</div>
              <div className="spotify-library-item-subtitle">
                {index === 0 ? (
                  <>
                    <span>Playlist</span>
                    <span>•</span>
                    <span>Blake Danielson</span>
                  </>
                ) : index === 1 ? (
                  <>
                    <span>Liked Songs</span>
                    <span>•</span>
                    <span>368 songs</span>
                  </>
                ) : index === 2 ? (
                  <>
                    <span>Your Episodes</span>
                    <span>•</span>
                    <span>Saved & downloaded episodes</span>
                  </>
                ) : index === 3 ? (
                  <>
                    <span>LETHAL</span>
                    <span>•</span>
                    <span>Upcoming album • Rico Nasty</span>
                  </>
                ) : index === 4 ? (
                  <>
                    <span>13 Months of Sunshine</span>
                    <span>•</span>
                    <span>Upcoming album • Aminé</span>
                  </>
                ) : (
                  <>
                    <span>Playlist</span>
                    <span>•</span>
                    <span>Blake Danielson</span>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
