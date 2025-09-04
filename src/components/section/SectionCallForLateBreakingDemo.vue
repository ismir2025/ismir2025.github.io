<template>
  <v-row justify="center" id="call-for-papers">
    <v-col cols="12" md="8">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Overview</v-card-title
        >
        <v-card-text class="text-body">
          The ISMIR LBD session is a forum for sharing prototype systems,
          initial concepts, and early results which have not yet fully matured
          but are of interest to the Music Information Retrieval (MIR)
          community. It also serves as an excellent opportunity for newcomers to
          ISMIR to showcase their preliminary work and engage with seasoned
          researchers through valuable feedback.
          <br /><br />
          Participants should submit extended abstracts in accordance with the
          submission guidelines (see below). At least one author must be
          available to present the accepted abstract as a poster during the LBD
          session,
          <span class="highlight-text">which is done in-person only</span>.
          Registration for the presenter is mandatory.
          <span class="highlight-text"
            >Note that the LBD abstract is not a conference paper and will not
            be included in the official ISMIR 2025 proceedings.</span
          >
          <br /><br />

          The LBD session has a maximum capacity of 75 posters.
          <span class="highlight-text"
            >Submissions will be reviewed on a first-come, first-served basis.
            Thus, submission will close by the dates mentioned below or by
            reaching full capacity, whichever comes first.</span
          >
          If the number of accepted submissions reaches the maximum capacity of
          75 before the submission deadline, we will announce it on this page.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Important Dates</v-card-title
        >
        <v-card-text class="text-body">
          Time zone : Anywhere On Earth (AOE)
        </v-card-text>

        <v-container class="table-container">
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4">Submission Open</v-col>
            <v-col cols="5" sm="8">June 16, 2025</v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4">Submission Deadline</v-col>
            <v-col cols="5" sm="8">August 7, 2025</v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4"
              >Camera-Ready and Final Video/Poster Upload Deadline</v-col
            >
            <v-col cols="5" sm="8">August 28, 2025</v-col>
          </v-row>
        </v-container>

        <v-card-text class="text-body">
          <span class="highlight-text"
            >The acceptance notification will, in principle, be sent out within
            two weeks after submission</span
          >.
        </v-card-text>
        <br />
        <v-divider></v-divider>
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Submission Guidelines</v-card-title
        >
        <v-card-text class="text-body">
          All submissions must comply with the following requirements:
          <ul class="dot-list">
            <li>
              Length (2+1): two pages (maximum) of content plus one optional
              page for bibliography only. Acknowledgements can be included in
              the optional pages.
            </li>
            <li>
              Templates: make sure to use the latest templates for LBD (<a
                href="https://github.com/ismir/paper_templates/tree/master/2025"
                target="_blank"
                style="color: #1487c8"
                >available for Latex and Word</a
              >). Submissions must be in PDF format.
            </li>
            <li>Submissions should not be anonymised.</li>
            <li>
              Submission system: please submit the paper through
              <a
                href="https://cmt3.research.microsoft.com/ISMIR2025/"
                target="_blank"
                style="color: #1487c8"
                >CMT</a
              >
              (Author console -> Create new submission -> Late-Breaking/Demo).
            </li>
            <li>
              Supplementary material (optional): authors are encouraged to
              submit a demo video that facilitates the screening process (5
              minutes or less, mp4, h264 codec, 100MB or less, with closed
              captions).
            </li>
            <li>
              Papers are received on a rolling basis, but
              <span class="highlight-text"
                >resubmission of rejected papers is not allowed.</span
              >
            </li>
          </ul>
          <br />
          All submissions will be screened for the following criteria:
          <ul class="dot-list">
            <li>Suitability for ISMIR</li>
            <li>Originality</li>
            <li>Formatting</li>
          </ul>
        </v-card-text>
        <br />
        <v-divider></v-divider>
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Camera-Ready and Final Video/Poster Upload</v-card-title
        >
        <v-card-text class="text-body">
          <ul class="dot-list">
            <li>
              Submission: as the acceptance notifications are also issued on a
              rolling basis, once a paper is accepted, the camera-ready version
              can be submitted at any time before August 28, without waiting for
              the submission deadline.
            </li>
            <li>
              Poster (required): no larger than A0 or 36 x 48 inch (portrait
              orientation).
            </li>
            <li>
              Thumbnail image (required): PNG, 1920px x 1080px or less, 1MB or
              less.
            </li>
            <li>
              Video (optional): under 5 minutes is recommended (do not exceed
              10 minutes), mp4, h264 codec, 350MB or less, with closed
              captions.
            </li>
          </ul>
        </v-card-text>
        <br />
        <v-divider></v-divider>
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Presentation</v-card-title
        >
        <v-card-text class="text-body">
          As mentioned at the beginning,
          <span class="highlight-text"
            >please be reminded that this year's LBD will be in-person
            only.</span
          >
          Further details regarding the presentation will be announced on this
          page.
        </v-card-text>
        <br />
        <v-divider></v-divider>
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-text class="text-body">
          For additional information, you can reach the session chairs via email
          at
          <a
            href="mailto:ismir2025-lbd@ismir.net"
            style="color: #1487c8; text-decoration: underline"
          >
            ismir2025-lbd@ismir.net
          </a>
        </v-card-text>
        <v-card-title class="text-h6 mb-3">
          Amy Hung and Kosetsu Tsukuda
          <br />
          ISMIR 2025 Late Breaking Demo 
          <br />
          Session Chairs
        </v-card-title>
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
      expandedPanels: [], // 현재 확장된 패널을 관리하는 배열
      sections: [
        {
          items: [
            { content: "Abstract Submission Due", date: "March 21, 2025" },
            { content: "Full Paper Submission Due", date: "March 28, 2025" },
            { content: "Acceptance Notification", date: "June 6, 2025" },
            { content: "Camera-Ready Upload Due", date: "June 28, 2025" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.dot-list {
  list-style-type: disc; /* 글머리 기호 스타일 설정 */
  font-size: 18px;
  padding-left: 40px; /* 들여쓰기 값 조정 */
  line-height: 1.8;
}
.text-body {
  font-size: 18px; /* 텍스트 폰트 크기 조정 */
  line-height: 1.6; /* 가독성을 위한 줄 간격 조정 */
  white-space: normal; /* 줄바꿈을 허용 */
  overflow-wrap: break-word; /* 단어가 줄을 넘지 않도록 단어 단위로 줄바꿈 */
}
.v-card-title {
  white-space: normal; /* 제목에서 줄바꿈을 허용 */
  overflow-wrap: break-word; /* 단어가 잘리지 않도록 줄바꿈 */
}
.styled-row {
  border-bottom: 1px solid #d3d3d3; /* 회색 줄 */
  padding-bottom: 8px; /* 줄과 내용 간 여백 */
}
/* Notion 스타일의 코드 블록 */
.code-block {
  background-color: #f5f5f5; /* 연한 회색 배경 */
  border: 1px solid #e0e0e0; /* 연한 테두리 */
  border-radius: 4px; /* 모서리를 둥글게 */
  padding: 12px; /* 내부 여백 */
  font-family: "Noto Sans", sans-serif; /* Noto Sans 폰트 */
  font-size: 14px; /* 적당한 크기의 텍스트 */
  overflow-x: auto; /* 긴 코드에 스크롤 추가 */
  white-space: pre-wrap; /* 코드 줄 바꿈 */
}
.highlight-text {
  color: #004191;
  font-weight: bold;
}
</style>
