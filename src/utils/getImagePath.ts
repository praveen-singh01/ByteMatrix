/**
 * Utility function to get the correct image path based on environment
 * This helps resolve image paths correctly when deployed to GitHub Pages
 */

export function getImagePath(src: string): string {
  // If it's an external URL (starts with http or https), return it as is
  if (src.startsWith('http')) {
    return src;
  }

  // For Next.js, we need to ensure the path starts with a slash
  // If it doesn't have a leading slash, add one
  if (!src.startsWith('/')) {
    return `/${src}`;
  }

  // If it already has a leading slash, return as is
  return src;
}
