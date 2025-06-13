<template>
  <div class="navbar bg-base-100 text-primary-content justify-end">
    <Telephones />
  </div>
  <div class="navbar bg-base-200 shadow-sm">
    <div class="flex-1">
      <nuxt-link to="/" class="btn btn-ghost text-xl">{{
        BRAND_NAME
      }}</nuxt-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 gap-2 md:gap-4">
        <nuxt-link
          v-for="item in menu"
          :key="item.title"
          :to="item.page"
          class="btn btn-ghost border-0"
        >
          {{ item.title }}
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { menu } = useMenu()
const { BRAND_NAME } = useRuntimeConfig().public
</script>
