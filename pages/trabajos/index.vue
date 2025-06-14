<template>
  <div>
    <JumboSecondary
      title="Trabajos"
      subtitle="Últimos trabajos realizados"
      min-height="40vh"
    >
    </JumboSecondary>

    <Container class="my-32 space-y-24">
      <WorksCard v-for="(work, i) of works" v-bind="work" :key="i" />
    </Container>
  </div>
</template>

<script setup lang="ts">
const { data: works } = await useAsyncData(async () => {
  const works = await queryCollection('works').all()

  return works
})
</script>
