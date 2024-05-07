<template>
  <div>
    <span class="font-bold text-xl md:text-2xl">{{ $t('welcomeMessage') }}</span>
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{{ $t('name') }}.</h1>
    <div class="text-lg md:text-xl mb-8">
      {{ $t('introMessage') }}
     
    </div>

    <nuxt-link :to="localePath('about')" class="btn">{{ $t('moreAboutMe') }}</nuxt-link>

    <!-- Latest blog card -->
    <div class="my-8">
      <h2 class="text-2xl font-bold mb-4">{{ $t('latestBlog') }}</h2>
      <!-- Fetch and display the latest blog post -->
      <div v-if="latestBlog">
        <h3 class="text-xl mb-2">{{ latestBlog.title }}</h3>
        <p>{{ latestBlog.description }}</p>
        <nuxt-link :to="localePath('articles')" class="text-blue-500 hover:underline">{{ $t('readMore') }}</nuxt-link>
      </div>
    </div>

    <!-- Latest project card -->
    <div class="my-8">
      <h2 class="text-2xl font-bold mb-4">{{ $t('latestProject') }}</h2>
      <!-- Fetch and display the latest project -->
      <div v-if="latestProject">
        <h3 class="text-xl mb-2">{{ latestProject.title }}</h3>
        <p>{{ latestProject.description }}</p>
        <nuxt-link :to="localePath('projects')" class="text-blue-500 hover:underline">{{ $t('allProjects') }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const {  t } = useI18n();

// Fetch latest blog post
// const { data: latestBlog } = useContent('articles').sortBy('createdAt', 'desc').limit(1).fetch();

// Fetch latest project
// const { data: latestProject } = useContent('projects').sortBy('createdAt', 'desc').limit(1).fetch();
</script>

<style>
/* Add your custom styling here */
</style>
