<template>
  <v-row justify="center" id="visa-entry-guide">
    <v-col cols="12" md="8">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Visa & Entry Guide
        </v-card-title>
        <v-card-text class="text-body">
          We are excited to welcome you to Daejeon for ISMIR 2025. To ensure a
          smooth journey, please read the following entry requirements
          carefully. The rules vary by nationality.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Quick Summary
        </v-card-title>

        <v-row justify="center" class="mb-4">
          <v-col cols="12" md="8">
            <v-img
              :src="VisaGuideImg"
              alt="Visa & Entry Guide"
              class="visa-guide-image"
              contain
              max-width="80%"
              style="margin: 0 auto;"
            ></v-img>
          </v-col>
        </v-row>

        <v-card-text class="text-body">
          To enter Korea for our conference, every international attendee will
          fall into one of three categories. Follow these steps in order:
          <br /><br />
          <ol class="numbered-list">
            <li>
              <span class="highlight-text"
                >Check if your country is on the K-ETA temporary exemption
                list.</span
              >
              As part of the "Visit Korea Year 2023-2025" campaign, nationals
              from
              <a
                href="https://www.mofa.go.kr/ca-en/wpge/m_5236/contents.do"
                target="_blank"
                style="color: #1487c8; text-decoration: underline"
                >22 countries/regions</a
              >
              (see below) are EXEMPT from needing a K-ETA. If you are from one
              of these countries, you do not need a visa or K-ETA for a
              short-term conference visit.
            </li>
            <li>
              <span class="highlight-text"
                >If NOT exempt, check if you need a K-ETA.</span
              >
              If your country is not on the temporary exemption list, but you
              are normally eligible for visa-free entry to Korea, you MUST apply
              for a
              <a
                href="https://www.k-eta.go.kr/portal/apply/index.do"
                target="_blank"
                style="color: #1487c8; text-decoration: underline"
                >Korea Electronic Travel Authorization (K-ETA)</a
              >
              online before you travel.
            </li>
            <li>
              <span class="highlight-text"
                >If you are not eligible for either of the above, you MUST apply
                for a formal visa</span
              >
              at a Korean embassy or consulate in your region.
            </li>
          </ol>
        </v-card-text>

        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Category 1: K-ETA Temporary Exemption
        </v-card-title>
        <v-card-text class="text-body">
          South Korea has temporarily exempted nationals of the
          <a
            href="https://www.mofa.go.kr/ca-en/wpge/m_5236/contents.do"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >22 countries/regions listed below</a
          >
          from the K-ETA requirement until
          <span class="highlight-text">December 31, 2025</span>. <br /><br />
          <span class="highlight-text">Exempt Countries/Regions:</span>
          <br /><br />

          <div class="regions-container">
            <div class="region-group">
              <h4 class="region-title">🇪🇺 Europe</h4>
              <div class="country-chips">
                <span class="country-chip">Austria</span>
                <span class="country-chip">Belgium</span>
                <span class="country-chip">Denmark</span>
                <span class="country-chip">Finland</span>
                <span class="country-chip">France</span>
                <span class="country-chip">Germany</span>
                <span class="country-chip">Italy</span>
                <span class="country-chip">Netherlands</span>
                <span class="country-chip">Norway</span>
                <span class="country-chip">Poland</span>
                <span class="country-chip">Spain</span>
                <span class="country-chip">Sweden</span>
                <span class="country-chip">UK</span>
              </div>
            </div>

            <div class="region-group">
              <h4 class="region-title">🌏 Asia</h4>
              <div class="country-chips">
                <span class="country-chip">Hong Kong</span>
                <span class="country-chip">Japan</span>
                <span class="country-chip">Macao</span>
                <span class="country-chip">Singapore</span>
                <span class="country-chip">Taiwan</span>
              </div>
            </div>

            <div class="region-group">
              <h4 class="region-title">🇦🇺 Oceania</h4>
              <div class="country-chips">
                <span class="country-chip">Australia</span>
                <span class="country-chip">New Zealand</span>
              </div>
            </div>

            <div class="region-group">
              <h4 class="region-title">🇺🇸 North America</h4>
              <div class="country-chips">
                <span class="country-chip">Canada</span>
                <span class="country-chip">US (including Guam)</span>
              </div>
            </div>
          </div>
          <br />
          <span class="highlight-text">Action:</span> Check the official
          <a
            href="https://www.k-eta.go.kr/portal/guide/viewetaalification.do"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >K-ETA website</a
          >
          to confirm your eligibility. <br /><br />
          <span class="highlight-text">If you are exempt:</span> You do not need
          to apply for anything before your trip. However, you can still
          optionally apply for a
          <a
            href="https://www.k-eta.go.kr/portal/guide/viewetaalification.do"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >K-ETA</a
          >. The main benefit is that you will not have to fill out a paper
          arrival card upon landing in Korea.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Category 2: K-ETA Required
        </v-card-title>
        <v-card-text class="text-body">
          If you are a national of a visa-waiver country but are NOT on the
          temporary exemption list, the K-ETA is mandatory. You will not be
          allowed to board your flight without an approved K-ETA.
          <br /><br />
          <span class="highlight-text">List of Visa-waiver Countries:</span>
          Check it on
          <a
            href="https://www.k-eta.go.kr/portal/guide/viewetaalification.do"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >K-ETA website</a
          >
          <br /><br />
          <span class="highlight-text">Action:</span> Apply online at the
          <a
            href="https://www.k-eta.go.kr/portal/apply/index.do"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >Official K-ETA Website</a
          >.
          <br />
          <span class="highlight-text">Cost:</span> KRW 10,000 (approx. $7-8
          USD).
          <br />
          <span class="highlight-text">When to Apply:</span> At least one week
          before your departure.
          <br />
          <span class="highlight-text">Validity:</span> The K-ETA is valid for
          multiple entries for up to 3 years.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Category 3: Visa Required
        </v-card-title>
        <v-card-text class="text-body">
          If your nationality does not have a visa-waiver agreement with South
          Korea (as in Category 1 and 2), you must obtain a visa in advance.
          This includes (but is not limited to) China, India, Pakistan, Egypt,
          and Ethiopia.
          <br /><br />
          For accurate and up-to-date information, we strongly recommend that
          you contact the Embassy or Consulate of the Republic of Korea in your
          country and confirm the specific documents required for your visa
          application. You may also have a look at
          <a
            href="https://www.k-eta.go.kr/portal/guide/viewetaalification.do"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >K-ETA</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/Visa_policy_of_South_Korea#Visa_exemption"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >Wikipedia</a
          >.
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Invitation Letter for Visa Application
        </v-card-title>
        <v-card-text class="text-body">
          For attendees who require a formal visa, the ISMIR 2025 organizing
          committee can provide an official invitation letter to support your
          application.
          <br /><br />
          Please note that you must complete your conference registration before
          requesting an invitation letter. The responsibility and cost of
          obtaining a visa rest solely with the participant.
          <br /><br />
          <span class="highlight-text"
            >How to Request an Invitation Letter (Category 3):</span
          >
          <br />
          To avoid delays, we advise all participants to begin the visa
          application process at least one month prior to the planned departure,
          as processing times may vary by country and individual circumstances.
          For additional reference, please consult the official website of the
          Ministry of Foreign Affairs of the Republic of Korea:
          <a
            href="https://www.visa.go.kr/openPage.do?LLANG=EN&MENU_ID=10105"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >Korea Visa Portal</a
          >
          <br /><br />
          Once you have completed your registration for ISMIR 2025, you may
          request an official invitation letter by emailing the conference
          secretariat. In your email, please include the following information
          exactly as it appears on your passport and registration:
          <br /><br />
          <ul class="dot-list">
            <li>ISMIR 2025 registration number</li>
            <li>First name</li>
            <li>Last name</li>
            <li>Affiliation</li>
            <li>Contact number (with country code)</li>
            <li>Nationality</li>
            <li>Gender</li>
            <li>Date of birth</li>
            <li>Passport number</li>
            <li>Date of entry to Korea</li>
            <li>Date of departure from Korea</li>
          </ul>
          <br />
          Please ensure that all details are accurate. Invitation letters will
          be issued via email after verification of your information
          <br /><br />
          <span class="highlight-text">Email:</span>
          <a
            href="mailto:ismir.korea@themiceter.com"
            style="color: #1487c8; text-decoration: underline"
          >
            ismir.korea@themiceter.com
          </a>
        </v-card-text>
        <br />
        <v-divider></v-divider>
        <br />
      </v-card>

      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          Disclaimer
        </v-card-title>
        <v-card-text class="text-body">
          This information is provided as a guide based on policies in effect
          for September 2025. Visa and entry policies can change. We strongly
          recommend all attendees verify the latest requirements with their
          local Embassy of the Republic of Korea or on the official government
          websites (e.g.,
          <a
            href="http://www.k-eta.go.kr/"
            target="_blank"
            style="color: #1487c8; text-decoration: underline"
            >www.k-eta.go.kr</a
          >) closer to their travel dates. The ISMIR 2025 organizers are not
          responsible for visa-related issues. <br /><br />
        </v-card-text>
      </v-card>
      <br /><br /><br />
    </v-col>
  </v-row>
</template>

<script>
import VisaGuideImg from "@/assets/Visa_Entry Guide.png";

export default {
  components: {},
  data() {
    return {
      VisaGuideImg,
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

.numbered-list {
  list-style-type: decimal;
  font-size: 18px;
  padding-left: 40px;
  line-height: 1.8;
}

.regions-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.region-group {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e9ecef;
}

.region-title {
  font-size: 16px;
  font-weight: bold;
  color: #004191;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.country-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.country-chip {
  background: #ffffff;
  border: 1px solid #004191;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #004191;
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

.highlight-text {
  color: #004191;
  font-weight: bold;
}

.visa-guide-image {
  border-radius: 8px;
  max-height: 600px;
  width: 80%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .regions-container {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .region-group {
    padding: 12px;
  }

  .region-title {
    font-size: 15px;
  }

  .country-chip {
    font-size: 13px;
    padding: 5px 10px;
  }

  .visa-guide-image {
    max-height: 400px;
  }
}
</style>
