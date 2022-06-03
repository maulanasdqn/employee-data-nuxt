<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <NuxtLayout>
    <template #navbar>
      <Navbar class="px-16" title="Pendapatan" />
    </template>
    <template #body>
      <Table button-text="Pendapatan" />
    </template>
  </NuxtLayout>
</template>
