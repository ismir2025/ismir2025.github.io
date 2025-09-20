<template>
  <!-- Background Pattern -->
  <div class="background-pattern"></div>

  <v-container fluid class="pa-0 ma-0">
    <v-row justify="center" id="logo-design" class="no-gutters ma-0">
      <v-col cols="12" class="pa-0">
        <!-- Banner Section -->
        <section class="banner-section">
          <!-- Extended Logo Banner -->
          <div class="banner-container">
            <v-img
              :src="require('@/assets/background.png')"
              alt="ISMIR 2025 Extended Logo Banner"
              class="banner-image"
              aspect-ratio="16/12"
              cover
            >
              <div class="banner-overlay"></div>
              <!-- Banner Content Overlay -->
              <div class="banner-content-overlay">
                <h1 class="banner-title">ISMIR 2025 Logo Design</h1>
                <p class="banner-subtitle">
                  "The Harmony of Tradition and Modernity"
                </p>
              </div>
            </v-img>
          </div>
        </section>
      </v-col>
    </v-row>

    <!-- Main Content Area -->
    <v-row justify="center" class="main-content-area">
      <v-col cols="12" lg="10" xl="8">
        <!-- Content Introduction -->
        <div class="content-intro">
          <div class="intro-text">
            <h2 class="intro-title">Understanding the Design</h2>
            <p class="intro-description">
              Explore the intricate details and thoughtful symbolism behind the
              ISMIR 2025 logo design, where each element tells a story of
              innovation, tradition, and academic excellence.
            </p>
          </div>
        </div>

        <!-- Design Philosophy -->
        <div class="section-card philosophy-section">
          <div class="section-header">
            <div class="section-icon-wrapper">
              <div class="section-icon-bg"></div>
              <v-icon
                icon="mdi-lightbulb-outline"
                size="28"
                color="#004191"
                class="section-icon"
              ></v-icon>
            </div>
            <div class="section-title-wrapper">
              <h2 class="section-title">Design Philosophy</h2>
              <div class="section-subtitle">The conceptual foundation</div>
            </div>
          </div>

          <!-- Elegant Logo Reference -->
          <div class="logo-showcase mb-8">
            <div class="logo-frame">
              <v-img
                :src="require('@/assets/ISMIR 2025 Logo.png')"
                alt="ISMIR 2025 Logo"
                width="400"
                height="300"
                contain
                class="mx-auto showcase-logo"
                :lazy-src="require('@/assets/ISMIR 2025 Logo.png')"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="#004191"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </div>
          </div>

          <div class="philosophy-content">
            <p class="text-body-1 leading-relaxed mb-4">
              The ISMIR 2025 logo encapsulates the conference theme,
              <strong>"The Harmony of Tradition and Modernity,"</strong> through
              a distinctly Korean visual narrative. The design integrates
              <strong>Daejeon's iconic architecture</strong>,
              <strong>traditional Korean art forms</strong>, and
              <strong>musical notation</strong>
              into a cohesive composition that represents this universal theme
              through Korean cultural lens.
            </p>
            <v-alert
              variant="tonal"
              class="my-4"
              style="
                background-color: rgba(107, 114, 128, 0.05);
                border-color: #6b7280;
              "
            >
              <template v-slot:prepend>
                <v-icon icon="mdi-information" color="#004191"></v-icon>
              </template>
              <span class="font-weight-medium">
                This design encapsulates the complex identity of music
                information retrieval—connecting historical knowledge with
                future innovation, art with science, and local cultural
                expression with universal academic discourse.
              </span>
            </v-alert>
          </div>
        </div>

        <!-- Visual Narrative -->
        <div class="section-card narrative-section">
          <div class="section-header">
            <div class="section-icon-wrapper">
              <div class="section-icon-bg"></div>
              <v-icon
                icon="mdi-eye-outline"
                size="28"
                color="#004191"
                class="section-icon"
              ></v-icon>
            </div>
            <div class="section-title-wrapper">
              <h2 class="section-title">Visual Narrative</h2>
              <div class="section-subtitle">
                Deconstructing the design elements
              </div>
            </div>
          </div>

          <!-- Design Elements -->
          <v-row>
            <!-- Hanbit Tower -->
            <v-col cols="12">
              <v-card class="element-card mb-6" variant="outlined">
                <v-card-text class="pa-6">
                  <div class="d-flex align-center mb-4">
                    <v-avatar class="mr-4" color="#004191" size="48">
                      <v-icon
                        icon="mdi-office-building"
                        color="white"
                        size="24"
                      ></v-icon>
                    </v-avatar>
                    <div>
                      <h3 class="text-h5 font-weight-bold primary-text">
                        Hanbit Tower
                      </h3>
                      <p class="text-subtitle-1 text-grey-darken-1 mb-0">
                        The Epicenter of Innovation
                      </p>
                    </div>
                  </div>
                  <p class="text-body-1 leading-relaxed">
                    The vertical pillar supporting the logo's core embodies a
                    modern version of
                    <strong
                      ><a
                        href="http://daejeontourism.com/eng/page.do?menuIdx=733"
                        target="_blank"
                        class="kaist-blue text-decoration-none"
                        >Hanbit Tower from the 1993 Daejeon Expo</a
                      ></strong
                    >. This tower symbolizes Daejeon's scientific legacy and
                    houses KAIST, representing the zenith of technological
                    progress and scholarly exploration that ISMIR endeavors to
                    achieve. Presented in
                    <span class="kaist-blue font-weight-bold"
                      ><a
                        href="https://www.kaist.ac.kr/en/html/kaist/011901.html"
                        target="_blank"
                        class="kaist-blue text-decoration-none"
                        >KAIST's distinctive blue</a
                      ></span
                    >, it simultaneously reflects the institution's academic
                    prestige and innovative outlook.
                  </p>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Expo Bridge -->
            <v-col cols="12">
              <v-card class="element-card mb-6" variant="outlined">
                <v-card-text class="pa-6">
                  <div class="d-flex align-center mb-4">
                    <v-avatar class="mr-4" color="#004191" size="48">
                      <v-icon
                        icon="mdi-bridge"
                        color="white"
                        size="24"
                      ></v-icon>
                    </v-avatar>
                    <div>
                      <h3 class="text-h5 font-weight-bold primary-text">
                        Expo Bridge
                      </h3>
                      <p class="text-subtitle-1 text-grey-darken-1 mb-0">
                        A Continuation of Tradition
                      </p>
                    </div>
                  </div>
                  <p class="text-body-1 leading-relaxed">
                    The fluid arches around Hanbit Tower are inspired by
                    <strong
                      ><a
                        href="https://mindtrip.ai/attraction/daejeon-south-korea/expo-bridge/at-a5IZN2xA"
                        target="_blank"
                        class="kaist-blue text-decoration-none"
                        >Daejeon's Expo Bridge</a
                      ></strong
                    >. This contemporary infrastructure has recently been
                    adopted by citizens who endearingly refer to it as
                    <em>"Gyeonwu-Jiknyeo Bridge,"</em> integrating it into
                    traditional folklore. This event illustrates that tradition
                    is not a mere artifact of history, but a dynamic culture
                    perpetually redefined in modern existence—a principle
                    exemplified here through Korean cultural evolution.
                  </p>
                  <v-alert
                    variant="tonal"
                    class="mt-4"
                    style="
                      background-color: rgba(107, 114, 128, 0.05);
                      border-color: #6b7280;
                    "
                  >
                    <template v-slot:prepend>
                      <v-icon icon="mdi-bridge" color="#004191"></v-icon>
                    </template>
                    <span class="font-weight-medium">
                      The two arches, characterized by
                      <span class="kaist-blue font-weight-bold">blue</span> and
                      <span class="accent-red font-weight-bold">red</span>,
                      represent the academic forum where varied ideas and
                      approaches unite to produce new knowledge.
                    </span>
                  </v-alert>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Ilwol-obongdo -->
            <v-col cols="12">
              <v-card class="element-card mb-6" variant="outlined">
                <v-card-text class="pa-6">
                  <div class="d-flex align-center mb-4">
                    <v-avatar class="mr-4" color="#004191" size="48">
                      <v-icon
                        icon="mdi-image-frame"
                        color="white"
                        size="24"
                      ></v-icon>
                    </v-avatar>
                    <div>
                      <h3 class="text-h5 font-weight-bold primary-text">
                        Ilwol-obongdo
                      </h3>
                      <p class="text-subtitle-1 text-grey-darken-1 mb-0">
                        Tenets of Concord
                      </p>
                    </div>
                  </div>
                  <p class="text-body-1 leading-relaxed mb-4">
                    The logo's design structure alludes to the cosmological
                    framework of
                    <strong
                      ><a
                        href="https://en.wikipedia.org/wiki/Irworobongdo"
                        target="_blank"
                        class="kaist-blue text-decoration-none"
                        >Ilwol-obongdo</a
                      ></strong
                    >, the royal folding screen painting from the Joseon
                    Dynasty. This classic artwork, illustrating the sun, moon,
                    and five peaks in flawless symmetry and equilibrium,
                    symbolizes the quintessential cosmic order.
                  </p>
                  <v-alert
                    variant="tonal"
                    style="
                      background-color: rgba(0, 65, 145, 0.05);
                      border-color: #004191;
                    "
                  >
                    <template v-slot:prepend>
                      <v-icon icon="mdi-image-frame" color="#004191"></v-icon>
                    </template>
                    <span class="font-weight-medium">
                      The logo of ISMIR 2025 reinterprets ideas of harmony using
                      current design, resulting in a composition that is both
                      stable and energetic, with elements harmonized around the
                      center tower.
                    </span>
                  </v-alert>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Pedal Up Symbols -->
            <v-col cols="12">
              <v-card class="element-card mb-6" variant="outlined">
                <v-card-text class="pa-6">
                  <div class="d-flex align-center mb-4">
                    <v-avatar class="mr-4" color="#004191" size="48">
                      <v-icon
                        icon="mdi-music-note"
                        color="white"
                        size="24"
                      ></v-icon>
                    </v-avatar>
                    <div>
                      <h3 class="text-h5 font-weight-bold primary-text">
                        Pedal Up Symbols
                      </h3>
                      <p class="text-subtitle-1 text-grey-darken-1 mb-0">
                        Innovative Metamorphosis
                      </p>
                    </div>
                  </div>
                  <p class="text-body-1 leading-relaxed mb-4">
                    The logo's most innovative feature is the positioning of
                    musical <strong>"pedal up" symbols</strong>
                    in the conventional locations of the sun and moon as
                    depicted in Ilwol-obongdo. In piano playing, the act of
                    releasing the pedal signifies a moment of musical clarity,
                    whereby sustained resonances conclude and the subsequent
                    phrase commences with precision.
                  </p>
                  <v-alert
                    variant="tonal"
                    class="mb-4"
                    style="
                      background-color: rgba(0, 65, 145, 0.05);
                      border-color: #004191;
                    "
                  >
                    <template v-slot:prepend>
                      <v-icon icon="mdi-music" color="#004191"></v-icon>
                    </template>
                    <span class="font-weight-medium">
                      This clearly reflects the core of ISMIR research:
                      identifying distinct patterns within intricate musical
                      data and enhancing existing knowledge to attain novel
                      insights.
                    </span>
                  </v-alert>
                  <p class="text-body-1 leading-relaxed">
                    These radially expanding symbols visually represent
                    celestial bodies emitting light, transforming conventional
                    iconography into modern musical vernacular. Their
                    symmetrical configuration embodies the twin essence of ISMIR
                    research, wherein data-driven analysis and creative
                    interpretation, algorithmic precision and human sensitivity,
                    attain harmony.
                  </p>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Chromatic Discourse -->
            <v-col cols="12">
              <v-card class="element-card mb-6" variant="outlined">
                <v-card-text class="pa-6">
                  <div class="d-flex align-center mb-4">
                    <v-avatar class="mr-4" color="#004191" size="48">
                      <v-icon
                        icon="mdi-palette-outline"
                        color="white"
                        size="24"
                      ></v-icon>
                    </v-avatar>
                    <div>
                      <h3 class="text-h5 font-weight-bold primary-text">
                        Chromatic Discourse
                      </h3>
                      <p class="text-subtitle-1 text-grey-darken-1 mb-0">
                        Scientific Color Harmony
                      </p>
                    </div>
                  </div>
                  <div class="color-showcase mb-4">
                    <v-row align="center" justify="center">
                      <v-col cols="auto">
                        <v-chip
                          color="#004191"
                          text-color="white"
                          size="large"
                          class="mr-2"
                        >
                          <v-icon start icon="mdi-circle"></v-icon>
                          KAIST Blue
                        </v-chip>
                      </v-col>
                      <v-col cols="auto">
                        <v-icon icon="mdi-plus" color="grey" size="20"></v-icon>
                      </v-col>
                      <v-col cols="auto">
                        <v-chip color="#ED5E60" text-color="white" size="large">
                          <v-icon start icon="mdi-circle"></v-icon>
                          Complementary Red
                        </v-chip>
                      </v-col>
                    </v-row>
                  </div>
                  <p class="text-body-1 leading-relaxed mb-4">
                    The principal
                    <span class="kaist-blue font-weight-bold">KAIST blue</span>
                    fosters academic trust and innovation, while the
                    <span class="accent-red font-weight-bold"
                      >complementary red</span
                    >—meticulously adjusted to align with the blue's saturation
                    and luminosity—achieves visual harmony. Beyond their
                    aesthetic appeal, these colors embody the Korean
                    philosophical concept of
                    <strong>Eum-Yang (음양, Yin-Yang)</strong>, where blue
                    represents the cool, contemplative yin and red symbolizes
                    the warm, dynamic yang, reflecting the balanced duality
                    essential to scholarly pursuit—a principle that resonates
                    universally across cultures.
                  </p>
                  <v-alert
                    variant="tonal"
                    style="
                      background-color: rgba(107, 114, 128, 0.05);
                      border-color: #6b7280;
                    "
                  >
                    <template v-slot:prepend>
                      <v-icon icon="mdi-palette" color="#004191"></v-icon>
                    </template>
                    <span class="font-weight-medium">
                      This scientific methodology in color design, rooted in
                      both Western color theory and Korean philosophical
                      principles of Eum-Yang, illustrates that harmony arises
                      not from randomness but from exact equilibrium,
                      articulating in chromatic terms the conference's quest for
                      the coexistence of rigor and creativity through Korean
                      cultural expression of this universal theme.
                    </span>
                  </v-alert>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Multifaceted Significance -->
            <v-col cols="12">
              <v-card class="element-card mb-6" variant="outlined">
                <v-card-text class="pa-6">
                  <div class="d-flex align-center mb-4">
                    <v-avatar class="mr-4" color="#004191" size="48">
                      <v-icon
                        icon="mdi-account-group"
                        color="white"
                        size="24"
                      ></v-icon>
                    </v-avatar>
                    <div>
                      <h3 class="text-h5 font-weight-bold primary-text">
                        Multifaceted Significance
                      </h3>
                      <p class="text-subtitle-1 text-grey-darken-1 mb-0">
                        Universal Yet Personal
                      </p>
                    </div>
                  </div>
                  <p class="text-body-1 leading-relaxed mb-4">
                    The ISMIR 2025 logo serves as a multifaceted emblem with
                    intersecting levels of meaning:
                  </p>
                  <v-row class="mb-4">
                    <v-col cols="12" md="4">
                      <v-card variant="outlined" class="h-100 meaning-card">
                        <v-card-text class="text-center pa-4">
                          <v-icon
                            icon="mdi-earth"
                            size="32"
                            color="#004191"
                            class="mb-2"
                          ></v-icon>
                          <h4
                            class="text-h6 font-weight-bold mb-2 primary-text"
                          >
                            International
                          </h4>
                          <p class="text-body-2 text-grey-darken-1">
                            A contemporary and refined academic event
                          </p>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-card variant="outlined" class="h-100 meaning-card">
                        <v-card-text class="text-center pa-4">
                          <v-icon
                            icon="mdi-yin-yang"
                            size="32"
                            color="#004191"
                            class="mb-2"
                          ></v-icon>
                          <h4
                            class="text-h6 font-weight-bold mb-2 primary-text"
                          >
                            Korean Cultural Expression
                          </h4>
                          <p class="text-body-2 text-grey-darken-1">
                            A Korean interpretation of the universal discourse
                            between tradition and modernity
                          </p>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-card variant="outlined" class="h-100 meaning-card">
                        <v-card-text class="text-center pa-4">
                          <v-icon
                            icon="mdi-school"
                            size="32"
                            color="#004191"
                            class="mb-2"
                          ></v-icon>
                          <h4
                            class="text-h6 font-weight-bold mb-2 primary-text"
                          >
                            Music Scholars
                          </h4>
                          <p class="text-body-2 text-grey-darken-1">
                            An academic identity and methodological analogy
                          </p>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  <p class="text-body-1 leading-relaxed mb-4">
                    This interpretative depth embodies ISMIR's inclusive ethos,
                    where Korean cultural expression of the universal theme
                    'Harmony of Tradition and Modernity' creates a meaningful
                    bridge for international scholars from varied backgrounds to
                    engage with both local cultural richness and global academic
                    discourse.
                  </p>
                  <v-alert
                    variant="tonal"
                    style="
                      background-color: rgba(107, 114, 128, 0.05);
                      border-color: #6b7280;
                    "
                  >
                    <template v-slot:prepend>
                      <v-icon icon="mdi-star" color="#004191"></v-icon>
                    </template>
                    <span class="font-weight-medium">
                      The informal yet sophisticated visual representation
                      preserves academic seriousness while improving
                      accessibility, successfully conveying ISMIR 2025's vision
                      of the coexistence of rigorous research and creative
                      inquiry.
                    </span>
                  </v-alert>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Conclusion -->
            <v-col cols="12">
              <div class="conclusion-section">
                <div class="conclusion-content">
                  <div class="conclusion-icon-wrapper">
                    <v-icon
                      icon="mdi-trophy"
                      size="40"
                      color="#004191"
                      class="conclusion-icon"
                    ></v-icon>
                  </div>
                  <h3 class="conclusion-title">
                    The Future of Music Information Retrieval
                  </h3>
                  <p class="conclusion-text mb-4">
                    This logo encapsulates the
                    <strong>evolution of music information retrieval</strong>,
                    its <strong>future trajectory</strong>, and the
                    <strong>potential of the intellectual symposium</strong>
                    scheduled for Daejeon in 2025.
                  </p>

                  <!-- Key Insights -->
                  <v-row class="mt-4">
                    <v-col cols="12" md="6">
                      <div class="insight-card">
                        <v-icon
                          icon="mdi-lightbulb"
                          size="24"
                          color="#004191"
                          class="mb-2"
                        ></v-icon>
                        <h4 class="insight-title">Innovation</h4>
                        <p class="insight-text">
                          Bridging traditional knowledge with cutting-edge
                          technology
                        </p>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <div class="insight-card">
                        <v-icon
                          icon="mdi-account-group"
                          size="24"
                          color="#004191"
                          class="mb-2"
                        ></v-icon>
                        <h4 class="insight-title">Collaboration</h4>
                        <p class="insight-text">
                          Uniting global scholars in the pursuit of musical
                          understanding
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Background Pattern */
.background-pattern {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(0, 65, 145, 0.02) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(0, 65, 145, 0.02) 0%,
      transparent 50%
    ),
    linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  z-index: -1;
  pointer-events: none;
}

/* Banner Section */
.banner-section {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Banner Container */
.banner-container {
  position: relative;
  width: 100%;
  border-radius: 0 0 24px 24px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 65, 145, 0.15);
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 65, 145, 0.1) 0%,
    rgba(0, 65, 145, 0.3) 100%
  );
  z-index: 1;
  pointer-events: none;
}

.banner-content-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 65, 145, 0.9) 0%,
    rgba(0, 65, 145, 0.7) 30%,
    rgba(0, 65, 145, 0.3) 60%,
    transparent 100%
  );
  padding: 5rem 2rem 4.5rem;
  z-index: 2;
  color: white;
  text-align: left;
}

.banner-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.banner-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.banner-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
  margin: 0;
}

/* Main Content Area */
.main-content-area {
  padding: 0 2rem;
  margin-top: 2rem;
  margin-bottom: 6rem; /* Added bottom margin for footer spacing */
  position: relative;
  z-index: 3;
}

/* Content Introduction */
.content-intro {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 65, 145, 0.08);
  box-shadow: 0 8px 32px rgba(0, 65, 145, 0.1);
  position: relative;
}

.content-intro::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #004191, #6b7280);
  border-radius: 2px;
}

.intro-text {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.intro-title {
  font-size: 2rem;
  font-weight: 600;
  color: #004191;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.intro-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #6b7280;
  margin: 0;
}

/* Section Cards */
.section-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 65, 145, 0.08);
  box-shadow: 0 8px 32px rgba(0, 65, 145, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.section-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 65, 145, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08);
}

/* Section Headers */
.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
}

.section-icon-wrapper {
  position: relative;
  margin-right: 1.5rem;
}

.section-icon-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    rgba(0, 65, 145, 0.1) 0%,
    rgba(0, 65, 145, 0.05) 100%
  );
  border-radius: 50%;
}

.section-icon {
  position: relative;
  z-index: 2;
  padding: 16px;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #004191;
  margin: 0;
  letter-spacing: -0.01em;
}

.section-subtitle {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 400;
  margin-top: 0.25rem;
  font-style: italic;
}

/* Logo Showcase */
.logo-showcase {
  display: flex;
  justify-content: center;
  margin: 3rem 0;
}

.logo-frame {
  position: relative;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(248, 250, 252, 0.95) 100%
  );
  border-radius: 20px;
  border: 1px solid rgba(0, 65, 145, 0.15);
  box-shadow: 0 8px 32px rgba(0, 65, 145, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.showcase-logo {
  transition: all 0.4s ease;
  filter: drop-shadow(0 4px 12px rgba(0, 65, 145, 0.15));
}

.logo-frame:hover .showcase-logo {
  transform: scale(1.05);
  filter: drop-shadow(0 8px 24px rgba(0, 65, 145, 0.25));
}

/* Element Cards */
.element-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid rgba(0, 65, 145, 0.08);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  position: relative;
}

.element-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 65, 145, 0.03),
    transparent
  );
  transition: left 0.6s ease;
}

.element-card:hover::before {
  left: 100%;
}

.element-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 65, 145, 0.12);
  border-color: rgba(0, 65, 145, 0.15);
}

/* Conclusion Section */
.conclusion-section {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(0, 65, 145, 0.02) 0%,
    rgba(0, 65, 145, 0.05) 100%
  );
  border-radius: 24px;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
}

.conclusion-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 65, 145, 0.2),
    transparent
  );
}

.conclusion-content {
  position: relative;
  z-index: 2;
}

.conclusion-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(
    135deg,
    rgba(0, 65, 145, 0.1) 0%,
    rgba(0, 65, 145, 0.05) 100%
  );
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.conclusion-title {
  font-size: 2rem;
  font-weight: 600;
  color: #004191;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

.conclusion-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #374151;
  max-width: 600px;
  margin: 0 auto;
}

/* Typography */
.philosophy-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #374151;
}

.primary-text {
  color: #004191 !important;
}

.kaist-blue {
  color: #004191 !important;
}

.accent-red {
  color: #ed5e60 !important;
}

/* Link Styles */
a.kaist-blue {
  color: #004191 !important;
  text-decoration: none;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(248, 250, 252, 0.9) 100%
  );
  border: 1px solid rgba(0, 65, 145, 0.2);
  border-radius: 6px;
  padding: 4px 8px;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0, 65, 145, 0.1);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  font-weight: 500;
}

a.kaist-blue:hover {
  color: #0056b3 !important;
  background: linear-gradient(
    135deg,
    rgba(0, 65, 145, 0.05) 0%,
    rgba(0, 65, 145, 0.08) 100%
  );
  border-color: #004191;
  box-shadow: 0 4px 16px rgba(0, 65, 145, 0.2);
  transform: translateY(-1px);
}

/* Meaning Cards */
.meaning-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  border: 1px solid rgba(107, 114, 128, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.meaning-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #004191, #6b7280);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.meaning-card:hover::after {
  transform: scaleX(1);
}

.meaning-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 65, 145, 0.15);
  border-color: rgba(0, 65, 145, 0.2);
}

/* Color Showcase */
.color-showcase {
  background: linear-gradient(
    135deg,
    rgba(0, 65, 145, 0.02) 0%,
    rgba(0, 65, 145, 0.05) 100%
  );
  border-radius: 16px;
  padding: 2rem 1.5rem;
  border: 1px solid rgba(0, 65, 145, 0.1);
  position: relative;
  overflow: hidden;
}

.color-showcase::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #004191, #ed5e60);
}

/* Alerts */
.v-alert {
  border-radius: 12px !important;
  border: none !important;
  font-size: 1rem !important;
  backdrop-filter: blur(8px);
}

/* Insight Cards */
.insight-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(0, 65, 145, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}

.insight-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 65, 145, 0.15);
  border-color: rgba(0, 65, 145, 0.2);
}

.insight-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #004191;
  margin-bottom: 0.5rem;
}

.insight-text {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

/* Enhanced Animations */
.section-card {
  animation: fadeInUp 0.6s ease-out;
}

.section-card:nth-child(2) {
  animation-delay: 0.1s;
}

.section-card:nth-child(3) {
  animation-delay: 0.2s;
}

.section-card:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhanced Element Cards */
.element-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #004191, #6b7280);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.element-card:hover::after {
  transform: scaleX(1);
}

/* Color Chips Enhancement */
.v-chip {
  transition: all 0.3s ease;
}

.v-chip:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (max-width: 768px) {
  .banner-container {
    border-radius: 0 0 16px 16px;
  }

  .banner-content-overlay {
    padding: 3rem 1rem 2.5rem;
  }

  .banner-title {
    font-size: 1.75rem;
  }

  .banner-subtitle {
    font-size: 0.9rem;
  }

  .banner-badge {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }

  .main-content-area {
    padding: 0 1rem;
    margin-top: 1rem;
    margin-bottom: 4rem; /* Added bottom margin for footer spacing on mobile */
  }

  .content-intro {
    padding: 2rem 1.5rem;
    border-radius: 16px;
  }

  .intro-title {
    font-size: 1.5rem;
  }

  .intro-description {
    font-size: 1rem;
  }

  .section-card {
    padding: 2rem 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 16px;
  }

  .section-header {
    flex-direction: column;
    text-align: center;
    margin-bottom: 2rem;
  }

  .section-icon-wrapper {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .conclusion-section {
    padding: 3rem 1.5rem;
  }

  .logo-frame {
    min-height: 280px;
    padding: 1.5rem;
  }

  .showcase-logo {
    width: 300px !important;
    height: 220px !important;
  }
}
</style>
