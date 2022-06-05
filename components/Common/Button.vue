<script setup lang="ts">
interface props {
  buttonText?: string;
  color?: string;
}

const props = withDefaults(defineProps<props>(), {
  buttonText: "Simpan",
  color: "bg-blue-400 focus:ring-blue-400 hover:bg-blue-500",
});
</script>
<template>
  <button
    type="button"
    :class="color"
    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
  >
    {{ buttonText }}
  </button>
</template>
