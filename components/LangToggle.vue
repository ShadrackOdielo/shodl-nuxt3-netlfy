<script setup>
const { locale, setLocale } = useI18n()

</script>

<template>
  <div>
    <div>
        <span v-if='locale == "fr"' role="img" aria-label="English" @click="setLocale('en')" style="cursor: pointer;">🇬🇧</span>
        <span v-else role="img" aria-label="French" @click="setLocale('fr')" style="cursor: pointer;">🇫🇷</span>
        
    </div>
  </div>
</template>
