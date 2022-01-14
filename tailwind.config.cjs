module.exports = {
  extract: {
    include: ['**/*.{jsx,tsx,html,css}'],
    exclude: ['node_modules', '.git', 'dist', 'build'],
  },
  theme: {
    extend: {
      screens: {
        'xl': { min: '1440px' },
      },
      colors: {
        very: {
          dark: '#0B0D17'
        },
        bluish: {
          gray: '#D0D6F9',
        },
      },
      fontFamily: {
        Bellefair: ['Bellefair', 'serif'],
        BarlowCondensed: ['Barlow Condensed', 'sans-serif'],
        Barlow: ['Barlow', 'sans-serif'],
      },
      letterSpacing: {
        heading: '4.75px',
        subheading: '2.35px',
        nav: '2.7px'
      }
    },
  },
}