<template>
  <header class="header" :class="{ 'bg-transparent': isScrolled }">
    <nav class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="flex items-center space-x-4">
        <NuxtLinkLocale to="/" class="mr-auto flex items-center space-x-2">
          <UAvatar
            v-if="isHomeRoute || isFrenchRoute"
            size="sm"
            src="/avatar.jpg"
            alt="Avatar"
          />
          <span v-else class="aria-selected:true">shadrack odielo</span>
        </NuxtLinkLocale>
      </div>

      <ul class="flex space-x-4 md:ml-0 md:space-x-4 md:flex-row md:flex-grow md:items-center md:flex-wrap md:justify-end" :class="{ 'hidden': isMobileMenuOpen }">
        <li class="hidden md:block">
          <NuxtLinkLocale to="about" class="hover:underline flex items-center"><IconsMan class="ml-1 w-5 h-5"/> {{ $t('about') }} </NuxtLinkLocale>
        </li>
        <li class="hidden md:block">
          <NuxtLinkLocale to="projects" class="hover:underline flex items-center"><IconsTerminal class="ml-2 w-4 h-4"/> {{ t('projects') }}</NuxtLinkLocale>
        </li>
        <li class="hidden md:block">
          <NuxtLinkLocale to="skills" class="hover:underline flex items-center"><IconsTools class="ml-2 w-4 h-4"/>  {{ t('skills') }}</NuxtLinkLocale>
        </li>
        <li class="hidden md:block">
          <NuxtLinkLocale to="writing" class="hover:underline flex items-center"><IconsFeather class="ml-2 w-4 h-4"/>  {{ t('writing') }}</NuxtLinkLocale>
        </li>
        <li class="hidden md:block">
          <NuxtLinkLocale to="contact" class="hover:underline flex items-center"><IconsMail class="ml-2 w-4 h-4"/>  {{ t('contact') }}</NuxtLinkLocale>
        </li>
        <li>
          <LangToggle />
        </li>
        <li>
          <ColorModeToggle />
        </li>
        <li>
          <!-- Mobile menu button -->
          <UButton @click="toggleMobileMenu" class="block md:hidden" color="white" variant="ghost">
            <IconsBurger class="w-6 h-6" />
            {{  isMobileMenuOpen ? $t('close') : $t('menu') }}
          </UButton>
        </li>
      </ul>
      
      <!-- Dropdown menu (for smaller screens) -->
      <ul v-if="isMobileMenuOpen" class="md:hidden">
        <li>
          <NuxtLinkLocale to="about" class="hover:underline flex items-center"><IconsMan class="ml-1 w-5 h-5"/> {{ $t('about') }} </NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="projects" class="hover:underline flex items-center"><IconsTerminal class="ml-2 w-4 h-4"/> {{ t('projects') }}</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="skills" class="hover:underline flex items-center"><IconsTools class="ml-2 w-4 h-4"/>  {{ t('skills') }}</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="writing" class="hover:underline flex items-center"><IconsFeather class="ml-2 w-4 h-4"/>  {{ t('writing') }}</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="contact" class="hover:underline flex items-center"><IconsMail class="ml-2 w-4 h-4"/>  {{ t('contact') }}</NuxtLinkLocale>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const { t } = useI18n();

const isHomeRoute = route.path === '/';
const isFrenchRoute = route.path === '/fr';
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

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
