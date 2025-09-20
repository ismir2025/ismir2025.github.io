<template>
  <v-row justify="center" id="k-culture-night">
    <v-col cols="12" md="8">
      <!-- ===================== K-Culture Night Introduction ===================== -->
      <v-card elevation="2" class="intro-card pa-6 my-6">
        <v-img
          src="@/assets/KCultureNight/Experience K-Culture Night.png"
          alt="Experience K-Culture Night"
          contain
        ></v-img>
        <v-card-text class="intro-text mb-4">
          In recent years, Korean culture—often described as the "K-Wave" or
          Hallyu—has attracted remarkable global attention, from blockbuster
          dramas such as Squid Game to the worldwide success of K-pop and the
          recent sensation of KPop Demon Hunters. As local organizers, we find
          it both fascinating and somewhat surreal to see aspects of our
          everyday culture presented on the world stage with such enthusiasm.
        </v-card-text>

        <v-card-text class="intro-text mb-4">
          This ISMIR is the very first ISMIR hosted in Korea, and the local
          organizers are delighted to commemorate this occasion with a special
          social event. Students from KAIST's MAC Lab and Sogang University's
          MALer Lab have prepared K-Culture Night, an opportunity to experience
          Korea's diverse cultural heritage in a festive and engaging setting.
        </v-card-text>

        <v-card-text class="intro-text highlight-box mb-4">
          During K-Culture Night, participants can enjoy a wide range of
          activities, from folk games and traditional instruments to Korean
          street foods and traditional alcoholic drinks. By joining the games
          and activities, you can earn coins to redeem for food and drinks.
        </v-card-text>
      </v-card>

      <br />

      <!-- ===================== K-Culture Night Activities ===================== -->
      <v-card elevation="3" class="activities-card pa-6 my-6">
        <!-- Traditional Instruments Section -->
        <div
          class="activity-section enhanced-section mb-6"
          id="traditional-instruments"
        >
          <v-card-title class="text-h5 mb-3 font-weight-bold activity-title">
            Learning Korean Traditional Instruments
          </v-card-title>
          <div class="activity-images mb-4">
            <v-row justify="center">
              <v-col cols="12">
                <v-img
                  src="@/assets/KCultureNight/LearningKoreanTraditionalInstruments.png"
                  alt="Learning Korean Traditional Instruments"
                  class="rounded-lg traditional-instruments-large"
                  contain
                ></v-img>
              </v-col>
            </v-row>
          </div>
          <v-card-title class="activity-type mb-2">
            Hands-on Learning Experience
          </v-card-title>

          <v-card-text class="section-description mb-3">
            Discover the beautiful sounds of Korean traditional instruments
            through guided learning sessions. Our instructors will introduce you
            to the unique characteristics and playing techniques of these
            culturally significant instruments.
          </v-card-text>

          <div class="instruments-info mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Featured Instruments
            </v-card-title>
            <v-card-text class="instruments-content">
              <div class="instrument-item mb-3">
                Experience the melodic sounds of traditional Korean string and
                wind instruments, including the gayageum (가야금), haegeum
                (해금), and daegeum (대금). Learn basic playing techniques and
                understand the cultural significance of these instruments in
                Korean music history.
              </div>
            </v-card-text>
          </div>
        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Korean Folk Games Section -->
        <div class="activity-section enhanced-section mb-6" id="folk-games">
          <v-card-title class="text-h5 mb-3 font-weight-bold activity-title">
            Korean Folk Games
          </v-card-title>
          <div class="activity-images mb-4">
            <v-row justify="center">
              <v-col cols="12" md="10">
                <v-img
                  src="@/assets/KCultureNight/KoreanFolkGames.png"
                  alt="Korean Folk Games"
                  class="rounded-lg horizontal-image"
                  contain
                ></v-img>
              </v-col>
            </v-row>
          </div>
          <v-card-title class="activity-type mb-2">
            Interactive Games
          </v-card-title>

          <v-card-text class="section-description mb-3">
            Experience traditional Korean games that have been enjoyed for
            generations. These interactive activities offer a fun way to connect
            with Korean cultural heritage while earning coins for food and
            drinks.
          </v-card-text>

          <div class="games-list mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Available Games
            </v-card-title>
            <v-card-text class="games-content">
              <div class="game-item mb-3">
                <strong>Ddakji-Chigi (딱지치기)</strong><br />
                A traditional paper-flipping game where players try to flip
                their opponent's folded paper tile by throwing their own.
              </div>
              <div class="game-item mb-3">
                <strong>Jegi-Chagi (제기차기)</strong><br />
                A traditional Korean game similar to hacky sack, where players
                keep a shuttlecock-like object in the air using their feet.
              </div>
              <div class="game-item mb-3">
                <strong>Tuho (투호, Pitch-pot)</strong><br />
                An ancient Korean game where players throw arrows into a
                narrow-necked jar from a set distance.
              </div>
              <div class="game-item mb-3">
                <strong>Alkkagi (알까기, Stone flicking)</strong><br />
                A traditional game involving flicking stones or marbles to hit
                targets or knock opponents' pieces out of a designated area.
              </div>
            </v-card-text>
          </div>
        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Cultural Activities Section -->
        <div
          class="activity-section enhanced-section mb-6"
          id="cultural-activities"
        >
          <v-card-title class="text-h5 mb-3 font-weight-bold activity-title">
            Cultural Learning Activities
          </v-card-title>

          <v-row align="start">
            <!-- 이미지 (왼쪽) -->
            <v-col cols="12" md="5">
              <v-img
                src="@/assets/KCultureNight/CulturalLearningActivities.png"
                alt="Cultural Learning Activities"
                class="rounded-lg square-vertical-image"
                contain
              ></v-img>
            </v-col>

            <!-- 텍스트 콘텐츠 (오른쪽) -->
            <v-col cols="12" md="7" class="d-flex flex-column">
              <v-card-title class="activity-type mb-2">
                Interactive Cultural Experience
              </v-card-title>

              <v-card-text class="section-description mb-3">
                Immerse yourself in Korean culture through hands-on learning
                experiences. These activities provide an authentic introduction
                to Korean language and traditional attire.
              </v-card-text>

              <div class="cultural-activities-list flex-grow-1">
                <v-card-title class="text-h6 mb-3 font-weight-bold">
                  Available Activities
                </v-card-title>
                <v-card-text class="activities-content flex-grow-1">
                  <div class="activity-item mb-3">
                    <strong>Learning Hangul, the Korean Alphabet</strong><br />
                    Discover the elegant and scientific Korean writing system.
                    Learn the basic characters and understand the principles
                    behind Hangul's creation, recognized by UNESCO for its
                    linguistic excellence.
                  </div>
                  <div class="activity-item mb-3">
                    <strong>Trying on Hanbok, Korean Traditional Clothes</strong
                    ><br />
                    Experience the beauty of Korean traditional clothing. Try on
                    authentic hanbok and learn about the cultural significance,
                    colors, and styles of these elegant garments that reflect
                    Korea's rich heritage.
                  </div>
                </v-card-text>
              </div>
            </v-col>
          </v-row>
        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Korean Street Foods Section -->
        <div class="activity-section enhanced-section mb-6" id="street-foods">
          <v-card-title class="text-h5 mb-3 font-weight-bold activity-title">
            Korean Street Foods & Traditional Beverages
          </v-card-title>

          <v-row align="start">
            <!-- 이미지 (왼쪽) -->
            <v-col cols="12" md="5">
              <v-img
                src="@/assets/KCultureNight/KoreaTraditionalTavern.png"
                alt="Korea Traditional Tavern Menu"
                class="rounded-lg tavern-image"
                contain
              ></v-img>
            </v-col>

            <!-- 텍스트 콘텐츠 (오른쪽) -->
            <v-col cols="12" md="7" class="d-flex flex-column">
              <v-card-title class="activity-type mb-2">
                Authentic Korean Cuisine Experience
              </v-card-title>

              <v-card-text class="section-description mb-3">
                Savor the authentic flavors of Korea through our carefully
                curated selection of street foods and traditional beverages. Use
                the coins you earn from participating in games and activities to
                enjoy these delicious treats.
              </v-card-text>

              <div class="food-beverages-content flex-grow-1">
                <div class="combined-menu mb-4">
                  <v-card-title class="text-h6 mb-3 font-weight-bold">
                    Korean Street Foods & Traditional Beverages
                  </v-card-title>
                  <v-card-text class="menu-content">
                    <div class="menu-section mb-3">
                      <div class="menu-item mb-2">
                        <strong>Dakgangjeong (닭강정)</strong> - Korean sweet,
                        crunchy fried chicken
                      </div>
                      <div class="menu-item mb-2">
                        <strong>Gimbap (김밥)</strong> - Seaweed Rice Roll
                      </div>
                      <div class="menu-item mb-2">
                        <strong>Ramyeon (라면)</strong> - Instant Noodles
                      </div>
                      <div class="menu-item mb-2">
                        <strong>Tteokbokki (떡볶이)</strong> - Spicy rice cake
                      </div>
                      <div class="menu-item mb-2">
                        <strong>Soondae (순대)</strong> - Blood Sausage
                      </div>
                      <div class="menu-item mb-2">
                        <strong>Twigim (튀김)</strong> - Deep-Fried Dishes
                      </div>
                    </div>
                    <div class="menu-section">
                      <div class="menu-item mb-2">
                        <strong>Traditional Korean Desserts and Drinks</strong>
                      </div>
                      <div class="menu-item mb-2">
                        <strong>Traditional Korean Alcohol Beverages</strong>
                      </div>
                    </div>
                  </v-card-text>
                </div>
              </div>
            </v-col>
          </v-row>
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
/* 한국 전통 테마 - 메인 카드 스타일 */
.intro-card {
  background: linear-gradient(135deg, #f4ecdc 0%, #e0d5c1 100%);
  border-radius: 16px;
  border: 1px solid rgba(202, 186, 170, 0.3);
  box-shadow: 0 8px 32px rgba(202, 186, 170, 0.2);
  transition: all 0.3s ease;
}

.intro-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(202, 186, 170, 0.3);
  background: linear-gradient(135deg, #f4ecdc 0%, #dbcbaa 100%);
}

.activities-card {
  background: linear-gradient(135deg, #f4ecdc 0%, #e0d5c1 100%);
  border-radius: 20px;
  border: 1px solid rgba(202, 186, 170, 0.3);
  box-shadow: 0 10px 40px rgba(202, 186, 170, 0.15);
  position: relative;
  overflow: hidden;
}

.activities-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #8b4513, #cd853f, #d2b48c, #deb887);
}

/* 텍스트 스타일 개선 */
.intro-text {
  font-size: 18px;
  line-height: 1.7;
  color: #5d4e37;
  font-weight: 400;
}

.highlight-box {
  background: linear-gradient(
    135deg,
    rgba(139, 69, 19, 0.08) 0%,
    rgba(205, 133, 63, 0.08) 100%
  );
  border-radius: 12px;
  padding: 24px;
  border-left: 4px solid #8b4513;
  margin: 20px 0;
  position: relative;
  backdrop-filter: blur(5px);
}

.highlight-box::before {
  content: "🏮";
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 20px;
}

.section-description {
  font-size: 16px;
  line-height: 1.6;
  color: #6b4423;
  font-weight: 400;
}

.activity-section {
  background: linear-gradient(
    135deg,
    rgba(244, 236, 220, 0.9) 0%,
    rgba(224, 213, 193, 0.8) 100%
  );
  border-radius: 16px;
  padding: 32px 24px;
  margin-bottom: 40px;
  border: 1px solid rgba(202, 186, 170, 0.2);
  box-shadow: 0 4px 20px rgba(139, 69, 19, 0.1);
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.enhanced-section {
  border-left: 4px solid transparent;
  background-image: linear-gradient(
      135deg,
      rgba(244, 236, 220, 0.95) 0%,
      rgba(219, 203, 170, 0.9) 100%
    ),
    linear-gradient(90deg, #8b4513, #cd853f);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.enhanced-section:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(139, 69, 19, 0.15);
  background-image: linear-gradient(
      135deg,
      rgba(244, 236, 220, 0.98) 0%,
      rgba(219, 203, 170, 0.95) 100%
    ),
    linear-gradient(90deg, #8b4513, #d2b48c);
}

.activity-images {
  width: 100%;
  margin: 20px auto;
  position: relative;
}

.activity-images .v-img {
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.activity-images .v-img:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
}

/* 가로형 이미지 (1440*792) - Korean Folk Games */
.horizontal-image {
  width: 100%;
  max-height: 500px;
}

/* 한국 전통악기 이미지 - 큰 사이즈 */
.traditional-instruments-large {
  width: 100%;
  max-height: 700px;
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

.image-caption {
  text-align: center;
  font-weight: bold;
  color: #004191;
  margin-top: 8px;
  font-size: 14px;
}

.activity-title {
  color: #8b4513 !important;
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 16px !important;
  position: relative;
  display: inline-block;
}

.activity-title::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #8b4513, #cd853f);
  border-radius: 2px;
}

.activity-type {
  color: #a0522d !important;
  font-style: italic;
  font-size: 1.2rem !important;
  font-weight: 600 !important;
  background: linear-gradient(
    135deg,
    rgba(205, 133, 63, 0.15) 0%,
    rgba(210, 180, 140, 0.1) 100%
  );
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  border: 1px solid rgba(205, 133, 63, 0.3);
}

.games-list,
.instruments-info,
.food-menu,
.beverages-menu,
.combined-menu {
  background: linear-gradient(
    135deg,
    rgba(244, 236, 220, 0.85) 0%,
    rgba(224, 213, 193, 0.9) 100%
  );
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
  border: 1px solid rgba(202, 186, 170, 0.3);
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.08);
  backdrop-filter: blur(10px);
  position: relative;
}

.games-list::before,
.instruments-info::before,
.combined-menu::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #8b4513, transparent);
  border-radius: 16px 16px 0 0;
}

.cultural-activities-list {
  background: linear-gradient(
    135deg,
    rgba(244, 236, 220, 0.85) 0%,
    rgba(224, 213, 193, 0.9) 100%
  );
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(202, 186, 170, 0.3);
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.08);
  backdrop-filter: blur(10px);
  position: relative;
}

.cultural-activities-list::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #cd853f, transparent);
  border-radius: 16px 16px 0 0;
}

.food-beverages-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.game-item,
.instrument-item,
.activity-item,
.food-item,
.beverage-item,
.menu-item {
  line-height: 1.7;
  padding: 12px 0;
  border-bottom: 1px solid rgba(233, 236, 239, 0.5);
  transition: all 0.3s ease;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.5);
}

.game-item:hover,
.instrument-item:hover,
.activity-item:hover,
.food-item:hover,
.beverage-item:hover,
.menu-item:hover {
  background: rgba(139, 69, 19, 0.08);
  transform: translateX(8px);
  border-color: rgba(139, 69, 19, 0.2);
  color: #8b4513;
}

.game-item:last-child,
.instrument-item:last-child,
.activity-item:last-child,
.food-item:last-child,
.beverage-item:last-child,
.menu-item:last-child {
  border-bottom: none;
}

.menu-section:last-child .menu-item:last-child {
  border-bottom: none;
}

.text-body {
  font-size: 18px;
  line-height: 1.7;
  white-space: normal;
  overflow-wrap: break-word;
  color: #5d4e37;
  font-weight: 400;
}

.v-card-title {
  white-space: normal;
  overflow-wrap: break-word;
  font-weight: 600;
}

.v-card-title.text-h6 {
  color: #8b4513;
  font-weight: 700;
  margin-bottom: 12px;
  position: relative;
  display: inline-block;
}

.v-card-title.text-h6::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 40px;
  height: 2px;
  background: #cd853f;
  border-radius: 1px;
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
  .intro-card,
  .activities-card {
    margin: 16px 0;
    padding: 20px;
  }

  .activity-section {
    padding: 24px 16px;
    margin-bottom: 32px;
  }

  .enhanced-section {
    border-left-width: 3px;
  }

  .horizontal-image {
    max-height: 300px;
  }

  .traditional-instruments-large {
    max-height: 450px;
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

  .image-caption {
    font-size: 12px;
  }

  .activity-title {
    font-size: 1.2rem !important;
  }

  .activity-type {
    font-size: 1rem !important;
    padding: 6px 12px;
  }

  .intro-text,
  .section-description {
    font-size: 16px;
  }

  .games-list,
  .instruments-info,
  .combined-menu,
  .cultural-activities-list {
    padding: 16px;
    margin: 16px 0;
  }

  .game-item,
  .instrument-item,
  .activity-item,
  .menu-item {
    padding: 10px 12px;
    margin-bottom: 6px;
  }

  .highlight-box {
    padding: 16px;
    margin: 16px 0;
  }
}

.section-header {
  background-color: #e9ecef;
  padding: 8px 0;
}

/* Experience Highlights Styles - 한국 전통 테마 */
.experience-highlights {
  background: linear-gradient(
    135deg,
    rgba(244, 236, 220, 0.95) 0%,
    rgba(224, 213, 193, 0.9) 50%,
    rgba(219, 203, 170, 0.85) 100%
  );
  backdrop-filter: blur(10px);
  border: 2px solid rgba(139, 69, 19, 0.2);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
}

.highlights-container {
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
  background: linear-gradient(90deg, transparent, #8b4513, transparent);
  border-radius: 1px;
}

.main-title {
  font-size: 24px;
  font-weight: 700;
  color: #8b4513;
  letter-spacing: 0.3px;
  margin: 0;
  text-align: center;
  position: relative;
}

.experience-image-container {
  width: 100%;
  margin: 32px 0;
}

.experience-overview-image {
  width: 100%;
  max-height: 600px;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 32px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.activity-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 32px 16px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.activity-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    transparent 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.activity-card:hover::before {
  opacity: 1;
}

.activity-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.5);
}

.activity-icon {
  font-size: 32px;
  margin-bottom: 12px;
  display: block;
}

.activity-name {
  font-size: 15px;
  font-weight: 700;
  color: white;
  line-height: 1.4;
  letter-spacing: 0.2px;
}

/* 추가 시각적 개선 요소들 */
.v-divider {
  margin: 40px 0 !important;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(139, 69, 19, 0.4),
    transparent
  ) !important;
  height: 2px !important;
  border-radius: 1px;
}

/* 스크롤 애니메이션을 위한 기본 스타일 */
.activity-section {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease;
}

/* 강조된 텍스트 스타일 */
strong {
  color: #8b4513;
  font-weight: 600;
}

/* 한국 전통 색상 팔레트 - 따뜻한 그라데이션 */
.tag-blue {
  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
}

.tag-coral {
  background: linear-gradient(135deg, #cd853f 0%, #d2b48c 100%);
}

.tag-sky {
  background: linear-gradient(135deg, #deb887 0%, #f5deb3 100%);
}

.tag-yellow {
  background: linear-gradient(135deg, #d2b48c 0%, #f4a460 100%);
}

.tag-green {
  background: linear-gradient(135deg, #bc8f8f 0%, #cd853f 100%);
}

.tag-purple {
  background: linear-gradient(135deg, #a0522d 0%, #8b4513 100%);
}

.elegant-subtitle {
  text-align: center;
  margin-top: 32px;
}

.journey-text {
  font-size: 18px;
  font-weight: 600;
  color: #8b4513;
  margin-bottom: 20px;
  letter-spacing: 0.2px;
  line-height: 1.5;
}

.experience-keywords {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.experience-keywords span {
  font-size: 14px;
  font-weight: 600;
  color: #8b4513;
  padding: 6px 12px;
  background: rgba(139, 69, 19, 0.08);
  border-radius: 20px;
  border: 1px solid rgba(139, 69, 19, 0.15);
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
}

.experience-keywords span:hover {
  background: rgba(139, 69, 19, 0.15);
  color: #5d4e37;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .highlights-container {
    padding: 32px 20px;
  }

  .main-title {
    font-size: 20px;
  }

  .title-accent {
    width: 40px;
  }

  .experience-overview-image {
    max-height: 400px;
  }

  .activities-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    max-width: 400px;
  }

  .activity-card {
    padding: 20px 12px;
  }

  .activity-icon {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .activity-name {
    font-size: 12px;
  }

  .journey-text {
    font-size: 16px;
  }

  .experience-keywords {
    gap: 12px;
  }

  .experience-keywords span {
    font-size: 13px;
    padding: 5px 10px;
  }
}

@media (max-width: 480px) {
  .intro-card,
  .activities-card {
    margin: 12px 0;
    padding: 16px;
  }

  .activity-section {
    padding: 20px 12px;
    margin-bottom: 28px;
  }

  .activity-title {
    font-size: 1.1rem !important;
  }

  .activity-type {
    font-size: 0.9rem !important;
    padding: 4px 10px;
  }

  .intro-text,
  .section-description {
    font-size: 15px;
  }

  .games-list,
  .instruments-info,
  .combined-menu,
  .cultural-activities-list {
    padding: 12px;
    margin: 12px 0;
  }

  .highlight-box {
    padding: 12px;
    margin: 12px 0;
  }

  .activities-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .activity-card {
    padding: 16px 8px;
  }

  .activity-icon {
    font-size: 24px;
  }

  .activity-name {
    font-size: 11px;
  }
}
</style>
