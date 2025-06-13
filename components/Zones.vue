<template>
  <div class="mt-10">
    <Container v-if="zones && zones.length" class="zones"> </Container>
  </div>
</template>

<script setup lang="ts">
import homeTexts from '~/content/static/home.json'

const { zones } = homeTexts
</script>

<style scoped>
.zones {
  position: relative;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
  &::before {
    background-image: url('~/assets/img/Mapa_comarcal_de_Catalunya.svg');
    background-size: 50%;
    background-position: 105% 130%;
    will-change: transform;
    transition: transform 0.5s;
    transform: rotateX(40deg);
    opacity: 0.3;
    @media (max-width: 1199px) {
      background-size: 80%;
      background-position: right bottom;
    }
  }
  &::after {
    background-image: linear-gradient(
      to top,
      transparent,
      rgba(255, 255, 255, 0.8)
    );
  }
}
</style>
