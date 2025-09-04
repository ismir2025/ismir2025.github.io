<template>
  <v-container fluid class="pa-0">
    <SectionMenuCover />
    <SectionCallForVolunteers />
  </v-container>
</template>

<script>
import SectionMenuCover from "@/components/section/SectionMenuCover.vue";
import SectionCallForVolunteers from "@/components/section/SectionCallForVolunteers.vue";

export default {
  name: "CallForVolunteersPage",
  components: {
    SectionMenuCover,
    SectionCallForVolunteers,
  },
};
</script>
