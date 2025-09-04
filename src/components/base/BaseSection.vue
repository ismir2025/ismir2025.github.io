<template>
  <v-sheet
    :style="styles"
    tile
  >
    <slot />
  </v-sheet>
</template>

<script setup>
  import { useDimension } from 'vuetify/lib/composables/dimensions'
  import { computed,defineProps } from 'vue'; // Vue Composition API functions
  import { useDisplay } from 'vuetify'; // Vuetify hooks

  const { dimensionStyles } = useDimension()
  const { mdAndUp } = useDisplay()

  const props = defineProps({
    space: {
      type: [Number, String],
      default: 96,
    },
  })

  const styles = computed(() => {
    const space = mdAndUp
      ? props.space
      : props.space / 2

    return {
      ...dimensionStyles,
      padding: `${space}px 0`,
    }
  })

</script>
