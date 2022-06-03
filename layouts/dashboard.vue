<template>
  <div class="flex flex-col h-screen w-full">
    <div class="flex w-full h-full shadow">
      <Sidebar />
      <div class="flex flex-col h-full w-full">
        <slot name="navbar"></slot>
        <div class="flex items-center justify-center h-full w-full p-10">
          <div
            class="flex justify-center m-16 rounded-lg w-full h-full items-start bg-white bg-gray-50 p-6"
          >
            <slot name="body" class="p-4"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
