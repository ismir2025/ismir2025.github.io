<template>
  <v-row no-gutters>
    <v-col cols="12">
      <SectionMenuCover />
      <SectionAcceptedPapers />
    </v-col>
  </v-row>
</template>

<script setup>
import SectionMenuCover from "../components/section/SectionMenuCover.vue";
import SectionAcceptedPapers from "../components/section/SectionAcceptedPapers.vue";
</script>
