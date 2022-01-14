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
          gray: 'D0D6F9',
        },
      },
      fontSize: {
        heading: {
          1: '150px',
          2: '100px',
          3: '56px',
          4: '32px',
          5: '28px',
        },
        subheading: {
          1: '28',
          2: '14',
        }
      },
      letterSpacing: {
        heading: '4.75px',
        subheading: '2.35px',
        nav: '2.7px'
      }
    },
  },
}