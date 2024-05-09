<template>
  <div class="container mx-auto py-8">
    <section v-for="(section, index) in sections" :key="index" class="mb-8">
      <h2 class="text-2xl font-bold mb-4">{{ section.title }}</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90">
        <div v-for="(skill, idx) in section.skills" :key="idx" :skill="card" @click="openModal" class="cursor-pointer p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
          <Icon :name="skill.icon" class="w-12 h-12 mx-auto mb-4 " />
          <p class="text-center">{{ skill.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sections = ref([
  {
    title: 'Languages and Frameworks',
    skills: [
      { name: 'Python', icon: 'logos:python' },
      { name: 'Java', icon: 'logos:java' },
      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript' },
      { name: 'C', icon: 'logos:c' },
      { name: 'C++', icon: 'logos:c-plusplus' },
      { name: 'Django', icon: 'logos:django' },
      { name: 'Flask', icon: 'file-icons:flask' },
      { name: 'Angular', icon: 'logos:angular' },
      { name: 'Vue 3', icon: 'logos:vue' },
      { name: 'Nuxt 3', icon: 'logos:nuxt' },
      { name: 'Kotlin', icon: 'logos:kotlin' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Figma', icon: 'logos:figma'},
      { name: 'Git', icon: 'logos:git' },
      { name: 'GitHub', icon: 'logos:github' },
      { name: 'Linux', icon: 'logos:linux-tux' },
      { name: 'VS Code', icon: 'logos:visual-studio-code' },
      { name: 'Docker', icon: 'logos:docker' },
      { name: 'Netlify', icon: 'logos:netlify' },
      { name: 'Medium', icon: 'logos:medium' },
      { name: 'Hashnode', icon: 'logos:hashnode' }
    ]
  },
  {
    title: 'Certifications',
    skills: [
      { name: 'ALX Software Engineering', icon: 'simple-icons:alx' },
      { name: 'Postman API Certification', icon: 'logos:postman' },
      { name: 'Udacity Full Stack Nanodegree', icon: 'logos:udacity' }
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'French: Upper Intermediate', icon: 'material-symbols:language-french-rounded' },
      { name: 'Swahili: Native', icon: 'openmoji:flag-tanzania' },
      { name: 'English: Fluent', icon: 'material-symbols:language-gb-english-rounded' },
      { name: 'Public Speaking', icon: 'mingcute:speech-fill' }
    ]
  }
]);
</script>

<style scoped>
/* Add your custom styles here */
</style>
