<template>
  <div
    class="hero bg-cover bg-opacity-60"
    :style="{ backgroundImage: bgImageResolved, minHeight }"
  >
    <div class="hero-overlay"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content text-neutral-content text-center relative z-[1]">
      <div
        :class="{
          'max-w-md': !wide,
          'max-w-3xl mx-auto': wide,
        }"
      >
        <h1
          class="my-10 text-4xl md:text-5xl font-bold text-wrap text-ellipsis"
        >
          {{ title }}
        </h1>
        <p v-if="subtitle" class="mb-5 text-lg">{{ subtitle }}</p>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    wide?: boolean
    subtitle?: string
    minHeight?: string
    bgImage?: string
  }>(),
  {
    wide: false,
    minHeight: '50vh',
    bgImage: '/images/bcn.jpg',
    title: '',
    subtitle: '',
  },
)

const bgImageResolved = computed(() => {
  const imgUrl = props.bgImage
  return `url('${imgUrl}')`
})
</script>
