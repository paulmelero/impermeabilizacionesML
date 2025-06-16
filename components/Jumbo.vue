<template>
  <div
    class="hero jumbo-image min-h-[40vh] md:min-h-[60vh] before:inset-0 before:absolute before:w-full before:h-full before:bg-cover before:bg-center before:bg-fixed after:absolute after:inset-0 before:z-0 after:z-0 z-0"
    :style="`--bg-image: ${bgImageResolved}`"
  >
    <section
      class="hero-content flex-col flex items-start w-full relative z-[2]"
    >
      <div class="container mx-auto">
        <h1 class="text-wrap font-bold text-[clamp(1.5rem,4vw,4rem)] mb-3">
          <div>Expertos en</div>
          <div>impermeabilizaciones</div>
        </h1>
        <h2 class="font-weight-light text-[clamp(1rem,2vw,1.25rem)] mb-8">
          Con más de <strong>30 años de experiencia</strong>
        </h2>
        <PrimaryButton />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    bgImageResolved() {
      const imgUrl = '/images/img3.jpg'
      return `url('${imgUrl}')`
    },
  },
}
</script>

<style scoped>
.jumbo-image {
  position: relative;
  &:before {
    background-color: #fff;
    background-image: var(--bg-image);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 150px 40%;
    background-attachment: fixed;
    @media (max-width: 767px) {
      background-size: 250%;
      background-position: center;
      background-attachment: fixed;
    }
  }
  &:after {
    background:
      linear-gradient(to top, transparent 30%, #fff),
      linear-gradient(to left, transparent, #fff),
      linear-gradient(to bottom, transparent 30%, #fff);
  }
}
</style>
