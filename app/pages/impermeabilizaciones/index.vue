<script setup lang="ts">
definePageMeta({
  middleware: (to) => {
    if (!to.params.place) {
      return navigateTo('/')
    }
  },
})
</script>

<template>
  <div>
    <h1>Impermeabilizaciones</h1>
  </div>
</template>
