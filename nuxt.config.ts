// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxtjs/i18n","@vueuse/nuxt",],
  ui: {
    global: true,
    icons:[],
    safelistColors: ['orange'],
  },
  content: {
    // My custom configuration
  },
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    locales: ['en', 'fr'], // used in URL path prefix
    defaultLocale: 'en'
  }
})