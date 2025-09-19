<template>
  <div>
    <SectionAboutLogo />
    <FooterPage />
  </div>
</template>

<script>
import SectionAboutLogo from "@/components/section/SectionAboutLogo.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: "AboutLogoPage",
  components: {
    SectionAboutLogo,
    FooterPage,
  },
};
</script>

<style scoped></style>
