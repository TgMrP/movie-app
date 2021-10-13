export default {
  server: {
    host: '0.0.0.0',
  },

  head: {
    title: 'movie-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/defaults.scss'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-build-optimisations',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  modules: ['@nuxtjs/axios', '@nuxt/image'],

  axios: {},

  tailwindcss: {
    mode: 'jit',
  },

  googleFonts: {
    families: {
      Karla: {
        wght: [200, 300, 400, 500, 600],
      },
    },
  },

  // image: {
  //   domains: [BASE_URL],
  //   alias: {
  //     Storage: BASE_URL + '/images/?image=',
  //   },
  // },

  stylelint: {
    configFile: 'stylelint.config.js',
    fix: true,
  },

  build: {},
}
