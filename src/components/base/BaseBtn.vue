<template>
  <v-btn
    :color="color"
    :min-width="minWidth"
    :tile="tile"
    :variant="outlined ? 'outlined' : text ? 'plain' : 'flat'"
    class="font-weight-bold no-opacity"
    size="x-large"
    v-bind="$attrs"
  >
    <slot />
  </v-btn>
</template>

<script setup>
import { defineProps } from 'vue';
  defineProps({
    color: {
      type: String,
      default: 'primary',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    minWidth: {
      type: [Number, String],
      default: 164,
    },
    tile: {
      type: Boolean,
      default: true,
    },
    text: {
      type: Boolean,
      default: false,
    },
  })
</script>
<style scoped>
.no-opacity {
  opacity: 1 !important; /* 투명도를 강제로 1로 설정 */
}
</style>