<template>
  <form
    :name="formName"
    action="/gracias"
    method="post"
    data-netlify
    data-netlify-honeypot="bot-field"
  >
    <p class="sr-only" aria-hidden="true">
      <label for="form-name"
        >Por favor, no rellenes este campo si eres una persona. Si este campo
        tiene algún valor, no se enviará el formulario. Es una manera de evitar
        spam.<input name="bot-field"
      /></label>
    </p>
    <input id="form-name" type="hidden" name="form-name" :value="formName" />
    <div
      v-for="field in formConfig"
      :key="field.id"
      class="flex gap-4 items-center mb-10 w-full"
    >
      <Icon :name="field.icon || 'mdi-textbox'" class="text-primary" />
      <label class="floating-label grow">
        <span>{{ field.label }}</span>
        <component
          :is="field.type === 'textarea' ? 'textarea' : 'input'"
          v-model="field.value"
          class="input-lg"
          :type="field.type"
          :name="field.name"
          :id="field.id"
          :inputmode="field.inputMode"
          :required="field.required"
          :class="[
            field.classes,
            {
              input: field.type !== 'textarea',
              textarea: field.type === 'textarea',
            },
          ]"
        />
      </label>
    </div>
    <button type="submit" class="btn btn-secondary btn-lg btn-block">
      <Icon class="pr-5" name="mdi-email-fast" /> Enviar
    </button>
  </form>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ContactForm',
})
const formName = 'Contact'
const rules = {
  required: (value: string) => !!value || 'Este campo es obligatorio.',
  notSpammy: (value: string) =>
    !String(value).match(/\bporn\b|\bxxx\b|\bsexy?\b/) ||
    `Incluye palabras malsonantes`,
}

const phone = ref('')
const email = ref('')
const place = ref('')
const comments = ref('')

const formConfig = [
  {
    icon: 'mdi-phone',
    id: 'phone',
    label: 'Teléfono',
    required: true,
    type: 'tel',
    name: 'phone',
    inputMode: 'decimal',
    rules: [rules.required],
    value: phone,
  },
  {
    icon: 'mdi-email',
    id: 'email',
    label: 'e-mail (opcional)',
    required: false,
    type: 'email',
    name: 'email',
    rules: [],
    value: email,
  },
  {
    icon: 'mdi-map-marker',
    id: 'place',
    label: 'Localidad',
    required: true,
    type: 'text',
    name: 'place',
    rules: [rules.required],
    value: place,
  },
  {
    icon: 'mdi-comment',
    id: 'comments',
    label: 'Comentarios (opcional)',
    required: false,
    type: 'textarea',
    name: 'comments',
    rules: [rules.notSpammy],
    classes: 'h-32',
    value: comments,
  },
]
</script>
