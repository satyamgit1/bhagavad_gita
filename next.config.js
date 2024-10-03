// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     MONGODB_URI: process.env.MONGODB_URI,
//   },
//   images: {
//     domains: ['img.icons8.com'],
//   },
// };

// module.exports = nextConfig;


// next.config.js

const withPWA = require('next-pwa')({
  dest: 'public', // This will store the service worker and other PWA assets
  disable: process.env.NODE_ENV === 'development', // Disable PWA during development
});

const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  images: {
    domains: ['img.icons8.com'], // Keep your existing config here
  },
};

module.exports = withPWA(nextConfig);
