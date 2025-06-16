<template>
  <Head>
    <Meta
      :titleTemplate="`%s - ${BRAND_NAME} - Expertos en impermeabilización de cubiertas y terrazas.`"
    />
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { BRAND_NAME } = useRuntimeConfig().public

useHead({
  htmlAttrs: {
    lang: 'es',
    ['data-theme']: 'imper', // Default theme
  },
})
</script>
