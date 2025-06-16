<template>
  <Container class="relative overflow-hidden bg-neutral">
    <div
      v-if="zones && zones.length"
      class="zones before:absolute before:inset-0 before:bg-cover before:bg-no-repeat after:absolute after:inset-0 before:z-0 after:z-0"
    >
      <div class="relative z-[1] p-12">
        <h2 class="text-4xl mb-12 text-pretty">
          <span class="inline-block">Trabajamos en toda</span>
          <span class="inline-block">
            <span class="hidden sm:inline">&nbsp;</span>el área de
            <strong>Barcelona</strong></span
          >
          <span class="inline-block">
            <span class="hidden sm:inline">&nbsp;</span>y parte de
            <strong>Tarragona</strong></span
          >
        </h2>
        <ul class="list-reset space-y-3 mb-12">
          <li v-for="(zone, index) in zones" :key="index">
            <p class="text-base-100">{{ zone }}</p>
          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import homeTexts from '~/content/static/home.json'

const { zones } = homeTexts
</script>

<style scoped>
.zones {
  &::before {
    background-image: url('~/assets/img/Mapa_comarcal_de_Catalunya.svg');
    background-size: 50%;
    background-position: 105% 130%;
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
