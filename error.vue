<template>
  <Container class="text-center mt-10">
    <h1 v-if="error?.statusCode === 404" class="text-h2 mb-10 text-secondary">
      Página no encontrada
    </h1>
    <h1 v-else class="text-h2 mb-10 text-secondary">
      Error {{ error?.statusCode }} :/
    </h1>
    <nuxt-link class="btn btn-primary" to="/">
      Ir a la página principal
    </nuxt-link>
  </Container>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

// const handleError = () => clearError({ redirect: '/' })
</script>
