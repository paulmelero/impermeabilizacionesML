<template>
  <nuxt-link
    :to="placeLink"
    class="text-secondary underline uppercase hover:text-primary"
    >{{ place }}</nuxt-link
  >
</template>

<script lang="ts">
import { slugify } from '~/core/slugify'

export default {
  name: 'PlaceLink',
  props: {
    place: {
      type: String,
      required: true,
    },
  },
  computed: {
    placeLink() {
      return `/impermeabilizaciones/${slugify(this.place)}`
    },
  },
}
</script>
