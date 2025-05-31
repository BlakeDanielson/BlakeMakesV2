"use client"

import { useEffect } from 'react'

interface LCPEntry extends PerformanceEntry {
  startTime: number
}

interface FIDEntry extends PerformanceEntry {
  processingStart: number
  startTime: number
}

interface CLSEntry extends PerformanceEntry {
  hadRecentInput: boolean
  value: number
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and on client side
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics for mobile optimization
        if (entry.entryType === 'largest-contentful-paint') {
          const lcpEntry = entry as LCPEntry
          console.log('LCP:', lcpEntry.startTime)
        }
        
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as FIDEntry
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
        }
        
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as CLSEntry
          if (!clsEntry.hadRecentInput) {
            console.log('CLS:', clsEntry.value)
          }
        }
      }
    })

    // Observe Core Web Vitals
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.log('Performance monitoring not fully supported')
    }

    // Mobile-specific performance checks
    const checkMobilePerformance = () => {
      if (window.innerWidth <= 768) {
        // Check for mobile-specific issues
        const images = document.querySelectorAll('img')
        images.forEach((img) => {
          if (!img.loading) {
            console.warn('Image without lazy loading detected:', img.src)
          }
        })
        
        // Check for touch targets
        const buttons = document.querySelectorAll('button, a')
        buttons.forEach((button) => {
          const rect = button.getBoundingClientRect()
          if (rect.width < 44 || rect.height < 44) {
            console.warn('Touch target too small:', button)
          }
        })
      }
    }

    // Run mobile performance check after page load
    setTimeout(checkMobilePerformance, 2000)

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
} 