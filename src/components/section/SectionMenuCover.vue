<template>
  <section id="hero-alt" class="position-relative">
    <v-img
      :height="mdAndUp ? 350 : 225"
      :src="imagePath"
      max-width="100%"
      cover
      class="with-gradient-overlay"
    >
      <v-row
        align="center"
        class="ma-0 fill-height text-center text-white"
        justify="center"
      >
        <v-col cols="12">
          <BaseHeading
            :title="currentTitle?.title || ''"
            align="center"
            weight="medium"
            class="text-shadow-soft"
          />

          <BaseDivider align="center" />

          <v-breadcrumbs
            :items="items"
            style="justify-content: center"
            class="text-shadow-soft"
          >
            <template #divider>
              <v-icon icon="mdi-chevron-right" />
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-img>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, provide } from "vue"; // Vue Composition API functions
import { useDisplay } from "vuetify"; // Vuetify hooks
import { useRoute } from "vue-router"; // Vue Router hook
import img from "@/assets/CoverImages/fhd/k1.webp"; // Import the image
import BaseHeading from "@/components/base/BaseHeading.vue";
import BaseDivider from "@/components/base/BaseDivider.vue";
provide("heading", { align: "center" });

const { mdAndUp } = useDisplay();
const { path } = useRoute();

const currentTitle = ref({ path: "", title: "HOME", src: "k1.webp" });
const imagePath = img; // Use the imported image

const titleList = ref([
  { path: "", title: "Home", src: "k1.webp" },
  {
    path: "organizing-committee",
    title: "Organizing Committee",
    src: "k1.webp",
  },
  {
    path: "Registration",
    title: "Registration",
    src: "k1.webp",
  },
  {
    path: "presenter-guidelines",
    title: "Presenter Guidelines",
    src: "k1.webp",
  },
  { path: "program", title: "Program", src: "k1.webp" },
  { path: "keynote", title: "Keynote", src: "k1.webp" },
  { path: "program-at-glance", title: "Program at Glance", src: "k1.webp" },
  {
    path: "keynote-presentations",
    title: "Keynote Presentations",
    src: "k1.webp",
  },
  { path: "accommodation", title: "Accommodation", src: "k1.webp" },
  { path: "financial-support", title: "Financial Support", src: "k1.webp" },
  { path: "HCMIR25Page", title: "HCMIR 2025", src: "k1.webp" },
  { path: "DLfM12thPage", title: "12th DLfM", src: "k1.webp" },
  { path: "LLM4MAPage", title: "LLM4MA", src: "k1.webp" },
  { path: "accepted-papers", title: "Accepted Papers", src: "k1.webp" },
  { path: "program-tutorials", title: "Tutorials", src: "k1.webp" },
  { path: "rencon", title: "RenCon", src: "k1.webp" },
  { path: "satelite-events", title: "Satelite Events", src: "k1.webp" },
  { path: "code-of-conduct", title: "Code of Conduct", src: "k1.webp" },
  {
    path: "sponsorship-opportunities",
    title: "Sponsorship Opportunities",
    src: "k1.webp",
  },
  {
    path: "meet-the-sponsors",
    title: "Meet the Sponsors",
    src: "k1.webp",
  },
  { path: "cfp", title: "Call For Papers", src: "k1.webp" },
  {
    path: "call-for-lbd",
    title: "Call For Late-Breaking Demo",
    src: "k1.webp",
  },
  { path: "call-for-tutorials", title: "Call For Tutorials", src: "k1.webp" },
  { path: "call-for-music", title: "Call For Music", src: "k1.webp" },
  { path: "call-for-volunteers", title: "Call For Volunteers", src: "k1.webp" },
  { path: "author-guidelines", title: "Author Guidelines", src: "k1.webp" },

  { path: "venue-page", title: "Venue", src: "k1.webp" },
  { path: "transportation-page", title: "Transportation", src: "k1.webp" },
  { path: "visa-entry-guide", title: "Visa & Entry Guide", src: "k1.webp" },
  {
    path: "new-to-ismir-mentoring-program-2025",
    title: "Mentoring",
    src: "k1.webp",
  },
  {
    path: "newcomer-squad",
    title: "Newcomer Squad",
    src: "k1.webp",
  },
  {
    path: "manuscript-accessibility",
    title: "Manuscript Accessibility",
    src: "k1.webp",
  },
  { path: "contact", title: "Contact Us", src: "k1.webp" },
  { path: "important-dates", title: "Important Dates", src: "k1.webp" },
  { path: "campus-map", title: "Campus Map", src: "k1.webp" },
  { path: "detailed-schedule", title: "Detailed Schedule", src: "k1.webp" },
  { path: "korean-traditional-music-concert", title: "Korean Traditional Music Concert", src: "k1.webp" },
  { path: "program-music", title: "Music", src: "k1.webp" },
]);

onMounted(async () => {
  if (path.includes("/news/")) currentTitle.value = titleList.value[7];
  else if (path.includes("/gallery/")) currentTitle.value = titleList.value[8];
  else {
    const pathName = path.split("/").filter(Boolean).join("/");
    currentTitle.value = await titleList.value.find(
      (val) => val.path === pathName
    );
  }
});

const items = computed(() => {
  return [
    {
      title: "HOME",
      disabled: false,
      href: "/",
    },
    {
      title: currentTitle.value?.title,
      disabled: false,
      href: "#",
    },
  ];
});
</script>

<style lang="sass">
#hero-alt {
  .v-breadcrumbs__item {
    color: #FFFFFF;
  }
}

.with-gradient-overlay {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 65, 145, 0.8) 0%,
      rgba(0, 65, 145, 0.6) 50%,
      rgba(0, 65, 145, 0.4) 80%,
      rgba(237, 94, 96, 0.3) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
  .v-row {
    position: relative;
    z-index: 2;
  }
}

.text-shadow-soft {
  text-shadow:
    0 1px 3px rgba(0, 0, 0, 0.3),
    0 2px 6px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
