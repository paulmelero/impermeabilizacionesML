<template>
  <div>
    <!-- <JumboSecondary
      :title="'Impermeabilizaciones en ' + palceTitle"
      min-height="10vh"
    >
    </JumboSecondary> -->
    <Container class="pb-16 md:px-5">
      <div v-for="(work, i) of /* worksByPlace */ []" :key="i">
        <!-- <v-row
          justify="space-around"
          class="flex-nowrap flex-column flex-md-row"
        >
          <div class="flex pa-3">
            <v-avatar tile size="300">
              <CardsCardImage :src="work.thumbnail" width="300" height="300" />
            </v-avatar>
          </div>
          <v-col cols="12" sm="9" lg="10" xs="12" class="pl-md-5">
            <h3 class="text-h4 mb-2 primary--text">
              {{ work.title }}
            </h3>
            <h4 class="overline py-0 secondary--text mb-5">
              {{ work.service }}
            </h4>
            <p class="texts">{{ work.seoDescription }}</p></v-col
          >
        </v-row>
        <v-divider v-if="i !== worksByPlace.length - 1" dark></v-divider> -->
      </div>
    </Container>
    <Container class="mt-12">
      <!-- <v-divider class="mb-8" />
      <div class="text-center">
        <PrimaryButton exact outlined to="/trabajos" nuxt class="px-6 mx-auto"
          >Ver más trabajos</PrimaryButton
        >
      </div> -->
    </Container>
  </div>
</template>

<script>
// import { getWorks } from '~/core/getContent'
import { slugify } from '~/core/slugify'

// export default {
//   name: 'TrabajosEn',
//   layout: 'default',
//   asyncData({ params: { place } }) {
//     return { place }
//   },
//   data() {
//     return {
//       worksByPlace: [],
//       subtitle: '',
//     }
//   },
//   head() {
//     return {
//       title: `Impermeabilizaciones en ${this.palceTitle}`,
//       meta: [
//         {
//           hid: 'description',
//           name: 'description',
//           content: `Últimos trabajos realizados en ${this.palceTitle}. Impermeabilizaciones, cubiertas, pisos, paredes, techos, entre otros.`,
//         },
//       ],
//     }
//   },
//   computed: {
//     palceTitle() {
//       return this.worksByPlace[0]?.place || ''
//     },
//   },
//   created() {
//     this.worksByPlace = Array.from(getWorks())
//       .sort((a, b) => {
//         return new Date(b.date) - new Date(a.date)
//       })
//       .filter((work) => {
//         return slugify(work.place) === this.place
//       })
//   },
// }
</script>
