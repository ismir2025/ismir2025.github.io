<template>
  <v-row justify="center" id="call-for-papers">
    <v-col cols="12" md="8">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-text class="text-body">
          The New-to-ISMIR Paper Mentoring Program supports individuals new to
          the ISMIR conference -whether early-stage MIR researchers or scholars
          from allied fields interested in submitting to ISMIR- by offering
          focused reviews and constructive feedback on advanced-stage ISMIR
          paper drafts. The mentees will share their draft with senior members
          of the ISMIR community (mentors) to refine their work before
          submission to ISMIR 2025. Following the success of the 2022-2024
          editions, the 2025 edition is being organized closely aligned with the
          ISMIR 2025 paper submission deadlines.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Important features of the Program</v-card-title
        >
        <ul class="dot-list">
          <li>
            The mentorship program encourages early stage researchers or
            researchers from other allied fields who wish to submit their work
            to ISMIR conference to share their advanced stage work-in-progress
            ISMIR paper submissions with senior members of the ISMIR community
            to obtain focused reviews and constructive feedback. The topics of
            the paper are expected to be in alignment with the topics of ISMIR
            conferences.
          </li>
          <li>
            The mentees are expected to apply to the program with a tentative
            abstract and submit an advanced-stage draft of the paper by the
            published deadlines (see below Important Dates).
          </li>
          <li>
            A mentor will be assigned to each mentee paper in the program and
            will provide a detailed review and constructive feedback to improve
            the work and the paper quality for suitability in an ISMIR
            conference. The mentor will maintain confidentiality of the
            discussions and the unpublished work as agreed with the mentees. The
            mentor will be available for up to two cycles of review/feedback on
            the mentee paper revisions, and up to one discussion meeting (up to
            an hour).
          </li>
          <li>
            Mentee authors will receive one cycle of review, where they submit
            their draft and mentors provide feedback. Additionally, mentees are
            encouraged to participate in a second cycle, where they revise their
            paper based on mentor suggestions and receive a follow-up review.
            Mentees are expected to provide additional information about their
            work to facilitate more comprehensive feedback from mentors.
          </li>
          <li>
            We strongly encourage participants to revise their drafts based on
            the mentors' feedback and submit them to ISMIR 2025. Please note
            that all submissions to ISMIR 2025, including those mentored through
            this program, will undergo the standard peer-review process without
            exception. Both mentors and mentees are required to clearly declare
            conflict of interests when the mentored papers are submitted to the
            ISMIR conference to facilitate double-blind review process.
          </li>
          <li>
            We will be able to support a limited number of papers for mentorship
            due to capacity constraints. If we receive more requests than we can
            support, we will prioritize papers considering authors' needs and/or
            topics that fall under the special call for papers.
          </li>
        </ul>
        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold" font-weight-bold
          >Eligibility</v-card-title
        >
        <v-card-title class="text-h6 mb-3"
          >The proposed authors of the papers submitted to the mentoring program
          must satisfy all the following criteria:
        </v-card-title>
        <ul class="dot-list">
          <li>
            The authors are planning for a submission to an ISMIR conference on
            a topic aligned with the ISMIR conference.
          </li>
          <li>
            The proposed first author of the paper has no previously published
            papers in ISMIR conferences.
          </li>
          <li>
            None of the proposed co-authors of the paper have ever been
            meta-reviewers for ISMIR conferences.
          </li>
        </ul>

        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card outlined elevation="0" class="pa-4 my-4">
          <v-card-title class="text-h4 mb-3 font-weight-bold"
            >Important Dates</v-card-title
          >
          <v-card-text class="text-body">
            Time zone : Anywhere On Earth (AOE)
          </v-card-text>

          <v-container class="table-container">
            <v-row class="table-row styled-row">
              <v-col cols="7" sm="4"
                >Deadline for applying to mentorship program with a tentative
                abstract and topics of the paper</v-col
              >
              <v-col cols="5" sm="8"><s>Jan 13, 2025</s> Feb 14, 2025</v-col>
            </v-row>
            <v-row class="table-row styled-row">
              <v-col cols="7" sm="4"
                >Deadline for accepted mentees to submit their paper to the
                program</v-col
              >
              <v-col cols="5" sm="8">Feb 28, 2025</v-col>
            </v-row>
            <v-row class="table-row styled-row">
              <v-col cols="7" sm="4"
                >Mentors and mentees are matched and introduced to each
                other</v-col
              >
              <v-col cols="5" sm="8">Mar 3, 2025</v-col>
            </v-row>
            <v-row class="table-row styled-row">
              <v-col cols="7" sm="4"
                >Deadline for mentors to provide their feedback</v-col
              >
              <v-col cols="5" sm="8">Mar 14, 2025</v-col>
            </v-row>
            <v-row class="table-row styled-row">
              <v-col cols="7" sm="4"
                >(Optional) Further discussions/review iterations</v-col
              >
              <v-col cols="5" sm="8">Mar 15-20, 2025</v-col>
            </v-row>
            <v-row class="table-row styled-row">
              <v-col cols="7" sm="4"
                >ISMIR 2025 abstract submission deadline</v-col
              >
              <v-col cols="5" sm="8">Mar 21, 2025</v-col>
            </v-row>
            <v-row class="table-row styled-row">
              <v-col cols="7" sm="4"
                >ISMIR 2025 paper submission deadline</v-col
              >
              <v-col cols="5" sm="8">Mar 28, 2025</v-col>
            </v-row>
          </v-container>

          <br />
        </v-card>
        <!--
        <v-card-title class="text-h4 mb-3"
          >Topics</v-card-title
        >
        <v-card-title class="text-h6 mb-3"
          >The topics of papers to be submitted to the program should be closely
          aligned with those of ISMIR 2025, including but not limited to the
          following topics:
        </v-card-title>
        <ul class="dot-list">
          <li>
            MIR fundamentals and methodology: music signal processing; symbolic
            music processing; metadata, tags, linked data, and semantic web;
            lyrics and other textual data; web mining, and natural language
            processing; multimodality.
          </li>
          <li>
            Domain knowledge: representations of music; music acoustics;
            computational music theory and musicology; cognitive MIR; machine
            learning/artificial intelligence for music; computational
            ethnomusicology.
          </li>
          <li>
            Musical features and properties: melody and motives; harmony, chords
            and tonality; rhythm, beat, tempo; structure, segmentation, and
            form; representations of music; timbre, instrumentation, and singing
            voice; musical style and genre; musical affect, emotion and mood;
            expression and performative aspects of music.
          </li>
          <li>
            MIR tasks: sound source separation; music transcription and
            annotation; music generation; optical music recognition; alignment,
            synchronization, and score following; music summarization; music
            synthesis and transformation; fingerprinting; automatic
            classification; indexing and querying; pattern matching and
            detection; similarity metrics.
          </li>
          <li>
            Evaluation, datasets, and reproducibility: evaluation methodology;
            evaluation metrics; novel datasets and use cases; annotation
            protocols; reproducibility; MIR tasks.
          </li>
          <li>
            Philosophical and ethical discussions: philosophical and
            methodological foundations; legal and societal aspects of MIR;
            ethical issues related to designing and implementing MIR tools and
            technologies.
          </li>
          <li>
            Human-centered MIR: user behavior analysis and mining, user
            modeling; human-computer interaction; music interfaces and services;
            personalization; user-centered evaluation.
          </li>
          <li>
            Applications: digital libraries and archives; music retrieval
            systems; music recommendation and playlist generation; music and
            health, well-being and therapy; music training and education; music
            composition, performance, and production; music videos, multimodal
            music systems; gaming, augmented/virtual reality; music heritage and
            sustainability; business and marketing.
          </li>
        </ul>
        <br />
        -->
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Submission Guidelines</v-card-title
        >
        <v-card-text class="text-body">
          Applications to the program must include a tentative title, author
          list and an abstract (200 words).
          <br /><br />
          The papers submitted to the program should be an advanced-stage draft
          of the paper. To get maximum benefit out of the mentoring program,
          please ensure the work is as complete as possible and avoid incomplete
          submissions lacking sufficient detail. The papers should strictly
          follow ISMIR conference submission guidelines, outlined in the ISMIR
          2025 Call for Papers:
          <a
            href="https://ismir2025.ismir.net/cfp/"
            target="_blank"
            style="color: #1487c8"
          >
            https://ismir2025.ismir.net/cfp/
          </a>

          Only exception would be that the papers should NOT be anonymized
          during the mentoring process since the paper mentoring program is not
          anonymous. Papers should be uploaded to a designated channel, the
          details of which will be provided. Submitted papers will be shared
          with the assigned mentor for review. Submissions that deviate from the
          guidelines will not be accepted for mentorship.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >How do I apply?</v-card-title
        >
        <v-card-text class="text-body">
          If you are interested in the program and eligible for it, please apply
          using this form:
          <a
            href="https://forms.gle/nHr1ppmKLU1S5L4o9"
            target="_blank"
            style="color: #1487c8"
          >
            https://forms.gle/nHr1ppmKLU1S5L4o9
          </a>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br /><br />
        <v-card-title class="text-h4 mb-3 font-weight-bold">FAQ</v-card-title>
        <v-card-text class="text-body">
          <span class="highlight-text"
            >Q. How many papers are supported in the program in 2025? Is there a
            chance that my application for mentorship might not be
            accommodated?</span
          >
          <br />
          A. The number of papers we support is limited by our current
          organisational capacity and availability of mentors. It may be
          possible that not all applications are accommodated if we receive a
          large number of requests. However, authors will know regarding
          acceptance of their applications before submitting papers to the
          program.
          <br /><br />
          <span class="highlight-text"
            >Q. Who will be my mentor if I apply to the program?</span
          >
          <br />
          A. Invited senior members from the MIR community have been kind enough
          to volunteer for the program. The mentors and mentees will be matched
          based on the topic of papers as chosen during submission and
          introduced to each other.
          <br /><br />
          <span class="highlight-text"
            >Q. If I incorporate all feedback from the mentor into my paper,
            will my paper be accepted for publication in the ISMIR conference?
            Is there a different review process for the mentored papers?</span
          >
          <br />
          A. All mentored papers will go through the same review process as all
          other papers submitted to an ISMIR conference. There is no assurance
          that a mentored paper will be accepted to the conference.
          <br />
        </v-card-text>
        <br />
        <v-divider></v-divider>
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-text class="text-body">
          For additional information, you can reach the DEI chairs via
          <a href="mailto:ismir2025-diversity@ismir.net" style="color: #1487c8">
            ismir2025-diversity@ismir.net
          </a>
        </v-card-text>
        <v-card-title class="text-h6 mb-3">
          Kyung Myun Lee and Taegyun Kwon
          <br />
          DEI Chairs of ISMIR 2025
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
