/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/ByteMatrix' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ByteMatrix/' : '',
  images: {
    unoptimized: true,  // Required for static export
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
    ],
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
};

module.exports = nextConfig;
