<template>
  <v-row justify="center" id="campus-map">
    <v-col cols="12" md="8">
      <!-- Campus Map -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">Campus Map</v-card-title>
        <v-card-text class="text-body">
          <!-- KAIST Campus Map Image -->
          <v-row class="my-4">
            <v-col cols="12">
              <v-img
                :src="require('@/assets/Map/kaist_map.png')"
                alt="KAIST Campus Map"
                class="venue-image-optimized"
                aspect-ratio="16/9"
                cover
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Conference Schedule -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">Conference Schedule</v-card-title>
        <v-card-text class="text-body">
          <span class="highlight-text">Sep 21: E11 Creative Learning B/D & E15 Auditorium</span>
          <ul class="dot-list">
            <li>Registration (E11 1F Lobby)</li>
            <li>Tutorial Sessions (E11 101A, 102A, 103A)</li>
          </ul>
          <br />
          <span class="highlight-text">Sep 22-25: E15 Auditorium</span>
          <ul class="dot-list">
            <li>Registration (E15 1F Lobby)</li>
            <li>Main Conference</li>
            <li>Oral Presentation Session (E15 Concert Hall)</li>
            <li>Poster Session (E15 Seminar Room)</li>
          </ul>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Important Notices -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">Important Notices</v-card-title>
        <v-card-text class="text-body">
          <span class="highlight-text">Entrance Guide for E11</span>: Because of the construction, the entry of E11 marked in red is currently blocked.
          <br /><br />
          <!-- E11 Entrance Guide Image -->
          <v-row class="my-4">
            <v-col cols="12" md="8">
              <v-img
                :src="require('@/assets/Map/entrance_cl.png')"
                alt="E11 Entrance Guide"
                class="venue-image-optimized"
                aspect-ratio="16/9"
                cover
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <br /><br /><br />
    </v-col>
  </v-row>
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
.dot-list {
  list-style-type: disc;
  font-size: 18px;
  padding-left: 40px;
  line-height: 1.8;
}

.text-body {
  font-size: 18px;
  line-height: 1.6;
  white-space: normal;
  overflow-wrap: break-word;
}

.v-card-title {
  white-space: normal;
  overflow-wrap: break-word;
}

.highlight-text {
  color: #004191;
  font-weight: bold;
}

.venue-image-optimized {
  width: 100%;
  transition: transform 0.3s ease;
}

.venue-image-optimized:hover {
  transform: translateY(-2px);
}
</style>
