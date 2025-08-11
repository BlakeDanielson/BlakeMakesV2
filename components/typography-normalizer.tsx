"use client"

import { useEffect } from "react"

export function TypographyNormalizer() {
  useEffect(() => {
    const replaceInNode = (root: Node) => {
      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(node) {
            return node.nodeValue && node.nodeValue.includes("—")
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP
          },
        },
      )
      const textNodes: Text[] = []
      while (walker.nextNode()) {
        textNodes.push(walker.currentNode as Text)
      }
      for (const textNode of textNodes) {
        textNode.nodeValue = (textNode.nodeValue || "").replaceAll("—", "-")
      }
    }

    replaceInNode(document.body)

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData" && mutation.target.nodeType === Node.TEXT_NODE) {
          const t = mutation.target as Text
          if (t.nodeValue && t.nodeValue.includes("—")) {
            t.nodeValue = t.nodeValue.replaceAll("—", "-")
          }
        }
        for (const node of Array.from(mutation.addedNodes)) {
          if (node.nodeType === Node.TEXT_NODE) {
            const t = node as Text
            if (t.nodeValue && t.nodeValue.includes("—")) {
              t.nodeValue = t.nodeValue.replaceAll("—", "-")
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            replaceInNode(node)
          }
        }
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    return () => observer.disconnect()
  }, [])

  return null
}


