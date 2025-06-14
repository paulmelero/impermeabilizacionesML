<template>
  <div class="navbar isolate bg-base-100 text-primary-content justify-end">
    <Telephones />
  </div>
  <div class="navbar justify-between bg-base-200 shadow-sm sticky top-0 z-10">
    <div class="flex-1 whitespace-nowrap">
      <nuxt-link to="/" class="btn btn-ghost text-xl">{{
        BRAND_NAME
      }}</nuxt-link>
    </div>
    <div class="navbar-end">
      <label class="btn btn-circle swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input v-model="isDrawerOpen" type="checkbox" />

        <!-- hamburger icon -->
        <svg
          class="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path
            d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
          />
        </svg>

        <!-- close icon -->
        <svg
          class="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
          />
        </svg>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDrawerOpen } = useDrawer()
const { BRAND_NAME } = useRuntimeConfig().public
</script>
