<template>
  <div>
    <JumboSecondary title="Servicios" :subtitle="subtitle" min-height="40vh" />

    <ServicesList :flat="true" />
  </div>
</template>

<script setup lang="ts">
import { subtitle } from '~/content/static/services/page_texts.json'
</script>
