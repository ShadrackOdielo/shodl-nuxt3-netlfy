<template>
<button
	type="button"
	class="ml-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center transition"
	aria-label="Toggle Menu"
	data-toggle-menu
	@click="toggleMobileMenu"
	
    >
	<IconsBurger class="w-5 h-5" />
    </button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { IconsBurger } from 'vue-hero-icons';
import { IconsMan } from 'vue-hero-icons';
import { IconsTerminal } from 'vue-hero-icons';
import { IconsTools } from 'vue-he