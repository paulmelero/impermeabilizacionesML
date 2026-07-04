<template>
  <nuxt-img
    loading="lazy"
    format="webp"
    quality="80"
    sizes="70vw md:400px"
    v-bind="$attrs"
    :src="src"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>
