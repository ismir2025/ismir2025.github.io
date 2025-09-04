<template>
  <v-navigation-drawer
    v-model="drawer"
    location="bottom"
    width="360"
    temporary
  >
    <v-list
      color="white"
      shaped
    >
      <v-list-item
        v-for="name in items"
        :key="name"
        :exact="name === 'Home'"
        :to="{ name }"
        color="primary"
      >
        <v-list-item-title>{{ name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { defineProps, ref } from 'vue'; // inject Ãß°¡


  const drawer = ref(false)

  defineProps({
    items: {
      type: Array,
      default: () => ([]),
    },
  })

</script>

<style lang="sass">

</style>
