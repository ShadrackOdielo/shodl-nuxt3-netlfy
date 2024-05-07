<template>
    <span class="">
      <button @click="toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')">
        <IconsSun v-if="$colorMode.preference === 'dark'" name="sun"/>
        <IconsMoon v-else fill="red"/>
      </button>
    </span>
  </template>
  
  <script setup>
  function toggleDarkMode(theme) {
    useColorMode().preference = theme
  }
  </script>
  