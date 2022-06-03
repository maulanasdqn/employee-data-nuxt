<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const employeeData: any = [
  {
    id: 100001,
    fullname: "Maulana Sodiqin",
    role: "Junior Software Engineer",
    present: true,
  },
  {
    id: 100002,
    fullname: "Fenny Oktaviani",
    role: "Software Engineer",
    present: false,
  },
];

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
    value: "",
  },
];
</script>

<template>
  <NuxtLayout>
    <template #navbar>
      <Navbar class="px-16" title="Karyawan" />
    </template>
    <template #body>
      <Table :items="employeeData" :headers="tableHeader" />
    </template>
  </NuxtLayout>
</template>
