/**
 * ICS (iCalendar) 파일 생성 및 다운로드 서비스
 * ISMIR 2025 프로그램 스케줄용
 */

// ISMIR 2025 기본 정보 (필요시 사용)
// const CONFERENCE_INFO = {
//   name: 'ISMIR 2025',
//   location: 'KAIST, Daejeon, South Korea',
//   googleMapUrl: 'https://maps.google.com/?q=KAIST,+Daejeon,+South+Korea',
//   timezone: 'Asia/Seoul',
//   year: 2025,
//   month: 9, // September (0-based: 8, but we'll use 9 for clarity)
// };

// 날짜별 매핑 (9/20 = 2025-09-20)
const DATE_MAPPING = {
  '9/20': new Date(2025, 8, 20), // September 20, 2025
  '9/21': new Date(2025, 8, 21), // September 21, 2025
  '9/22': new Date(2025, 8, 22), // September 22, 2025
  '9/23': new Date(2025, 8, 23), // September 23, 2025
  '9/24': new Date(2025, 8, 24), // September 24, 2025
  '9/25': new Date(2025, 8, 25), // September 25, 2025
  '9/26': new Date(2025, 8, 26), // September 26, 2025
};

// 컬럼 인덱스별 날짜 매핑 (시간 컬럼 제외)
const COLUMN_TO_DATE = {
  1: '9/20', // Satellite
  2: '9/21', // Tutorial
  3: '9/22', // Conference Day 1
  4: '9/23', // Conference Day 2
  5: '9/24', // Conference Day 3
  6: '9/25', // Conference Day 4
  7: '9/26', // Satellite (KAIST)
  8: '9/26', // Satellite (Sogang)
};

// 장소 정보 매핑 (SectionVenue.vue 기반)
const LOCATION_MAPPING = {
  1: 'KAIST, Daejeon, South Korea', // 9/20 Satellite
  2: 'KAIST Creative Learning Building E11, Daejeon, South Korea', // 9/21 Tutorial
  3: 'KAIST Main Auditorium E15, Daejeon, South Korea', // 9/22 Conference
  4: 'KAIST Main Auditorium E15, Daejeon, South Korea', // 9/23 Conference
  5: 'KAIST Main Auditorium E15, Daejeon, South Korea', // 9/24 Conference
  6: 'KAIST Main Auditorium E15, Daejeon, South Korea', // 9/25 Conference
  7: 'KAIST, Daejeon, South Korea', // 9/26 KAIST Satellite
  8: 'Sogang University, Seoul, South Korea', // 9/26 Sogang Satellite
};

// Google Maps URL 매핑 (SectionVenue.vue의 실제 embed URL 기반)
const GOOGLE_MAPS_URLS = {
  1: 'https://maps.app.goo.gl/5RB8d6FcahjnnGgg9', // 9/20 KAIST 종합 지도
  2: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3213.8!2d127.3625834!3d36.3703695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bc9c84e5adb%3A0xf0cf3620fc28fc1d!2sCreative%20Learning%20Building%20E11!5e0!3m2!1sen!2skr!4v1635000000000!5m2!1sen!2skr', // 9/21 E11
  3: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.7!2d127.3629259!3d36.3720843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bc98a6db1a1%3A0x8f5575e3fc5de4e7!2sKAIST%20E15%20%EB%8C%80%EA%B0%95%EB%8B%B9%2C%20%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%98%A8%EC%B2%9C2%EB%8F%99!5e0!3m2!1sko!2skr!4v1735000000000!5m2!1sko!2skr', // 9/22-25 E15
  4: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.7!2d127.3629259!3d36.3720843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bc98a6db1a1%3A0x8f5575e3fc5de4e7!2sKAIST%20E15%20%EB%8C%80%EA%B0%95%EB%8B%B9%2C%20%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%98%A8%EC%B2%9C2%EB%8F%99!5e0!3m2!1sko!2skr!4v1735000000000!5m2!1sko!2skr', // 9/23 E15
  5: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.7!2d127.3629259!3d36.3720843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bc98a6db1a1%3A0x8f5575e3fc5de4e7!2sKAIST%20E15%20%EB%8C%80%EA%B0%95%EB%8B%B9%2C%20%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%98%A8%EC%B2%9C2%EB%8F%99!5e0!3m2!1sko!2skr!4v1735000000000!5m2!1sko!2skr', // 9/24 E15
  6: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.7!2d127.3629259!3d36.3720843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bc98a6db1a1%3A0x8f5575e3fc5de4e7!2sKAIST%20E15%20%EB%8C%80%EA%B0%95%EB%8B%B9%2C%20%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%98%A8%EC%B2%9C2%EB%8F%99!5e0!3m2!1sko!2skr!4v1735000000000!5m2!1sko!2skr', // 9/25 E15
  7: 'https://maps.app.goo.gl/5RB8d6FcahjnnGgg9', // 9/26 KAIST 종합 지도
  8: 'https://maps.google.com/?q=Sogang+University,+Seoul,+South+Korea', // 9/26 Sogang
};

/**
 * 시간 문자열을 파싱하여 시작/종료 시간을 반환
 * @param {string} timeString - "09:00 - 09:30" 형식의 시간 문자열
 * @returns {Object} {startHour, startMinute, endHour, endMinute}
 */
function parseTimeString(timeString) {
  const timeMatch = timeString.match(/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/);
  if (!timeMatch) {
    throw new Error(`Invalid time format: ${timeString}`);
  }

  return {
    startHour: parseInt(timeMatch[1]),
    startMinute: parseInt(timeMatch[2]),
    endHour: parseInt(timeMatch[3]),
    endMinute: parseInt(timeMatch[4]),
  };
}

/**
 * Date 객체를 ICS 형식의 날짜 문자열로 변환
 * @param {Date} date - 변환할 Date 객체
 * @returns {string} YYYYMMDDTHHMMSSZ 형식의 문자열
 */
function formatICSDate(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

/**
 * 고유한 UID 생성
 * @param {string} eventTitle - 이벤트 제목
 * @param {string} dateStr - 날짜 문자열
 * @param {string} timeStr - 시간 문자열
 * @returns {string} 고유한 UID
 */
function generateUID(eventTitle, dateStr, timeStr) {
  const cleanTitle = eventTitle.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const cleanTime = timeStr.replace(/[^0-9]/g, '');
  return `${cleanTitle}-${dateStr.replace('/', '')}-${cleanTime}@ismir2025.github.io`;
}

/**
 * 이벤트 제목 정리 및 향상
 * @param {string} rawTitle - 원본 제목
 * @returns {string} 정리된 제목
 */
function cleanEventTitle(rawTitle) {
  if (!rawTitle || typeof rawTitle !== 'string') {
    return 'ISMIR 2025 Event';
  }

  // 줄바꿈 문자를 공백으로 변환하고 여러 공백을 하나로 정리
  let cleaned = rawTitle.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
  
  // 이모지 제거 (선택사항)
  cleaned = cleaned.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim();
  
  // ISMIR 2025 접두사 추가 (이미 있지 않은 경우)
  if (!cleaned.toLowerCase().includes('ismir')) {
    cleaned = `ISMIR 2025 - ${cleaned}`;
  }

  return cleaned;
}

/**
 * 이벤트 설명 생성
 * @param {string} eventTitle - 이벤트 제목
 * @param {string} location - 장소
 * @param {string} googleMapUrl - Google Maps URL
 * @returns {string} 이벤트 설명
 */
function generateEventDescription(eventTitle, location, googleMapUrl) {
  const description = [
    `ISMIR 2025 Conference Event: ${eventTitle}`,
    '',
    `Location: ${location}`,
    `Google Maps: ${googleMapUrl}`,
    '',
    'International Society for Music Information Retrieval Conference 2025'
  ];

  return description.join('\\n');
}

/**
 * Google Maps embed URL을 일반 사용자 URL로 변환
 * @param {string} embedUrl - embed URL
 * @returns {string} 사용자가 클릭할 수 있는 URL
 */
function convertEmbedToUserUrl(embedUrl) {
  // 이미 일반 URL인 경우 그대로 반환
  if (!embedUrl.includes('/embed')) {
    return embedUrl;
  }
  
  // embed URL에서 place ID 추출
  const placeIdMatch = embedUrl.match(/!1s([^!]+)/);
  if (placeIdMatch) {
    const placeId = placeIdMatch[1];
    return `https://maps.google.com/?cid=${placeId}`;
  }
  
  // place ID를 찾을 수 없는 경우 좌표 기반으로 변환
  const coordMatch = embedUrl.match(/!2d([^!]+)!3d([^!]+)/);
  if (coordMatch) {
    const lng = coordMatch[1];
    const lat = coordMatch[2];
    return `https://maps.google.com/?q=${lat},${lng}`;
  }
  
  // 변환할 수 없는 경우 기본 KAIST 검색
  return 'https://maps.google.com/?q=KAIST,+Daejeon,+South+Korea';
}

/**
 * 이벤트 타입에 따른 특별한 장소 정보 가져오기
 * @param {string} eventTitle - 이벤트 제목
 * @param {number} columnIndex - 컬럼 인덱스
 * @returns {Object} {location, googleMapUrl}
 */
function getEventSpecificVenue(eventTitle, columnIndex) {
  const normalizedTitle = eventTitle.toLowerCase().trim();
  
  // Welcome Reception - Golfzon Zoimaru (9/21)
  if (normalizedTitle.includes('welcome') || normalizedTitle.includes('reception')) {
    return {
      location: 'Golfzon Zoimaru, Daejeon, South Korea',
      googleMapUrl: 'https://maps.google.com/?q=골프존+조이마루,+대전'
    };
  }
  
  // Banquet & Jam Session - ICC Hotel (9/24)
  if (normalizedTitle.includes('banquet') || normalizedTitle.includes('jam')) {
    return {
      location: 'ICC Hotel, Daejeon, South Korea',
      googleMapUrl: 'https://maps.google.com/?q=호텔ICC,+대전'
    };
  }
  
  // Tutorial Sessions - E11 (9/21)
  if (normalizedTitle.includes('tutorial') && columnIndex === 2) {
    return {
      location: 'KAIST Creative Learning Building E11, Daejeon, South Korea',
      googleMapUrl: 'https://maps.google.com/?q=KAIST+Creative+Learning+Building+E11,+Daejeon'
    };
  }
  
  // 기본값: 컬럼 기반 매핑 사용하되 사용자 친화적 URL로 변환
  const baseUrl = GOOGLE_MAPS_URLS[columnIndex];
  return {
    location: LOCATION_MAPPING[columnIndex],
    googleMapUrl: convertEmbedToUserUrl(baseUrl)
  };
}

/**
 * ICS 파일 내용 생성
 * @param {Object} eventData - 이벤트 데이터
 * @param {string} eventData.title - 이벤트 제목
 * @param {string} eventData.timeString - 시간 문자열 ("09:00 - 09:30")
 * @param {number} eventData.columnIndex - 컬럼 인덱스 (1-8)
 * @returns {string} ICS 파일 내용
 */
export function generateICSContent(eventData) {
  const { title, timeString, columnIndex } = eventData;

  // 입력 검증
  if (!title || !timeString || !columnIndex) {
    throw new Error('Missing required event data');
  }

  // 날짜 및 시간 정보 추출
  const dateStr = COLUMN_TO_DATE[columnIndex];
  const baseDate = DATE_MAPPING[dateStr];
  
  // 이벤트별 특별한 장소 정보 가져오기
  const venueInfo = getEventSpecificVenue(title, columnIndex);
  const location = venueInfo.location;
  const googleMapUrl = venueInfo.googleMapUrl;

  if (!baseDate) {
    throw new Error(`Invalid column index: ${columnIndex}`);
  }

  // 시간 파싱
  const { startHour, startMinute, endHour, endMinute } = parseTimeString(timeString);

  // 시작/종료 시간 생성 (KST 기준)
  const startDate = new Date(baseDate);
  startDate.setHours(startHour, startMinute, 0, 0);

  const endDate = new Date(baseDate);
  endDate.setHours(endHour, endMinute, 0, 0);

  // ICS 형식으로 변환
  const dtStamp = formatICSDate(new Date());

  // 이벤트 정보 정리
  const cleanTitle = cleanEventTitle(title);
  const description = generateEventDescription(title, location, googleMapUrl);
  const uid = generateUID(title, dateStr, timeString);

  // ICS 내용 생성
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ISMIR 2025//Conference Schedule//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VTIMEZONE',
    'TZID:Asia/Seoul',
    'BEGIN:STANDARD',
    'DTSTART:19700101T000000',
    'TZOFFSETFROM:+0900',
    'TZOFFSETTO:+0900',
    'TZNAME:KST',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART;TZID=Asia/Seoul:${formatICSDate(startDate).replace('Z', '')}`,
    `DTEND;TZID=Asia/Seoul:${formatICSDate(endDate).replace('Z', '')}`,
    `SUMMARY:${cleanTitle}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'CATEGORIES:CONFERENCE,ACADEMIC,MUSIC,TECHNOLOGY',
    'END:VEVENT',
    'END:VCALENDAR'
  ];

  return icsContent.join('\r\n');
}

/**
 * ICS 파일 다운로드
 * @param {Object} eventData - 이벤트 데이터
 */
export function downloadICSFile(eventData) {
  try {
    const icsContent = generateICSContent(eventData);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    
    // 파일명 생성
    const cleanTitle = cleanEventTitle(eventData.title)
      .replace(/[^a-zA-Z0-9\s-]/g, '')
      .replace(/\s+/g, '_')
      .toLowerCase();
    const dateStr = COLUMN_TO_DATE[eventData.columnIndex].replace('/', '-');
    const filename = `ismir2025_${cleanTitle}_${dateStr}.ics`;

    // 다운로드 실행
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log(`ICS file downloaded: ${filename}`);
  } catch (error) {
    console.error('ICS 파일 생성 중 오류 발생:', error);
    alert('일정 파일을 생성하는 중 오류가 발생했습니다. 다시 시도해주세요.');
  }
}

/**
 * 이벤트 데이터 검증
 * @param {string} cellValue - 셀 값
 * @returns {boolean} 유효한 이벤트인지 여부
 */
export function isValidEvent(cellValue) {
  if (!cellValue || typeof cellValue !== 'string') {
    return false;
  }

  const trimmed = cellValue.trim().toLowerCase();
  
  // 빈 셀이나 "End" 마커는 이벤트가 아님
  if (!trimmed || trimmed === 'end') {
    return false;
  }

  return true;
}

export default {
  generateICSContent,
  downloadICSFile,
  isValidEvent,
};
