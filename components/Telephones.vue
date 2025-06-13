<template>
  <div
    class="tel flex"
    :class="{
      horizontal: direction === 'horizontal',
      'vertical flex-column': direction === 'vertical',
    }"
  >
    <span v-for="(tel, index) of telephones" :key="tel">
      <nuxt-link
        v-bind="buttonProps"
        :href="`tel:+34 ${tel}`"
        class="py-2 px-4"
        :class="{
          'mb-5': direction === 'vertical' && index !== telephones.length - 1,
          'ml-3': direction === 'horizontal' && index !== 0,
        }"
        ><Icon class="mr-2" name="mdi-phone" /> {{ tel }}</nuxt-link
      ></span
    >
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    direction?: 'horizontal' | 'vertical'
    buttonProps?: Record<string, any>
  }>(),
  {
    direction: 'horizontal',
    buttonProps: () => ({
      class: 'btn btn-secondary',
    }),
  }
)

// Reactive data
const telephones = ['605 94 01 67']
</script>
