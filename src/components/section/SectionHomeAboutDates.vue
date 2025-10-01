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
            <v-col cols="7" sm="4"><s>Regular Registration deadline</s></v-col>
            <v-col cols="5" sm="8"><s>September 10, 2025</s></v-col>
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
          <v-btn
            href="https://cmt3.research.microsoft.com/ISMIR2025/"
            target="_blank"
            color="primary"
            variant="outlined"
            size="large"
            prepend-icon="mdi-upload"
            class="mb-3"
          >
            Submit Your Paper via Microsoft CMT
          </v-btn>
          <br />
          <div class="text-caption mt-2" style="color: #666">
            Microsoft Conference Management Toolkit (CMT) - Official submission
            portal for ISMIR 2025
          </div>
        </v-card-text>
      </v-card>

      <v-divider></v-divider>
      <br />
      
      <!-- Awards Section -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-6 font-weight-bold"
          >🏆 ISMIR 2025 Awards</v-card-title
        >
        
        <!-- Test-of-Time Awards -->
        <div class="award-category mb-8">
          <v-card-title
            class="text-h5 mb-4"
            style="color: #d4af37; font-weight: 600"
            >Test-of-Time Awards</v-card-title
          >
          
          <v-row justify="center" class="mb-4">
            <!-- 10-Year Test-of-Time Award -->
            <v-col cols="12" md="6" class="pa-2">
              <div class="modern-award-card">
                <div class="award-badge">10-Year Award</div>
                <h3 class="award-title">An Efficient State-Space Method for Joint Tempo and Meter Tracking</h3>
                <p class="award-authors">Florian Krebs, Sebastian Böck, and Gerhard Widmer</p>
              </div>
            </v-col>
            
            <!-- 10-Year Test-of-Time Runner-Up -->
            <v-col cols="12" md="6" class="pa-2">
              <div class="modern-award-card">
                <div class="award-badge runner-up">10-Year Runner-Up</div>
                <h3 class="award-title">A Software Framework For Musical Data Augmentation</h3>
                <p class="award-authors">Brian McFee, Eric J. Humphrey, and Juan P. Bello</p>
              </div>
            </v-col>
          </v-row>
          
          <v-row justify="center">
            <!-- Classical Test-of-Time Awards -->
            <v-col cols="12" md="6" class="pa-2">
              <div class="modern-award-card">
                <div class="award-badge classical">Classical Award</div>
                <h3 class="award-title">Audio Matching via Chroma-Based Statistical Features</h3>
                <p class="award-authors">Meinard Müller, Frank Kurth, Michael Clausen</p>
              </div>
            </v-col>
            
            <v-col cols="12" md="6" class="pa-2">
              <div class="modern-award-card">
                <div class="award-badge classical">Classical Award</div>
                <h3 class="award-title">AIST Annotation for the Music Database</h3>
                <p class="award-authors">Masataka Goto</p>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Best Paper Awards -->
        <div class="award-category mb-8">
          <v-card-title
            class="text-h5 mb-4"
            style="color: #ff6b35; font-weight: 600"
            >Best Paper Awards</v-card-title
          >
          
          <v-row justify="center">
            <v-col cols="12" md="6" class="pa-2">
              <div class="modern-award-card best-paper">
                <div class="award-badge best">Best Paper</div>
                <h3 class="award-title">A Fourier Explanation of AI-music Artifacts</h3>
                <p class="award-authors">Darius Afchar, Gabriel Meseguer Brocal, Kamil Akesbi, Romain Hennequin</p>
              </div>
            </v-col>
            
            <v-col cols="12" md="6" class="pa-2">
              <div class="modern-award-card best-paper">
                <div class="award-badge best">Best Paper</div>
                <h3 class="award-title">Are you really listening? Boosting Perceptual Awareness in Music-QA Benchmarks</h3>
                <p class="award-authors">Yongyi Zang, Sean O'brien, Taylor Berg Kirkpatrick, Julian McAuley, Zachary Novack</p>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Best Student Paper Awards -->
        <div class="award-category mb-8">
          <v-card-title
            class="text-h5 mb-4"
            style="color: #4caf50; font-weight: 600"
            >Best Student Paper Awards</v-card-title
          >
          
          <v-row justify="center">
            <v-col cols="12" md="6" class="pa-2">
              <div class="modern-award-card student-paper">
                <div class="award-badge student">Best Student</div>
                <h3 class="award-title">Audio synthesizer inversion in symmetric parameter spaces with approximately equivariant flow matching</h3>
                <p class="award-authors">Ben Hayes, Charalampos Saitis, György Fazekas</p>
              </div>
            </v-col>
            
            <v-col cols="12" md="6" class="pa-2">
              <div class="modern-award-card student-paper">
                <div class="award-badge student">Best Student</div>
                <h3 class="award-title">GlobalMood: A cross-cultural benchmark for music emotion recognition</h3>
                <p class="award-authors">Harin Lee, Elif Çöleri, Peter Harrison, Manuel Anglada Tort, Pol Van Rijn, Minou Park, Marc Schönwiesner, Nori Jacoby</p>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Outstanding Reviewers -->
        <div class="award-category">
          <v-card-title
            class="text-h5 mb-4"
            style="color: #9c27b0; font-weight: 600"
            >Outstanding Reviewers</v-card-title
          >
          
          <div class="reviewers-grid">
            <v-row>
              <v-col cols="12" md="6">
                <div class="reviewer-column">
                  <div class="reviewer-card">
                    <strong>Ilya Borovik</strong>
                    <span>Skolkovo Institute of Science and Technology</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Andrea Poltronieri</strong>
                    <span>MTG - Universitat Pompeu Fabra</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Yannis Vasilakis</strong>
                    <span>Queen Mary University of London</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Martin Malandro</strong>
                    <span>Sam Houston State University</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Nithya Shikarpur</strong>
                    <span>Mila; University of Montreal</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Richa Namballa</strong>
                    <span>New York University</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Francesco Foscarin</strong>
                    <span>Music AI</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Benjamin Martin</strong>
                    <span>Deezer</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Ondřej Cífka</strong>
                    <span>AudioShake</span>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="reviewer-column">
                  <div class="reviewer-card">
                    <strong>Yiwei Ding</strong>
                    <span>University of Würzburg</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Shih-Lun Wu</strong>
                    <span>National Taiwan University</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Ben Hayes</strong>
                    <span>Queen Mary University of London</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Katharina Hoedt</strong>
                    <span>Johannes Kepler University Linz</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Yi Wu</strong>
                    <span>NYU Music and Audio Research Laboratory</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Juan Carlos Martinez-Sevilla</strong>
                    <span>University of Alicante</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Peter Meier</strong>
                    <span>International Audio Laboratories Erlangen</span>
                  </div>
                  <div class="reviewer-card">
                    <strong>Charilaos Papaioiannou</strong>
                    <span>National Technical University of Athens</span>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
        
        <br />
        <v-divider></v-divider>
      </v-card>
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

/* Modern Awards Section Styles */
.award-category {
  margin-bottom: 3rem;
}

.modern-award-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border: 1px solid #e9ecef;
  border-radius: 16px;
  padding: 24px;
  height: 100%;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.modern-award-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.award-badge {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.award-badge.runner-up {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.award-badge.classical {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.award-badge.best {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.award-badge.student {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.award-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: #2c3e50;
  margin-bottom: 12px;
  margin-top: 0;
}

.award-authors {
  font-size: 15px;
  color: #6c757d;
  line-height: 1.5;
  margin-bottom: 0;
}

/* Outstanding Reviewers Modern Styles */
.reviewers-grid {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
}

.reviewer-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.reviewer-card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: all 0.2s ease;
  border: 1px solid #e9ecef;
}

.reviewer-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.reviewer-card strong {
  font-size: 16px;
  color: #2c3e50;
  font-weight: 600;
}

.reviewer-card span {
  font-size: 14px;
  color: #6c757d;
  line-height: 1.3;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .modern-award-card {
    margin-bottom: 16px;
  }
  
  .reviewer-column {
    margin-bottom: 20px;
  }
}
</style>
