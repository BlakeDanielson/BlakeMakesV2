"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Updated routes structure with Music as top-level item
const routes = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/consulting", label: "Consulting" },
  { href: "/articles", label: "Articles" },
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" },
]

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md safe-top">
      <div className="container flex h-16 items-center justify-between px-4 safe-left safe-right">
        <Link href="/" className="flex items-center gap-2 text-lg font-medium text-white touch-target">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/80 text-white">
            <div className="absolute inset-0 animate-pulse rounded-full bg-purple-500 opacity-60 blur-sm"></div>
            <span className="relative z-10">BD</span>
          </div>
          <span className="hidden sm:inline-block">Blake Danielson</span>
        </Link>

        <div className="flex items-center gap-4 h-full">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-5 md:items-center h-full">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-purple-400 touch-target flex items-center h-full ${
                  pathname === route.href ? "text-purple-500" : "text-zinc-400"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden touch-target touch-manipulation">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] safe-top safe-bottom safe-right">
              <nav className="flex flex-col gap-6 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-xl font-medium transition-colors touch-target touch-manipulation ${
                      pathname === route.href ? "text-purple-500" : "text-zinc-400 hover:text-purple-400"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
