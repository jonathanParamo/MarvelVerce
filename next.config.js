/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.shutterstock.com',
      'mecaluxes.cdnwm.com',
      'i.annihil.us',
      'areajugones.sport.es'
    ]
  },
  experimental: {
    appDir: true
  },

  reactStrictMode: true
}

module.exports = nextConfig
