<template>
  <v-row justify="center" id="banquet-jam-session">
    <v-col cols="12" md="8">
      <!-- ===================== Banquet & Jam Session Introduction ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <!-- Conference Header -->
        <div class="conference-header mb-5">
          <div class="header-container">
            <div class="elegant-title mb-4">
              <div class="title-accent"></div>
              <h3 class="main-title">
                ISMIR 2025 Conference Banquet & Jam Session
              </h3>
              <div class="title-accent"></div>
            </div>

            <div class="conference-subtitle text-center mb-4">
              <p class="subtitle-text">
                🍗 Official Conference Dinner 🍱 • 🎸 Traditional Jam Session 🥁
              </p>
              <p class="event-date">
                September 24th, 2025 (Wednesday) • 7:30 PM - 11:45 PM
              </p>
              <p class="venue-text">Crystal Ballroom, ICC Hotel • Daejeon</p>
            </div>
          </div>
        </div>

        <v-card-text class="text-body mb-4">
          All ISMIR 2025 attendees and sponsors are cordially invited to join us
          for the official conference banquet and the legendary ISMIR jam
          session at the ICC Hotel on September 24th (Wednesday of ISMIR week).
        </v-card-text>

        <v-card-text class="text-body mb-4" id="requirements">
          <strong>Important Notice:</strong> Attendees are required to wear
          their conference badge to enter the event. Guests without their
          conference badge will not be permitted to attend.
        </v-card-text>
      </v-card>

      <br />

      <!-- ===================== Event Details ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        <!-- Event Details Section -->
        <div class="activity-section mb-6" id="event-details">
          <v-card-title class="text-h5 mb-3 font-weight-bold activity-title">
            Event Details
          </v-card-title>

          <v-card-title class="activity-type mb-2">
            Conference Dinner & Jam Session
          </v-card-title>

          <!-- Event Image -->
          <div class="activity-images mb-4">
            <v-row justify="center">
              <v-col cols="12" md="10">
                <v-img
                  src="@/assets/Banquet and Jam Session/image1.png"
                  alt="ISMIR 2025 Conference Banquet"
                  class="rounded-lg banquet-image"
                  contain
                ></v-img>
              </v-col>
            </v-row>
          </div>

          <div class="event-info mb-4">
            <v-card-text class="event-content">
              <div class="event-item mb-3">
                <strong>Date:</strong> September 24th, 2025 (Wednesday of ISMIR
                week)
              </div>
              <div class="event-item mb-3">
                <strong>Time:</strong> 7:30 PM - 11:45 PM
              </div>
              <div class="event-item mb-3" id="venue-info">
                <strong>Venue:</strong> 1F, Crystal ballroom, ICC Hotel
              </div>
              <div class="event-item mb-3">
                <strong>Address:</strong> 55 Doryong-dong, Expo-ro 123-gil,
                Yuseong-gu, Daejeon
              </div>
            </v-card-text>
          </div>
        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Transportation Section -->
        <div class="activity-section mb-6" id="transportation">
          <v-card-title class="text-h5 mb-3 font-weight-bold activity-title">
            Transportation
          </v-card-title>

          <v-card-title class="activity-type mb-2">
            Shuttle Bus Service
          </v-card-title>

          <v-card-text class="text-body mb-3">
            We will have shuttle buses taking attendees to the event and
            returning them to their hotels at the end of the evening.
          </v-card-text>

          <div class="transportation-info mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Departure Schedule
            </v-card-title>
            <v-card-text class="transportation-content">
              <div class="transport-item mb-3">
                <strong>Pickup Location:</strong> Main conference venue (KAIST
                auditorium)
              </div>
              <div class="transport-item mb-3">
                <strong>Departure Times:</strong> 6:30 PM and 7:00 PM
              </div>
              <div class="transport-item mb-3">
                <strong>Number of Buses:</strong> Three shuttle buses available
              </div>
            </v-card-text>
          </div>

          <div class="return-info mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Return Schedule
            </v-card-title>
            <v-card-text class="return-content">
              <div class="return-item mb-3">
                <strong>Return Time:</strong> Approximately 12:00 AM (end of
                event)
              </div>
              <div class="return-item mb-3">
                <strong>Destinations:</strong>
                <ul class="mt-2">
                  <li>Dunsan area (Hotel Graytone)</li>
                  <li>Yuseong area (Hotel Interciti & Ramada by Wyndham)</li>
                </ul>
              </div>
            </v-card-text>
          </div>
        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Jam Session Section -->
        <div class="activity-section mb-6" id="jam-session">
          <v-card-title class="text-h5 mb-3 font-weight-bold activity-title">
            ISMIR Jam Session
          </v-card-title>

          <v-card-title class="activity-type mb-2">
            Message from Jam Session Chairs
          </v-card-title>

          <!-- Jam Session Image -->
          <div class="activity-images mb-4">
            <v-row justify="center">
              <v-col cols="12" md="10">
                <v-img
                  src="@/assets/Banquet and Jam Session/image2.png"
                  alt="ISMIR Jam Session"
                  class="rounded-lg jam-session-image"
                  contain
                ></v-img>
              </v-col>
            </v-row>
          </div>

          <v-card-text class="text-body mb-3">
            We on the ISMIR Jam Session team are pleased to announce that our
            infamous ISMIR jam will happen right after the conference dinner! As
            in past years, the jam session is a quintessential part of the ISMIR
            tradition, where we welcome all sorts of musical performances.
          </v-card-text>

          <div class="equipment-info mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Available Equipment
            </v-card-title>
            <v-card-text class="equipment-content">
              <div class="equipment-item mb-2">• 2 guitars</div>
              <div class="equipment-item mb-2">• 1 bass guitar</div>
              <div class="equipment-item mb-2">• Drums</div>
              <div class="equipment-item mb-2">• 2 electric keyboards</div>
              <div class="equipment-item mb-2">• Acoustic piano</div>
            </v-card-text>
          </div>

          <div class="signup-info mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Sign Up Information
            </v-card-title>
            <v-card-text class="signup-content">
              <div class="signup-item mb-3">
                Please use the signup sheet to suggest songs and sign up for
                playing in different bands!
              </div>
              <div class="signup-item mb-3">
                <strong>ISMIR 2025 Jam Signup Spreadsheet</strong>
              </div>
            </v-card-text>
          </div>

          <!-- Jam Session Signup Cards -->
          <div class="signup-cards mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Current Song List & Band Members
            </v-card-title>

            <div class="songs-grid">
              <div
                v-for="(song, index) in jamSignups"
                :key="index"
                class="song-card"
              >
                <div class="song-header">
                  <h4 class="song-name">{{ song.songTitle }}</h4>
                  <p class="artist-name" v-if="song.artist">
                    {{ song.artist }}
                  </p>
                </div>

                <div class="band-lineup">
                  <div v-if="song.guitar1" class="member-badge guitar">
                    <span class="instrument-emoji">🎸</span>
                    <span class="member-name">{{ song.guitar1 }}</span>
                  </div>
                  <div v-if="song.guitar2" class="member-badge guitar">
                    <span class="instrument-emoji">🎸</span>
                    <span class="member-name">{{ song.guitar2 }}</span>
                  </div>
                  <div v-if="song.bass" class="member-badge bass">
                    <span class="instrument-emoji">🎸</span>
                    <span class="member-name">{{ song.bass }}</span>
                  </div>
                  <div v-if="song.drums" class="member-badge drums">
                    <span class="instrument-emoji">🥁</span>
                    <span class="member-name">{{ song.drums }}</span>
                  </div>
                  <div v-if="song.vocals" class="member-badge vocals">
                    <span class="instrument-emoji">🎤</span>
                    <span class="member-name">{{ song.vocals }}</span>
                  </div>
                  <div
                    v-if="song.keyboard"
                    class="member-badge keyboard"
                    :class="{ needed: song.keyboard === 'needed!' }"
                  >
                    <span class="instrument-emoji">🎹</span>
                    <span class="member-name">{{ song.keyboard }}</span>
                  </div>
                  <div v-if="song.piano" class="member-badge piano">
                    <span class="instrument-emoji">🎹</span>
                    <span class="member-name">{{ song.piano }}</span>
                  </div>
                  <div v-if="song.others" class="member-badge others">
                    <span class="instrument-emoji">🎷</span>
                    <span class="member-name">{{ song.others }}</span>
                  </div>
                </div>
              </div>
            </div>

            <v-card-text class="signup-footer mt-4">
              <div class="signup-item mb-3">
                <em>Make sure to not miss this titanic event!</em>
              </div>
            </v-card-text>
          </div>

          <div class="chairs-info mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Jam Session Chairs
            </v-card-title>
            <v-card-text class="chairs-content">
              <div class="chair-item mb-2">Zachary Novack</div>
              <div class="chair-item mb-2">Sebastian Stober</div>
              <div class="chair-item mb-2">Keunwoo Choi</div>
              <div class="chair-title mt-2">
                <em>ISMIR2025 Jam Session Chairs</em>
              </div>
            </v-card-text>
          </div>
        </div>
      </v-card>

      <br /><br /><br />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      eventDetails: {
        date: "September 24th, 2025",
        time: "7:30 PM - 11:45 PM",
        venue: "1F, Crystal ballroom, ICC Hotel",
        address: "55 Doryong-dong, Expo-ro 123-gil, Yuseong-gu, Daejeon",
      },
      transportation: {
        pickupLocation: "Main conference venue (KAIST auditorium)",
        departureTimes: ["6:30 PM", "7:00 PM"],
        returnTime: "Approximately 12:00 AM",
        destinations: [
          "Dunsan area (Hotel Graytone)",
          "Yuseong area (Hotel Interciti & Ramada by Wyndham)",
        ],
      },
      jamSession: {
        equipment: [
          "2 guitars",
          "1 bass guitar",
          "Drums",
          "2 electric keyboards",
          "Acoustic piano",
        ],
        chairs: ["Zachary Novack", "Sebastian Stober", "Keunwoo Choi"],
      },
      jamHeaders: [
        {
          text: "Song & Artist",
          value: "songTitle",
          width: "40%",
          sortable: false,
          class: "song-header",
        },
        {
          text: "Band Members",
          value: "members",
          width: "60%",
          sortable: false,
          class: "members-header",
        },
      ],
      jamSignups: [
        {
          songTitle: "Piano Concerto No. 2 (excerpt; any mvt)",
          artist: "Sergei Rachmoninoff",
          keyboard: "needed!",
          piano: "Tao-Tao He",
          notes: "",
        },
        {
          songTitle: "Seek and Destroy",
          artist: "Metallica",
          guitar1: "Marijn",
          vocals: "Jose",
          notes: "",
        },
        {
          songTitle: "Chamleon",
          artist: "Herbie Hancock",
          bass: "Geoffroy Peeters",
          drums: "Chih-Cheng Chang",
          vocals: "Albin",
          keyboard: "Michael Gancz / Christof Weiß",
          notes: "",
        },
        {
          songTitle: "Freedom",
          artist: "Rage against the Machine",
          drums: "Filip Korzeniowski",
          vocals: "Albin",
          notes: "",
        },
        {
          songTitle: "Rock 'n' Roll Star",
          artist: "Oasis",
          guitar1: "Ju-Chiang Wang",
          guitar2: "Geoffroy Peeters",
          bass: "Cheng-i",
          drums: "Sebastian Stober",
          vocals: "Geoffroy ?",
          notes: "",
        },
        {
          songTitle: "Learn to Fly",
          artist: "Foo Fighters",
          guitar1: "Ju-Chiang Wang",
          guitar2: "Marijn",
          bass: "Cheng-i",
          drums: "Sebastian Stober",
          vocals: "Jose",
          keyboard: "Michael Gancz",
          notes: "",
        },
        {
          songTitle: "Take The Power Back",
          artist: "Rage against the Machine",
          drums: "Filip Korzeniowski",
          notes: "",
        },
        {
          songTitle: "Ma mère l'Oye (Mother Goose), M.60",
          artist: "M. Ravel",
          piano: "Jiyun Park, Sein Lee (4 hands)",
          notes: "",
        },
        {
          songTitle: "Sir Duke",
          artist: "Stevie Wonder",
          others: "robot sax quartet ensemble (soprano, alto, tenor, baritone)",
          notes: "",
        },
        {
          songTitle: "April in Paris",
          artist: "Count Basie",
          others: "robot sax quartet ensemble (soprano, alto, tenor, baritone)",
          notes: "",
        },
        {
          songTitle: "Supercalifragilisticexpialidocious",
          artist: "Robert Bernard Sherman",
          others: "robot sax quartet ensemble (soprano, alto, tenor, baritone)",
          notes: "",
        },
        {
          songTitle: "Friday I'm in Love",
          artist: "The Cure",
          guitar1: "Ju-Chiang Wang",
          bass: "Chih-Cheng Chang",
          vocals: "Ju-Chiang Wang",
          notes: "",
        },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100; // 상단에서 100px 아래로 스크롤
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
.activity-section {
  border-left: 4px solid #004191;
  padding-left: 20px;
  margin-bottom: 30px;
}

.activity-images {
  width: 100%;
  margin: 0 auto;
}

/* 가로형 이미지 (1440*792) - Korean Folk Games */
.horizontal-image {
  width: 100%;
  max-height: 500px;
}

/* 세로형 정사각형에 가까운 이미지 (1080*1152) - Traditional Tavern */
.tavern-image {
  width: 100%;
  max-height: 600px;
}

/* 세로형 이미지 (720*1152) - Cultural Learning Activities */
.square-vertical-image {
  width: 100%;
  max-height: 650px;
}

/* 좁은 세로형 이미지 (360*1080) - Traditional Instruments */
.narrow-vertical-image {
  width: 100%;
  max-height: 700px;
}

/* Banquet 이미지 스타일 */
.banquet-image {
  width: 100%;
  max-height: 500px;
}

/* Jam Session 이미지 스타일 */
.jam-session-image {
  width: 100%;
  max-height: 500px;
}

.image-caption {
  text-align: center;
  font-weight: bold;
  color: #004191;
  margin-top: 8px;
  font-size: 14px;
}

.activity-title {
  color: #004191 !important;
  font-size: 1.3rem !important;
}

.activity-type {
  color: #ed5e60 !important;
  font-style: italic;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
}

.event-info,
.transportation-info,
.return-info,
.equipment-info,
.signup-info,
.signup-cards,
.chairs-info {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.event-item,
.transport-item,
.return-item,
.equipment-item,
.signup-item,
.chair-item {
  line-height: 1.6;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
}

.event-item:last-child,
.transport-item:last-child,
.return-item:last-child,
.equipment-item:last-child,
.signup-item:last-child,
.chair-item:last-child {
  border-bottom: none;
}

.chair-title {
  font-style: italic;
  color: #6c757d;
  text-align: center;
  margin-top: 12px;
}

/* Jam Session Cards Styles */
.songs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.song-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.song-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #004191, #ed5e60);
}

.song-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-color: #004191;
}

.song-header {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e9ecef;
}

.song-name {
  color: #004191;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.artist-name {
  color: #6c757d;
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  margin: 0;
}

.band-lineup {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.member-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.member-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.member-badge.guitar {
  background-color: rgba(237, 94, 96, 0.1);
  color: #ed5e60;
  border-color: rgba(237, 94, 96, 0.2);
}

.member-badge.bass {
  background-color: rgba(0, 65, 145, 0.1);
  color: #004191;
  border-color: rgba(0, 65, 145, 0.2);
}

.member-badge.drums {
  background-color: rgba(255, 193, 7, 0.1);
  color: #ff8f00;
  border-color: rgba(255, 193, 7, 0.2);
}

.member-badge.vocals {
  background-color: rgba(156, 39, 176, 0.1);
  color: #8e24aa;
  border-color: rgba(156, 39, 176, 0.2);
}

.member-badge.keyboard,
.member-badge.piano {
  background-color: rgba(76, 175, 80, 0.1);
  color: #43a047;
  border-color: rgba(76, 175, 80, 0.2);
}

.member-badge.others {
  background-color: rgba(255, 87, 34, 0.1);
  color: #f4511e;
  border-color: rgba(255, 87, 34, 0.2);
}

.member-badge.needed {
  background-color: rgba(255, 193, 7, 0.2);
  color: #ff8f00;
  border-color: rgba(255, 193, 7, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 193, 7, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);
  }
}

.instrument-emoji {
  font-size: 18px;
  margin-right: 4px;
  display: inline-block;
}

.member-name {
  font-weight: 600;
}

.signup-footer {
  text-align: center;
  border-top: 1px solid #e9ecef;
  padding-top: 16px;
  margin-top: 16px;
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

/* Media Section Containers */
.media-section {
  width: 100%;
  overflow: hidden;
}

.media-title {
  color: #004191 !important;
}

@media (max-width: 768px) {
  .activity-section {
    padding-left: 15px;
  }

  .horizontal-image {
    max-height: 300px;
  }

  .tavern-image {
    max-height: 400px;
  }

  .square-vertical-image {
    max-height: 450px;
  }

  .narrow-vertical-image {
    max-height: 500px;
  }

  .banquet-image {
    max-height: 350px;
  }

  .jam-session-image {
    max-height: 350px;
  }

  .image-caption {
    font-size: 12px;
  }

  .activity-title {
    font-size: 1.1rem !important;
  }

  .songs-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .song-card {
    padding: 20px;
  }

  .song-name {
    font-size: 18px;
  }

  .artist-name {
    font-size: 14px;
  }

  .band-lineup {
    gap: 8px;
  }

  .member-badge {
    font-size: 13px;
    padding: 6px 10px;
  }

  .instrument-emoji {
    font-size: 16px;
  }
}

.section-header {
  background-color: #e9ecef;
  padding: 8px 0;
}

/* Conference Header Styles - Professional & Elegant */
.conference-header {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(248, 249, 250, 0.9) 50%,
    rgba(233, 236, 239, 0.85) 100%
  );
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 65, 145, 0.15);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
}

.header-container {
  padding: 40px 32px;
  position: relative;
  z-index: 2;
}

.elegant-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 32px;
}

.title-accent {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #004191, transparent);
  border-radius: 1px;
}

.main-title {
  font-size: 28px;
  font-weight: 700;
  color: #004191;
  letter-spacing: 0.3px;
  margin: 0;
  text-align: center;
  position: relative;
}

.conference-subtitle {
  margin-top: 24px;
}

.subtitle-text {
  font-size: 20px;
  font-weight: 600;
  color: #ed5e60;
  margin-bottom: 16px;
  letter-spacing: 0.2px;
  line-height: 1.4;
}

.event-date {
  font-size: 18px;
  font-weight: 600;
  color: #004191;
  margin-bottom: 12px;
  letter-spacing: 0.1px;
}

.venue-text {
  font-size: 16px;
  font-weight: 500;
  color: #6c757d;
  margin-bottom: 0;
  letter-spacing: 0.1px;
}

@media (max-width: 768px) {
  .header-container {
    padding: 32px 20px;
  }

  .main-title {
    font-size: 22px;
  }

  .title-accent {
    width: 40px;
  }

  .subtitle-text {
    font-size: 18px;
  }

  .event-date {
    font-size: 16px;
  }

  .venue-text {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 24px 16px;
  }

  .main-title {
    font-size: 20px;
  }

  .subtitle-text {
    font-size: 16px;
  }

  .event-date {
    font-size: 14px;
  }

  .venue-text {
    font-size: 13px;
  }
}
</style>
