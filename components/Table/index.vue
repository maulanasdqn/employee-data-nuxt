<script setup lang="ts">
const employeeData: any = [];

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
  buttonText?: string;
}

const props = withDefaults(defineProps<props>(), {
  items: () => [],
  headers: () => [
    {
      title: "",
      value: "",
    },
  ],
  buttonText: "",
});
</script>
<template>
  <div
    class="relative overflow-x-auto shadow w-full px-6 sm:rounded-lg bg-gray-200 py-4"
  >
    <button
      class="w-auto h-auto px-4 py-3 hover:bg-blue-400 bg-blue-300 text-white font-medium rounded-lg my-4 focus:bg-blue-500"
    >
      + Tambah {{ buttonText }}
    </button>
    <table
      class="w-full text-sm bg-white text-left text-gray-500 dark:text-gray-400 rounded-lg"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg"
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
      <tbody
        v-if="items.length === 0"
        class="flex items-center justify-center w-full p-4"
      >
        <tr>
          <h1 class="text-black-600">Data Kosong</h1>
        </tr>
      </tbody>
      <tbody v-else>
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
