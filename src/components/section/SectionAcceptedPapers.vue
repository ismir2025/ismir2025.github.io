<template>
  <v-row justify="center" id="accepted-papers">
    <v-col cols="12" md="10">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-text class="text-body mt-5">
          <v-container class="table-container" fluid>
            <!-- 헤더 행 -->
            <v-row class="table-row styled-row table-header">
              <v-col cols="6">Paper Title</v-col>
              <v-col cols="6">Authors</v-col>
            </v-row>

            <!-- 실제 데이터 행들 -->
            <v-row
              v-for="(paper, index) in papers"
              :key="index"
              class="table-row styled-row"
            >
              <v-col cols="6">{{ paper["Paper Title"] }}</v-col>
              <v-col cols="6">{{ formatAuthors(paper["Authors"]) }}</v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <br /><br />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import papersData from "../../../public/AcceptedPapersWithAffiliationsFixed.json";

export default {
  name: "SectionAcceptedPapers",
  data() {
    return {
      papers: papersData,
    };
  },
  methods: {
    formatAuthors(authorsString) {
      // 저자 문자열에서 소속 정보를 유지하고 저자(소속) 형태로 표시
      return authorsString
        .split(";")
        .map((author) => {
          // *표시만 제거하고 괄호 안의 소속 정보는 유지
          let cleaned = author.replace(/\*/g, "").trim();

          // 여러 공백을 하나로 정리
          cleaned = cleaned.replace(/\s+/g, " ").trim();

          return cleaned;
        })
        .filter((author) => author.length > 0) // 빈 문자열 제거
        .join(", ");
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

.styled-row {
  border-bottom: 1px solid #d3d3d3;
  padding: 12px 0;
  align-items: center;
}

.table-header {
  background-color: #f7f7f7;
  font-weight: 600;
}

.table-container {
  width: 100%;
  margin: 0;
}

.table-container .table-row .v-col {
  text-align: left;
  padding: 8px 16px;
  font-size: 16px;
}

.table-header .v-col {
  font-size: 18px;
}

.highlight-text {
  color: #004191;
  font-weight: bold;
}

.notice-section {
  font-size: 24px;
  line-height: 1.6;
  padding: 0;
  margin-bottom: 0;
  font-weight: 500;
}
</style>
