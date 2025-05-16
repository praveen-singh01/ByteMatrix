/**
 * Custom image loader for Next.js
 * This helps resolve image paths correctly when deployed to GitHub Pages
 */

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  // Check if we're in production mode
  const isProd = process.env.NODE_ENV === 'production';
  
  // If it's an external URL (starts with http or https), return it as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images in production, prepend the basePath
  if (isProd) {
    // Remove any leading slash from the src
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    return `/ByteMatrix/${cleanSrc}`;
  }
  
  // In development, just return the path as is
  return src;
}
