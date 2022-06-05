<script setup lang="ts">
import { useBranchStore } from "../../store/branch/";

const store = useBranchStore();

definePageMeta({
  layout: "dashboard",
});

const branchData = ref([]);

onMounted(async () => {
  await store.fetchBranch();
  branchData.value = store.branchList;
});

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
    value: "coordinator",
  },
  {
    title: "",
    value: "aksi",
  },
];

const isEdit = ref(false);

const isModalShow = ref(false);
const isModalDeleteShow = ref(false);

const id = ref();

const closeModal = () => {
  isModalShow.value = false;
  resetInput();
};

const area = ref("Anjay");
const coordinator = ref("");

const resetInput = () => {
  area.value = "";
  coordinator.value = "";
};

const isModalAddOpen = () => {
  resetInput();
  isModalShow.value = true;
  console.log("anjayu");
  isEdit.value = false;
};

const isModalEditOpen = (val: any) => {
  isModalShow.value = true;
  isEdit.value = true;
  id.value = val.id;
  area.value = val.area;
  coordinator.value = val.coordinator;
};

const isModalDeleteOpen = (val: number) => {
  isModalDeleteShow.value = true;
  id.value = val;
};

const addBranch = async () => {
  const payload = {
    area: area.value,
    coordinator: coordinator.value,
  };
  await store.createBranch(payload);
  await store.fetchBranch();
  branchData.value = store.branchList;
  closeModal();
};

const upadateBranch = async () => {
  const payload = {
    id: id.value,
    area: area.value,
    coordinator: coordinator.value,
  };
  await store.updateBranch(payload);
  await store.fetchBranch();
  branchData.value = store.branchList;
  closeModal();
};

const deleteBranch = async () => {
  const payload = {
    id: id.value,
  };
  await store.deleteBranch(payload);
  await store.fetchBranch();
  branchData.value = store.branchList;
  closeModal();
};
</script>

<template>
  <NuxtLayout>
    <template #navbar>
      <Navbar class="px-16" title="Cabang" />
    </template>
    <template #body>
      <Table class="max-h-3/4" :items="branchData" :headers="tableHeader">
        <template #button>
          <button
            @click="isModalAddOpen()"
            class="w-auto h-auto px-4 py-3 hover:bg-blue-400 bg-blue-300 text-white font-medium rounded-lg my-4 focus:bg-blue-500"
          >
            + Tambah Cabang
          </button> </template
        ><template #aksi="{ item }">
          <div class="flex gap-x-4 justify-end">
            <span
              @click="isModalEditOpen(item)"
              class="text-md font-medium text-yellow-400 cursor-pointer"
              >Edit</span
            >
            <span
              @click="isModalDeleteOpen(item.id)"
              class="text-md font-medium text-red-400 cursor-pointer"
              >Delete</span
            >
          </div>
        </template>
      </Table>
    </template>
  </NuxtLayout>
  <Teleport to="body">
    <Modal
      :title="isEdit ? 'Ubah Cabang' : 'Tambah Cabang'"
      @submit-modal="!isEdit ? addBranch() : upadateBranch()"
      @close-modal="isModalShow = false"
      :button-text="isEdit ? 'Ubah' : 'Simpan'"
      v-if="isModalShow"
    >
      <Form @submit.prevent="addBranch()">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="flex flex-col w-full gap-y-4">
            <div class="w-full flex flex-col gap-y-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="area"
              >
                Nama Daerah
              </label>
              <input
                v-model="area"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="area"
                type="text"
                placeholder="Bandung"
                name="area"
              />
            </div>
            <div class="w-full flex flex-col gap-y-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="area"
              >
                Koordinator Daerah
              </label>
              <input
                v-model="coordinator"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="coordinator"
                type="text"
                placeholder="Fenny"
                name="coordinator"
              />
            </div>
          </div>
        </div>
      </Form>
    </Modal>
  </Teleport>
  <Teleport to="body">
    <Modal
      title="Hapus Cabang"
      button-text="Hapus"
      @submit-modal="deleteBranch()"
      @close-modal="isModalDeleteShow = false"
      v-if="isModalDeleteShow"
    >
    </Modal>
  </Teleport>
</template>
