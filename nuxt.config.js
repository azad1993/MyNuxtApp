export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtTurkish2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://bootswatch.com/4/sketchy/bootstrap.min.css'}
    ],
    script : [
        //{ src : 'https://cdn.json'}
    ]
  },
  loading: { color: '#666',
             height: '3px',
             failedColor: 'orange'
            },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      "~/assets/style/transition.css"
  ],
  env : {
      baseURL : process.env.baseURL
  },
  router : { 
      extendRoutes(routes, resolve){
          routes.push({ 
           path: '/custom-route',
           component: resolve(__dirname, 'pages/test.vue')
          })
      }
  },
  
  transition: {
      name: "layout",
      mode: "out-in"
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      "~/plugins/Components.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      "@nuxtjs/axios"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
