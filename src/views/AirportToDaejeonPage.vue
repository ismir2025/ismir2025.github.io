<template>
  <div>
    <SectionMenuCover />
    <SectionAirportToDaejeon />
  </div>
</template>

<script>
import SectionMenuCover from "@/components/section/SectionMenuCover.vue";
import SectionAirportToDaejeon from "@/components/section/SectionAirportToDaejeon.vue";

export default {
  name: "AirportToDaejeonPage",
  components: {
    SectionMenuCover,
    SectionAirportToDaejeon,
  },
};
</script>
