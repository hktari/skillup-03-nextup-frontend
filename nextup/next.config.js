/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    unoptimized: true,
    domains: ['loremflickr.com']
  }
}

module.exports = nextConfig
