"use client"

import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Download, 
  Music2,
  Heart,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { LocalMusicTrack, formatDuration } from '@/lib/music-utils';

interface BeautifulMusicPlayerProps {
  track: LocalMusicTrack;
  isActive: boolean;
  onPlayerClick: (trackId: string) => void;
  onPlay: (trackId: string) => void;
  onPause: () => void;
}

export function BeautifulMusicPlayer({
  track,
  isActive,
  onPlayerClick,
  onPlay,
  onPause,
}: BeautifulMusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  // Calculate animation duration based on BPM
  const getAnimationDuration = () => {
    if (track.bpm) {
      const bpm = parseInt(track.bpm);
      // Convert BPM to seconds per beat (60 seconds / BPM)
      const secondsPerBeat = 60 / bpm;
      return `${secondsPerBeat}s`;
    }
    return '1s'; // Default fallback
  };

  // Update audio element when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = track.filepath;
      audioRef.current.load();
    }
  }, [track.filepath]);

  // Handle play/pause when isActive changes from parent
  useEffect(() => {
    if (!isActive && isPlaying) {
      handlePause();
    }
  }, [isActive, isPlaying]);

  const handlePlay = async () => {
    if (!audioRef.current) return;
    
    try {
      setIsLoading(true);
      setError(null);
      onPlay(track.id);
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error('Error playing audio:', err);
      setError('Failed to play audio');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      onPause();
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      const newTime = (value[0] / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0] / 100;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = track.filepath;
    link.download = track.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Generate a gradient background based on track genre
  const getGradientForGenre = (genre: string) => {
    const gradients = {
      'Hip-Hop': 'from-orange-500/20 via-red-500/20 to-pink-500/20',
      'Trap': 'from-purple-500/20 via-violet-500/20 to-indigo-500/20',
      'Chill': 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
      'Electronic': 'from-green-500/20 via-emerald-500/20 to-cyan-500/20',
      'Dark Trap': 'from-gray-500/20 via-slate-500/20 to-zinc-500/20',
      'Drill': 'from-red-500/20 via-orange-500/20 to-yellow-500/20',
    };
    return gradients[genre as keyof typeof gradients] || 'from-purple-500/20 via-pink-500/20 to-purple-500/20';
  };

  return (
    <Card 
      className={`relative overflow-hidden border transition-all duration-500 cursor-pointer group ${
        isActive 
          ? 'border-purple-500/50 bg-gradient-to-br from-purple-950/30 to-black shadow-2xl shadow-purple-500/20 scale-[1.02]' 
          : 'border-zinc-800/50 bg-gradient-to-br from-zinc-900/50 to-black hover:border-zinc-700/50 hover:shadow-xl hover:shadow-purple-500/5'
      }`}
      onClick={() => onPlayerClick(track.id)}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientForGenre(track.genre || 'Hip-Hop')} opacity-30 transition-opacity duration-500`} />
      
      {/* Animated progress background */}
      <div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />

      <div className="relative p-6">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onError={() => setError('Failed to load audio')}
          preload="metadata"
        />
        
        {/* Header with track info and actions */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <div 
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${getGradientForGenre(track.genre || 'Hip-Hop')} flex items-center justify-center transition-transform duration-300 ${isPlaying ? 'scale-110' : 'group-hover:scale-105'}`}
                  style={isPlaying ? {
                    animation: `pulse ${getAnimationDuration()} ease-in-out infinite`
                  } : {}}
                >
                  <Music2 className="h-6 w-6 text-white" />
                </div>
                {isPlaying && (
                  <div 
                    className="absolute inset-0 rounded-full border-2 border-purple-500"
                    style={{
                      animation: `ping ${getAnimationDuration()} cubic-bezier(0, 0, 0.2, 1) infinite`
                    }}
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white truncate mb-1 group-hover:text-purple-300 transition-colors">
                  {track.title}
                </h3>
                <p className="text-sm text-zinc-400 truncate">
                  BLVKE • {track.year}
                </p>
              </div>
            </div>
            
            {/* Metadata badges */}
            <div className="flex flex-wrap gap-2">
              {track.genre && (
                <Badge 
                  variant="secondary" 
                  className="bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 backdrop-blur-sm"
                >
                  {track.genre}
                </Badge>
              )}
              {track.bpm && (
                <Badge 
                  variant="secondary" 
                  className="bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 backdrop-blur-sm"
                >
                  {track.bpm} BPM
                </Badge>
              )}
              {track.key && (
                <Badge 
                  variant="secondary" 
                  className="bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 backdrop-blur-sm"
                >
                  {track.key}
                </Badge>
              )}
              {track.isUntagged && (
                <Badge 
                  variant="outline" 
                  className="border-yellow-500/50 text-yellow-400 bg-yellow-500/10 backdrop-blur-sm"
                >
                  Untagged
                </Badge>
              )}
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center gap-2 ml-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite();
              }}
              className={`text-zinc-400 hover:text-white transition-all duration-300 ${isFavorite ? 'text-red-500 hover:text-red-400' : ''}`}
            >
              <Heart className={`h-4 w-4 transition-transform duration-300 ${isFavorite ? 'fill-red-500 scale-110' : 'hover:scale-110'}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                handleDownload();
              }}
              className="text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-4 p-3 bg-red-950/50 border border-red-500/50 rounded-lg backdrop-blur-sm">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Progress section */}
        <div className="space-y-4">
          {/* Progress bar */}
          <div className="space-y-3">
            <Slider
              value={[progress]}
              onValueChange={handleSeek}
              max={100}
              step={0.1}
              className="w-full [&_[role=slider]]:bg-purple-500 [&_[role=slider]]:border-purple-400 [&_.bg-primary]:bg-gradient-to-r [&_.bg-primary]:from-purple-500 [&_.bg-primary]:to-pink-500"
            />
            <div className="flex justify-between text-xs text-zinc-400">
              <span className="font-mono">{formatDuration(currentTime)}</span>
              <span className="font-mono">{duration > 0 ? formatDuration(duration) : '--:--'}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            {/* Play button */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  isPlaying ? handlePause() : handlePlay();
                }}
                disabled={isLoading}
                className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6 ml-0.5" />
                )}
              </Button>
              
              {/* Volume controls */}
              <div 
                className="flex items-center gap-2 relative"
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
                
                {/* Volume slider - appears on hover */}
                <div className={`absolute left-12 top-1/2 -translate-y-1/2 transition-all duration-300 ${showVolumeSlider ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                  <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-3 shadow-xl">
                    <Slider
                      value={[isMuted ? 0 : volume * 100]}
                      onValueChange={handleVolumeChange}
                      max={100}
                      step={1}
                      className="w-20 [&_[role=slider]]:bg-purple-500 [&_[role=slider]]:border-purple-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* File info */}
            <div className="flex items-center gap-2 text-zinc-400">
              <div className="text-right">
                <div className="text-xs font-mono uppercase tracking-wider">
                  {track.filename.split('.').pop()}
                </div>
                <div className="text-xs opacity-60">
                  {Math.round((track.filename.length * 1024) / 1024)}KB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
} 