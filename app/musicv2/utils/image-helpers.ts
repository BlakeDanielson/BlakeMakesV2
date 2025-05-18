/**
 * Ensures a valid image source is provided, falling back to a default if needed
 * @param src The primary image source
 * @param fallbackSrc A fallback image source if the primary is empty
 * @returns A valid image source or null
 */
export function ensureValidImageSrc(src: string | null | undefined, fallbackSrc: string): string | null {
  if (!src || src === "") {
    return fallbackSrc || null
  }
  return src
}

/**
 * Generates a placeholder image URL with the specified dimensions and query
 * @param width The width of the placeholder image
 * @param height The height of the placeholder image
 * @param query A description of the image content
 * @returns A placeholder image URL
 */
export function getPlaceholderImage(width: number, height: number, query: string): string {
  return `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(query)}`
}
