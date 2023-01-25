module.exports = {
  siteTitle: 'Girls Who Code', // <title>
  manifestName: 'GWC',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#000000',
  manifestThemeColor: '#000000',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `nyugwc`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Girls Who Code',
  subHeading: 'NYU College Loops',
  // social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/',
    },
    {
      style: 'brands',
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: 'mailto:test@example.com',
    },
  ],
  env: {
    PUBLIC_URL: 'https://ebootehsaz.github.io/nyugwc/',
  },
};
