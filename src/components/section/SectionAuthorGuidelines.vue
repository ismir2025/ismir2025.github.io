<template>
  <v-row justify="center" id="call-for-papers">
    <v-col cols="12" md="8">
      <!-- Submission Procedure 카드 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Submission Procedure
        </v-card-title>
        <v-card-text class="text-body">
          Submission Portal:
          <a
            href="https://cmt3.research.microsoft.com/ISMIR2025/"
            target="_blank"
            style="color: #1487c8; text-decoration: none"
            >https://cmt3.research.microsoft.com/ISMIR2025/
          </a>
          <br /><br />
          <span class="highlight-text">Abstract Submission</span>: The paper
          title, author names, contact details, and abstract must be submitted
          by the abstract submission deadline. The title and abstract, together
          with the selected subject area, are the primary sources for assigning
          papers to reviewers. So, make sure that they form a concise and
          complete summary of your paper with sufficient information to let
          someone who has not read the full paper know what it is about.
          <br /><br />
          <span class="highlight-text">Full Paper Submission</span>: The full
          paper must be submitted by the full paper submission deadline.
          <br /><br />
          <span class="highlight-text">Supplementary Material</span>: For the
          anonymous review process, in addition to the PDF file of the
          manuscript, authors may upload supplementary files for their
          submission, such as audio samples, demonstration videos,
          self-contained html web pages, code, etc. Submission of PDF files as
          supplementary material is discouraged. The supplementary materials
          should comply with the requirements for the double-blind review
          process. <br /><br />
          <span class="highlight-text">Subject Area</span>: When submitting the
          abstracts, authors will be required to choose from the subject areas
          given. The list of subject areas is the one listed above and it will
          be available on the submission site. <br /><br />
          <span class="highlight-text">Presenting Authors</span>: At least one
          author of each accepted paper must register to the conference, before
          the deadline given for author registration (deadline will be announced
          shortly). Failure to register before the deadline will result in
          automatic withdrawal of the paper from the conference proceedings and
          program. <br /><br />
          <span class="highlight-text">Publication</span>: Accepted papers will
          be published on the conference website and on an open access
          repository using a Creative Commons Attribution 4.0 International
          License (CC BY 4.0).
          <br />
        </v-card-text>
        <br />
        <v-divider></v-divider>
      </v-card>

      <!-- Submission Requirements 카드 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Submission Requirements
        </v-card-title>
        <v-card-text class="text-body">
          <span class="highlight-text">Paper Format</span>: Papers must be
          formatted using the ISMIR 2025 templates (<a
            href="https://www.overleaf.com/latex/templates/paper-template-for-ismir-2025/xnqdhjhdgsfd"
            target="_blank"
            style="color: #1487c8; text-decoration: none"
            >Overleaf</a
          >,
          <a
            href="https://github.com/ismir/paper_templates/releases/tag/2025v1"
            target="_blank"
            style="color: #1487c8; text-decoration: none"
            >LaTeX</a
          >
          or
          <a
            href="https://github.com/ismir/paper_templates/releases/tag/2025v1"
            target="_blank"
            style="color: #1487c8; text-decoration: none"
            >Word</a
          >). Authors are required to submit their papers in PDF format.
          Submissions that manipulate the template (e.g., by decreasing margins
          or font sizes) may be rejected without review. All fonts need to be
          embedded within the PDF. <br /><br />
          <span class="highlight-text">Paper Length</span>: Papers must conform
          to a 6+N format: 6 pages of scientific content (including figures and
          tables) and any number of additional pages that contain only
          references and an optional ethics statement. Overlength papers or
          papers that do not conform to the required format will be rejected
          without review. Acknowledgements can be included in the optional pages
          for the camera ready submission. <br /><br />
          <span class="highlight-text">Ethics Statement</span>: With the goal of
          encouraging more discussion of ethical considerations in the ISMIR
          research community, authors may now choose to include an ethics
          statement section in their submissions in addition to the 6 page limit
          for scientific content. Ethics statements are optional, though they
          are encouraged especially for work related to MIR technology with the
          potential for broad social impact, such as recommendation or
          generation. A good ethics statement should candidly discuss both
          positive and negative ethical considerations of the work, including
          but not limited to (1) the potential societal implications of the
          work, (2) the ethical manner in which the work was conducted
          (especially for work with user studies), and (3) the prior societal
          context before the work. Any cultural, economic, or broader societal
          risks posed by the work should be mentioned (though not necessarily
          resolved). Ethics statements should be placed directly in the
          submission PDF and do not count against the 6 page limit for
          scientific content. Information regarding approval from the
          Institutional Review Board can also be presented in this section
          although the names of institutions should be redacted for blind
          review. In most cases ethics statements would be 0-2 paragraphs, and
          certainly not longer than a page. <br /><br />
          <span class="highlight-text">Accessibility</span>: For this year's
          submissions, we strongly encourage authors to include alt text (or
          alternative text) as a first step to make your manuscript more
          accessible. Also, we strongly encourage the authors to adopt a color
          blind friendly color palette when making plots. Please refer to tips
          and instructions on how to incorporate alt text and the color palette
          in the
          <a
            href="#manuscript-accessibility"
            style="color: #1487c8; text-decoration: none"
          >
            manuscript accessibility
          </a>
          section below.

          <br />
          <br />
          <span class="highlight-text">Anonymity of Authors</span>: Do not put
          your names under the title. Avoid using phrases such as "our previous
          work" when referring to earlier publications by the authors. Remove
          information that may identify the authors in the acknowledgments
          (e.g., co-workers and grant IDs). Check supplementary material for
          information that may reveal the authors' identity. Avoid providing
          links to websites that identify the authors. Anonymized materials may
          be uploaded as "Supplementary material". <br /><br />
          <span class="highlight-text">Preprints</span>: To maintain the
          legitimacy for our double-blind review process, we strongly discourage
          authors from posting near duplicate manuscripts on public archives
          (technical reports, arXiv, etc.). In the same spirit, to protect our
          double-blind review process, authors need to make sure they do not
          promote their work in any way during the review process (social media,
          blog, mailing-list, etc.), since this may prevent preserving
          anonymity. <br /><br />
          <span class="highlight-text" id="manuscript-accessibility"
            >External Materials</span
          >: If the paper promises to make the code, dataset, or other materials
          available after the acceptance, our research community relies on the
          research ethics of the authors to fulfill their promise.
          <br />
        </v-card-text>
        <br />
        <v-divider></v-divider>
      </v-card>

      <!-- manuscript accessibility 카드 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Manuscript Accessibility
        </v-card-title>
        <v-card-text class="text-body mb-0">
          <span style="color: #004191; font-weight: bold">
            We strongly encourage authors to follow Accessibility best practices
            so that the research is easier to read and access by lowering
            barriers.
          </span>
        </v-card-text>

        <!-- Alt text 카드 -->
        <v-card-title class="text-h5 mb-3 font-weight-bold"
          >Alt text</v-card-title
        >
        <v-card-text class="text-body">
          Alt text (alternative text) is a concise textual description of an
          image, graph, or figure that allows screen readers to convey the
          essential visual information to people who cannot see or perceive the
          content. Here are some guidelines and practical tips for creating
          effective Alt text; learn more
          <a
            href="https://www.sigaccess.org/welcome-to-sigaccess/resources/describing-figures/"
            target="_blank"
            style="color: #1487c8; text-decoration: none"
            >here.</a
          >
        </v-card-text>

        <!-- Alt text 베스트 프랙티스 -->
        <ul class="dot-list">
          <li>
            <strong>Keep it concise, but complete:</strong>
            Focus on the essential information that the image conveys (e.g.,
            trends in a graph, structure of a diagram). Avoid lengthy repetition
            of what is already described in the main text or figure caption.
          </li>
          <li>
            <strong>Focus on meaning, not purely visual details:</strong>
            If the figure is meant to show the comparison of two algorithms,
            emphasize their performance difference rather than purely stating
            "blue bar, red bar."
          </li>
          <li>
            <strong>Use consistent terminology:</strong>
            Match the style and terminology used in the main text. Expand
            acronyms at least once if they are not explained elsewhere.
          </li>
          <li>
            <strong>Avoid "image of..." phrasing:</strong>
            Since screen readers already identify the element as an image, you
            can skip phrases like "This is a figure of ..." and go directly to
            describing the content.
          </li>
          <li>
            <strong
              >For complex images, provide a short Alt text plus a longer
              explanation (if needed):</strong
            >
            If a graph or chart is very detailed, include a brief Alt text
            describing the main takeaway, and put a more thorough explanation
            (e.g., data points or methodology) in the main text.
          </li>
          <li>
            <strong>Mark decorative images:</strong>
            If the figure is purely decorative (adds no new information), mark
            it as decorative (in Word) or set it as an artifact (in Acrobat) so
            screen readers can skip it.
          </li>
        </ul>

        <v-card-text class="text-body">
          Below are some common ways to add alt text to your final manuscript:
        </v-card-text>

        <ol class="decimal-list">
          <!-- LaTeX Alt Text 가이드 -->
          <li>
            <strong>LaTeX (TeXLive 2024)</strong>
            <ol class="decimal-list">
              <li>
                Ensure you are up to date with the latest version of LaTeX
                (2024). You can check your current version via the command line:
                <div class="code-block">
                  <code>latex --version</code>
                </div>
                <ol class="decimal-list">
                  <li>
                    For help on updating to TeX Live on Linux,
                    <a
                      href="https://tug.org/texlive/upgrade.html"
                      target="_blank"
                      style="color: #1487c8; text-decoration: none"
                      >click here.</a
                    >
                  </li>
                  <li>
                    For help on getting MacTex-2025 on macOS,
                    <a
                      href="https://www.tug.org/mactex/mainpage2024.html"
                      target="_blank"
                      style="color: #1487c8; text-decoration: none"
                      >click here.</a
                    >
                  </li>
                </ol>
                <br />
              </li>
              <li>
                Install the <code>tagpdf</code> package:
                <div class="code-block">
                  <code>sudo tlmgr install tagpdf</code>
                </div>
                <br />
              </li>
              <li>
                Add the following line as the first (non-comment) line in your
                TeX file (e.g., above
                <code>\documentclass{article}</code>
                in the ISMIR2025_template.tex file):
                <div class="code-block">
                  <code
                    >\DocumentMetadata{testphase={phase-III,activate=tagging}}</code
                  >
                </div>
                <p class="text-body">
                  (This activates the tagging feature for accessible PDFs.)
                </p>
                <br />
              </li>
              <li>
                Ensure that the <code>graphicx</code> package is included:
                <div class="code-block">
                  <code>\usepackage{graphicx}</code>
                </div>
                (This is already included in the ISMIR template.)
                <br /><br />
              </li>
              <li>
                Add alt-text to any images as an optional
                <code>alt={...}</code>
                argument to any
                <code>\includegraphics</code>
                commands. For example:
                <div class="code-block">
                  <code>
                    \centerline{\includegraphics[alt={ISMIR 2025 template test
                    image},width=0.9\columnwidth]{figure.png}}
                  </code>
                </div>
                <p class="text-body">
                  <em>Note:</em> Avoid spaces between optional arguments.
                  Replace the text in <code>alt={...}</code> with a short,
                  meaningful description of your image.
                </p>
                <br />
              </li>
            </ol>
          </li>

          <!-- Acrobat Alt Text 가이드 -->
          <li>
            <strong>Adobe Acrobat</strong>
            <ol class="decimal-list">
              <li>
                Follow the instructions
                <a
                  href="https://elearning.adobe.com/2024/02/how-to-add-alt-text-in-adobe-acrobat-a-step-by-step-guide/"
                  target="_blank"
                  style="color: #1487c8; text-decoration: none"
                >
                  here
                </a>
                to add or edit alt text in Adobe Acrobat. After generating your
                PDF (from Word or LaTeX), open it in Acrobat and use Tools &gt;
                Accessibility &gt; Reading Order (or "Set Alternate Text") to
                review and set the alt text for each figure.
              </li>
              <li>
                If an image is purely decorative, you can mark it as a
                background/artifact so that screen readers skip it.
              </li>
              <li>
                Consider running an Accessibility Check (Tools &gt;
                Accessibility &gt; Accessibility Check) to ensure all figures
                have appropriate alt text.
              </li>
            </ol>
          </li>
          <br />

          <!-- Word Alt Text 가이드 -->
          <li>
            <strong>Microsoft Word</strong>
            <ol class="decimal-list">
              <li>
                Follow the instructions
                <a
                  href="https://support.microsoft.com/en-us/office/add-alternative-text-to-a-shape-picture-chart-smartart-graphic-or-other-object-44989b2a-903c-4d9a-b742-6a75b451c669"
                  target="_blank"
                  style="color: #1487c8; text-decoration: none"
                  >here</a
                >
                to add alt text in Microsoft Word.
              </li>
              <li>
                After inserting an image, right-click &gt; "Edit Alt Text..."
                and provide a short, meaningful description. If Word suggests an
                auto-generated description, review and replace it with your own
                text to ensure accuracy.
              </li>
              <li>
                Use Word's built-in Accessibility Checker (Review &gt; Check
                Accessibility) to verify that all images have alt text.
              </li>
              <li>
                Mark purely decorative images as "Decorative" so that screen
                readers skip them.
              </li>
            </ol>
          </li>
        </ol>
        <br /><br />

        <!-- Testing Alt Text with Screen Readers -->
        <v-card-title class="text-h5 mb-3 font-weight-bold">
          Testing Alt Text with Screen Readers
        </v-card-title>
        <v-card-text class="text-body">
          After generating your final PDF, we strongly recommend using
          <a
            href="https://get.adobe.com/reader/"
            target="_blank"
            style="color: #1487c8; text-decoration: none"
            >Adobe Acrobat Reader</a
          >
          (where possible) to verify whether your alt text is properly
          recognized. Acrobat Reader is an industry standard and offers robust
          accessibility features. You can also test with other screen readers
          (NVDA, VoiceOver, Orca) on different platforms to confirm the alt text
          is read as intended.
        </v-card-text>

        <ol class="decimal-list">
          <li>
            <strong>Windows</strong>
            <ul class="dot-list">
              <li>
                Open your PDF in
                <span class="highlight-text">Adobe Acrobat Reader</span>.
              </li>
              <li>
                Use either <em>Narrator</em> (<code>Ctrl + Shift + Y</code>) or
                <em>NVDA</em> (available from
                <a
                  href="https://www.nvaccess.org/"
                  target="_blank"
                  style="color: #1487c8; text-decoration: none"
                  >NV Access</a
                >).
              </li>
              <li>
                Navigate through the document with arrow keys. When you reach an
                image, the screen reader should read out the alt text.
              </li>
            </ul>
          </li>

          <li>
            <strong>macOS</strong>
            <ul class="dot-list">
              <li>
                Install or open
                <span class="highlight-text">Adobe Acrobat Reader</span> for
                Mac.
              </li>
              <li>Press <code>CMD + Shift + Y</code> to enable VoiceOver.</li>
              <li>
                Use arrow keys to navigate the PDF. VoiceOver should announce
                the alt text when encountering images.
              </li>
            </ul>
          </li>

          <li>
            <strong>Ubuntu (Linux)</strong>
            <ul class="dot-list">
              <li>
                Although Acrobat Reader for Linux is not officially supported,
                older versions may still work. Alternatively, you can use
                <em>Evince</em> or <em>Okular</em> with <em>Orca</em>.
              </li>
              <li>
                Install <em>Orca</em>:
                <code>sudo apt-get install orca</code>
              </li>
              <li>
                Press <code>Alt + Super + S</code> (Ubuntu default) to start
                Orca, then open the PDF in your chosen viewer. Arrow keys or
                Orca shortcuts will let you hear the alt text for images.
              </li>
            </ul>
          </li>
        </ol>

        <v-card-text class="text-body">
          By testing with screen readers, you can ensure your PDF's tagging
          structure and alt text are fully aligned with accessibility standards,
          allowing every reader to engage with your research effectively.
        </v-card-text>

        <br />
        <v-divider></v-divider>
      </v-card>

      <!-- Color choices 카드 -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h5 mb-3 font-weight-bold">
          Color choices
        </v-card-title>
        <v-card-text class="text-body"
          >Thoughtful color choices can also help increase accessibility. As a
          start, if you can choose the colors used in your images, avoid
          difficult color combinations: Green and red or Blue and yellow. There
          are various color-blind safe resources; here are some examples from
          <a
            href="https://helpx.adobe.com/creative-cloud/adobe-color-accessibility-tools.html"
            target="_blank"
            style="color: #1487c8; text-decoration: none"
            >Adobe</a
          >
          and
          <a
            href="https://support.microsoft.com/en-us/office/use-color-and-contrast-for-accessibility-in-microsoft-365-bb11486d-fc7d-4cd9-b344-16e2bc2a2387"
            target="_blank"
            style="color: #1487c8; text-decoration: none"
            >Microsoft</a
          >. Consider using pattern fill for bar charts and shapes for means
          charts, if any.
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
            style="color: #1487c8; text-decoration: none"
            >Web Content Accessibility Guidelines</a
          >
          (WCAG) require a contrast ratio of at least 4.5:1 for normal text. You
          can use:
        </v-card-text>

        <ul class="dot-list">
          <li>
            <a
              href="https://webaim.org/resources/contrastchecker/"
              target="_blank"
              style="color: #1487c8; text-decoration: none"
              >WebAim Color Contrast Checker</a
            >
          </li>
          <li>
            <a
              href="https://webaim.org/resources/linkcontrastchecker/"
              target="_blank"
              style="color: #1487c8; text-decoration: none"
              >WebAim Link Contrast Checker</a
            >
          </li>
          <li>
            <a
              href="https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf?hl=en&pli=1"
              target="_blank"
              style="color: #1487c8; text-decoration: none"
              >WCAG Color Contrast Chrome Extension</a
            >
          </li>
        </ul>

        <!-- 새롭게 추가하는 예시 코드 안내 -->
        <v-card-title class="text-h6 mt-5 mb-3 font-weight-bold"
          >Music signal processing example</v-card-title
        >
        <v-card-text class="text-body">
          Below is a short Python snippet showing how to visualize multiple
          music signals in a colorblind-friendly palette.
          <br /><br />
          <div class="code-block">
            <code>
              # High contrast, colorblind-friendly color palette
              <br /><br />colors = { 'blue': '#0077BB', # Strong blue
              <br />'orange': '#EE7733', # Orange <br />'green': '#009988', #
              Teal <br />'red': '#CC3311', # Red <br />'purple': '#AA4499', #
              Purple <br />'yellow': '#EECC66' # Light yellow }
              <br /><br />import matplotlib.pyplot as plt
            </code>
          </div>
        </v-card-text>

        <v-card-text class="text-body mt-4">
          Here is an example figure you might generate with the above palette.
          It helps ensure good contrast, especially for those who may be
          colorblind.

          <!-- 이미지 import 예시 -->
          <div style="text-align: center; margin-top: 1rem">
            <!-- Vue data()에서 stackedWave 이미지를 불러옴 -->
            <img
              :src="stackedWave"
              alt="Stacked partial waveforms with vertical offsets, each in a different color."
              style="max-width: 100%"
            />
          </div>

          Also, the 'tableau-colorblind10' and 'petroff10' color palettes would
          be good options, which can be enabled by
          <br />
          <br />
          <div class="code-block">
            <code>
              plt.style.use('tableau-colorblind10')
              <br />
              plt.style.use('petroff10')
            </code>
          </div>
        </v-card-text>

        <v-card-text class="text-body mt-4">
          To learn more about Accessibility best practices, please check out
          SIGCHI
          <a
            href="https://sigchi.org/resources/guides-for-authors/accessibility/"
            target="_blank"
            style="color: #1487c8; text-decoration: none"
            >Guide to an Accessible Submission</a
          >. <br /><br />
          If you have any questions, you can reach the scientific program chairs
          via
          <a
            href="mailto:ismir2025-papers@ismir.net"
            style="color: #1487c8; text-decoration: none"
          >
            ismir2025-papers@ismir.net
          </a>
        </v-card-text>
        <br /><br /><br />
      </v-card>

      <br /><br /><br />
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
/* Notion 스타일의 코드 블록 */
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
