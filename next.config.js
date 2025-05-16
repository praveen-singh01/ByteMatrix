/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // For Strapi integration, we need to disable static exports
  // to allow API routes and server components to work properly
  output: process.env.STATIC_EXPORT === 'true' ? 'export' : undefined,

  // Only use basePath and assetPrefix in static export mode
  ...(process.env.STATIC_EXPORT === 'true' ? {
    basePath: '/ByteMatrix',
    assetPrefix: '/ByteMatrix/',
    images: {
      unoptimized: true,  // Required for static export
      loader: 'custom',
      loaderFile: './src/utils/imageLoader.ts',
    },
  } : {}),

  // Common image configuration for all environments
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
      // Allow Strapi media from localhost in development
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      // For production Strapi deployment (update with your actual domain)
      {
        protocol: 'https',
        hostname: '**.onrender.com',
      },
      {
        protocol: 'https',
        hostname: '**.railway.app',
      },
    ],
  },

  // Ensure trailing slashes are handled correctly
  trailingSlash: true,

  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

module.exports = nextConfig;
