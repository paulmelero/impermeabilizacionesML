<template>
  <div>
    <JumboSecondary
      title="Trabajos"
      subtitle="Últimos trabajos realizados"
      min-height="10vh"
    >
    </JumboSecondary>

    <Container>
      <!-- <WorksCard v-for="(work, i) of works" :key="i">
        <template #image>
          <CardsCardImage :src="work.thumbnail" width="300" height="300" />
        </template>
        <template #title>
          {{ work.title }}
        </template>
        <template #subtitle>
          {{ work.service }}<span v-if="work.place">&nbsp;-&nbsp;</span
          ><PlaceLink v-if="work.place" :place="work.place"></PlaceLink>
        </template>
        <template #description>
          {{ work.seoDescription }}
        </template>
      </WorksCard> -->
    </Container>
  </div>
</template>

<script setup lang="ts">
import worksTexts from '~/content/static/works.json'
// import { getWorks } from '~/core/getContent'

// export default {
//   name: 'Trabajos',
//   layout: 'default',
//   data() {
//     return {
//       works: [],
//       subtitle: '',
//     }
//   },
//   created() {
//     this.works = Array.from(getWorks()).sort((a, b) => {
//       return new Date(b.date) - new Date(a.date)
//     })
//     this.subtitle = worksTexts.body
//   },
// }
</script>
