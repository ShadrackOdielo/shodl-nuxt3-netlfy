import Search from "./components/icons/Search.vue";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
        home: 'Home',
        close: 'close',
        menu: 'Menu',
        contact: 'Contact',
        about: 'About',
        writing: 'Writing',
        blog:{
            title: 'Writing',
            description: 'My thoughts on various topics.'
        },
  

        skills: 'skills',
        projects: 'Projects',
        welcomeMessage: 'Hi, I am',
        introMessage: 'Welcome to my website.',
        name: 'Shadrack Odielo',
        moreAboutMe: 'More about me',
        latestBlog: 'Latest Blog',
        search: "Search...",
        readMore: 'Read More',
        latestProject: 'Latest Project',
        allProjects: 'All Projects',
        aboutMe: "About Me",
    student: "I am a student.",
    startedCoding: "I started coding in high school.",
    webDeveloper: "I am a web developer.",
    trainedAt: "I was trained at ALX.",
    loveBooksMusic: "I love books and music."
      },
      fr: {
        welcome: 'Bienvenue',
        close: 'Fermer',
        menu: 'Menu',
        contact: 'Contact',
        home: 'Accueil',
        about: 'À propos',
        projects: 'Projets',
        writing: 'Écriture',
        blog:{
            title: 'Écriture',
            description: 'Mes pensées sur divers sujets.'
        },
        Search: "Rechercher ...",
        skills: 'Compétences',
        welcomeMessage: 'Bonjour, je suis',
        introMessage: 'Bienvenue sur mon site web.',
        name: 'Shadrack Odielo',
        moreAboutMe: 'En savoir plus sur moi',
        latestBlog: 'Dernier Blog',
        readMore: 'Lire la suite',
        latestProject: 'Dernier Projet',
        allProjects: 'Tous les Projets',
        aboutMe: "À propos de moi",
      student: "Je suis étudiant.",
    startedCoding: "J'ai commencé à coder au lycée.",
    webDeveloper: "Je suis développeur web.",
    trainedAt: "J'ai été formé à ALX.",
    loveBooksMusic: "J'aime les livres et la musique."
      }
    }
  }))
  