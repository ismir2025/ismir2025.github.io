<template>
  <v-row justify="center" id="transportation">
    <v-col cols="12" md="8">
      <!-- ISMIR 2025 Access Guide PDF -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >ISMIR 2025 Access Guide</v-card-title
        >
        <v-card-text class="text-body">
          <v-btn
            color="primary"
            href="/ISMIR2025_Acess Guide.pdf"
            target="_blank"
            large
            class="mt-2"
          >
            <v-icon left>mdi-file-pdf-box</v-icon>
            Download ISMIR 2025 Access Guide (PDF)
          </v-btn>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Tips for a Smooth Journey -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Tips for a Smooth Journey</v-card-title
        >
        <v-row class="my-4">
          <v-col cols="12">
            <v-card class="tips-card pa-4" elevation="2">
              <v-card-title class="text-h6 highlight-text mb-3">
                <v-icon left color="#004191">mdi-lightbulb-outline</v-icon>
                Helpful Tips for International Visitors
              </v-card-title>
              <v-card-text>
                <v-list dense>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="#004191">mdi-translate</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold"
                        >Language Assistance</v-list-item-title
                      >
                      <v-list-item-subtitle class="text-wrap-tips">
                        Most staff understand basic English. Having your
                        destination written in Korean can be helpful.
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="#004191">mdi-clock-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold"
                        >Peak Hours</v-list-item-title
                      >
                      <v-list-item-subtitle class="text-wrap-tips">
                        Avoid peak traffic: 8-9 AM and 5:30-6:30 PM.
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <!-- Routes Overview - Table of Contents -->
                  <v-card
                    outlined
                    elevation="0"
                    class="pa-4 my-4"
                    style="background-color: #f8f9fa"
                  >
                    <v-card-title class="text-h4 mb-3 font-weight-bold"
                      >Routes Overview</v-card-title
                    >
                    <v-container class="table-container mt-4">
                      <!-- Route 1 -->
                      <v-row
                        class="table-row styled-row"
                        style="cursor: pointer"
                        @click="scrollToSection('route-1')"
                      >
                        <v-col
                          cols="5"
                          md="2"
                          class="text-center font-weight-bold highlight-text"
                          >Route 1</v-col
                        >
                        <v-col
                          cols="7"
                          md="10"
                          style="color: #000000; text-decoration: underline"
                        >
                          Incheon International Airport → Daejeon Government
                          Complex → KAIST
                        </v-col>
                      </v-row>

                      <!-- Route 2 -->
                      <v-row
                        class="table-row styled-row"
                        style="cursor: pointer"
                        @click="scrollToSection('route-2')"
                      >
                        <v-col
                          cols="5"
                          md="2"
                          class="text-center font-weight-bold"
                          >Route 2</v-col
                        >
                        <v-col
                          cols="7"
                          md="10"
                          style="color: #000000; text-decoration: underline"
                        >
                          Incheon International Airport → Seoul (Railway)
                          Station → Daejeon (Railway) Station → KAIST
                        </v-col>
                      </v-row>

                      <!-- Route 3 -->
                      <v-row
                        class="table-row styled-row"
                        style="cursor: pointer"
                        @click="scrollToSection('route-3')"
                      >
                        <v-col
                          cols="5"
                          md="2"
                          class="text-center font-weight-bold"
                          >Route 3</v-col
                        >
                        <v-col
                          cols="7"
                          md="10"
                          style="color: #000000; text-decoration: underline"
                        >
                          Gimpo International Airport → Seoul (Railway) Station
                          → Daejeon (Railway) Station → KAIST
                        </v-col>
                      </v-row>
                    </v-container>
                    <br />
                    <v-divider></v-divider>
                    <br />
                  </v-card>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="#004191">mdi-cellphone</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold"
                        >Apps to Use</v-list-item-title
                      >
                      <v-list-item-subtitle class="apps-container">
                        <div class="mt-2 d-flex flex-wrap align-center">
                          <a
                            href="https://map.kakao.com/"
                            target="_blank"
                            style="text-decoration: none"
                          >
                            <v-chip
                              small
                              class="mr-2 mb-2"
                              color="primary"
                              text-color="white"
                              >Kakao Map</v-chip
                            >
                          </a>
                          <span class="mr-2 mb-2">or</span>
                          <a
                            href="https://map.naver.com/"
                            target="_blank"
                            style="text-decoration: none"
                          >
                            <v-chip
                              small
                              class="mr-2 mb-2"
                              color="primary"
                              text-color="white"
                              >Naver Map</v-chip
                            >
                          </a>
                          <span class="mr-2 mb-2">or</span>
                          <a
                            href="https://maps.apple.com/"
                            target="_blank"
                            style="text-decoration: none"
                          >
                            <v-chip
                              small
                              class="mr-2 mb-2"
                              color="primary"
                              text-color="white"
                              >Apple Maps</v-chip
                            >
                          </a>
                          <span class="text-wrap mb-2">for navigation</span>
                        </div>
                        <div class="mt-2 d-flex flex-wrap align-center">
                          <a
                            href="https://www.kakaocorp.com/page/service/service/KakaoTaxi"
                            target="_blank"
                            style="text-decoration: none"
                          >
                            <v-chip
                              small
                              class="mr-2 mb-2"
                              color="success"
                              text-color="white"
                              >Kakao Taxi</v-chip
                            >
                          </a>
                          <span class="mr-2 mb-2">or</span>
                          <a
                            href="https://www.uber.com/"
                            target="_blank"
                            style="text-decoration: none"
                          >
                            <v-chip
                              small
                              class="mr-2 mb-2"
                              color="success"
                              text-color="white"
                              >Uber</v-chip
                            >
                          </a>
                          <span class="text-wrap mb-2">for taxi bookings</span>
                        </div>
                        <div class="mt-2 d-flex flex-wrap align-center">
                          <a
                            href="https://www.letskorail.com/ebizbf/EbizBfTicketSearch.do"
                            target="_blank"
                            style="text-decoration: none"
                          >
                            <v-chip
                              small
                              class="mr-2 mb-2"
                              color="info"
                              text-color="white"
                              >Korail App</v-chip
                            >
                          </a>
                          <span class="text-wrap mb-2"
                            >for train tickets and schedules</span
                          >
                        </div>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                
                <v-alert type="warning" class="mt-3">
                  <strong>Note:</strong> We disrecommend using Google Map due to its incompatibility in Korea.
                </v-alert>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- 주요 위치 안내 지도 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Key Locations Map
        </v-card-title>
        <v-card-text class="text-body">
          You can view the locations of key conference venues and airport bus
          stops on the map below.
          <br /><br />

          <v-btn
            color="primary"
            href="https://maps.app.goo.gl/5RB8d6FcahjnnGgg9"
            target="_blank"
            large
            class="mt-2"
          >
            <v-icon left>mdi-map</v-icon>
            View Key Locations on Google Maps
          </v-btn>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Transportation</v-card-title
        >
        <v-card-text class="text-body">
          <v-container class="destination-info mb-4" fluid>
            <v-card class="pa-4" color="#E6F2FD" elevation="1">
              <v-card-title class="text-h6 highlight-text mb-2">
                <v-icon left color="#004191">mdi-map-marker</v-icon>
                Destination
              </v-card-title>
              <v-card-text class="text-body">
                <strong>KAIST</strong><br />
                291 Daehak-ro, Yuseong-gu, Daejeon 34141, Republic of Korea
              </v-card-text>
            </v-card>
          </v-container>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Route 1 (Recommended) -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="route-1">
        <v-card-title class="text-h4 mb-3 font-weight-bold highlight-text">
          Route 1 (Recommended)
          <v-card-subtitle class="text-h6 mb-2 pa-0">
            Incheon International Airport → Daejeon Government Complex
          </v-card-subtitle>
        </v-card-title>

        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="pl-6">
                <!-- Step 1 - Bus -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-bus</v-icon>
                    <span class="step-title-text">Step 1 - Bus to Daejeon</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container class="bus-info mb-3" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >Bus Route Information</v-card-subtitle
                      >
                      <v-card-text class="pa-0">
                        <p>
                          Incheon Airport T2 (Terminal 2) → Incheon Airport
                          (Terminal 1) → North Daejeon IC → Daedeok Community
                          Center → Daejeon Government Complex (Daejeon Cheongsa)
                          → Daejeon
                        </p>
                        <v-list dense>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title
                                ><strong>Duration:</strong> About 3
                                hours</v-list-item-title
                              >
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title
                                ><strong>Fare (KRW):</strong> KRW 26,100-28,700
                                (excluding Premium Bus)</v-list-item-title
                              >
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-container>

                    <v-container class="schedule-table mb-3" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >First and Last Bus Times</v-card-subtitle
                      >
                      <v-container class="schedule-table-container" fluid>
                        <!-- 헤더 행 -->
                        <v-row class="table-row styled-row table-header">
                          <v-col cols="4" class="text-center">Terminal</v-col>
                          <v-col cols="4" class="text-center">First Bus</v-col>
                          <v-col cols="4" class="text-center">Last Bus</v-col>
                        </v-row>

                        <!-- Terminal 1 행 -->
                        <v-row class="table-row styled-row">
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              style="background-color: #004191; color: white"
                              class="mr-2"
                              >T1</v-chip
                            >
                            Terminal 1
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #edd35e; color: #000000"
                              >06:20</v-chip
                            >
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #ed5e60; color: #000000"
                              >23:20</v-chip
                            >
                          </v-col>
                        </v-row>

                        <!-- Terminal 2 행 -->
                        <v-row class="table-row styled-row">
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              style="background-color: #004191; color: white"
                              class="mr-2"
                              >T2</v-chip
                            >
                            Terminal 2
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #edd35e; color: #000000"
                              >06:00</v-chip
                            >
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #ed5e60; color: #000000"
                              >23:00</v-chip
                            >
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-container>

                    <v-container class="ticket-info mb-3" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >How to purchase a ticket:</v-card-subtitle
                      >
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Online Reservation Website:</strong>
                              <a
                                href="https://intercitybuse.tmoney.co.kr/"
                                target="_blank"
                                >https://intercitybuse.tmoney.co.kr/</a
                              ></v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong
                                >Offline Reservation Guide (Ticket Counter/Kiosk
                                Location):</strong
                              >
                              <a
                                href="https://www.airport.kr/ap_en/1502/subview.do"
                                target="_blank"
                                >https://www.airport.kr/ap_en/1502/subview.do</a
                              ></v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-container>

                    <v-container class="bus-stop-info" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >Bus Stop Locations</v-card-subtitle
                      >
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Terminal 1 bus stop location:</strong> 1
                              Floor, No. 11</v-list-item-title
                            >
                            <div class="mt-3">
                              <v-img
                                :src="
                                  require('@/assets/Transportation/BusStopLocation_Turminal1.png')
                                "
                                alt="Terminal 1 Bus Stop Location"
                                max-width="100%"
                                contain
                                class="mb-3"
                              ></v-img>
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Terminal 2 bus stop location:</strong>
                              Transportation Center Basement 1, No.
                              5</v-list-item-title
                            >
                            <div class="mt-3">
                              <v-img
                                :src="
                                  require('@/assets/Transportation/BusStopLocation_Turminal2.png')
                                "
                                alt="Terminal 2 Bus Stop Location"
                                max-width="100%"
                                contain
                                class="mb-3"
                              ></v-img>
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-container>
                  </v-card-text>
                </v-card>

                <!-- Step 2 - Taxi -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-taxi</v-icon>
                    Step 2 - Taxi: Daejeon Government Complex (Daejeon Cheongsa)
                    → KAIST
                  </v-card-title>
                  <v-card-text>
                    <v-list dense class="mb-3">
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >You can use the Uber app to catch a
                            taxi.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            ><strong>Duration:</strong> About 7
                            minutes</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            ><strong>Fare (KRW):</strong> About
                            5,000</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-container class="taxi-instruction" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >To take a taxi to KAIST, show the following korean
                        instructions to the taxi driver:</v-card-subtitle
                      >
                      <v-card class="code-block pa-3">
                        <v-card-text class="korean-text pa-0"
                          >"카이스트 본원으로 가주세요. (대전 유성구 대학로
                          291)"</v-card-text
                        >
                        <v-card-text class="translation-text pa-0"
                          >(Translation: Please go to KAIST. (291 Daehak-ro,
                          Yuseong-gu, Daejeon))</v-card-text
                        >
                      </v-card>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Route 2 -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="route-2">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Route 2
          <v-card-subtitle class="text-h6 mb-2 pa-0">
            Incheon International Airport → Seoul Railway Station → Daejeon
            Railway Station
          </v-card-subtitle>
        </v-card-title>

        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="pl-6">
                <!-- Step 1 - Train to Seoul -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-train</v-icon>
                    Step 1 - Train: Incheon International Airport → Seoul
                    Railway Station
                  </v-card-title>
                  <v-card-text>
                    <p class="mb-3">
                      You can go to Seoul (Railway) Station by using either (1)
                      AREX Express Train (nonstop, direct trains) or (2) All
                      Stop Trains (general trains).
                    </p>
                    <p class="mb-3">
                      <strong
                        >Please note that all stop train tickets can only be
                        purchased with cash in KRW.</strong
                      >
                    </p>

                    <div class="mb-4">
                      <v-img
                        :src="
                          require('@/assets/Transportation/IncheonTrainRoute.png')
                        "
                        alt="Incheon Train Route Information"
                        max-width="100%"
                        contain
                        class="mb-3"
                      ></v-img>
                    </div>

                    <!-- AREX Express Train -->
                    <v-container class="train-option mb-4" fluid>
                      <v-card-subtitle class="text-h6 mb-2 highlight-text pa-0"
                        >AREX Express Train (Incheon International Airport →
                        Seoul Railway Station)</v-card-subtitle
                      >
                      <v-list dense class="mb-3">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Duration:</strong> 45-55
                              minutes</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Fare (KRW):</strong>
                              9,500</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Train Time Interval:</strong> About 40
                              minutes</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-row align="start">
                              <v-col cols="12" md="8">
                                <div class="text-wrap">
                                  <strong>How to purchase a ticket:</strong>
                                  Online(AREX QR) or Transportation Center B1F
                                  (ticket vending machine or ticket office)
                                </div>
                              </v-col>
                              <v-col
                                cols="12"
                                md="4"
                                class="d-flex justify-center justify-md-end"
                              >
                                <v-img
                                  :src="
                                    require('@/assets/Transportation/AREX_QR.png')
                                  "
                                  alt="AREX QR Code"
                                  max-width="120px"
                                  contain
                                  class="qr-simple"
                                ></v-img>
                              </v-col>
                            </v-row>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Train stop location:</strong>
                              Transportation Center B1F</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>

                      <v-container class="schedule-table-container" fluid>
                        <!-- 헤더 행 -->
                        <v-row class="table-row styled-row table-header">
                          <v-col cols="4" class="text-center">Terminal</v-col>
                          <v-col cols="4" class="text-center"
                            >First Train</v-col
                          >
                          <v-col cols="4" class="text-center">Last Train</v-col>
                        </v-row>

                        <!-- Terminal 1 행 -->
                        <v-row class="table-row styled-row">
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              style="background-color: #004191; color: white"
                              class="mr-2"
                              >T1</v-chip
                            >
                            Terminal 1
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #edd35e; color: #000000"
                              >05:23</v-chip
                            >
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #ed5e60; color: #000000"
                              >22:48</v-chip
                            >
                          </v-col>
                        </v-row>

                        <!-- Terminal 2 행 -->
                        <v-row class="table-row styled-row">
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              style="background-color: #004191; color: white"
                              class="mr-2"
                              >T2</v-chip
                            >
                            Terminal 2
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #edd35e; color: #000000"
                              >05:15</v-chip
                            >
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #ed5e60; color: #000000"
                              >22:40</v-chip
                            >
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-container>

                    <!-- All Stop Train -->
                    <v-container class="train-option" fluid>
                      <v-card-subtitle class="text-h6 mb-2 highlight-text pa-0"
                        >All Stop Train (Incheon International Airport → Seoul
                        Railway Station)</v-card-subtitle
                      >
                      <v-list dense class="mb-3">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Duration:</strong> 65-70
                              minutes</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Fare (KRW):</strong>
                              4,750</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Train Time Interval:</strong> Every 5-10
                              minutes</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>How to purchase a ticket:</strong>
                              Terminal 1, 2 – Transportation Center B1F (ticket
                              vending machine or ticket
                              office)</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Train Stop location:</strong>
                              Transportation Center B1F</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>

                      <v-container class="schedule-table-container" fluid>
                        <!-- 헤더 행 -->
                        <v-row class="table-row styled-row table-header">
                          <v-col cols="4" class="text-center">Terminal</v-col>
                          <v-col cols="4" class="text-center"
                            >First Train</v-col
                          >
                          <v-col cols="4" class="text-center">Last Train</v-col>
                        </v-row>

                        <!-- Terminal 1 행 -->
                        <v-row class="table-row styled-row">
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              style="background-color: #004191; color: white"
                              class="mr-2"
                              >T1</v-chip
                            >
                            Terminal 1
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #edd35e; color: #000000"
                              >05:21</v-chip
                            >
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #ed5e60; color: #000000"
                              >22:37</v-chip
                            >
                          </v-col>
                        </v-row>

                        <!-- Terminal 2 행 -->
                        <v-row class="table-row styled-row">
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              style="background-color: #004191; color: white"
                              class="mr-2"
                              >T2</v-chip
                            >
                            Terminal 2
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #edd35e; color: #000000"
                              >05:18</v-chip
                            >
                          </v-col>
                          <v-col cols="4" class="text-center">
                            <v-chip
                              small
                              outlined
                              style="border-color: #ed5e60; color: #000000"
                              >23:32</v-chip
                            >
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-container>
                  </v-card-text>
                </v-card>

                <!-- Step 2 - KTX to Daejeon -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-train</v-icon>
                    Step 2 - Train: Seoul Railway Station → Daejeon Railway
                    Station
                  </v-card-title>
                  <v-card-text>
                    <v-container class="ktx-info mb-3" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >Train Route Information</v-card-subtitle
                      >
                      <v-card-text class="pa-0">
                        <p>
                          Seoul Station → Gwangmyeong → Cheonan-Asan → Osong →
                          Daejeon Station
                        </p>
                        <p class="mb-3">
                          <em
                            >* Some intermediate stations between Seoul Station
                            and Daejeon Station may be bypassed depending on the
                            time of day.</em
                          >
                        </p>

                        <!-- Desktop Table -->
                        <v-container
                          class="schedule-table-container d-none d-md-block"
                          fluid
                        >
                          <!-- 헤더 행 -->
                          <v-row class="table-row styled-row table-header">
                            <v-col cols="2" class="text-center">Train</v-col>
                            <v-col cols="2" class="text-center">Duration</v-col>
                            <v-col cols="2" class="text-center">First</v-col>
                            <v-col cols="2" class="text-center">Last</v-col>
                            <v-col cols="2" class="text-center">Interval</v-col>
                            <v-col cols="2" class="text-center"
                              >Fare (KRW)</v-col
                            >
                          </v-row>

                          <!-- KTX 행 -->
                          <v-row class="table-row styled-row">
                            <v-col cols="2" class="text-center">
                              <v-chip small color="primary" text-color="white"
                                >KTX</v-chip
                              >
                            </v-col>
                            <v-col cols="2" class="text-center">
                              <v-chip
                                small
                                outlined
                                style="border-color: #5ebfed; color: #000000"
                                >65 min</v-chip
                              >
                            </v-col>
                            <v-col cols="2" class="text-center">
                              <v-chip
                                small
                                outlined
                                style="border-color: #edd35e; color: #000000"
                                >05:03</v-chip
                              >
                            </v-col>
                            <v-col cols="2" class="text-center">
                              <v-chip
                                small
                                outlined
                                style="border-color: #ed5e60; color: #000000"
                                >23:28</v-chip
                              >
                            </v-col>
                            <v-col cols="2" class="text-center">
                              <v-chip
                                small
                                outlined
                                style="border-color: #edd35e; color: #000000"
                                >10-30 min</v-chip
                              >
                            </v-col>
                            <v-col cols="2" class="text-center">
                              <v-chip
                                small
                                outlined
                                style="border-color: #e7e7e7; color: #000000"
                                >₩23,700</v-chip
                              >
                            </v-col>
                          </v-row>
                        </v-container>

                        <!-- Mobile Card Layout -->
                        <v-container class="d-block d-md-none" fluid>
                          <v-card
                            class="mobile-train-info-card pa-4"
                            elevation="2"
                          >
                            <v-card-title class="text-center pb-2">
                              <v-chip color="primary" text-color="white"
                                >KTX</v-chip
                              >
                            </v-card-title>
                            <v-card-text class="pa-0">
                              <v-list dense>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold"
                                      >Duration</v-list-item-title
                                    >
                                    <v-list-item-subtitle>
                                      <v-chip
                                        small
                                        outlined
                                        style="
                                          border-color: #5ebfed;
                                          color: #000000;
                                        "
                                        >65 min</v-chip
                                      >
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold"
                                      >First Train</v-list-item-title
                                    >
                                    <v-list-item-subtitle>
                                      <v-chip
                                        small
                                        outlined
                                        style="
                                          border-color: #edd35e;
                                          color: #000000;
                                        "
                                        >05:03</v-chip
                                      >
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold"
                                      >Last Train</v-list-item-title
                                    >
                                    <v-list-item-subtitle>
                                      <v-chip
                                        small
                                        outlined
                                        style="
                                          border-color: #ed5e60;
                                          color: #000000;
                                        "
                                        >23:28</v-chip
                                      >
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold"
                                      >Interval</v-list-item-title
                                    >
                                    <v-list-item-subtitle>
                                      <v-chip
                                        small
                                        outlined
                                        style="
                                          border-color: #edd35e;
                                          color: #000000;
                                        "
                                        >10-30 min</v-chip
                                      >
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold"
                                      >Fare (KRW)</v-list-item-title
                                    >
                                    <v-list-item-subtitle>
                                      <v-chip
                                        small
                                        outlined
                                        style="
                                          border-color: #e7e7e7;
                                          color: #000000;
                                        "
                                        >₩23,700</v-chip
                                      >
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-card-text>
                          </v-card>
                        </v-container>
                      </v-card-text>
                    </v-container>

                    <v-container class="ticket-purchase-info" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >How to purchase a ticket:</v-card-subtitle
                      >
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>
                            <v-row align="start">
                              <v-col cols="12" md="8">
                                <div class="text-wrap mb-2">
                                  Visit the ticket office on the 2nd or 3rd
                                  floor. Tickets are issued with specific
                                  departure times, train numbers, and seat
                                  assignments.
                                </div>
                                <div class="text-wrap">
                                  You can also book your ticket online (KTX QR).
                                </div>
                              </v-col>
                              <v-col
                                cols="12"
                                md="4"
                                class="d-flex justify-center justify-md-end"
                              >
                                <v-img
                                  :src="
                                    require('@/assets/Transportation/KTX_QR.png')
                                  "
                                  alt="KTX QR Code"
                                  max-width="120px"
                                  contain
                                  class="qr-simple"
                                ></v-img>
                              </v-col>
                            </v-row>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Check the schedule and purchase train tickets up
                              to one month before departure.</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-container>
                  </v-card-text>
                </v-card>

                <!-- Step 3 - Taxi to KAIST -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-taxi</v-icon>
                    Step 3 - Taxi: Daejeon Railway Station → KAIST
                  </v-card-title>
                  <v-card-text>
                    <v-list dense class="mb-3">
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >The taxi stand is located behind Exit 4 of the
                            subway.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            ><strong>Duration:</strong> About 35
                            minutes</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            ><strong>Fare (KRW):</strong> About
                            14,000</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-container class="taxi-instruction" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >To take a taxi to KAIST, show the following korean
                        instructions to the taxi driver:</v-card-subtitle
                      >
                      <v-card class="code-block pa-3">
                        <v-card-text class="korean-text pa-0"
                          >"카이스트 본원으로 가주세요. (대전 유성구 대학로
                          291)"</v-card-text
                        >
                        <v-card-text class="translation-text pa-0"
                          >(Translation: Please go to KAIST. (291 Daehak-ro,
                          Yuseong-gu, Daejeon))</v-card-text
                        >
                      </v-card>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Route 3 -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="route-3">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Route 3
          <v-card-subtitle class="text-h6 mb-2 pa-0">
            Gimpo International Airport → Seoul Railway Station → Daejeon
            Railway Station
          </v-card-subtitle>
        </v-card-title>

        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="pl-6">
                <!-- Step 1 - Train from Gimpo -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-train</v-icon>
                    Step 1 - Train: Gimpo International Airport → Seoul Railway
                    Station
                  </v-card-title>
                  <v-card-text>
                    <v-container class="train-route-info mb-3" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >Train Route Information</v-card-subtitle
                      >
                      <v-card-text class="pa-0">
                        <div class="mb-4">
                          <v-img
                            :src="
                              require('@/assets/Transportation/GimpoTrainRoute.png')
                            "
                            alt="Gimpo Train Route Information"
                            max-width="100%"
                            contain
                            class="mb-3"
                          ></v-img>
                        </div>
                        <p class="mb-3">
                          You can go to Seoul Railway Station by using the All
                          Stop Train.
                        </p>
                        <v-list dense>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title
                                ><strong>Duration:</strong> About 20
                                minutes</v-list-item-title
                              >
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title
                                ><strong>Fare (KRW):</strong> About
                                1,450</v-list-item-title
                              >
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-container>
                  </v-card-text>
                </v-card>

                <!-- Step 2 - KTX to Daejeon (same as Route 2) -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-train</v-icon>
                    Step 2 - Train: Seoul Railway Station → Daejeon Railway
                    Station
                  </v-card-title>
                  <v-card-text>
                    <v-container class="ktx-info mb-3" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >Train Route Information</v-card-subtitle
                      >
                      <v-card-text class="pa-0">
                        <p>
                          Seoul Station → Gwangmyeong → Cheonan-Asan → Osong →
                          Daejeon Station
                        </p>
                        <p class="mb-3">
                          <em
                            >* Some intermediate stations between Seoul Station
                            and Daejeon Station may be bypassed depending on the
                            time of day.</em
                          >
                        </p>

                        <!-- Desktop Table -->
                        <v-container
                          class="schedule-table-container d-none d-md-block"
                          fluid
                        >
                          <!-- 헤더 행 -->
                          <v-row class="table-row styled-row table-header">
                            <v-col cols="2" class="text-center">Train</v-col>
                            <v-col cols="2" class="text-center">Duration</v-col>
                            <v-col cols="2" class="text-center">First</v-col>
                            <v-col cols="2" class="text-center">Last</v-col>
                            <v-col cols="2" class="text-center">Interval</v-col>
                            <v-col cols="2" class="text-center"
                              >Fare (KRW)</v-col
                            >
                          </v-row>

                          <!-- KTX 행 -->
                          <v-row class="table-row styled-row">
                            <v-col cols="2" class="text-center">
                              <v-chip small color="primary" text-color="white"
                                >KTX</v-chip
                              >
                            </v-col>
                            <v-col cols="2" class="text-center">
                              <v-chip
                                small
                                outlined
                                style="border-color: #5ebfed; color: #000000"
                                >65 min</v-chip
                              >
                            </v-col>
                            <v-col cols="2" class="text-center">
                              <v-chip
                                small
                                outlined
                                style="border-color: #edd35e; color: #000000"
                                >05:03</v-chip
                              >
                            </v-col>
                            <v-col cols="2" class="text-center">
                              <v-chip
                                small
                                outlined
                                style="border-color: #ed5e60; color: #000000"
                                >23:28</v-chip
                              >
                            </v-col>
                            <v-col cols="2" class="text-center">
                              <v-chip
                                small
                                outlined
                                style="border-color: #edd35e; color: #000000"
                                >10-30 min</v-chip
                              >
                            </v-col>
                            <v-col cols="2" class="text-center">
                              <v-chip
                                small
                                outlined
                                style="border-color: #e7e7e7; color: #000000"
                                >₩23,700</v-chip
                              >
                            </v-col>
                          </v-row>
                        </v-container>

                        <!-- Mobile Card Layout -->
                        <v-container class="d-block d-md-none" fluid>
                          <v-card
                            class="mobile-train-info-card pa-4"
                            elevation="2"
                          >
                            <v-card-title class="text-center pb-2">
                              <v-chip color="primary" text-color="white"
                                >KTX</v-chip
                              >
                            </v-card-title>
                            <v-card-text class="pa-0">
                              <v-list dense>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold"
                                      >Duration</v-list-item-title
                                    >
                                    <v-list-item-subtitle>
                                      <v-chip
                                        small
                                        outlined
                                        style="
                                          border-color: #5ebfed;
                                          color: #000000;
                                        "
                                        >65 min</v-chip
                                      >
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold"
                                      >First Train</v-list-item-title
                                    >
                                    <v-list-item-subtitle>
                                      <v-chip
                                        small
                                        outlined
                                        style="
                                          border-color: #edd35e;
                                          color: #000000;
                                        "
                                        >05:03</v-chip
                                      >
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold"
                                      >Last Train</v-list-item-title
                                    >
                                    <v-list-item-subtitle>
                                      <v-chip
                                        small
                                        outlined
                                        style="
                                          border-color: #ed5e60;
                                          color: #000000;
                                        "
                                        >23:28</v-chip
                                      >
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold"
                                      >Interval</v-list-item-title
                                    >
                                    <v-list-item-subtitle>
                                      <v-chip
                                        small
                                        outlined
                                        style="
                                          border-color: #edd35e;
                                          color: #000000;
                                        "
                                        >10-30 min</v-chip
                                      >
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-title class="font-weight-bold"
                                      >Fare (KRW)</v-list-item-title
                                    >
                                    <v-list-item-subtitle>
                                      <v-chip
                                        small
                                        outlined
                                        style="
                                          border-color: #e7e7e7;
                                          color: #000000;
                                        "
                                        >₩23,700</v-chip
                                      >
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-card-text>
                          </v-card>
                        </v-container>
                      </v-card-text>
                    </v-container>

                    <v-container class="ticket-purchase-info" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >How to purchase a ticket:</v-card-subtitle
                      >
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>
                            <v-row align="start">
                              <v-col cols="12" md="8">
                                <div class="text-wrap mb-2">
                                  Visit the ticket office on the 2nd or 3rd
                                  floor. Tickets are issued with specific
                                  departure times, train numbers, and seat
                                  assignments.
                                </div>
                                <div class="text-wrap">
                                  You can also book your ticket online(KTX QR).
                                </div>
                              </v-col>
                              <v-col
                                cols="12"
                                md="4"
                                class="d-flex justify-center justify-md-end"
                              >
                                <v-img
                                  :src="
                                    require('@/assets/Transportation/KTX_QR.png')
                                  "
                                  alt="KTX QR Code"
                                  max-width="120px"
                                  contain
                                  class="qr-simple"
                                ></v-img>
                              </v-col>
                            </v-row>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Check the schedule and purchase train tickets up
                              to one month before departure.</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-container>
                  </v-card-text>
                </v-card>

                <!-- Step 3 - Taxi to KAIST (same as Route 2) -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-taxi</v-icon>
                    Step 3 - Taxi: Daejeon Railway Station → KAIST
                  </v-card-title>
                  <v-card-text>
                    <v-list dense class="mb-3">
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >The taxi stand is located behind Exit 4 of the
                            subway.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            ><strong>Duration:</strong> About 35
                            minutes</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            ><strong>Fare (KRW):</strong> About
                            14,000</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-container class="taxi-instruction" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >To take a taxi to KAIST, show the following korean
                        instructions to the taxi driver:</v-card-subtitle
                      >
                      <v-card class="code-block pa-3">
                        <v-card-text class="korean-text pa-0"
                          >"카이스트 본원으로 가주세요. (대전 유성구 대학로
                          291)"</v-card-text
                        >
                        <v-card-text class="translation-text pa-0"
                          >(Translation: Please go to KAIST. (291 Daehak-ro,
                          Yuseong-gu, Daejeon))</v-card-text
                        >
                      </v-card>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Using Bicycle -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Using Bicycle</v-card-title
        >
        <v-card-text class="text-body">
          <!-- Tashu Image -->
          <div class="mb-4">
            <v-img
              :src="require('@/assets/Transportation/tashu.png')"
              alt="Tashu Public Bike Sharing Service"
              max-width="100%"
              contain
              class="mb-3"
            ></v-img>
          </div>
          <v-row class="my-4">
            <v-col cols="12">
              <v-card class="bicycle-info-card pa-4" elevation="2">
                <v-card-title class="text-h6 highlight-text mb-3">
                  <v-icon left color="#004191">mdi-bicycle</v-icon>
                  Tashu - Public Bike Sharing Service
                </v-card-title>
                <v-card-text>
                  <p class="mb-3">
                    Daejeon is a bicycle-friendly city centered around the
                    Gapcheon River. We recommend using Tashu, the city's public
                    bike-sharing service. Tashu bicycles—easily recognizable by
                    their orange and green colors—can be rented via the Tashu
                    mobile app. Several rental stations are located on and
                    around the KAIST campus, including one near the west
                    entrance of E11 (the Tutorial Session venue).
                  </p>
                  <v-alert type="info" class="mb-3">
                    <strong>Please note:</strong> If you don't have a Korean
                    bank account, you'll only be able to use the free first hour
                    of Tashu. To continue using a bicycle beyond this, you'll
                    need to park it within the hour and then unlock it again to
                    start a new free hour session.
                  </v-alert>
                  <p>
                    <strong>Tashu Link:</strong>
                    <a
                      href="https://www.tashu.or.kr/main.do?lang=2"
                      target="_blank"
                      >https://www.tashu.or.kr/main.do?lang=2</a
                    >
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Car Rental -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Car Rental</v-card-title
        >
        <v-card-text class="text-body">
          <v-row class="my-4">
            <v-col cols="12">
              <v-card class="car-rental-card pa-4" elevation="2">
                <v-card-title class="text-h6 highlight-text mb-3">
                  <v-icon left color="#004191">mdi-car</v-icon>
                  Car Rental at Incheon International Airport
                </v-card-title>
                <v-card-text>
                  <v-row align="start">
                    <v-col cols="12" md="8">
                      <div class="text-wrap">
                        To rent a car at Incheon International Airport, please
                        use the Car Rental QR code to make your reservation. For
                        additional inquiries, please check independently.
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      class="d-flex justify-center justify-md-end"
                    >
                      <!-- Car Rental QR Code -->
                      <v-img
                        :src="
                          require('@/assets/Transportation/Car_Rental_QR.png')
                        "
                        alt="Car Rental QR Code"
                        max-width="120px"
                        contain
                        class="qr-simple"
                      ></v-img>
                    </v-col>
                  </v-row>

                  <!-- Car Rental Information Image -->
                  <div class="mt-4">
                    <v-img
                      :src="require('@/assets/Transportation/Car_Rental.png')"
                      alt="Car Rental Information"
                      max-width="100%"
                      contain
                      class="mb-3"
                    ></v-img>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
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
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100; // 상단에서 100px 아래로 스크롤
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
  },
};
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

.highlight-text {
  color: #004191;
  font-weight: bold;
}

/* Transportation specific styles */
.destination-info {
  margin-bottom: 24px;
}

.routes-list {
  background-color: transparent;
}

.routes-list .v-list-item {
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
}

.routes-list .v-list-item:last-child {
  border-bottom: none;
}

.route-step-card {
  border-radius: 12px !important;
  margin-bottom: 16px;
}

.step-title {
  background-color: #f8f9fa;
  border-radius: 8px 8px 0 0;
  padding: 16px;
  margin: -16px -16px 16px -16px;
}

.step-title-text {
  word-break: break-word;
  white-space: normal;
  line-height: 1.4;
}

.step-subtitle {
  font-size: 0.9rem;
  font-weight: normal;
  opacity: 0.8;
  margin-top: 2px;
}

.schedule-table {
  margin-bottom: 16px;
}

.schedule-table .v-simple-table {
  border-radius: 8px;
  overflow: hidden;
}

.bus-stop-info,
.train-option,
.ktx-info,
.ticket-purchase-info,
.ticket-info {
  margin-bottom: 16px;
}

.taxi-instruction {
  margin-top: 16px;
}

.code-block {
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  font-family: "Noto Sans", sans-serif;
  font-size: 14px;
  overflow-x: auto;
  white-space: pre-wrap;
}

.korean-text {
  font-size: 16px;
  font-weight: bold;
  color: #004191;
  margin-bottom: 8px;
}

.translation-text {
  font-size: 14px;
  color: #666;
  font-style: italic;
}

.train-option {
  border-left: 4px solid #004191;
  padding-left: 16px;
  margin-bottom: 24px;
}

.bicycle-info-card,
.car-rental-card,
.tips-card,
.mobile-train-info-card {
  border-radius: 12px !important;
}

.mobile-train-info-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #e3f2fd;
}

.mobile-train-info-card .v-card-title {
  background-color: transparent;
  padding-bottom: 8px;
}

.mobile-train-info-card .v-list-item {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.mobile-train-info-card .v-list-item:last-child {
  border-bottom: none;
}

/* Tips section styling */
.tips-card .v-list-item {
  padding: 12px 0;
  min-height: auto;
}

.tips-card .v-list-item-content {
  padding: 0;
}

.tips-card .v-list-item-title {
  white-space: normal !important;
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.4;
  margin-bottom: 4px;
}

.tips-card .v-list-item-subtitle {
  white-space: normal !important;
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.5;
  opacity: 0.87;
}

.apps-container {
  width: 100%;
}

.apps-container .d-flex {
  flex-wrap: wrap;
  gap: 4px;
}

.apps-container span {
  white-space: normal;
  word-break: keep-all;
  overflow-wrap: break-word;
}

/* Enhanced text wrapping for tips */
.text-wrap-tips {
  white-space: normal !important;
  word-break: break-word !important;
  overflow-wrap: break-word !important;
  line-height: 1.6 !important;
  max-width: 100% !important;
  display: block !important;
  hyphens: auto;
}

/* Mobile responsive adjustments for tips */
@media (max-width: 768px) {
  .tips-card {
    padding: 16px 12px !important;
  }

  .tips-card .v-list-item {
    padding: 8px 0 !important;
    align-items: flex-start !important;
  }

  .tips-card .v-list-item-icon {
    margin-right: 12px !important;
    margin-top: 2px !important;
  }

  .tips-card .v-list-item-content {
    flex: 1 !important;
    min-width: 0 !important;
  }

  .text-wrap-tips {
    font-size: 14px !important;
    padding-right: 8px !important;
  }
}

/* Schedule Table Container styling */
.schedule-table-container {
  width: 100%;
  margin: 0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.schedule-table-container .table-row {
  margin: 0;
}

.schedule-table-container .table-row .v-col {
  text-align: center;
  align-items: center !important;
  justify-content: center !important;
  padding: 12px 8px;
}

.schedule-table-container .table-row.table-header {
  background-color: #f7f7f7;
  font-weight: 600;
}

.schedule-table-container .table-row.table-header .v-col {
  font-weight: bold;
  color: #004191;
}

.styled-row {
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 8px;
  align-items: center;
}

.styled-row:last-child {
  border-bottom: none;
}

/* 데스크탑에서만 flex 적용 */
@media (min-width: 960px) {
  .schedule-table-container .table-row .v-col {
    display: flex !important;
  }
}

/* Table of Contents styling (from SectionTutorial.vue) */
.table-container {
  width: 100%;
  margin: 0;
}

.table-container .table-row {
  margin: 0;
  transition: background-color 0.2s ease;
}

.table-container .table-row:hover {
  background-color: #e7e7e7;
}

.table-container .table-row .v-col {
  text-align: left;
  align-items: center !important;
  justify-content: flex-start !important;
  padding: 12px 16px;
}

.table-container .table-row .v-col:first-child {
  text-align: center;
}

/* 데스크탑에서만 flex 적용 */
@media (min-width: 960px) {
  .table-container .table-row .v-col {
    display: flex !important;
  }
}

/* QR Card Styling */
.qr-card {
  border-radius: 16px !important;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid #e3f2fd;
  transition: all 0.3s ease;
}

.qr-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 65, 145, 0.15) !important;
  border-color: #004191;
}

.qr-card .v-card-title {
  background: linear-gradient(135deg, #004191 0%, #1976d2 100%);
  color: white !important;
  border-radius: 14px 14px 0 0 !important;
  margin: -1px -1px 0 -1px;
}

.qr-card .v-card-title .v-icon {
  color: white !important;
}

.qr-card .v-card-text {
  background: white;
  border-radius: 0 0 14px 14px;
}

.qr-card .v-img {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.qr-card:hover .v-img {
  transform: scale(1.05);
}

/* Text wrapping for long content */
.text-wrap {
  white-space: normal !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  line-height: 1.5;
}

/* Simple QR code styling */
.qr-simple {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.qr-simple:hover {
  transform: scale(1.05);
}

/* Legacy table styling for compatibility */
.v-simple-table {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-simple-table th {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #004191;
  padding: 12px 16px;
}

.v-simple-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
}

.v-simple-table tbody tr:last-child td {
  border-bottom: none;
}

/* Links styling */
a {
  color: #004191;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Alert customization */
.v-alert {
  border-radius: 8px;
}

.v-alert.v-alert--type-info {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
}

.v-alert.v-alert--type-warning {
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
}

/* Map container styling */
.map-container-large {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f5f5f5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.google-map-embed-large {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .route-step-card {
    margin-bottom: 12px;
  }

  .step-title {
    font-size: 1rem;
    padding: 12px;
    margin: -12px -12px 12px -12px;
  }

  .step-title-text {
    font-size: 0.95rem;
    line-height: 1.3;
  }

  .info-list {
    padding-left: 20px;
  }

  .v-simple-table th,
  .v-simple-table td {
    padding: 8px 12px;
    font-size: 0.9rem;
  }

  /* 긴 문장 줄바꿈 처리 */
  .text-body {
    font-size: 16px;
    line-height: 1.5;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  .v-list-item-title {
    white-space: normal !important;
    word-break: keep-all;
    overflow-wrap: break-word;
    line-height: 1.4;
  }

  /* 카드 제목 줄바꿈 */
  .v-card-title {
    white-space: normal !important;
    word-break: keep-all;
    overflow-wrap: break-word;
    line-height: 1.3;
  }

  .v-card-subtitle {
    white-space: normal !important;
    word-break: keep-all;
    overflow-wrap: break-word;
    line-height: 1.3;
  }

  /* 테이블 셀 내용 줄바꿈 */
  .schedule-table-container .v-col {
    padding: 8px 4px;
    font-size: 0.85rem;
  }

  .v-chip {
    font-size: 0.75rem;
    height: auto;
    min-height: 24px;
    padding: 2px 8px;
  }
}
</style>
