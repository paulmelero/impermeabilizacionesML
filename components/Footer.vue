<template>
  <footer
    class="footer sm:footer-horizontal bg-base-200 text-base-content p-10"
  >
    <nav>
      <h6 class="footer-title">Enlaces</h6>
      <nuxt-link
        v-for="link in menu"
        :key="link.title"
        :to="link.page"
        class="link link-hover"
      >
        {{ link.title }}
      </nuxt-link>
    </nav>
    <nav>
      <h6 class="footer-title">Teléfono</h6>
      <Telephones />
    </nav>
    <nav>
      <h6 class="footer-title">Redes Sociales</h6>
      <SocialNetworks />
    </nav>
  </footer>
  <footer
    class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4"
  >
    <aside class="grid-flow-col items-center">
      <p>
        <strong>{{ BRAND_NAME }} &copy;</strong>
        <br />
        {{ new Date().getFullYear() }}
      </p>
    </aside>
    <nav class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <div aria-hidden="true">
          <NuxtImg src="/logobig.svg" height="80" class="footer-logo" />
        </div>
      </div>
    </nav>
  </footer>
</template>

<script setup lang="ts">
const { menu } = useMenu()

const {
  public: { BRAND_NAME },
} = useRuntimeConfig()
</script>
