<template>
  <div>
    <JumboSecondary :title="placeTitle" min-height="40vh"> </JumboSecondary>
    <Container class="my-32 space-y-24">
      <div v-for="(work, i) of worksByPlace" :key="i" class="divide-y">
        <WorksCard v-bind="work" :hide-place="true" />
      </div>
    </Container>
    <Container class="mt-12">
      <div class="divider mb-8" />
      <div class="text-center">
        <PrimaryButton exact outlined to="/trabajos" nuxt class="px-6 mx-auto"
          >Ver más trabajos</PrimaryButton
        >
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { slugify } from '~/core/slugify'

const { params } = useRoute()

const { data: worksByPlace } = await useAsyncData('worksByPlace', async () =>
  Promise.resolve(
    (await queryCollection('works').all()).filter((work) => {
      return slugify(work.place) === params.place
    }),
  ),
)

const placeTitle = computed(() => {
  return worksByPlace.value?.[0]?.place
    ? `Impermeabilizaciones en ${worksByPlace.value[0].place}`
    : ''
})

defineOptions({
  name: 'TrabajosEn',
})

useHead({
  title: placeTitle.value,
  meta: [
    {
      name: 'description',
      content: `Últimos trabajos realizados en ${placeTitle.value}. Impermeabilizaciones, cubiertas, pisos, paredes, techos, entre otros.`,
    },
  ],
})
</script>
