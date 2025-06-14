<template>
  <div>
    <div class="h-[500px] overflow-hidden w-[100dvw]">
      <NuxtImg
        :src="
          (service as EcoServicesCollectionItem)?.eco
            ? (service as EcoServicesCollectionItem).thumbnail1
            : (service as ServicesCollectionItem).thumbnail
        "
        max-height="500"
        class="h-[500px] block object-cover object-center mx-auto w-full"
      />
    </div>
    <Container
      class="-mt-24 mx-auto bg-base-100 text-base-content p-12 relative z-1"
    >
      <div v-if="isEco" class="uppercase text-green-800 font-bold mb-6">
        <h2
          class="flex justify-center items-center w-full uppercase text-green-800 gap-2"
        >
          <Icon name="mdi-recycle" />
          <span>Sistema Sostenible con el Medio Ambiente</span>
        </h2>
      </div>
      <h1
        class="font-bold text-center md:text-2xl lg:text-3xl text-lg mb-4 md:px-5"
      >
        {{ service?.title }}
      </h1>
      <MDC
        v-if="service && service.long_text"
        class="mt-10 md:px-5"
        :value="service.long_text"
      />
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
import type {
  EcoServicesCollectionItem,
  ServicesCollectionItem,
} from '@nuxt/content'

const { params } = useRoute()

const { data: service } = await useAsyncData('service', async () => {
  if (params.slug.includes('-eco')) {
    return queryCollection('eco_services')
      .where('slug', 'LIKE', params.slug)
      .first()
  }

  return queryCollection('services').where('slug', 'LIKE', params.slug).first()
})
</script>

<style scoped>
:deep(:where(h2, h3, h4, h5, h6)) {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
:deep(:where(p, ul, blockquote, li, hr)) {
  margin-bottom: 1rem;
}
</style>
