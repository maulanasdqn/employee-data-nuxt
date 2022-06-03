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
    <button
      class="w-auto h-auto px-4 py-3 hover:bg-blue-400 bg-blue-300 text-white font-medium rounded-lg my-4 focus:bg-blue-500"
    >
      + Tambah Karyawan
    </button>
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg"
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
      <tbody>
        <tr
          class="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        >
          <td v-for="(item, index) in items" :key="index" class="px-6 py-4">
            {{ item.value }}
          </td>
          <td class="px-6 py-4">
            <div class="flex gap-x-2 w-full justify-end">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Ubah</a
              >/<a
                href="#"
                class="font-medium text-red-600 dark:text-blue-500 hover:underline"
              >
                Hapus
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
