/**
 * Utility function to get the correct image path based on environment
 * This helps resolve image paths correctly when deployed to GitHub Pages
 */

export function getImagePath(src: string): string {
  // If it's an external URL (starts with http or https), return it as is
  if (src.startsWith('http')) {
    return src;
  }

  // Check if we're in production mode
  const isProd = process.env.NODE_ENV === 'production';

  // For local images in production, prepend the basePath
  if (isProd) {
    // Remove any leading slash from the src
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    return `/ByteMatrix/${cleanSrc}`;
  }

  // In development, ensure the path starts with a slash
  if (!src.startsWith('/')) {
    return `/${src}`;
  }

  // If it already has a leading slash in development, return as is
  return src;
}
