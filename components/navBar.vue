<template>
  <header class="sticky top-0 z-40 flex-none mx-auto w-full bg-white md:bg-white/90 dark:bg-slate-950 dark:md:bg-slate-950/90 md:backdrop-blur-sm border-b dark:border-b-0">
    <div class="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-6xl md:px-4">
      <div class="home-icon flex justify-between">
        <NuxtLinkLocale to="/"class="flex items-center" >
          <span class="self-center ml-1 text-2xl font-extrabold text-gray-900 whitespace-nowrap dark:text-white flex-row">
            <img  v-if="isHomeRoute" src="/logo-lightmode.png" class="dark:hidden w-8 h-8" />
            <img  v-if="isHomeRoute" src="/logo.png" class="hidden dark:flex w-8 h-8" />
            <span v-if="!isHomeRoute"> {{ $t('name') }} </span>
          </span>
        </NuxtLinkLocale>

        <div class="flex items-center md:hidden">
          <!-- Toggle menu button for smaller devices -->
        <button @click="isOpen = true" type="button"
            class="ml-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center transition"
          aria-label="Toggle Menu"
          data-toggle-menu>
          <IconsBurger class="w-5 h-5"  />
        </button>
        </div>
      </div>
    <nav
    class="items-center w-full md:w-auto hidden md:flex text-gray-600 dark:text-slate-200 h-screen md:h-auto"
    aria-label="Main navigation"
    id="menu"
  >     
         
       
			<ul class="flex flex-col pt-8  md:pt-0 md:flex-row md:self-center w-full md:w-auto collapsed text-xl md:text-base">        
          <NuxtLinkLocale to="about" class="hover:underline pr-2">{{ $t('about') }} </NuxtLinkLocale>
          <NuxtLinkLocale to="projects" class="hover:font-bold pr-2"> {{ t('projects') }}</NuxtLinkLocale>
          <NuxtLinkLocale to="skills" class="hover:underline pr-2 "> {{ t('skills') }}</NuxtLinkLocale>
          <NuxtLinkLocale to="writing" class="hover:underline pr-2">  {{ t('writing') }}</NuxtLinkLocale>
          <NuxtLinkLocale to="contact" class="hover:underline pr-2"> {{ t('contact') }}</NuxtLinkLocale>
          <LangToggle />
          <ColorModeToggle />
      </ul>
      <UPopover>
        <UButton color="white" label="menu" trailing-icon="i-heroicons-chevron-down-20-solid" />
    
        <template #panel>
          <div class="p-4">
            <!-- <ul class="">
              <li v-for="link in mainMenuLinks" :key="link.to">
                <NuxtLinkLocale :to="link.to" class="block py-2 px-4 hover:bg-gray-200">{{ link.label }}</NuxtLinkLocale>
              </li>
            </ul> -->
            <ul class="flex flex-row pt-8 md:pt-0 md:flex-row md:self-center w-full md:w-auto collapsed text-xl md:text-base">        
              <NuxtLinkLocale to="about" class="hover:underline inline "><IconsMan class="ml-1 w-5 h-5"/> {{ $t('') }} </NuxtLinkLocale>
              <NuxtLinkLocale to="projects" class="hover:font-bold flex-row"><IconsTerminal class="ml-2 w-4 h-4"/> {{ t('') }}</NuxtLinkLocale>
              <NuxtLinkLocale to="skills" class="hover:underline flex-row"><IconsTools class="ml-2 w-4 h-4"/>  {{ t('skills') }}</NuxtLinkLocale>
              <NuxtLinkLocale to="writing" class="hover:underline flex-row"><IconsFeather class="md:flex ml-2 w-4 h-4"/>  {{ t('') }}</NuxtLinkLocale>
              <NuxtLinkLocale to="contact" class="hover:underline flex-row"><IconsMail class="md:flex ml-2 w-4 h-4"/>  {{ t('') }}</NuxtLinkLocale>
              <LangToggle />
              <ColorModeToggle />
          </ul>
          </div>
        </template>
      </UPopover>
      
      <USlideover v-model="isOpen">
        
        <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                Menu
              </h3>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
            </div>
          </template>
          <ul class="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center w-full md:w-auto collapsed text-xl md:text-base">        
            <NuxtLinkLocale to="about" class="hover:underline flex-row" label="button" leading-icon="i-heroicons-megaphone"> {{ $t('about') }} </NuxtLinkLocale>
            <NuxtLinkLocale to="projects" class="hover:font-bold flex-row" icon="i-heroicons-code-bracket"> {{ t('projects') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="skills" class="hover:underline " icon="i-heroicons-academic-cap">  {{ t('skills') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="writing" class="hover:underline " icon="i-game-icons-feather">  {{ t('writing') }}</NuxtLinkLocale>
            <NuxtLinkLocale to="contact" class="hover:underline " icon="uil-envelope"> {{ t('contact') }}</NuxtLinkLocale>
           
        </ul>
        <!-- make everything in the footer centered -->
        <template #footer class="">
          <LangToggle class="flex-row"/>
          <ColorModeToggle class="flex-row"/>
        </template>
        </UCard>
    
      </USlideover>
    </nav>

    <!-- Mobile menu -->

    <ul v-show="isMobileMenuOpen" class="md:hidden">
      <li v-for="link in mainMenuLinks" :key="link.to">
        <NuxtLinkLocale :to="link.to" class="block py-2 px-4 hover:bg-gray-200">{{ link.label }}</NuxtLinkLocale>
      </li>
    </ul>
    </div>
    <ScrollToTop />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const { t } = useI18n();
// check if the current route is the home route every time the route changes and  reloads div home-icon

import { watch } from 'vue';
const isHomeRoute = ref(route.path === '' || route.path === '/fr/' || route.path === '/fr' || route.path === '/');
watch(() => {
  isHomeRoute.value = route.path === '' || route.path === '/fr/' || route.path === '/fr' || route.path === '/';
});



const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const mainMenuLinks = [
  { to: '/', label: t('home'), icon: 'home-icon' },
  { to: '/about', label: t('about'), icon: 'about-icon' },
  { to: '/projects', label: t('projects'), icon: 'projects-icon' },
  { to: '/skills', label: t('skills'), icon: 'skills-icon' },
  { to: '/writing', label: t('writing'), icon: 'IconsMan' },
  { to: '/contact', label: t('contact'), icon: 'i-heroicons-academic-cap' },
];

// make true if a link is clicked
const isOpen = ref(false);
// Handle scroll event
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};
// Listen for scroll event after component is mounted
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', handleScroll);
}
</script>

<style scoped>
.header {
  transition: background-color 0.3s ease;
}

.bg-transparent {
  background-color: transparent !important;
}
</style>
