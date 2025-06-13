<template>
  <div>
    <Jumbo />
    <!-- -->
    <Container style="min-height: 50vh" class="mt-8 mb-4">
      <Warantee direction="horizontal" :fill="false" />
    </Container>

    <!-- -->
    <div class="secondary white--text mb-16 overflow-hidden">
      <!-- <v-container class="py-12">
        <h2 class="text-center font-bold mb-12 text-h4 text-sm-h3">
          Impermeabilización de terrazas y cubiertas
        </h2>
        <v-row>
          <v-col v-for="service in ecoServices" :key="service.title">
            <CardsEcoCard :service="service" flat class="mb-10" />
          </v-col>
        </v-row>
        <v-row class="mb-10">
          <v-col
            v-for="service of services"
            :key="service.title"
            cols="12"
            sm="6"
            md="4"
            class="mb-10"
          >
            <CardsServiceCard
              :key="service.title"
              :service="service"
              color="white"
            />
          </v-col>
        </v-row>
      </v-container> -->
    </div>
    <!-- -->
    <!-- <v-container class="other-services mb-16">
      <h2 class="text-center mb-10 text-h4">Más servicios</h2>
      <v-row>
        <v-col
          v-for="service of moreServices"
          :key="service.title"
          cols="12"
          sm="6"
          md="4"
        >
          <CardsServiceCard class="mb-10" :service="service" static-card />
        </v-col>
      </v-row>
    </v-container> -->
    <!-- -->
    <Zones class="pt-12" />
  </div>
</template>

<script setup lang="ts">
// import { getMoreServices, getServices, getEcoServices } from '~/core/getContent'

const structuredData = {
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
}

// export default {
//   asyncData() {
//     return {
//       services: getServices(),
//       ecoServices: getEcoServices(),
//       moreServices: getMoreServices(),
//     }
//   },
//   head() {
//     return {
//       __dangerouslyDisableSanitizers: ['script'],
//       script: [
//         {
//           innerHTML: JSON.stringify(structuredData),
//           type: 'application/ld+json',
//         },
//       ],
//     }
//   },
// }
</script>
