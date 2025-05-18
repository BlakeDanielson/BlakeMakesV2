"use client"

import { ChevronLeft, ChevronRight, Search, Bell } from "lucide-react"
import Image from "next/image"

interface TopbarProps {
  showSearch?: boolean
}

export function Topbar({ showSearch = false }: TopbarProps) {
  return (
    <div className="spotify-topbar">
      <div className="flex items-center gap-4">
        <div className="spotify-nav-buttons">
          <button className="spotify-nav-button">
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>
          <button className="spotify-nav-button">
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>

        {showSearch && (
          <div className="spotify-search-container">
            <Search className="spotify-search-icon" />
            <input type="text" placeholder="What do you want to play?" className="spotify-search" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-black hover:scale-105">
          Upgrade
        </button>
        <button className="rounded-full bg-black p-1.5">
          <Bell className="h-4 w-4 text-white" />
        </button>
        <div className="spotify-user-menu">
          <div className="spotify-user-avatar">
            <Image src="/blake.jpg" alt="User avatar" width={28} height={28} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}
