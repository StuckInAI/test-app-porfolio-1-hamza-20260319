/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add external image domains if needed
    formats: ['image/avif', 'image/webp'],
  },
  // Optional: Configure output if using static export
  // output: 'standalone',
}

module.exports = nextConfig
