import Projects from "./pages/projects.vue";

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
    defaultLocale: 'en',
    customRoutes: 'config', // disable custom route with page components
    pages: {
      about: {
        en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
        fr: '/a-propos', // -> accessible at /fr/a-propos
      },
      Projects: {
        en: '/projects', // -> accessible at /projects (no prefix since it's the default locale)
        fr: '/projets', // -> accessible at /fr/projets
      },
      writing: {
        en: '/writing', // -> accessible at /writing (no prefix since it's the default locale)
        fr: '/ecriture', // -> accessible at /fr/ecriture
      },
      contact : {
        en: '/contact', // -> accessible at /contact (no prefix since it's the default locale)
        fr: '/contact', // -> accessible at /fr/contact
      },
      }
    }
  })