<script setup lang="ts">
import { useEmployeeStore } from "../../store/employee/";

const store = useEmployeeStore();

definePageMeta({
  layout: "dashboard",
});

const employeeData: any = ref([]);

onMounted(async () => {
  await store.fetchEmployee();
  employeeData.value = store.employeeList;
});

const tableHeader = [
  {
    title: "ID Karyawan",
    value: "id",
  },
  {
    title: "Nama Lengkap",
    value: "fullname",
  },
  {
    title: "Jabatan",
    value: "role",
  },
  {
    title: "Absen",
    value: "present",
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
      <Navbar class="px-16" title="Karyawan" />
    </template>
    <template #body>
      <Table :items="employeeData" :headers="tableHeader">
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
