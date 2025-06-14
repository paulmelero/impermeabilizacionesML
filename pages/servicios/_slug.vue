<template>
  <div>
    <NuxtImg :src="image" max-height="500" class="reserve-500" />
    <Container class="mt-n16 mx-auto white pt-12 relative z-1">
      <p
        v-if="isEco"
        class="overline green--text text--darken-3 font-weight-bold mb-6"
      >
        <Icon class="pr-2 text-green" name="mdi-recycle" />
        <span>Sistema Sostenible con el Medio Ambiente</span>
      </p>
      <h1
        class="font-weight-bold text-md-h3 text-sm-h3 text-xs-h5 mb-4 px-5 px-sm-0"
      >
        {{ service.title }}
      </h1>
      <div class="texts mt-10 px-5 px-sm-0" v-html="body"></div>
    </Container>
    <Container class="mt-12">
      <!-- <v-divider class="mb-8" /> -->
      <div class="text-center">
        <PrimaryButton exact outlined to="/servicios" nuxt class="px-6 mx-auto"
          >Volver a servicios</PrimaryButton
        >
      </div>
    </Container>
  </div>
</template>

<script>
// export default {
//   name: 'ServiciosDynamic',
//   layout: 'default',
//   scrollToTop: true,
//   async asyncData({ params, query, error }) {
//     let service
//     try {
//       service = await import(
//         `~/content/static/${query.eco ? 'eco_services' : 'services'}/${
//           params.slug
//         }.json`
//       ).then((m) => m.default)
//     } catch (e) {
//       // eslint-disable-next-line no-console
//       console.log(e)
//       return error({ statusCode: 404, message: 'service not found' })
//     }
//     return {
//       service,
//       body: snarkdown(service.long_text).replace(
//         // eslint-disable-next-line
//         new RegExp('<br />', 'g'),
//         '<br /><br />'
//       ),
//       isEco: !!query.eco,
//     }
//   },
//   head() {
//     return {
//       title: this.service.title,
//       meta: [
//         {
//           hid: 'description',
//           name: 'description',
//           content: this.service.short_text,
//         },
//       ],
//     }
//   },
//   computed: {
//     image() {
//       return this.isEco ? this.service.thumbnail1 : this.service.thumbnail
//     },
//   },
// }
</script>

<style scoped>
.reserve-500 {
  min-height: 500px;
}
:deep :where(h2, h3, h4, h5, h6) {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
