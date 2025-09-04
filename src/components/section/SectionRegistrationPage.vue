<template>
  <v-row justify="center" id="call-for-papers">
    <v-col cols="12" md="8">
      <!-- 안내 문구 영역 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Registration
        </v-card-title>
        <v-card-text class="text-body">
          Please be aware that by registering, you agree to abide by the
          <router-link
            to="/code-of-conduct"
            style="color: #1487c8; text-decoration: underline"
            >ISMIR 2025 Code of Conduct</router-link
          >. ISMIR 2025 will be a hybrid conference allowing all registrants to
          choose to attend the event virtually or in-person in Daejeon, Korea.
          We encourage participants to register for the conference early,
          especially if you plan to attend ISMIR 2025 in-person to allow
          sufficient time to obtain a visa and make appropriate travel plans as
          needed.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- 등록비 영역 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <!-- Registration Fee 타이틀 -->
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Registration Fee
        </v-card-title>

        <v-card-text class="text-body">
          <!-- Basic Registration 서브타이틀 추가 -->
          <div
            class="text-h5 mb-2 font-weight-bold pa-0"
            style="color: #004191"
          >
            Basic Registration
          </div>

          <!-- v-container + v-row + v-col 로 구성한 테이블 -->
          <!-- fluid를 사용하면 컨테이너 폭 제한이 없어져 상위 v-col 너비를 전부 채울 수 있습니다. -->
          <v-container class="table-container" fluid>
            <!-- 테이블 헤더 (4개 열) -->
            <v-row class="table-row styled-row table-header">
              <v-col cols="3" class="text-center"> </v-col>
              <v-col cols="3" class="text-center">
                Early Registration<br />
                <span class="date-text">~ Aug 4, 2025</span>
              </v-col>
              <v-col cols="3" class="text-center">
                Regular Registration<br />
                <span class="date-text">Aug 5 ~ Sep 10, 2025</span>
              </v-col>
              <v-col cols="3" class="text-center">
                On-site Registration<br />
                <span class="date-text">Sep 21 ~ Sep 25, 2025</span>
              </v-col>
            </v-row>

            <!-- In-person (General) -->
            <v-row class="table-row styled-row">
              <v-col cols="3"> In-person (General) </v-col>
              <v-col cols="3"> USD 500 </v-col>
              <v-col cols="3"> USD 600 </v-col>
              <v-col cols="3"> USD 700 </v-col>
            </v-row>

            <!-- In-person (Student) -->
            <v-row class="table-row styled-row">
              <v-col cols="3"> In-person (Student) </v-col>
              <v-col cols="3"> USD 250 </v-col>
              <v-col cols="3"> USD 300 </v-col>
              <v-col cols="3"> USD 350 </v-col>
            </v-row>

            <!-- Online (General) - colspan 대신 cols="9"로 3칸 합침 -->
            <v-row class="table-row styled-row">
              <v-col cols="3"> Online (General) </v-col>
              <v-col cols="9" class="text-center"> USD 100 </v-col>
            </v-row>

            <!-- Online (Student) - 마찬가지로 3칸 합쳐서 표현 -->
            <v-row class="table-row styled-row">
              <v-col cols="3"> Online (Student) </v-col>
              <v-col cols="9" class="text-center"> USD 50 </v-col>
            </v-row>

            <!-- 1day Pass -->
            <v-row class="table-row styled-row">
              <v-col cols="3"> 1day Pass </v-col>
              <v-col cols="3"> USD 150 </v-col>
              <v-col cols="3"> USD 200 </v-col>
              <v-col cols="3"> USD 250 </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <!-- 추가 안내사항 -->
        <ul class="dot-list">
          <li>
            In-person registration (General & Student) includes access to the
            Welcome Reception, Conference Dinner, and Lunch.
          </li>
          <li>
            Online registration does not grant access to any on-site activities.
          </li>
          <li>One-day Pass does not include the Conference Dinner ticket.</li>
          <li>The online registration includes online tutorial sessions.</li>
        </ul>

        <v-card-text class="text-body">
          <!-- Optional Registration 서브타이틀 추가 -->
          <div
            class="text-h5 mb-2 font-weight-bold pa-0 mt-6"
            style="color: #004191"
          >
            Optional Registration
          </div>

          <v-container class="table-container" fluid>
            <!-- 테이블 헤더 -->
            <v-row class="table-row styled-row table-header">
              <v-col cols="3" class="text-center"> </v-col>
              <v-col cols="3" class="text-center">
                Early Registration<br />
                <span class="date-text">~ Aug 4, 2025</span>
              </v-col>
              <v-col cols="3" class="text-center">
                Regular Registration<br />
                <span class="date-text">Aug 5 ~ Sep 10, 2025</span>
              </v-col>
              <v-col cols="3" class="text-center">
                On-site Registration<br />
                <span class="date-text">Sep 21 ~ Sep 25, 2025</span>
              </v-col>
            </v-row>

            <!-- General Tutorial -->
            <v-row class="table-row styled-row">
              <v-col cols="3">General Tutorial</v-col>
              <v-col cols="3">USD 80</v-col>
              <v-col cols="3">USD 100</v-col>
              <v-col cols="3">USD 120</v-col>
            </v-row>

            <!-- Student Tutorial -->
            <v-row class="table-row styled-row">
              <v-col cols="3">Student Tutorial</v-col>
              <v-col cols="3">USD 40</v-col>
              <v-col cols="3">USD 50</v-col>
              <v-col cols="3">USD 80</v-col>
            </v-row>

            <!-- Add W/R -->
            <v-row class="table-row styled-row">
              <v-col cols="3"> Additional Welcome Reception</v-col>
              <v-col cols="9" class="text-center"> USD 50 </v-col>
            </v-row>

            <!-- Add Dinner -->
            <v-row class="table-row styled-row">
              <v-col cols="3"> Additional Dinner </v-col>
              <v-col cols="9" class="text-center"> USD 100 </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <!-- 버튼 추가 -->
        <v-card-text class="text-center mt-4">
          <!-- 공지사항 추가 -->
          <!-- 
          <div class="registration-notice mb-4">
            <v-alert
              type="warning"
              border="left"
              colored-border
              elevation="2"
              class="text-left"
              style="background-color: #ed5e60; color: white"
            >
              <div class="text-h6 mb-2">Important Notice</div>
              <p>
                This is a temporary link for payment system setup purposes only.
              </p>
              <p>
                The actual registration system will be available soon. We will
                announce the official registration opening date.
              </p>
            </v-alert>
          </div>
          -->
          <!-- href 속성을 통해 외부 링크로 이동 -->
          <v-btn
            large
            rounded
            href="http://ismir2025.sigongji.com/"
            target="_blank"
            style="
              background-color: #002e6d;
              color: #fff;
              width: 100%;
              font-weight: bold;
              font-size: 18px;
            "
            class="px-10"
          >
            Go to Registration
          </v-btn>
          <div class="mt-2" style="font-size: 16px"></div>
        </v-card-text>

        <br />
        <br />
        <v-divider></v-divider>
      </v-card>

      <!-- Refund Policy 영역 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Refund Policy
        </v-card-title>
        <ul class="dot-list">
          <li>
            <span class="highlight-text"
              >Until the Early Registration Deadline</span
            >
            (Aug 4, 2025)
            <ul style="list-style-type: none; margin-left: 1em">
              <li>
                - For credit card payments: full refund upon cancellation
                (transaction will be voided).
              </li>
              <li>
                - For bank transfers: refund will be issued after deducting bank
                fees (bank transfer fees to be covered by the applicant).
              </li>
            </ul>
          </li>

          <li>
            <span class="highlight-text"
              >After the Early Registration Deadline</span
            >
            <ul style="list-style-type: none; margin-left: 1em">
              <li>- In principle, no refunds will be issued.</li>
              <li>
                - In unavoidable circumstances, a refund request may be
                submitted and will be reviewed by the Organizing Committee for a
                final decision.
              </li>
            </ul>
          </li>
        </ul>
        <v-card-text class="text-body">
          Please carefully review the refund policy before completing your
          registration.
        </v-card-text>
        <br />
        <v-divider></v-divider>
      </v-card>

      <!-- Registration Inquiries 영역 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Registration Inquiries
        </v-card-title>
        <v-card-text class="text-body">
          For any questions regarding registration, please contact the ISMIR2025
          Secretariat:
        </v-card-text>
        <ul class="dot-list">
          <li>
            <span class="highlight-text">Contact Point: </span>
            ISMIR2025 Secretariat
          </li>
          <li>
            <span class="highlight-text">Phone: </span>
            +82-42-489-7070
          </li>
          <li>
            <span class="highlight-text">Email: </span>
            <a
              href="mailto:ismir.korea@themiceter.com"
              style="color: #1487c8; text-decoration: underline"
            >
              ismir.korea@themiceter.com
            </a>
          </li>
        </ul>
        <br />
      </v-card>
      <br /><br /><br />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
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
  font-size: 16px !important; /* 헤더 폰트 크기 조절 */
}
.date-text {
  font-size: 12px;
  color: #666;
  font-weight: normal;
}
.highlight-text {
  color: #004191;
  font-weight: bold;
}

/* 테이블 컨테이너: max-width 제거 혹은 width: 100% 적용 */
.table-container {
  /* max-width: 1000px;  ← 제거 */
  width: 100%; /* <v-col> 너비를 전부 사용 */
  margin: 0; /* 가운데 정렬을 원하지 않을 경우 0 처리 */
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
  .date-text {
    font-size: 10px; /* 모바일에서 날짜 텍스트 크기 조절 */
  }
  .table-container {
    padding: 0 8px; /* 컨테이너의 좌우 패딩도 줄이기 */
  }
}

/* 알림창 스타일 추가 */
:deep(.v-alert) {
  background-color: #ed5e60 !important;
  color: white !important;
}

:deep(.v-alert__border) {
  border-color: #ed5e60 !important;
}
</style>
