<script setup lang="ts">
type Items = {
  text: string;
  value: string;
};

type Headers = {
  title: string;
  value: string;
};

interface props {
  items?: Array<Items>;
  headers?: Array<Headers>;
}

const props = withDefaults(defineProps<props>(), {
  items: () => [],
  headers: () => [
    {
      title: "",
      value: "",
    },
  ],
});
</script>
<template>
  <div
    class="relative overflow-x-auto shadow w-full px-6 sm:rounded-lg bg-gray-200 py-4"
  >
    <slot class="sticky top-0" name="button"> </slot>
    <table
      class="w-full text-sm bg-white text-left text-gray-500 dark:text-gray-400 rounded-lg max-h-screen"
    >
      <thead
        class="text-xs sticky top-0 bottom-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg"
      >
        <tr>
          <th
            v-for="(item, index) in headers"
            :key="index"
            scope="col"
            class="px-6 py-3"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="body">
          <tr v-for="(item, index) in items" :key="index">
            <td v-for="(header, i) in headers" :key="i" class="px-6 py-4">
              <slot
                :name="header.value"
                v-bind="{
                  item: item,
                  value: item[header.value],
                  index: index,
                }"
              >
                {{ item[header.value] }}
              </slot>
            </td>
          </tr>
        </slot>
      </tbody>
    </table>
  </div>
</template>
