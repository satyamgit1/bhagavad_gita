// next-sitemap.js
module.exports = {
    siteUrl: 'https://www.bhagavadgita.site/',
    generateRobotsTxt: true, // (optional)
    // Optional custom configuration for the sitemap
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*'], // Add any paths you want to exclude
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://yourwebsite.com/my-custom-sitemap-1.xml',
        'https://yourwebsite.com/my-custom-sitemap-2.xml',
      ],
    },
  }
  