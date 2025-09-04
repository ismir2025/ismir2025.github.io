<template>
  <div :class="classes">
    <BaseAvatar
      v-if="icon"
      :color="dark ? 'primary' : undefined"
      :dark="dark"
      :icon="icon"
      :outlined="outlined"
      :size="size"
      class="mb-3 align-self-start"
    />

    <div :class="`${horizontal && 'ml-6'} `">
      <BaseTitle
        :align="align"
        :title="title"
        class="text-uppercase"
        space="3"
      />

      <BaseBody
        v-if="html || text"
        :html="html"
        :space="horizontal ? 0 : undefined"
        :text="text"
        align="left"
        class="mx-auto"
        max-width="700"
      />
    </div>
  </div>
</template>

<script setup>
import BaseAvatar from '@/components/base/BaseAvatar.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseBody from '@/components/base/BaseBody.vue'
import { defineProps,computed} from 'vue';
  const props = defineProps({
    align: {
      type: String,
      default: 'left',
    },
    color: {
      type: String,
      default: 'primary',
    },
    dark: Boolean,
    horizontal: Boolean,
    icon: String,
    outlined: {
      type: Boolean,
      default: true,
    },
    space: {
      type: [Number, String],
      default: 8,
    },
    size: {
      type: [Number, String],
      default: 72,
    },
    text: String,
    html: String,
    title: String,
  })

  const classes = computed(() => {
    const _classes = [
      `mb-${props.space}`,
    ]

    if (props.horizontal) {
      _classes.push('d-flex')

      if (!props.text) {
        _classes.push('align-center')
      }
    }

    return _classes
  })
</script>
