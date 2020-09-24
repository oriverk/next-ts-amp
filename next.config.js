const withPlugins = require('next-compose-plugins')

const optimizedImages = require('next-optimized-images')
const { resolve } = require('path')

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@public/assets'] = resolve(__dirname, 'public/assets')
    return config
  },
}

const nextOptimizedImagesConfig = {
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'png', 'webp'],
  removeOriginalExtension: true,
  optimizeImages: process.env.NODE_ENV !== 'development',
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 85,
  },
  optipng: {
    optimizationLevel: 3,
  },
  responsive: {
    adapter: require('responsive-loader/sharp'),
    sizes: [640, 960, 1200, 1800],
    disable: process.env.NODE_ENV === 'development'
  },
  webp: {
    preset: 'default',
    quality: 85,
  },
}

module.exports = withPlugins(
  [
    [
      optimizedImages, nextOptimizedImagesConfig
    ],
  ],
  nextConfig
)