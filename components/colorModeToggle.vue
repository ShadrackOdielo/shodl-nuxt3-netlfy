<template>
    <span class="">
      <button @click="toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')">
      <i :class="$colorMode.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'"></i>
      </button>
      <!-- <UToggle v-model=True
                off-icon="i-heroicons-sun"
                on-icon="i-heroicons-moon"
                
                class="dark:hidden"
                @change="toggleDarkMode('dark')"
  
      />
      <UToggle  v-model=False
                off-icon="i-heroicons-sun"
                on-icon="i-heroicons-moon"
                class="hidden dark:flex"

                @change="toggleDarkMode('light')"
      /> -->
    </span>
  </template>
  
  <script setup>

  const light = useColorMode().preference === 'light'
  const dark = useColorMode().preference === 'dark'
  function toggleDarkMode(theme) {
    useColorMode().preference = theme
  }
  </script>
  