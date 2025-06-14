<template>
  <div>
    <JumboSecondary
      :title="title"
      subtitle="Pídenos presupuesto sin compromiso. Llámanos para resolver tus dudas."
      min-height="60vh"
    >
      <div class="text-center">
        <h3 class="text-2xl font-bold font-[Roboto,sans-serif] mb-6">
          Teléfonos y WhatsApp
        </h3>
        <Telephones
          direction="vertical"
          :button-props="{ class: 'btn-primary btn-lg' }"
        />
      </div>

      <Container class="text-center py-10 px-6 md:px-12">
        <h3 class="text-2xl font-bold font-[Roboto,sans-serif] mb-6">
          Redes Sociales
        </h3>
        <SocialNetworks />
      </Container>
    </JumboSecondary>

    <Container class="py-24 px-6 md:px-12">
      <div class="section grid gap-0 items-center justify-between">
        <Warantee />
        <div class="divider hidden md:flex md:divider-horizontal">O</div>
        <div class="py-12 md:py-0">
          <h2 class="text-center md:text-start text-4xl font-bold mb-6">
            Escríbenos
          </h2>
          <p class="mb-8">Y te contactaremos lo antes posible!</p>
          <ContactForm />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
const title = 'Contacto'

export default {
  name: title,
  layout: 'default',
  data() {
    return {
      title,
    }
  },
  head: {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contacto - Impermeabilizaciones en Barcelona',
      },
    ],
  },
}
</script>

<style scoped>
.section {
  grid-template-columns: 1;
  @media (min-width: 768px) {
    grid-template-columns: 1fr auto 1fr;
  }
}
</style>
