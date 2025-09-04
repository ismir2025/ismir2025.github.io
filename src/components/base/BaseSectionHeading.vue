<template>
  <div
    :class="classes"
    class="base-section-heading"
  >
    <BaseAvatar
      v-if="icon"
      :color="color"
      :icon="icon"
      :outlined="outlined"
      :size="size"
      class="mb-4"
      dark
    />
    
    <BaseSubtitle
      v-if="subtitle"
      :title="subtitle"
      space="1"
      tag="h2"
    />

    <BaseSubheading
      v-if="title"
      :align="align"
      :title="title"
      class="text-uppercase"
      space="2"
    />

    <BaseDivider :color="color" align="center" />

    <BaseBody
      v-if="$slots.default || text"
      align="center"
      class="mx-auto"
      max-width="700"
    >
      <slot v-if="$slots.default" />

      <template v-else>
        {{ text }}
      </template>
    </BaseBody>
  </div>
</template>

<script setup>
import { computed,defineProps } from 'vue'; // Vue Composition API functions

import BaseBody from '@/components/base/BaseBody.vue'
import BaseDivider from '@/components/base/BaseDivider.vue'
import BaseSubheading from '@/components/base/BaseSubheading.vue'
import BaseSubtitle from '@/components/base/BaseSubtitle.vue'
import BaseAvatar from '@/components/base/BaseAvatar.vue'

  const props = defineProps({
    align: {
      type: String,
      default: 'center',
    },
    color: {
      type: String,
      default: 'black',
    },
    icon: String,
    outlined: Boolean,
    space: {
      type: [Number, String],
      default: 12,
    },
    subtitle: String,
    text: String,
    title: String,
    size: {
      type: [Number, String],
      default: 64,
    },
  })

  const classes = computed(() => {
    return [
      `text-${props.align}`,
      `mb-${props.space}`,
    ]
  })
</script>
