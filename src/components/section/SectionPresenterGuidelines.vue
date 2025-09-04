<template>
  <v-row justify="center" id="call-for-papers">
    <v-col cols="12" md="8">
      <!-- Instructions for Presenters -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Instructions for Presenters
        </v-card-title>

        <v-card-text class="text-body">
          Each accepted full paper and contributed TISMIR paper will be assigned
          a <strong>4-minute oral presentation</strong> in an oral session and a
          <strong>poster board</strong> in the following poster session. Authors
          may present onsite or online, provided that they are available during
          their assigned session (in the onsite time zone) for in-person or
          virtual interactions with attendees. <br /><br />
          All full-paper and TISMIR presenters must upload the following to CMT
          as <strong>supplementary materials</strong> by
          <span class="highlight-text">11:59 PM on August 25, AoE</span>:
        </v-card-text>

        <ul class="dot-list">
          <li>Poster file</li>
          <li>Thumbnail image</li>
          <li>Recorded 4-min video presentation</li>
          <li>Slides for the video presentation</li>
          <li>Subtitles for the video presentation</li>
          <li>1-3 fun facts about the authors and/or research</li>
        </ul>

        <v-card-text class="text-body">
          Also, you must upload your slides for the live presentation by
          <span class="highlight-text">11:59 PM on September 15, AoE</span>.
        </v-card-text>

        <v-card-text class="text-body">
          <strong>Late-breaking/demo (LBD) submissions</strong>: Requirements
          for LBD will be sent out separately with the acceptance letter.
        </v-card-text>

        <br />
        <v-divider></v-divider>
      </v-card>

      <!-- Presentation Overview -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Presentation Overview
        </v-card-title>

        <v-card-text class="text-body">
          In-person full-paper and TISMIR presenters:
        </v-card-text>

        <ul class="dot-list">
          <li>
            You will give a 4-min presentation live during the assigned oral
            session, based off of the uploaded slides.
          </li>
          <li>
            You will present a poster during the assigned poster session
            following the oral session.
            <span class="highlight-text"
              >You are responsible for printing your own poster and bringing it
              to the venue.</span
            >
          </li>
          <li>
            You will be assigned a Slack channel for online and asynchronous
            discussion.
          </li>
        </ul>

        <v-card-text class="text-body">
          Remote full-paper and TISMIR presenters:
        </v-card-text>

        <ul class="dot-list">
          <li>
            Your pre-recorded 4-min video presentation will be played back
            during the live session.
          </li>
          <li>
            You will be assigned a dedicated Slack channel for online and
            asynchronous discussions. Communication with the audience will take
            place through Slack chat, recorded videos, presentation slides, and
            papers. While video calls on Slack ('Huddles') are limited to 1:1,
            you're welcome to arrange a private group video call on a platform
            of your choice if you wish.
          </li>
        </ul>

        <br />
        <v-divider></v-divider>
      </v-card>

      <!-- Deliverables -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Deliverables
        </v-card-title>

        <!-- Poster -->
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Poster</v-card-title
        >

        <v-card-text class="text-body">
          Please provide a poster that summarizes the key points of your paper.
          You will present your poster during the assigned poster session. The
          poster will also be made publicly available on MiniConf (<a
            href="https://ismir2024program.ismir.net/papers.html"
            style="color: #1487c8"
            >examples</a
          >). <br /><br />
          <span class="highlight-text"
            >You are responsible for printing your own poster and bringing it to
            the venue.</span
          >
        </v-card-text>

        <ul class="dot-list">
          <li>Format: PDF</li>
          <li>Size: A0 (841 x 1189 mm), portrait orientation</li>
          <li>File size: 10 MB maximum</li>
          <li>
            Filename:
            <pre>poster_[paper ID]_[firstAuthorFirstNameLastName].pdf</pre>
            <br />
            Example:
            <pre>poster_001_JohnDoe.pdf</pre>
          </li>
        </ul>

        <br /><br />

        <!-- Thumbnail Image -->
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Thumbnail Image</v-card-title
        >

        <v-card-text class="text-body">
          Please provide an image of an illustration, figure, or table that best
          represents the paper. The image will be used as a preview visual on
          MiniConf. Please see the 2024 MiniConf
          <a
            href="https://ismir2024program.ismir.net/papers.html"
            style="color: #1487c8"
            >page</a
          >
          for some examples.
        </v-card-text>

        <ul class="dot-list">
          <li>Format: PNG</li>
          <li>Image size: 1920x1080 maximum</li>
          <li>File size: 1 MB maximum</li>
          <li>
            Filename:
            <pre>thumbnail_[paper ID]_[firstAuthorFirstNameLastName].png</pre>
            <br />
            Example:
            <pre>thumbnail_001_JohnDoe.png</pre>
          </li>
        </ul>

        <br /><br />

        <!-- Video Presentation -->
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Video Presentation</v-card-title
        >

        <v-card-text class="text-body">
          Please prepare a 4-minute video presentation for your paper. The video
          should summarize the main points of the paper and hopefully entice the
          viewer to read your paper or visit your poster. The video will be made
          publicly available on MiniConf (<a
            href="https://ismir2024program.ismir.net/papers.html"
            style="color: #1487c8"
            >examples</a
          >). <br /><br />
          We recommend recording voice overs to a slideshow or slides with
          embedded video of the presenter. You might want to record the
          presentation on a virtual meeting platform such as Zoom, Google Meet,
          or Microsoft Teams. Presentation programs such as Powerpoint can also
          be used to record slide presentations with voiceover.
        </v-card-text>

        <ul class="dot-list">
          <li>Format: MP4 (h.264 or h.265 codec)</li>
          <li>Length: 4 minutes maximum</li>
          <li>File size: 300 MB maximum</li>
          <li>
            Filename:
            <pre>video_[paper ID]_[firstAuthorFirstNameLastName].mp4</pre>
            <br />
            Example:
            <pre>video_001_JohnDoe.mp4</pre>
          </li>
        </ul>

        <br /><br />

        <!-- Slides for Video Presentation -->
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Slides for Video Presentation</v-card-title
        >

        <v-card-text class="text-body">
          Please provide the slides used for the uploaded 4-minute video
          presentation. The slides will be made publicly available on MiniConf
          (<a
            href="https://ismir2024program.ismir.net/papers.html"
            style="color: #1487c8"
            >examples</a
          >).
        </v-card-text>

        <ul class="dot-list">
          <li>Format: PDF</li>
          <li>File size: 50 MB maximum</li>
          <li>
            Filename:
            <pre>slides_[paper ID]_[firstAuthorFirstNameLastName].pdf</pre>
            <br />
            Example:
            <pre>slides_001_JohnDoe.pdf</pre>
          </li>
        </ul>

        <br /><br />

        <!-- Video Subtitles -->
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Video Subtitles</v-card-title
        >

        <v-card-text class="text-body">
          To ensure accessibility, please provide a SubRip (SRT) subtitle for
          your uploaded video presentation. You may use YouTube's automatic
          captioning
          <a
            href="https://support.google.com/youtube/answer/6373554"
            style="color: #1487c8"
            >feature</a
          >
          to generate the subtitle file. Please double check and make sure the
          automatic transcriptions are accurate.
        </v-card-text>

        <ul class="dot-list">
          <li>Format: SRT</li>
          <li>File size: 1 MB maximum</li>
          <li>
            Filename:
            <pre>subtitle_[paper ID]_[firstAuthorFirstNameLastName].srt</pre>
            <br />
            Example:
            <pre>subtitle_001_JohnDoe.srt</pre>
          </li>
        </ul>

        <br /><br />

        <!-- Fun Facts -->
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Fun Facts</v-card-title
        >

        <v-card-text class="text-body">
          Please provide 1-3 fun facts about the authors and/or research. These
          fun facts will be shared on Slack during the oral sessions to increase
          attendee engagement.

          <br /><br />

          Examples:
        </v-card-text>

        <ul class="dot-list">
          <li>
            Bob Sturm both works with Irish Music and plays it on his
            accordions.
          </li>
          <li>
            You might recognize [this person] from ISMIR [year] where they
            presented X.
          </li>
          <li>To learn more about transformers, see X paper.</li>
        </ul>

        <br /><br />

        <ul class="dot-list">
          <li>Number of fun facts: 1-3</li>
          <li>Format: TXT</li>
          <li>File size: 1 MB maximum</li>
          <li>
            Filename:
            <pre>funfacts_[paper ID]_[firstAuthorFirstNameLastName].txt</pre>
            <br />
            Example:
            <pre>funfacts_001_JohnDoe.txt</pre>
          </li>
        </ul>

        <br /><br />

        <!-- Slides for Live Presentation -->
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Slides for Live Presentation</v-card-title
        >

        <v-card-text class="text-body">
          Please provide the slides you will use for the live presentation
          during the assigned oral session. You may upload a PDF, Powerpoint, or
          Keynote file. Alternatively, you may provide a link to Google Slides
          in a TXT file (make sure to set the sharing settings to "Anyone with
          the link can view").
        </v-card-text>

        <ul class="dot-list">
          <li>Format: PDF / PPT / PPTX / KEY / TXT</li>
          <li>File size: 50 MB maximum</li>
          <li>
            Filename:
            <pre>
live_slides_[paper ID]_[firstAuthorFirstNameLastName].pdf/ppt/pptx/key/txt</pre
            >
            <br />
            Example:
            <pre>live_slides_001_JohnDoe.pdf</pre>
          </li>
        </ul>

        <v-card-text class="text-body">
          While we allow Powerpoint, Keynote files and Google Slides, in case of
          technical issues, the uploaded PDF slides for the video presentation
          will be used instead.
        </v-card-text>
      </v-card>
      <br/><br/><br/>
    </v-col>
  </v-row>
</template>

<script>
import stackedWave from "@/assets/stacked_wave.png";
export default {
  components: {},
  data() {
    return {
      stackedWave,
      expandedPanels: [], // ���� Ȯ��� �г��� �����ϴ� �迭
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
  list-style-type: disc;
  font-size: 18px;
  padding-left: 40px;
  line-height: 1.8;
}

.decimal-list {
  list-style-type: decimal;
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

/* Notion ��Ÿ���� �ڵ� ���� */
.code-block {
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px;
  font-family: "Noto Sans", sans-serif;
  font-size: 14px;
  overflow-x: auto;
  white-space: pre-wrap;
}

.highlight-text {
  color: #004191;
  font-weight: bold;
}
</style>
