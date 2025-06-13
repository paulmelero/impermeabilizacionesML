<template>

</template>

<script setup lang="ts">
// Define Service interface based on the JSDoc typedef
interface Service {
  title: string
  short_text: string
  slug: string
  thumbnail: string
  long_text?: string
}

// Define props interface
interface Props {
  service?: Service
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
  service: () => ({} as Service),
})

// Computed properties
const link = computed(() => {
  return { path: '/servicios/' + props.service.slug, query: { eco: true } }
})
</script>
