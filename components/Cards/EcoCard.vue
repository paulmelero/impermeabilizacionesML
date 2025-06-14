<template>
  <div
    class="card card-side bg-base-100 shadow-md focus-within:shadow-lg has-[.btn:hover]:shadow-lg transition-shadow duration-200 ease-in"
  >
    <figure class="!hidden md:!flex">
      <CardsCardImage
        :src="service.thumbnail1"
        :alt="service.title"
        height="400"
        width="250"
      />
    </figure>
    <div
      class="card-body md:max-w-2/3 bg-base-100 text-base-content rounded-sm md:rounded-none"
    >
      <h2 class="card-title justify-center w-full uppercase text-green-800">
        <Icon name="mdi-recycle" class="pr-2" />
        <span>Sistema Sostenible con el Medio Ambiente</span>
      </h2>
      <h3 class="font-bold">{{ service.title }}</h3>
      <p class="text-balance mb-8">{{ service.short_text }}</p>
      <div class="card-actions justify-end">
        <PrimaryButton class="btn-outline px-6" to="/servicios/cubiertas-eco"
          >Leer más</PrimaryButton
        >
      </div>
    </div>
    <figure class="!hidden md:!flex">
      <CardsCardImage
        v-if="service.thumbnail2"
        class="rounded-0"
        :src="service.thumbnail2"
        height="400"
        width="250"
      />
    </figure>
  </div>
</template>

<script setup lang="ts">
import type { EcoService } from '~/types'

// Define props interface
interface Props {
  service?: EcoService
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
  service: () => ({}) as EcoService,
})

// Computed properties
const link = computed(() => {
  return { path: '/servicios/' + props.service.slug, query: { eco: true } }
})
</script>
