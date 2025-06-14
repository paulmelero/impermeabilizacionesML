<template>
  <div>
    <JumboSecondary
      :title="title"
      subtitle="Pídenos presupuesto sin compromiso. Llámanos para resolver tus dudas."
    >
      <div class="text-center">
        <h3 class="mb-6">Teléfonos y WhatsApp</h3>
        <Telephones
          direction="vertical"
          :button-props="{ color: 'info', large: true }"
        />
      </div>

      <!-- <Container class="text-center mt-10">
        <h3 class="mb-6">Redes Sociales</h3>
        <ul class="list-reset pl-0">
          <li>
            <button
              color="secondary"
              href="https://www.instagram.com/impermeabilizaciones_lm/"
              target="_blank"
            >
              <Icon name="mdi-instagram" class="mr-2"></Icon> Instagram
            </button>
          </li>
        </ul>
      </Container> -->
    </JumboSecondary>

    <Container class="pb-16 mb-16">
      <!-- <v-row justify="center">
        <v-col class="first-col" cols="12" sm="8" md="6">
          <Warantee />
        </v-col>
        <v-col cols="12" sm="8" md="6">
          <h4 class="mb-4 hext-2xl mt-10 mt-md-0">
            <span class="hidden-sm-and-down">O </span>Escríbenos
          </h4>
          <p class="mb-8">
            <span>Y te contactaremos lo antes posible!</span>
          </p>
          <ContactForm />
        </v-col>
      </v-row> -->
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
.first-col {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    right: 10%;
    width: 80%;
    height: 1px;
    background-color: #e9e9e9;
  }
  @media (min-width: 1200px) {
    &:after {
      content: '';
      top: 10%;
      right: 5%;
      width: 1px;
      height: 80%;
    }
  }
}
</style>
