<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const employeeData: any = [
  {
    id: 100001,
    area: "Bandung",
    area_coordinator: "Jajang Nurjaman",
  },
  {
    id: 100002,
    area: "Tasikmalaya",
    area_coordinator: "Euis Sukaesih",
  },
];

const tableHeader = [
  {
    title: "ID Cabang",
    value: "id",
  },
  {
    title: "Nama Daerah",
    value: "area",
  },
  {
    title: "Koordinator Wilayah",
    value: "area_coordinator",
  },
  {
    title: "",
    value: "aksi",
  },
];
</script>

<template>
  <NuxtLayout>
    <template #navbar>
      <Navbar class="px-16" title="Cabang" />
    </template>
    <template #body>
      <Table button-text="Cabang" :items="employeeData" :headers="tableHeader">
        <template #present="{ item }">
          <span
            :class="{ 'text-red-400': !item.present }"
            class="text-green-400"
          >
            {{ item.present ? "Hadir" : "Tidak Hadir" }}</span
          > </template
        >]
        <template #aksi>
          <div class="flex gap-x-4 justify-end">
            <span class="text-md font-medium text-yellow-400">Edit</span>
            <span class="text-md font-medium text-red-400">Delete</span>
          </div>
        </template>
      </Table>
    </template>
  </NuxtLayout>
</template>
