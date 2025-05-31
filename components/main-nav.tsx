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
  { href: "/articles", label: "Articles" },
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" },
]

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-medium text-white">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/80 text-white">
            <div className="absolute inset-0 animate-pulse rounded-full bg-purple-500 opacity-60 blur-sm"></div>
            <span className="relative z-10">BD</span>
          </div>
          <span className="hidden sm:inline-block">Blake Danielson</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-5">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
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
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-zinc-800 bg-black">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-lg font-medium text-white">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/80 text-white">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-purple-500 opacity-60 blur-sm"></div>
                    <span className="relative z-10">BD</span>
                  </div>
                  <span className="hidden sm:inline-block">Blake Danielson</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                  <X className="h-5 w-5 text-white" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="mt-8 flex flex-col gap-6">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-xl font-medium transition-colors hover:text-purple-400 ${
                      pathname === route.href ? "text-purple-500" : "text-zinc-400"
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
