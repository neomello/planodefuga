/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['firebasestorage.googleapis.com'],
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 