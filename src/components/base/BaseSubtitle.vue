<template>
  <BaseHeading v-bind="props" />
</template>

<script setup>
import BaseHeading from '@/components/base/BaseHeading.vue'
import { defineProps} from 'vue';
  const props = defineProps({
    size: {
      type: String,
      default: 'text-body-2',
    },
    mobileSize: {
      type: String,
      default: 'text-body-1',
    },
    tag: {
      type: String,
      default: 'div',
    },
    weight: {
      type: [Number, String],
      default: 'regular',
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
    color: String,
  })
</script>
