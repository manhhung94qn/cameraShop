const colors = require('vuetify/es5/util/colors').default
const webpack = require("webpack");
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    //titleTemplate: '%s - ' + process.env.npm_package_name,
    titleTemplate: '%s',
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/base.scss', '~/assets/text.scss', '~/assets/bg.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/bootstrap.js", { src: 'plugins/owl.js', ssr: false }, "~/plugins/vee-validate", "~/plugins/axios"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/toast'
  ],
  toast: {
    position: 'top-right',
    register: [ // Register custom toasts
      {
        name: 'n_success',
        message: (payload) => {
          if (!payload.message) {
            return 'Thành công...'
          };
          return payload.message
        },
        options: {
          type: 'info',
          icon: 'check-circle-outline',
          duration: 5000,
          theme: 'outline',
          keepOnHover: true,
          iconPack: 'mdi',
          action: {
            icon: 'close-circle-outline',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        },
      }
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.NODE_ENV != 'development' ? (process.env.BASE_URL + '/api') : 'http://localhost:3000/api'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      //dark: true,
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          //bg
          bgPrimary: '#0f9ed8',
          bgAccent: '#FFF',
          bgSecondary: '#f5f5f5',
          bgInfo: colors.teal.lighten1,
          bgWarning: colors.amber.base,
          bgError: colors.deepOrange.accent4,
          bgSuccess: colors.blue.darken3,
          //text
          textPrimary: colors.grey.darken4,
          textAccent: '#0f9ed8',
          textSecondary: '#FFFFFF',
          textInfo: '#aaaaaa',
          textWarning: colors.amber.base,
          textError: colors.deepOrange.accent4,
          textSuccess: colors.green.accent3,
          //other

        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [
      "vee-validate/dist/rules"
    ],
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          //loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },

  }
}
