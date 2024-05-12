<template>
  <div class="homepage-container bg-white dark:bg-gray-900">
    <div class="text-container  bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90">
      <span class="font-bold text-xl md:text-2xl">{{ $t('welcomeMessage') }}</span>
      <h1 class="animate-typing overflow-hidden text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{{ $t('name') }}</h1>
      <div class="animate-typing overflow-hidden text-lg md:text-xl mb-8">
        {{ $t('introMessage') }}
      </div>

      <nuxt-link :to="localePath('about')" class="hover:underline">{{ $t('moreAboutMe') }}</nuxt-link>
    </div>
  </div>

  <!-- Placeholder for latest blog and project -->
 
  <div
  class="flex border-dashed border-t border-[#c7c7c7] dark:border-[#34343a] pt-10 flex-col"
>
  <h1 class="title mb-6">Latest posts:</h1>
  <div
    class="border rounded-[12px] p-4 pb-0 border-[#c7c7c7] dark:border-[#34343a]"
  >
    <div class="grid grid-cols-1 gap-4">
      <ContentList
        path="/writing"
        :query="{
          only: [
            '_path',
            'title',
            'description',
            'publishDate',
            'img',
            'tags',
            'readingTime',
          ],
          limit: 3,
          sort: { date: -1 },
          $sensitivity: 'base',
        }"
      >
        <template v-slot="{ list }">
          <div
            class="pb-4 flex border-b border-[#c7c7c7] dark:border-[#34343a] items-center"
            v-for="article in list"
            :key="article._path"
          >
            <HomeBlogPost :data="article" />
          </div>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </div>

    <a class="button-more-outlined" href="/">
      <nuxt-link :to="localePath('writing')" class="text-blue-500 hover:underline">{{ $t('writing') }}</nuxt-link>
      <div
        class="mr-[11px] h-[36px] flex justify-center items-center bg-[#E8E8E8] w-[36px] rounded-full dark:bg-[#232425]"
      >
        <IconsRightArrow />
      </div>
      <div class="text-[14px]">See more posts</div>
    </a>
  </div>
</div>


     <!-- Latest project card -->
  <div class="my-8 placeholder bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90">
    <h2 class="text-2xl font-bold mb-4">{{ $t('latestProject') }}</h2>
    <div v-if="latestProject">
      <h3 class="text-xl mb-2">{{ latestProject.name }}</h3>
      <p>{{ latestProject.description }}</p>
      <nuxt-link :to="localePath('projects')" class="text-blue-500 hover:underline">{{ $t('allProjects') }}</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
import { ref, onMounted } from 'vue';
import axios from 'axios';

const latestProject = ref(null);

// Fetch latest project from GitHub
const fetchLatestProject = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/shadrackodielo/repos?sort=pushed');
    if (response.data.length > 0) {
      latestProject.value = response.data[0];
    }
  } catch (error) {
    console.error('Error fetching latest project:', error);
  }
};

onMounted(fetchLatestProject);
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
