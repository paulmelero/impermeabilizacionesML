<template>

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
const waranteeValues = ref<WaranteeItem[]>([
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

// Computed properties
const isVertical = computed(() => {
  // For now, we'll use a simple window width check
  // You may need to adjust this based on your breakpoint system
  if (typeof window !== 'undefined') {
    return props.direction === 'vertical' || window.innerWidth < 960
  }
  return props.direction === 'vertical'
})
</script>
