<template>
  <header class="header">
    <nav class="container mx-auto flex flex-col md:flex-row items-center justify-between">      <div class="flex items-center space-x-4 ">
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
         <!-- Burger menu button -->
      <button @click="toggleMobileMenu" class="block md:hidden">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <!-- Mobile menu -->
      <ul :class="{ 'hidden': !isMobileMenuOpen }" class="md:flex md:space-x-4 md:ml-0">
        <li>
          <NuxtLinkLocale to="about" class="hover:underline flex items-center"
            ><IconsMan class="ml-1 w-5 h-5" /> {{ $t('about') }}</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="projects" class="hover:underline flex items-center"
            ><IconsTerminal class="ml-2 w-4 h-4" /> {{ t('projects') }}</NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="writing" class="hover:underline flex items-center"
            ><IconsFeather class="ml-2 w-4 h-4" /> {{ t('writing') }}</NuxtLinkLocale>
        </li>
      </ul>

      <!-- Regular menu items -->
        <ul class="flex space-x-4 md:ml-0 md:space-x-4 md:flex-row md:flex-grow md:items-center">          <li>
          <NuxtLinkLocale to="about" class="hover:underline flex items-center"><IconsMan class="ml-1 w-5 h-5"/> {{ $t('about') }} </NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale to="projects" class="hover:underline flex items-center"><IconsTerminal class="ml-2 w-4 h-4"/> {{ t('projects') }}</NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale to="writing" class="hover:underline flex items-center"><IconsFeather class="ml-2 w-4 h-4"/>  {{ t('writing') }}</NuxtLinkLocale>
          </li>
        </ul>

      <div class="flex items-center space-x-4">
        <LangToggle />
        <ColorModeToggle />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useI18n()

const isHomeRoute = route.path === '/';
const isFrenchRoute = route.path === '/fr';
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
