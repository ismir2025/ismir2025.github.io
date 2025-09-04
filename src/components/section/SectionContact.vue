<template>
  <v-row justify="center" id="call-for-papers">
    <v-col cols="12" md="8">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="headline">General inquiries</v-card-title>
        <v-card-text class="text-body">
          <span>ismir2025@ismir.net</span>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="copyEmail">Copy Email</v-btn>
        </v-card-actions>
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { useClipboard } from '@vueuse/core';

const { copy } = useClipboard();

const email = 'ismir2025@ismir.net';

function copyEmail() {
  copy(email).then(() => {
    alert('Email address copied to clipboard!');
  });
}
</script>

<style scoped>
.headline {
  font-size: 20px;
  font-weight: bold;
}
.text-body {
  font-size: 18px;
  line-height: 1.8;
}
</style>
