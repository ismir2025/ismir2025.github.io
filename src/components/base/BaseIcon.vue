<template>
  <v-icon
    :size="size"
    v-bind="$attrs"
  >
    <slot />
  </v-icon>
</template>

<script setup>
import { defineProps} from 'vue';
  defineProps({
    size: {
      type: [Number, String],
      default: 56,
    },
  })
</script>
