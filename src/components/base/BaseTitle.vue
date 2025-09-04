<template>
  <BaseHeading v-bind="props" />
</template>

<script setup>
import BaseHeading from '@/components/base/BaseHeading.vue'
  import { defineProps } from 'vue'; // Vue Composition API functions
  const props = defineProps({
    size: {
      type: String,
      default: 'text-h6',
    },
    mobileSize: {
      type: String,
      default: 'text-subtitle-1',
    },
    tag: {
      type: String,
      default: 'h3',
    },
    weight: {
      type: String,
      default: 'bold',
    },
    title: String,
    space: {
      type: [Number, String],
      default: 4,
    },
    align: {
      type: String,
      default: 'left',
    },
  })
</script>
