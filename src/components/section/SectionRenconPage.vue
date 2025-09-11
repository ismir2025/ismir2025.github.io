<template>
  <v-row justify="center" id="call-for-papers">
    <v-col cols="12" md="8">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >RenCon 2025: Expressive Piano Performance Rendering
          Contest</v-card-title
        >

        <v-card-text class="text-body">
          <span class="highlight-text"
            >An international challenge where researchers and developers submit
            systems capable of rendering expressive musical performances from
            symbolic scores</span
          ><br /><br />

          RenCon 2025 is an international challenge where researchers and
          developers submit systems capable of rendering expressive musical
          performances from symbolic scores. This year's competition focuses
          specifically on solo piano performance and is hosted alongside ISMIR
          2025 under the MIREX Tasks protocol.<br /><br />

          <span class="highlight-text">Competition Structure</span><br /><br />
          The contest consists of two phases:<br /><br />

          <span class="highlight-bold-text"
            >Phase 1 ? Preliminary Round (Online):</span
          >
          Participants submit performances of assigned and free-choice pieces
          from May 30 to August 25, 2025, including symbolic (MIDI) or audio
          (WAV) renderings and a technical report.<br /><br />

          <span class="highlight-bold-text"
            >Phase 2 ? Live Contest at ISMIR:</span
          >
          Top systems from the preliminary round will be invited to render a
          surprise piece live at ISMIR, using their system in real time. The
          live contest is open to all ISMIR attendees, as well as general public
          if the venue allows. The audience will be able to listen to the live
          performances and vote for their favorite system.<br /><br />

          <span class="highlight-text">Historical Context</span><br /><br />
          The RenCon competition has a rich history, having been held in 2002,
          2003, 2004, 2005, 2008, 2011 and 2013, jointly with conferences like
          SMC, NIME, ICMPC and IJCAI. RenCon 2025 revives this tradition with
          renewed focus on expressive performance rendering.<br /><br />

          <span class="highlight-text">Links and Contacts</span><br /><br />

          <span class="highlight-bold-text">Task Captain:</span> Huan Zhang,
          <a href="mailto:huan.zhang@qmul.ac.uk" style="color: #1487c8"
            >huan.zhang@qmul.ac.uk</a
          ><br /><br />

          <span class="highlight-bold-text">Official Website:</span>
          <a
            href="https://ren-con2025.vercel.app/"
            target="_blank"
            style="color: #1487c8"
          >
            https://ren-con2025.vercel.app/ </a
          ><br /><br />

          <span class="highlight-bold-text">Online Audition Page:</span>
          <a
            href="https://ren-con2025-audition-page.vercel.app/"
            target="_blank"
            style="color: #1487c8"
          >
            https://ren-con2025-audition-page.vercel.app/
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
