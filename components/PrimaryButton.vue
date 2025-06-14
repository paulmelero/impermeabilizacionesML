<script setup lang="ts">
defineOptions({
  name: 'PrimaryButton',
})

defineProps<{
  to?: string
}>()

const attrs = useAttrs()
</script>

<template>
  <nuxt-link class="btn btn-secondary btn-lg" :to v-bind="[attrs]">
    <slot>Pide tu presupuesto</slot>
  </nuxt-link>
</template>
