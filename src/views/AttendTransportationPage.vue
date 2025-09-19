<template>
    <v-row no-gutters>
        <v-col cols="12">
            <SectionMenuCover />
    
            <!-- Transportation Menu -->
            <v-row justify="center" class="pa-4">
              <v-col cols="12" md="8">
                <v-card outlined elevation="0" class="pa-4 my-4">
                  <v-card-title class="text-h4 mb-3 font-weight-bold text-center">
                    Transportation Information
                  </v-card-title>
                  <v-card-text class="text-center">
                    <p class="text-h6 mb-4">
                      Choose the transportation information you need:
                    </p>
                    
                    <v-row class="mb-4">
                      <v-col cols="12" md="6" class="pa-2">
                        <v-card class="transport-option-card pa-4" elevation="2" @click="$router.push('/airport-to-daejeon')" style="cursor: pointer;">
                          <v-card-title class="text-h5 mb-3 text-center">
                            <v-icon left color="#004191" size="32">mdi-airplane</v-icon>
                            Airport to/from Daejeon
                          </v-card-title>
                          <v-card-text class="text-center">
                            <p class="mb-3">Complete guide for traveling between airports and Daejeon, including:</p>
                            <ul class="text-left">
                              <li>Route 1: Incheon Airport → Daejeon Government Complex</li>
                              <li>Route 2: Incheon Airport → Seoul → Daejeon</li>
                              <li>Route 3: Gimpo Airport → Seoul → Daejeon</li>
                              <li>Return routes and car rental information</li>
                            </ul>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      
                      <v-col cols="12" md="6" class="pa-2">
                        <v-card class="transport-option-card pa-4" elevation="2" @click="$router.push('/local-transportation')" style="cursor: pointer;">
                          <v-card-title class="text-h5 mb-3 text-center">
                            <v-icon left color="#004191" size="32">mdi-bus</v-icon>
                            Local Transportation in Daejeon
                          </v-card-title>
                          <v-card-text class="text-center">
                            <p class="mb-3">Everything you need to know about getting around Daejeon:</p>
                            <ul class="text-left">
                              <li>City buses and fare information</li>
                              <li>K.ride taxi service for foreigners</li>
                              <li>T-money mobile payment guide</li>
                              <li>Tashu bicycle sharing system</li>
                            </ul>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
    
        </v-col>
    </v-row>
        
    </template>
    
    <script setup>
    import SectionMenuCover from '../components/section/SectionMenuCover.vue';
    
    </script>
    
    <style scoped>
    .transport-option-card {
      border-radius: 12px !important;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }
    
    .transport-option-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 65, 145, 0.15) !important;
      border-color: #004191;
    }
    
    .transport-option-card ul {
      margin: 0;
      padding-left: 20px;
    }
    
    .transport-option-card li {
      margin-bottom: 4px;
    }
    </style>
        