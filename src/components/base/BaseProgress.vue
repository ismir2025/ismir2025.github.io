<template>
  <div class="mb-8">
    <BaseTitle
      :title="title"
      class="pl-2 text-uppercase"
      size="subtitle-2"
      space="2"
    />

    <v-progress-linear
      :color="color"
      :model-value="value"
      bg-color="black"
    />
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    value: [Number, String],
    color: {
      type: String,
      default: 'primary',
    },
  })
</script>
