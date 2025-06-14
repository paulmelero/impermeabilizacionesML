<template>
  <div>
    <Jumbo />

    <Container class="my-8 min-h-[50vh]">
      <Warantee direction="horizontal" :fill="false" />
    </Container>

    <ServicesList />

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
</script>
