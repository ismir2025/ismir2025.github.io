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

      <!-- Routes Overview -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Routes Overview
        </v-card-title>
        <v-card-text>
          <!-- Routes Overview Navigation -->
          <v-card
            outlined
            elevation="2"
            class="pa-6 my-4 routes-overview-card"
            style="
              background: linear-gradient(
                135deg,
                #f8f9fa 0%,
                #e9ecef 100%
              );
            "
          >
            <v-card-title
              class="text-h5 mb-4 font-weight-bold text-center"
            >
              <v-icon left size="28" color="#004191"
                >mdi-map-marker-path</v-icon
              >
              Quick Navigation
            </v-card-title>

            <!-- Arrival Routes Section -->
            <v-container class="routes-section mb-5">
              <v-row class="mb-3">
                <v-col cols="12">
                  <v-card-subtitle
                    class="text-h6 mb-3 font-weight-bold d-flex align-center"
                  >
                    <v-icon left color="#28a745" size="20"
                      >mdi-airplane-landing</v-icon
                    >
                    <span class="section-title"
                      >Arrival Routes (Airport → KAIST)</span
                    >
                  </v-card-subtitle>
                </v-col>
              </v-row>

              <!-- Route 1 -->
              <v-row
                class="table-row styled-row mb-2"
                style="cursor: pointer"
                @click="scrollToSection('route-1')"
              >
                <v-col
                  cols="3"
                  md="2"
                  class="text-center font-weight-bold d-flex align-center justify-center"
                >
                  <v-chip small color="primary" text-color="white">
                    <v-icon small left>mdi-star</v-icon>
                    Route 1
                  </v-chip>
                </v-col>
                <v-col
                  cols="9"
                  md="10"
                  class="d-flex align-center"
                  style="color: #000000; text-decoration: underline"
                >
                  <span class="route-text-desktop d-none d-md-inline">Incheon International Airport → Daejeon Government Complex → KAIST</span>
                  <span class="route-text-mobile d-inline d-md-none">Incheon Airport → Daejeon Gov → KAIST</span>
                </v-col>
              </v-row>

              <!-- Route 2 -->
              <v-row
                class="table-row styled-row mb-2"
                style="cursor: pointer"
                @click="scrollToSection('route-2')"
              >
                <v-col
                  cols="3"
                  md="2"
                  class="text-center font-weight-bold d-flex align-center justify-center"
                >
                  <v-chip small outlined>Route 2</v-chip>
                </v-col>
                <v-col
                  cols="9"
                  md="10"
                  class="d-flex align-center"
                  style="color: #000000; text-decoration: underline"
                >
                  <span class="route-text-desktop d-none d-md-inline">Incheon International Airport → Seoul Station → Daejeon Station → KAIST</span>
                  <span class="route-text-mobile d-inline d-md-none">Incheon Airport → Seoul → Daejeon → KAIST</span>
                </v-col>
              </v-row>

              <!-- Route 3 -->
              <v-row
                class="table-row styled-row mb-2"
                style="cursor: pointer"
                @click="scrollToSection('route-3')"
              >
                <v-col
                  cols="3"
                  md="2"
                  class="text-center font-weight-bold d-flex align-center justify-center"
                >
                  <v-chip small outlined>Route 3</v-chip>
                </v-col>
                <v-col
                  cols="9"
                  md="10"
                  class="d-flex align-center"
                  style="color: #000000; text-decoration: underline"
                >
                  <span class="route-text-desktop d-none d-md-inline">Gimpo International Airport → Seoul Station → Daejeon Station → KAIST</span>
                  <span class="route-text-mobile d-inline d-md-none">Gimpo Airport → Seoul → Daejeon → KAIST</span>
                </v-col>
              </v-row>
            </v-container>

            <!-- Divider -->
            <v-divider class="my-4"></v-divider>

            <!-- Return Routes Section -->
            <v-container class="routes-section">
              <v-row class="mb-3">
                <v-col cols="12">
                  <v-card-subtitle
                    class="text-h6 mb-3 font-weight-bold d-flex align-center"
                  >
                    <v-icon left color="#dc3545" size="20"
                      >mdi-airplane-takeoff</v-icon
                    >
                    <span class="section-title"
                      >Return Routes (KAIST → Airport)</span
                    >
                  </v-card-subtitle>
                </v-col>
              </v-row>

              <!-- Route 1 Return -->
              <v-row
                class="table-row styled-row mb-2"
                style="cursor: pointer"
                @click="scrollToSection('route-1-return')"
              >
                <v-col
                  cols="3"
                  md="2"
                  class="text-center font-weight-bold d-flex align-center justify-center"
                >
                  <v-chip small color="warning" text-color="white">
                    <v-icon small left>mdi-alert</v-icon>
                    Route 1
                  </v-chip>
                </v-col>
                <v-col
                  cols="9"
                  md="10"
                  class="d-flex align-center"
                  style="color: #000000; text-decoration: underline"
                >
                  <span class="route-text-desktop d-none d-md-inline">KAIST → Daejeon Government Complex → Incheon International Airport</span>
                  <span class="route-text-mobile d-inline d-md-none">KAIST → Daejeon Gov → Incheon Airport</span>
                </v-col>
              </v-row>

              <!-- Route 2 Return -->
              <v-row
                class="table-row styled-row mb-2"
                style="cursor: pointer"
                @click="scrollToSection('route-2-return')"
              >
                <v-col
                  cols="3"
                  md="2"
                  class="text-center font-weight-bold d-flex align-center justify-center"
                >
                  <v-chip small color="success" text-color="white">
                    <v-icon small left>mdi-check</v-icon>
                    Route 2
                  </v-chip>
                </v-col>
                <v-col
                  cols="9"
                  md="10"
                  class="d-flex align-center"
                  style="color: #000000; text-decoration: underline"
                >
                  <span class="route-text-desktop d-none d-md-inline">KAIST → Daejeon Station → Seoul Station → Incheon International Airport</span>
                  <span class="route-text-mobile d-inline d-md-none">KAIST → Daejeon → Seoul → Incheon Airport</span>
                </v-col>
              </v-row>

              <!-- Route 3 Return -->
              <v-row
                class="table-row styled-row mb-2"
                style="cursor: pointer"
                @click="scrollToSection('route-2-return')"
              >
                <v-col
                  cols="3"
                  md="2"
                  class="text-center font-weight-bold d-flex align-center justify-center"
                >
                  <v-chip small color="success" text-color="white">
                    <v-icon small left>mdi-check</v-icon>
                    Route 3
                  </v-chip>
                </v-col>
                <v-col
                  cols="9"
                  md="10"
                  class="d-flex align-center"
                  style="color: #000000; text-decoration: underline"
                >
                  <span class="route-text-desktop d-none d-md-inline">KAIST → Daejeon Station → Seoul Station → Gimpo International Airport</span>
                  <span class="route-text-mobile d-inline d-md-none">KAIST → Daejeon → Seoul → Gimpo Airport</span>
                </v-col>
              </v-row>
            </v-container>
            <br />
            <v-divider></v-divider>
            <br />
          </v-card>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Route from Airport to KAIST -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Route from Airport to KAIST</v-card-title
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
                  <strong>Note:</strong> We disrecommend using Google Map due to
                  its incompatibility in Korea.
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
                          Center → Daejeon Government Complex (Destination)
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
                      <div class="mb-4">
                        <div class="mb-3">
                          <strong>Online Reservation Website:</strong>
                          <div class="mt-2">
                            <v-btn
                              href="https://intercitybuse.tmoney.co.kr/"
                              target="_blank"
                              color="primary"
                              outlined
                              small
                              class="ml-2"
                            >
                              <v-icon left small>mdi-web</v-icon>
                              T-money Bus Reservation
                            </v-btn>
                          </div>
                        </div>
                        <div class="mb-3">
                          <strong>Offline(On-site) Reservation Guide:</strong>
                          <div class="mt-2">
                            <v-btn
                              href="https://www.airport.kr/ap_en/6636/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGYXBfZW4lMkY5MzclMkYxMzgyMzMlMkZhcnRjbFZpZXcuZG8lM0Y%3D"
                              target="_blank"
                              color="secondary"
                              outlined
                              small
                              class="ml-2"
                            >
                              <v-icon left small>mdi-information-outline</v-icon>
                              Incheon Airport Bus Information
                            </v-btn>
                          </div>
                        </div>
                      </div>
                    </v-container>

                    <!-- Payment Information -->
                    <v-container class="payment-info mb-3" fluid>
                      <v-alert
                        type="info"
                        outlined
                        class="mb-3"
                        style="background-color: #2196f3; border-color: #2196f3;"
                      >
                        <div style="color: white; line-height: 1.5;">
                          If paying with your foreign card is not possible on the online reservation website, you will need to purchase your bus ticket at the ticket booth or a kiosk at the airport instead. For more details, please refer to the on-site reservation guide webpage above.
                        </div>
                      </v-alert>
                      
                      <div class="text-center">
                        <v-img
                          src="@/assets/Transportation/BusTicket.png"
                          alt="Bus Ticket Purchase at Airport"
                          width="500"
                          class="mx-auto"
                        ></v-img>
                      </div>
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

                <!-- Step 2 - Intra City Bus -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-bus</v-icon>
                    Step 2 - Intra City Bus: Daejeon Government Complex → KAIST
                  </v-card-title>
                  <v-card-text>
                    <v-list dense class="mb-3">
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            >You can take the intra-city bus to come to KAIST (Route No. 604), after landing at Daejeon Government Complex. We recommend using the English version of Naver Map or Kakao Map to check the entire route, including walking directions.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                    <v-container fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >Bus Route Information</v-card-subtitle
                      >
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Departure:</strong> Daejeon Government Building Intercity Bus Dunsan Bus Stop (Hacha)</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><strong>Destination:</strong> KAIST Main Campus</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                      
                      <!-- Bus Schedule Table -->
                      <v-container class="table-container mt-4" fluid>
                        <!-- 헤더 행 -->
                        <v-row class="table-row styled-row table-header">
                          <v-col cols="2" class="text-center">Duration</v-col>
                          <v-col cols="2" class="text-center">First Departure</v-col>
                          <v-col cols="3" class="text-center">Last Departure</v-col>
                          <v-col cols="2" class="text-center">Interval</v-col>
                          <v-col cols="3" class="text-center">Fare (KRW)</v-col>
                        </v-row>

                        <v-row class="table-row styled-row">
                          <v-col cols="2" class="text-center">10min</v-col>
                          <v-col cols="2" class="text-center">05:40</v-col>
                          <v-col cols="3" class="text-center">22:30</v-col>
                          <v-col cols="2" class="text-center">11 minutes</v-col>
                          <v-col cols="3" class="text-center">1,500</v-col>
                        </v-row>
                      </v-container>
                      
                      <!-- Intra City Bus Image -->
                      <v-container class="text-center mt-4" fluid>
                        <v-img
                          :src="require('@/assets/Transportation/IntraCityBus.png')"
                          alt="Intra City Bus Route Map"
                          contain
                          max-width="80%"
                          class="mx-auto"
                        ></v-img>
                      </v-container>
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

      <!-- Return Route (KAIST to Airport) -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="return-routes">
        <v-card-title class="text-h4 mb-3 font-weight-bold highlight-text">
          Return Route (KAIST to Airport)
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-alert type="info" class="mb-4">
                  <v-icon left>mdi-information</v-icon>
                  <strong
                    >For routes 2 and 3, you can simply take the reverse
                    route.</strong
                  >
                  (no further explanation needed)
                  <br />
                  However, for route 1, you must first go to the Daejeon
                  Government Complex Bus Terminal to go to the Airport. (Details
                  right below)
                </v-alert>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Route 1 Return -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="route-1-return">
        <v-card-title class="text-h4 mb-3 font-weight-bold highlight-text">
          Route 1 Return
          <v-card-subtitle class="text-h6 mb-2 pa-0">
            Daejeon Government Complex Bus Terminal → Incheon International
            Airport
          </v-card-subtitle>
        </v-card-title>

        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="pl-6">
                <!-- Step 1 - Taxi to Bus Terminal -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-taxi</v-icon>
                    <span class="step-title-text"
                      >Step 1 - Taxi to Daejeon Government Complex Bus
                      Terminal</span
                    >
                  </v-card-title>
                  <v-card-text>
                    <v-container class="taxi-instruction" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >To take a taxi to Daejeon Government Complex Bus
                        Terminal, show the following korean instructions to the
                        taxi driver:</v-card-subtitle
                      >
                      <v-card class="code-block pa-3">
                        <v-card-text class="korean-text pa-0"
                          >"대전청사 시외버스 터미널로 가주세요. (대전광역시
                          서구 청사로 189 정부대전청사 시외버스정류장(선사유적지
                          맞은편))"</v-card-text
                        >
                        <v-card-text class="translation-text pa-0"
                          >(Translation: Please go to Daejeon Government Complex
                          Bus Terminal.)</v-card-text
                        >
                      </v-card>
                    </v-container>
                  </v-card-text>
                </v-card>

                <!-- Step 2 - Bus to Airport -->
                <v-card class="route-step-card mb-4" elevation="2">
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-bus</v-icon>
                    <span class="step-title-text"
                      >Step 2 - Bus to Incheon Airport</span
                    >
                  </v-card-title>
                  <v-card-text>
                    <v-container class="bus-info mb-3" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >Bus Route Information</v-card-subtitle
                      >
                      <v-card-text class="pa-0">
                        <!-- Bus Route Information Image -->
                        <div class="mb-3 d-flex justify-center">
                          <v-img
                            :src="
                              require('@/assets/Transportation/Bus Route Information.png')
                            "
                            alt="Bus Route Information"
                            max-width="400px"
                            contain
                            class="mb-3"
                          ></v-img>
                        </div>
                        <p>
                          Daejeon → Daejeon Government Complex (Departure) → Daedeok
                          Community Center → North Daejeon IC → Incheon Airport
                          (Terminal 1) → Incheon Airport (Terminal 2)
                        </p>
                      </v-card-text>
                    </v-container>

                    <v-container class="ticket-info mb-3" fluid>
                      <v-card-subtitle class="text-h6 mb-2 pa-0"
                        >How to purchase a ticket:</v-card-subtitle
                      >
                      <div class="ml-4">
                        <p>• <strong>Online Reservation Website:</strong> 
                          <a
                            href="https://intercitybuse.tmoney.co.kr/"
                            target="_blank"
                            >https://intercitybuse.tmoney.co.kr/</a
                          >
                        </p>
                        <p class="ml-4">- <strong>Departure:</strong> Daejeon Gov Complex (airport route)</p>
                        <p class="ml-4">- <strong>Destination:</strong> Incheon Airport T1 or T2</p>
                        <p>• <strong>Offline Reservation Kiosk</strong></p>
                        <p class="ml-4">- You can reserve the ticket at the kiosk located inside the Bus Terminal as shown in the picture below.</p>
                        <div class="mt-3 ml-4">
                          <v-img
                            src="@/assets/Transportation/Kiosk.jpg"
                            alt="Kiosk at Bus Terminal"
                            max-width="400"
                            class="mx-auto"
                          ></v-img>
                        </div>
                        <p class="ml-4 mt-3">It is recommended to make a reservation a few days earlier.</p>
                      </div>
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

      <!-- Route 2 & 3 Return -->
      <v-card outlined elevation="0" class="pa-4 my-4" id="route-2-return">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Route 2 & 3 Return
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-alert type="success" class="mb-4">
                  <div class="text-h6 mb-2">
                    <strong>Simple Instructions</strong>
                  </div>
                  <div class="text-body-1">
                    <strong>Route 2 Return:</strong> KAIST → Daejeon Station →
                    Seoul Station → Incheon International Airport <br /><br />
                    <strong>Route 3 Return:</strong> KAIST → Daejeon Station →
                    Seoul Station → Gimpo International Airport <br /><br />
                    For these routes, simply follow the reverse path of the
                    arrival routes. All transportation methods and schedules
                    work in both directions.
                  </div>
                </v-alert>
              </v-col>
            </v-row>
          </v-container>
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

/* Adding Money Content Styling */
.adding-money-content {
  padding: 0;
  margin: 0;
}

.payment-method {
  margin-bottom: 16px;
}

.method-title {
  color: rgba(0, 0, 0, 0.87) !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  line-height: 1.4 !important;
  margin-bottom: 8px !important;
}

.method-description {
  color: rgba(0, 0, 0, 0.6) !important;
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.6 !important;
  white-space: normal !important;
  word-break: break-word !important;
  overflow-wrap: break-word !important;
}

/* Service Mode Full Instructions - Complete override of any text truncation */
.service-mode-full-instructions {
  color: rgba(0, 0, 0, 0.6) !important;
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.6 !important;
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  -webkit-line-clamp: unset !important;
  -webkit-box-orient: unset !important;
  display: block !important;
  max-height: none !important;
  height: auto !important;
  word-break: break-word !important;
  overflow-wrap: break-word !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: none !important;
  /* Additional overrides for stubborn ellipsis */
  text-overflow: clip !important;
  -o-text-overflow: clip !important;
  -ms-text-overflow: clip !important;
  overflow-x: visible !important;
  overflow-y: visible !important;
  min-width: 0 !important;
  flex-shrink: 0 !important;
  position: relative !important;
}

/* Force override for any parent containers that might cause truncation */
.adding-money-content,
.adding-money-content *,
.payment-method,
.payment-method * {
  overflow: visible !important;
  text-overflow: unset !important;
  -webkit-line-clamp: unset !important;
  white-space: normal !important;
  max-width: none !important;
}

/* Specific override for the service mode instructions and all its children */
.service-mode-full-instructions,
.service-mode-full-instructions * {
  overflow: visible !important;
  text-overflow: unset !important;
  -webkit-line-clamp: unset !important;
  white-space: normal !important;
  max-width: none !important;
  max-height: none !important;
  height: auto !important;
  display: block !important;
}

/* Nuclear option - Override any Vuetify classes that might interfere */
.v-card-text .service-mode-full-instructions {
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: normal !important;
  -webkit-line-clamp: unset !important;
  display: block !important;
  max-height: none !important;
  height: auto !important;
}

/* Override for flex containers that might shrink the text */
.v-card-text .adding-money-content,
.v-card-text .payment-method {
  flex-shrink: 0 !important;
  min-width: 0 !important;
  width: 100% !important;
}

/* Adding Money Card - Completely Redesigned Styles */
.adding-money-card-redesigned {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 24px 0;
  overflow: visible;
  border: 2px solid #e0e0e0;
}

.adding-money-title {
  background: linear-gradient(135deg, #004191 0%, #0066cc 100%);
  color: white;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.title-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.title-text {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
}

.adding-money-content-redesigned {
  padding: 24px;
  overflow: visible;
}

.payment-method-redesigned {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  overflow: visible;
}

.method-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.method-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.method-title-redesigned {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
}

.method-description-redesigned {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: visible;
  text-overflow: unset;
  max-width: none;
  width: 100%;
  height: auto;
}

.cash-instructions-redesigned {
  overflow: visible;
  margin-top: 8px;
}

.instruction-step {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0 8px 0;
  font-weight: 600;
  color: #333;
}

.step-number {
  background: #004191;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.step-text {
  font-size: 16px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
}

.instruction-details {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-left: 36px;
  margin-bottom: 12px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: visible;
  text-overflow: unset;
  max-width: none;
  width: 100%;
  height: auto;
  padding: 8px 12px;
  background: #ffffff;
  border-left: 3px solid #004191;
  border-radius: 0 4px 4px 0;
}

.adding-money-image-section {
  text-align: center;
  margin: 24px 0;
  overflow: visible;
}

.adding-money-image {
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.adding-money-warning {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 20px;
  overflow: visible;
}

.warning-icon {
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.warning-text {
  color: #856404;
  font-size: 14px;
  line-height: 1.6;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: visible;
  text-overflow: unset;
  max-width: none;
  width: 100%;
  height: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .adding-money-title {
    padding: 16px;
  }

  .title-text {
    font-size: 18px;
  }

  .adding-money-content-redesigned {
    padding: 16px;
  }

  .method-title-redesigned {
    font-size: 16px;
  }

  .instruction-details {
    margin-left: 24px;
    font-size: 13px;
  }
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

/* Routes Overview Card Styles */
.routes-overview-card {
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0, 65, 145, 0.1) !important;
}

.section-title {
  font-size: 1.3rem;
  color: #333;
}

.routes-section {
  padding: 0 8px;
}

/* Mobile responsive adjustments for route overview */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.1rem;
  }
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

/* Global text wrapping for better mobile experience */
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

.v-list-item-subtitle {
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

/* 일반 텍스트 요소들 */
.v-card-text {
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.5;
}

.step-title-text {
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.4;
}

/* 링크 텍스트 줄바꿈 */
a {
  word-break: break-all;
  overflow-wrap: break-word;
}

/* Alert 텍스트 줄바꿈 */
.v-alert .v-alert__content {
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.5;
}

/* 한국어 텍스트 특별 처리 */
.korean-text {
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.6;
}

.translation-text {
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.5;
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

  .text-body {
    font-size: 14px;
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

  /* 모바일에서 더 작은 폰트 크기 */
  .v-card-title {
    font-size: 1.3rem;
  }

  .v-card-subtitle {
    font-size: 1rem;
  }
}

.styled-row {
  border-bottom: 1px solid #d3d3d3; /* 행 하단 회색 선 */
  padding-bottom: 8px;
  align-items: center; /* 텍스트 수직 정렬 */
}

.table-header {
  background-color: #f7f7f7; /* 헤더 행 배경색 */
  font-weight: 600;
}

.table-container {
  width: 100%;
  margin: 0;
}

.table-container .table-row .v-col {
  text-align: center;
  font-size: 15px; /* 표 안의 텍스트 크기 조절 */
}

/* 모바일에서 표 텍스트 크기 조절 */
@media (max-width: 768px) {
  .table-container .table-row .v-col {
    font-size: 12px; /* 모바일에서 조금 더 작게 */
    padding-left: 6px !important; /* 모바일에서 좌우 간격만 줄이기 */
    padding-right: 6px !important;
  }
  .table-header {
    font-size: 13px !important; /* 모바일에서 헤더 폰트 크기도 조절 */
  }
  .table-container {
    padding: 0 8px; /* 컨테이너의 좌우 패딩도 줄이기 */
    margin-top: 24px !important; /* 모바일에서 표 전체의 위아래 여백 늘리기 */
    margin-bottom: 24px !important;
  }
}

.transfer-conditions {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 16px;
  line-height: 1.6;
}

.transfer-conditions li {
  margin-bottom: 8px;
}

/* Route text responsive styling */
.route-text-desktop,
.route-text-mobile {
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.4;
}

.route-text-mobile {
  font-size: 0.9rem;
}

/* Transportation overview styling */
.transportation-overview-card {
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0, 65, 145, 0.1) !important;
}

.transportation-section {
  padding: 0 8px;
}

/* Enhanced mobile navigation */
@media (max-width: 768px) {
  .transportation-overview-card .v-col {
    padding: 4px 8px;
  }
  
  .route-text-mobile {
    font-size: 0.85rem;
  }
  
  .transportation-section .table-row .v-col:first-child {
    flex: 0 0 25%;
    max-width: 25%;
  }
  
  .transportation-section .table-row .v-col:last-child {
    flex: 0 0 75%;
    max-width: 75%;
  }
}
</style>
