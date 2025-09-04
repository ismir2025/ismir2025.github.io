<template>
  <BaseHeading v-bind="props" />
</template>

<script setup>
import BaseHeading from '@/components/base/BaseHeading.vue'

import { defineProps } from 'vue';
  const props = defineProps({
    size: {
      type: String,
      default: 'text-h5',
    },
    sizeMobile: {
      type: String,
      default: 'text-h6',
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
