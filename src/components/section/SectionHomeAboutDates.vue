<template>
  <v-row justify="center" id="home-about-dates">
    <v-col cols="12" md="8">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">About</v-card-title>
        <v-card-text class="text-body">
          The 26th International Society for Music Information Retrieval
          Conference (ISMIR 2025) will take place at the KAIST campus in
          Daejeon, Korea, from September 21 to 25, 2025. ISMIR is the largest
          research venue for scholars, researchers, practitioners, and
          industries in the field of Music Information Retrieval (MIR)-an
          interdisciplinary area focused on processing, analyzing, indexing,
          organizing, and accessing music-related data. More program details
          will be available soon, so please stay tuned!
        </v-card-text>
        <br />
        <v-divider></v-divider>
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Important Dates</v-card-title
        >
        <v-card-text class="text-body">
          All deadlines are at 23:59 AoE.
        </v-card-text>

        <v-card-title class="text-h5" style="color: grey"
          >Call for Papers</v-card-title
        >

        <v-container class="table-container">
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4"><s>Abstract Submission Due</s></v-col>
            <v-col cols="5" sm="8"><s>Mar 21, 2025</s></v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4"><s>Full Paper Submission Due</s></v-col>
            <v-col cols="5" sm="8"><s>Mar 28, 2025</s></v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4"><s>Acceptance Notification</s></v-col>
            <v-col cols="5" sm="8"><s>Jun 6, 2025</s></v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4"><s>Camera-Ready Upload Due</s></v-col>
            <v-col cols="5" sm="8"><s>Jun 28, 2025</s></v-col>
          </v-row>
        </v-container>
        <br />
        <v-card-title class="text-h5" style="color: grey"
          >Registration</v-card-title
        >

        <v-container class="table-container">
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4"><s>Author registration deadline</s></v-col>
            <v-col cols="5" sm="8"><s>July 18, 2025</s></v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4"
              ><s>Early Bird registration deadline</s></v-col
            >
            <v-col cols="5" sm="8"><s>August 4, 2025</s></v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4">Regular Registration deadline</v-col>
            <v-col cols="5" sm="8">September 10, 2025</v-col>
          </v-row>
        </v-container>
        <br />

        <!--
        <v-card-title class="text-h5" style="color: grey"
          >Music submissions</v-card-title
        >

        <v-container class="table-container">
          <v-row class="table-row">
            <v-col cols="6">Submission opening</v-col>
            <v-col cols="6">2025.00.00.</v-col>
          </v-row>
          <v-row class="table-row">
            <v-col cols="6">Submission</v-col>
            <v-col cols="6">2025.00.00.</v-col>
          </v-row>
          <v-row class="table-row">
            <v-col cols="6">Notification of acceptance</v-col>
            <v-col cols="6">2025.00.00.</v-col>
          </v-row>
          <v-row class="table-row">
            <v-col cols="6">Final version submission</v-col>
            <v-col cols="6">2025.00.00.</v-col>
          </v-row>
        </v-container>
        <br />

        <v-card-title class="text-h5 my-3" style="color: grey"
          >Registration</v-card-title
        >

        <v-container class="table-container">
          <v-row class="table-row">
            <v-col cols="6">Author registration</v-col>
            <v-col cols="6">2025.00.00.</v-col>
          </v-row>
          <v-row class="table-row">
            <v-col cols="6">Early Bird Registration</v-col>
            <v-col cols="6">2025.00.00.</v-col>
          </v-row>
        </v-container>
        <br />
        <v-divider></v-divider>
        -->
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Submission Portal</v-card-title
        >
        <v-card-text class="text-body">
          <a
            href="https://cmt3.research.microsoft.com/ISMIR2025/"
            target="_blank"
            style="color: #1487c8"
            >https://cmt3.research.microsoft.com/ISMIR2025/
          </a>
        </v-card-text>
      </v-card>

      <v-divider></v-divider>
      <br />
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Conference Sponsors and Exhibitors</v-card-title
        >

        <!-- Platinum Sponsors -->
        <v-card-title
          class="text-h5 mt-4 mb-2"
          style="color: #b8860b; font-weight: bold"
          >Platinum Sponsors</v-card-title
        >
        <v-row justify="center" class="mt-2 mb-4" align="center">
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="adobeLogo" alt="Adobe" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="moisesLogo" alt="Moises.Ai" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img
                :src="udioLogo"
                alt="Udio"
                class="logo-image"
                style="transform: scale(0.7)"
              />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="algoriddimLogo" alt="Algoriddim" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img
                :src="googleDeepmindLogo"
                alt="Google Deepmind"
                class="logo-image"
              />
            </div>
          </v-col>
          <!-- In progress sponsors - commented out -->
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="spotifyLogo" alt="Spotify" class="logo-image" />
            </div>
          </v-col>
        </v-row>

        <!-- Silver Sponsors -->
        <v-card-title
          class="text-h5 mt-4 mb-2"
          style="color: #708090; font-weight: bold"
          >Silver Sponsors</v-card-title
        >
        <v-row justify="center" class="mt-2 mb-4" align="center">
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="yamahaLogo" alt="Yamaha" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="neutuneLogo" alt="Neutune" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="steinbergLogo" alt="Steinberg" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="alphaThetaLogo" alt="AlphaTheta" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="sunoLogo" alt="Suno" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="umgLogo" alt="Universal Music" class="logo-image" />
            </div>
          </v-col>
        </v-row>

        <!-- Bronze Sponsors -->
        <v-card-title
          class="text-h5 mt-4 mb-2"
          style="color: #a0522d; font-weight: bold"
          >Bronze Sponsors</v-card-title
        >
        <v-row justify="center" class="mt-2 mb-4" align="center">
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="cochlLogo" alt="Cochl" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img
                :src="audibleMagicLogo"
                alt="Audible Magic"
                class="logo-image"
              />
            </div>
          </v-col>
          <!-- BMAT -->
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="bmatLogo" alt="BMAT" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="deezerLogo" alt="Deezer" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="gaudioLogo" alt="Gaudio" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="mippiaLogo" alt="MIPPIA" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="rolandLogo" alt="Roland" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="audaiLogo" alt="AudAI" class="logo-image" />
            </div>
          </v-col>
          <!-- Piascore -->
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="piascoreLogo" alt="Piascore" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="neutoneLogo" alt="Neutone" class="logo-image" />
            </div>
          </v-col>
        </v-row>

        <!-- Special Thanks -->
        <v-card-title
          class="text-h5 mt-4 mb-2"
          style="color: grey; font-weight: bold"
          >Special Thanks</v-card-title
        >
        <v-row justify="center" class="mt-2 mb-4" align="center">
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img
                :src="dtoLogo"
                alt="Daejeon Tourism Organization"
                class="logo-image"
              />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img
                :src="ktLogo"
                alt="Korea Tourism Organization"
                class="logo-image"
              />
            </div>
          </v-col>
        </v-row>

        <!-- Hosted by -->
        <v-card-title
          class="text-h5 mt-4 mb-2"
          style="color: #4caf50; font-weight: bold"
          >Hosted by</v-card-title
        >
        <v-row justify="center" class="mt-2 mb-4" align="center">
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="kaistLogo" alt="KAIST" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img
                :src="sogangLogo"
                alt="Sogang University"
                class="logo-image"
              />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img :src="ksmiLogo" alt="KSMI" class="logo-image" />
            </div>
          </v-col>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            class="d-flex justify-center pa-3 my-2"
          >
            <div class="logo-container">
              <img
                :src="sogangFutureLabLogo"
                alt="Sogang Future Lab"
                class="logo-image"
              />
            </div>
          </v-col>
        </v-row>
        <br />
        <v-divider></v-divider>
      </v-card>
      <br />
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >General inquiries</v-card-title
        >

        <v-card-text class="text-body">
          <a
            href="mailto:ismir2025@ismir.net"
            style="color: #1487c8; text-decoration: none"
          >
            ismir2025@ismir.net
          </a>
        </v-card-text>
      </v-card>
      <br /><br /><br />
    </v-col>
  </v-row>
</template>

<script setup>
// import { useClipboard } from "@vueuse/core"; // 더 이상 사용하지 않음
import kaistLogo from "@/assets/sponserLogos/fhd/kaist.webp";
import sogangLogo from "@/assets/sponserLogos/fhd/sogang.webp";
import dtoLogo from "@/assets/sponserLogos/fhd/daejeonTourismOrganization.webp";
import ktLogo from "@/assets/sponserLogos/fhd/KTO.webp";
import ksmiLogo from "@/assets/logo/KSMI.png";
import sogangFutureLabLogo from "@/assets/logo/fhd/SogangFutureLab.webp";

// Platinum Sponsors (10,000)
import adobeLogo from "@/assets/logo/Adobe.png";
import moisesLogo from "@/assets/logo/Moises.png";
import udioLogo from "@/assets/logo/Udio.png";
import algoriddimLogo from "@/assets/logo/algoriddim.png";
import googleDeepmindLogo from "@/assets/logo/GoogleDeepmind.png";
import spotifyLogo from "@/assets/logo/Spotify.png";

// Silver Sponsors (4,000)
import yamahaLogo from "@/assets/logo/yamaha.png";
import neutuneLogo from "@/assets/logo/neutune.png";
import steinbergLogo from "@/assets/logo/Steinberg.png";
import alphaThetaLogo from "@/assets/logo/AlphaTheta.png";
import sunoLogo from "@/assets/logo/SUNO.png";
import umgLogo from "@/assets/logo/UMG.png";

// Bronze Sponsors (2,000)
import cochlLogo from "@/assets/logo/Cochl.png";
import audibleMagicLogo from "@/assets/logo/Audible Magic.png";
import bmatLogo from "@/assets/logo/bmat.png";
import deezerLogo from "@/assets/logo/Deezer.png";
import gaudioLogo from "@/assets/logo/Gaudio.png";
import mippiaLogo from "@/assets/logo/MIPPIA.png";
import rolandLogo from "@/assets/logo/Roland.png";
import audaiLogo from "@/assets/logo/AudAi.png";
import piascoreLogo from "@/assets/logo/piascore.png";
import neutoneLogo from "@/assets/logo/neutone.png"; // In progress

// 이메일 관련 함수들은 더 이상 필요하지 않음 (mailto 링크 사용)
</script>

<style scoped>
.logo-container {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  margin: 0; /* ���� ���� */
}

.logo-image {
  max-height: 70px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.text-body {
  font-size: 18px; /* �ؽ�Ʈ ��Ʈ ũ�� ���� */
  line-height: 1.6; /* �������� ���� �� ���� ���� */
}

.table-row v-col {
  font-size: 16px; /* ǥ�� �ؽ�Ʈ ��Ʈ ũ�� ���� */
}
.styled-row {
  border-bottom: 1px solid #d3d3d3; /* ȸ�� �� */
  padding-bottom: 8px; /* �ٰ� ���� �� ���� */
}
</style>
