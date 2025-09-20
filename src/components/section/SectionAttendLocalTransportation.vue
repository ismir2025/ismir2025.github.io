<template>
  <v-row justify="center" id="local-transportation">
    <v-col cols="12" md="8">
      <!-- Transportation Overview -->
      <v-card outlined class="pa-4 my-4 clean-card">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Local Transportation Guide
        </v-card-title>
        <v-card-text>
          <!-- Quick Navigation -->
          <v-card
            outlined
            class="pa-6 my-4 transportation-overview-card clean-card"
          >
            <v-card-title class="text-h5 mb-4 font-weight-bold text-center">
              <v-icon left size="28" color="#004191"
                >mdi-map-marker-path</v-icon
              >
              Quick Navigation
            </v-card-title>

            <v-container class="transportation-section">
              <v-row>
                <v-col cols="12" md="6">
                  <!-- Using Bus -->
                  <v-row
                    class="table-row styled-row mb-2"
                    style="cursor: pointer"
                    @click="scrollToSection('using-bus')"
                  >
                    <v-col
                      cols="3"
                      class="text-center font-weight-bold d-flex align-center justify-center"
                    >
                      <v-chip
                        small
                        style="background-color: #004191; color: white"
                      >
                        <v-icon small left>mdi-bus</v-icon>
                        Bus
                      </v-chip>
                    </v-col>
                    <v-col
                      cols="9"
                      class="d-flex align-center"
                      style="color: #000000; text-decoration: underline"
                    >
                      Using Bus & Free Transfer System
                    </v-col>
                  </v-row>

                  <!-- K.ride Taxi -->
                  <v-row
                    class="table-row styled-row mb-2"
                    style="cursor: pointer"
                    @click="scrollToSection('kride-guide')"
                  >
                    <v-col
                      cols="3"
                      class="text-center font-weight-bold d-flex align-center justify-center"
                    >
                      <v-chip
                        small
                        style="background-color: #5eed60; color: white"
                      >
                        <v-icon small left>mdi-taxi</v-icon>
                        Taxi
                      </v-chip>
                    </v-col>
                    <v-col
                      cols="9"
                      class="d-flex align-center"
                      style="color: #000000; text-decoration: underline"
                    >
                      K.ride for Taxi use in Korea
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="6">
                  <!-- T-Money Guide -->
                  <v-row
                    class="table-row styled-row mb-2"
                    style="cursor: pointer"
                    @click="scrollToSection('tmoney-guide')"
                  >
                    <v-col
                      cols="3"
                      class="text-center font-weight-bold d-flex align-center justify-center"
                    >
                      <v-chip
                        small
                        style="background-color: #5ebfed; color: white"
                      >
                        <v-icon small left>mdi-credit-card</v-icon>
                        Card
                      </v-chip>
                    </v-col>
                    <v-col
                      cols="9"
                      class="d-flex align-center"
                      style="color: #000000; text-decoration: underline"
                    >
                      T-Money guide for bus and taxi
                    </v-col>
                  </v-row>

                  <!-- Using Bicycle -->
                  <v-row
                    class="table-row styled-row mb-2"
                    style="cursor: pointer"
                    @click="scrollToSection('using-bicycle')"
                  >
                    <v-col
                      cols="3"
                      class="text-center font-weight-bold d-flex align-center justify-center"
                    >
                      <v-chip
                        small
                        style="background-color: #ed915e; color: white"
                      >
                        <v-icon small left>mdi-bicycle</v-icon>
                        Bike
                      </v-chip>
                    </v-col>
                    <v-col
                      cols="9"
                      class="d-flex align-center"
                      style="color: #000000; text-decoration: underline"
                    >
                      Using Bicycle (Tashu Service)
                    </v-col>
                  </v-row>
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

      <!-- Using Bus -->
      <v-card outlined class="pa-4 my-4 clean-card" id="using-bus">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Using Bus</v-card-title
        >
        <v-card-text class="text-body">
          <v-row class="my-4">
            <v-col cols="12">
              <v-card class="bus-info-card pa-4 clean-card" outlined>
                <v-card-title class="text-h6 highlight-text mb-3">
                  <v-icon left color="#004191">mdi-bus</v-icon>
                  Boarding and Paying the Fare
                </v-card-title>
                <v-card-text>
                  <p class="mb-3">
                    Buses in Daejeon are boarded through the front door and
                    exited through the middle door.
                  </p>
                  <p class="mb-3">
                    If you are using a travel card, tap it on the card reader
                    when boarding and again when getting off.
                  </p>
                  <p class="mb-3">
                    If you are paying with cash, pay the fare directly to the
                    bus driver at the front door.
                  </p>
                  <p class="mb-3">
                    The city of Daejeon operates an intelligent transportation
                    system (ITS), which displays the estimated arrival time of
                    upcoming buses on electronic screens installed at bus stops.
                  </p>
                  <p class="mb-3">
                    Use Kakao map or Naver map to search for bus routes. These
                    apps support English (go to Settings and change the app
                    language).
                  </p>

                  <!-- Using Bus Image -->
                  <div class="text-center mt-4">
                    <v-img
                      :src="require('@/assets/Transportation/Using Bus.png')"
                      alt="Using Bus Guide"
                      contain
                      max-width="80%"
                      class="mx-auto"
                    ></v-img>
                  </div>

                  <!-- Bus Fare Table -->
                  <v-container class="table-container mt-4" fluid>
                    <!-- 헤더 행 -->
                    <v-row class="table-row styled-row table-header">
                      <v-col cols="3" class="text-center">Type</v-col>
                      <v-col cols="3" class="text-center">Passengers</v-col>
                      <v-col cols="3" class="text-center">Fare (won)</v-col>
                      <v-col cols="3" class="text-center"
                        >Travel Card (won)</v-col
                      >
                    </v-row>

                    <!-- City Bus 행들 -->
                    <v-row class="table-row styled-row">
                      <v-col
                        cols="3"
                        class="text-center"
                        style="border-right: 1px solid #d3d3d3"
                        >City Bus</v-col
                      >
                      <v-col cols="3" class="text-center"
                        >Adults (aged 19 and over)</v-col
                      >
                      <v-col cols="3" class="text-center">1,400</v-col>
                      <v-col cols="3" class="text-center">1,250</v-col>
                    </v-row>

                    <v-row class="table-row styled-row">
                      <v-col
                        cols="3"
                        class="text-center"
                        style="border-right: 1px solid #d3d3d3"
                      ></v-col>
                      <v-col cols="3" class="text-center"
                        >Teenagers (aged 13-18)</v-col
                      >
                      <v-col cols="3" class="text-center">900</v-col>
                      <v-col cols="3" class="text-center">750</v-col>
                    </v-row>

                    <v-row class="table-row styled-row">
                      <v-col
                        cols="3"
                        class="text-center"
                        style="border-right: 1px solid #d3d3d3"
                      ></v-col>
                      <v-col cols="3" class="text-center"
                        >Children (aged 6-12)</v-col
                      >
                      <v-col cols="3" class="text-center">400</v-col>
                      <v-col cols="3" class="text-center">350</v-col>
                    </v-row>
                  </v-container>

                  <!-- Free Transfer System -->
                  <div class="mt-5">
                    <v-card-subtitle class="text-h6 mb-2 pa-0 highlight-text">
                      <v-icon left color="#004191">mdi-transfer</v-icon>
                      Free (Discount) Transfer System
                    </v-card-subtitle>
                    <p class="mb-3">
                      Daejeon operates a free transfer system that allows
                      passengers to transfer up to three times between buses or
                      other modes of public transportation (such as the urban
                      railway) without paying an additional fare.
                    </p>
                    <p class="mb-3">
                      This enables passengers to use up to four consecutive
                      modes of transportation (e.g., bus → bus → bus → subway)
                      for a single base fare.
                    </p>

                    <v-card-subtitle class="text-h6 mb-2 pa-0 mt-4">
                      Conditions for Free Transfers:
                    </v-card-subtitle>
                    <ul class="transfer-conditions mb-3">
                      <li class="mb-2">
                        Transfers are allowed up to 3 times within 30 minutes
                        (or 60 minutes on some routes) after getting off a
                        vehicle.
                      </li>
                      <li class="mb-2">
                        Transfers are not allowed on the same bus route.
                      </li>
                      <li class="mb-2">
                        You must scan your travel card when getting off each
                        vehicle for the transfer discount to apply.
                      </li>
                    </ul>
                  </div>

                  <!-- Frequently Used Bus -->
                  <div class="mt-5">
                    <v-card-subtitle class="text-h6 mb-2 pa-0 highlight-text">
                      <v-icon left color="#004191">mdi-bus-multiple</v-icon>
                      Frequently Used Bus
                    </v-card-subtitle>
                    <p class="mb-3">There are two main bus stops at KAIST:</p>
                    <ul class="mb-3">
                      <li class="mb-2">
                        <strong>Bus Stop 1:</strong> Korea Biotechnology
                        Research Institute — located at the North-East Entrance
                      </li>
                      <li class="mb-2">
                        <strong>Bus Stop 2:</strong> KAIST — located at the
                        South (Main) Entrance
                      </li>
                    </ul>

                    <!-- Bus Stop Image -->
                    <div class="text-center mt-4 mb-4">
                      <v-img
                        :src="require('@/assets/Transportation/Bus Stop.jpg')"
                        alt="KAIST Bus Stops Location Guide"
                        contain
                        max-width="100%"
                        class="mx-auto"
                      ></v-img>
                    </div>

                    <v-card-subtitle class="text-h6 mb-2 pa-0 mt-4">
                      These are the buses that stop in Bus stop 1 and 2
                    </v-card-subtitle>

                    <!-- Bus Stop 1 -->
                    <v-card class="pa-4 mb-4" outlined>
                      <v-card-subtitle
                        class="text-h6 mb-3 pa-0 font-weight-bold"
                      >
                        🚌 Buses stopping at Bus Stop 1
                      </v-card-subtitle>
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>
                              <strong>604</strong> |
                              <a
                                href="https://naver.me/GedPAUui"
                                target="_blank"
                                style="color: #004191"
                              >
                                View on Naver Map
                              </a>
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>

                    <!-- Bus Stop 2 -->
                    <v-card class="pa-4 mb-4" outlined>
                      <v-card-subtitle
                        class="text-h6 mb-3 pa-0 font-weight-bold"
                      >
                        🚌 Buses stopping at Bus Stop 2
                      </v-card-subtitle>
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>
                              <strong>특구1(Special Zone 1)</strong> |
                              <a
                                href="https://naver.me/xvtuX2b9"
                                target="_blank"
                                style="color: #004191"
                              >
                                View on Naver Map
                              </a>
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>
                              <strong>104</strong> |
                              <a
                                href="https://naver.me/I5y8ASTG"
                                target="_blank"
                                style="color: #004191"
                              >
                                View on Naver Map
                              </a>
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>
                              <strong>121</strong> |
                              <a
                                href="https://naver.me/5buYQxO0"
                                target="_blank"
                                style="color: #004191"
                              >
                                View on Naver Map
                              </a>
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>

                    <p class="mb-3">
                      Click the Naver Map links to check each bus's route,
                      schedule, and live location.
                    </p>
                    <p class="mb-3">
                      We've also included a Naver Map screenshot below so you
                      can easily see the full routes and time intervals. (You
                      can see from the map that Special Zone 1 passes through
                      KAIST.)
                    </p>

                    <!-- Naver Map Screenshot -->
                    <div class="text-center mt-4">
                      <v-img
                        :src="require('@/assets/Transportation/Naver Map.png')"
                        alt="Naver Map showing bus routes and schedules for KAIST"
                        contain
                        max-width="100%"
                        class="mx-auto"
                      ></v-img>
                    </div>
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

      <!-- K.ride Taxi Service -->
      <v-card outlined class="pa-4 my-4 clean-card" id="kride-guide">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          <v-icon left color="#004191">mdi-taxi</v-icon>
          K.ride for Taxi use in Korea
        </v-card-title>
        <v-card-text>
          <!-- Hero Section -->
          <v-card class="kride-hero-card mb-6">
            <v-row no-gutters>
              <v-col cols="12" md="6" class="kride-hero-content">
                <div class="pa-6">
                  <div class="kride-hero-badge mb-3">
                    <v-chip
                      style="background-color: #5eed60; color: white"
                      small
                    >
                      <v-icon left small>mdi-star</v-icon>
                      Recommended for Foreigners
                    </v-chip>
                  </div>
                  <h3 class="kride-hero-title mb-3">
                    Your Reliable Taxi Solution in Korea
                  </h3>
                  <p class="kride-hero-description mb-4">
                    K.ride is a taxi service specifically designed for
                    foreigners in Korea. Experience seamless transportation with
                    English support, easy payment, and reliable service
                    throughout your stay.
                  </p>
                  <div class="kride-features mb-4">
                    <div class="feature-item mb-2">
                      <v-icon small color="success" class="mr-2"
                        >mdi-check-circle</v-icon
                      >
                      <span>English language support</span>
                    </div>
                    <div class="feature-item mb-2">
                      <v-icon small color="success" class="mr-2"
                        >mdi-check-circle</v-icon
                      >
                      <span>International payment methods</span>
                    </div>
                    <div class="feature-item mb-2">
                      <v-icon small color="success" class="mr-2"
                        >mdi-check-circle</v-icon
                      >
                      <span>No Korean bank account required</span>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="kride-hero-image">
                <div
                  class="pa-4 d-flex justify-center align-center"
                  style="height: 100%; min-height: 300px"
                >
                  <v-img
                    :src="require('@/assets/Transportation/kride.png')"
                    alt="K.ride App Interface"
                    max-width="320px"
                    contain
                    class="kride-app-image"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
          </v-card>

          <!-- Why K.ride Section -->
          <v-card class="kride-why-card mb-6">
            <v-card-title class="kride-section-title">
              <v-icon left color="#004191">mdi-help-circle</v-icon>
              Why Choose K.ride?
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  v-for="(reason, index) in krideReasons"
                  :key="index"
                >
                  <v-card class="kride-reason-card h-100" outlined>
                    <v-card-text class="text-center pa-4">
                      <v-avatar size="60" :color="reason.color" class="mb-3">
                        <v-icon size="30" color="white">{{
                          reason.icon
                        }}</v-icon>
                      </v-avatar>
                      <h4 class="kride-reason-title mb-2">
                        {{ reason.title }}
                      </h4>
                      <p class="kride-reason-description">
                        {{ reason.description }}
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <!-- How to Use Section -->
          <v-card class="kride-howto-card mb-6">
            <v-card-title class="kride-section-title">
              <v-icon left color="#004191">mdi-cellphone-settings</v-icon>
              How to Use K.ride
            </v-card-title>
            <v-card-text>
              <!-- Step Cards Grid -->
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  v-for="(step, index) in krideSteps"
                  :key="index"
                >
                  <v-card class="kride-step-card h-100" outlined>
                    <v-card-text class="pa-4">
                      <div class="d-flex align-center mb-3">
                        <v-avatar size="50" :color="step.color" class="mr-3">
                          <v-icon color="white" size="24">{{
                            step.icon
                          }}</v-icon>
                        </v-avatar>
                        <div>
                          <div class="kride-step-number">
                            Step {{ index + 1 }}
                          </div>
                          <h4 class="kride-step-title">{{ step.title }}</h4>
                        </div>
                      </div>
                      <p class="kride-step-description mb-3">
                        {{ step.description }}
                      </p>
                      <div v-if="step.details" class="kride-step-details">
                        <ul class="kride-step-list">
                          <li v-for="detail in step.details" :key="detail">
                            {{ detail }}
                          </li>
                        </ul>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <!-- Download Section -->
          <v-card class="kride-download-card">
            <v-card-text class="pa-6">
              <div class="text-center">
                <v-icon size="48" color="primary" class="mb-3"
                  >mdi-download</v-icon
                >
                <h3 class="kride-download-title mb-3">Ready to Get Started?</h3>
                <p class="kride-download-description mb-4">
                  Download K.ride now and enjoy convenient taxi services
                  throughout Korea
                </p>
                <div class="kride-download-buttons">
                  <v-btn
                    style="background-color: #004191; color: white"
                    href="https://kride.kakaomobility.com/"
                    target="_blank"
                    large
                    class="mx-2 mb-2"
                  >
                    <v-icon left>mdi-web</v-icon>
                    Visit K.ride Website
                  </v-btn>
                  <v-btn
                    style="background-color: #5eed60; color: white"
                    href="https://play.google.com/store/apps/details?id=com.kakaomobility.kride"
                    target="_blank"
                    large
                    class="mx-2 mb-2"
                  >
                    <v-icon left>mdi-google-play</v-icon>
                    Google Play
                  </v-btn>
                  <v-btn
                    style="background-color: #5ebfed; color: white"
                    href="https://apps.apple.com/app/k-ride/id1234567890"
                    target="_blank"
                    large
                    class="mx-2 mb-2"
                  >
                    <v-icon left>mdi-apple</v-icon>
                    App Store
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- T-Money Guide -->
      <v-card outlined class="pa-4 my-4 clean-card" id="tmoney-guide">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          <v-icon left color="#004191">mdi-credit-card-outline</v-icon>
          T-Money guide for bus and taxi (Phone use)
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-card class="pa-4 mb-4 clean-card" outlined>
                  <v-card-text class="text-body-1">
                    T-money is a rechargeable transportation card widely used in
                    South Korea for subways, buses, and some taxis. It also
                    works at many convenience stores. You don't need a physical
                    card anymore—foreigners can now add T-money directly to
                    their smartphone (Apple Pay or Samsung Pay).
                  </v-card-text>
                </v-card>

                <!-- T-money Mobile App Image -->
                <div class="mb-4 d-flex justify-center">
                  <v-img
                    :src="require('@/assets/Transportation/tMoney.jpg')"
                    alt="T-money Mobile App Interface"
                    max-width="400px"
                    contain
                    class="mb-3"
                  ></v-img>
                </div>

                <!-- Getting Started -->
                <v-card class="route-step-card mb-4 clean-card" outlined>
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-play-circle</v-icon>
                    <span class="step-title-text">1. Getting Started</span>
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-card class="pa-3 mb-3 h-100" outlined>
                          <v-card-subtitle
                            class="text-h6 mb-2 pa-0 font-weight-bold"
                          >
                            <v-icon left small>mdi-apple</v-icon>iPhone (Apple
                            Pay)
                          </v-card-subtitle>
                          <v-list dense>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title
                                  >Download the Mobile T-money app from the App
                                  Store.</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title
                                  >Open the app → tap Browsing(둘러보기)
                                  (instead of "Start").</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title
                                  >Select the option to add a T-money card to
                                  Apple Wallet.</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title
                                  >The card will be created in about a
                                  minute.</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-card class="pa-3 mb-3 h-100" outlined>
                          <v-card-subtitle
                            class="text-h6 mb-2 pa-0 font-weight-bold"
                          >
                            <v-icon left small>mdi-android</v-icon>Android
                            (Samsung Pay)
                          </v-card-subtitle>
                          <v-list dense>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title
                                  >Download the T-money GO app from the Google
                                  Play Store.</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title
                                  >Follow the prompts to create your digital
                                  T-money card.</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title
                                  >Add it to Samsung Pay for easy
                                  access.</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title
                                  >Setup is complete and ready to
                                  use.</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>

                <!-- Adding Money (Top-Up) -->
                <v-card class="route-step-card mb-4 clean-card" outlined>
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-credit-card-plus</v-icon>
                    <span class="step-title-text"
                      >2. Adding Money (Top-Up)</span
                    >
                  </v-card-title>
                  <v-card-text>
                    <!-- Credit Card -->
                    <!-- Payment Methods -->
                    <div
                      style="
                        background: #f0f0f0;
                        padding: 20px;
                        margin: 20px;
                        border: 1px solid #ccc;
                      "
                    >
                      <div
                        style="color: #333; font-size: 14px; line-height: 1.8"
                      >
                        • <strong>Credit Card (Visa/MasterCard):</strong> Can be
                        used inside the T-money app (sometimes limited for
                        foreigners; success varies).<br /><br />

                        • <strong>Cash at Subway Stations:</strong><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;1. Put your phone in
                        <strong>Service Mode</strong>:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;■ iPhone
                        → Settings → Wallet & Apple Pay → T-money → enable
                        <em>Service Mode</em>.<br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;2. At a top-up machine in a
                        subway station, place your phone flat on the card reader
                        area.<br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;3. Insert cash, choose the
                        amount, and wait for the machine to finish reloading.<br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;4. Your balance will update
                        automatically (sometimes with a short delay).
                      </div>
                    </div>

                    <!-- Image -->
                    <div style="text-align: center; padding: 20px">
                      <img
                        :src="
                          require('@/assets/Transportation/Adding Money.png')
                        "
                        alt="T-money Top-up Machines at Subway Station"
                        style="
                          max-width: 500px;
                          width: 100%;
                          height: auto;
                          border-radius: 8px;
                        "
                      />
                    </div>

                    <!-- Warning -->
                    <div
                      style="
                        background: #fff3cd;
                        border: 1px solid #ffeaa7;
                        padding: 15px;
                        margin: 20px;
                        border-radius: 8px;
                        display: flex;
                        align-items: flex-start;
                        gap: 10px;
                      "
                    >
                      <span style="font-size: 20px">⚠️</span>
                      <span
                        style="
                          color: #856404;
                          font-size: 14px;
                          line-height: 1.6;
                        "
                      >
                        Convenience stores (GS25, CU, 7-Eleven) may not yet
                        support phone reloading smoothly—best to use subway
                        stations.
                      </span>
                    </div>
                  </v-card-text>
                </v-card>

                <!-- Using T-money -->
                <v-card class="route-step-card mb-4 clean-card" outlined>
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191"
                      >mdi-contactless-payment</v-icon
                    >
                    <span class="step-title-text">3. Using T-money</span>
                  </v-card-title>
                  <v-card-text>
                    <!-- 🚍 On the Bus -->
                    <v-card class="pa-4 mb-4" outlined>
                      <v-card-subtitle
                        class="text-h6 mb-3 pa-0 font-weight-bold"
                      >
                        🚍 On the Bus
                      </v-card-subtitle>
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Tap your phone on the card reader when
                              boarding.</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Tap again when exiting (important for transfer
                              discounts).</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >You can transfer up to 4 times a day at a
                              discount.</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>

                    <!-- 🚇 On the Subway -->
                    <v-card class="pa-4 mb-4" outlined>
                      <v-card-subtitle
                        class="text-h6 mb-3 pa-0 font-weight-bold"
                      >
                        🚇 On the Subway
                      </v-card-subtitle>
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Tap at the gate when entering.</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Tap again when exiting.</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >If you're transferring within the system, the
                              reader will show 0 KRW charge at
                              entry.</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>

                    <!-- 🚖 In a Taxi -->
                    <v-card class="pa-4 mb-4" outlined>
                      <v-card-subtitle
                        class="text-h6 mb-3 pa-0 font-weight-bold"
                      >
                        🚖 In a Taxi
                      </v-card-subtitle>
                      <v-list dense>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Only some taxis accept T-money (Taxi with the
                              T-money logo).</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Tell the driver you'll pay by
                              T-money.</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Tap your phone at the card reader when the trip
                              ends.</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              >Make sure your balance covers the full fare in
                              advance.</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>

                      <!-- T-money Taxi Card Image -->
                      <div class="mt-3 d-flex justify-center">
                        <v-img
                          :src="
                            require('@/assets/Transportation/t-money-taxi-card.jpg')
                          "
                          alt="T-money Logo on Taxi and Card Reader"
                          max-width="400px"
                          contain
                          class="mb-2"
                        ></v-img>
                      </div>
                    </v-card>
                  </v-card-text>
                </v-card>

                <!-- Tips & Things to Know -->
                <v-card class="route-step-card mb-4 clean-card" outlined>
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191">mdi-lightbulb</v-icon>
                    <span class="step-title-text"
                      >4. Tips & Things to Know</span
                    >
                  </v-card-title>
                  <v-card-text>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon small color="#5EED60">mdi-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            >Express Mode (on iPhone) means you don't need to
                            open Wallet—just tap your phone, even if another app
                            is on screen.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon small color="#5EED60">mdi-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            >Always wait for the beep sound when tapping.
                            Missing a tap may charge you
                            extra.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon small color="#5EED60">mdi-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            >If an error occurs in the subway, press the Help
                            (red) button at the gate for staff
                            assistance.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon small color="#5EED60">mdi-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            >Keep your phone flat and steady on the top-up
                            machine when reloading.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon small color="#5EED60">mdi-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            >Transfers only work if you tap both when boarding
                            and exiting buses or subways.</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>

                    <v-container class="mt-3" fluid>
                      <v-card-subtitle class="text-body-1 pa-0">
                        For more info, please check this website (mostly info on
                        cards, but can be equally applied to mobile apps):
                      </v-card-subtitle>
                      <v-btn
                        style="border-color: #5ebfed; color: #5ebfed"
                        href="https://blog.trazy.com/korea-subway-t-money-card-guide/"
                        target="_blank"
                        outlined
                        class="mt-2"
                      >
                        <v-icon left>mdi-open-in-new</v-icon>
                        T-money Card Guide
                      </v-btn>
                    </v-container>
                  </v-card-text>
                </v-card>

                <!-- Frequent FAQs -->
                <v-card class="route-step-card mb-4 clean-card" outlined>
                  <v-card-title class="text-h6 step-title">
                    <v-icon left color="#004191"
                      >mdi-frequently-asked-questions</v-icon
                    >
                    <span class="step-title-text">5. Frequent FAQs</span>
                  </v-card-title>
                  <v-card-text>
                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-header>
                          <strong>🌏 Is T-money valid outside Seoul?</strong>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          Yes. Works in cities like Busan, Jeju, Daegu, Incheon
                          and more.
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-header>
                          <strong>🚍 What if I don't tap out?</strong>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          You'll lose transfer discounts and may be charged the
                          maximum fare.
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
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
      <v-card outlined class="pa-4 my-4 clean-card" id="using-bicycle">
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
              <v-card class="bicycle-info-card pa-4 clean-card" outlined>
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
                  <p class="mb-3">
                    <strong>Please note:</strong> If you don't have a Korean
                    bank account, you'll only be able to use the free first hour
                    of Tashu. To continue using a bicycle beyond this, you'll
                    need to park it within the hour and then unlock it again to
                    start a new free hour session.
                  </p>
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

      <br /><br /><br />
    </v-col>
  </v-row>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      krideReasons: [
        {
          icon: "mdi-translate",
          color: "#004191",
          title: "English Support",
          description:
            "Full English interface and customer support for international visitors",
        },
        {
          icon: "mdi-credit-card-multiple",
          color: "#5EED60",
          title: "Easy Payment",
          description:
            "Accept international credit cards and digital payment methods",
        },
        {
          icon: "mdi-shield-check",
          color: "#5EBFED",
          title: "Safe & Reliable",
          description:
            "Licensed drivers with GPS tracking and 24/7 customer support",
        },
      ],
      krideSteps: [
        {
          icon: "mdi-download",
          color: "#004191",
          title: "Download the App",
          description: "Get K.ride from Google Play Store or Apple App Store",
          details: [
            "Available for both Android and iOS devices",
            "Free to download and install",
            "Requires internet connection for registration",
          ],
        },
        {
          icon: "mdi-account-plus",
          color: "#5EED60",
          title: "Create Account",
          description: "Sign up with your phone number or email address",
          details: [
            "Verify your phone number with SMS",
            "Add your name and basic information",
            "Set up your profile preferences",
          ],
        },
        {
          icon: "mdi-credit-card-plus",
          color: "#EDD35E",
          title: "Add Payment Method",
          description: "Register your credit card or preferred payment method",
          details: [
            "International credit cards accepted",
            "Secure payment processing",
            "Multiple payment options available",
          ],
        },
        {
          icon: "mdi-taxi",
          color: "#5EBFED",
          title: "Book Your Ride",
          description: "Set your destination and request a taxi",
          details: [
            "Real-time driver tracking",
            "Estimated arrival time and fare",
            "Rate your driver after the trip",
          ],
        },
      ],
    };
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
  line-clamp: unset !important;
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
  line-clamp: unset !important;
  white-space: normal !important;
  max-width: none !important;
}

/* Specific override for the service mode instructions and all its children */
.service-mode-full-instructions,
.service-mode-full-instructions * {
  overflow: visible !important;
  text-overflow: unset !important;
  -webkit-line-clamp: unset !important;
  line-clamp: unset !important;
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
  line-clamp: unset !important;
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
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease;
}

.qr-simple:hover {
  transform: scale(1.02);
  border-color: #004191;
}

/* Legacy table styling for compatibility */
.v-simple-table {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
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
  border-radius: 8px !important;
  border: 1px solid #e0e0e0 !important;
  background: #ffffff !important;
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

/* Transportation overview styling - Updated above */

.transportation-section {
  padding: 0 8px;
}

/* Enhanced mobile navigation */
@media (max-width: 768px) {
  .transportation-overview-card .v-col {
    padding: 4px 8px;
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

/* Global Typography and Spacing Improvements */
.text-h4 {
  font-weight: 700 !important;
  color: #333 !important;
  margin-bottom: 1.5rem !important;
}

.text-h5 {
  font-weight: 600 !important;
  color: #333 !important;
  margin-bottom: 1rem !important;
}

.text-h6 {
  font-weight: 600 !important;
  color: #333 !important;
  margin-bottom: 0.75rem !important;
}

.highlight-text {
  color: #004191 !important;
  font-weight: 600 !important;
}

/* Improved Card Spacing */
.v-card-text {
  padding: 1.5rem !important;
}

.v-card-title {
  padding: 1.5rem 1.5rem 0.75rem 1.5rem !important;
}

/* Clean Card Styles - Applied to all cards */
.clean-card {
  border-radius: 8px !important;
  border: 1px solid #e0e0e0 !important;
  background: #ffffff !important;
  transition: border-color 0.2s ease;
}

.clean-card:hover {
  border-color: #004191;
}

/* Transportation Overview Card */
.transportation-overview-card {
  background: #f8f9fa !important;
  border: 1px solid #e0e0e0 !important;
}

.transportation-overview-card:hover {
  border-color: #004191;
}

/* Bus Info Card */
.bus-info-card {
  background: #ffffff !important;
  border: 1px solid #e0e0e0 !important;
}

/* Route Step Cards */
.route-step-card {
  background: #ffffff !important;
  border: 1px solid #e0e0e0 !important;
  border-radius: 8px !important;
  transition: border-color 0.2s ease;
}

.route-step-card:hover {
  border-color: #004191;
}

.route-step-card .step-title {
  background: #f8f9fa !important;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid #e0e0e0;
}

/* Bicycle Info Card */
.bicycle-info-card {
  background: #ffffff !important;
  border: 1px solid #e0e0e0 !important;
}

/* K.ride Section Styles */
.kride-hero-card {
  border-radius: 12px !important;
  background: #004191;
  border: 1px solid #e0e0e0;
  overflow: hidden;
}

.kride-hero-content {
  background: #004191;
  color: white;
}

.kride-hero-image {
  background: #f8f9fa;
}

.kride-hero-badge .v-chip {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.kride-hero-title {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  color: white;
}

.kride-hero-description {
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  opacity: 0.95;
}

.kride-features .feature-item {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: white;
  opacity: 0.95;
}

.kride-app-image {
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.kride-app-image:hover {
  transform: scale(1.02);
}

/* Why K.ride Section */
.kride-why-card {
  border-radius: 8px !important;
  background: #ffffff;
  border: 1px solid #e0e0e0;
}

.kride-section-title {
  background: #f8f9fa;
  border-radius: 8px 8px 0 0;
  margin: -16px -16px 16px -16px;
  padding: 20px;
  font-size: 1.4rem;
  font-weight: 600;
  border-bottom: 1px solid #e0e0e0;
}

.kride-reason-card {
  border-radius: 8px !important;
  transition: border-color 0.2s ease;
  height: 100%;
  border: 2px solid #e0e0e0;
}

.kride-reason-card:hover {
  border-color: #004191;
}

.kride-reason-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.kride-reason-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #666;
  margin: 0;
}

/* How to Use Section */
.kride-howto-card {
  border-radius: 8px !important;
  background: #ffffff;
  border: 1px solid #e0e0e0;
}

.kride-step-card {
  border-radius: 8px !important;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.kride-step-card:hover {
  border-color: #004191;
  transform: translateY(-2px);
}

.kride-step-number {
  font-size: 0.75rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.kride-step-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.kride-step-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin: 0;
}

.kride-step-details {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  border-left: 4px solid #004191;
}

.kride-step-list {
  margin: 0;
  padding-left: 20px;
}

.kride-step-list li {
  margin-bottom: 8px;
  font-size: 0.9rem;
  line-height: 1.4;
  color: #555;
}

/* Step navigation removed - using grid layout now */

/* Download Section */
.kride-download-card {
  border-radius: 8px !important;
  background: #004191;
  color: white;
  border: 1px solid #004191;
}

.kride-download-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
}

.kride-download-description {
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  opacity: 0.95;
  margin: 0;
}

.kride-download-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.kride-download-buttons .v-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  border: 2px solid transparent;
}

.kride-download-buttons .v-btn:hover {
  opacity: 0.9;
}

/* Mobile Responsive for K.ride Section */
@media (max-width: 768px) {
  .kride-hero-title {
    font-size: 1.4rem;
  }

  .kride-hero-description {
    font-size: 0.9rem;
  }

  .kride-features .feature-item {
    font-size: 0.85rem;
  }

  .kride-section-title {
    font-size: 1.2rem;
    padding: 16px;
  }

  .kride-reason-title {
    font-size: 1rem;
  }

  .kride-reason-description {
    font-size: 0.85rem;
  }

  .kride-step-number {
    font-size: 0.7rem;
  }

  .kride-step-title {
    font-size: 1.1rem;
  }

  .kride-step-description {
    font-size: 0.9rem;
  }

  .kride-step-card {
    margin-bottom: 1rem;
  }

  .kride-download-title {
    font-size: 1.4rem;
  }

  .kride-download-description {
    font-size: 0.9rem;
  }

  .kride-download-buttons {
    flex-direction: column;
    align-items: center;
  }

  .kride-download-buttons .v-btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>
