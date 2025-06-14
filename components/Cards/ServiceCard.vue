<template>
  <div class="card bg-base-100 shadow-sm h-full">
    <figure>
      <NuxtImg
        :src="service.thumbnail"
        :alt="service.title"
        class="object-cover h-64 w-full"
        height="256"
      />
    </figure>
    <div class="card-body bg-base-100 text-base-content">
      <h2 class="card-title">{{ service.title }}</h2>
      <p class="mb-4">{{ trim(service.short_text, 300) }}</p>
      <div class="card-actions justify-end">
        <NuxtLink
          v-if="!props.staticCard"
          :to="link"
          class="btn btn-secondary btn-outline"
        >
          Leer más
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define Service interface based on the JSDoc typedef
interface Service {
  title: string
  short_text: string
  slug?: string
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
  service: () => ({}) as Service,
  staticCard: false,
})

// Computed properties
const link = computed(() => {
  return '/servicios/' + props.service.slug
})

const trim = (text: string, length: number) => {
  if (!text) return ''
  return text.length > length
    ? text.slice(0, text.lastIndexOf(' ', length)) + '…'
    : text
}
</script>
