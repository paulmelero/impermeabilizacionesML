<template>
  <div>
    <NuxtImg :src="service?.thumbnail" max-height="500" class="reserve-500" />
    <Container
      class="-mt-24 mx-auto bg-base-100 text-base-content pt-12 relative z-1"
    >
      <p v-if="isEco" class="uppercase text-green-800 font-bold mb-6">
        <Icon class="pr-2 text-green" name="mdi-recycle" />
        <span>Sistema Sostenible con el Medio Ambiente</span>
      </p>
      <h1 class="font-bold md:text-2xl lg:text-3xl text-lg mb-4 md:px-5">
        {{ service?.title }}
      </h1>
      <!-- <div class="mt-10 md:px-5" v-html="body"></div> -->
      <ContentRenderer v-if="service" class="mt-10 md:px-5" :value="service" />
    </Container>
    <Container class="mt-12">
      <div class="divider"></div>
      <div class="text-center">
        <PrimaryButton to="/servicios" class="mx-auto"
          >Volver a servicios</PrimaryButton
        >
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
const { params, query } = useRoute()

const isEco = computed(() => {
  return query.eco || query.eco === 'true'
})

const { data: service } = await useAsyncData('service', () =>
  queryCollection('works').where('slug', 'LIKE', params.slug).first(),
)
</script>

<style scoped>
.reserve-500 {
  min-height: 500px;
}
:deep(:where(h2, h3, h4, h5, h6)) {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
