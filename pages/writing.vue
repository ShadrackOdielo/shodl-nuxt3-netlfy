<template>
    <NuxtLayout>
      <ContentDoc />
    </NuxtLayout>
</template>
<script setup>
  defineI18nRoute({
    paths: {
      en: '/writing', // -> accessible at /about-us (no prefix since it's the default locale)
      fr: '/ecriture', // -> accessible at /fr/a-propos
    }
  })
</script>