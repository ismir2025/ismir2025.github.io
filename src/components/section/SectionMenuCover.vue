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
            class="text-shadow-soft breadcrumb-white"
          >
            <template #divider>
              <v-icon icon="mdi-chevron-right" color="white" />
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
  { path: "", title: "Home", src: "k1.webp", parent: null },

  // About
  {
    path: "about-organizing-committee",
    title: "Organizing Committee",
    src: "k1.webp",
    parent: "About",
  },
  {
    path: "about-volunteers",
    title: "Volunteers",
    src: "k1.webp",
    parent: "About",
  },
  {
    path: "about-logo",
    title: "ISMIR 2025 Logo",
    src: "k1.webp",
    parent: "About",
  },

  // Program
  { path: "program", title: "Program", src: "k1.webp", parent: "Program" },
  {
    path: "program-keynote",
    title: "Keynote",
    src: "k1.webp",
    parent: "Program",
  },
  {
    path: "program-accepted-papers",
    title: "Accepted Papers",
    src: "k1.webp",
    parent: "Program",
  },
  {
    path: "program-detailed-schedule",
    title: "Detailed Schedule",
    src: "k1.webp",
    parent: "Program",
  },
  {
    path: "program-tutorials",
    title: "Tutorials",
    src: "k1.webp",
    parent: "Program",
  },
  {
    path: "program-rencon",
    title: "RenCon",
    src: "k1.webp",
    parent: "Program",
  },
  { path: "program-music", title: "Music", src: "k1.webp", parent: "Program" },
  {
    path: "program-kculture-night",
    title: "K-Culture Night",
    src: "k1.webp",
    parent: "Program",
  },
  {
    path: "program-banquet-and-jam-session",
    title: "Banquet and Jam Session",
    src: "k1.webp",
    parent: "Program",
  },
  {
    path: "program-special-session",
    title: "Special Session",
    src: "k1.webp",
    parent: "Program",
  },
  {
    path: "program-baraji-concert",
    title: "BARAJI Concert",
    src: "k1.webp",
    parent: "Program",
  },

  // Call For
  {
    path: "call-for-papers",
    title: "Call For Papers",
    src: "k1.webp",
    parent: "Calls",
  },
  {
    path: "call-for-late-breaking-demo",
    title: "Call For Late-Breaking Demo",
    src: "k1.webp",
    parent: "Calls",
  },
  {
    path: "call-for-tutorials",
    title: "Call For Tutorials",
    src: "k1.webp",
    parent: "Calls",
  },
  {
    path: "call-for-music",
    title: "Call For Music",
    src: "k1.webp",
    parent: "Calls",
  },
  {
    path: "call-for-volunteers",
    title: "Call For Volunteers",
    src: "k1.webp",
    parent: "Calls",
  },

  // Guidelines
  {
    path: "author-guidelines",
    title: "Author Guidelines",
    src: "k1.webp",
    parent: "Author and Presenter Information",
  },
  {
    path: "presenter-guidelines",
    title: "Presenter Guidelines",
    src: "k1.webp",
    parent: "Author and Presenter Information",
  },

  // Attend
  {
    path: "attend-registration",
    title: "Registration",
    src: "k1.webp",
    parent: "Attend",
  },
  {
    path: "attend-accommodation",
    title: "Accommodation",
    src: "k1.webp",
    parent: "Attend",
  },
  {
    path: "attend-financial-support",
    title: "Financial Support",
    src: "k1.webp",
    parent: "Attend",
  },
  {
    path: "attend-code-of-conduct",
    title: "Code of Conduct",
    src: "k1.webp",
    parent: "Attend",
  },
  {
    path: "attend-visa-entry-guide",
    title: "Visa & Entry Guide",
    src: "k1.webp",
    parent: "Attend",
  },
  { path: "attend-venue", title: "Venue", src: "k1.webp", parent: "Attend" },
  {
    path: "attend-transportation",
    title: "Transportation",
    src: "k1.webp",
    parent: "Attend",
  },
  {
    path: "attend-airport-to-daejeon",
    title: "Airport to/from Daejeon",
    src: "k1.webp",
    parent: "Attend",
  },
  {
    path: "attend-local-transportation",
    title: "Local Transportation in Daejeon",
    src: "k1.webp",
    parent: "Attend",
  },
  {
    path: "attend-campus-map",
    title: "Campus Map",
    src: "k1.webp",
    parent: "Attend",
  },

  // Satellite Events
  {
    path: "satellite-hcmir25",
    title: "HCMIR",
    src: "k1.webp",
    parent: "Satellite Events",
  },
  {
    path: "satellite-dlfm12th",
    title: "DLfM",
    src: "k1.webp",
    parent: "Satellite Events",
  },
  {
    path: "satellite-llm4ma",
    title: "LLM4MA",
    src: "k1.webp",
    parent: "Satellite Events",
  },

  // Diversity
  {
    path: "diversity-mentoring",
    title: "Mentoring",
    src: "k1.webp",
    parent: "Diversity and Inclusion",
  },
  {
    path: "diversity-newcomer-squad",
    title: "Newcomer Squad",
    src: "k1.webp",
    parent: "Diversity and Inclusion",
  },

  // Sponsorship
  {
    path: "sponsorship-opportunities",
    title: "Sponsorship Opportunities",
    src: "k1.webp",
    parent: "Sponsors",
  },
  {
    path: "meet-the-sponsors",
    title: "Meet the Sponsors",
    src: "k1.webp",
    parent: "Sponsors",
  },
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
  const breadcrumbItems = [
    {
      title: "Home",
      disabled: false,
      href: "/",
    },
  ];

  // 상위 메뉴가 있는 경우 추가
  if (currentTitle.value?.parent) {
    breadcrumbItems.push({
      title: currentTitle.value.parent,
      disabled: true,
      href: "#",
    });
  }

  // 현재 페이지 추가
  breadcrumbItems.push({
    title: currentTitle.value?.title,
    disabled: true,
    href: "#",
  });

  return breadcrumbItems;
});
</script>

<style lang="sass">
#hero-alt {
  .breadcrumb-white {
    .v-breadcrumbs-item {
      color: #FFFFFF !important;

      .v-breadcrumbs-item__text {
        color: #FFFFFF !important;
      }

      a {
        color: #FFFFFF !important;
        text-decoration: none;
      }

      &--disabled {
        color: #FFFFFF !important;
        opacity: 0.8;

        .v-breadcrumbs-item__text {
          color: #FFFFFF !important;
        }
      }
    }

    .v-breadcrumbs-divider {
      color: #FFFFFF !important;
    }
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
