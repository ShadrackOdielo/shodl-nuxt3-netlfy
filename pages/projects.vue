<template>
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-semibold mb-4">{{ $t('projects') }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axios from 'axios'; // Install axios if not already installed
  
  const projects = ref([]);
  
  // Fetch GitHub projects using GitHub API
  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/shadrackodielo/repos');
      projects.value = response.data;
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
    }
  };
  
  onMounted(fetchProjects);

//   const pinnedProjects = ref([]);
// watch(projects, () => {
//   pinnedProjects.value = projects.value.filter(project => project.pinned);
// });
//   </script>
  
  <style scoped>
  /* Add your custom styles for project cards here */
  </style>
  