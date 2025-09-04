<template>
  <v-app>
    <!-- AppbarPage 컴포넌트 사용 -->
    <AppbarPage />
    <v-main>
      <router-view />
    </v-main>
    <!-- Footer 컴포넌트 추가 -->
    <FooterPage />
  </v-app>
</template>

<script>
import FooterPage from "@/components/FooterPage.vue"; // Footer 컴포넌트 경로에 맞게 수정하세요
import AppbarPage from "@/components/AppbarPage.vue"; // AppbarPage 컴포넌트 경로에 맞게 수정하세요

export default {
  name: "App",

  components: {
    FooterPage,
    AppbarPage, // AppbarPage를 컴포넌트로 등록
  },

  data() {
    return {
      darkTheme: false,
    };
  },

  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
    },
  },
};
</script>

<style>
/* 전역 스타일 - 모든 요소에 Noto Sans 폰트 적용 */
* {
  font-family: "Noto Sans", sans-serif !important;
}

body {
  font-family: "Noto Sans", sans-serif !important;
}

.v-application {
  font-family: "Noto Sans", sans-serif !important;
}

/* Vuetify 컴포넌트들에도 폰트 적용 */
.v-btn,
.v-card,
.v-list,
.v-navigation-drawer,
.v-toolbar,
.v-footer {
  font-family: "Noto Sans", sans-serif !important;
}

/* 텍스트 요소들 */
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
div,
a,
button,
input,
textarea,
select {
  font-family: "Noto Sans", sans-serif !important;
}
</style>
