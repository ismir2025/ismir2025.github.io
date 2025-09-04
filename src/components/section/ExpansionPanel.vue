<template>
  <v-expansion-panel :value="value">
    <v-expansion-panel-title>
      <v-row no-gutters>
        <v-col class="d-flex justify-start panel-title" cols="8">
          {{ title }}
        </v-col>
      </v-row>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-container fluid>
        <v-row v-for="item in items" :key="item.content" class="py-2">
          <v-col cols="8" class="item-content">
            {{ item.content }}
          </v-col>
          <v-col cols="4" class="text-right item-date">
            {{ item.date }}
          </v-col>
        </v-row>
      </v-container>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>

<style scoped>
.panel-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: #000000;
}

.item-content {
  font-size: 1rem;
  color: #424242;
}

.item-date {
  font-size: 0.9rem;
  color: #757575;
  font-style: italic;
}
</style>
