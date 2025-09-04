<template>
  <v-row justify="center" id="program">
    <v-col cols="12" md="10">
      <v-card outlined elevation="0" class="pa-4 my-4">
        <v-card-title class="text-h4 mb-3 font-weight-bold">
          This is a preliminary schedule of the ISMIR 2025 program
        </v-card-title>

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
                        :class="getSessionClass(cell.value)"
                        :rowspan="cell.rowspan"
                        :colspan="cell.colspan"
                      >
                        <div class="session-content">
                          {{ cell.value || "" }}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import googleSheetsService from "@/services/googleSheetsService";

// 반응형 데이터
const loading = ref(false);
const error = ref(null);
const sheetData = ref([]);
const mergedCellsInfo = ref({});

// 테이블 데이터 계산
const tableData = computed(() => {
  if (!sheetData.value || sheetData.value.length === 0) {
    return { headers: [], rows: [] };
  }

  const formattedData = googleSheetsService.formatDataAsTable(sheetData.value);

  // 8:30부터 22:00까지만 필터링 (Welcome Reception, Banquet 포함)
  if (formattedData.rows && formattedData.rows.length > 0) {
    const filteredRows = formattedData.rows.filter((row) => {
      if (!row || !row[0]) return false;

      const time = row[0].toString().trim();

      // 시간 형식 확인 (예: "9:00", "22:00", "9:30" 등)
      const timeMatch = time.match(/^(\d{1,2}):(\d{2})$/);
      if (!timeMatch) return false;

      const hours = parseInt(timeMatch[1]);
      const minutes = parseInt(timeMatch[2]);

      // 8:30 (8시간 30분)부터 22:00 (22시간 0분)까지
      const totalMinutes = hours * 60 + minutes;
      const startMinutes = 8.5 * 60; // 8:30
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
  const sessionColumnWidth = `calc((100% - 80px) / ${columnCount})`;
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
    // 줄바꿈 문자를 공백으로 정규화
    const normalizedSession = session
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .toLowerCase()
      .trim();

    console.log(
      `SESSION CLASSIFICATION: "${session}" → "${normalizedSession}"`
    );

    // 1. Tutorial, Oral Session, Keynote - 하늘색
    if (
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
      classes.push("coffee-session");
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
    // 기본값은 세션 컬럼 스타일 유지
  }

  return classes.join(" ");
};

// 완전 다이나믹: 원본 Google Sheets 데이터에서 병합 패턴 분석
const analyzeDataStructure = () => {
  const allRows = tableData.value.rows;
  if (!allRows || allRows.length === 0) return;

  console.log("=== DYNAMIC MERGE ANALYSIS ===");

  // 각 컬럼별로 내용이 있는 행들을 분석
  const columnContentMap = {};

  for (let rowIndex = 0; rowIndex < allRows.length; rowIndex++) {
    const row = allRows[rowIndex];
    const timeCell = row[0];

    for (let colIndex = 1; colIndex < row.length; colIndex++) {
      const cellValue = row[colIndex] ? row[colIndex].trim() : "";
      if (cellValue) {
        if (!columnContentMap[colIndex]) {
          columnContentMap[colIndex] = [];
        }
        columnContentMap[colIndex].push({
          rowIndex,
          time: timeCell,
          content: cellValue,
        });
      }
    }
  }

  // 각 컬럼의 내용 출력 (End 마커 포함)
  for (const [colIndex, contents] of Object.entries(columnContentMap)) {
    console.log(`Column ${colIndex} contents:`);
    contents.forEach((item, index) => {
      const nextItem = contents[index + 1];
      const duration = nextItem
        ? `${item.time} → ${nextItem.time}`
        : `${item.time} → END`;

      // End 마커 확인
      const isEndMarker = item.content.toLowerCase().trim() === "end";
      const marker = isEndMarker ? " [END MARKER]" : "";

      console.log(`  "${item.content}"${marker} at ${duration}`);
    });
  }

  console.log("=== END DYNAMIC ANALYSIS ===");
};

// 동적으로 이벤트 범위를 인식하여 rowspan 계산
const getSessionInfo = (cellValue, currentRowIndex, currentColIndex) => {
  // 첫 번째 호출에서만 데이터 구조 분석
  if (currentRowIndex === 0 && currentColIndex === 0) {
    analyzeDataStructure();
  }

  if (!cellValue || typeof cellValue !== "string") {
    return { rowspan: 1, isSpanned: false, sessionType: "" };
  }

  const trimmedValue = cellValue.trim();
  if (!trimmedValue) {
    return { rowspan: 1, isSpanned: false, sessionType: "" };
  }

  const allRows = tableData.value.rows;
  const currentTime = allRows[currentRowIndex]
    ? allRows[currentRowIndex][0]
    : "";

  // 해당 컬럼에서 다음 이벤트가 나타나는 시점을 찾아 rowspan 계산
  const rowspan = calculateDynamicRowspan(
    currentRowIndex,
    currentColIndex,
    allRows
  );

  if (rowspan > 1) {
    const endRowIndex = currentRowIndex + rowspan - 1;
    const endTime =
      endRowIndex < allRows.length ? allRows[endRowIndex][0] : "END";
    console.log(
      `AUTO-DETECTED ROWSPAN: "${trimmedValue}" | ${currentTime}→${endTime} | ${rowspan} slots`
    );
  }

  return {
    rowspan,
    isSpanned: false,
    sessionType: rowspan > 1 ? "auto-detected-merged" : "single-cell",
  };
};

// 분석된 데이터를 기반으로 한 정확한 rowspan 계산
const calculateDynamicRowspan = (currentRowIndex, currentColIndex, allRows) => {
  const actualColIndex = currentColIndex + 1; // 시간 컬럼을 제외했으므로 +1
  const currentTime = allRows[currentRowIndex]
    ? allRows[currentRowIndex][0]
    : "";

  // 분석 결과에서 해당 컬럼의 이벤트 정보 찾기
  const columnEvents = getColumnEvents(actualColIndex, allRows);
  const currentEvent = columnEvents.find(
    (event) => event.startTime === currentTime
  );

  if (currentEvent && currentEvent.endTime !== "END") {
    // 종료 시간이 명시된 경우, 해당 시간까지의 rowspan 계산
    const endRowIndex = findRowIndexByTime(currentEvent.endTime, allRows);
    if (endRowIndex > currentRowIndex) {
      let calculatedRowspan;
      if (currentEvent.includesEndMarker) {
        // "End" 마커가 있는 경우, 해당 행까지 포함
        calculatedRowspan = endRowIndex - currentRowIndex + 1;
        console.log(
          `END-MARKER ROWSPAN: "${currentEvent.content}" | ${currentEvent.startTime}→${currentEvent.endTime}[End] | ${calculatedRowspan} slots`
        );
      } else {
        // 다른 이벤트가 바로 시작하는 경우, 이전 행까지만
        calculatedRowspan = endRowIndex - currentRowIndex;
        console.log(
          `ANALYSIS-BASED ROWSPAN: "${currentEvent.content}" | ${currentEvent.startTime}→${currentEvent.endTime} | ${calculatedRowspan} slots`
        );
      }
      return calculatedRowspan;
    }
  } else if (currentEvent && currentEvent.endTime === "END") {
    // END까지인 경우, 마지막 시간까지 계산
    const lastRowIndex = allRows.length - 1;
    const calculatedRowspan = lastRowIndex - currentRowIndex + 1;
    console.log(
      `END-BASED ROWSPAN: "${currentEvent.content}" | ${currentEvent.startTime}→END | ${calculatedRowspan} slots`
    );
    return calculatedRowspan;
  }

  // 기본적으로 다음 이벤트까지만 계산 (1개 행 이벤트)
  return 1;
};

// 특정 컬럼의 모든 이벤트 정보 추출 ("End" 마커 포함)
const getColumnEvents = (colIndex, allRows) => {
  const events = [];

  for (let rowIndex = 0; rowIndex < allRows.length; rowIndex++) {
    const row = allRows[rowIndex];
    const time = row[0];
    const cellValue = row[colIndex] ? row[colIndex].trim() : "";

    // "End" 마커는 이벤트가 아니므로 건너뛰기
    if (cellValue && cellValue.toLowerCase() === "end") {
      continue;
    }

    if (cellValue && cellValue !== "") {
      // "End" 마커를 포함한 이벤트 종료 시점 찾기
      let nextEventTime = "END";
      let endIncludesEndMarker = false;

      for (
        let nextRowIndex = rowIndex + 1;
        nextRowIndex < allRows.length;
        nextRowIndex++
      ) {
        const nextRow = allRows[nextRowIndex];
        const nextCellValue = nextRow[colIndex] ? nextRow[colIndex].trim() : "";

        if (nextCellValue && nextCellValue !== "") {
          if (nextCellValue.toLowerCase() === "end") {
            // "End" 마커를 찾았으면 해당 행의 시간을 종료 시간으로 설정
            nextEventTime = nextRow[0];
            endIncludesEndMarker = true;
            break;
          } else {
            // 다른 이벤트를 찾았으면 해당 행의 시간을 종료 시간으로 설정
            nextEventTime = nextRow[0];
            break;
          }
        }
      }

      events.push({
        content: cellValue,
        startTime: time,
        endTime: nextEventTime,
        rowIndex: rowIndex,
        includesEndMarker: endIncludesEndMarker,
      });
    }
  }

  return events;
};

// 특정 시간에 해당하는 행 인덱스 찾기
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
        });
        continue;
      }

      const cellValue = originalRow[colIndex] || "";

      // "End" 마커인 경우 숨김 처리
      if (cellValue && cellValue.trim().toLowerCase() === "end") {
        processedRow.cells.push({
          value: "",
          hidden: true,
          rowspan: 1,
          colspan: 1,
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
      });
    }

    rows.push(processedRow);
  }

  return rows;
};

// 스프레드시트 데이터 로드
const loadSheetData = async () => {
  loading.value = true;
  error.value = null;

  try {
    // API 키가 있는지 확인
    if (
      !process.env.VUE_APP_GOOGLE_SHEETS_API_KEY ||
      process.env.VUE_APP_GOOGLE_SHEETS_API_KEY ===
        "your_google_sheets_api_key_here"
    ) {
      // API 키가 없으면 사용자에게 안내 메시지 표시
      error.value = `Google Sheets API 키가 설정되지 않았습니다. 
      
해결 방법:
1. 프로젝트 루트에 .env 파일을 생성하세요
2. VUE_APP_GOOGLE_SHEETS_API_KEY=your_api_key_here 를 추가하세요
3. Google Cloud Console에서 Sheets API를 활성화하고 API 키를 발급받으세요
4. 스프레드시트를 공개로 설정하세요 (링크 있는 사용자 모두 - 뷰어 권한)`;
      loading.value = false;
      return;
    }

    // 셀 데이터와 병합 정보를 함께 가져오기
    const [data, metadata] = await Promise.all([
      googleSheetsService.getSheetData("A1:Z100"),
      googleSheetsService.getSheetMetadata(),
    ]);

    sheetData.value = data;

    // 병합된 셀 정보 추출
    if (metadata && metadata.sheets) {
      mergedCellsInfo.value = googleSheetsService.getMergedCellsInfo(
        metadata.sheets,
        "Program"
      );
    }

    // 데이터 구조 디버깅
    console.log("=== 데이터 디버깅 ===");
    console.log("전체 데이터:", data);
    if (data && data.length > 0) {
      console.log("첫 번째 행 (헤더):", data[0]);
      console.log("두 번째 행:", data[1]);
      console.log("세 번째 행:", data[2]);
      console.log("네 번째 행 (장소):", data[3]);
      console.log("다섯 번째 행:", data[4]);
      console.log("첫 번째 데이터 행:", data[5]);
    }
    console.log("=== 변환된 테이블 데이터 ===");
    const formatted = googleSheetsService.formatDataAsTable(data);
    console.log("헤더:", formatted.headers);
    console.log("행 개수:", formatted.rows.length);
    if (formatted.rows.length > 0) {
      console.log("첫 번째 행:", formatted.rows[0]);
      console.log("두 번째 행:", formatted.rows[1]);
    }
    console.log("===================");
  } catch (err) {
    console.error("스프레드시트 데이터 로드 오류:", err);

    // 403 오류 특별 처리
    if (err.response && err.response.status === 403) {
      error.value = `Google Sheets 접근 권한 오류 (403)
       
해결 방법:
1. Google Sheets를 공개로 설정: "공유" → "링크 있는 사용자 모두" → "뷰어"
2. Google Cloud Console에서 Sheets API가 활성화되어 있는지 확인
3. API 키가 올바른지 확인
4. API 키에 IP/도메인 제한이 있다면 해제`;
    } else {
      error.value = err.message || "데이터를 불러오는 중 오류가 발생했습니다.";
    }
  } finally {
    loading.value = false;
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

/* 일일 프로그램 스케줄 테이블 스타일링 */
.program-table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  font-size: 1rem;
  table-layout: fixed; /* 고정 테이블 레이아웃으로 컬럼 너비 일정하게 */
  border: 2px solid #e7e7e7; /* 전체 표 바깥 테두리 */
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
  border-right: 2px solid #e7e7e7;
  background-color: #ffffff;
  text-align: center;
  font-size: 0.875rem;
  min-height: 120px; /* 4행 헤더에 맞게 높이 증가 */
  vertical-align: middle;
  width: 80px; /* 시간 컬럼 고정 너비 */
  font-weight: 700;
  box-shadow: inset -1px 0 0 0 #e7e7e7;
}

/* 4단계 헤더 스타일 - 회색 톤 계층 구조 */

/* 첫 번째 행: 날짜 (가장 어두운 회색) */
.date-row {
  background: #d0d0d0;
  color: #000000;
}

.date-cell {
  padding: 8px 4px;
  border-right: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  text-align: center;
  vertical-align: middle;
  width: var(--session-column-width, calc((100% - 80px) / 8));
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
  border-right: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  text-align: center;
  vertical-align: middle;
  width: var(--session-column-width, calc((100% - 80px) / 8));
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
  border-right: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  text-align: center;
  vertical-align: middle;
  width: var(--session-column-width, calc((100% - 80px) / 8));
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
  border-right: 1px solid #e7e7e7;
  text-align: center;
  vertical-align: middle;
  width: var(--session-column-width, calc((100% - 80px) / 8));
  font-size: 0.8rem;
  font-weight: 500;
  background-color: #f5f5f5;
  color: #000000;
}

.venue-cell.main-venue {
  font-weight: 600;
}

.venue-cell.sogang-venue {
  font-size: 0.6rem;
}

.time-row {
  border-bottom: 1px solid #e7e7e7;
  transition: background-color 0.2s;
  min-height: 33px;
}

.time-row:hover {
  background-color: #f5f5f5;
}

.time-cell {
  padding: 6px 8px;
  border-right: 1px solid #e7e7e7;
  background-color: #e7e7e7;
  font-weight: 600;
  text-align: center;
  color: #000000;
  vertical-align: middle;
  font-size: 0.9rem;
  white-space: nowrap;
  width: 80px; /* 시간 컬럼 고정 너비 */
}

.session-cell {
  padding: 4px 6px;
  border-right: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  background-color: white;
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
  line-height: 1.3;
  font-size: 0.85rem;
  position: relative;
  overflow: hidden; /* 긴 텍스트 숨김 */
  width: var(--session-column-width, calc((100% - 80px) / 8));
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

/* 1. Keynote, Tutorial, Oral Session (핵심 발표, 튜토리얼, 구두발표) - 하늘색: 학술적/정보 전달 */
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
  font-weight: 500 !important;
  font-style: italic !important;
}

/* 6. Coffee (커피) - 연갈색: 휴식/카페 */
.coffee-session {
  background-color: #e6d0a3 !important;
  color: #000000 !important;
  font-weight: 500 !important;
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
    font-size: 0.7rem;
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
    font-size: 0.8rem;
    padding: 5px 2px;
    line-height: 1.1;
    width: calc((100% - 40px) / 8);
  }

  .day-cell {
    font-size: 0.75rem;
    padding: 4px 2px;
    width: calc((100% - 40px) / 8);
  }

  .event-type-cell {
    font-size: 0.75rem;
    padding: 4px 2px;
    width: calc((100% - 40px) / 8);
  }

  .venue-cell {
    font-size: 0.7rem;
    padding: 4px 2px;
    width: calc((100% - 40px) / 8);
  }

  .venue-cell.sogang-venue {
    font-size: 0.65rem;
  }

  .session-cell {
    font-size: 0.7rem;
    padding: 3px 2px;
    width: calc((100% - 40px) / 8);
  }

  .time-cell {
    font-size: 0.8rem;
    width: 40px; /* 모바일에서 시간 컬럼 너비 절반으로 줄임 */
  }

  .time-header {
    font-size: 0.9rem;
    min-height: 90px; /* 4행 헤더에 맞게 조정 */
    width: 40px; /* 모바일에서 시간 컬럼 너비 절반으로 줄임 */
  }
}

@media (max-width: 480px) {
  .date-cell {
    font-size: 0.7rem;
    padding: 4px 1px;
    line-height: 1;
    width: calc((100% - 40px) / 8);
  }

  .day-cell {
    font-size: 0.65rem;
    padding: 3px 1px;
    width: calc((100% - 40px) / 8);
  }

  .event-type-cell {
    font-size: 0.7rem;
    padding: 3px 1px;
    width: calc((100% - 40px) / 8);
  }

  .venue-cell {
    font-size: 0.65rem;
    padding: 3px 1px;
    width: calc((100% - 40px) / 8);
  }

  .venue-cell.sogang-venue {
    font-size: 0.6rem;
  }

  .session-cell {
    font-size: 0.65rem;
    padding: 2px 1px;
    width: calc((100% - 40px) / 8);
  }

  .time-cell {
    font-size: 0.75rem;
    width: 40px; /* 모바일에서 시간 컬럼 너비 절반으로 줄임 */
  }

  .time-header {
    font-size: 0.85rem;
    min-height: 75px; /* 4행 헤더에 맞게 조정 */
    width: 40px; /* 모바일에서 시간 컬럼 너비 절반으로 줄임 */
  }
}
</style>
