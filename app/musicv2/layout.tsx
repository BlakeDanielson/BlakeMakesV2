import type React from "react"
import type { Metadata } from "next"
import { SpotifyProvider } from "./spotify-provider"
import { Sidebar } from "./components/sidebar"
import { Player } from "./components/player"
import "./spotify.css"
import "./spotify-playlist.css"

export const metadata: Metadata = {
  title: "Spotify - Web Player: Music for everyone",
  description: "Listen to music on Spotify",
}

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return (
    <SpotifyProvider>
      <div className="spotify-body">
        <div className="spotify-app">
          <Sidebar />
          <main className="spotify-main">{children}</main>
          <Player />
        </div>
      </div>
    </SpotifyProvider>
  )
}
