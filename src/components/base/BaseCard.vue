<template>
  <div>
    <v-card
      :height="height"
      :width="width"
      class="mb-4"
      flat
      tile
      v-bind="$attrs"
      @click="$emit('click')"
    >
      <slot />
    </v-card>

    <BaseTitle
      v-if="title"
      :space="0"
      :title="title"
      class="text-uppercase"
      size="text-subtitle-1"
    />

    <BaseSubtitle
      v-if="subtitle"
      :title="subtitle"
    />
  </div>
</template>

<script setup>
  defineOptions({
    inheritAttrs: false,
  })

  defineProps({
    height: [Number, String],
    width: [Number, String],
    subtitle: String,
    title: String,
  })
</script>
