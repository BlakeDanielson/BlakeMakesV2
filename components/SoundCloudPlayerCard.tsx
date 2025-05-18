"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; // If you want to display cover art from your track data

// Define TypeScript interfaces (can be moved to a central types file if used elsewhere)
interface MusicTrack {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  soundcloudUrl?: string;
  duration: string;
  genre: string;
  year: string;
}

interface SoundCloudPlayerCardProps {
  track: MusicTrack;
  isActive: boolean;
  onPlayerClick: (trackId: string) => void;
  onPlayerReady: (trackId: string, playerInstance: any) => void;
}

// Make SC globally available for type checking, assuming it's loaded by next/script
declare global {
  interface Window {
    SC?: any;
  }
}
const SC = typeof window !== 'undefined' ? window.SC : undefined;

export function SoundCloudPlayerCard({
  track,
  isActive,
  onPlayerClick,
  onPlayerReady,
}: SoundCloudPlayerCardProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current || !track.soundcloudUrl || !SC?.Widget) {
      // console.log("SoundCloudPlayerCard: iframeRef or track.soundcloudUrl or SC.Widget not available for track:", track.title);
      return;
    }

    const playerInstance = SC.Widget(iframeRef.current);

    playerInstance.bind(SC.Widget.Events.READY, () => {
      // console.log("SoundCloudPlayerCard: Player ready for track:", track.title);
      onPlayerReady(track.id, playerInstance);
    });
    
    // Optional: You can bind to other events like PLAY_PROGRESS, PAUSE, FINISH if needed
    // playerInstance.bind(SC.Widget.Events.PLAY_PROGRESS, (data: any) => {
    //   console.log(\`Play progress for ${track.title}: \`, data.currentPosition);
    // });

    return () => {
      // Clean up: It's good practice to try and unbind, though SC might handle it.
      // playerInstance.unbind(SC.Widget.Events.READY);
      // playerInstance.unbind(SC.Widget.Events.PLAY_PROGRESS);
      // If playerInstance has a destroy method, call it here, but SC.Widget typically doesn't expose one directly.
    };
  }, [track.id, track.soundcloudUrl, onPlayerReady]); // Dependencies for useEffect

  if (!track.soundcloudUrl || track.soundcloudUrl === "YOUR_SOUNDCLOUD_URL_HERE") {
    return (
      <div 
        className={`my-4 p-4 border border-zinc-700 rounded-lg bg-zinc-800/50 text-center ${isActive ? 'active-soundcloud-player' : 'border-zinc-700/50'}`}
        onClick={() => onPlayerClick(track.id)}
      >
        <p className="text-sm text-yellow-400">
          SoundCloud player for "{track.title}" is currently unavailable (URL missing or invalid).
        </p>
        <p className="text-xs text-zinc-500 mt-1">{track.description}</p>
      </div>
    );
  }

  const soundcloudEmbedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    track.soundcloudUrl
  )}&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false&color=%238B5CF6&single_active=false`;
  // `single_active=false` is important here because we are managing the "single active" logic ourselves.
  // `visual=false` for a more compact player. Set to true for the larger visual player.

  const containerClasses = `my-4 p-0.5 rounded-lg transition-all duration-300 ease-in-out ${isActive ? 'active-soundcloud-player' : 'border border-transparent'}`;

  return (
    <div 
      className={containerClasses} 
      onClick={() => onPlayerClick(track.id)} // This sets the visual active state
    >
      {/* Optional: Display track info above the player if desired */}
      {/* <div className="p-3 bg-zinc-800/30 rounded-t-md">
        <h4 className="text-md font-semibold text-white">{track.title}</h4>
        <p className="text-xs text-zinc-400">{track.genre} • {track.year}</p>
      </div> */}
      <iframe
        ref={iframeRef}
        id={`soundcloud-player-${track.id}`}
        width="100%"
        height={track.soundcloudUrl.includes("visual=true") ? "450" : "166"} // Adjust height based on visual param
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={soundcloudEmbedUrl}
        style={{ border: "none", overflow: "hidden", borderRadius: "6px" }}
        title={`SoundCloud Player - ${track.title}`}
      ></iframe>
    </div>
  );
}

// You might want to add CSS for '.active-soundcloud-player' in your global styles
// For example:
// .active-soundcloud-player {
//   box-shadow: 0 0 15px 2px rgba(139, 92, 246, 0.7); /* purple-500 glow */
//   border-color: rgba(139, 92, 246, 0.5);
// } 