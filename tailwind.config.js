module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }) {
      if (process.env.NODE_ENV === 'production') return

      const screens = theme('screens', {})
      const breakpoints = Object.keys(screens)

      addBase({
        'body::after': {
          content: `"Current breakpoint default (< ${
            screens[breakpoints[0]]
          })"`,
          position: 'fixed',
          right: '.5rem', // could replace with theme('spacing.2', '.5rem'), same for most of the other values
          bottom: '.5rem',
          padding: '.5rem',
          background: 'rgba(255,255,255, 0.5)',
          color: '#000',
          fontSize: '.875rem',
          fontWeight: '600',
          zIndex: '99999',
        },
        ...breakpoints.reduce((acc, current) => {
          acc[`@media (min-width: ${screens[current]})`] = {
            'body::after': {
              content: `"${current}"`,
            },
          }
          return acc
        }, {}),
      })
    },
  ],
}
