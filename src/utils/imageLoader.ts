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
    // For external URLs, we don't need to modify them for static export
    // Just add width and quality parameters if the URL supports them
    try {
      const url = new URL(src);

      // Only add parameters for URLs that might support them (like picsum.photos)
      if (url.hostname === 'picsum.photos') {
        url.searchParams.set('w', width.toString());

        if (quality) {
          url.searchParams.set('q', quality.toString());
        }
      }

      return url.toString();
    } catch (e) {
      // If URL parsing fails, just return the original URL
      return src;
    }
  }

  // For local images in production with static export
  if (isProd) {
    // Remove any leading slash from the src
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;

    // For GitHub Pages deployment
    return `/ByteMatrix/${cleanSrc}`;
  }

  // In development, just return the path as is
  return src;
}
