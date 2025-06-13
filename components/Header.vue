<template>
  <div class="navbar isolate bg-base-100 text-primary-content justify-end">
    <Telephones />
  </div>
  <div class="navbar justify-between bg-base-200 shadow-sm">
    <div class="flex-1 whitespace-nowrap">
      <nuxt-link to="/" class="btn btn-ghost text-xl">{{
        BRAND_NAME
      }}</nuxt-link>
    </div>
    <div class="navbar-end">
      <!-- Menu -->
    </div>
  </div>
</template>

<script setup lang="ts">
const { menu } = useMenu()
const { BRAND_NAME } = useRuntimeConfig().public
</script>
