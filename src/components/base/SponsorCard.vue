<template>
  <v-card
    elevation="3"
    class="sponsor-card-creative d-flex flex-column"
    style="height: 100%"
  >
    <!-- 로고 섹션 - 최우선 가시성 -->
    <div class="logo-showcase">
      <div class="logo-frame">
        <v-img
          :src="logoSrc"
          :alt="`${sponsor?.name || 'Sponsor'} logo`"
          height="120"
          contain
          class="primary-logo"
        />
      </div>
      <!-- 티어 배지 제거 -->
      <!-- <div class="tier-badge" :class="`tier-${sponsor?.tier || 'bronze'}`">
        {{ getTierLabel(sponsor?.tier) }}
      </div> -->
    </div>

    <!-- 콘텐츠 영역 -->
    <div class="sponsor-content pa-6 flex-grow-1 d-flex flex-column">
      <!-- 스폰서 설명 부분 주석처리 -->
      <!-- <div class="sponsor-description" v-if="sponsor?.description?.length">
        <p
          v-for="(paragraph, index) in sponsor.description"
          :key="index"
          class="description-text mb-3"
        >
          {{ paragraph }}
        </p>
      </div> -->

      <!-- 웹사이트 및 비디오 링크 -->
      <div class="sponsor-links mt-auto pt-4">
        <!-- 디버깅 정보 -->
        <div
          style="
            background: #f0f0f0;
            padding: 10px;
            margin-bottom: 10px;
            font-size: 12px;
          "
        >
          <strong>Debug Info:</strong><br />
          Name: {{ sponsor?.name || "N/A" }}<br />
          Website: {{ sponsor?.website || "N/A" }}<br />
          Has Website:
          {{ !!(sponsor && sponsor.website && sponsor.website.trim()) }}
        </div>

        <!-- 웹사이트 버튼 -->
        <div
          v-if="sponsor && sponsor.website && sponsor.website.trim()"
          class="website-section mb-3"
        >
          <v-btn
            :href="sponsor.website"
            target="_blank"
            color="white"
            variant="elevated"
            size="large"
            class="website-btn"
          >
            <v-icon start>mdi-web</v-icon>
            Visit Website
          </v-btn>
        </div>

        <!-- YouTube 비디오 링크가 있는 경우 -->
        <div v-if="sponsor?.videos?.length > 0" class="sponsor-videos">
          <div class="videos-header mb-3">
            <h4 class="videos-title">Featured Content</h4>
          </div>
          <div class="video-buttons">
            <v-btn
              v-for="(video, index) in sponsor.videos"
              :key="index"
              :href="video"
              target="_blank"
              color="secondary"
              variant="outlined"
              class="me-2 mb-2 video-btn"
              size="large"
            >
              <v-icon start>mdi-play-circle</v-icon>
              Video {{ index + 1 }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  sponsor: {
    type: Object,
    required: true,
  },
});

// 디버깅: 스폰서 데이터 확인
console.log("SponsorCard - sponsor:", props.sponsor);
console.log("SponsorCard - website:", props.sponsor?.website);

// 로고 이미지 경로 계산
const logoSrc = computed(() => {
  if (!props.sponsor?.logo) return "";

  // fhd 폴더의 webp 파일을 우선 사용, 없으면 일반 png 파일 사용
  try {
    return require(`@/assets/logo/fhd/${props.sponsor.logo}.webp`);
  } catch {
    try {
      return require(`@/assets/logo/${props.sponsor.logo}.png`);
    } catch {
      // 기본 이미지나 빈 이미지 반환
      return "";
    }
  }
});

// 티어 라벨 반환 함수 (현재 사용하지 않음)
// const getTierLabel = (tier) => {
//   if (!tier) return "Sponsor";

//   const tierLabels = {
//     diamond: "Diamond",
//     platinum: "Platinum",
//     gold: "Gold",
//     silver: "Silver",
//     bronze: "Bronze",
//     "wimir-patron": "WiMIR Patron",
//     "wimir-contributor": "WiMIR Contributor",
//     "wimir-supporter": "WiMIR Supporter",
//   };
//   return tierLabels[tier] || tier.charAt(0).toUpperCase() + tier.slice(1);
// };
</script>

<style scoped>
/* 창의적인 스폰서 카드 디자인 */
.sponsor-card-creative {
  border-radius: 20px;
  margin: 32px 0;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.sponsor-card-creative::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #e3f2fd, #f3e5f5, #e8f5e8, #fff3e0);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.sponsor-card-creative:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 65, 145, 0.15);
}

.sponsor-card-creative:hover::before {
  opacity: 0.1;
}

/* 로고 쇼케이스 섹션 */
.logo-showcase {
  position: relative;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 40px 30px 30px;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo-frame {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 65, 145, 0.1);
  margin: 0 auto 20px auto;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 160px;
  width: 100%;
}

.logo-frame::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #004191, #ed5e60, #004191);
  border-radius: 18px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.sponsor-card-creative:hover .logo-frame::before {
  opacity: 0.1;
}

.primary-logo {
  transition: transform 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.sponsor-card-creative:hover .primary-logo {
  transform: scale(1.05);
}

/* 티어 배지 (제거됨) */
/* .tier-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

.tier-platinum {
  background: linear-gradient(135deg, #b8860b, #daa520);
  color: #ffffff;
}

.tier-silver {
  background: linear-gradient(135deg, #708090, #778899);
  color: #ffffff;
}

.tier-bronze {
  background: linear-gradient(135deg, #a0522d, #cd853f);
  color: #ffffff;
}

.tier-gold {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #2c3e50;
} */

/* 콘텐츠 영역 */
.description-text {
  font-size: 16px;
  line-height: 1.8;
  color: #495057;
  margin-bottom: 20px;
  text-align: justify;
}

.description-text:first-child {
  font-weight: 500;
  color: #343a40;
}

/* 링크 섹션 */
.sponsor-links {
  border-top: 1px solid #f0f0f0;
  padding-top: 20px;
}

.website-section {
  text-align: center;
}

.website-btn {
  border-radius: 12px;
  font-weight: 700;
  text-transform: none;
  padding: 12px 32px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(94, 191, 237, 0.4);
}

.website-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(94, 191, 237, 0.6);
}

/* 비디오 섹션 */
.sponsor-videos {
  background: linear-gradient(135deg, #f1f3f4 0%, #e8eaf6 100%);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e1e5e9;
}

.videos-title {
  font-size: 16px;
  font-weight: 700;
  color: #004191;
  margin: 0 0 12px 0;
  text-align: center;
}

.video-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.video-btn {
  border-radius: 10px;
  font-weight: 600;
  text-transform: none;
  transition: all 0.3s ease;
  font-size: 14px;
}

.video-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .logo-showcase {
    padding: 30px 20px 20px;
    min-height: 200px;
  }

  .logo-frame {
    padding: 20px;
    margin-bottom: 15px;
    min-height: 120px;
  }

  /* .tier-badge {
    top: 10px;
    right: 10px;
    padding: 4px 8px;
    font-size: 10px;
  } */

  .description-text {
    font-size: 14px;
    text-align: left;
  }

  .website-btn {
    font-size: 14px;
    padding: 10px 24px;
  }

  .sponsor-videos {
    padding: 16px;
  }

  .video-buttons {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .video-btn {
    width: 100%;
    max-width: 200px;
  }
}

/* 진입 애니메이션 */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sponsor-card-creative {
  animation: slideInUp 0.6s ease-out;
}

/* 로고 프레임 호버 효과 */
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  }
  50% {
    box-shadow: 0 12px 40px rgba(0, 65, 145, 0.15);
  }
}

.sponsor-card-creative:hover .logo-frame {
  animation: pulse 2s infinite;
}
</style>
