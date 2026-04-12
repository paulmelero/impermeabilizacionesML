<template>
  <div
    class="rounded-l-t-box rounded-l-b-box bg-base-100 p-4 shadow-md will-change-transform fixed h-screen right-0 top-0 z-20 transition-transform transition-3d duration-200 ease-in-out min-w-[300px]"
    :class="{
      'translate-x-0': isDrawerOpen,
      'translate-x-full': !isDrawerOpen,
    }"
  >
    <div class="flex justify-end mt-[3.75rem]">
      <button class="btn btn-circle">
        <Icon name="mdi-close" class="text-2xl" @click="toggleDrawer" />
      </button>
    </div>
    <ul class="list">
      <li class="list-row block p-0" v-for="item in menu" :key="item.title">
        <NuxtLink
          :to="item.page"
          class="block font-semibold p-4"
          @click="toggleDrawer"
          >{{ item.title }}</NuxtLink
        >
      </li>
    </ul>
  </div>
  <div
    v-if="isDrawerOpen"
    aria-label="Cerrar menú"
    class="fixed cursor-pointer inset-0 z-10 bg-black/50 backdrop-blur-sm"
    @click="toggleDrawer"
  ></div>
</template>

<script setup lang="ts">
const { isDrawerOpen, toggleDrawer } = useDrawer()
const { menu } = useMenu()
</script>
