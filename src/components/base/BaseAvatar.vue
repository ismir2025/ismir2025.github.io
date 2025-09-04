<template>
  <div
    :class="classes"
    class="base-avatar d-inline-flex"
  >
    <v-avatar
      v-if="outlined"
      :color="color || (isDark ? 'grey-darken-3' : 'grey-lighten-4')"
      :size="outlineSize"
      :style="styles"
      class="base-avatar--outlined position-absolute"
      style="opacity: .4;"
      border
    />

    <v-avatar
      :color="color || (isDark ? 'grey-darken-4' : 'white')"
      :size="size"
      class="base-avatar__avatar border"
      v-bind="$attrs"
    >
      <BaseIcon
        v-if="icon"
        :color="isDark ? 'white' : 'surface-variant'"
        :dark="dark"
        :size="size / 2"
      >
        {{ icon }}
      </BaseIcon>
    </v-avatar>
  </div>
</template>

<script setup>

import BaseIcon from '@/components/base/BaseIcon.vue'
import { defineProps,computed,ref} from 'vue';
import { useTheme } from 'vuetify';
  const theme = useTheme()

  const props = defineProps({
    color: String,
    dark: Boolean,
    icon: String,
    outlined: Boolean,
    size: {
      type: [Number, String],
      default: 56,
    },
  })

  const multiply = ref(6)

  const classes = computed(() => {
    return [props.outlined && 'base-avatar--outlined']
  })

  const isDark = computed(() => {
    return theme.current.value.dark || props.dark
  })

  const outlineSize = computed(() => {
    return Number(props.size) + (props.size / multiply.value)
  })

  const styles = computed(() => {
    const margin = props.size / (multiply.value * 2)
    const marginStyle = props.size >= 56 ? -margin : margin

    return {
      // Aligns the outline content with the content
      margin: `${marginStyle}px 0 0 ${marginStyle}px`,
    }
  })
</script>

<style lang="sass">
  // .base-avatar
  //   border-radius: 50%
  //   position: relative
  //   overflow: visible

  //   &__outline
  //     position: absolute !important
  //     left: 0
  //     top: 0

  //   &.base-avatar--outlined .base-avatar__avatar
  //     border-width: thin
  //     border-style: solid

  // .theme--light .base-avatar--outlined .base-avatar__avatar
  //   border-color: rgba(0, 0, 0, .12) !important

  // .theme--dark .base-avatar--outlined .base-avatar__avatar
  //   border-color: rgba(255, 255, 255, .12) !important
</style>
