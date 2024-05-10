<template>
    <div class="border border-gray-200 rounded-md p-4 shadow-md">
      <h2 class="text-lg font-semibold">{{ project.name }}</h2>
      <p class="text-gray-600">{{ project.description }}</p>
      <div class="mt-2">
        <span v-for="language in project.languages" :key="language" class="inline-block bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-xs font-semibold mr-2">{{ language }}</span>
      </div>
      <div class="mt-4">
        <a :href="project.html_url" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">{{ $t('source_code') }}</a>
        <a v-if="project.homepage" :href="project.homepage" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline ml-2">{{ $t('preview') }}</a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps<{
    project: {
      id: number;
      name: string;
      description: string;
      languages: string[];
      html_url: string;
      homepage?: string;
    };
  }>();
  </script>
  
  <style scoped>
  /* Add your custom styles for project cards here */
  </style>
  