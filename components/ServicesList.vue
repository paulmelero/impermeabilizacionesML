<template>
  <div :class="{ 'bg-secondary text-secondary-content': !flat }">
    <div class="p-16 overflow-hidden">
      <Container>
        <div class="text-center">
          <h2 class="text-center font-bold mb-12 text-3xl md:text-4xl">
            Impermeabilización de terrazas y cubiertas
          </h2>
          <div class="hero">
            <div class="hero-content px-0 md:px-2">
              <div
                v-for="service in data?.ecoServices ?? []"
                :key="service.title"
              >
                <CardsEcoCard :service="service" class="mb-10" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <div class="px-16 pb-16 overflow-hidden">
      <Container class="mb-16">
        <section
          class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(min-content,300px))] items-stretch justify-items-start justify-center"
        >
          <div
            v-for="service in data?.services ?? []"
            :key="service.title"
            class="mx-auto w-full max-w-xs h-full flex flex-col items-stretch"
          >
            <CardsServiceCard :service="service" />
          </div>
        </section>
      </Container>
    </div>
  </div>

  <div class="py-16 overflow-hidden">
    <Container class="mb-16">
      <h2 class="text-center font-bold mb-12 text-3xl md:text-4xl">
        Más servicios
      </h2>
      <section
        class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(min-content,300px))] items-stretch justify-items-start justify-center"
      >
        <div
          v-for="service in data?.moreServices ?? []"
          :key="service.title"
          class="mx-auto w-full max-w-xs h-full flex flex-col items-stretch"
        >
          <CardsServiceCard :service="service" :static-card="true" />
        </div>
      </section>
    </Container>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    flat?: boolean
  }>(),
  {
    flat: false,
  },
)

const { data } = await useAsyncData(async () => {
  const services = await queryCollection('services')
    .where('title', 'NOT LIKE', 'pagetexts')
    .all()

  return {
    ecoServices: await queryCollection('eco_services').all(),
    services,
    moreServices: await queryCollection('more_services').all(),
  }
})
</script>
