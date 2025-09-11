<template>
  <v-row justify="center" id="program">
    <v-col cols="12" md="10">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          The schedule of the ISMIR 2025 program
        </v-card-title>

        <v-alert
          type="info"
          variant="tonal"
          class="mb-4"
          icon="mdi-calendar-plus"
        >
          <div class="text-body-2">
            <strong>💡 Tip:</strong> Click on any session to download a calendar
            event (.ics file) that you can add to Google Calendar, Outlook, or
            any calendar app!
          </div>
          <v-btn
            color="primary"
            variant="outlined"
            size="small"
            class="mt-3"
            prepend-icon="mdi-download-multiple"
            @click="downloadAllEvents"
            :loading="downloadingAll"
          >
            Download Complete Schedule (.ics)
          </v-btn>
        </v-alert>

        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12">
              <!-- 로딩 상태 -->
              <div v-if="loading" class="text-center pa-8">
                <v-progress-circular
                  indeterminate
                  color="primary"
                  size="64"
                ></v-progress-circular>
                <div class="mt-4 text-h6">Loading program data...</div>
              </div>

              <!-- 에러 상태 -->
              <div v-else-if="error" class="text-center pa-8">
                <v-alert type="error" prominent class="ma-4">
                  <div class="text-h6">Unable to load data</div>
                  <div class="mt-2">{{ error }}</div>
                  <v-btn color="primary" class="mt-4" @click="loadSheetData">
                    Try Again
                  </v-btn>
                </v-alert>
              </div>

              <!-- 일일 프로그램 스케줄 테이블 -->
              <div
                v-else-if="tableData.headers && tableData.rows"
                class="sheets-container"
              >
                <!-- 모바일 스크롤 안내 메시지 -->
                <v-alert
                  v-if="$vuetify.display.mobile"
                  type="info"
                  variant="tonal"
                  class="mb-3"
                  icon="mdi-arrow-left-right"
                >
                  <div class="text-caption">
                    📱 <strong>Mobile Tip:</strong> Scroll left or right to view
                    the full program schedule!
                  </div>
                </v-alert>

                <!-- Venue Legend (표 위에 배치) -->
                <div class="venue-legend-top" v-if="!$vuetify.display.mobile">
                  <v-card class="legend-card" elevation="2">
                    <v-card-title class="legend-title">
                      <v-icon class="mr-2" color="primary"
                        >mdi-map-marker</v-icon
                      >
                      Venues
                    </v-card-title>
                    <v-card-text class="legend-content">
                      <div class="legend-items-row">
                        <div
                          v-for="(venue, key) in VENUE_LEGEND"
                          :key="key"
                          class="legend-item-compact"
                        >
                          <span class="legend-symbol">{{ venue.symbol }}</span>
                          <div class="legend-info-compact">
                            <div class="legend-name">{{ venue.name }}</div>
                            <a
                              v-if="venue.mapUrl"
                              :href="venue.mapUrl"
                              target="_blank"
                              class="legend-map-link"
                            >
                              <v-icon size="small">mdi-map</v-icon> Map
                            </a>
                          </div>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>

                <!-- 메인 테이블 -->
                <div class="table-container">
                  <table class="program-table" :style="getColumnStyle()">
                    <!-- 3단계 헤더 -->
                    <thead>
                      <!-- 첫 번째 행: 날짜 -->
                      <tr class="date-row">
                        <th rowspan="4" class="time-header"></th>
                        <th class="date-cell">9/20</th>
                        <th class="date-cell">9/21</th>
                        <th class="date-cell">9/22</th>
                        <th class="date-cell">9/23</th>
                        <th class="date-cell">9/24</th>
                        <th class="date-cell">9/25</th>
                        <th class="date-cell" colspan="2">9/26</th>
                      </tr>

                      <!-- 두 번째 행: 요일 -->
                      <tr class="day-row">
                        <th class="day-cell">Sat</th>
                        <th class="day-cell">Sun</th>
                        <th class="day-cell">Mon</th>
                        <th class="day-cell">Tue</th>
                        <th class="day-cell">Wed</th>
                        <th class="day-cell">Thu</th>
                        <th class="day-cell" colspan="2">Fri</th>
                      </tr>

                      <!-- 세 번째 행: 이벤트 타입 -->
                      <tr class="event-type-row">
                        <th class="event-type-cell satellite">Satellite</th>
                        <th class="event-type-cell tutorial">Tutorial</th>
                        <th class="event-type-cell conference" colspan="4">
                          Conference
                        </th>
                        <th class="event-type-cell satellite" colspan="2">
                          Satellite
                        </th>
                      </tr>

                      <!-- 네 번째 행: 장소 -->
                      <tr class="venue-row">
                        <th colspan="7" class="venue-cell main-venue">KAIST</th>
                        <th class="venue-cell sogang-venue">
                          Sogang Univ., Seoul
                        </th>
                      </tr>
                    </thead>

                    <!-- 테이블 바디 -->
                    <tbody>
                      <tr
                        v-for="(row, rowIndex) in getProcessedRows()"
                        :key="rowIndex"
                        class="time-row"
                        :class="getTimeRowClass()"
                      >
                        <!-- 시간 컬럼 -->
                        <td class="time-cell" :class="getTimeClass()">
                          {{ row.originalRow[0] || "" }}
                        </td>

                        <!-- 세션 컬럼들 -->
                        <td
                          v-for="(cell, cellIndex) in row.cells"
                          :key="cellIndex"
                          v-show="!cell.hidden"
                          class="session-cell"
                          :class="[
                            getSessionClass(cell.value),
                            { 'clickable-session': cell.isClickable },
                          ]"
                          :rowspan="cell.rowspan"
                          :colspan="cell.colspan"
                          @click="
                            handleCellClick(
                              $event,
                              cell.value,
                              rowIndex,
                              cellIndex,
                              cell.isClickable
                            )
                          "
                          :title="
                            cell.isClickable
                              ? 'Click to add to calendar 📅'
                              : ''
                          "
                        >
                          <div class="session-content">
                            {{ cell.value || "" }}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- 캘린더 선택 메뉴 -->
                <div
                  v-if="calendarMenuOpen"
                  class="calendar-menu-overlay"
                  @click="calendarMenuOpen = false"
                >
                  <v-card
                    class="calendar-menu-card"
                    :style="{
                      position: 'fixed',
                      left: menuPosition.x + 'px',
                      top: menuPosition.y + 'px',
                      zIndex: 10000,
                      minWidth: '250px',
                      maxWidth: '300px',
                    }"
                    @click.stop
                  >
                    <v-card-title class="text-subtitle-1 font-weight-bold pa-3">
                      📅 Add to Calendar
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-list density="compact">
                      <v-list-item
                        v-for="calendar in availableCalendars"
                        :key="calendar.id"
                        @click="handleCalendarSelection(calendar)"
                        class="calendar-option"
                        :prepend-icon="getCalendarIcon(calendar.id)"
                      >
                        <v-list-item-title>{{
                          getCalendarName(calendar.id)
                        }}</v-list-item-title>
                        <template v-slot:append>
                          <v-icon
                            v-if="calendar.id === 'download'"
                            size="small"
                          >
                            mdi-download
                          </v-icon>
                          <v-icon v-else size="small"> mdi-open-in-new </v-icon>
                        </template>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </div>
              </div>

              <!-- 데이터 없음 -->
              <div v-else class="text-center pa-8">
                <v-alert type="info" prominent class="ma-4">
                  <div class="text-h6">
                    프로그램 데이터를 불러오는 중입니다...
                  </div>
                </v-alert>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import {
  downloadICSFile,
  downloadMergedICSFile,
  isValidEvent,
  getAvailableCalendarOptions,
  generateGoogleCalendarUrl,
  generateOutlookUrl,
  generateAppleCalendarUrl,
} from "../../services/icsService";

// ISMIR 2025 프로그램 스케줄 데이터 - CSV 파일 내용 완전 하드코딩
// 장소 정보 Legend 매핑
const VENUE_LEGEND = {
  1: {
    symbol: "¹",
    name: "N25 Paik Nam June Hall",
    fullName:
      "Room #3229, Paik Nam June Hall (백남준 Hall), N25 Building, Industrial Design Department, KAIST",
    mapUrl: "https://maps.app.goo.gl/btnbicuVZpe12Cd49",
  },
  2: {
    symbol: "²",
    name: "Golfzon Zoimaru",
    fullName: "Golfzon Zoimaru, Daejeon, South Korea",
    mapUrl:
      "https://www.google.com/maps/place/%EA%B3%A8%ED%94%84%EC%A1%B4+%EC%A1%B0%EC%9D%B4%EB%A7%88%EB%A3%A8/@36.374282,127.3866818,17z/data=!3m1!4b1!4m6!3m5!1s0x3565498f9d9e5fc7:0xee322d1ac4eefeb5!8m2!3d36.374282!4d127.3866818!16s%2Fg%2F11c5r8x8qy",
  },
  3: {
    symbol: "³",
    name: "ICC Hotel",
    fullName: "ICC Hotel, Daejeon, South Korea",
    mapUrl:
      "https://www.google.com/maps/place/%ED%98%B8%ED%85%94ICC/@36.3769613,127.3926565,17z/data=!3m1!4b1!4m6!3m5!1s0x3565498fe8b3e435:0x4601bcf4eb4f2181!8m2!3d36.3769613!4d127.3926565!16s%2Fg%2F1hc1qx8qy",
  },
  4: {
    symbol: "⁴",
    name: "E11 Creative Learning Building",
    fullName: "KAIST Creative Learning Building E11, Daejeon, South Korea",
    mapUrl:
      "https://www.google.com/maps/place/Creative+Learning+Building+E11/@36.3703695,127.3625834,17z/data=!3m1!4b1!4m6!3m5!1s0x35654bc9c84e5adb:0xf0cf3620fc28fc1d!8m2!3d36.3703695!4d127.3625834!16s%2Fg%2F11c5r8x8qy",
  },
  5: {
    symbol: "⁵",
    name: "E15 Main Auditorium",
    fullName: "KAIST Main Auditorium E15, Daejeon, South Korea",
    mapUrl:
      "https://www.google.com/maps/place/KAIST+E15+%EB%8C%80%EA%B0%95%EB%8B%B9/@36.3720843,127.3629259,17z/data=!3m1!4b1!4m6!3m5!1s0x35654bc98a6db1a1:0x8f5575e3fc5de4e7!8m2!3d36.3720843!4d127.3629259!16s%2Fg%2F11c5r8x8qy",
  },
  6: {
    symbol: "⁶",
    name: "Sogang University",
    fullName: "Sogang University, Seoul, South Korea",
    mapUrl: "https://maps.app.goo.gl/wXu9FhD28N1Fj1nj6",
  },
};

// 원본 program.csv의 모든 데이터를 JavaScript 배열로 변환
const hardcodedProgramData = [
  // 헤더 정보 (행 0-3)
  ["", "9/20", "9/21", "9/22", "9/23", "9/24", "9/25", "9/26"],
  ["", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  [
    "",
    "Satellite event",
    "Tutorial",
    "Conference",
    "Conference",
    "Conference",
    "Conference",
    "Satellite event",
  ],
  [
    "Starting at (KST)",
    "@KAIST",
    "@KAIST",
    "@KAIST",
    "@KAIST",
    "@KAIST",
    "@KAIST",
    "@KAIST",
    "@Sogang Univ., Seoul",
  ],

  // 실제 스케줄 데이터 (행 4-79)
  ["07:00 - 07:30", "", "Registration⁴", "Registration⁵", "", "", "", ""],
  ["07:30 - 08:00", "", "", "", "", "", "", ""],
  [
    "08:00 - 08:30",
    "",
    "",
    "End",
    "Registration⁵",
    "Registration⁵",
    "Registration⁵",
    "",
  ],
  [
    "08:30 - 09:00",
    "",
    "Registration⁴",
    "Opening⁵",
    "Registration⁵",
    "Registration⁵",
    "Registration⁵",
    "",
  ],
  [
    "09:00 - 09:30",
    "",
    "Tutorial \n(T1, T2, T3)⁴",
    "Oral \nSession 1⁵",
    "Oral\nSession 3⁵",
    "Oral\nSession 5⁵",
    "Oral\nSession 7⁵",
    "LLM4MA⁵",
    "DLfM⁶",
  ],
  ["09:30 - 10:00", "", "", "", "", "", "", "", ""],
  ["10:00 - 10:30", "", "", "End", "End", "End", "End", "", ""],
  [
    "10:30 - 11:00",
    "",
    "",
    "Coffee ☕️ \n+\nPoster \nSession 1⁵",
    "Coffee ☕️ \n+\nPoster\nSession 3⁵",
    "Coffee ☕️ \n+\nPoster\nSession 5⁵",
    "Coffee ☕️ \n+\nPoster\nSession 7⁵",
    "",
    "",
  ],
  ["11:00 - 11:30", "", "", "", "", "", "", "", ""],
  ["11:30 - 12:00", "", "", "End", "End", "End", "End", "", ""],
  [
    "12:00 - 12:30",
    "",
    "End",
    "Lunch 🥗⁵",
    "Lunch 🍚⁵",
    "Lunch 🍱⁵",
    "Lunch 🥘⁵",
    "",
    "",
  ],
  ["12:30 - 13:00", "", "Lunch 🍽️⁴", "End", "End", "End", "End", "", ""],
  [
    "13:00 - 13:30",
    "",
    "Lunch 🍽️⁴",
    "Keynote 1⁵",
    "Industry \nSession⁵",
    "Keynote 2⁵",
    "Society Meeting / Board Election⁵",
    "",
    "",
  ],
  ["13:30 - 14:00", "", "", "End", "End", "End", "End", "", ""],
  [
    "14:00 - 14:30",
    "HCMIR25¹",
    "Tutorial \n(T4, T5, T6)⁴",
    "Coffee ☕️⁵",
    "Coffee ☕️⁵",
    "Coffee ☕️⁵",
    "Award and Test-of-Time Talks⁵",
    "",
    "",
  ],
  [
    "14:30 - 15:00",
    "",
    "",
    "Oral \nSession 2⁵",
    "Oral\nSession 4⁵",
    "Oral\nSession 6⁵",
    "Closing Remarks, ISMIR 2026⁵",
    "",
    "",
  ],
  ["15:00 - 15:30", "", "", "", "", "", "Late-Breaking/Demo⁵", "", ""],
  ["15:30 - 16:00", "", "", "End", "End", "End", "", "", ""],
  [
    "16:00 - 16:30",
    "",
    "",
    "Poster \nSession 2⁵",
    "Poster \nSession 4⁵",
    "Poster \nSession 6⁵",
    "",
    "",
    "",
  ],
  ["16:30 - 17:00", "", "", "", "", "", "End", "End", ""],
  ["17:00 - 17:30", "", "End", "End", "End", "End", "Unconference⁵", "", ""],
  [
    "17:30 - 18:00",
    "End",
    "",
    "Industry 🥪 \nMeetup 🍗⁵",
    "WIMIR\nSession⁵",
    "Special\nSession⁵",
    "",
    "",
    "End",
  ],
  ["18:00 - 18:30", "", "", "", "End", "End", "End", "", ""],
  [
    "18:30 - 19:00",
    "",
    "Welcome \nReception²",
    "End",
    "Korean \nTraditional \nMusic Concert⁵",
    "",
    "",
    "",
    "",
  ],
  ["19:00 - 19:30", "", "", "", "End", "", "", "", ""],
  [
    "19:30 - 20:00",
    "",
    "",
    "ISMIR\nMusic \nProgram⁵",
    "K-Culture\nNight⁵",
    "Banquet\n+\nJam session\n🥁🎸³",
    "Rencon",
    "",
    "",
  ],
  ["20:00 - 20:30", "", "", "End", "", "", "", "", ""],
  ["20:30 - 21:00", "", "", "", "", "", "End", "", ""],
  ["21:00 - 21:30", "", "End", "", "End", "", "", "", ""],
  ["21:30 - 22:00", "", "", "", "", "End", "", "", ""],
];

// 반응형 데이터
const loading = ref(false);
const error = ref(null);
const sheetData = ref([]);
const mergedCellsInfo = ref({});
const downloadingAll = ref(false);

// 캘린더 메뉴 관련 데이터
const calendarMenuOpen = ref(false);
const selectedEventData = ref(null);
const availableCalendars = ref(getAvailableCalendarOptions());
const menuPosition = ref({ x: 0, y: 0 });

// 테이블 데이터 계산
const tableData = computed(() => {
  if (!sheetData.value || sheetData.value.length === 0) {
    return { headers: [], rows: [] };
  }

  const formattedData = formatDataAsTable(sheetData.value);

  // 8:30부터 22:00까지만 필터링 (Welcome Reception, Banquet 포함)
  if (formattedData.rows && formattedData.rows.length > 0) {
    const filteredRows = formattedData.rows.filter((row) => {
      if (!row || !row[0]) return false;

      const time = row[0].toString().trim();

      // 시간 형식 확인 (예: "07:00 - 07:30", "09:00 - 09:30" 등)
      const timeMatch = time.match(
        /^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/
      );
      if (!timeMatch) return false;

      const hours = parseInt(timeMatch[1]);
      const minutes = parseInt(timeMatch[2]);

      // 7:00 (7시간 0분)부터 22:00 (22시간 0분)까지
      const totalMinutes = hours * 60 + minutes;
      const startMinutes = 7 * 60; // 7:00
      const endMinutes = 22 * 60; // 22:00

      return totalMinutes >= startMinutes && totalMinutes <= endMinutes;
    });

    return {
      ...formattedData,
      rows: filteredRows,
    };
  }

  return formattedData;
});

// Vuetify DataTable 헤더 형식으로 변환 (현재 사용하지 않음)
// const tableHeaders = computed(() => {
//   if (!tableData.value.headers) return [];
//
//   return tableData.value.headers.map((header, index) => ({
//     text: header,
//     value: `col${index}`,
//     sortable: true,
//     width: 'auto'
//   }));
// });

// 고정된 컬럼 수 (9/20~9/25: 6개 + 9/26: 2개 = 총 8개)
const getColumnCount = computed(() => {
  return 8; // 고정된 8개 컬럼
});

// 동적 컬럼 너비 스타일
const getColumnStyle = () => {
  const columnCount = getColumnCount.value;
  const sessionColumnWidth = `calc((100% - 120px) / ${columnCount})`;
  return {
    "--session-column-width": sessionColumnWidth,
  };
};

// 시간 행 스타일 클래스 결정 - 모든 시간이 동일한 스타일
const getTimeRowClass = () => {
  return ""; // 특별한 클래스 없음
};

// 시간 스타일 클래스 결정 - 모든 시간이 동일한 스타일
const getTimeClass = () => {
  return ""; // 특별한 클래스 없음
};

// 세션 스타일 클래스 결정 - 하늘색 통일 적용
const getSessionClass = (session) => {
  const classes = [];

  if (session && typeof session === "string") {
    // 줄바꿈 문자를 공백으로 정규화하고 윗첨자 제거
    const normalizedSession = session
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, "") // 윗첨자 제거
      .toLowerCase()
      .trim();

    console.log(
      `SESSION CLASSIFICATION: "${session}" → "${normalizedSession}"`
    );

    // 1. Registration - 연한 초록색
    if (normalizedSession.includes("registration")) {
      classes.push("registration-session");
    }
    // 2. Tutorial, Oral Session, Keynote - 하늘색
    else if (
      normalizedSession.includes("tutorial") ||
      normalizedSession.includes("keynote") ||
      normalizedSession.includes("oral session")
    ) {
      classes.push("keynote-session"); // 하늘색 클래스 사용
    }
    // 2. Opening (개회식) - 베이지 (Lunch와 동일)
    else if (normalizedSession.includes("opening")) {
      classes.push("lunch-session");
    }
    // 3. Poster Session (포스터) - 라벤더
    else if (normalizedSession.includes("poster session")) {
      classes.push("poster-session");
    }
    // 4. Industry Session (산업계) - 연초록, Industry Meetup은 베이지 (Lunch와 동일)
    else if (normalizedSession.includes("industry")) {
      if (normalizedSession.includes("meetup")) {
        classes.push("lunch-session"); // Industry Meetup은 Lunch와 같은 색
      } else {
        classes.push("industry-session"); // 일반 Industry Session은 연초록
      }
    }
    // 5. Lunch (점심) - 베이지
    else if (normalizedSession.includes("lunch")) {
      classes.push("lunch-session");
    }
    // 6. Coffee (커피만) - 연갈색
    else if (
      normalizedSession.includes("coffee") &&
      !normalizedSession.includes("poster")
    ) {
      classes.push("Coffee-session");
    }
    // 7. Coffee + Poster (커피 + 포스터) - 라벤더 (포스터와 통일)
    else if (
      normalizedSession.includes("coffee") &&
      normalizedSession.includes("poster")
    ) {
      classes.push("poster-session");
    }
    // 8. Social Events (사교행사) - 코랄 핑크
    else if (
      normalizedSession.includes("welcome") ||
      normalizedSession.includes("reception") ||
      normalizedSession.includes("banquet") ||
      normalizedSession.includes("jam") ||
      normalizedSession.includes("rencon") ||
      normalizedSession.includes("music program") ||
      normalizedSession.includes("k-culture") ||
      normalizedSession.includes("culture night") ||
      normalizedSession.includes("korean") ||
      normalizedSession.includes("traditional music") ||
      normalizedSession.includes("concert") ||
      (normalizedSession.includes("ismir") &&
        normalizedSession.includes("music"))
    ) {
      classes.push("social-session");
    }
    // 9. Closing/Award/Society meeting (폐회식/시상식/학회 모임) - 연초록
    else if (
      normalizedSession.includes("closing") ||
      normalizedSession.includes("award") ||
      normalizedSession.includes("society meeting")
    ) {
      classes.push("ceremony-session");
    }
    // 10. Special Events (특별 이벤트) - 민트
    else if (
      normalizedSession.includes("llm4ma") ||
      normalizedSession.includes("dlfm") ||
      normalizedSession.includes("hcmir")
    ) {
      classes.push("special-event-session");
    }
    // 11. WIMIR/Diversity - 퍼플
    else if (
      normalizedSession.includes("wimir") ||
      normalizedSession.includes("special session")
    ) {
      classes.push("diversity-session");
    }
    // 12. Late-Breaking/Demo - 라벤더 (Poster Session과 동일)
    else if (
      normalizedSession.includes("late-breaking") ||
      normalizedSession.includes("demo")
    ) {
      classes.push("poster-session");
    }
    // 13. Unconference - 특별 이벤트 (민트)
    else if (normalizedSession.includes("unconference")) {
      classes.push("special-event-session");
    }
    // 기본값은 세션 컬럼 스타일 유지
  }

  return classes.join(" ");
};

// 하드코딩된 데이터 구조 분석 (간단한 버전)
// eslint-disable-next-line no-unused-vars
const analyzeDataStructure = () => {
  console.log("=== 하드코딩된 데이터 분석 ===");
  console.log("하드코딩된 데이터에서는 병합 분석을 생략합니다.");
  console.log("=== END ANALYSIS ===");
};

// CSV 데이터의 세로 방향 블록을 인식하여 rowspan 계산
// eslint-disable-next-line no-unused-vars
const getSessionInfo = (cellValue, currentRowIndex, currentColIndex) => {
  if (!cellValue || typeof cellValue !== "string") {
    return { rowspan: 1, isSpanned: false, sessionType: "" };
  }

  const trimmedValue = cellValue.trim();
  if (!trimmedValue || trimmedValue.toLowerCase() === "end") {
    return { rowspan: 1, isSpanned: false, sessionType: "" };
  }

  // 현재 컬럼에서 다음 "End" 또는 다른 이벤트까지의 rowspan 계산
  const allRows = tableData.value.rows;
  const actualColIndex = currentColIndex + 1; // 시간 컬럼 제외

  let rowspan = 1;
  for (let i = currentRowIndex + 1; i < allRows.length; i++) {
    const nextCell =
      allRows[i] && allRows[i][actualColIndex]
        ? allRows[i][actualColIndex].trim()
        : "";

    if (nextCell === "" || nextCell === trimmedValue) {
      // 빈 셀이거나 같은 이벤트이면 계속 확장
      rowspan++;
    } else if (nextCell.toLowerCase() === "end") {
      // "End"를 만나면 해당 행까지 포함하고 종료
      rowspan++;
      break;
    } else {
      // 다른 이벤트를 만나면 이전 행까지만
      break;
    }
  }

  console.log(
    `ROWSPAN 계산: "${trimmedValue}" | Row ${currentRowIndex}, Col ${actualColIndex} | Rowspan: ${rowspan}`
  );

  return {
    rowspan,
    isSpanned: false,
    sessionType: rowspan > 1 ? "merged-block" : "single-cell",
  };
};

// 하드코딩된 데이터에서는 간단한 rowspan 계산
// eslint-disable-next-line no-unused-vars
const calculateDynamicRowspan = (currentRowIndex, currentColIndex, allRows) => {
  // 하드코딩된 데이터에서는 기본적으로 1개의 행만 차지
  return 1;
};

// 하드코딩된 데이터에서는 간단한 이벤트 처리
// eslint-disable-next-line no-unused-vars
const getColumnEvents = (colIndex, allRows) => {
  // 하드코딩된 데이터에서는 빈 배열 반환
  return [];
};

// 특정 시간에 해당하는 행 인덱스 찾기
// eslint-disable-next-line no-unused-vars
const findRowIndexByTime = (targetTime, allRows) => {
  for (let i = 0; i < allRows.length; i++) {
    if (allRows[i] && allRows[i][0] === targetTime) {
      return i;
    }
  }
  return -1;
};

// 테이블 행을 처리하여 rowspan이 적용된 셀 구조 생성
const getProcessedRows = () => {
  if (!tableData.value.rows || tableData.value.rows.length === 0) return [];

  const rows = [];
  const spannedCells = new Set(); // 이미 span으로 숨겨진 셀들 추적

  for (let rowIndex = 0; rowIndex < tableData.value.rows.length; rowIndex++) {
    const originalRow = tableData.value.rows[rowIndex];
    if (!originalRow) continue;

    const processedRow = {
      originalRow,
      cells: [],
    };

    // 시간 컬럼을 제외한 세션 컬럼들 처리
    for (let colIndex = 1; colIndex < originalRow.length; colIndex++) {
      const cellKey = `${rowIndex}-${colIndex}`;

      if (spannedCells.has(cellKey)) {
        // 이미 이전 행의 rowspan에 포함된 셀은 숨김
        processedRow.cells.push({
          value: "",
          hidden: true,
          rowspan: 1,
          colspan: 1,
          isClickable: false,
        });
        continue;
      }

      const cellValue = originalRow[colIndex] || "";

      // "End" 마커인 경우 숨김 처리 (rowspan에 포함되므로)
      if (cellValue && cellValue.trim().toLowerCase() === "end") {
        processedRow.cells.push({
          value: "",
          hidden: true,
          rowspan: 1,
          colspan: 1,
          isClickable: false,
        });
        continue;
      }

      const sessionInfo = getSessionInfo(cellValue, rowIndex, colIndex - 1); // colIndex - 1 because we're excluding time column

      // rowspan 적용
      if (sessionInfo.rowspan > 1) {
        // 해당 셀이 차지할 다른 행들을 spannedCells에 추가
        for (
          let r = rowIndex + 1;
          r < rowIndex + sessionInfo.rowspan && r < tableData.value.rows.length;
          r++
        ) {
          spannedCells.add(`${r}-${colIndex}`);
        }
      }

      processedRow.cells.push({
        value: cellValue,
        hidden: false,
        rowspan: sessionInfo.rowspan,
        colspan: 1,
        isClickable: isValidEvent(cellValue),
      });
    }

    rows.push(processedRow);
  }

  return rows;
};

// 하드코딩된 데이터 로드
const loadSheetData = async () => {
  loading.value = true;
  error.value = null;

  try {
    // 하드코딩된 데이터 사용
    sheetData.value = hardcodedProgramData;

    // 병합된 셀 정보는 하드코딩된 데이터에서는 지원하지 않으므로 빈 객체 사용
    mergedCellsInfo.value = {};

    // 하드코딩된 데이터에서는 병합 정보가 없으므로 별도 처리하지 않음
    // googleSheetsService.getMergedCellsInfo(metadata.sheets, "Program");

    // 데이터 구조 디버깅
    console.log("=== 하드코딩된 데이터 디버깅 ===");
    console.log("전체 데이터:", hardcodedProgramData);
    if (hardcodedProgramData && hardcodedProgramData.length > 0) {
      console.log("첫 번째 행 (헤더):", hardcodedProgramData[0]);
      console.log("두 번째 행:", hardcodedProgramData[1]);
      console.log("세 번째 행:", hardcodedProgramData[2]);
      console.log("네 번째 행 (장소):", hardcodedProgramData[3]);
      console.log("다섯 번째 행:", hardcodedProgramData[4]);
      console.log("첫 번째 데이터 행:", hardcodedProgramData[5]);
    }
    console.log("=== 변환된 테이블 데이터 ===");
    const formatted = formatDataAsTable(hardcodedProgramData);
    console.log("헤더:", formatted.headers);
    console.log("행 개수:", formatted.rows.length);
    if (formatted.rows.length > 0) {
      console.log("첫 번째 행:", formatted.rows[0]);
      console.log("두 번째 행:", formatted.rows[1]);
    }
    console.log("===================");
  } catch (err) {
    console.error("데이터 로드 오류:", err);
    error.value = err.message || "데이터를 불러오는 중 오류가 발생했습니다.";
  } finally {
    loading.value = false;
  }
};

// 하드코딩된 데이터를 위한 테이블 형식 변환 함수
const formatDataAsTable = (data) => {
  if (!data || data.length === 0) {
    return { headers: [], rows: [] };
  }

  // 헤더는 첫 번째 행(날짜)을 사용
  const headers = data[0] || [];

  // 실제 데이터는 4번째 행부터 시작 (0-based index로 3번째)
  const rows = data.slice(4) || [];

  return {
    headers,
    rows,
  };
};

// 셀 클릭 핸들러
const handleCellClick = (
  event,
  cellValue,
  rowIndex,
  cellIndex,
  isClickable
) => {
  if (isClickable) {
    showCalendarMenu(event, cellValue, rowIndex, cellIndex);
  }
};

// 캘린더 메뉴 표시 핸들러
const showCalendarMenu = (event, cellValue, rowIndex, cellIndex) => {
  // 유효한 이벤트인지 확인
  if (!isValidEvent(cellValue)) {
    return;
  }

  // 해당 행의 시간 정보 가져오기
  const timeString = tableData.value.rows[rowIndex][0];
  if (!timeString) {
    console.warn("Time information not found");
    return;
  }

  // 컬럼 인덱스는 1부터 시작 (시간 컬럼 제외)
  const columnIndex = cellIndex + 1;

  console.log("셀 클릭 디버깅:", {
    cellValue,
    cellIndex,
    columnIndex,
    timeString,
    rowIndex,
  });

  // 이벤트 데이터 구성
  const eventData = {
    title: cellValue,
    timeString: timeString,
    columnIndex: columnIndex,
  };

  // 메뉴 위치 설정 (클릭한 위치 기준, 화면 경계 고려)
  const menuWidth = 300;
  const menuHeight = 200;
  const padding = 10;

  let x = event.clientX;
  let y = event.clientY;

  // 화면 오른쪽 경계를 벗어나는 경우 왼쪽으로 이동
  if (x + menuWidth > window.innerWidth) {
    x = window.innerWidth - menuWidth - padding;
  }

  // 화면 아래쪽 경계를 벗어나는 경우 위로 이동
  if (y + menuHeight > window.innerHeight) {
    y = window.innerHeight - menuHeight - padding;
  }

  // 최소 위치 보장
  x = Math.max(padding, x);
  y = Math.max(padding, y);

  menuPosition.value = { x, y };

  // 선택된 이벤트 데이터 저장
  selectedEventData.value = eventData;

  // 메뉴 열기
  calendarMenuOpen.value = true;
};

// 캘린더 아이콘 반환
const getCalendarIcon = (calendarId) => {
  const icons = {
    google: "mdi-google",
    outlook: "mdi-microsoft-outlook",
    apple: "mdi-apple",
    download: "mdi-download-circle",
  };
  return icons[calendarId] || "mdi-calendar";
};

// 캘린더 이름 반환 (영어)
const getCalendarName = (calendarId) => {
  const names = {
    google: "Google Calendar",
    outlook: "Microsoft Outlook",
    apple: "Apple Calendar",
    download: "Download ICS File",
  };
  return names[calendarId] || "Calendar";
};

// 캘린더 선택 핸들러
const handleCalendarSelection = async (calendar) => {
  // 메뉴 닫기
  calendarMenuOpen.value = false;

  if (!selectedEventData.value) {
    console.error("No event data selected");
    return;
  }

  try {
    const calendarName = getCalendarName(calendar.id);
    console.log(`${calendarName} selected:`, selectedEventData.value);

    if (calendar.id === "download") {
      // ICS 파일 다운로드
      downloadICSFile(selectedEventData.value);
    } else if (calendar.id === "google") {
      // Google Calendar 열기
      const url = generateGoogleCalendarUrl(selectedEventData.value);
      window.open(url, "_blank");
    } else if (calendar.id === "outlook") {
      // Outlook 열기
      const url = generateOutlookUrl(selectedEventData.value);
      window.open(url, "_blank");
    } else if (calendar.id === "apple") {
      // Apple Calendar (iOS)
      const url = generateAppleCalendarUrl(selectedEventData.value);
      window.location.href = url;
    }
  } catch (error) {
    const calendarName = getCalendarName(calendar.id);
    console.error(`Error adding to ${calendarName}:`, error);
    // 폴백: ICS 다운로드
    downloadICSFile(selectedEventData.value);
  }
};

// 모든 유효한 이벤트 수집 (중복 제거)
const getAllValidEvents = () => {
  const allEvents = [];
  const seenEvents = new Set(); // 중복 제거를 위한 Set

  if (!tableData.value.rows || tableData.value.rows.length === 0) {
    return allEvents;
  }

  // 모든 행과 컬럼을 순회하여 유효한 이벤트 찾기
  for (let rowIndex = 0; rowIndex < tableData.value.rows.length; rowIndex++) {
    const row = tableData.value.rows[rowIndex];
    if (!row) continue;

    const timeString = row[0]; // 시간 정보
    if (!timeString) continue;

    // 시간 컬럼을 제외한 세션 컬럼들 확인 (1부터 시작)
    for (let colIndex = 1; colIndex < row.length; colIndex++) {
      const cellValue = row[colIndex];

      if (isValidEvent(cellValue)) {
        // 윗첨자 제거하여 이벤트 타입 정규화
        const normalizedTitle = cellValue
          .replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, "")
          .replace(/\n/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        // 날짜 정보 가져오기 (컬럼 기반)
        const dateStr = getDateFromColumnIndex(colIndex);

        // 중복 체크를 위한 고유 키 생성
        const eventKey = `${normalizedTitle}-${dateStr}`;

        // 이미 처리된 이벤트인지 확인
        if (!seenEvents.has(eventKey)) {
          seenEvents.add(eventKey);

          const eventData = {
            title: cellValue,
            timeString: timeString,
            columnIndex: colIndex, // 1-based index
          };

          allEvents.push(eventData);
        }
      }
    }
  }

  return allEvents;
};

// 컬럼 인덱스에서 날짜 정보 가져오기
const getDateFromColumnIndex = (columnIndex) => {
  const COLUMN_TO_DATE = {
    1: "9/20", // Satellite
    2: "9/21", // Tutorial
    3: "9/22", // Conference Day 1
    4: "9/23", // Conference Day 2
    5: "9/24", // Conference Day 3
    6: "9/25", // Conference Day 4
    7: "9/26", // Satellite (KAIST)
    8: "9/26", // Satellite (Sogang)
  };
  return COLUMN_TO_DATE[columnIndex] || "unknown";
};

// 전체 일정 다운로드
const downloadAllEvents = async () => {
  downloadingAll.value = true;

  try {
    const allEvents = getAllValidEvents();

    if (allEvents.length === 0) {
      alert("No events available for download.");
      return;
    }

    console.log(`Starting download of ${allEvents.length} events`);

    // Download merged ICS file
    await downloadMergedICSFile(allEvents, "ISMIR2025_Complete_Schedule.ics");

    // Success message
    alert(
      `ISMIR 2025 complete schedule has been downloaded! (${allEvents.length} events total)`
    );
  } catch (error) {
    console.error("Error downloading complete schedule:", error);
    alert(
      "An error occurred while downloading the complete schedule. Please try again."
    );
  } finally {
    downloadingAll.value = false;
  }
};

// 컴포넌트 마운트 시 데이터 로드
onMounted(() => {
  loadSheetData();
});
</script>

<style scoped>
/* 제목이 잘리지 않도록 줄바꿈 허용 */
.v-card-title {
  white-space: normal !important;
  word-break: break-word !important;
  line-height: 1.4 !important;
}

/* 모바일에서 제목 폰트 사이즈 조정 */
@media (max-width: 768px) {
  .v-card-title {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 480px) {
  .v-card-title {
    font-size: 1.25rem !important;
  }
}

.sheets-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

/* 테이블 컨테이너 */
.table-container {
  width: 100%;
}

/* Venue Legend (표 위) 스타일링 */
.venue-legend-top {
  margin-bottom: 20px;
}

.legend-card {
  width: 100%;
  max-width: none;
  border: 2px solid #e0e0e0 !important;
  overflow: hidden;
}

/* 가로 배치 Legend 스타일 */
.legend-items-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  justify-content: flex-start;
  align-items: stretch;
  overflow-x: auto;
}

.legend-item-compact {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
  min-width: 180px;
  flex-shrink: 0;
}

.legend-item-compact:hover {
  background: #f8f9fa;
  border-color: #1976d2;
}

.legend-info-compact {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.legend-title {
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  padding: 16px 20px 12px 20px !important;
  background: #f5f5f5;
  color: #1565c0 !important;
  border-bottom: 2px solid #e0e0e0;
}

.legend-content {
  padding: 16px 20px 16px 20px !important;
  background: #fafafa;
}

.legend-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  padding: 8px;
  border-radius: 8px;
  background: #fafafa;
  transition: background-color 0.2s;
}

.legend-item:hover {
  background: #f0f0f0;
}

.legend-symbol {
  font-size: 1.4rem;
  font-weight: 900;
  color: #ffffff;
  background: #1976d2;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.legend-info {
  flex: 1;
}

.legend-name {
  font-weight: 700;
  color: #1a1a1a;
  font-size: 0.95rem;
  line-height: 1.4;
}

.legend-full-name {
  font-size: 0.75rem;
  color: #666;
  margin-top: 2px;
  line-height: 1.2;
}

.legend-map-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1976d2;
  text-decoration: none;
  margin-top: 6px;
  padding: 4px 8px;
  border-radius: 6px;
  background: rgba(25, 118, 210, 0.1);
  transition: all 0.2s ease;
}

.legend-map-link:hover {
  color: #ffffff;
  background: #1976d2;
  text-decoration: none;
}

/* 모바일에서 가로 스크롤 활성화 */
@media (max-width: 768px) {
  .sheets-container {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #ccc #f0f0f0;
  }

  .legend-items-row {
    flex-direction: column;
    gap: 8px;
  }

  .legend-item-compact {
    min-width: auto;
    width: 100%;
  }

  .sheets-container::-webkit-scrollbar {
    height: 8px;
  }

  .sheets-container::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 4px;
  }

  .sheets-container::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  .sheets-container::-webkit-scrollbar-thumb:hover {
    background: #999;
  }

  /* 스크롤 인디케이터 스타일 */
  .sheets-container {
    position: relative;
  }

  .sheets-container::after {
    content: "← Scroll left or right →";
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.7rem;
    color: #666;
    background: rgba(255, 255, 255, 0.9);
    padding: 2px 8px;
    border-radius: 10px;
    opacity: 0.8;
    pointer-events: none;
    white-space: nowrap;
    z-index: 1;
  }
}

/* 일일 프로그램 스케줄 테이블 스타일링 */
.program-table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  font-size: 1rem;
  table-layout: fixed; /* 고정 테이블 레이아웃으로 컬럼 너비 일정하게 */
  border: 1px solid #000000; /* 전체 표 바깥 테두리 */
}

/* 모바일에서 테이블 최소 너비 설정 */
@media (max-width: 768px) {
  .program-table {
    min-width: 800px; /* 모든 컬럼이 보이도록 최소 너비 설정 */
    table-layout: auto; /* 모바일에서는 자동 레이아웃으로 변경 */
  }
}

.program-table thead {
  background: #e7e7e7;
  color: #000000;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 10;
}

.time-header {
  padding: 16px 8px;
  border-right: 1px solid #000000;
  background-color: #ffffff;
  text-align: center;
  font-size: 0.875rem;
  min-height: 120px; /* 4행 헤더에 맞게 높이 증가 */
  vertical-align: middle;
  width: 120px; /* 시간 컬럼 고정 너비 */
  font-weight: 700;
  box-shadow: none;
}

/* 4단계 헤더 스타일 - 회색 톤 계층 구조 */

/* 첫 번째 행: 날짜 (가장 어두운 회색) */
.date-row {
  background: #d0d0d0;
  color: #000000;
}

.date-cell {
  padding: 8px 4px;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  text-align: center;
  vertical-align: middle;
  width: var(--session-column-width, calc((100% - 120px) / 8));
  font-size: 1rem;
  font-weight: 800;
  background-color: #d0d0d0;
  line-height: 1.2;
  letter-spacing: 0.5px;
}

/* 두 번째 행: 요일 (중간 톤 회색) */
.day-row {
  background: #e0e0e0;
  color: #000000;
}

.day-cell {
  padding: 6px 4px;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  text-align: center;
  vertical-align: middle;
  width: var(--session-column-width, calc((100% - 120px) / 8));
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #e0e0e0;
  line-height: 1.2;
  text-transform: uppercase;
}

/* 세 번째 행: 이벤트 타입 (밝은 회색) */
.event-type-row {
  background: #e7e7e7;
  color: #000000;
}

.event-type-cell {
  padding: 6px 4px;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  text-align: center;
  vertical-align: middle;
  width: var(--session-column-width, calc((100% - 120px) / 8));
  font-size: 0.85rem;
  font-weight: 600;
  background-color: #e7e7e7;
  color: #000000;
}

/* 네 번째 행: 장소 (가장 밝은 회색) */
.venue-row {
  background: #f5f5f5;
  color: #000000;
}

.venue-cell {
  padding: 6px 4px;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  text-align: center;
  vertical-align: middle;
  width: var(--session-column-width, calc((100% - 120px) / 8));
  font-size: 0.8rem;
  font-weight: 500;
  background-color: #f5f5f5;
  color: #000000;
}

.venue-cell.main-venue {
  font-weight: 600;
}

.venue-cell.sogang-venue {
  font-size: 0.75rem;
  font-weight: 600;
}

.time-row {
  border-bottom: 1px solid #000000;
  border-top: 1px solid #000000;
  transition: background-color 0.2s;
  min-height: 33px;
}

.time-row:hover {
  background-color: #f5f5f5;
}

.time-cell {
  padding: 6px 8px;
  border-right: 1px solid #000000;
  background-color: #e7e7e7;
  font-weight: 600;
  text-align: center;
  color: #000000;
  vertical-align: middle;
  font-size: 0.9rem;
  white-space: nowrap;
  width: 120px; /* 시간 컬럼 고정 너비 */
}

.session-cell {
  padding: 4px 6px;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
  background-color: white;
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
  line-height: 1.3;
  font-size: 0.85rem;
  position: relative;
  overflow: hidden; /* 긴 텍스트 숨김 */
  width: var(--session-column-width, calc((100% - 120px) / 8));
}

.session-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* 구 헤더 스타일 제거됨 - 3단계 헤더로 대체 */

/* 시간 스타일 제거됨 - 모든 시간이 동일한 스타일 */

/* 이벤트별 색상 정의 - 제공된 색상 스펙트럼 기반 */

/* 1. Registration (등록) - 연한 초록색: 등록/접수 */
.registration-session {
  background-color: #e8f5e8 !important;
  color: #000000 !important;
  font-weight: 600 !important;
}

/* 2. Keynote, Tutorial, Oral Session (핵심 발표, 튜토리얼, 구두발표) - 하늘색: 학술적/정보 전달 */
.keynote-session {
  background-color: #e6f2fd !important;
  color: #000000 !important;
  font-weight: 700 !important;
}

/* 2. Opening (개회식) - 베이지: Lunch와 동일한 색상 */

/* 3. Poster Session (포스터) - 라벤더: 상호작용/토론 */
.poster-session {
  background-color: #f3e5f5 !important;
  color: #000000 !important;
  font-weight: 600 !important;
}

/* 4. Industry Session (산업계) - 연초록: 실무/비즈니스 */
.industry-session {
  background-color: #c8e6c9 !important;
  color: #000000 !important;
  font-weight: 600 !important;
}

/* 5. Lunch (점심) - 베이지: 휴식/네트워킹 */
.lunch-session {
  background-color: #fff8dc !important;
  color: #000000 !important;
  font-weight: 600 !important;
  font-style: italic !important;
}

/* 6. Coffee (커피) - 연한 갈색: 휴식/카페 */
.Coffee-session {
  background-color: #f5e6d3 !important;
  color: #000000 !important;
  font-weight: 600 !important;
  font-style: italic !important;
}

/* 7. Social Events (사교행사) - 코랄 핑크: 사교/즐거움 */
.social-session {
  background-color: #ffb3ba !important;
  color: #000000 !important;
  font-weight: 600 !important;
}

/* 8. Closing/Award/Society meeting (폐회식/시상식/학회 모임) - 연초록: 공식/의례 */
.ceremony-session {
  background-color: #c8e6c9 !important;
  color: #000000 !important;
  font-weight: 700 !important;
}

/* 9. Special Events (특별 이벤트) - 연주황: 특별/독특함 */
.special-event-session {
  background-color: #ffe0b2 !important;
  color: #000000 !important;
  font-weight: 600 !important;
}

/* 10. WIMIR/Diversity - 연초록: 다양성/포용성 */
.diversity-session {
  background-color: #c8e6c9 !important;
  color: #000000 !important;
  font-weight: 600 !important;
}

/* 11. Late-Breaking/Demo - 라벤더: Poster Session과 동일 */
.demo-session {
  background-color: #ffe0b2 !important;
  color: #000000 !important;
  font-weight: 600 !important;
}

/* 특별한 세션 스타일링 */
.break-session {
  background-color: #f3e5f5 !important;
  font-style: italic !important;
}

.time-column {
  font-weight: 600 !important;
  color: #1976d2 !important;
  white-space: nowrap;
}

/* 긴 세션 스타일 */
.session-cell {
  position: relative;
}

/* 클릭 가능한 세션 스타일 */
.clickable-session {
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  position: relative !important;
}

.clickable-session:hover {
  transform: scale(1.02) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
  z-index: 5 !important;
}

.clickable-session:active {
  transform: scale(0.98) !important;
}

/* 클릭 가능한 세션에 다운로드 아이콘 힌트 추가 */
.clickable-session::after {
  content: "📅";
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 0.7rem;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.clickable-session:hover::after {
  opacity: 0.7;
}

/* 반응형 디자인 */
@media (max-width: 1200px) {
  .date-cell {
    font-size: 0.9rem;
    padding: 6px 3px;
    line-height: 1.1;
  }

  .day-cell {
    font-size: 0.85rem;
    padding: 5px 3px;
  }

  .event-type-cell {
    font-size: 0.8rem;
    padding: 5px 3px;
  }

  .venue-cell {
    font-size: 0.75rem;
    padding: 5px 3px;
  }

  .venue-cell.sogang-venue {
    font-size: 0.8rem;
    font-weight: 600;
  }

  .session-cell {
    font-size: 0.85rem;
    padding: 4px 3px;
  }

  .time-cell {
    font-size: 0.85rem;
  }

  .time-header {
    font-size: 0.95rem;
    min-height: 105px; /* 4행 헤더에 맞게 조정 */
  }
}

@media (max-width: 768px) {
  .date-cell {
    font-size: 0.85rem;
    padding: 6px 4px;
    line-height: 1.2;
    min-width: 80px; /* 최소 너비 보장 */
  }

  .day-cell {
    font-size: 0.8rem;
    padding: 5px 4px;
    min-width: 80px;
  }

  .event-type-cell {
    font-size: 0.8rem;
    padding: 5px 4px;
    min-width: 80px;
  }

  .venue-cell {
    font-size: 0.75rem;
    padding: 5px 4px;
    min-width: 80px;
  }

  .venue-cell.sogang-venue {
    font-size: 0.75rem;
    font-weight: 600;
  }

  .session-cell {
    font-size: 0.75rem;
    padding: 4px 3px;
    min-width: 80px;
    line-height: 1.3;
  }

  .time-cell {
    font-size: 0.85rem;
    width: 80px; /* 모바일에서 시간 컬럼 너비 증가 */
    min-width: 80px;
    padding: 6px 4px;
  }

  .time-header {
    font-size: 0.9rem;
    min-height: 100px; /* 4행 헤더에 맞게 조정 */
    width: 80px; /* 모바일에서 시간 컬럼 너비 증가 */
    min-width: 80px;
  }
}

@media (max-width: 480px) {
  .date-cell {
    font-size: 0.8rem;
    padding: 5px 3px;
    line-height: 1.1;
    min-width: 75px;
  }

  .day-cell {
    font-size: 0.75rem;
    padding: 4px 3px;
    min-width: 75px;
  }

  .event-type-cell {
    font-size: 0.75rem;
    padding: 4px 3px;
    min-width: 75px;
  }

  .venue-cell {
    font-size: 0.7rem;
    padding: 4px 3px;
    min-width: 75px;
  }

  .venue-cell.sogang-venue {
    font-size: 0.7rem;
    font-weight: 600;
  }

  .session-cell {
    font-size: 0.7rem;
    padding: 3px 2px;
    min-width: 75px;
    line-height: 1.2;
  }

  .time-cell {
    font-size: 0.8rem;
    width: 75px; /* 모바일에서 시간 컬럼 너비 */
    min-width: 75px;
    padding: 5px 3px;
  }

  .time-header {
    font-size: 0.85rem;
    min-height: 85px; /* 4행 헤더에 맞게 조정 */
    width: 75px; /* 모바일에서 시간 컬럼 너비 */
    min-width: 75px;
  }

  /* 매우 작은 화면에서 프로그램 테이블 최소 너비 */
  .program-table {
    min-width: 700px;
  }
}

/* 캘린더 메뉴 스타일 */
.calendar-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  z-index: 9999;
  backdrop-filter: blur(1px);
}

.calendar-menu-card {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
  border-radius: 8px !important;
  animation: menuFadeIn 0.2s ease-out;
}

@keyframes menuFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.calendar-option {
  transition: all 0.2s ease !important;
  border-radius: 4px !important;
  margin: 2px 8px !important;
}

.calendar-option:hover {
  background-color: rgba(25, 118, 210, 0.08) !important;
  transform: translateX(4px);
}

.calendar-icon {
  font-size: 1.2rem;
  margin-right: 8px;
}
</style>
