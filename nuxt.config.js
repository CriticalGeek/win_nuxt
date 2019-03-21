const pkg = require('./package')


module.exports = {
  mode: 'universal',

  server: {
    port: 8001, // default: 3000
    // host: '0.0.0.0'
  },

  generate: {
    routes: [
      '/entradas/vistazo',
      '/entradas/contigo',
      '/entradas/equipo',
      '/entradas/amigos',
      '/perfiles/lucy'
    ]
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = {
            x: 0,
            y: 0
          }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = {
            x: 0,
            y: 0
          }
        }
        if (to.hash) {
          position = {
            selector: to.hash
          }
        }
        return position
      }
    }
  },

  // Headers of the page
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#ff2d2d' },
      { name: 'msapplication-TileColor', content: '#ff2d2d' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    noscript: [{
      innerHTML: 'Lo lamentamos pero WIN necesita javascript para funcionar correctaente, activalo o utiliza un navegador compatible.'
    }],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Catamaran:400,700' },

      // Favicons
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#ff2d2d' },
    ]
  },

  // Customize the progress-bar color
  loading: { color: '#ff2d2d' },

  // Global CSS
  css: [
    '~/assets/scss/style.scss',
    'swiper/dist/css/swiper.css',
    '~/plugins/animate.css'
  ],

  // Plugins to load before mounting the App
  plugins: [
    { src: 'node_modules/vue-rellax/lib/nuxt-plugin', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/swiper', ssr: false },
    { src: '~/plugins/vuelidate', ssr: false }
  ],

  // Nuxt.js modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#1EBCA9'
      }
    ]
  ],

  // Axios module configuration
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  // Build configuration
  build: {
    //You can extend webpack config here
    extend(config, ctx) {

    }
  }
}
