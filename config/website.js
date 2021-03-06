const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Tremēns Technologies', // Navigation and Site Title
  siteTitleAlt: 'Tremēns Technologies', // Alternative Site title for SEO
  siteUrl: 'https://tremens.tech', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Tremēns Technologies: Making useful software',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@tremens-tech', // Twitter Username
  ogSiteName: 'tremens-tech', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
