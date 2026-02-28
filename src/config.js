module.exports = {
  siteTitle: 'Arif Aizin | Software Developer',
  siteDescription:
    'Arif Aizin is a Software Developer who loves learning new things and building projects.',
  siteKeywords:
    'Arif Aizin, arifaizin, software developer, software engineer, web developer',
  siteUrl: 'https://arifaizin.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-XXXXXXXXX-X',
  googleVerification: '',
  name: 'Arif Aizin',
  location: 'Indonesia',
  email: 'arifaizin@gmail.com',
  github: 'https://github.com/arifaizin',
  twitterHandle: '@chandrikadeb7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/arifaizin',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/chandrika-deb/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/chandrikadeb7',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/chandrikadeb7',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/chandrikadeb7',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
