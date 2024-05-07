export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
        home: 'Home',
        about: 'About',
        writing: 'Writing',
        projects: 'Projects'
      },
      fr: {
        welcome: 'Bienvenue',
        home: 'Accueil',
        about: 'À propos',
        projects: 'Projets',
        writing: 'Écriture'
      }
    }
  }))
  