const siteUrl = 'https://bytemeter.krabhi4.in/';
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
