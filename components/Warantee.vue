<template>
  <ul
    v-if="waranteeValues && waranteeValues.length"
    class="list-reset flex flex-col"
    :class="{
      'md:flex-row gap-6': props.direction === 'horizontal',
    }"
  >
    <li
      v-for="(g, i) of waranteeValues"
      :key="i"
      class="md:max-w-[90%] mx-auto"
      :class="{
        'flex md:flex-col': props.direction === 'vertical',
      }"
    >
      <div
        class="container mx-auto"
        :class="{
          'text-center mb-8': props.direction === 'horizontal',
          'mr-3 mb-3': props.direction === 'vertical',
        }"
      >
        <span
          class="inline-grid place-items-center w-16 h-16 p-3 rounded-full border border-base-300 mb-4"
        >
          <Icon
            :name="g.icon"
            class="block text-3xl"
            :class="{
              'text-primary': props.fill,
              'text-secondary': !props.fill,
            }"
          />
        </span>
        <h3
          class="text-xl mb-3 font-bold"
          :class="{
            'text-center': props.direction === 'horizontal',
          }"
        >
          {{ g.title }}
        </h3>
      </div>
      <p class="mb-5 text-justify">{{ g.subtitle }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
// Define props interface
interface Props {
  direction?: string
  fill?: boolean
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
  direction: 'vertical',
  fill: true,
})

// Define warantee item type
interface WaranteeItem {
  title: string
  subtitle: string
  icon: string
}

// Reactive data
const waranteeValues = Object.freeze([
  {
    title: 'Garantía',
    subtitle:
      'Máxima calidad y seguridad en nuestros trabajos garantizados hasta 15 años según el sistema solicitado.',
    icon: 'mdi-license',
  },
  {
    title: 'Presupuesto sin compromiso',
    subtitle:
      'Realizamos presupuestos ajustados al valor de su problema con precios comprometidos al mercado encontrarás una empresa seria y dispuesta a ayudarte en todas tus necesidades. Con la mejor relación calidad-precio.',
    icon: 'mdi-clipboard-file',
  },
  {
    title: 'Atención al Cliente',
    subtitle:
      'Valoramos cada proyecto de forma independiente y orientamos al cliente para encontrar la mejor solución de impermeabilización.',
    icon: 'mdi-account-check',
  },
])

// No computed properties needed anymore - using Tailwind classes directly
</script>
