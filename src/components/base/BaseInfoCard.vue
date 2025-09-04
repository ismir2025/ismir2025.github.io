<template>
  <v-container class="pa-0">
    <v-row
      :justify="justify"
      no-gutters
    >
      <v-col
        v-if="icon"
        :class="`text-${align} mb-4`"
        cols="12"
      >
        <BaseIcon :color="color">
          {{ icon }}
        </BaseIcon>
      </v-col>

      <v-col
        v-if="title || subtitle"
        :cols="callout ? 9 : 12"
      >
        <BaseSubtitle
          v-if="subtitle"
          :align="align"
          :title="subtitle"
          space="1"
        />

        <BaseTitle
          :align="align"
          :title="title"
          class="text-uppercase"
          space="1"
        />

        <BaseDivider
          :align="align"
          :color="color"
          class="border-opacity-100"
        />

        <BaseBody
          v-if="text || $slots.default"
          :align="align"
          :text="text"
          space="6"
        >
          <slot />
        </BaseBody>
      </v-col>

      <v-col
        v-if="callout"
        cols="2"
      >
        <div
          class="text-h2 text-grey-lighten-4 font-weight-bold pr-8"
          v-text="callout"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseSubtitle from '@/components/base/BaseSubtitle.vue'
import BaseDivider from '@/components/base/BaseDivider.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseBody from '@/components/base/BaseBody.vue'
import { defineProps,defineOptions,computed} from 'vue';
  const props = defineProps({
    callout: String,
    color: {
      type: String,
      default: 'primary',
    },
    icon: String,
    subtitle: String,
    text: String,
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

  defineOptions({
    inheritAttrs: false,
  })

  const justify = computed(() => {
    switch (props.align) {
      case 'center': return 'center'
      case 'right': return 'end'
      default: return 'start'
    }
  })
</script>
