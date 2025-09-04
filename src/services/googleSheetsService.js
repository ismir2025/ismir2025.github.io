import axios from 'axios';

// Google Sheets API 설정
const GOOGLE_SHEETS_API_KEY = process.env.VUE_APP_GOOGLE_SHEETS_API_KEY;
// 실제 스프레드시트 ID
const SPREADSHEET_ID = '18yGpr4opTzfOTULPKCAYSXuHLAfyMRXZFVmdyJOvlF0';
const SHEET_NAME = 'Program';

class GoogleSheetsService {
  constructor() {
    this.baseURL = 'https://sheets.googleapis.com/v4/spreadsheets';
  }

  async getSheetData(range = 'A1:Z100') {
    try {
      const fullRange = `${SHEET_NAME}!${range}`;
      const response = await axios.get(`${this.baseURL}/${SPREADSHEET_ID}/values/${fullRange}`, {
        params: {
          key: GOOGLE_SHEETS_API_KEY,
          majorDimension: 'ROWS'
        }
      });

      return response.data.values || [];
    } catch (error) {
      console.error('Google Sheets API 오류:', error);
      throw error;
    }
  }

  async getSheetMetadata() {
    try {
      const response = await axios.get(`${this.baseURL}/${SPREADSHEET_ID}`, {
        params: {
          key: GOOGLE_SHEETS_API_KEY,
          includeGridData: false,
          fields: 'sheets(properties,merges)' // 시트 속성과 병합 정보 포함
        }
      });

      return response.data;
    } catch (error) {
      console.error('Google Sheets 메타데이터 오류:', error);
      throw error;
    }
  }

  // 병합된 셀 정보를 기반으로 rowspan 정보 생성
  getMergedCellsInfo(sheets, sheetName) {
    if (!sheets || !Array.isArray(sheets)) return {};
    
    // 해당 시트 찾기
    const targetSheet = sheets.find(sheet => 
      sheet.properties && sheet.properties.title === sheetName
    );
    
    if (!targetSheet || !targetSheet.merges) return {};
    
    const mergedRanges = {};
    
    targetSheet.merges.forEach(merge => {
      const { startRowIndex, endRowIndex, startColumnIndex, endColumnIndex } = merge;
      
      // 병합의 시작 셀을 키로 사용 (5행부터 시작하므로 -5 조정)
      const adjustedStartRow = Math.max(0, startRowIndex - 5); // 실제 데이터 시작점 조정
      const key = `${adjustedStartRow}-${startColumnIndex}`;
      
      mergedRanges[key] = {
        rowspan: endRowIndex - startRowIndex,
        colspan: endColumnIndex - startColumnIndex,
        startRow: adjustedStartRow,
        endRow: endRowIndex - 5,
        startCol: startColumnIndex,
        endCol: endColumnIndex
      };
    });
    
    console.log('병합된 셀 정보:', mergedRanges);
    return mergedRanges;
  }

  // 스프레드시트 데이터를 HTML 테이블 형식으로 변환
  formatDataAsTable(data) {
    if (!data || data.length === 0) {
      return { headers: [], rows: [] };
    }

    // Google Sheets 구조:
    // 행 0: 날짜 ['', '9/20', '9/21', ...]
    // 행 1: 요일 ['', 'Sat', 'Sun', ...]
    // 행 2: 이벤트 타입 ['', 'Satelite event', 'Tutorial', ...]
    // 행 3: 장소 ['', '@KAIST', '@KAIST', ..., '@Sogang Univ., Seoul']
    // 행 4: 빈 행 (구분선)
    // 행 5부터: 실제 시간 데이터

    // 헤더는 첫 번째 행(날짜)을 사용
    const headers = data[0] || [];
    
    // 실제 데이터는 5번째 행부터 시작 (0-based index로 4번째)
    const rows = data.slice(5) || [];

    return {
      headers,
      rows
    };
  }
}

export default new GoogleSheetsService(); 