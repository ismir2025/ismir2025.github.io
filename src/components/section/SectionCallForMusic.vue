<template>
  <v-row justify="center" id="call-for-music">
    <v-col cols="12" md="8">
      <!-- ===================== Overview ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          ISMIR 2025 Call for Music: Bridging MIR and Musical Creativity
        </v-card-title>
        <v-card-text class="text-body">
          <b>Submission Deadline</b>: June 30, 2025 (AOE)<br />
          <b>Submission Portal</b>:
          <a
            href="https://cmt3.research.microsoft.com/ISMIR2025/"
            target="_blank"
            style="color: #1487c8"
            >https://cmt3.research.microsoft.com/ISMIR2025/</a
          ><br /><br />
          Do you integrate MIR technology to create new soundscapes,
          experiences, or performance practices? Are you excited about
          demonstrating this technology to the ISMIR community in a
          'lecture-concert' format, where you briefly explain the approach
          followed by a musical performance?
          <br /><br />
          Join us for the music program!
          <br /><br />
          The ISMIR 2025 Organizing Committee invites submissions for the Music
          Program, to be held during the 26<sup>th</sup> International Society
          for Music Information Retrieval Conference in Daejeon, Korea.<br /><br />
          We particularly encourage submissions that showcase the
          <b
            >creative integration of Music Information Retrieval (MIR)
            technologies</b
          >
          directly into live musical performances or pre-recorded works. We seek
          pieces that move beyond technology demonstrations toward
          <i>compelling artistic experiences</i> where MIR is an integral part
          of musical creation or execution.
        </v-card-text>
      </v-card>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- ===================== Important Dates ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Important Dates
        </v-card-title>
        <v-card-text class="text-body"
          >Time zone : Anywhere On Earth (AOE)</v-card-text
        >
        <v-container class="table-container">
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4">Submission portal opening</v-col>
            <v-col cols="5" sm="8">May 18, 2025</v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4">Submission deadline</v-col>
            <v-col cols="5" sm="8">June 30, 2025 (Anywhere on Earth)</v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4">Notification of acceptance</v-col>
            <v-col cols="5" sm="8">July 14, 2025</v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4">Performance-ready upload due</v-col>
            <v-col cols="5" sm="8">September 12, 2025</v-col>
          </v-row>
          <v-row class="table-row styled-row">
            <v-col cols="7" sm="4"
              >Early-bird special for concert submissions</v-col
            >
            <v-col cols="5" sm="8">-</v-col>
          </v-row>
        </v-container>
        <v-card-text class="text-body mt-3">
          Please note that accepted submissions for the music program will be
          allowed to <b>register at the early bird rate</b>, even if early bird
          registration has closed.
        </v-card-text>
      </v-card>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- ===================== Theme ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">Theme</v-card-title>
        <v-card-text class="text-body">
          We are looking for performances that embody the concept of a
          <b>"Lecture-Concert"</b>. In particular, this year's theme will focus
          on proposals that incorporate the following aspects:
        </v-card-text>
        <ul class="dot-list">
          <li>
            <span class="highlight-text">MIR Integration is Central</span>: MIR
            technology must be core to the musical narrative, enabling new forms
            of expression, interaction, or composition/improvisation.
          </li>
          <li>
            <span class="highlight-text">Intelligible Technology</span>: Each
            performance includes a brief (≤ 2 minutes) spoken introduction that
            makes the MIR concept and its role intuitive to a diverse ISMIR
            audience.
          </li>
          <li>
            <span class="highlight-text">Music is Appreciable</span>: Artistic
            merit and musical impact remain paramount—the technology serves the
            creative vision, not vice-versa.
          </li>
        </ul>
        <v-card-text class="text-body mt-4">
          We welcome submissions across diverse musical genres and styles that
          creatively utilize MIR. Examples could include, but are not limited
          to:
        </v-card-text>
        <ul class="dot-list">
          <li>
            Real-time MIR analysis of live performers influencing sonic or
            visual output.
          </li>
          <li>Tools that create or explore novel timbres / sonic spaces.</li>
          <li>
            MIR-driven interactive systems responding to performers or
            audiences.
          </li>
          <li>
            Musical interfaces leveraging MIR techniques for performance
            control.
          </li>
          <li>Compositions generated or structured with MIR algorithms.</li>
          <li>
            Improvisational frameworks guided or enhanced by real-time MIR.
          </li>
          <li>Interfaces enabling remote collaborative performance.</li>
        </ul>
      </v-card>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- ===================== Performance Format ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Performance Format
        </v-card-title>
        <v-card-text class="text-body">
          The concert program will be held in a <b>hybrid format</b> consisting
          of live performance for the on-site attendees and a live online
          streaming for the virtual attendees. For broadcast of pre-recorded
          videos, performers are expected to be present to interact with
          audiences in the live chat window.<br /><br />
          <b>Duration :</b> Each performance slot is strictly limited to 8
          minutes maximum, including the mandatory 1-2 minute
          introduction/explanation.<br />
          <b>Venue :</b> KAIST Auditorium (up to 999 seats) for on-site pieces;
          videos are screened in the same session.<br />
          <b>Available resources :</b> PA systems, projector, and microphones;
          Disklavier Grand Piano or Electronic Drum Kit on request. Contact the
          Music Chairs early for non-standard setups.
        </v-card-text>
      </v-card>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- ===================== Submission Guideline ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Submission Guideline
        </v-card-title>
        <v-card-text class="text-body">
          Submissions are electronic via
          <a
            href="https://cmt3.research.microsoft.com/ISMIR2025/"
            target="_blank"
            style="color: #1487c8"
            >CMT</a
          >
          by <b>June 30, 2025 (AOE)</b>. Include:
        </v-card-text>
        <v-card-title class="text-h6 mb-2 font-weight-bold">
          For on-site performance
        </v-card-title>
        <ul class="dot-list">
          <li>
            A submission proposal with description of the performance in the
            form of program notes (text) and technical rider (pdf). The proposal
            should include a clear description of how ISMIR-related technology
            is embedded in the performance. It should also clearly specify how
            long the performance will last, noting that performances should be 8
            minutes maximum.
          </li>
          <li>
            A recording of a previous performance, a rehearsal, or a clear
            demonstration of the proposed performance. Please include this as a
            file or stable URL link.
          </li>
          <li>
            Tech rider document should include a detailed list of ALL equipment
            required, clearly indicating what is provided by the venue (from the
            list above) and what the performer(s) will bring.
          </li>
        </ul>
        <v-card-title class="text-h6 mb-2 font-weight-bold"
          >For non-live video</v-card-title
        >
        <ul class="dot-list">
          <li>
            The video should be self-explanatory with some post-processed titles
            and subtitles, since there will be no commenter during the
            broadcast. The video length should strictly be no longer than 8
            minutes.
          </li>
          <li>
            The video should be submitted as .mp4, .mov, .wav, .aif, .flac
            format with file size &lt; 100MB or an online link (preferably).
          </li>
        </ul>
        <v-card-text class="text-body">
          Only one submission per participant will be accepted (one can be in
          multiple submissions but accepted to perform only in one of them). The
          submission is not anonymous. The proposals and video performances will
          be submitted through the CMT system for a light review. There is no
          guarantee that all submissions will be accepted for the program.
          Please note the submission proposal is for informative purposes for
          the selection and will not be included in the conference proceedings.
          The artist must hold the copyright of submitted materials to be used
          in ISMIR 2025.
        </v-card-text>
      </v-card>

      <br />
      <v-divider></v-divider>
      <br />

      <!-- ===================== Contact ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Contact</v-card-title
        >
        <v-card-text class="text-body">
          For any inquiries regarding the music performance submissions, please
          contact the ISMIR 2025 Music Chairs:
          <a href="mailto:ismir2025-music@ismir.net" style="color: #1487c8">
            ismir2025-music@ismir.net
          </a>
        </v-card-text>
        <v-card-text class="text-body">
          We look forward to receiving your creative proposals and experiencing
          innovative MIR-driven music performances in Korea!
        </v-card-text>
        <v-card-title class="text-h6 mb-3">
          Harin Lee & Gabriel Meseguer-Brocal<br />Music Program Chairs of ISMIR
          2025
        </v-card-title>
      </v-card>

      <br /><br /><br />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          items: [
            { content: "Submission portal opening", date: "May 18, 2025" },
            { content: "Submission deadline", date: "June 30, 2025 (AOE)" },
            { content: "Notification of acceptance", date: "July 14, 2025" },
            {
              content: "Performance-ready upload due",
              date: "September 12, 2025",
            },
          ],
        },
      ],
    };
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
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 8px;
}
.code-block {
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px;
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  overflow-x: auto;
  white-space: pre-wrap;
}
.highlight-text {
  color: #004191;
  font-weight: bold;
}
</style>
