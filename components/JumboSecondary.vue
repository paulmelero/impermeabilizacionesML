<template>
  <div class="hero jumbo" :style="{ '--bg-image': bgImageResolved }">
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumboSecondary',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    minHeight: {
      type: String,
      default: '50vh',
    },
    bgImage: {
      type: String,
      default: '~assets/img/bcn.jpg',
    },
  },
  computed: {
    bgImageResolved() {
      const imgUrl = this.$img(this.bgImage)
      return `url('${imgUrl}')`
    },
  },
}
</script>

<style scoped>
.jumbo {
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &::before {
    background-color: #fff;
    background-image: var(--bg-image);
    background-position: center;
    background-size: cover;
    @media (min-width: 1200px) {
      background-position-y: -128px;
    }
    z-index: 0;
  }
  &::after {
    background: linear-gradient(to top, transparent, #fff),
      linear-gradient(to left, transparent, #fff),
      linear-gradient(to bottom, transparent 60%, #fff),
      rgba(255, 255, 255, 0.6);
    z-index: 0;
  }
}
</style>
