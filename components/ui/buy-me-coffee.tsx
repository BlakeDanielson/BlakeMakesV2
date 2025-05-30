"use client"

import { useEffect } from "react"
import { Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BuyMeCoffeeProps {
  username: string
  message?: string
  description?: string
  color?: string
  position?: "left" | "right"
  xMargin?: number
  yMargin?: number
  className?: string
}

interface BuyMeCoffeeButtonProps {
  username: string
  text?: string
  className?: string
}

// Floating Widget Component
export function BuyMeCoffee({
  username,
  message = "Support me on Buy me a coffee!",
  description = "Support the developer!",
  color = "#5F7FFF",
  position = "right",
  xMargin = 18,
  yMargin = 18,
  className = ""
}: BuyMeCoffeeProps) {
  useEffect(() => {
    const script = document.createElement("script")
    const div = document.getElementById("supportByBMC")
    
    if (!div) return

    // Configure the official BMC widget
    script.setAttribute("data-name", "BMC-Widget")
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    script.setAttribute("data-id", username)
    script.setAttribute("data-description", description)
    script.setAttribute("data-message", message)
    script.setAttribute("data-color", color)
    script.setAttribute("data-position", position)
    script.setAttribute("data-x_margin", xMargin.toString())
    script.setAttribute("data-y_margin", yMargin.toString())
    script.async = true

    // Trigger DOMContentLoaded event for the widget
    script.onload = function () {
      const evt = document.createEvent("Event")
      evt.initEvent("DOMContentLoaded", false, false)
      window.dispatchEvent(evt)
    }

    document.head.appendChild(script)
    div.appendChild(script)

    // Critical cleanup to prevent memory leaks
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      if (div.contains(script)) {
        div.removeChild(script)
      }
    }
  }, [username, message, description, color, position, xMargin, yMargin])

  return <div id="supportByBMC" className={className}></div>
}

// Inline Button Component
export function BuyMeCoffeeButton({
  username,
  text = "Buy me a coffee ☕",
  className = ""
}: BuyMeCoffeeButtonProps) {
  const handleClick = () => {
    window.open(`https://www.buymeacoffee.com/${username}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <Button
      onClick={handleClick}
      className={`group bg-[#5F7FFF] hover:bg-[#4A6AFF] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}
      size="lg"
    >
      <Coffee className="h-5 w-5 mr-2 group-hover:animate-bounce" />
      <span className="font-medium">{text}</span>
    </Button>
  )
} 