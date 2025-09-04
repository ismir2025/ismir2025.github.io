<template>
  <v-row justify="center" id="call-for-papers">
    <v-col cols="12" md="8">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >3rd Workshop on Human-Centric Music Information Research
          (HCMIR25)</v-card-title
        >
        <v-card-title class="text-h5 mb-3"
          >September 20th (Saturday) at KAIST, Daejeon</v-card-title
        >

        <v-card-text class="text-body">
          <span class="highlight-bold-text"
            >More info on the workshop webpage:
          </span>

          <a
            href="https://sites.google.com/view/hcmir25/home"
            target="_blank"
            style="color: #1487c8"
          >
            https://sites.google.com/view/hcmir25/home
          </a>
          <br /><br />
          <span class="highlight-text"
            >A half-day workshop bringing together researchers, practitioners,
            and artists to explore the ethical, societal, and human-centred
            dimensions of MIR</span
          ><br /><br />
          Music and technology have long intertwined, transforming how we
          create, share, and experience music. From composition to listening,
          advancements in Music Information Research (MIR) continue to reshape
          our relationship with music, enabling new forms of creativity and
          accessibility. However, alongside these innovations, critical
          questions arise about their broader implications.<br /><br />
          The 3rd edition of the HCMIR workshop seeks to explore MIR's ethical,
          societal, and human-centred dimensions. How can we ensure MIR systems
          are inclusive, ethical, and aligned with human values? How do people
          perceive and engage with AI-driven music technologies? What role are
          artists playing in shaping these tools? How can design principles
          prioritize accessibility and usability while supporting human-AI
          collaboration in music creation and discovery?<br /><br />
          This workshop invites researchers, practitioners, and artists to
          engage in a multidisciplinary discussion on the societal impact, human
          experience, and future directions of MIR. By addressing these topics,
          we aim to foster a deeper understanding of how MIR systems can empower
          individuals, support creativity, and enhance the human experience of
          music. <br /><br />

          We invite the research community to submit short papers on the
          following relevant topics, but not limited to: <br /><br />
          <ul class="dot-list">
            <li>Ethics and Societal Impact of MIR</li>
            <li>Perception and Evaluation in MIR</li>
            <li>Human-AI Collaboration in MIR</li>
            <li>User Experience (UX) and Interface (UI) Design in MIR</li>
            <li>Interdisciplinary Perspectives on Human-Centric MIR</li>
            <li>Future Directions in Human-Centric MIR</li>
          </ul>
          <br />

          <span class="highlight-text">Important dates</span>

          <br /><br />
          <ul class="dot-list">
            <li>Open submission: June 2nd, 2025</li>
            <li>Paper submission deadline: June 18th, 2025</li>
            <li>Author notification: July 21st, 2025</li>
            <li>Camera-ready version: September 1st, 2025</li>
          </ul>
          <br />
          All deadlines are Anywhere on Earth (UTC -12)
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
  font-family: "Courier New", Courier, monospace; /* 모노스페이스 폰트 */
  font-size: 14px; /* 적당한 크기의 텍스트 */
  overflow-x: auto; /* 긴 코드에 스크롤 추가 */
  white-space: pre-wrap; /* 코드 줄 바꿈 */
}
.highlight-text {
  color: #004191;
  font-weight: bold;
}
.highlight-bold-text {
  color: #000000;
  font-weight: bold;
}
</style>
