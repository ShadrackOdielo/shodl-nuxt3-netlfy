<template>
  <header class="header">
    <nav class="container mx-auto flex flex-col md:flex-row items-center justify-between">      <div class="flex items-center space-x-4 ">
        <NuxtLink to="/" class="mr-auto flex items-center space-x-2">
          <UAvatar
            v-if="isHomeRoute || isFrenchRoute"
            size="sm"
            src="/avatar.jpg"
            alt="Avatar"
          />
          <span v-else class="text-gray-300">shadrack odielo</span>
        </NuxtLink>
        </div>
        <ul class="flex space-x-4 md:ml-0 md:space-x-4 md:flex-row md:flex-grow md:items-center">          <li>
            <NuxtLink to="/about" class="nav-link flex items-center"><IconsMan class="ml-1 w-5 h-5"/> {{ $t('about') }} </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="nav-link flex items-center"><IconsTerminal class="ml-2 w-4 h-4"/> {{ $t('projects') }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/writing" class="nav-link flex items-center"><IconsFeather class="ml-1 w-4 h-4"/>  {{ $t('writing') }}</NuxtLink>
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
import { useRoute } from 'vue-router';

const route = useRoute();

const isHomeRoute = route.path === '/';
const isFrenchRoute = route.path === '/fr';
</script>

<style scoped>
/* Add focus styles to links */
.nav-link:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
}
</style>
