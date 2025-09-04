<template>
  <v-row justify="center" id="meet-the-sponsors">
    <v-col cols="12" md="10">
      <!-- Platinum Sponsors -->
      <div v-if="platinumSponsors.length > 0">
        <h2 class="sponsor-tier-title platinum-title">Platinum Sponsor</h2>
        <v-row align="stretch">
          <v-col
            v-for="sponsor in platinumSponsors"
            :key="sponsor.id"
            cols="12"
            md="6"
          >
            <SponsorCard :sponsor="sponsor" />
          </v-col>
        </v-row>
      </div>

      <br /><br />

      <!-- Silver Sponsors -->
      <div v-if="silverSponsors.length > 0">
        <h2 class="sponsor-tier-title silver-title">Silver Sponsors</h2>
        <v-row align="stretch">
          <v-col
            v-for="sponsor in silverSponsors"
            :key="sponsor.id"
            cols="12"
            md="6"
          >
            <SponsorCard :sponsor="sponsor" />
          </v-col>
        </v-row>
      </div>
      <br /><br />
      <!-- Bronze Sponsors -->
      <div v-if="bronzeSponsors.length > 0">
        <h2 class="sponsor-tier-title bronze-title">Bronze Sponsors</h2>
        <v-row align="stretch">
          <v-col
            v-for="sponsor in bronzeSponsors"
            :key="sponsor.id"
            cols="12"
            md="6"
          >
            <SponsorCard :sponsor="sponsor" />
          </v-col>
        </v-row>
      </div>
      <br /><br />
      <!-- WiMIR Contributors -->
      <div v-if="wimirContributors.length > 0">
        <h2 class="sponsor-tier-title wimir-contributor-title">
          WiMIR Contributors
        </h2>
        <v-row align="stretch">
          <v-col
            v-for="sponsor in wimirContributors"
            :key="sponsor.id"
            cols="12"
            md="6"
          >
            <SponsorCard :sponsor="sponsor" />
          </v-col>
        </v-row>
      </div>

      <br /><br />
      <!-- WiMIR Supporters -->
      <div v-if="wimirSupporters.length > 0">
        <h2 class="sponsor-tier-title wimir-supporter-title">
          WiMIR Supporters
        </h2>
        <v-row align="stretch">
          <v-col
            v-for="sponsor in wimirSupporters"
            :key="sponsor.id"
            cols="12"
            md="6"
          >
            <SponsorCard :sponsor="sponsor" />
          </v-col>
        </v-row>
      </div>

      <br /><br />
      <!-- WiMIR Patrons -->
      <div v-if="wimirPatrons.length > 0">
        <h2 class="sponsor-tier-title wimir-title">WiMIR Patrons</h2>
        <v-row align="stretch">
          <v-col
            v-for="sponsor in wimirPatrons"
            :key="sponsor.id"
            cols="12"
            md="6"
          >
            <SponsorCard :sponsor="sponsor" />
          </v-col>
        </v-row>
      </div>

      <br /><br />
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from "vue";
import SponsorCard from "@/components/base/SponsorCard.vue";
import { sponsors } from "@/data/sponsors.js";

// 티어별로 스폰서 분류

const platinumSponsors = computed(() =>
  sponsors.filter((s) => s.tiers.includes("platinum"))
);

const silverSponsors = computed(() =>
  sponsors.filter((s) => s.tiers.includes("silver"))
);
const bronzeSponsors = computed(() =>
  sponsors.filter((s) => s.tiers.includes("bronze"))
);
const wimirContributors = computed(() =>
  sponsors.filter((s) => s.tiers.includes("wimir-contributor"))
);
const wimirSupporters = computed(() =>
  sponsors.filter((s) => s.tiers.includes("wimir-supporter"))
);
const wimirPatrons = computed(() =>
  sponsors.filter((s) => s.tiers.includes("wimir-patron"))
);
</script>

<style scoped>
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

.sponsor-tier-title {
  font-size: 28px;
  font-weight: 700;
  margin: 40px 0 20px 0;
  padding: 12px 0;
  border-bottom: 3px solid;
  text-align: center;
}

.diamond-title {
  color: #b9f2ff;
  border-color: #b9f2ff;
  background: linear-gradient(135deg, #b9f2ff 0%, #a8e6cf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.platinum-title {
  color: #b8860b;
  border-color: #b8860b;
}

.gold-title {
  color: #ffd700;
  border-color: #ffd700;
}

.silver-title {
  color: #708090;
  border-color: #708090;
}

.bronze-title {
  color: #a0522d;
  border-color: #a0522d;
}

.wimir-contributor-title {
  color: #ff9800;
  border-color: #ff9800;
}

.wimir-supporter-title {
  color: #2196f3;
  border-color: #2196f3;
}

.wimir-title {
  color: #9c27b0;
  border-color: #9c27b0;
}

@media (max-width: 768px) {
  .sponsor-tier-title {
    font-size: 22px;
    margin: 30px 0 15px 0;
  }

  .text-body {
    font-size: 16px;
  }
}
</style>
