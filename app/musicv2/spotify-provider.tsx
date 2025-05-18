"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: string
  cover: string
  audioSrc: string
  date?: string
  bpm?: number
  genre?: string
  tags?: string[]
  price?: string
  plays?: number
}

interface Playlist {
  id: string
  title: string
  description: string
  cover: string
  tracks: Track[]
  owner: string
  totalDuration?: string
  totalTracks?: number
  isPrivate?: boolean
}

interface SpotifyContextType {
  currentTrack: Track | null
  isPlaying: boolean
  volume: number
  progress: number
  duration: number
  playlists: Playlist[]
  currentPlaylist: Playlist | null
  queue: Track[]
  playTrack: (track: Track, playlist?: Playlist) => void
  pauseTrack: () => void
  resumeTrack: () => void
  nextTrack: () => void
  prevTrack: () => void
  setVolume: (volume: number) => void
  setProgress: (progress: number) => void
  toggleShuffle: () => void
  toggleRepeat: () => void
  isShuffled: boolean
  repeatMode: "off" | "all" | "one"
  setCurrentPlaylist: (playlist: Playlist) => void
}

const SpotifyContext = createContext<SpotifyContextType | undefined>(undefined)

// BLVKE Favorite Beats tracks
const blvkeFavoriteTracks: Track[] = [
  {
    id: "track-lockjaw",
    title: "LOCKJAW",
    artist: "BLVKE",
    album: "BLVKE Favorite Beats",
    duration: "2:45",
    cover: "/blvke-beats/lockjaw.png",
    audioSrc: "https://example.com/lockjaw.mp3",
    date: "Apr 15, 2023",
    bpm: 140,
    genre: "Trap",
    tags: ["dark", "hard", "808"],
    price: "$29.99",
    plays: 2453,
  },
  {
    id: "track-midnight-drive",
    title: "Midnight Drive",
    artist: "BLVKE",
    album: "BLVKE Favorite Beats",
    duration: "3:12",
    cover: "/blvke-beats/midnight-drive.png",
    audioSrc: "https://example.com/midnight-drive.mp3",
    date: "Mar 22, 2023",
    bpm: 95,
    genre: "Lo-Fi",
    tags: ["chill", "atmospheric", "night"],
    price: "$19.99",
    plays: 1876,
  },
  {
    id: "track-neon-lights",
    title: "Neon Lights",
    artist: "BLVKE",
    album: "BLVKE Favorite Beats",
    duration: "2:58",
    cover: "/blvke-beats/neon-lights.png",
    audioSrc: "https://example.com/neon-lights.mp3",
    date: "Feb 18, 2023",
    bpm: 128,
    genre: "Electronic",
    tags: ["synth", "retro", "wave"],
    price: "$24.99",
    plays: 3210,
  },
  {
    id: "track-urban-jungle",
    title: "Urban Jungle",
    artist: "BLVKE",
    album: "BLVKE Favorite Beats",
    duration: "3:05",
    cover: "/blvke-beats/urban-jungle.png",
    audioSrc: "https://example.com/urban-jungle.mp3",
    date: "Jan 30, 2023",
    bpm: 90,
    genre: "Hip Hop",
    tags: ["gritty", "urban", "drums"],
    price: "$29.99",
    plays: 1543,
  },
  {
    id: "track-crystal-clear",
    title: "Crystal Clear",
    artist: "BLVKE",
    album: "BLVKE Favorite Beats",
    duration: "2:37",
    cover: "/blvke-beats/crystal-clear.png",
    audioSrc: "https://example.com/crystal-clear.mp3",
    date: "Jan 12, 2023",
    bpm: 150,
    genre: "Drill",
    tags: ["hard", "bass", "808"],
    price: "$34.99",
    plays: 2876,
  },
]

// BLVKE Drill Beats tracks
const blvkeDrillTracks: Track[] = [
  {
    id: "track-drill-anthem",
    title: "Drill Anthem",
    artist: "BLVKE",
    album: "BLVKE Drill Beats",
    duration: "2:55",
    cover: "/blvke-beats/drill-anthem.png",
    audioSrc: "https://example.com/drill-anthem.mp3",
    date: "May 10, 2023",
    bpm: 145,
    genre: "Drill",
    tags: ["uk drill", "dark", "808"],
    price: "$34.99",
    plays: 3245,
  },
  {
    id: "track-london-nights",
    title: "London Nights",
    artist: "BLVKE",
    album: "BLVKE Drill Beats",
    duration: "3:10",
    cover: "/blvke-beats/london-nights.png",
    audioSrc: "https://example.com/london-nights.mp3",
    date: "Apr 28, 2023",
    bpm: 140,
    genre: "Drill",
    tags: ["uk drill", "atmospheric", "night"],
    price: "$29.99",
    plays: 2876,
  },
  {
    id: "track-concrete-jungle",
    title: "Concrete Jungle",
    artist: "BLVKE",
    album: "BLVKE Drill Beats",
    duration: "2:48",
    cover: "/blvke-beats/concrete-jungle.png",
    audioSrc: "https://example.com/concrete-jungle.mp3",
    date: "Apr 15, 2023",
    bpm: 142,
    genre: "Drill",
    tags: ["hard", "urban", "gritty"],
    price: "$34.99",
    plays: 3102,
  },
  {
    id: "track-midnight-drillers",
    title: "Midnight Drillers",
    artist: "BLVKE",
    album: "BLVKE Drill Beats",
    duration: "3:05",
    cover: "/blvke-beats/midnight-drillers.png",
    audioSrc: "https://example.com/midnight-drillers.mp3",
    date: "Mar 30, 2023",
    bpm: 144,
    genre: "Drill",
    tags: ["dark", "night", "808"],
    price: "$29.99",
    plays: 2543,
  },
  {
    id: "track-cold-streets",
    title: "Cold Streets",
    artist: "BLVKE",
    album: "BLVKE Drill Beats",
    duration: "2:52",
    cover: "/blvke-beats/cold-streets.png",
    audioSrc: "https://example.com/cold-streets.mp3",
    date: "Mar 15, 2023",
    bpm: 143,
    genre: "Drill",
    tags: ["winter", "hard", "bass"],
    price: "$34.99",
    plays: 2987,
  },
]

// BLVKE RnB Beats tracks
const blvkeRnBTracks: Track[] = [
  {
    id: "track-smooth-nights",
    title: "Smooth Nights",
    artist: "BLVKE",
    album: "BLVKE RnB Beats",
    duration: "3:25",
    cover: "/blvke-beats/smooth-nights.png",
    audioSrc: "https://example.com/smooth-nights.mp3",
    date: "May 5, 2023",
    bpm: 90,
    genre: "R&B",
    tags: ["smooth", "chill", "night"],
    price: "$24.99",
    plays: 3876,
  },
  {
    id: "track-velvet-touch",
    title: "Velvet Touch",
    artist: "BLVKE",
    album: "BLVKE RnB Beats",
    duration: "3:40",
    cover: "/blvke-beats/velvet-touch.png",
    audioSrc: "https://example.com/velvet-touch.mp3",
    date: "Apr 22, 2023",
    bpm: 85,
    genre: "R&B",
    tags: ["sensual", "smooth", "melodic"],
    price: "$29.99",
    plays: 4210,
  },
  {
    id: "track-late-night-calls",
    title: "Late Night Calls",
    artist: "BLVKE",
    album: "BLVKE RnB Beats",
    duration: "3:15",
    cover: "/blvke-beats/late-night-calls.png",
    audioSrc: "https://example.com/late-night-calls.mp3",
    date: "Apr 10, 2023",
    bpm: 88,
    genre: "R&B",
    tags: ["night", "phone", "chill"],
    price: "$24.99",
    plays: 3654,
  },
  {
    id: "track-silk-sheets",
    title: "Silk Sheets",
    artist: "BLVKE",
    album: "BLVKE RnB Beats",
    duration: "3:30",
    cover: "/blvke-beats/silk-sheets.png",
    audioSrc: "https://example.com/silk-sheets.mp3",
    date: "Mar 25, 2023",
    bpm: 92,
    genre: "R&B",
    tags: ["smooth", "bedroom", "sensual"],
    price: "$29.99",
    plays: 4532,
  },
  {
    id: "track-moonlight-serenade",
    title: "Moonlight Serenade",
    artist: "BLVKE",
    album: "BLVKE RnB Beats",
    duration: "3:45",
    cover: "/blvke-beats/moonlight-serenade.png",
    audioSrc: "https://example.com/moonlight-serenade.mp3",
    date: "Mar 12, 2023",
    bpm: 86,
    genre: "R&B",
    tags: ["night", "romantic", "smooth"],
    price: "$24.99",
    plays: 3987,
  },
]

// BLVKE Bass Tracks
const blvkeBassTracks: Track[] = [
  {
    id: "track-bass-cannon",
    title: "Bass Cannon",
    artist: "BLVKE",
    album: "BLVKE Bass Tracks",
    duration: "2:50",
    cover: "/blvke-beats/bass-cannon.png",
    audioSrc: "https://example.com/bass-cannon.mp3",
    date: "May 15, 2023",
    bpm: 150,
    genre: "Bass",
    tags: ["heavy", "dubstep", "wobble"],
    price: "$34.99",
    plays: 4532,
  },
  {
    id: "track-subwoofer-killer",
    title: "Subwoofer Killer",
    artist: "BLVKE",
    album: "BLVKE Bass Tracks",
    duration: "3:05",
    cover: "/blvke-beats/subwoofer-killer.png",
    audioSrc: "https://example.com/subwoofer-killer.mp3",
    date: "May 2, 2023",
    bpm: 145,
    genre: "Bass",
    tags: ["heavy", "trap", "808"],
    price: "$29.99",
    plays: 3876,
  },
  {
    id: "track-earthquake",
    title: "Earthquake",
    artist: "BLVKE",
    album: "BLVKE Bass Tracks",
    duration: "2:55",
    cover: "/blvke-beats/earthquake.png",
    audioSrc: "https://example.com/earthquake.mp3",
    date: "Apr 20, 2023",
    bpm: 155,
    genre: "Bass",
    tags: ["heavy", "dubstep", "drop"],
    price: "$34.99",
    plays: 4210,
  },
  {
    id: "track-bass-drop",
    title: "Bass Drop",
    artist: "BLVKE",
    album: "BLVKE Bass Tracks",
    duration: "3:10",
    cover: "/blvke-beats/bass-drop.png",
    audioSrc: "https://example.com/bass-drop.mp3",
    date: "Apr 8, 2023",
    bpm: 148,
    genre: "Bass",
    tags: ["heavy", "drop", "electronic"],
    price: "$29.99",
    plays: 3654,
  },
  {
    id: "track-low-frequency",
    title: "Low Frequency",
    artist: "BLVKE",
    album: "BLVKE Bass Tracks",
    duration: "3:00",
    cover: "/blvke-beats/low-frequency.png",
    audioSrc: "https://example.com/low-frequency.mp3",
    date: "Mar 25, 2023",
    bpm: 152,
    genre: "Bass",
    tags: ["deep", "sub", "heavy"],
    price: "$34.99",
    plays: 3987,
  },
]

// BLVKE Trap Beats
const blvkeTrapTracks: Track[] = [
  {
    id: "track-trap-lord",
    title: "Trap Lord",
    artist: "BLVKE",
    album: "BLVKE Trap Beats",
    duration: "2:45",
    cover: "/blvke-beats/trap-lord.png",
    audioSrc: "https://example.com/trap-lord.mp3",
    date: "May 18, 2023",
    bpm: 140,
    genre: "Trap",
    tags: ["hard", "dark", "808"],
    price: "$29.99",
    plays: 3876,
  },
  {
    id: "track-atlanta-nights",
    title: "Atlanta Nights",
    artist: "BLVKE",
    album: "BLVKE Trap Beats",
    duration: "3:00",
    cover: "/blvke-beats/atlanta-nights.png",
    audioSrc: "https://example.com/atlanta-nights.mp3",
    date: "May 5, 2023",
    bpm: 135,
    genre: "Trap",
    tags: ["southern", "dark", "808"],
    price: "$24.99",
    plays: 3210,
  },
  {
    id: "track-hi-hat-heaven",
    title: "Hi-Hat Heaven",
    artist: "BLVKE",
    album: "BLVKE Trap Beats",
    duration: "2:50",
    cover: "/blvke-beats/hi-hat-heaven.png",
    audioSrc: "https://example.com/hi-hat-heaven.mp3",
    date: "Apr 22, 2023",
    bpm: 142,
    genre: "Trap",
    tags: ["hi-hats", "rolls", "808"],
    price: "$29.99",
    plays: 3654,
  },
  {
    id: "track-808-mafia",
    title: "808 Mafia",
    artist: "BLVKE",
    album: "BLVKE Trap Beats",
    duration: "2:55",
    cover: "/blvke-beats/808-mafia.png",
    audioSrc: "https://example.com/808-mafia.mp3",
    date: "Apr 10, 2023",
    bpm: 138,
    genre: "Trap",
    tags: ["808", "dark", "hard"],
    price: "$34.99",
    plays: 4532,
  },
  {
    id: "track-trap-house",
    title: "Trap House",
    artist: "BLVKE",
    album: "BLVKE Trap Beats",
    duration: "3:05",
    cover: "/blvke-beats/trap-house.png",
    audioSrc: "https://example.com/trap-house.mp3",
    date: "Mar 28, 2023",
    bpm: 140,
    genre: "Trap",
    tags: ["house", "808", "dark"],
    price: "$29.99",
    plays: 3987,
  },
]

// Create BLVKE playlists
const blvkeFavoriteBeatsPlaylist: Playlist = {
  id: "blvke-favorite-beats",
  title: "BLVKE Favorite Beats",
  description: "The best beats from BLVKE's collection",
  cover: "/blvke-favorite-beats.png",
  tracks: blvkeFavoriteTracks,
  owner: "BLVKE",
  totalDuration: "14 min 37 sec",
  totalTracks: blvkeFavoriteTracks.length,
  isPrivate: false,
}

const blvkeDrillBeatsPlaylist: Playlist = {
  id: "blvke-drill-beats",
  title: "BLVKE Drill Beats",
  description: "Hard-hitting drill beats produced by BLVKE",
  cover: "/blvke-drill-beats.png",
  tracks: blvkeDrillTracks,
  owner: "BLVKE",
  totalDuration: "14 min 50 sec",
  totalTracks: blvkeDrillTracks.length,
  isPrivate: false,
}

const blvkeRnBBeatsPlaylist: Playlist = {
  id: "blvke-rnb-beats",
  title: "BLVKE RnB Beats",
  description: "Smooth and soulful RnB beats by BLVKE",
  cover: "/blvke-rnb-beats.png",
  tracks: blvkeRnBTracks,
  owner: "BLVKE",
  totalDuration: "17 min 35 sec",
  totalTracks: blvkeRnBTracks.length,
  isPrivate: false,
}

const blvkeBassTracksPlaylist: Playlist = {
  id: "blvke-bass-tracks",
  title: "BLVKE Bass Tracks",
  description: "Bass-heavy tracks and beats produced by BLVKE",
  cover: "/blvke-bass-tracks.png",
  tracks: blvkeBassTracks,
  owner: "BLVKE",
  totalDuration: "15 min 00 sec",
  totalTracks: blvkeBassTracks.length,
  isPrivate: false,
}

const blvkeTrapBeatsPlaylist: Playlist = {
  id: "blvke-trap-beats",
  title: "BLVKE Trap Beats",
  description: "Hard-hitting trap beats produced by BLVKE",
  cover: "/blvke-trap-beats.png",
  tracks: blvkeTrapTracks,
  owner: "BLVKE",
  totalDuration: "14 min 35 sec",
  totalTracks: blvkeTrapTracks.length,
  isPrivate: false,
}

// Sample data
const sampleTracks: Track[] = [
  {
    id: "track1",
    title: "Norf Norf",
    artist: "Vince Staples",
    album: "Summertime '06",
    duration: "3:03",
    cover: "/abstract-geometric-album.png",
    audioSrc: "https://example.com/track1.mp3",
    date: "Jun 7, 2022",
  },
  {
    id: "track2",
    title: "vent",
    artist: "Baby Keem",
    album: "The Melodic Blue",
    duration: "2:17",
    cover: "/abstract-geometric-album.png",
    audioSrc: "https://example.com/track2.mp3",
    date: "Jun 7, 2022",
  },
  {
    id: "track3",
    title: "Who Dat Boy (feat. A$AP Rocky)",
    artist: "Tyler, The Creator, A$AP Rocky",
    album: "Flower Boy",
    duration: "3:25",
    cover: "/placeholder.svg?key=7g88d",
    audioSrc: "https://example.com/track3.mp3",
    date: "Jun 7, 2022",
  },
  {
    id: "track4",
    title: "Black Skinhead",
    artist: "Kanye West",
    album: "Yeezus",
    duration: "3:08",
    cover: "/abstract-geometric-sound.png",
    audioSrc: "https://example.com/track4.mp3",
    date: "Jun 7, 2022",
  },
  {
    id: "track5",
    title: "NEW MAGIC WAND",
    artist: "Tyler, The Creator",
    album: "IGOR",
    duration: "3:15",
    cover: "/abstract-soundscape.png",
    audioSrc: "https://example.com/track5.mp3",
    date: "Jun 7, 2022",
  },
]

const samplePlaylists: Playlist[] = [
  {
    id: "lockjaw",
    title: "LockJaw",
    description: "My favorite tracks for intense focus sessions",
    cover: "/sonic-waves.png",
    tracks: sampleTracks,
    owner: "Blake Danielson",
    totalDuration: "4 hr 15 min",
    totalTracks: 89,
  },
  {
    id: "liked-songs",
    title: "Liked Songs",
    description: "Songs you've liked",
    cover: "/rhythmic-heart.png",
    tracks: sampleTracks.slice(0, 3),
    owner: "Blake Danielson",
    totalDuration: "2 hr 30 min",
    totalTracks: 368,
  },
  {
    id: "your-episodes",
    title: "Your Episodes",
    description: "Saved & downloaded episodes",
    cover: "/studio-microphone-setup.png",
    tracks: [],
    owner: "Blake Danielson",
    totalDuration: "0 hr 0 min",
    totalTracks: 0,
  },
  {
    id: "lethal",
    title: "LETHAL",
    description: "Upcoming album • Rico Nasty",
    cover: "/rico-nasty-album-art.png",
    tracks: sampleTracks.slice(1, 4),
    owner: "Rico Nasty",
    totalDuration: "1 hr 45 min",
    totalTracks: 24,
  },
  {
    id: "sunshine",
    title: "13 Months of Sunshine",
    description: "Upcoming album • Aminé",
    cover: "/colorful-anime-album-art.png",
    tracks: sampleTracks.slice(2, 5),
    owner: "Aminé",
    totalDuration: "3 hr 20 min",
    totalTracks: 42,
  },
]

// Daily mixes
const dailyMixes = [
  {
    id: "daily-mix-1",
    title: "Daily Mix 1",
    description: "The Alchemist, Earl Sweatshirt, Freddie Gibbs and more",
    cover: "/shadowed-rhymes.png",
    tracks: sampleTracks,
    owner: "Spotify",
    totalDuration: "3 hr 15 min",
    totalTracks: 50,
  },
  {
    id: "daily-mix-2",
    title: "Daily Mix 2",
    description: "GRIZ, TheFatRat, Fort Minor and more",
    cover: "/focused-producer.png",
    tracks: sampleTracks,
    owner: "Spotify",
    totalDuration: "2 hr 45 min",
    totalTracks: 45,
  },
  {
    id: "daily-mix-3",
    title: "Daily Mix 3",
    description: "Skrillex, Knock2, Eliminate and more",
    cover: "/vibrant-edm-stage.png",
    tracks: sampleTracks,
    owner: "Spotify",
    totalDuration: "3 hr 30 min",
    totalTracks: 55,
  },
  {
    id: "daily-mix-4",
    title: "Daily Mix 4",
    description: "blink-182, Paramore, American Hi-Fi and more",
    cover: "/energetic-punk-show.png",
    tracks: sampleTracks,
    owner: "Spotify",
    totalDuration: "2 hr 50 min",
    totalTracks: 48,
  },
  {
    id: "daily-mix-5",
    title: "Daily Mix 5",
    description: "ODESZA, Flume, Imprinter and more",
    cover: "/ethereal-soundscape.png",
    tracks: sampleTracks,
    owner: "Spotify",
    totalDuration: "3 hr 10 min",
    totalTracks: 52,
  },
  {
    id: "daily-mix-6",
    title: "Daily Mix 6",
    description: "JID, Smino, Gorillaz and more",
    cover: "/urban-beats-sanctuary.png",
    tracks: sampleTracks,
    owner: "Spotify",
    totalDuration: "2 hr 55 min",
    totalTracks: 47,
  },
]

// Other radio stations
const otherRadioStations = [
  {
    id: "mac-miller",
    title: "Mac Miller",
    description: "Mac Miller's greatest hits and similar artists",
    cover: "/thoughtful-musician.png",
    tracks: sampleTracks,
    owner: "Spotify",
    totalDuration: "∞",
    totalTracks: 100,
  },
  {
    id: "skrillex-radio",
    title: "F*CK U SKRILLEX YOU THINK UR ANDY WARHOL BUT UR NOT!! <3",
    description: "Skrillex, Flume, and other electronic artists",
    cover: "/electronic-music-stage.png",
    tracks: sampleTracks,
    owner: "Spotify",
    totalDuration: "∞",
    totalTracks: 100,
  },
  {
    id: "100-gecs-radio",
    title: "100 gecs Radio",
    description: "With 100 gecs, A.G. Cook, SOPHIE and more",
    cover: "/gec-city.png",
    tracks: sampleTracks,
    owner: "Spotify",
    totalDuration: "∞",
    totalTracks: 100,
  },
]

// Combine all BLVKE playlists
const blvkePlaylists = [
  blvkeFavoriteBeatsPlaylist,
  blvkeDrillBeatsPlaylist,
  blvkeRnBBeatsPlaylist,
  blvkeBassTracksPlaylist,
  blvkeTrapBeatsPlaylist,
]

// Add all playlists together
const allPlaylists = [...blvkePlaylists, ...samplePlaylists, ...dailyMixes, ...otherRadioStations]

export function SpotifyProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(70)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [queue, setQueue] = useState<Track[]>([])
  const [isShuffled, setIsShuffled] = useState(false)
  const [repeatMode, setRepeatMode] = useState<"off" | "all" | "one">("off")
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null)
  const [playlists, setPlaylists] = useState<Playlist[]>(allPlaylists)

  // Simulate audio playback
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isPlaying && currentTrack) {
      // Convert duration string to seconds
      const durationParts = currentTrack.duration.split(":")
      const durationInSeconds = Number.parseInt(durationParts[0]) * 60 + Number.parseInt(durationParts[1])
      setDuration(durationInSeconds)

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= durationInSeconds) {
            nextTrack()
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, currentTrack])

  const playTrack = (track: Track, playlist?: Playlist) => {
    setCurrentTrack(track)
    setIsPlaying(true)
    setProgress(0)

    if (playlist) {
      setCurrentPlaylist(playlist)
      // Set up queue based on playlist
      const trackIndex = playlist.tracks.findIndex((t) => t.id === track.id)
      if (trackIndex !== -1) {
        const nextTracks = playlist.tracks.slice(trackIndex + 1)
        setQueue(nextTracks)
      }
    }
  }

  const pauseTrack = () => {
    setIsPlaying(false)
  }

  const resumeTrack = () => {
    setIsPlaying(true)
  }

  const nextTrack = () => {
    if (queue.length > 0) {
      const nextTrack = queue[0]
      const newQueue = queue.slice(1)
      setCurrentTrack(nextTrack)
      setQueue(newQueue)
      setProgress(0)
    } else if (currentPlaylist && currentTrack) {
      // Loop back to the beginning of the playlist if repeat all is on
      if (repeatMode === "all") {
        const currentIndex = currentPlaylist.tracks.findIndex((t) => t.id === currentTrack.id)
        if (currentIndex !== -1 && currentIndex === currentPlaylist.tracks.length - 1) {
          playTrack(currentPlaylist.tracks[0], currentPlaylist)
        }
      } else if (repeatMode === "one") {
        // Just restart the current track
        setProgress(0)
      }
    }
  }

  const prevTrack = () => {
    if (progress > 3) {
      // If more than 3 seconds into the song, just restart it
      setProgress(0)
    } else if (currentPlaylist && currentTrack) {
      const currentIndex = currentPlaylist.tracks.findIndex((t) => t.id === currentTrack.id)
      if (currentIndex > 0) {
        playTrack(currentPlaylist.tracks[currentIndex - 1], currentPlaylist)
      }
    }
  }

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled)

    if (currentPlaylist && currentTrack) {
      const currentIndex = currentPlaylist.tracks.findIndex((t) => t.id === currentTrack.id)
      if (currentIndex !== -1) {
        let newQueue = [...currentPlaylist.tracks.slice(currentIndex + 1)]

        if (!isShuffled) {
          // Shuffle the queue
          newQueue = newQueue.sort(() => Math.random() - 0.5)
        }

        setQueue(newQueue)
      }
    }
  }

  const toggleRepeat = () => {
    if (repeatMode === "off") setRepeatMode("all")
    else if (repeatMode === "all") setRepeatMode("one")
    else setRepeatMode("off")
  }

  const value = {
    currentTrack,
    isPlaying,
    volume,
    progress,
    duration,
    playlists,
    currentPlaylist,
    queue,
    playTrack,
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
    setCurrentPlaylist,
  }

  return <SpotifyContext.Provider value={value}>{children}</SpotifyContext.Provider>
}

export function useSpotify() {
  const context = useContext(SpotifyContext)
  if (context === undefined) {
    throw new Error("useSpotify must be used within a SpotifyProvider")
  }
  return context
}
