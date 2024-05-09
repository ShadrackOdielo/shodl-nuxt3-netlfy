<template>
    <div @click="openModal" class="cursor-pointer p-4 bg-white dark:bg-black rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
      <img :src="card.name" :alt="card.name" class="w-12 h-12 mx-auto mb-4">
      <p class="text-center">{{ card.name }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const card = ref({
    name: 'Skill name',
    icon: '/logos/figma.vue'
  });
  
  const openModal = () => {
    // Implement logic to open modal

  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  