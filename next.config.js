/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
