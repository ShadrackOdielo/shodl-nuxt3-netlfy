<template>
  <div
    class="mb-10 mt-10  border-dashed border-b border-[#c7c7c7] pb-10 pl-10 dark:border-[#34343a]"
    
  >
    <h1 class="text-4xl sm:text-6xl mb-3 font-semibold font-recoleta">
      {{$t("blog.title")}}
    </h1>
    <p class="mb-5 font-recoleta">
      {{ $t("blog.description") }}
    </p>

    <div class="flex items-center relative justify-between gap-4">
      <div class="relative">
        <!-- <IconsSearch class="w-4 left-[8px] top-[12px] absolute" />
        <input
          ref="searchTypeRef"
          type="text"
          placeholder="Search article (⌘ + K)"
          v-model="searchType"
          class="input-search"
        /> -->
        <UInput
          v-model="searchType"
          placeholder="{{$t('search') }}"
          color="white"
          leading-icon="i-heroicons-magnifying-glass"
          ref="searchTypeRef"
        />
      </div>

      <div
        class="absolute top-0 right-0 pt-1.5 flex border items-center flex-col font-recoleta border-[#c7c7c7] px-4 rounded-lg dark:border-[#34343a] bg-[#ffffff] min-h-[40px] dark:bg-[#232425]"
      >
        <button @click="showTags = !showTags" class="flex items-center">
          <icon name="i-heroicons-chevron-down"
            class="w-5"
            :class="[showTags ? 'rotate-180' : '']"
          />
          <span>Tags</span>
        </button>

        <div class="text-1xl" v-if="showTags">
          <div class="text-center py-2" v-for="(t, i) in articleTags" :key="i">
            <NuxtLink
              class="hover:text-[#9CA3AF] duration-100"
              :to="'/tags/' + t"
              >{{ t }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="isPostsLoading" class="flex pb-5 justify-center">
    <IconsLoader />
  </div>

  <div
    v-if="postsList.length > 0 && !isPostsLoading"
    class="gap-4 block pb-4 columns-1 md:columns-2"
  >
    <template v-for="(post, index) in postsList" :key="index">
      <BlogPost class="mb-4" :data="post" />
    </template>
  </div>

  <div class="text-center mb-5" v-if="postsList.length <= 0 && !isPostsLoading">
    🤷🏼‍♂️ No articles found.
  </div>
</template>
<script setup land="ts">
import { useMagicKeys } from "@vueuse/core";

const showTags = ref(false);
const searchType = ref("");
const searchTypeRef = ref(null);

const searchTypes = computed(() => {
  return [
    searchType.value.charAt(0).toUpperCase() +
      searchType.value.slice(1).toLowerCase(),
    searchType.value.toLowerCase(),
    searchType.value.toUpperCase(),
  ];
});

const { data: postsList, pending: isPostsLoading } = await useAsyncData(
  "/posts",
  () =>
    queryContent("/posts")
      .only([
        "_path",
        "title",
        "description",
        "publishDate",
        "tags",
        "readingTime",
      ])
      .where({
        title: {
          $containsAny: searchTypes.value,
        },
      })
      .sort({ date: -1 })
      .find()
);

const { data: tagsList } = await useAsyncData("tags", () =>
  queryContent("/posts").only("tags").find()
);

watchEffect(async () => {
  const { data: postsList, pending: isPostsLoading } = await useAsyncData(
    "/posts",
    () =>
      queryContent("/posts")
        .only([
          "_path",
          "title",
          "description",
          "publishDate",
          "tags",
          "readingTime",
        ])
        .where({
          title: {
            $containsAny: searchTypes.value,
          },
        })
        .sort({ date: -1 })
        .find()
  );
});

const flatten = (tags, key) => {
  let _tags = tags
    .map((tag) => {
      let _tag = tag;
      if (tag[key]) {
        let flattened = flatten(tag[key]);
        _tag = flattened;
      }
      return _tag;
    })
    .flat(1);
  return _tags;
};

const articleTags = [...new Set(flatten(tagsList.value, "tags"))];

const { meta_k } = useMagicKeys();

watch(meta_k, (v) => {
  if (v) searchTypeRef.value.focus();
});
import { useI18n } from 'vue-i18n';
const { t } = useI18n();


</script>