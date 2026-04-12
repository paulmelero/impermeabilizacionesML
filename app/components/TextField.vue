<template>
  <label class="input">
    <Icon v-if="prependIcon" :name="prependIcon" />
    <slot></slot>
    <input :type v-model="model" class="input input-lg" />
  </label>
</template>

<script setup lang="ts">
const model = defineModel<string>({
  default: '',
  type: String,
})

withDefaults(
  defineProps<{
    prependIcon: string
    type: string
  }>(),
  {
    prependIcon: '',
    type: 'text',
  }
)
</script>
