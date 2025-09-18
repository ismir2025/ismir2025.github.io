<template>
  <!-- AppBar -->
  <v-app-bar scroll-behavior="elevate" height="80">
    <template #prepend>
      <div
        :style="{
          marginLeft: isMobile ? '0px' : '5px',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }"
      >
        <v-img
          :src="LogoImg"
          class="logo-clickable"
          width="180"
          height="70"
          contain
          @click="navigateHome"
        ></v-img>
      </div>
    </template>

    <v-spacer />

    <!-- Main Menu Buttons (Desktop Only) -->
    <div class="menu-container" v-show="!isMobile">
      <v-btn
        exact
        :ripple="false"
        :to="{ name: 'home' }"
        class="menu-button"
        height="100%"
        variant="text"
      >
        Home
      </v-btn>

      <v-menu offset-y v-model="isProgramMenuOpen" close-on-content-click>
        <template v-slot:activator="{ props }">
          <v-btn
            class="menu-button call-button"
            :class="{ 'call-active': isProgramMenuOpen }"
            v-bind="props"
            height="100%"
            variant="text"
            text-color="black"
          >
            Program
            <v-icon icon="mdi-menu-down" end></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(submenu, index) in programSubItems"
            :key="index"
            @click="handleSubItemClickProgram(submenu)"
          >
            <v-list-item-title>{{ submenu }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        :ripple="false"
        class="menu-button"
        height="100%"
        variant="text"
        @click="navigateToVirtualPlatform"
      >
        Virtual Platform
      </v-btn>

      <v-menu offset-y v-model="isIPMenuOpen" close-on-content-click>
        <template v-slot:activator="{ props }">
          <v-btn
            class="menu-button call-button"
            :class="{ 'call-active': isIPMenuOpen }"
            v-bind="props"
            height="100%"
            variant="text"
            text-color="black"
          >
            Author and Presenter<br />Information
            <v-icon icon="mdi-menu-down" end></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(submenu, index) in IPSubItems"
            :key="index"
            @click="handleSubItemClickIP(submenu)"
          >
            <v-list-item-title>{{ submenu }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y v-model="isCallMenuOpen" close-on-content-click>
        <template v-slot:activator="{ props }">
          <v-btn
            class="menu-button call-button"
            :class="{ 'call-active': isCallMenuOpen }"
            v-bind="props"
            height="100%"
            variant="text"
            text-color="black"
          >
            Calls
            <v-icon icon="mdi-menu-down" end></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(submenu, index) in callSubItems"
            :key="index"
            @click="handleSubItemClickCall(submenu)"
          >
            <v-list-item-title>{{ submenu }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y v-model="isAttendMenuOpen" close-on-content-click>
        <template v-slot:activator="{ props }">
          <v-btn
            class="menu-button call-button"
            :class="{ 'call-active': isAttendMenuOpen }"
            v-bind="props"
            height="100%"
            variant="text"
            text-color="black"
          >
            Attend
            <v-icon icon="mdi-menu-down" end></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(submenu, index) in attendSubItems"
            :key="index"
            @click="handleSubItemClickAttend(submenu)"
          >
            <v-list-item-title>{{ submenu }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y v-model="isSponsorsMenuOpen" close-on-content-click>
        <template v-slot:activator="{ props }">
          <v-btn
            class="menu-button call-button"
            :class="{ 'call-active': isSponsorsMenuOpen }"
            v-bind="props"
            height="100%"
            variant="text"
            text-color="black"
          >
            Sponsors
            <v-icon icon="mdi-menu-down" end></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(submenu, index) in SponsorsSubItems"
            :key="index"
            @click="handleSubItemClickSponsors(submenu)"
          >
            <v-list-item-title>{{ submenu }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y v-model="isDiversityMenuOpen" close-on-content-click>
        <template v-slot:activator="{ props }">
          <v-btn
            class="menu-button call-button"
            :class="{ 'call-active': isDiversityMenuOpen }"
            v-bind="props"
            height="100%"
            variant="text"
            text-color="black"
          >
            Diversity and<br />Inclusion
            <v-icon icon="mdi-menu-down" end></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(submenu, index) in diversitySubItems"
            :key="index"
            @click="handleSubItemClickDiversity(submenu)"
          >
            <v-list-item-title>{{ submenu }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y v-model="isSatelliteMenuOpen" close-on-content-click>
        <template v-slot:activator="{ props }">
          <v-btn
            class="menu-button call-button"
            :class="{ 'call-active': isSatelliteMenuOpen }"
            v-bind="props"
            height="100%"
            variant="text"
            text-color="black"
          >
            Satellite<br />Events
            <v-icon icon="mdi-menu-down" end></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(submenu, index) in SatelliteSubItems"
            :key="index"
            @click="handleSubItemClickSatellite(submenu)"
          >
            <v-list-item-title>{{ submenu }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y v-model="isAboutMenuOpen" close-on-content-click>
        <template v-slot:activator="{ props }">
          <v-btn
            class="menu-button call-button"
            :class="{ 'call-active': isAboutMenuOpen }"
            v-bind="props"
            height="100%"
            variant="text"
            text-color="black"
          >
            About
            <v-icon icon="mdi-menu-down" end></v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(submenu, index) in aboutSubItems"
            :key="index"
            @click="handleSubItemClickAbout(submenu)"
          >
            <v-list-item-title>{{ submenu }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- Hamburger Icon for Mobile -->
    <v-app-bar-nav-icon v-show="isMobile" @click="drawer = !drawer" />
  </v-app-bar>

  <!-- Slide Drawer -->
  <v-navigation-drawer v-model="drawer" app temporary left scrollable>
    <v-list>
      <!-- 일반 메뉴 항목 -->
      <v-list-item :to="{ name: 'home' }" @click="drawer = false">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>

      <!-- Program 드롭다운 메뉴 -->
      <v-list-group value="program">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Program"></v-list-item>
        </template>
        <v-list-item
          v-for="(item, i) in programSubItems"
          :key="i"
          @click="
            handleSubItemClickProgram(item);
            drawer = false;
          "
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-item @click="navigateToVirtualPlatform(); drawer = false;">
        <v-list-item-title>Virtual Platform</v-list-item-title>
      </v-list-item>

      <!-- Author and Presenter Information 드롭다운 메뉴 -->
      <v-list-group value="ip">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Author and Presenter Information"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="(item, i) in IPSubItems"
          :key="i"
          @click="
            handleSubItemClickIP(item);
            drawer = false;
          "
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <!-- Call 드롭다운 메뉴 -->
      <v-list-group value="calls">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Calls"></v-list-item>
        </template>
        <v-list-item
          v-for="(item, i) in callSubItems"
          :key="i"
          @click="
            handleSubItemClickCall(item);
            drawer = false;
          "
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <!-- Attend 드롭다운 메뉴 -->
      <v-list-group value="attend">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Attend"></v-list-item>
        </template>
        <v-list-item
          v-for="(item, i) in attendSubItems"
          :key="i"
          @click="
            handleSubItemClickAttend(item);
            drawer = false;
          "
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <!-- Sponsors 드롭다운 메뉴 -->
      <v-list-group value="sponsors">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Sponsors"></v-list-item>
        </template>
        <v-list-item
          v-for="(item, i) in SponsorsSubItems"
          :key="i"
          @click="
            handleSubItemClickSponsors(item);
            drawer = false;
          "
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <!-- Diversity and Inclusion 드롭다운 메뉴 -->
      <v-list-group value="diversity">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Diversity and Inclusion"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="(item, i) in diversitySubItems"
          :key="i"
          @click="
            handleSubItemClickDiversity(item);
            drawer = false;
          "
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <!-- Satellite Events 드롭다운 메뉴 -->
      <v-list-group value="satelite">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Satellite Events"></v-list-item>
        </template>
        <v-list-item
          v-for="(item, i) in SatelliteSubItems"
          :key="i"
          @click="
            handleSubItemClickSatellite(item);
            drawer = false;
          "
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <!-- About 드롭다운 메뉴 -->
      <v-list-group value="about">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="About"></v-list-item>
        </template>
        <v-list-item
          v-for="(item, i) in aboutSubItems"
          :key="i"
          @click="
            handleSubItemClickAbout(item);
            drawer = false;
          "
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import LogoImg from "@/assets/Logo.png";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify";

const router = useRouter();
const { mdAndDown } = useDisplay();

const drawer = ref(false);
const isMobile = computed(() => mdAndDown.value);

const callSubItems = ref([
  "Call For Papers",
  "Call For Tutorials",
  "Call For Music",
  "Call For Late-Breaking Demo",
  "Call for MIREX",
  "Call For Volunteers",
]);

const SatelliteSubItems = ref(["HCMIR", "DLfM", "LLM4MA"]);

const IPSubItems = ref(["Author Guidelines", "Presenter Guidelines"]);

const attendSubItems = ref([
  "Registration",
  "Financial Support",
  "Accommodation",
  "Visa & Entry Guide",
  "Code of Conduct",
  "Venue",
  "Transportation",
  "Campus Map",
]);

const diversitySubItems = ref(["Mentoring", "Newcomer Squad"]);
const SponsorsSubItems = ref([
  "Sponsorship Opportunities",
  "Meet the Sponsors",
]);

const programSubItems = ref([
  "Program",
  "Detailed Schedule",
  "Keynote",
  "Accepted Papers",
  "Tutorials",
  "Special Session",
  "Music",
  "K-Culture Night",
  "BARAJI Concert",
  "RenCon",
]);

const aboutSubItems = ref(["Organizing Committee", "Volunteers"]);

// Track if Call menu is open
const isCallMenuOpen = ref(false);
const isIPMenuOpen = ref(false);
const isAttendMenuOpen = ref(false);
const isSatelliteMenuOpen = ref(false);
const isDiversityMenuOpen = ref(false);
const isSponsorsMenuOpen = ref(false);
const isProgramMenuOpen = ref(false);
const isAboutMenuOpen = ref(false);

// Navigate to Home page
const navigateHome = () => {
  router.push({ name: "home" });
};

// Navigate to Virtual Platform
const navigateToVirtualPlatform = () => {
  window.open("https://ismir2025program.ismir.net/", "_blank");
};

const handleSubItemClickCall = (submenu) => {
  switch (submenu) {
    case "Call For Papers":
      router.push({ name: "call-for-papers" });
      break;
    case "Call For Tutorials":
      router.push({ name: "call-for-tutorials" });
      break;
    case "Call For Music":
      router.push({ name: "call-for-music" });
      break;
    case "Call For Late-Breaking Demo":
      router.push({ name: "call-for-late-breaking-demo" });
      break;
    case "Call for MIREX":
      window.open("https://www.music-ir.org/mirex/wiki/MIREX_HOME", "_blank");
      break;
    case "Call For Volunteers":
      router.push({ name: "call-for-volunteers" });
      break;
    default:
      break;
  }
};

const handleSubItemClickIP = (submenu) => {
  switch (submenu) {
    case "Author Guidelines":
      router.push({ name: "author-guidelines" });
      break;
    case "Presenter Guidelines":
      router.push({ name: "presenter-guidelines" });
      break;
    default:
      break;
  }
};

const handleSubItemClickAttend = (submenu) => {
  switch (submenu) {
    case "Registration":
      router.push({ name: "attend-registration" });
      break;
    case "Accommodation":
      router.push({ name: "attend-accommodation" });
      break;
    case "Financial Support":
      router.push({ name: "attend-financial-support" });
      break;
    case "Visa & Entry Guide":
      router.push({ name: "attend-visa-guide" });
      break;
    case "Code of Conduct":
      router.push({ name: "attend-code-of-conduct" });
      break;
    case "Venue":
      router.push({ name: "attend-venue" });
      break;
    case "Transportation":
      router.push({ name: "attend-transportation" });
      break;
    case "Campus Map":
      router.push({ name: "attend-campus-map" });
      break;
    default:
      break;
  }
};

const handleSubItemClickDiversity = (submenu) => {
  switch (submenu) {
    case "Mentoring":
      router.push({ name: "diversity-mentoring" });
      break;
    case "Newcomer Squad":
      router.push({ name: "diversity-newcomer-squad" });
      break;

    default:
      break;
  }
};

const handleSubItemClickSatellite = (submenu) => {
  switch (submenu) {
    case "HCMIR":
      router.push({ name: "satellite-hcmir" });
      break;
    case "DLfM":
      router.push({ name: "satellite-dlfm" });
      break;
    case "LLM4MA":
      router.push({ name: "satellite-llm4ma" });
      break;

    default:
      break;
  }
};

const handleSubItemClickSponsors = (submenu) => {
  switch (submenu) {
    case "Sponsorship Opportunities":
      router.push({ name: "sponsor-opportunities" });
      break;
    case "Meet the Sponsors":
      router.push({ name: "sponsor-meet" });
      break;

    default:
      break;
  }
};

const handleSubItemClickProgram = (submenu) => {
  switch (submenu) {
    case "Program":
      router.push({ name: "program-overview" });
      break;
    case "Keynote":
      router.push({ name: "program-keynote" });
      break;
    case "Detailed Schedule":
      router.push({ name: "program-detailed-schedule" });
      break;
    case "Accepted Papers":
      router.push({ name: "program-accepted-papers" });
      break;
    case "Tutorials":
      router.push({ name: "program-tutorials" });
      break;
    case "RenCon":
      router.push({ name: "program-rencon" });
      break;
    case "BARAJI Concert":
      router.push({ name: "program-baraji-concert" });
      break;
    case "Music":
      router.push({ name: "program-music" });
      break;
    case "K-Culture Night":
      router.push({ name: "program-kculture-night" });
      break;
    case "Special Session":
      router.push({ name: "program-special-session" });
      break;
    default:
      break;
  }
};

const handleSubItemClickAbout = (submenu) => {
  switch (submenu) {
    case "Organizing Committee":
      router.push({ name: "about-organizing-committee" });
      break;
    case "Volunteers":
      router.push({ name: "about-volunteers" });
      break;
    default:
      break;
  }
};
</script>

<style lang="sass">
.v-app-bar .menu-button {
  color: black !important;
  font-weight: 600;
  position: relative;
  padding: 0 16px;
  font-size: 13.5px;
  background: transparent !important;
  box-shadow: none !important;

  &:hover {
    background: transparent !important;
  }

  &:active {
    background: transparent !important;
  }

  &.v-btn--active {
    background: transparent !important;
    box-shadow: none !important;
  }

  .v-btn__content {
    color: black !important;
  }

  .v-btn__overlay {
    opacity: 0 !important;
  }
}

.v-app-bar .call-button {
  color: black !important;
  opacity: 1;
  background: transparent !important;
  box-shadow: none !important;

  &:hover {
    background: transparent !important;
  }

  &:active {
    background: transparent !important;
  }

  &.v-btn--active {
    background: transparent !important;
    box-shadow: none !important;
  }

  .v-btn__content {
    color: black !important;
  }

  .v-btn__overlay {
    opacity: 0 !important;
  }
}

.logo-clickable {
  cursor: pointer;
}

@media (max-width: 600px) {
  .v-app-bar .menu-button {
    font-size: 13.5px;
    line-height: 56px;
  }

  .v-app-bar .call-button {
    font-size: 13.5px;
  }
}
</style>
