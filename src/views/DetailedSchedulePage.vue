<template>
  <v-container fluid class="pa-0">


    <!-- 데스크톱 PDF 뷰어 -->
    <v-row v-if="!isMobile" no-gutters>
      <v-col cols="12">
        <div class="pdf-desktop-container">
          <iframe
            ref="desktopIframe"
            src="/ISMIR 2025 Program.pdf#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH"
            width="100%"
            height="100%"
            style="border: none;"
            title="ISMIR 2025 Detailed Schedule"
            @load="onIframeLoad"
          >
            <v-alert
              type="warning"
              variant="tonal"
              class="ma-4"
            >
              Your browser does not support PDFs. 
              <v-btn
                variant="text"
                color="primary"
                href="/ISMIR 2025 Program.pdf"
                target="_blank"
                class="ml-2"
              >
                Download the PDF
              </v-btn>
            </v-alert>
          </iframe>
        </div>
      </v-col>
    </v-row>

    <!-- 모바일 PDF 뷰어 -->
    <v-row v-if="isMobile && showMobilePdf" no-gutters class="mobile-fullscreen">
      <v-col cols="12">
        <div class="mobile-pdf-container">
          <!-- PDF 캔버스 -->
          <div class="pdf-canvas-container">
            <canvas
              ref="pdfCanvas"
              class="pdf-canvas"
              @touchstart="onTouchStart"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
            ></canvas>
            
            <!-- 페이지 네비게이션 오버레이 -->
            <div class="page-navigation-overlay">
              <v-btn
                icon="mdi-download"
                variant="text"
                color="white"
                href="/ISMIR 2025 Program.pdf"
                download
                class="nav-btn"
                title="Download PDF"
              ></v-btn>
              
              <v-btn
                icon="mdi-chevron-left"
                variant="text"
                color="white"
                :disabled="currentPage <= 1"
                @click="previousPage"
                class="nav-btn"
              ></v-btn>
              
              <div class="page-info">
                {{ currentPage }} / {{ totalPages }}
              </div>
              
              <v-btn
                icon="mdi-chevron-right"
                variant="text"
                color="white"
                :disabled="currentPage >= totalPages"
                @click="nextPage"
                class="nav-btn"
              ></v-btn>
            </div>
          </div>
          
          <!-- 로딩 표시 -->
          <v-overlay
            :model-value="isLoading"
            class="align-center justify-center"
          >
            <v-progress-circular
              indeterminate
              size="64"
              color="primary"
            ></v-progress-circular>
          </v-overlay>
        </div>
      </v-col>
    </v-row>

    <!-- 모바일용 안내 메시지 (PDF 뷰어가 닫혀있을 때) -->
    <v-row v-if="isMobile && !showMobilePdf" class="px-4" justify="center">
      <v-col cols="12">
        <v-card class="pa-6 text-center" color="grey-lighten-5">
          <v-icon size="64" color="primary" class="mb-4">
            mdi-file-pdf-box
          </v-icon>
          <v-card-title class="text-h5 mb-2">
            Schedule Document
          </v-card-title>
          <v-card-text class="text-body-1">
            The schedule document is loading. If it doesn't appear, 
            try clicking "View PDF" above.
            <br><br>
            The PDF contains the complete ISMIR 2025 conference schedule 
            with detailed session information, timings, and locations.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script setup>
import { ref, onUnmounted, computed, watch, nextTick } from 'vue'
import { useDisplay } from 'vuetify'

// Vuetify display breakpoints
const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

// PDF viewer state
const showMobilePdf = ref(false)
const isLoading = ref(false)
const currentPage = ref(1)
const totalPages = ref(0)

// PDF.js related
let pdfDoc = null
let renderTask = null

// Refs
const pdfCanvas = ref(null)
const desktopIframe = ref(null)

// Touch handling for mobile
const touchStartX = ref(0)
const touchStartY = ref(0)

// PDF.js 동적 로딩
const loadPdfJs = async () => {
  if (window.pdfjsLib) return window.pdfjsLib

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
      resolve(window.pdfjsLib)
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}



// 모바일 PDF 로드
const loadMobilePdf = async () => {
  if (!pdfCanvas.value) return
  
  isLoading.value = true
  
  try {
    const pdfjsLib = await loadPdfJs()
    
    const loadingTask = pdfjsLib.getDocument('/ISMIR 2025 Program.pdf')
    pdfDoc = await loadingTask.promise
    totalPages.value = pdfDoc.numPages
    
    await renderPage(currentPage.value)
  } catch (error) {
    console.error('Error loading PDF:', error)
  } finally {
    isLoading.value = false
  }
}

// 페이지 렌더링
const renderPage = async (pageNum) => {
  if (!pdfDoc || !pdfCanvas.value) return
  
  isLoading.value = true
  
  try {
    const page = await pdfDoc.getPage(pageNum)
    const canvas = pdfCanvas.value
    const context = canvas.getContext('2d')
    
    // 모바일 화면에 맞는 스케일 계산
    const containerWidth = canvas.parentElement.clientWidth - 32 // padding 고려
    const viewport = page.getViewport({ scale: 1 })
    const scale = containerWidth / viewport.width
    const scaledViewport = page.getViewport({ scale })
    
    canvas.height = scaledViewport.height
    canvas.width = scaledViewport.width
    
    const renderContext = {
      canvasContext: context,
      viewport: scaledViewport
    }
    
    // 이전 렌더링 작업 취소
    if (renderTask) {
      renderTask.cancel()
    }
    
    renderTask = page.render(renderContext)
    await renderTask.promise
    
    currentPage.value = pageNum
  } catch (error) {
    if (error.name !== 'RenderingCancelledException') {
      console.error('Error rendering page:', error)
    }
  } finally {
    isLoading.value = false
  }
}

// 페이지 네비게이션
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    renderPage(currentPage.value + 1)
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    renderPage(currentPage.value - 1)
  }
}

// 터치 이벤트 핸들러
const onTouchStart = (event) => {
  const touch = event.touches[0]
  touchStartX.value = touch.clientX
  touchStartY.value = touch.clientY
}

const onTouchMove = (event) => {
  event.preventDefault() // 스크롤 방지
}

const onTouchEnd = (event) => {
  const touch = event.changedTouches[0]
  const deltaX = touch.clientX - touchStartX.value
  const deltaY = Math.abs(touch.clientY - touchStartY.value)
  
  // 수평 스와이프가 수직 스와이프보다 클 때만 페이지 변경
  if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > deltaY) {
    if (deltaX > 0) {
      previousPage() // 오른쪽 스와이프 = 이전 페이지
    } else {
      nextPage() // 왼쪽 스와이프 = 다음 페이지
    }
  }
}



// iframe 로드 완료
const onIframeLoad = () => {
  console.log('Desktop PDF iframe loaded')
}

// 모바일에서 자동으로 PDF 로드
watch(isMobile, async (newValue) => {
  if (newValue) {
    // 모바일로 전환되면 PDF 자동 로드
    showMobilePdf.value = true
    await nextTick()
    await loadMobilePdf()
  } else {
    // 데스크톱으로 전환되면 모바일 PDF 닫기
    showMobilePdf.value = false
  }
}, { immediate: true })

// 컴포넌트 언마운트 시 정리
onUnmounted(() => {
  if (renderTask) {
    renderTask.cancel()
  }
})
</script>

<style scoped>
/* 데스크톱 PDF 컨테이너 */
.pdf-desktop-container {
  height: 100vh;
  width: 100%;
  background: white;
}

/* 모바일 전체화면 */
.mobile-fullscreen {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: white;
}

/* 모바일 PDF 컨테이너 */
.mobile-pdf-container {
  height: 100vh;
  width: 100%;
  position: relative;
  background: #2c2c2c;
}

.pdf-canvas-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.pdf-canvas {
  max-width: 100%;
  max-height: 100%;
  background: white;
  touch-action: pan-x; /* 수평 스와이프만 허용 */
}

/* 페이지 네비게이션 오버레이 */
.page-navigation-overlay {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  border-radius: 25px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10;
}

.page-info {
  color: white;
  font-size: 14px;
  font-weight: 500;
  min-width: 60px;
  text-align: center;
  margin: 0 4px;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: 50% !important;
  width: 36px !important;
  height: 36px !important;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.2) !important;
}

/* 버튼 간격 조정 */
.gap-2 > * {
  margin: 4px;
}

/* 반응형 조정 */
@media (max-width: 600px) {
  .pdf-desktop-container {
    height: 100vh;
  }
}

/* 로딩 오버레이 */
.v-overlay {
  background: rgba(44, 44, 44, 0.8);
}
</style>
