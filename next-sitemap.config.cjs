const siteUrl = 'https://byte-meter.vercel.app/';
module.exports = {
  siteUrl,
  exclude: ['/404'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}sitemap.xml`],
  },
};
