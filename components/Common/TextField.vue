<script setup lang="ts">
interface props {
  label: string;
  placeholder: string;
  type: string;
  modelValue: String;
  color: string;
}

const props = withDefaults(defineProps<props>(), {
  label: "",
  placeholder: "",
  type: "text",
  color: "border-blue-400 bg-gray-100",
});

const value = ref("");

const emits = defineEmits(["update:modelValue"]);

const updateValue = (value: any) => {
  emits("update:modelValue", value);
};
</script>
<template>
  <label
    class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-first-name"
  >
    {{ label }}
  </label>
  <input
    :class="color"
    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    :type="type"
    :placeholder="placeholder"
    v-model="value"
    @input="(e) => $emit('update:modelValue', e.target.value)"
  />
</template>
