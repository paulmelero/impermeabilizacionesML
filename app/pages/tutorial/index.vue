<template>
  <div>
    <JumboSecondary class="text-left" :title="title">
      <Container>
        <form v-if="!confirmed" autocomplete="off" @submit="handleSubmit">
          <label class="input mb-8">
            <Icon name="mdi-lock" class="h-[1em] opacity-50" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              class="text-black"
              @click="showFormError = false"
              required
            />
          </label>
          <p v-if="showFormError" class="red--text font-weight-bold">
            Password equivocado
          </p>
          <PrimaryButton :to="undefined" type="submit">Confirmar</PrimaryButton>
        </form>
        <ContentRenderer
          v-else-if="tutorial"
          :value="tutorial"
          class="body-wrapper"
        />
      </Container>
    </JumboSecondary>
  </div>
</template>

<script setup lang="ts">
// Define page data
const title = 'Tutorial'

// Reactive data
const password = ref('')
const confirmed = ref(false)
const showFormError = ref(false)

useHead({
  title: title,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Tutorial' },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
})

// Methods
const handleSubmit = (e) => {
  e.preventDefault()
  const password = e.target.password.value
  if (password === 'enrique') {
    confirmed.value = true
  } else {
    showFormError.value = true
  }
}

const { data: tutorial } = await useAsyncData(async () => {
  return queryCollection('docs').first()
})
</script>

<style scoped>
#password {
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 2px;
}

:deep(:where(h2, h3, h4, h5, h6)) {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.body-wrapper :deep(img) {
  max-width: 100%;
  height: auto;
}
</style>
