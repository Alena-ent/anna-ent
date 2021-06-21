
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Chci to | Podcast o sexu intimitě a duchovnu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:type', content: 'website'},
      { property: 'og:description', content: 'Postelová talkshow, kam si zveme osobnosti, které nás na hypotetické rovině přitahují…do postele. Podcast o sexu intimitě a duchovnu. Formát, jaký jste ještě neslyšeli.'},
      { property: 'og:url', content: 'https://chcito.cz'},
      { property: 'og:title', content: 'Chci to Podcast - Podcast o sexu intimitě a duchovnu' },
      { property: 'og:image:secure_url', content: 'https://ik.imagekit.io/alexborecky/Alena/chcito/ogImage-min__AgfWC3Vo2ljt.png' },
      { property: 'og:image', content: 'https://ik.imagekit.io/alexborecky/Alena/chcito/ogImage-min__AgfWC3Vo2ljt.png' },
      { property: 'og:image:type', content: 'image/png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;800&display=swap", rel: "stylesheet"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  // server: {     
  //   port: 8000, // default: 3000     
  //   host: '0.0.0.0', // default: localhost   
  // },   // other configs 
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/_typography.scss',
    '~/assets/scss/_layouts.scss',
    '~/assets/scss/viewport.sass',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/uiKit.js',
    { src: '~/plugins/fullpage', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
  '@nuxtjs/style-resources',
  '@nuxt/content',
  'nuxt-fullpage.js',
],

styleResources: {
    scss: [
      '~/assets/scss/_colours.scss',
    ]
},
// router: {
//   base: '/alena/'
// },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  }
}
