<template>
  <slot></slot>
</template>

<script>
export default {
  computed: {
    bgImageResolved() {
      const imgUrl = this.$img('/images/img3.jpg')
      return `url('${imgUrl}')`
    },
  },
}
</script>
