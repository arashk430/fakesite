// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa'
      }
    },
  },css:[
    '~/assets/style.css'
  ],
  
    modules: ["vuetify-nuxt-module"]
  , vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      ssr: true,
      locale: {
        rtl: { 'en': true }
      },
      // theme:{
      //   themes:{
      //     light: {
      //       dark: false,
      //       colors: {
      //         primary:  '#148cff',
      //         secondary:  '#FFCDD2'
      //       }
      //     },
      //   }
      // }
    },


    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      useVuetifyLabs: false,
    }
  }
})