<template>
  <v-row justify="center" id="accommodation">
    <v-col cols="12" md="8">
      <!-- 1) Accommodation Information 영역 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Recommended Accommodations
        </v-card-title>

        <v-card-text class="text-body">
          <div class="map-container mb-4">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=13ak3yW_tMoBRHQ4I5Btc3tjG9tmJLo0&ehbc=2E312F&noprof=1"
              width="100%"
              height="600"
              style="border: 0; border-radius: 8px"
              allowfullscreen=""
              loading="lazy"
            >
            </iframe>
          </div>
        </v-card-text>

        <br />
      </v-card>

      <!-- 2) Hotel Information Table 영역 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Hotel Information
        </v-card-title>

        <!-- Hotel Information Table -->
        <v-card-text class="text-body mt-5">
          <v-container class="table-container" fluid>
            <!-- 헤더 행 -->
            <v-row class="table-row styled-row table-header">
              <v-col cols="6" sm="6" md="4" class="text-center"
                >Hotel Name</v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex">Tier</v-col>
              <v-col cols="6" sm="6" md="2" class="text-center">Website</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                >Distance<br />(by Taxi)</v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex"
                >Room Block<br />Available</v-col
              >
            </v-row>

            <!-- Hotel Onoma, Daejeon -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>Hotel Onoma, Daejeon</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex">5 Star</v-col>
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="https://www.marriott.com/en-us/hotels/cjjak-hotel-onoma-daejeon-autograph-collection/overview/"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">5 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- LOTTE City Hotel Daejeon -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>LOTTE City Hotel Daejeon</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex">4 Star</v-col>
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="https://www.lottehotel.com/daejeon-city/en"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">5 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- Hotel Interciti -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>Hotel Interciti</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex">4 Star</v-col>
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="https://www.hotelinterciti.com/english/"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">8 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- Ramada by Wyndham Daejeon -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>Ramada by Wyndham Daejeon</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex">3 Star</v-col>
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="https://www.wyndhamhotels.com/ramada/daejeon-south-korea/ramada-daejeon/overview"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">10 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- HOTEL D.EDITION -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>HOTEL D.EDITION</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex">3 Star</v-col>
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="http://www.deditionhotel.com/view/index.do?SS_SVC_LANG_CODE=ENG"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">13 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- Hotel Meteor -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>Hotel Meteor</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex">3 Star</v-col>
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="https://www.hotelmeteor.co.kr/"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">15 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- ICC Hotel -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>ICC Hotel</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex">3 Star</v-col>
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="http://hotel.hotelicc.com/view/index.do?SS_SVC_LANG_CODE=ENG"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">6 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- Toyoko-inn -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>Toyoko-inn</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex">3 Star</v-col>
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="https://www.toyoko-inn.com/eng/"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">10 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- The Empress Hotel -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>The Empress Hotel</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex">3 Star</v-col>
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="http://www.theempresshotel.co.kr/en/"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">5 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- Hotel Graytone Dunsan -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>Hotel Graytone Dunsan</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex"
                >Residence</v-col
              >
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="https://kr.hotels.com/en/ho481512/hotel-graytone-dunsan-daejeon-south-korea/?chkin=2025-9-20&chkout=2025-9-25&expediaPropertyId=9468506&locale=en_US&regionId=9584&rm1=a2&searchId=6f4adc63-3681-42bb-9856-69b69673693d"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">10 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- Good Morning Residence Hotel HUE -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>Good Morning Residence Hotel HUE</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex"
                >Residence</v-col
              >
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="http://hotelhue.co.kr/"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">10 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>

            <!-- I-Hotel -->
            <v-row class="table-row styled-row">
              <v-col cols="6" sm="6" md="4" class="text-center"
                ><strong>I-Hotel</strong></v-col
              >
              <v-col md="2" class="text-center d-none d-md-flex"
                >Residence</v-col
              >
              <v-col cols="6" sm="6" md="2" class="text-center">
                <a
                  href="https://i-hotel.co.kr/"
                  target="_blank"
                  style="color: #1487c8"
                  >Link</a
                >
              </v-col>
              <v-col md="2" class="text-center d-none d-md-flex">9 min</v-col>
              <v-col md="2" class="text-center d-none d-md-flex"
                ><span class="cross-icon">✗</span></v-col
              >
            </v-row>
          </v-container>
        </v-card-text>
        <br /><br />
      </v-card>

      <!-- 3) Hotels with Conference Room Blocks 영역 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Hotels with Conference Room Blocks
        </v-card-title>

        <v-card-text class="text-body">
          The following hotels offer special conference room blocks with
          negotiated rates. Please follow the specific reservation methods for
          each hotel to secure your accommodation.
        </v-card-text>

        <!-- 1. Ramada by Wyndham Daejeon -->
        <v-card-text class="text-body mt-5">
          <h2 class="text-h5 font-weight-bold mb-4">
            1. Ramada by Wyndham Daejeon
          </h2>

          <!-- Hotel Images -->
          <div class="hotel-images mb-4">
            <v-row>
              <v-col cols="12">
                <img
                  :src="hotelImages.ramada"
                  alt="Ramada by Wyndham Daejeon"
                  class="hotel-main-image"
                />
              </v-col>
            </v-row>
          </div>

          <!-- Hotel Information Table -->
          <v-container class="hotel-info-table" fluid>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Distance from the venue</v-col>
              <v-col cols="9" class="info-value"
                >About 10 minutes (by taxi)</v-col
              >
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Contact number</v-col>
              <v-col cols="9" class="info-value">+82 42-540-1000</v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Address</v-col>
              <v-col cols="9" class="info-value"
                >127, Gyeryong-ro, Yuseong-gu, Daejeon, Republic of Korea</v-col
              >
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Website</v-col>
              <v-col cols="9" class="info-value">
                <a
                  href="https://www.wyndhamhotels.com/ramada/daejeon-south-korea/ramada-daejeon/overview"
                  target="_blank"
                  style="color: #1487c8; text-decoration: underline"
                  >https://www.wyndhamhotels.com/ramada/daejeon-south-korea/ramada-daejeon/overview</a
                >
              </v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Reservation method</v-col>
              <v-col cols="9" class="info-value">
                <span style="color: red; font-weight: bold"
                  >Please note that the room block is now SOLD OUT.</span
                ><br />
                <span style="color: red"
                  >Discounted rates are no longer available through the
                  conference.</span
                ><br />
                <span style="color: red"
                  >If you wish to make a reservation, please contact the hotel
                  directly for availability and rates.</span
                >
              </v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Negotiated room rate</v-col>
              <v-col cols="9" class="info-value">
                Hollywood King : KRW 150,000<br />
                Standard Twin : KRW 150,000
              </v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Check-in/Check-out</v-col>
              <v-col cols="9" class="info-value">15:00 / 12:00</v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <!-- 2. HOTEL D.EDITION -->
        <v-card-text class="text-body mt-8">
          <h2 class="text-h5 font-weight-bold mb-4">2. HOTEL D.EDITION</h2>

          <!-- Hotel Images -->
          <div class="hotel-images mb-4">
            <v-row>
              <v-col cols="12">
                <img
                  :src="hotelImages.dedition"
                  alt="HOTEL D.EDITION"
                  class="hotel-main-image"
                />
              </v-col>
            </v-row>
          </div>

          <!-- Hotel Information Table -->
          <v-container class="hotel-info-table" fluid>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Distance from the venue</v-col>
              <v-col cols="9" class="info-value"
                >About 13 minutes (by taxi)</v-col
              >
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Contact number</v-col>
              <v-col cols="9" class="info-value">+82 42-489-3651</v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Address</v-col>
              <v-col cols="9" class="info-value"
                >13, Dunsannam-ro 91beon-gil, Seo-gu, Daejeon, Republic of
                Korea</v-col
              >
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Website</v-col>
              <v-col cols="9" class="info-value">
                <a
                  href="http://www.deditionhotel.com/view/index.do?SS_SVC_LANG_CODE=ENG"
                  target="_blank"
                  style="color: #1487c8; text-decoration: underline"
                  >http://www.deditionhotel.com/view/index.do?SS_SVC_LANG_CODE=ENG</a
                >
              </v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Reservation method</v-col>
              <v-col cols="9" class="info-value">
                <span style="color: red; font-weight: bold"
                  >Please note that the room block is now SOLD OUT.</span
                ><br />
                <span style="color: red"
                  >Discounted rates are no longer available through the
                  conference.</span
                ><br />
                <span style="color: red"
                  >If you wish to make a reservation, please contact the hotel
                  directly for availability and rates.</span
                >
              </v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Negotiated room rate</v-col>
              <v-col cols="9" class="info-value">
                Double/Twin<br />
                Room only : KRW 130,000<br />
                Room & Breakfast : KRW 140,000 ~ 150,000
              </v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Check-in/Check-out</v-col>
              <v-col cols="9" class="info-value">15:00 / 11:00</v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <!-- 3. Hotel Meteor -->
        <v-card-text class="text-body mt-8">
          <h2 class="text-h5 font-weight-bold mb-4">3. Hotel Meteor</h2>

          <!-- Hotel Images -->
          <div class="hotel-images mb-4">
            <v-row>
              <v-col cols="12">
                <img
                  :src="hotelImages.meteor"
                  alt="Hotel Meteor"
                  class="hotel-main-image"
                />
              </v-col>
            </v-row>
          </div>

          <!-- Hotel Information Table -->
          <v-container class="hotel-info-table" fluid>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Distance from the venue</v-col>
              <v-col cols="9" class="info-value"
                >About 11 minutes (by taxi)</v-col
              >
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Contact number</v-col>
              <v-col cols="9" class="info-value">+82 42-482-0100</v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Address</v-col>
              <v-col cols="9" class="info-value"
                >23, Daedeok-daero 220beon-gil, Seo-gu, Dae-jeon, Korea</v-col
              >
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Website</v-col>
              <v-col cols="9" class="info-value">
                <a
                  href="https://www.hotelmeteor.co.kr/"
                  target="_blank"
                  style="color: #1487c8; text-decoration: underline"
                  >https://www.hotelmeteor.co.kr/</a
                >
              </v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Reservation method</v-col>
              <v-col cols="9" class="info-value">
                <span style="color: red; font-weight: bold"
                  >Please note that the room block is now SOLD OUT.</span
                ><br />
                <span style="color: red"
                  >Discounted rates are no longer available through the
                  conference.</span
                ><br />
                <span style="color: red"
                  >If you wish to make a reservation, please contact the hotel
                  directly for availability and rates.</span
                >
              </v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Negotiated room rate</v-col>
              <v-col cols="9" class="info-value">
                Standard Double<br />
                Room only : KRW 130,000<br />
                Room & Breakfast : KRW 140,000 ~ 150,000
              </v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Check-in/Check-out</v-col>
              <v-col cols="9" class="info-value">15:00 / 11:00</v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <!-- 4. Hotel Interciti -->
        <v-card-text class="text-body mt-8">
          <h2 class="text-h5 font-weight-bold mb-4">4. Hotel Interciti</h2>

          <!-- Hotel Images -->
          <div class="hotel-images mb-4">
            <v-row>
              <v-col cols="12">
                <img
                  :src="hotelImages.intercity"
                  alt="Hotel Interciti"
                  class="hotel-main-image"
                />
              </v-col>
            </v-row>
          </div>

          <!-- Hotel Information Table -->
          <v-container class="hotel-info-table" fluid>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Distance from the venue</v-col>
              <v-col cols="9" class="info-value"
                >About 8 minutes (by taxi)</v-col
              >
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Contact number</v-col>
              <v-col cols="9" class="info-value">+82-42-600-6000</v-col>
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Address</v-col>
              <v-col cols="9" class="info-value"
                >92, Oncheon-ro, Yuseong-gu, Daejeon, Republic of Korea</v-col
              >
            </v-row>
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Website</v-col>
              <v-col cols="9" class="info-value">
                <a
                  href="https://www.hotelinterciti.com/english/"
                  target="_blank"
                  style="color: #1487c8; text-decoration: underline"
                  >www.hotelinterciti.com/english</a
                >
              </v-col>
            </v-row>
            <!-- <v-row class="info-row">
              <v-col cols="3" class="info-label">Reservation method</v-col>
              <v-col cols="9" class="info-value">
                Please access the hotel website(<a
                  href="https://www.hotelinterciti.com/english/"
                  target="_blank"
                  style="color: #1487c8; text-decoration: underline"
                  >www.hotelinterciti.com/english</a
                >)<br />
                Access the room reservation link<br />
                Enter the promotion discount code (<strong>ISMIR5</strong>)<br />
                Please select a schedule<br />
                Please select a room<br />
                Please complete the reservation process<br />
                <v-btn
                  class="mt-3"
                  color="secondary"
                  rounded
                  href="/[ISMIR]Hotel Interciti_Promotion Guide.pdf"
                  download
                  >Promotion Guide Download</v-btn
                >
              </v-col>
            </v-row> -->
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Reservation method</v-col>
              <v-col cols="9" class="info-value">
                <span style="color: red; font-weight: bold"
                  >Please note that the room block has now closed.</span
                ><br />
                <span style="color: red"
                  >Discounted rates are no longer available through the
                  conference.</span
                ><br />
                <span style="color: red"
                  >If you wish to make a reservation, please contact the hotel
                  directly for availability and rates.</span
                >
              </v-col>
            </v-row>
            <!-- <v-row class="info-row">
              <v-col cols="3" class="info-label">Negotiated room rate</v-col>
              <v-col cols="9" class="info-value">
                Standard Double : KRW 220,000<br />
                Standard Twin : KRW 231,000<br />
                Deluxe Double : KRW 242,000<br />
                Deluxe Family : KRW 253,000
              </v-col>
            </v-row> -->
            <v-row class="info-row">
              <v-col cols="3" class="info-label">Check-in/Check-out</v-col>
              <v-col cols="9" class="info-value">15:00 / 11:00</v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <br />
        <br /><br />
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Accommodation Inquiries
        </v-card-title>
        <v-card-text class="text-body">
          For any questions regarding accommodation, please contact the
          ISMIR2025 Secretariat:
          <br /><br />
          <span class="highlight-text">Contact Point:</span> ISMIR2025
          Secretariat<br />
          <span class="highlight-text">Phone:</span> +82-42-489-7070<br />
          <span class="highlight-text">Email:</span>
          <a
            href="mailto:ismir.korea@themiceter.com"
            style="color: #1487c8; text-decoration: underline"
          >
            ismir.korea@themiceter.com
          </a>
        </v-card-text>
      </v-card>
      <br /><br /><br />
    </v-col>
  </v-row>
</template>

<script>
import RamadaImage from "@/assets/Accomodation/RAMADA.png";
import DEditionImage from "@/assets/Accomodation/DEDITION.png";
import MeteorImage from "@/assets/Accomodation/Meteor.png";
import IntercityImage from "@/assets/Accomodation/Interciti.png";

export default {
  data() {
    return {
      hotelImages: {
        ramada: RamadaImage,
        dedition: DEditionImage,
        meteor: MeteorImage,
        intercity: IntercityImage,
      },
    };
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

.styled-row {
  border-bottom: 1px solid #d3d3d3; /* 행 하단 회색 선 */
  padding-bottom: 8px;
  align-items: center; /* 텍스트 수직 정렬 */
}

.table-header {
  background-color: #f7f7f7; /* 헤더 행 배경색 */
  font-weight: 600;
}

.highlight-text {
  color: #004191;
  font-weight: bold;
}

.table-container {
  width: 100%;
  margin: 0;
}

.table-container .table-row .v-col {
  text-align: center;
  align-items: center !important;
  justify-content: center !important;
}

.table-container .table-row.table-header .v-col {
  text-align: center;
  align-items: center !important;
  justify-content: center !important;
}

.table-container .table-row .v-col strong {
  width: 100%;
  text-align: center;
  display: block;
}

.table-container .table-row .v-col a {
  width: 100%;
  text-align: center;
  display: block;
}

.room-block-center {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
}

.map-container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.hotel-images {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.image-placeholder {
  background-color: #f5f5f5;
  border: 2px dashed #ccc;
  border-radius: 8px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}

.image-placeholder.small {
  height: 95px;
}

.hotel-info-table {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0;
}

.info-row {
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  background-color: #f8f9fa;
  font-weight: 600;
  padding: 16px;
  border-right: 1px solid #e0e0e0;
  color: #333;
}

.info-value {
  padding: 16px;
  line-height: 1.5;
}

.hotel-main-image {
  width: 30%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

/* 모바일 화면에서 이미지가 너비를 꽉 채우도록 */
@media (max-width: 959px) {
  .hotel-main-image {
    width: 100%;
  }
}

.check-icon {
  color: #4caf50;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.cross-icon {
  color: #f44336;
  font-size: 26px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.highlight-text {
  color: #004191;
  font-weight: bold;
}

/* 데스크탑(md) 이상에서만 flex 적용 */
@media (min-width: 960px) {
  .table-container .table-row .v-col {
    display: flex !important;
  }
}

/* 헤더 행에도 동일 적용 */
@media (min-width: 960px) {
  .table-container .table-row.table-header .v-col {
    display: flex !important;
  }
}

/* 모바일에서 호텔 정보 표(first column) 너비 조정 */
@media (max-width: 959px) {
  .info-label {
    flex: 0 0 40% !important;
    max-width: 40% !important;
  }
  .info-value {
    flex: 0 0 60% !important;
    max-width: 60% !important;
  }
  /* 버튼 폰트 크기 20% 축소 */
  .hotel-info-table .v-btn {
    font-size: 0.7rem !important; /* 30% 축소 */
  }
}
</style>
