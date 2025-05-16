/**
 * Utility function to get the correct image path based on environment
 * This helps resolve image paths correctly when deployed to GitHub Pages
 */

export function getImagePath(src: string): string {
  // If it's an external URL (starts with http or https), return it as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // Remove any leading slash
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  
  // In development, just return the path
  return cleanSrc;
}
