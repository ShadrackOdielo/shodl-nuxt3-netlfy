<template>
    <NuxtLayout>
      <ContentDoc />
    </NuxtLayout>
  </template>
  <script setup>
  defineI18nRoute({
    paths: {
      en: '/about', // -> accessible at /about-us (no prefix since it's the default locale)
      fr: '/a-propos', // -> accessible at /fr/a-propos
    }
  })
</script>