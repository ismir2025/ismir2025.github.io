<template>
  <v-row justify="center" id="k-culture-night">
    <v-col cols="12" md="8">


      <!-- ===================== K-Culture Night Introduction ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        
        <!-- Experience Highlights -->
        <div class="experience-highlights mb-5">
          <div class="highlights-container">
            <div class="elegant-title mb-4">
              <div class="title-accent"></div>
              <h3 class="main-title">Experience K-Culture Night</h3>
              <div class="title-accent"></div>
            </div>
            
            <div class="activities-grid">
              <div class="activity-card tag-blue" @click="scrollToSection('traditional-instruments')">
                <div class="activity-name">Traditional<br>Instruments</div>
              </div>
              <div class="activity-card tag-coral" @click="scrollToSection('folk-games')">
                <div class="activity-name">Folk<br>Games</div>
              </div>
              <div class="activity-card tag-sky" @click="scrollToSection('cultural-activities')">
                <div class="activity-name">Hanbok<br>Experience</div>
              </div>
              <div class="activity-card tag-yellow" @click="scrollToSection('street-foods')">
                <div class="activity-name">Street<br>Foods</div>
              </div>
              <div class="activity-card tag-green" @click="scrollToSection('cultural-activities')">
                <div class="activity-name">Korean<br>Alphabet</div>
              </div>
              <div class="activity-card tag-purple" @click="scrollToSection('street-foods')">
                <div class="activity-name">Traditional<br>Drinks</div>
              </div>
            </div>
            
            <div class="elegant-subtitle mt-5">
              <p class="journey-text">Join us for an unforgettable journey through Korean culture</p>
              <div class="experience-keywords">
                <span>Play</span>
                <span>Learn</span>
                <span>Taste</span>
                <span>Experience</span>
                <span>Celebrate</span>
              </div>
            </div>
          </div>
        </div>
        
        <v-card-text class="text-body mb-4">
          In recent years, Korean culture—often described as the "K-Wave" or Hallyu—has attracted remarkable global attention, from blockbuster dramas such as Squid Game to the worldwide success of K-pop and the recent sensation of KPop Demon Hunters. As local organizers, we find it both fascinating and somewhat surreal to see aspects of our everyday culture presented on the world stage with such enthusiasm.
        </v-card-text>
        
        <v-card-text class="text-body mb-4">
          This ISMIR is the very first ISMIR hosted in Korea, and the local organizers are delighted to commemorate this occasion with a special social event. Students from KAIST's MAC Lab and Sogang University's MALer Lab have prepared K-Culture Night, an opportunity to experience Korea's diverse cultural heritage in a festive and engaging setting.
        </v-card-text>
        
        <v-card-text class="text-body mb-4">
          During K-Culture Night, participants can enjoy a wide range of activities, from folk games and traditional instruments to Korean street foods and traditional alcoholic drinks. By joining the games and activities, you can earn coins to redeem for food and drinks.
        </v-card-text>
      </v-card>

      <br />

      <!-- ===================== K-Culture Night Activities ===================== -->
      <v-card outlined elevation="0" class="pa-4 my-4">
        
        <!-- Traditional Instruments Section -->
        <div class="activity-section mb-6" id="traditional-instruments">
          <v-card-title class="text-h5 mb-3 font-weight-bold activity-title">
            Learning Korean Traditional Instruments
          </v-card-title>
          
          <v-row align="start">
            <!-- 이미지 (왼쪽) -->
            <v-col cols="12" md="4">
              <v-img
                src="@/assets/KCultureNight/LearningKoreanTraditionalInstruments.png"
                alt="Learning Korean Traditional Instruments"
                class="rounded-lg narrow-vertical-image"
                contain
              ></v-img>
            </v-col>
            
            <!-- 텍스트 콘텐츠 (오른쪽) -->
            <v-col cols="12" md="8">
              <v-card-title class="activity-type mb-2">
                Hands-on Learning Experience
              </v-card-title>

              <v-card-text class="text-body mb-3">
                Discover the beautiful sounds of Korean traditional instruments through guided learning sessions. Our instructors will introduce you to the unique characteristics and playing techniques of these culturally significant instruments.
              </v-card-text>

              <div class="instruments-info mb-4">
                <v-card-title class="text-h6 mb-3 font-weight-bold">
                  Featured Instruments
                </v-card-title>
                <v-card-text class="instruments-content">
                  <div class="instrument-item mb-3">
                    Experience the melodic sounds of traditional Korean string and wind instruments, including the gayageum (가야금), haegeum (해금), and daegeum (대금). Learn basic playing techniques and understand the cultural significance of these instruments in Korean music history.
                  </div>
                </v-card-text>
              </div>
            </v-col>
          </v-row>
        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Korean Folk Games Section -->
        <div class="activity-section mb-6" id="folk-games">
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

          <v-card-text class="text-body mb-3">
            Experience traditional Korean games that have been enjoyed for generations. These interactive activities offer a fun way to connect with Korean cultural heritage while earning coins for food and drinks.
          </v-card-text>

          <div class="games-list mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Available Games
            </v-card-title>
            <v-card-text class="games-content">
              <div class="game-item mb-3">
                <strong>Ddakji-Chigi (딱지치기)</strong><br />
                A traditional paper-flipping game where players try to flip their opponent's folded paper tile by throwing their own.
              </div>
              <div class="game-item mb-3">
                <strong>Jegi-Chagi (제기차기)</strong><br />
                A traditional Korean game similar to hacky sack, where players keep a shuttlecock-like object in the air using their feet.
              </div>
              <div class="game-item mb-3">
                <strong>Tuho (투호, Pitch-pot)</strong><br />
                An ancient Korean game where players throw arrows into a narrow-necked jar from a set distance.
              </div>
              <div class="game-item mb-3">
                <strong>Alkkagi (알까기, Stone flicking)</strong><br />
                A traditional game involving flicking stones or marbles to hit targets or knock opponents' pieces out of a designated area.
              </div>
            </v-card-text>
          </div>
        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Cultural Activities Section -->
        <div class="activity-section mb-6" id="cultural-activities">
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

          <v-card-text class="text-body mb-3">
                Immerse yourself in Korean culture through hands-on learning experiences. These activities provide an authentic introduction to Korean language and traditional attire.
          </v-card-text>

              <div class="cultural-activities-list flex-grow-1">
                <v-card-title class="text-h6 mb-3 font-weight-bold">
                  Available Activities
            </v-card-title>
                <v-card-text class="activities-content flex-grow-1">
                  <div class="activity-item mb-3">
                    <strong>Learning Hangul, the Korean Alphabet</strong><br />
                    Discover the elegant and scientific Korean writing system. Learn the basic characters and understand the principles behind Hangul's creation, recognized by UNESCO for its linguistic excellence.
                  </div>
                  <div class="activity-item mb-3">
                    <strong>Trying on Hanbok, Korean Traditional Clothes</strong><br />
                    Experience the beauty of Korean traditional clothing. Try on authentic hanbok and learn about the cultural significance, colors, and styles of these elegant garments that reflect Korea's rich heritage.
              </div>
            </v-card-text>
                </div>
              </v-col>
            </v-row>
        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Korean Street Foods Section -->
        <div class="activity-section mb-6" id="street-foods">
          <v-card-title class="text-h5 mb-3 font-weight-bold activity-title">
            Korean Street Foods & Traditional Beverages
          </v-card-title>
          <div class="activity-images mb-4">
            <v-row justify="center">
              <v-col cols="12" md="9">
            <v-img
                  src="@/assets/KCultureNight/KoreaTraditionalTavern.png"
                  alt="Korea Traditional Tavern Menu"
                  class="rounded-lg tavern-image"
              contain
            ></v-img>
              </v-col>
            </v-row>
          </div>
          <v-card-title class="activity-type mb-2">
            Authentic Korean Cuisine Experience
          </v-card-title>

          <v-card-text class="text-body mb-3">
            Savor the authentic flavors of Korea through our carefully curated selection of street foods and traditional beverages. Use the coins you earn from participating in games and activities to enjoy these delicious treats.
        </v-card-text>
        
          <div class="food-menu mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Korean Street Foods
            </v-card-title>
            <v-card-text class="food-content">
              <div class="food-item mb-2">
                <strong>Dakgangjeong (닭강정)</strong> - Korean sweet, crunchy fried chicken
              </div>
              <div class="food-item mb-2">
                <strong>Gimbap (김밥)</strong> - Seaweed Rice Roll
              </div>
              <div class="food-item mb-2">
                <strong>Ramyeon (라면)</strong> - Instant Noodles
              </div>
              <div class="food-item mb-2">
                <strong>Tteokbokki (떡볶이)</strong> - Spicy rice cake
              </div>
              <div class="food-item mb-2">
                <strong>Soondae (순대)</strong> - Blood Sausage
              </div>
              <div class="food-item mb-2">
                <strong>Twigim (튀김)</strong> - Deep-Fried Dishes
              </div>
            </v-card-text>
          </div>

          <div class="beverages-menu mb-4">
            <v-card-title class="text-h6 mb-3 font-weight-bold">
              Traditional Korean Beverages & Desserts
            </v-card-title>
            <v-card-text class="beverages-content">
              <div class="beverage-item mb-2">
                Traditional Korean Desserts and Drinks
                </div>
              <div class="beverage-item mb-2">
                Traditional Korean Alcohol Beverages
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
  color: #ED5E60 !important;
  font-style: italic;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
}

.games-list, .instruments-info, .food-menu, .beverages-menu {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.cultural-activities-list {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.game-item, .instrument-item, .activity-item, .food-item, .beverage-item {
  line-height: 1.6;
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
}

.game-item:last-child, .instrument-item:last-child, .activity-item:last-child, 
.food-item:last-child, .beverage-item:last-child {
  border-bottom: none;
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
  
  .image-caption {
    font-size: 12px;
  }
  
  .activity-title {
    font-size: 1.1rem !important;
  }
}

.section-header {
  background-color: #e9ecef;
  padding: 8px 0;
}

/* Experience Highlights Styles - Clean & Modern */
.experience-highlights {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(248, 249, 250, 0.9) 50%, 
    rgba(233, 236, 239, 0.85) 100%);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(0, 65, 145, 0.15);
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
  background: linear-gradient(90deg, transparent, #004191, transparent);
  border-radius: 1px;
}

.main-title {
  font-size: 24px;
  font-weight: 700;
  color: #004191;
  letter-spacing: 0.3px;
  margin: 0;
  text-align: center;
  position: relative;
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
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.15) 100%);
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

/* 컬러 팔레트 적용 - 깔끔한 그라데이션 */
.tag-blue {
  background: linear-gradient(135deg, #004191 0%, #1565c0 100%);
}

.tag-coral {
  background: linear-gradient(135deg, #ED5E60 0%, #e53935 100%);
}

.tag-sky {
  background: linear-gradient(135deg, #5EBFED 0%, #039be5 100%);
}

.tag-yellow {
  background: linear-gradient(135deg, #EDD35E 0%, #ffa000 100%);
}

.tag-green {
  background: linear-gradient(135deg, #5EED60 0%, #43a047 100%);
}

.tag-purple {
  background: linear-gradient(135deg, #BF5EED 0%, #8e24aa 100%);
}

.elegant-subtitle {
  text-align: center;
  margin-top: 32px;
}

.journey-text {
  font-size: 18px;
  font-weight: 600;
  color: #004191;
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
  color: #6c757d;
  padding: 6px 12px;
  background: rgba(0, 65, 145, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(0, 65, 145, 0.1);
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
}

.experience-keywords span:hover {
  background: rgba(0, 65, 145, 0.1);
  color: #004191;
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