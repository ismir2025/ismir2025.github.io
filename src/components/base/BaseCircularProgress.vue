<template>
  <div class="d-inline-block mx-auto">
    <v-progress-circular
      :model-value="value"
      class="mb-4"
      color="primary"
      rotate="-90"
      size="88"
      width="4"
    >
      <span class="text-h6 font-weight-bold">
        <span
          class="text--primary"
          v-text="value"
        />
        <span class="text-accent-lighten-4 font-weight-thin">%</span>
      </span>
    </v-progress-circular>

    <BaseSubtitle
      :title="title"
      align="center"
      class="font-weight-bold text--primary"
    />
  </div>
</template>

<script setup>
  defineOptions({
    inheritAttrs: false,
  })

  defineProps({
    title: String,
    value: [Number, String],
  })
</script>
