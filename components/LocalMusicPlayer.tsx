"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Download, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { LocalMusicTrack, formatDuration } from '@/lib/music-utils';

interface LocalMusicPlayerProps {
  track: LocalMusicTrack;
  isActive: boolean;
  onPlayerClick: (trackId: string) => void;
  onPlay: (trackId: string) => void;
  onPause: () => void;
}

export function LocalMusicPlayer({
  track,
  isActive,
  onPlayerClick,
  onPlay,
  onPause,
}: LocalMusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <Card 
      className={`overflow-hidden border transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'border-purple-500/50 bg-purple-950/20 shadow-lg shadow-purple-500/10' 
          : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
      }`}
      onClick={() => onPlayerClick(track.id)}
    >
      <CardContent className="p-6">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onError={() => setError('Failed to load audio')}
          preload="metadata"
        />
        
        {/* Track Info */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white truncate">
              {track.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {track.genre && (
                <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                  {track.genre}
                </Badge>
              )}
              {track.bpm && (
                <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                  {track.bpm} BPM
                </Badge>
              )}
              {track.key && (
                <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                  {track.key}
                </Badge>
              )}
              {track.isUntagged && (
                <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                  Untagged
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 ml-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                handleDownload();
              }}
              className="text-zinc-400 hover:text-white"
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-4 p-3 bg-red-950/50 border border-red-500/50 rounded-md">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Controls */}
        <div className="space-y-4">
          {/* Progress Bar */}
          <div className="space-y-2">
            <Slider
              value={[progress]}
              onValueChange={handleSeek}
              max={100}
              step={0.1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-zinc-400">
              <span>{formatDuration(currentTime)}</span>
              <span>{duration > 0 ? formatDuration(duration) : '--:--'}</span>
            </div>
          </div>

          {/* Play Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  isPlaying ? handlePause() : handlePlay();
                }}
                disabled={isLoading}
                className="h-12 w-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 ml-0.5" />
                )}
              </Button>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="text-zinc-400 hover:text-white"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Slider
                  value={[isMuted ? 0 : volume * 100]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="w-20"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-zinc-400">
              <Music2 className="h-4 w-4" />
              <span className="text-xs">{track.filename.split('.').pop()?.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 