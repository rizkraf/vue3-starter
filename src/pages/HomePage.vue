<script setup>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import TheWelcome from "../components/TheWelcome.vue";

const siteData = reactive({
  title: `Home`,
  description: `Vue 3 Starter Template`,
});

useHead({
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
  ],
});
</script>

<template>
  <TheWelcome />
</template>
