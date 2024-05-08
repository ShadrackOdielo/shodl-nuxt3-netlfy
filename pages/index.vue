<template>
  <div class="homepage-container bg-white dark:bg-gray-900">
    <div class="text-container bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90">
      <span class="font-bold text-xl md:text-2xl">{{ $t('welcomeMessage') }}</span>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{{ $t('name') }}</h1>
      <div class="text-lg md:text-xl mb-8">
        {{ $t('introMessage') }}
      </div>

      <nuxt-link :to="localePath('about')" class="btn">{{ $t('moreAboutMe') }}</nuxt-link>
    </div>
  </div>

  <!-- Placeholder for latest blog and project -->
  <div class="placeholder-container bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 py-8">
    <!-- Latest blog card -->
    <div class="my-8 placeholder bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90">
      <h2 class="text-2xl font-bold mb-4">{{ $t('latestBlog') }}</h2>
      <div>
        <h3 class="text-xl mb-2">Placeholder Blog Title</h3>
        <p>Placeholder Blog Description</p>
        <nuxt-link :to="localePath('articles')" class="text-blue-500 hover:underline">{{ $t('readMore') }}</nuxt-link>
      </div>
    </div>

    <!-- Latest project card -->
    <div class="my-8 placeholder bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90">
      <h2 class="text-2xl font-bold mb-4">{{ $t('latestProject') }}</h2>
      <div>
        <h3 class="text-xl mb-2">Placeholder Project Title</h3>
        <p>Placeholder Project Description</p>
        <nuxt-link :to="localePath('projects')" class="text-blue-500 hover:underline">{{ $t('allProjects') }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
</script>

<style scoped>
.homepage-container {
  position: relative;
  min-height: 100vh;
  background-image: url('/home-bg.jpg');
  background-size: cover;
  background-position: center;
  filter: grayscale(100%); /* Apply grayscale filter */
}

.text-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 20px;
  border-radius: 8px;
}

.placeholder-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.placeholder {
  margin-top: 20px;
  width: 100%;
  max-width: 600px; /* Adjust as needed */
  padding: 20px;
  border-radius: 8px;
}

/* Text animation */
/* Adjust these values as needed */
.text-container span,
.text-container h1,
.text-container div {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
