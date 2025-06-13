<template>
  <div>
    <JumboSecondary title="Servicios" :subtitle="subtitle" min-height="10vh" />
    <!-- -->
    <!-- <v-container>
      <v-row>
        <v-col v-for="service in ecoServices" :key="service.title">
          <CardsEcoCard :service="service" flat class="mb-10" />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="service in services"
          :key="service.title"
          cols="12"
          sm="6"
          md="4"
        >
          <CardsServiceCard :service="service" flat class="mb-10" />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h3 class="text-h4 text-center font-bold mt-12 mb-6">Más Servicios</h3>
      <v-row class="pt-6 pb-16 mt-10">
        <v-col
          v-for="service in moreServices"
          :key="service.title"
          cols="12"
          sm="6"
          md="4"
        >
          <CardsServiceCard :service="service" flat static-card class="mb-10" />
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import servicesTexts from '~/content/static/services/page_texts.json'
import { getServices, getMoreServices, getEcoServices } from '~/core/getContent'

export default {
  name: 'Servicios',
  layout: 'default',
  asyncData() {
    return {
      services: getServices(),
      moreServices: getMoreServices(),
      ecoServices: getEcoServices(),
      body: servicesTexts.body,
      subtitle: servicesTexts.subtitle,
    }
  },
  data() {
    return {
      body: '',
      subtitle: '',
      services: [],
      moreServices: [],
    }
  },
}
</script>
