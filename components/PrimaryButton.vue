<script setup lang="ts">
defineOptions({
  name: 'PrimaryButton',
})
</script>

<template>
  <button class="btn btn-primary btn-large" v-bind="[$attrs]">
    <slot>Pide tu presupuesto</slot>
  </button>
</template>
