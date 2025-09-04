<template>
  <v-row justify="center" id="call-for-papers">
    <v-col cols="12" md="8">
      <!-- Camera-ready paper submission 카드 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Manuscript Accessibility</v-card-title
        >
        <v-card-text class="text-body">
          <span style="color: #004191; font-weight: bold"
            >We strongly encourage authors to follow Accessibility best
            practices so that the research is easier to read and access by
            lowering barriers.</span
          ></v-card-text
        >
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Alt text 카드 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Alt text</v-card-title
        >
        <v-card-text class="text-body">
          One way to enhance accessibility is to describe the figures that are
          not fully captured in the captions via alt text (or alternative text),
          which are additional written descriptions to help describe the image.
          Here are some general guidelines to writing alt text; learn more
          <a
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/describing-figures/"
            target="_blank"
            style="color: #1487c8"
          >
            here.
          </a>
        </v-card-text>

        <ul class="dot-list">
          <li>
            Describe succinctly with a focus on the essential new information in
            the figure ? do not repeat what is in the main text or the caption.
          </li>
          <li>Start general and get increasingly more specific.</li>
          <li>Use the same writing style and terminology as the main text.</li>
          <li>Write out abbreviations and symbols in full.</li>
        </ul>

        <v-card-text class="text-body">
          There are a few ways to add alt text to your final manuscript:
        </v-card-text>
        <ol class="decimal-list">
          <li>
            LaTeX (TeXLive 2025)
            <ol class="decimal-list">
              <li>
                Ensure you are up to date with the latest version of LaTeX
                (2025). You can check your current version via the command line:

                <div class="code-block">
                  <code> latex --version </code>
                </div>

                <ol class="decimal-list">
                  <li>
                    For help on updating to TeX Live on Linux,
                    <a
                      href="https://tug.org/texlive/upgrade.html"
                      target="_blank"
                      style="color: #1487c8"
                    >
                      click here.
                    </a>
                  </li>
                  <li>
                    For help on getting MacTex-2025 on MacOS,
                    <a
                      href="https://www.tug.org/mactex/mainpage2024.html"
                      target="_blank"
                      style="color: #1487c8"
                    >
                      click here.
                    </a>
                  </li>
                </ol>
                <br />
              </li>
              <li>
                Install the tagpdf package:
                <div class="code-block">
                  <code> sudo tlmgr install tagpdf </code>
                </div>
                <br />
              </li>
              <li>
                Add the following line as the first (non-comment) line in your
                TeX file (e.g., above
                <code>\documentclass{article}</code>
                in the ISMIR2025_template.tex file):
                <div class="code-block">
                  <code> \DocumentMetadata{testphase={phase-III,math}} </code>
                </div>
                <br />
              </li>
              <li>
                Ensure that the graphicx package is included:
                <div class="code-block">
                  <code> \usepackage{graphicx} </code>
                </div>

                (This is already included in the ISMIR template.)
                <br /><br />
              </li>
              <li>
                Add alt-text to any images as an optional
                <code>alt={...}</code>
                argument to any
                <code>\includegraphics</code>
                commands. For example, if you have the following figure in
                ISMIR2025_template.tex:
                <div class="code-block">
                  <code>
                    \centerline{\framebox{\includegraphics[alt={ISMIR 2025
                    template test image},width=0.9\columnwidth]{figure.png}}}
                  </code>
                </div>

                <p class="text-body">
                  <em>Note:</em> Do not include spaces between optional
                  arguments.
                </p>
                <br />
              </li>
              <li>
                You may also update the Creative Commons license image by
                editing line 204 in <code>ismir.sty</code> to:
                <div class="code-block">
                  <code>
                    {\includegraphics[alt={Creative Commons B Y
                    License},height=0.45cm]{figs/cc_by.pdf}}
                  </code>
                </div>
                <br />
              </li>
              <li>
                After compiling your paper, you can test the PDF using VoiceOver
                on MacOS:
                <ol class="decimal-list">
                  <li>
                    Open the PDF file, then press <code>CMD + fn + F5</code> to
                    enter VoiceOver, and select "Use VoiceOver."
                  </li>
                  <li>
                    Press <code>Control + Option</code> and left/right arrow
                    keys to move the reading focus.
                  </li>
                  <li>
                    Press <code>Control + Option + Shift</code> and up/down to
                    enter or exit levels of focus. ("Down" enters a region on
                    screen; "Up" exits to the containing region.)
                  </li>
                  <li>
                    Navigate to the images for which you have added alt text. If
                    the alt text has been correctly embedded, you should hear
                    "<code>&lt;alt text&gt;</code> Image".
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <br />
          <li>
            Adobe Acrobat
            <ol class="decimal-list">
              <li>
                Follow the instructions
                <a
                  href="https://elearning.adobe.com/2024/02/how-to-add-alt-text-in-adobe-acrobat-a-step-by-step-guide/"
                  target="_blank"
                  style="color: #1487c8"
                >
                  here
                </a>
                to add alt text in Adobe Acrobat.
              </li>
            </ol>
          </li>
          <li>
            Microsoft Word
            <ol class="decimal-list">
              <li>
                Follow the instructions
                <a
                  href="https://support.microsoft.com/en-us/office/add-alternative-text-to-a-shape-picture-chart-smartart-graphic-or-other-object-44989b2a-903c-4d9a-b742-6a75b451c669"
                  target="_blank"
                  style="color: #1487c8"
                >
                  here
                </a>
                to add alt text in Microsoft Word.
              </li>
            </ol>
          </li>
        </ol>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <!-- Color choices 카드 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold"
          >Color choices</v-card-title
        >
        <v-card-text class="text-body"
          >Thoughtful color choices can also help increase accessibility. As a
          start, if you can choose the colors used in your images, avoid
          difficult color combinations: Green and red or Blue and yellow. There
          are various color-blind safe resources; here are some examples from
          <a
            href="https://helpx.adobe.com/creative-cloud/adobe-color-accessibility-tools.html"
            target="_blank"
            style="color: #1487c8"
          >
            Adobe
          </a>
          and
          <a
            href="https://support.microsoft.com/en-us/office/use-color-and-contrast-for-accessibility-in-microsoft-365-bb11486d-fc7d-4cd9-b344-16e2bc2a2387"
            target="_blank"
            style="color: #1487c8"
          >
            Microsoft
          </a>
          . Consider using pattern fill for bar charts and shapes for means
          charts, if any.
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
            style="color: #1487c8"
          >
            Web Content Accessibility Guidelines
          </a>
          (WCAG) require a contrast ratio of at least 4.5:1 for normal text. You
          can use:
        </v-card-text>

        <ul class="dot-list">
          <li>
            <a
              href="https://webaim.org/resources/contrastchecker/"
              target="_blank"
              style="color: #1487c8"
            >
              WebAim Color Contrast Checker
            </a>
          </li>
          <li>
            <a
              href="https://webaim.org/resources/linkcontrastchecker/"
              target="_blank"
              style="color: #1487c8"
            >
              WebAim Link Contrast Checker
            </a>
          </li>
          <li>
            <a
              href="https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf?hl=en&pli=1"
              target="_blank"
              style="color: #1487c8"
            >
              WCAG Color Contrast Chrome Extension
            </a>
          </li>
        </ul>

        <!-- 새롭게 추가하는 예시 코드 안내 -->
        <v-card-title class="text-h5 mt-5 mb-3 font-weight-bold"
          >Music signal processing example</v-card-title
        >
        <v-card-text class="text-body">
          Below is a short Python snippet showing how to visualize multiple
          music signals in a colorblind-friendly palette.
        </v-card-text>

        <div class="code-block">
          <code>
            # High contrast, colorblind-friendly color palette
            <br /><br />colors = { 'blue': '#0077BB', # Strong blue
            <br />'orange': '#EE7733', # Orange <br />'green': '#009988', # Teal
            <br />'red': '#CC3311', # Red <br />'purple': '#AA4499', # Purple
            <br />'yellow': '#EECC66' # Light yellow } <br /><br />import
            matplotlib.pyplot as plt
          </code>
        </div>

        <v-card-text class="text-body mt-4">
          Here is an example figure you might generate with the above palette.
          It helps ensure good contrast, especially for those who may be
          colorblind.
        </v-card-text>

        <!-- 이미지 import 예시 -->
        <div style="text-align: center; margin-top: 1rem">
          <!-- Vue data()에서 stackedWave 이미지를 불러옴 -->
          <img
            :src="stackedWave"
            alt="Stacked partial waveforms with vertical offsets, each in a different color."
            style="max-width: 100%"
          />
        </div>

        <v-card-text class="text-body mt-4">
          To learn more about Accessibility best practices, please check out
          SIGCHI
          <a
            href="https://sigchi.org/resources/guides-for-authors/accessibility/"
            target="_blank"
            style="color: #1487c8"
            >Guide to an Accessible Submission</a
          >.
        </v-card-text>

        <br /><br /><br />
      </v-card>
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
    };
  },
};
</script>

<style scoped>
.dot-list {
  list-style-type: disc; /* 글머리 기호 스타일 */
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
/* Notion 스타일 코드 블록 */
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
