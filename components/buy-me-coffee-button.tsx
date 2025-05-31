"use client"

import { useEffect, useRef } from 'react'
import { Coffee } from 'lucide-react'

interface BuyMeCoffeeButtonProps {
  username?: string
  color?: string
  emoji?: string
  text?: string
  outlineColor?: string
  fontColor?: string
  coffeeColor?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function BuyMeCoffeeButton({
  username = "blvke",
  color = "#FFDD00",
  emoji = "☕",
  text = "Buy me a coffee",
  outlineColor = "#000000",
  fontColor = "#000000",
  coffeeColor = "#ffffff",
  className = "",
  size = "md"
}: BuyMeCoffeeButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (buttonRef.current) {
      // Create script element for Buy Me a Coffee button
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js'
      script.setAttribute('data-name', 'bmc-button')
      script.setAttribute('data-slug', username)
      script.setAttribute('data-color', color)
      script.setAttribute('data-emoji', emoji)
      script.setAttribute('data-font', 'Cookie')
      script.setAttribute('data-text', text)
      script.setAttribute('data-outline-color', outlineColor)
      script.setAttribute('data-font-color', fontColor)
      script.setAttribute('data-coffee-color', coffeeColor)

      // Clear any existing content and append script
      buttonRef.current.innerHTML = ''
      buttonRef.current.appendChild(script)
    }
  }, [username, color, emoji, text, outlineColor, fontColor, coffeeColor])

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  }

  return (
    <div 
      ref={buttonRef}
      className={`inline-block ${sizeClasses[size]} ${className}`}
    />
  )
}

// Alternative custom styled button that opens Buy Me a Coffee in new tab
export function CustomBuyMeCoffeeButton({
  username = "blvke",
  text = "Buy me a coffee",
  className = ""
}: {
  username?: string
  text?: string
  className?: string
}) {
  const handleClick = () => {
    window.open(`https://www.buymeacoffee.com/${username}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg transition-colors duration-200 ${className}`}
    >
      <Coffee className="h-5 w-5" />
      {text}
    </button>
  )
} 