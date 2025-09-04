<template>
  <v-responsive
    :class="classes"
    class="base-divider"
    max-width="28"
    v-bind="$attrs"
  >
    <v-divider :color="color" class="border-opacity-100" />
  </v-responsive>
</template>

<script setup>
import { defineProps, computed } from 'vue'; // Vue Composition API functions
  const props = defineProps({
    color: {
      type: String,
      default: 'primary',
    },
    dense: Boolean,
    space: {
      type: [Number, String],
      default: 6,
    },
    align: {
      type: String,
      default: 'left',
    },
  })

  const margin = () => {
    switch (props.align) {
      case 'left': return 'mr-auto'
      case 'right': return 'ml-auto'
      default: return 'mx-auto'
    }
  }

  const classes = computed(() => {
    return [
      margin(),
      `mb-${props.space}`,
      props.dense && 'base-divider--dense',
    ]
  })

</script>

<style lang="sass">
.base-divider {
  .v-divider {
    border-width: 3px 0 0 0 !important;
  }

  &.base-divider--dense {
    .v-divider {
      border-width: 2px 0 0 0 !important;
    }
  }
}

</style>
