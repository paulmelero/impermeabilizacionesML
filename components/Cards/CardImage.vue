<template>
  <nuxt-img loading="lazy" v-bind="$attrs" :src="src" />
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
