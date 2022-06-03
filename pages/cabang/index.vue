<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  title: "Cabang",
});
useHead({
  titleTemplate: "Cabang",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "Management Cabang" }],
  bodyAttrs: {
    class: "test",
  },
});
</script>

<template>
  <NuxtLayout> Ini Cabang </NuxtLayout>
</template>
