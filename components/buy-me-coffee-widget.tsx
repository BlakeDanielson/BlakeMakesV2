"use client"

import { useEffect } from 'react'

interface BuyMeCoffeeWidgetProps {
  username?: string
  color?: string
  emoji?: string
  text?: string
  outlineColor?: string
  fontColor?: string
  coffeeColor?: string
}

export function BuyMeCoffeeWidget({
  username = "blvke",
  color = "#FFDD00",
  emoji = "☕",
  text = "Buy me a coffee",
  outlineColor = "#000000",
  fontColor = "#000000",
  coffeeColor = "#ffffff"
}: BuyMeCoffeeWidgetProps) {
  useEffect(() => {
    // Create script element for Buy Me a Coffee widget
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
    script.setAttribute('data-name', 'BMC-Widget')
    script.setAttribute('data-cfasync', 'false')
    script.setAttribute('data-id', username)
    script.setAttribute('data-description', 'Support me on Buy me a coffee!')
    script.setAttribute('data-message', 'Thanks for visiting! If you enjoy my work, consider buying me a coffee.')
    script.setAttribute('data-color', color)
    script.setAttribute('data-position', 'Right')
    script.setAttribute('data-x_margin', '18')
    script.setAttribute('data-y_margin', '18')

    // Append script to document head
    document.head.appendChild(script)

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[data-name="BMC-Widget"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
      
      // Also remove the widget div if it exists
      const widget = document.querySelector('#bmc-wbtn')
      if (widget) {
        widget.remove()
      }
    }
  }, [username, color])

  return null // This component doesn't render anything visible itself
} 