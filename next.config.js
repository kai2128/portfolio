/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  images: {
    domains: ['user-images.githubusercontent.com', 'raw.githubusercontent.com', 'github.com'],
  },
}

module.exports = nextConfig
