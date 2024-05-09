<template>
  <div class="container mx-auto py-8">
    <div class="flex flex-col items-center space-y-8">
      <img src="/avatar.jpg" alt="Avatar" class="rounded-full w-40 h-40">

      <div class="text-center">
        <h2 class="text-2xl font-bold">{{ $t('aboutMe') }}</h2>
        <p>{{ $t('student') }}</p>
        <p>{{ $t('startedCoding') }}</p>
        <p>{{ $t('webDeveloper') }}</p>
        <p>{{ $t('trainedAt') }}</p>
        <p>{{ $t('loveBooksMusic') }}</p>
      </div>

      <div class="flex space-x-4">
        <a href="https://twitter.com/odielo_ke" target="_blank" class="text-gray-500 hover:text-blue-500"><IconsTwitter /></a>
        <a href="https://www.linkedin.com/in/shadrack-odielo-30258a212/" target="_blank" class="text-gray-500 hover:text-blue-500"><IconsLinkedin /></a>
        <!-- Add links to other social media platforms -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const aboutMe = t('aboutMe');
const student = t('student');
const startedCoding = t('startedCoding');
const webDeveloper = t('webDeveloper');
const trainedAt = t('trainedAt');
const loveBooksMusic = t('loveBooksMusic');
</script>

<style scoped>
/* Add your custom styles here */
</style>
