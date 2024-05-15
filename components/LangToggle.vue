<script setup>
const { locale, setLocale } = useI18n()

</script>

<template>
  <div>
    <div>
        <span v-if='locale == "en"' role="img" aria-label="English" @click="setLocale('fr')" style="cursor: pointer;">🇬🇧</span>
        <span v-else role="img" aria-label="French" @click="setLocale('en')" style="cursor: pointer;">🇫🇷</span>
        
    </div>
  </div>
</template>
