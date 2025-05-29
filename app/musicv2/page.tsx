"use client"

import Link from "next/link"
import Image from "next/image"
import { MoreHorizontal, ExternalLink } from "lucide-react"
import { Topbar } from "./components/topbar"
import { ensureValidImageSrc, getPlaceholderImage } from "./utils/image-helpers"

export default function MusicV2Page() {
  // Social platform links
  const platformLinks = [
    {
      name: "SoundCloud",
      icon: "/platform-icons/soundcloud-icon.png",
      url: "https://soundcloud.com/blvkemusic",
      description: "Listen to my tracks on SoundCloud",
    },
    {
      name: "YouTube",
      icon: "/platform-icons/youtube-icon.png",
      url: "https://www.youtube.com/@blvkemusic",
      description: "Watch my music videos on YouTube",
    },
    {
      name: "BeatStars",
      icon: "/platform-icons/beatstars-icon.png",
      url: "https://www.beatstars.com/blvke",
      description: "Purchase my beats on BeatStars",
    },
  ]

  return (
    <div className="relative min-h-full">
      <div className="spotify-main-gradient" style={{ "--gradient-color": "#121212" } as React.CSSProperties}></div>

      <Topbar />

      <div className="spotify-main-content">
        {/* Featured Summer Songs Playlist */}
        <div className="spotify-featured-playlist">
          <div className="spotify-featured-playlist-header">
            <div className="spotify-featured-playlist-image">
              <Image src="/summer-songs-2025.png" alt="Summer Songs 2025" width={128} height={128} />
            </div>
            <div className="spotify-featured-playlist-info">
              <div className="spotify-featured-playlist-label">Playlist</div>
              <h1 className="spotify-featured-playlist-title">SUMMER SONGS 2025 ☀️🌺</h1>
              <p className="spotify-featured-playlist-description">
                Summer is almost here! Turn up the heat with Summer Songs 2025. Listen Now!
              </p>
              <div className="spotify-featured-playlist-actions">
                <button className="spotify-play-button">Play</button>
                <button className="spotify-follow-button">Follow</button>
                <button className="spotify-more-button">
                  <MoreHorizontal className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <button className="spotify-announcement-button">Hide announcements</button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="spotify-filter-tabs">
          <button className="spotify-filter-tab active">All</button>
          <button className="spotify-filter-tab">Music</button>
          <button className="spotify-filter-tab">Podcasts</button>
          <button className="spotify-filter-tab">Audiobooks</button>
        </div>

        {/* BLVKE Playlists Grid */}
        <div className="spotify-radio-grid">
          <Link href="/musicv2/playlist/blvke-favorite-beats" className="spotify-radio-card">
            <div className="spotify-radio-image">
              <Image
                src={
                  ensureValidImageSrc(
                    "/blvke-favorite-beats.png",
                    getPlaceholderImage(80, 80, "BLVKE Favorite Beats"),
                  ) || "/placeholder.svg"
                }
                alt="BLVKE Favorite Beats"
                width={80}
                height={80}
              />
            </div>
            <div className="spotify-radio-info">
              <h3 className="spotify-radio-title">BLVKE Favorite Beats</h3>
            </div>
          </Link>

          <Link href="/musicv2/playlist/blvke-drill-beats" className="spotify-radio-card">
            <div className="spotify-radio-image">
              <Image
                src={
                  ensureValidImageSrc("/blvke-drill-beats.png", getPlaceholderImage(80, 80, "BLVKE Drill Beats")) ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt="BLVKE Drill Beats"
                width={80}
                height={80}
              />
            </div>
            <div className="spotify-radio-info">
              <h3 className="spotify-radio-title">BLVKE Drill Beats</h3>
            </div>
          </Link>

          <Link href="/musicv2/playlist/blvke-rnb-beats" className="spotify-radio-card">
            <div className="spotify-radio-image">
              <Image
                src={
                  ensureValidImageSrc("/blvke-rnb-beats.png", getPlaceholderImage(80, 80, "BLVKE RnB Beats")) ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt="BLVKE RnB Beats"
                width={80}
                height={80}
              />
            </div>
            <div className="spotify-radio-info">
              <h3 className="spotify-radio-title">BLVKE RnB Beats</h3>
            </div>
          </Link>

          <Link href="/musicv2/playlist/blvke-bass-tracks" className="spotify-radio-card">
            <div className="spotify-radio-image">
              <Image
                src={
                  ensureValidImageSrc("/blvke-bass-tracks.png", getPlaceholderImage(80, 80, "BLVKE Bass Tracks")) ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt="BLVKE Bass Tracks"
                width={80}
                height={80}
              />
            </div>
            <div className="spotify-radio-info">
              <h3 className="spotify-radio-title">BLVKE Bass Tracks</h3>
            </div>
          </Link>
        </div>

        <div className="spotify-radio-grid">
          <Link href="/musicv2/playlist/blvke-trap-beats" className="spotify-radio-card">
            <div className="spotify-radio-image">
              <Image
                src={
                  ensureValidImageSrc("/blvke-trap-beats.png", getPlaceholderImage(80, 80, "BLVKE Trap Beats")) ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt="BLVKE Trap Beats"
                width={80}
                height={80}
              />
            </div>
            <div className="spotify-radio-info">
              <h3 className="spotify-radio-title">BLVKE Trap Beats</h3>
            </div>
          </Link>

          {/* Social Platform Links - replacing the three tiles */}
          {platformLinks.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="spotify-radio-card hover:bg-zinc-800 transition-colors"
            >
              <div className="spotify-radio-image">
                <Image
                  src={
                    ensureValidImageSrc(platform.icon, getPlaceholderImage(80, 80, platform.name)) || "/placeholder.svg"
                  }
                  alt={platform.name}
                  width={80}
                  height={80}
                />
              </div>
              <div className="spotify-radio-info">
                <div className="flex items-center gap-1">
                  <h3 className="spotify-radio-title">{platform.name}</h3>
                  <ExternalLink className="h-3 w-3 text-zinc-400" />
                </div>
                <p className="text-xs text-zinc-400 mt-1">{platform.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Made For Blake Danielson Section */}
        <section className="spotify-section">
          <div className="spotify-section-header">
            <h2 className="spotify-section-title">Made For You</h2>
            <Link href="/musicv2/made-for-you" className="spotify-section-link">
              Show all
            </Link>
          </div>

          <div className="spotify-daily-mix-grid">
            <Link href="/musicv2/playlist/daily-mix-1" className="spotify-daily-mix-card">
              <div className="spotify-daily-mix-image">
                <Image
                  src={
                    ensureValidImageSrc("/shadowed-rhymes.png", getPlaceholderImage(200, 200, "Daily Mix 1")) ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg"
                  }
                  alt="Daily Mix 1"
                  width={200}
                  height={200}
                />
                <div className="spotify-daily-mix-number">01</div>
              </div>
              <h3 className="spotify-daily-mix-title">Overstimulated</h3>
              <p className="spotify-daily-mix-description">The Alchemist, Earl Sweatshirt, Freddie...</p>
            </Link>

            <Link href="/musicv2/playlist/daily-mix-2" className="spotify-daily-mix-card">
              <div className="spotify-daily-mix-image">
                <Image
                  src={
                    ensureValidImageSrc("/focused-producer.png", getPlaceholderImage(200, 200, "Daily Mix 2")) ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg"
                  }
                  alt="Daily Mix 2"
                  width={200}
                  height={200}
                />
                <div className="spotify-daily-mix-number">02</div>
              </div>
              <h3 className="spotify-daily-mix-title">Twan Drill Beat</h3>
              <p className="spotify-daily-mix-description">GRIZ, TheFatRat, Fort Minor and more</p>
            </Link>

            <Link href="/musicv2/playlist/daily-mix-3" className="spotify-daily-mix-card">
              <div className="spotify-daily-mix-image">
                <Image
                  src={
                    ensureValidImageSrc(
                      "/placeholder.svg?height=200&width=200&query=edm%20festival%20stage",
                      getPlaceholderImage(200, 200, "Daily Mix 3"),
                    ) || "/placeholder.svg"
                  }
                  alt="Daily Mix 3"
                  width={200}
                  height={200}
                />
                <div className="spotify-daily-mix-number">03</div>
              </div>
              <h3 className="spotify-daily-mix-title">Golden God</h3>
              <p className="spotify-daily-mix-description">Skrillex, Knock2, Eliminate and more</p>
            </Link>

            <Link href="/musicv2/playlist/daily-mix-4" className="spotify-daily-mix-card">
              <div className="spotify-daily-mix-image">
                <Image
                  src={
                    ensureValidImageSrc(
                      "/placeholder.svg?height=200&width=200&query=punk%20rock%20band",
                      getPlaceholderImage(200, 200, "Daily Mix 4"),
                    ) || "/placeholder.svg"
                  }
                  alt="Daily Mix 4"
                  width={200}
                  height={200}
                />
                <div className="spotify-daily-mix-number">04</div>
              </div>
              <h3 className="spotify-daily-mix-title">Hold Me Close</h3>
              <p className="spotify-daily-mix-description">blink-182, Paramore, American Hi-Fi and more</p>
            </Link>

            <Link href="/musicv2/playlist/daily-mix-5" className="spotify-daily-mix-card">
              <div className="spotify-daily-mix-image">
                <Image
                  src={
                    ensureValidImageSrc(
                      "/placeholder.svg?height=200&width=200&query=ambient%20electronic%20music",
                      getPlaceholderImage(200, 200, "Daily Mix 5"),
                    ) || "/placeholder.svg"
                  }
                  alt="Daily Mix 5"
                  width={200}
                  height={200}
                />
                <div className="spotify-daily-mix-number">05</div>
              </div>
              <h3 className="spotify-daily-mix-title">5G Towers</h3>
              <p className="spotify-daily-mix-description">ODESZA, Flume, Imprinter and more</p>
            </Link>

            <Link href="/musicv2/playlist/daily-mix-6" className="spotify-daily-mix-card">
              <div className="spotify-daily-mix-image">
                <Image
                  src={
                    ensureValidImageSrc(
                      "/placeholder.svg?height=200&width=200&query=hip%20hop%20artist%20studio",
                      getPlaceholderImage(200, 200, "Daily Mix 6"),
                    ) || "/placeholder.svg"
                  }
                  alt="Daily Mix 6"
                  width={200}
                  height={200}
                />
                <div className="spotify-daily-mix-number">06</div>
              </div>
              <h3 className="spotify-daily-mix-title">You N Me</h3>
              <p className="spotify-daily-mix-description">JID, Smino, Gorillaz and more</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
