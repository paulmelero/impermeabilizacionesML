<template>
  <div class="card md:card-side bg-base-100">
    <figure
      class="md:min-w-1/3 md:max-w-1/3 md:w-1/3 h-50 md:min-h-100 overflow-hidden"
    >
      <NuxtImg :src="fixedThumbnail" :alt="title" class="object-cover w-full" />
    </figure>
    <div class="card-body">
      <h2 class="card-title font-bold text-2xl">{{ title }}</h2>
      <h3
        class="text-md font-semibold text-secondary flex gap-2 flex-row flex-wrap items-center tracking-wide mb-8"
      >
        <span class="uppercase">{{ service }}</span>
        <span v-if="!hidePlace" class="hidden md:inline">-</span>
        <span v-if="!hidePlace"><PlaceLink :place /></span>
      </h3>
      <p class="text-md text-balance">
        {{ seoDescription }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Work } from '~/types'

const props = defineProps<
  Work & {
    hidePlace?: boolean
  }
>()

// Remove the initial part of the path if it does
// not start with a /images until /images
const fixedThumbnail = computed(() => {
  return props.thumbnail.startsWith('/images')
    ? props.thumbnail
    : props.thumbnail.replace(/^.*?\/?images/, '/images')
})
</script>
