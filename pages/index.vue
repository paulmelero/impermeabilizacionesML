<template>
  <div>
    <Jumbo />

    <Container class="my-8 min-h-[50vh]">
      <Warantee direction="horizontal" :fill="false" />
    </Container>

    <div class="mb-16 overflow-hidden">
      <Container class="mb-16">
        <div class="text-center">
          <h2 class="text-center font-bold mb-12 text-3xl md:text-4xl">
            Impermeabilización de terrazas y cubiertas
          </h2>
          <div class="hero">
            <div class="hero-content">
              <div
                v-for="service in data?.ecoServices ?? []"
                :key="service.title"
              >
                <CardsEcoCard :service="service" flat class="mb-10" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <div class="mb-16 overflow-hidden">
      <Container class="mb-16">
        <h2 class="text-center font-bold mb-12 text-3xl md:text-4xl">
          Más servicios
        </h2>
        <section
          class="grid gap-8 grid-cols-[repeat(auto-fit,minmax(min-content,300px))] items-stretch justify-items-start"
        >
          <div
            v-for="service in data?.moreServices ?? []"
            :key="service.title"
            class="mx-auto w-full max-w-xs h-full flex flex-col items-stretch"
          >
            <CardsServiceCard :service="service" />
          </div>
        </section>
      </Container>
    </div>

    <Zones />
  </div>
</template>

<script setup lang="ts">
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cubelles',
    addressRegion: 'Catalunya',
    postalCode: '08880',
    streetAddress: 'Passeig Vilanova, 46',
  },
  name: 'Impermeabilizaciones LM',
  openingHours: ['Mo-Fr 08:00-19:00'],
  telephone: '605 94 01 67',
  url: 'https://impermeabilizacionesLM.com',
  description:
    'Expertos en impermeabilizaciones con más de 30 años de experiencia. Trabajamos en toda el área de Barcelona y parte de Tarragona.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Impermeabilización',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Impermeabilización de terrazas y cubiertas',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Impermeabilizaciones con bicapa autoprotegida (con y sin aislamiento)',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Impermeabilizaciones con bicapa de acabado cerámico',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Impermeabilizaciones con pintura',
            },
          },
        ],
      },
    ],
  },
})

const { data } = await useAsyncData(async () => {
  return {
    ecoServices: await queryCollection('eco_services').all(),
    moreServices: await queryCollection('more_services').all(),
  }
})
</script>
