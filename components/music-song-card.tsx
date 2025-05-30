"use client"

import React from 'react';
import Image from 'next/image';
import { Play, Music2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LocalMusicTrack } from '@/lib/music-utils';

interface MusicSongCardProps {
  track: LocalMusicTrack;
  isCurrentTrack: boolean;
  isPlaying: boolean;
  onTrackSelect: (track: LocalMusicTrack) => void;
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

export function MusicSongCard({ track, isCurrentTrack, isPlaying, onTrackSelect }: MusicSongCardProps) {
  const genre = getGenreFromTrack(track);
  const coverImage = getCoverImageForGenre(genre);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className={`relative overflow-hidden border transition-all duration-300 cursor-pointer group ${
          isCurrentTrack 
            ? 'border-purple-500/50 bg-gradient-to-br from-purple-950/30 to-black shadow-lg shadow-purple-500/20' 
            : 'border-zinc-800/50 bg-gradient-to-br from-zinc-900/50 to-black hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10'
        }`}
        onClick={() => onTrackSelect(track)}
      >
        {/* Cover Art */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={coverImage}
            alt={track.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Play overlay */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isCurrentTrack && isPlaying 
              ? 'bg-black/40 opacity-100' 
              : 'bg-black/60 opacity-0 group-hover:opacity-100'
          }`}>
            {isCurrentTrack && isPlaying ? (
              <div className="flex space-x-1">
                <span className="h-8 w-1.5 animate-pulse rounded-full bg-purple-500"></span>
                <span
                  className="h-8 w-1.5 animate-pulse rounded-full bg-purple-500"
                  style={{ animationDelay: "0.2s" }}
                ></span>
                <span
                  className="h-8 w-1.5 animate-pulse rounded-full bg-purple-500"
                  style={{ animationDelay: "0.4s" }}
                ></span>
              </div>
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
                <Play className="h-6 w-6 text-white ml-0.5" />
              </div>
            )}
          </div>

          {/* Genre badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-black/60 text-white text-xs backdrop-blur-sm">
              {genre}
            </Badge>
          </div>
        </div>

        {/* Track Info */}
        <div className="p-4">
          <h3 className={`font-semibold text-white line-clamp-1 mb-1 ${
            isCurrentTrack ? 'text-purple-300' : 'text-white'
          }`}>
            {track.title}
          </h3>
          
          <p className="text-sm text-zinc-400 mb-2">BLVKE • 2024</p>
          
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              {track.bpm && (
                <span>{track.bpm} BPM</span>
              )}
              {track.key && (
                <span>• {track.key}</span>
              )}
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{track.duration || "0:00"}</span>
            </div>
          </div>
        </div>

        {/* Current track indicator */}
        {isCurrentTrack && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
        )}
      </Card>
    </motion.div>
  );
} 