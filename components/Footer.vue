<template>
  <footer
    class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10"
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
    class="footer bg-neutral text-neutral-content border-base-300 border-t px-10 py-4"
  >
    <aside
      class="grid grid-cols-1 md:grid-cols-2 grid-flow-row place-items-stretch gap-4 w-full"
    >
      <p class="flex flex-col justify-center">
        <strong>{{ BRAND_NAME }} &copy;</strong>
        <span>{{ new Date().getFullYear() }}</span>
      </p>
      <NuxtImg
        src="/images/logobig.svg"
        width="130"
        class="footer-logo place-self-end"
      />
    </aside>
  </footer>
</template>

<script setup lang="ts">
const { menu } = useMenu()

const {
  public: { BRAND_NAME },
} = useRuntimeConfig()
</script>

<style scoped>
.footer-logo {
  mix-blend-mode: luminosity;
  filter: invert(1);
}
</style>
