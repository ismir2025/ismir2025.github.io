<template>
  <component
    :is="tag"
    v-if="title"
    :class="classes"
  >
    <slot />{{ title }}
  </component>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useDisplay } from 'vuetify';
  const display = useDisplay()

  const props = defineProps({
    align: {
      type: String,
      default: 'left',
    },
    dense: {
      type: Boolean,
    },
    size: {
      type: String,
      default: 'text-h3',
    },
    space: {
      type: [Number, String],
      default: 4,
    },
    mobileSize: {
      type: String,
      default: 'text-h4',
    },
    mobileBreakpoint: {
      type: [Number, String],
      default: 768,
    },
    tag: {
      type: String,
      default: 'h1',
    },
    title: String,
    weight: {
      type: String,
      default: 'black',
    },
    color: String,
  })

  const classes = computed(() => {
    return [
      fontSize.value,
      `font-weight-${props.weight}`,
      `mb-${props.space}`,
      `text-${props.align}`,
      props.color && `text-${props.color}`,
    ]
  })
  const fontSize = computed(() => {
    return display.width.value >= props.mobileBreakpoint
      ? props.size
      : props.mobileSize
  })
</script>
