<script>
export default {
  name: 'PrimaryButton',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
}
</script>

<template>
  <button :class="`btn btn-${color}`" v-bind="[$attrs]">
    <slot>Pide tu presupuesto</slot>
  </button>
</template>
