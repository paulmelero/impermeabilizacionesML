<template>
  <form
    :name="formName"
    action="/gracias"
    method="post"
    data-netlify
    data-netlify-honeypot="bot-field"
  >
    <p class="hb" aria-hidden="true">
      <label for="form-name"
        >Por favor, no rellenes este campo si eres una persona. Si este campo
        tiene algún valor, no se enviará el formulario. Es una manera de evitar
        spam.<input name="bot-field"
      /></label>
    </p>
    <input id="form-name" type="hidden" name="form-name" :value="formName" />
    <input
      id="phone"
      label="Teléfono"
      required
      type="tel"
      name="phone"
      input-mode="decimal"
      prepend-icon="mdi-phone"
      :rules="[rules.required]"
    ></input>
    <input
      id="email"
      label="e-mail (opcional)"
      required
      type="email"
      name="email"
      prepend-icon="mdi-email"
    ></input>
    <input
      id="place"
      label="Localidad"
      auto-complete="home city"
      required
      name="place"
      prepend-icon="mdi-map-marker"
      :rules="[rules.required]"
    ></input>
    <textarea
      :rules="[rules.notSpammy]"
      name="comments"
      label="Comentarios (opcional)"
      prepend-icon="mdi-comment"
    ></textarea>
    <button type="submit" class="w-[90%] ml-9"
      ><i class="pr-5">mdi-email-fast</i> Enviar</button
    >
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formName: 'Contact',
      rules: {
        required: (value) => !!value || 'Este campo es obligatorio.',
        notSpammy: (value) =>
          !String(value).match(/\bporn\b|\bxxx\b|\bsexy?\b/) ||
          `Incluye palabras malsonantes`,
      },
    }
  },
}
</script>
