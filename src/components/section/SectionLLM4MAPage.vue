<template>
  <v-row justify="center" id="call-for-papers">
    <v-col cols="12" md="8">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >1st Workshop on Large Language Models for Music & Audio</v-card-title
        >

        <v-card-title class="text-h5 mb-3"
          >September 26th (Friday) at KAIST, Daejeon, Korea</v-card-title
        >
        <v-card-text class="text-body">
          <span class="highlight-bold-text"
            >More info and submission entrance on the workshop webpage:
          </span>
          <a
            href="https://m-a-p.ai/LLM4Music/"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >https://m-a-p.ai/LLM4Music/</a
          >
          <br /><br />
          <span class="highlight-text"
            >LLM4MA: Large Language Models for Music & Audio is a dedicated
            workshop that explores the rapidly evolving intersection of large
            language models (LLMs) and music/audio understanding and
            generation.</span
          ><br /><br />
          As LLMs transform how machines process, compose, and interpret musical
          content across modalities—text, audio, image, and video—this workshop
          provides a crucial forum for discussing advances in tokenisation,
          long-context modelling, multimodal alignment, and controllability in
          music applications.<br /><br />
          It aims to foster early-stage research and community exchange on
          emerging methods, challenges, and ethical considerations in AI-driven
          music creation, especially for works not yet suited to main conference
          or demo tracks.<br /><br />

          We welcome contributions on topics including, but not limited to:<br /><br />
          <ul class="dot-list">
            <li>Tokenisation of Music</li>
            <li>Long Sequence Modelling of Music</li>
            <li>Instruction fine-tuning of Music</li>
            <li>Reinforcement Fine-Tuning of Music</li>
            <li>Artistic Creation & Music Evaluation</li>
            <li>Entertainment & Music Industry Applications</li>
            <li>Enhanced Musical Diversity with LLMs</li>
            <li>Scaling Laws and Emergent Abilities of Music LLMs</li>
            <li>Dataset Design & Generalizability of Music LLMs</li>
            <li>LLM Modality Extension</li>
            <li>(Pre-)training Paradigms with Music knowledge</li>
            <li>Inference and Prompt Engineering of Music LLMs</li>
            <li>In-Context Learning of Music LLMs</li>
            <li>Chain-of-Thought and Music Reasoning</li>
            <li>Autonomous Music Agents</li>
            <li>Deepfake detection on Music LLMs</li>
            <li>And other applications of LLMs for all kinds of MIR tasks</li>
          </ul>
          <br />

          <span class="highlight-text">Important dates</span>

          <br /><br />
          <ul class="dot-list">
            <li>Open submission: 6th June, 2025</li>
            <li>Paper submission deadline: 10th Aug, 2025</li>
            <li>Author notification: 31st Aug, 2025</li>
            <li>Camera-ready version: 14th September, 2025</li>
            <li>Satellite event date: 26th September, 2025</li>
          </ul>
          <br />
          <span class="highlight-text">Submission</span>
          <br /><br />
          <span>Please submit your paper through OpenReview: </span>
          <a
            href="https://openreview.net/group?id=ISMIR.net%2F2025%2FWorkshop%2FLLM4Music&referrer=%5BHomepage%5D%28%2F%29#tab-your-consoles"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >Submission Portal</a
          >
          <br /><br />
          <span class="highlight-text">Reviewer Invitation</span>
          <br /><br />
          <span
            >We are looking for reviewers for our workshop. If you are
            interested in reviewing papers for LLM4MA, please fill out the form:
          </span>
          <a
            href="https://forms.cloud.microsoft/e/N0qQg361bG"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >https://forms.cloud.microsoft/e/N0qQg361bG</a
          >
          <br /><br />
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
    return {
      expandedPanels: [], // 현재 확장된 패널을 관리하는 배열
      sections: [
        {
          items: [
            { content: "Open submission", date: "6th June, 2025" },
            { content: "Paper submission deadline", date: "10th Aug, 2025" },
            { content: "Author notification", date: "31st Aug, 2025" },
            { content: "Camera-ready version", date: "14th September, 2025" },
            { content: "Satellite event date", date: "26th September, 2025" },
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
.highlight-bold-text {
  color: #000000;
  font-weight: bold;
}
</style>
