<template>
  <div>
    <JumboSecondary title="Servicios" :subtitle="subtitle" min-height="40vh" />

    <ServicesList :flat="true" class="px-16" />
  </div>
</template>

<script setup lang="ts">
import { subtitle } from '~/content/static/services/page_texts.json'
</script>
