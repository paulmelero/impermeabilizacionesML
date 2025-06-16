<template>
  <div>
    <JumboSecondary
      title="Gracias"
      subtitle="Te contactaremos lo antes posible"
      min-height="80vh"
    >
      <div class="text-center">
        <nuxt-link to="/" class="btn btn-secondary"
          >Volver a la página principal</nuxt-link
        >
      </div>
    </JumboSecondary>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Gracias',
})

definePageMeta({
  layout: 'landing',
})
</script>
