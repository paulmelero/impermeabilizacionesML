<template>
  <div>
    <!-- <JumboSecondary class="text-left" :title="title" :subtitle="subtitle">
      <Container>
        <p class="texts px-5 px-sm-0" v-html="body || 'Texto'"></p>
      </Container>
    </JumboSecondary> -->

    <Container class="pb-16 mb-16">
      <Warantee />
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

<style lang="scss" scoped>
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
  @include onDesktop {
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
