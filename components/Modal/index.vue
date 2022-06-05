<script setup lang="ts">
import Button from "../Common/Button.vue";
const emits = defineEmits(["close-modal", "submit-modal"]);

interface props {
  title?: string;
  buttonText?: string;
}

const props = withDefaults(defineProps<props>(), {
  title: "Judul",
  buttonText: "Simpan",
});

const closeModal = () => {
  emits("close-modal");
};

const submitModal = () => {
  emits("submit-modal");
  emits("close-modal");
};
</script>

<template>
  <div class="relative z-10" role="dialog">
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
      >
        <div
          class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 pr-3 w-full text-center sm:mt-0 sm:text-left">
                <h3
                  class="text-lg text-left font-medium text-gray-900"
                  id="modal-title"
                >
                  {{ title }}
                </h3>
                <div class="mt-4 px-4 w-full">
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button @click="submitModal()" :button-text="buttonText" />
            <Button
              @click="closeModal()"
              button-text="Tutup"
              color="bg-white text-red-700 focus:ring-red-400 font-medium border-red-400 border-2 focus:border-none"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
