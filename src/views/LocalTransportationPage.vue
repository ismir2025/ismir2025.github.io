<template>
  <div>
    <SectionMenuCover />
    <SectionLocalTransportation />
  </div>
</template>

<script>
import SectionMenuCover from "@/components/section/SectionMenuCover.vue";
import SectionLocalTransportation from "@/components/section/SectionLocalTransportation.vue";

export default {
  name: "LocalTransportationPage",
  components: {
    SectionMenuCover,
    SectionLocalTransportation,
  },
};
</script>
