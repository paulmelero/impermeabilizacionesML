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
  staticCard?: boolean // no links
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
  service: () => ({} as Service),
  staticCard: false,
})

// Computed properties
const link = computed(() => {
  return '/servicios/' + props.service.slug
})
</script>
