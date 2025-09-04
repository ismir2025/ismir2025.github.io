<template>
  <v-row justify="center" id="newcomer-squad">
    <v-col cols="12" md="8">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h3 mb-4 font-weight-bold text-center">
          🎵 Join the ISMIR2025 Newcomer Squad
          <br />
          – Connect, Learn & Enjoy! 🎵
        </v-card-title>
        <v-card-text class="text-body text-center mb-4">
          Is this your first ISMIR and you're not sure how to make the most of
          it?<br />
          Or are you a seasoned attendee who'd love to give back and welcome
          newcomers?<br />
          Either way, the Newcomer Squad at ISMIR2025 (South Korea!) is for you!
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >What's the Newcomer Squad?</v-card-title
        >
        <v-card-text class="text-body">
          It's a small, friendly group that pairs first-time attendees with
          experienced ISMIR folks.<br /><br />
          <strong>Newcomers</strong> get guidance, tips, and new friends.<br />
          <strong>Leaders</strong> get to share their ISMIR journey and help
          others thrive.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >What's new in 2025?</v-card-title
        >
        <v-card-text class="text-body">
          <strong>Squads by research field</strong> → meet people working on
          similar topics.
        </v-card-text>

        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >If you're a Newcomer (first/second-time attendee):</v-card-title
        >
        <ul class="dot-list">
          <li>Get insider tips from your squad leader</li>
          <li>Build your MIR network from day one</li>
          <li>Learn how to navigate sessions, workshops, and events</li>
          <li>Join your squad's Slack channel for questions & ideas</li>
        </ul>

        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >If you're a Squad Leader (experienced attendee):</v-card-title
        >
        <ul class="dot-list">
          <li>Welcome newcomers with warmth and support</li>
          <li>Share your experience and pro tips</li>
          <li>Host one or more in-person meetups</li>
        </ul>

        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Requirements:</v-card-title
        >
        <v-card-text class="text-body">
          Attend most of ISMIR2025 in South Korea + at least 2 past ISMIRs in
          person
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Don't miss the Newcomer Onboarding Session!</v-card-title
        >
        <v-card-text class="text-body"> We'll cover: </v-card-text>
        <ul class="dot-list">
          <li>ISMIR 2025 program highlights</li>
          <li>Tips for making the most of the conference</li>
          <li>Meeting your squad members</li>
        </ul>

        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Ready to join? Sign up here:</v-card-title
        >
        <v-card-text class="text-body">
          <strong>Squad Leader:</strong>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSecSJ_4U66G2tvQkLqOJ-XcFiiczDWEAl2EdRx7S7Dk0B611Q/viewform"
            target="_blank"
            style="color: #1487c8; margin-left: 10px"
          >
            Sign up here
          </a>
          <br /><br />
          <strong>Newcomer Member:</strong>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfvOwtt84CvIcC6IY7uVTJ_sAiwPcZOjRDyEO3UpsnF62UISw/viewform"
            target="_blank"
            style="color: #1487c8; margin-left: 10px"
          >
            Sign up here
          </a>
        </v-card-text>
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
};
</script>

<style scoped>
.dot-list {
  list-style-type: disc; /* 글머리 기호 스타일 설정 */
  font-size: 18px;
  padding-left: 40px; /* 들여쓰기 값 조정 */
  line-height: 1.6;
}
.text-body {
  font-size: 18px; /* 텍스트 폰트 크기 조정 */
  line-height: 1.8; /* 가독성을 위한 줄 간격 조정 */
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
