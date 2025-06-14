<template>
  <div>
    <JumboSecondary
      class="mb-32"
      :title="title"
      :subtitle="subtitle"
      :wide="true"
    >
      <Container>
        <div class="py-12">
          <div
            class="bg-base-100 p-16 rounded-2xl border-base-300 text-base-content"
          >
            <p class="px-5 text-start" v-html="body || ''"></p>
          </div>
        </div>
      </Container>
    </JumboSecondary>

    <Container class="pb-16 mb-16">
      <Warantee />
    </Container>

    <Container class="pb-16 mb-16 text-center">
      <PrimaryButton />
    </Container>
  </div>
</template>

<script>
import aboutUsTexts from '~/content/static/aboutus.json'
const title = 'Quiénes somos'

export default {
  name: title,
  layout: 'default',
  data() {
    return {
      title,
      subtitle: '',
      body: '',
    }
  },
  head: {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Quienes somos - Impermeabilizaciones en todo el área de Barcelona y parte de Tarragona',
      },
    ],
  },
  created() {
    this.subtitle = aboutUsTexts.subtitle
    this.body = aboutUsTexts.body
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
