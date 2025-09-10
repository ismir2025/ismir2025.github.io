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

// 장소 정보 매핑 (SectionVenue.vue와 SectionCampusMapPage.vue 기반)
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

// 상세 장소 정보 매핑 (건물별 구체적인 룸 정보) - 향후 확장을 위한 준비
// eslint-disable-next-line no-unused-vars
const DETAILED_LOCATION_MAPPING = {
  // Tutorial Sessions (9/21 @ E11)
  'tutorial': {
    building: 'KAIST Creative Learning Building E11',
    rooms: {
      'morning': ['T1@E11-101A', 'T2@E11-102A', 'T3@E11-103A'], // 09:00-12:30
      'afternoon': ['T4@E11-101A', 'T5@E11-102A', 'T6@E11-103A'] // 14:00-17:30
    },
    address: 'KAIST, Daejeon, South Korea',
    registration: 'E11 1F Lobby'
  },
  // Main Conference (9/22-25 @ E15)
  'conference': {
    building: 'KAIST Main Auditorium E15',
    rooms: {
      'oral': 'E15 Concert Hall',
      'poster': 'E15 Seminar Room',
      'keynote': 'E15 Concert Hall',
      'registration': 'E15 1F Lobby'
    },
    address: 'KAIST, Daejeon, South Korea'
  },
  // Special Venues
  'welcome_reception': {
    venue: 'Golfzon Zoimaru',
    address: 'Daejeon, South Korea',
    date: '9/21',
    time: '18:30 - 21:00'
  },
  'banquet': {
    venue: 'ICC Hotel',
    address: 'Daejeon, South Korea',
    date: '9/24',
    time: '19:30 - 22:00'
  }
};

// Google Maps URL 매핑 (SectionVenue.vue의 실제 사용 가능한 링크)
const GOOGLE_MAPS_URLS = {
  1: 'https://maps.app.goo.gl/5RB8d6FcahjnnGgg9', // 9/20 KAIST 종합 지도
  2: 'https://maps.google.com/?q=KAIST+Creative+Learning+Building+E11,+Daejeon,+South+Korea', // 9/21 E11
  3: 'https://maps.google.com/?q=KAIST+E15+대강당,+대전광역시+유성구', // 9/22-25 E15
  4: 'https://maps.google.com/?q=KAIST+E15+대강당,+대전광역시+유성구', // 9/23 E15
  5: 'https://maps.google.com/?q=KAIST+E15+대강당,+대전광역시+유성구', // 9/24 E15
  6: 'https://maps.google.com/?q=KAIST+E15+대강당,+대전광역시+유성구', // 9/25 E15
  7: 'https://maps.app.goo.gl/5RB8d6FcahjnnGgg9', // 9/26 KAIST 종합 지도
  8: 'https://maps.google.com/?q=Sogang+University,+Seoul,+South+Korea', // 9/26 Sogang
};

// 특별 이벤트별 Google Maps URL
const SPECIAL_EVENT_MAPS = {
  'welcome_reception': 'https://maps.google.com/?q=골프존+조이마루,+대전',
  'banquet': 'https://maps.google.com/?q=호텔ICC,+대전',
  'k_culture': 'https://maps.google.com/?q=KAIST+E15+대강당,+대전광역시+유성구',
  'korean_concert': 'https://maps.google.com/?q=KAIST+E15+대강당,+대전광역시+유성구',
  'hcmir25': 'https://maps.app.goo.gl/btnbicuVZpe12Cd49'
};

// 특별 이벤트 실제 시간 매핑 (30분 단위 스케줄의 한계 극복)
const SPECIAL_EVENT_TIMES = {
  'hcmir25': {
    date: '9/20',
    startTime: '14:00',
    endTime: '18:00',
    location: 'Room #3229, Paik Nam June Hall (백남준 Hall), N25 Building, Industrial Design Department, KAIST',
    googleMapUrl: 'https://maps.app.goo.gl/btnbicuVZpe12Cd49'
  },
  'tutorial_morning': {
    date: '9/21',
    startTime: '09:00',
    endTime: '12:30',
    location: 'KAIST Creative Learning Building E11, Daejeon, South Korea'
  },
  'tutorial_afternoon': {
    date: '9/21', 
    startTime: '14:00',
    endTime: '17:30',
    location: 'KAIST Creative Learning Building E11, Daejeon, South Korea'
  },
  'welcome_reception': {
    date: '9/21',
    startTime: '18:30',
    endTime: '21:30',
    location: 'Golfzon Zoimaru, Daejeon, South Korea',
    googleMapUrl: 'https://maps.google.com/?q=골프존+조이마루,+대전'
  },
  'registration_921': {
    date: '9/21',
    startTime: '07:00',
    endTime: '09:00',
    location: 'KAIST Creative Learning Building E11, Daejeon, South Korea'
  },
  'lunch_921': {
    date: '9/21',
    startTime: '12:30',
    endTime: '14:00',
    location: 'KAIST Creative Learning Building E11, Daejeon, South Korea'
  },
  // 9/22 Conference Day 1 이벤트들
  'registration_922': {
    date: '9/22',
    startTime: '07:00',
    endTime: '08:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'opening_922': {
    date: '9/22',
    startTime: '08:30',
    endTime: '09:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'oral_session_1_922': {
    date: '9/22',
    startTime: '09:00',
    endTime: '10:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'coffee_poster_1_922': {
    date: '9/22',
    startTime: '10:30',
    endTime: '12:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'lunch_922': {
    date: '9/22',
    startTime: '12:00',
    endTime: '13:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'keynote_1_922': {
    date: '9/22',
    startTime: '13:00',
    endTime: '14:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'oral_session_2_922': {
    date: '9/22',
    startTime: '14:30',
    endTime: '16:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'poster_session_2_922': {
    date: '9/22',
    startTime: '16:00',
    endTime: '17:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'industry_meetup_922': {
    date: '9/22',
    startTime: '17:30',
    endTime: '18:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'music_program_922': {
    date: '9/22',
    startTime: '19:30',
    endTime: '20:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  // 9/23 Conference Day 2 이벤트들
  'registration_923': {
    date: '9/23',
    startTime: '08:00',
    endTime: '09:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'oral_session_3_923': {
    date: '9/23',
    startTime: '09:00',
    endTime: '10:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'coffee_poster_3_923': {
    date: '9/23',
    startTime: '10:30',
    endTime: '12:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'lunch_923': {
    date: '9/23',
    startTime: '12:00',
    endTime: '13:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'industry_session_923': {
    date: '9/23',
    startTime: '13:00',
    endTime: '14:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'oral_session_4_923': {
    date: '9/23',
    startTime: '14:30',
    endTime: '16:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'poster_session_4_923': {
    date: '9/23',
    startTime: '16:00',
    endTime: '17:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'wimir_session_923': {
    date: '9/23',
    startTime: '17:30',
    endTime: '18:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'k_culture_evening_923': {
    date: '9/23',
    startTime: '18:30',
    endTime: '19:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'korean_traditional_music_923': {
    date: '9/23',
    startTime: '19:30',
    endTime: '20:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  // 9/24 Conference Day 3 이벤트들
  'registration_924': {
    date: '9/24',
    startTime: '08:00',
    endTime: '09:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'oral_session_5_924': {
    date: '9/24',
    startTime: '09:00',
    endTime: '10:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'coffee_poster_5_924': {
    date: '9/24',
    startTime: '10:30',
    endTime: '12:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'lunch_924': {
    date: '9/24',
    startTime: '12:00',
    endTime: '13:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'keynote_2_924': {
    date: '9/24',
    startTime: '13:00',
    endTime: '14:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'oral_session_6_924': {
    date: '9/24',
    startTime: '14:30',
    endTime: '16:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'poster_session_6_924': {
    date: '9/24',
    startTime: '16:00',
    endTime: '17:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'special_session_924': {
    date: '9/24',
    startTime: '17:30',
    endTime: '18:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  // 9/25 Conference Day 4 이벤트들
  'registration_925': {
    date: '9/25',
    startTime: '08:00',
    endTime: '09:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'oral_session_7_925': {
    date: '9/25',
    startTime: '09:00',
    endTime: '10:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'coffee_poster_7_925': {
    date: '9/25',
    startTime: '10:30',
    endTime: '12:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'lunch_925': {
    date: '9/25',
    startTime: '12:00',
    endTime: '13:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'society_meeting_925': {
    date: '9/25',
    startTime: '13:00',
    endTime: '14:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'award_talks_925': {
    date: '9/25',
    startTime: '14:00',
    endTime: '14:30',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'closing_remarks_925': {
    date: '9/25',
    startTime: '14:30',
    endTime: '15:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'late_breaking_demo_925': {
    date: '9/25',
    startTime: '15:00',
    endTime: '17:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'unconference_925': {
    date: '9/25',
    startTime: '17:00',
    endTime: '18:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  // 9/26 Workshop Day 이벤트들
  'llm4ma_workshop_926': {
    date: '9/26',
    startTime: '09:00',
    endTime: '17:00',
    location: 'KAIST Main Auditorium E15, Daejeon, South Korea'
  },
  'dlfm_workshop_926': {
    date: '9/26',
    startTime: '09:00',
    endTime: '17:00',
    location: 'Sogang University, Seoul, South Korea'
  },
  'banquet': {
    date: '9/24',
    startTime: '19:30', 
    endTime: '22:00',
    location: 'ICC Hotel, Daejeon, South Korea',
    googleMapUrl: 'https://maps.google.com/?q=호텔ICC,+대전'
  }
};

/**
 * 특별 이벤트 감지 및 실제 시간 정보 반환
 * @param {string} eventTitle - 이벤트 제목
 * @param {number} columnIndex - 컬럼 인덱스
 * @returns {Object|null} 특별 이벤트 정보 또는 null
 */
function getSpecialEventTime(eventTitle, columnIndex) {
  // 윗첨자 제거 (¹²³⁴⁵⁶⁷⁸⁹⁰) 후 정규화
  const normalizedTitle = eventTitle
    .toLowerCase()
    .replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, '') // 윗첨자 제거
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  // HCMIR25 이벤트
  if (normalizedTitle.includes('hcmir') && columnIndex === 1) {
    console.log('HCMIR25 특별 이벤트 감지됨:', eventTitle, 'columnIndex:', columnIndex);
    return SPECIAL_EVENT_TIMES.hcmir25;
  }
  
  // Tutorial 세션들
  if (normalizedTitle.includes('tutorial') && columnIndex === 2) {
    if (normalizedTitle.includes('t1') || normalizedTitle.includes('t2') || normalizedTitle.includes('t3')) {
      return SPECIAL_EVENT_TIMES.tutorial_morning;
    } else if (normalizedTitle.includes('t4') || normalizedTitle.includes('t5') || normalizedTitle.includes('t6')) {
      return SPECIAL_EVENT_TIMES.tutorial_afternoon;
    }
  }
  
  // 9/21 Registration 이벤트 (07:00-09:00 통합)
  if (normalizedTitle.includes('registration') && columnIndex === 2) {
    return SPECIAL_EVENT_TIMES.registration_921;
  }
  
  // 9/21 Lunch 이벤트
  if (normalizedTitle.includes('lunch') && columnIndex === 2) {
    return SPECIAL_EVENT_TIMES.lunch_921;
  }
  
  // 9/22 Conference Day 1 이벤트들
  if (columnIndex === 3) {
    // Registration
    if (normalizedTitle.includes('registration')) {
      return SPECIAL_EVENT_TIMES.registration_922;
    }
    // Opening
    if (normalizedTitle.includes('opening')) {
      return SPECIAL_EVENT_TIMES.opening_922;
    }
    // Oral Session 1
    if (normalizedTitle.includes('oral') && normalizedTitle.includes('session') && normalizedTitle.includes('1')) {
      return SPECIAL_EVENT_TIMES.oral_session_1_922;
    }
    // Coffee + Poster Session 1
    if ((normalizedTitle.includes('coffee') && normalizedTitle.includes('poster')) && normalizedTitle.includes('1')) {
      return SPECIAL_EVENT_TIMES.coffee_poster_1_922;
    }
    // Lunch
    if (normalizedTitle.includes('lunch')) {
      return SPECIAL_EVENT_TIMES.lunch_922;
    }
    // Keynote 1
    if (normalizedTitle.includes('keynote') && normalizedTitle.includes('1')) {
      return SPECIAL_EVENT_TIMES.keynote_1_922;
    }
    // Oral Session 2
    if (normalizedTitle.includes('oral') && normalizedTitle.includes('session') && normalizedTitle.includes('2')) {
      return SPECIAL_EVENT_TIMES.oral_session_2_922;
    }
    // Poster Session 2
    if (normalizedTitle.includes('poster') && normalizedTitle.includes('session') && normalizedTitle.includes('2')) {
      return SPECIAL_EVENT_TIMES.poster_session_2_922;
    }
    // Industry Meetup
    if (normalizedTitle.includes('industry') && normalizedTitle.includes('meetup')) {
      return SPECIAL_EVENT_TIMES.industry_meetup_922;
    }
    // ISMIR Music Program
    if (normalizedTitle.includes('ismir') && normalizedTitle.includes('music')) {
      return SPECIAL_EVENT_TIMES.music_program_922;
    }
  }
  
  // 9/23 Conference Day 2 이벤트들
  if (columnIndex === 4) {
    // Registration
    if (normalizedTitle.includes('registration')) {
      return SPECIAL_EVENT_TIMES.registration_923;
    }
    // Oral Session 3
    if (normalizedTitle.includes('oral') && normalizedTitle.includes('session') && normalizedTitle.includes('3')) {
      return SPECIAL_EVENT_TIMES.oral_session_3_923;
    }
    // Coffee + Poster Session 3
    if ((normalizedTitle.includes('coffee') && normalizedTitle.includes('poster')) && normalizedTitle.includes('3')) {
      return SPECIAL_EVENT_TIMES.coffee_poster_3_923;
    }
    // Lunch
    if (normalizedTitle.includes('lunch')) {
      return SPECIAL_EVENT_TIMES.lunch_923;
    }
    // Industry Session
    if (normalizedTitle.includes('industry') && normalizedTitle.includes('session')) {
      return SPECIAL_EVENT_TIMES.industry_session_923;
    }
    // Oral Session 4
    if (normalizedTitle.includes('oral') && normalizedTitle.includes('session') && normalizedTitle.includes('4')) {
      return SPECIAL_EVENT_TIMES.oral_session_4_923;
    }
    // Poster Session 4
    if (normalizedTitle.includes('poster') && normalizedTitle.includes('session') && normalizedTitle.includes('4')) {
      return SPECIAL_EVENT_TIMES.poster_session_4_923;
    }
    // WIMIR Session
    if (normalizedTitle.includes('wimir')) {
      return SPECIAL_EVENT_TIMES.wimir_session_923;
    }
    // K-Culture Evening
    if (normalizedTitle.includes('k-culture') || normalizedTitle.includes('culture')) {
      return SPECIAL_EVENT_TIMES.k_culture_evening_923;
    }
    // Korean Traditional Music Concert
    if (normalizedTitle.includes('korean') && normalizedTitle.includes('traditional') && normalizedTitle.includes('music')) {
      return SPECIAL_EVENT_TIMES.korean_traditional_music_923;
    }
  }
  
  // 9/24 Conference Day 3 이벤트들
  if (columnIndex === 5) {
    // Registration
    if (normalizedTitle.includes('registration')) {
      return SPECIAL_EVENT_TIMES.registration_924;
    }
    // Oral Session 5
    if (normalizedTitle.includes('oral') && normalizedTitle.includes('session') && normalizedTitle.includes('5')) {
      return SPECIAL_EVENT_TIMES.oral_session_5_924;
    }
    // Coffee + Poster Session 5
    if ((normalizedTitle.includes('coffee') && normalizedTitle.includes('poster')) && normalizedTitle.includes('5')) {
      return SPECIAL_EVENT_TIMES.coffee_poster_5_924;
    }
    // Lunch
    if (normalizedTitle.includes('lunch')) {
      return SPECIAL_EVENT_TIMES.lunch_924;
    }
    // Keynote 2
    if (normalizedTitle.includes('keynote') && normalizedTitle.includes('2')) {
      return SPECIAL_EVENT_TIMES.keynote_2_924;
    }
    // Oral Session 6
    if (normalizedTitle.includes('oral') && normalizedTitle.includes('session') && normalizedTitle.includes('6')) {
      return SPECIAL_EVENT_TIMES.oral_session_6_924;
    }
    // Poster Session 6
    if (normalizedTitle.includes('poster') && normalizedTitle.includes('session') && normalizedTitle.includes('6')) {
      return SPECIAL_EVENT_TIMES.poster_session_6_924;
    }
    // Special Session
    if (normalizedTitle.includes('special') && normalizedTitle.includes('session')) {
      return SPECIAL_EVENT_TIMES.special_session_924;
    }
  }
  
  // 9/25 Conference Day 4 이벤트들
  if (columnIndex === 6) {
    // Registration
    if (normalizedTitle.includes('registration')) {
      return SPECIAL_EVENT_TIMES.registration_925;
    }
    // Oral Session 7
    if (normalizedTitle.includes('oral') && normalizedTitle.includes('session') && normalizedTitle.includes('7')) {
      return SPECIAL_EVENT_TIMES.oral_session_7_925;
    }
    // Coffee + Poster Session 7
    if ((normalizedTitle.includes('coffee') && normalizedTitle.includes('poster')) && normalizedTitle.includes('7')) {
      return SPECIAL_EVENT_TIMES.coffee_poster_7_925;
    }
    // Lunch
    if (normalizedTitle.includes('lunch')) {
      return SPECIAL_EVENT_TIMES.lunch_925;
    }
    // Society Meeting / Board Election
    if (normalizedTitle.includes('society') || normalizedTitle.includes('board') || normalizedTitle.includes('meeting')) {
      return SPECIAL_EVENT_TIMES.society_meeting_925;
    }
    // Award and Test-of-Time Talks
    if (normalizedTitle.includes('award') || normalizedTitle.includes('test-of-time')) {
      return SPECIAL_EVENT_TIMES.award_talks_925;
    }
    // Closing Remarks, ISMIR 2026
    if (normalizedTitle.includes('closing') || normalizedTitle.includes('remarks') || normalizedTitle.includes('2026')) {
      return SPECIAL_EVENT_TIMES.closing_remarks_925;
    }
    // Late-Breaking/Demo
    if (normalizedTitle.includes('late-breaking') || normalizedTitle.includes('demo')) {
      return SPECIAL_EVENT_TIMES.late_breaking_demo_925;
    }
    // Unconference
    if (normalizedTitle.includes('unconference')) {
      return SPECIAL_EVENT_TIMES.unconference_925;
    }
  }
  
  // 9/26 Workshop Day 이벤트들
  if (columnIndex === 7) {
    // LLM4MA Workshop
    if (normalizedTitle.includes('llm4ma')) {
      return SPECIAL_EVENT_TIMES.llm4ma_workshop_926;
    }
    // DLfM Workshop
    if (normalizedTitle.includes('dlfm')) {
      return SPECIAL_EVENT_TIMES.dlfm_workshop_926;
    }
  }
  
  // Welcome Reception
  if (normalizedTitle.includes('welcome') || normalizedTitle.includes('reception')) {
    return SPECIAL_EVENT_TIMES.welcome_reception;
  }
  
  // Banquet
  if (normalizedTitle.includes('banquet') || normalizedTitle.includes('jam')) {
    return SPECIAL_EVENT_TIMES.banquet;
  }
  
  return null;
}

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
 * @param {string} detailedLocation - 상세 장소 정보
 * @returns {string} 이벤트 설명
 */
function generateEventDescription(eventTitle, location, googleMapUrl, detailedLocation) {
  const description = [
    `ISMIR 2025 Conference Event: ${eventTitle}`,
    ''
  ];
  
  // 상세 장소 정보가 있으면 추가
  if (detailedLocation) {
    description.push(`Venue Details: ${detailedLocation}`);
  }
  
  description.push(
    `Location: ${location}`,
    `Google Maps: ${googleMapUrl}`,
    '',
    '📍 KAIST Campus Map: https://maps.app.goo.gl/5RB8d6FcahjnnGgg9',
    '',
    '🎵 International Society for Music Information Retrieval Conference 2025',
    'Website: https://ismir2025.ismir.net/',
    '',
    'Korea Advanced Institute of Science and Technology (KAIST)',
    'Daejeon, South Korea'
  );

  return description.join('\\n');
}

/**
 * Google Maps embed URL을 일반 사용자 URL로 변환
 * @param {string} embedUrl - embed URL
 * @returns {string} 사용자가 클릭할 수 있는 URL
 */
// eslint-disable-next-line no-unused-vars
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
 * 이벤트 타입에 따른 구체적인 장소 정보 가져오기
 * @param {string} eventTitle - 이벤트 제목
 * @param {number} columnIndex - 컬럼 인덱스
 * @returns {Object} {location, googleMapUrl, detailedLocation}
 */
function getEventSpecificVenue(eventTitle, columnIndex) {
  const normalizedTitle = eventTitle.toLowerCase().replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
  
  // HCMIR25 - N25 Paik Nam June Hall (9/20)
  if (normalizedTitle.includes('hcmir') && columnIndex === 1) {
    return {
      location: 'Room #3229, Paik Nam June Hall (백남준 Hall), N25 Building, Industrial Design Department, KAIST',
      googleMapUrl: SPECIAL_EVENT_MAPS.hcmir25,
      detailedLocation: 'Sep 20 (Sat) 14:00 - 18:00 @ Room #3229, Paik Nam June Hall, N25 Building, KAIST'
    };
  }
  
  // Welcome Reception - Golfzon Zoimaru (9/21)
  if (normalizedTitle.includes('welcome') || normalizedTitle.includes('reception')) {
    return {
      location: 'Golfzon Zoimaru, Daejeon, South Korea',
      googleMapUrl: SPECIAL_EVENT_MAPS.welcome_reception,
      detailedLocation: 'Sep 21 (Sun) 18:30 - 21:00 @ Golfzon Zoimaru'
    };
  }
  
  // Banquet & Jam Session - ICC Hotel (9/24)
  if (normalizedTitle.includes('banquet') || normalizedTitle.includes('jam')) {
    return {
      location: 'ICC Hotel, Daejeon, South Korea',
      googleMapUrl: SPECIAL_EVENT_MAPS.banquet,
      detailedLocation: 'Sep 24 (Wed) 19:30 - 22:00 @ ICC Hotel'
    };
  }
  
  // K-Culture Evening (9/23)
  if (normalizedTitle.includes('k-culture') || normalizedTitle.includes('korean')) {
    return {
      location: 'KAIST Main Auditorium E15, Daejeon, South Korea',
      googleMapUrl: SPECIAL_EVENT_MAPS.k_culture,
      detailedLocation: 'KAIST E15 Concert Hall'
    };
  }
  
  // Tutorial Sessions - E11 (9/21)
  if (normalizedTitle.includes('tutorial') && columnIndex === 2) {
    // 시간대별 튜토리얼 세션 구분
    let sessionDetails = 'Tutorial Sessions @ E11';
    if (normalizedTitle.includes('t1') || normalizedTitle.includes('t2') || normalizedTitle.includes('t3')) {
      sessionDetails = 'Morning Tutorial Sessions (T1@101A, T2@102A, T3@103A) @ E11';
    } else if (normalizedTitle.includes('t4') || normalizedTitle.includes('t5') || normalizedTitle.includes('t6')) {
      sessionDetails = 'Afternoon Tutorial Sessions (T4@101A, T5@102A, T6@103A) @ E11';
    } else {
      sessionDetails = 'Tutorial Sessions (101A, 102A, 103A) @ E11';
    }
    
    return {
      location: 'KAIST Creative Learning Building E11, Daejeon, South Korea',
      googleMapUrl: GOOGLE_MAPS_URLS[2],
      detailedLocation: `${sessionDetails} (Registration: E11 1F Lobby)`
    };
  }
  
  // Registration - 건물별 구분
  if (normalizedTitle.includes('registration')) {
    if (columnIndex === 2) { // 9/21 Tutorial day
      return {
        location: 'KAIST Creative Learning Building E11, Daejeon, South Korea',
        googleMapUrl: GOOGLE_MAPS_URLS[2],
        detailedLocation: 'Registration @ E11 1F Lobby'
      };
    } else { // 9/22-25 Conference days
      return {
        location: 'KAIST Main Auditorium E15, Daejeon, South Korea',
        googleMapUrl: GOOGLE_MAPS_URLS[columnIndex],
        detailedLocation: 'Registration @ E15 1F Lobby'
      };
    }
  }
  
  // Oral Sessions - E15 Concert Hall
  if (normalizedTitle.includes('oral')) {
    return {
      location: 'KAIST Main Auditorium E15, Daejeon, South Korea',
      googleMapUrl: GOOGLE_MAPS_URLS[columnIndex],
      detailedLocation: 'Oral Presentation Session @ E15 Concert Hall'
    };
  }
  
  // Poster Sessions - E15 Seminar Room
  if (normalizedTitle.includes('poster')) {
    return {
      location: 'KAIST Main Auditorium E15, Daejeon, South Korea',
      googleMapUrl: GOOGLE_MAPS_URLS[columnIndex],
      detailedLocation: 'Poster Session @ E15 Seminar Room'
    };
  }
  
  // Keynote - E15 Concert Hall
  if (normalizedTitle.includes('keynote')) {
    return {
      location: 'KAIST Main Auditorium E15, Daejeon, South Korea',
      googleMapUrl: GOOGLE_MAPS_URLS[columnIndex],
      detailedLocation: 'Keynote @ E15 Concert Hall'
    };
  }
  
  // DLfM Workshop - Sogang University (9/26)
  if (normalizedTitle.includes('dlfm') && columnIndex === 7) {
    return {
      location: 'Sogang University, Seoul, South Korea',
      googleMapUrl: 'https://maps.app.goo.gl/wXu9FhD28N1Fj1nj6',
      detailedLocation: 'Sep 26 (Fri) 09:00 - 17:00 @ Sogang University, Seoul'
    };
  }
  
  // 기본값: 컬럼 기반 매핑 사용
  return {
    location: LOCATION_MAPPING[columnIndex],
    googleMapUrl: GOOGLE_MAPS_URLS[columnIndex],
    detailedLocation: null
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

  // 특별 이벤트 시간 확인 (실제 시간 범위 사용)
  const specialEventTime = getSpecialEventTime(title, columnIndex);
  console.log('ICS 생성:', title, 'columnIndex:', columnIndex, 'timeString:', timeString, 'specialEventTime:', specialEventTime);
  
  let startDate, endDate, location, googleMapUrl, detailedLocation;
  
  if (specialEventTime) {
    console.log('특별 이벤트 시간 사용:', specialEventTime.startTime, '-', specialEventTime.endTime);
    // 특별 이벤트의 경우 실제 시간 사용
    const baseDate = DATE_MAPPING[specialEventTime.date];
    const { startHour, startMinute, endHour, endMinute } = parseTimeString(`${specialEventTime.startTime} - ${specialEventTime.endTime}`);
    
    startDate = new Date(baseDate);
    startDate.setHours(startHour, startMinute, 0, 0);
    
    endDate = new Date(baseDate);
    endDate.setHours(endHour, endMinute, 0, 0);
    
    location = specialEventTime.location;
    googleMapUrl = specialEventTime.googleMapUrl || GOOGLE_MAPS_URLS[columnIndex];
    detailedLocation = `${specialEventTime.startTime} - ${specialEventTime.endTime}`;
  } else {
    // 일반 이벤트의 경우 기존 로직 사용
  const dateStr = COLUMN_TO_DATE[columnIndex];
  const baseDate = DATE_MAPPING[dateStr];

  if (!baseDate) {
    throw new Error(`Invalid column index: ${columnIndex}`);
  }

  // 시간 파싱
  const { startHour, startMinute, endHour, endMinute } = parseTimeString(timeString);

  // 시작/종료 시간 생성 (KST 기준)
    startDate = new Date(baseDate);
  startDate.setHours(startHour, startMinute, 0, 0);

    endDate = new Date(baseDate);
  endDate.setHours(endHour, endMinute, 0, 0);
    
    // 이벤트별 특별한 장소 정보 가져오기
    const venueInfo = getEventSpecificVenue(title, columnIndex);
    location = venueInfo.location;
    googleMapUrl = venueInfo.googleMapUrl;
    detailedLocation = venueInfo.detailedLocation;
  }

  // ICS 형식으로 변환
  const dtStamp = formatICSDate(new Date());

  // 이벤트 정보 정리
  const cleanTitle = cleanEventTitle(title);
  const description = generateEventDescription(title, location, googleMapUrl, detailedLocation);
  const dateStr = specialEventTime ? specialEventTime.date : COLUMN_TO_DATE[columnIndex];
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

/**
 * Google Calendar URL 생성
 * @param {Object} eventData - 이벤트 데이터
 * @returns {string} Google Calendar URL
 */
export function generateGoogleCalendarUrl(eventData) {
  const { title, timeString, columnIndex } = eventData;
  
  // 특별 이벤트 시간 확인 (실제 시간 범위 사용)
  const specialEventTime = getSpecialEventTime(title, columnIndex);
  console.log('Google Calendar URL 생성:', title, 'columnIndex:', columnIndex, 'timeString:', timeString, 'specialEventTime:', specialEventTime);
  
  let startDate, endDate, location;
  
  if (specialEventTime) {
    console.log('특별 이벤트 시간 사용 (Google Calendar):', specialEventTime.startTime, '-', specialEventTime.endTime);
    // 특별 이벤트의 경우 실제 시간 사용
    const baseDate = DATE_MAPPING[specialEventTime.date];
    const { startHour, startMinute, endHour, endMinute } = parseTimeString(`${specialEventTime.startTime} - ${specialEventTime.endTime}`);
    
    startDate = new Date(baseDate);
    startDate.setHours(startHour, startMinute, 0, 0);
    
    endDate = new Date(baseDate);
    endDate.setHours(endHour, endMinute, 0, 0);
    
    location = specialEventTime.location;
  } else {
    // 일반 이벤트의 경우 기존 로직 사용
  const dateStr = COLUMN_TO_DATE[columnIndex];
  const baseDate = DATE_MAPPING[dateStr];
  const { startHour, startMinute, endHour, endMinute } = parseTimeString(timeString);
  
    startDate = new Date(baseDate);
  startDate.setHours(startHour, startMinute, 0, 0);
  
    endDate = new Date(baseDate);
  endDate.setHours(endHour, endMinute, 0, 0);
    
    // 장소 정보
    const venueInfo = getEventSpecificVenue(title, columnIndex);
    location = venueInfo.location;
  }
  
  // Google Calendar 형식으로 변환 (YYYYMMDDTHHMMSSZ)
  const formatGoogleDate = (date) => {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };
  
  // URL 파라미터 생성
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: cleanEventTitle(title),
    dates: `${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`,
    details: `ISMIR 2025 Conference Event\n\nLocation: ${location}\nWebsite: https://ismir2025.ismir.net/`,
    location: location,
    ctz: 'Asia/Seoul'
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Outlook Web URL 생성
 * @param {Object} eventData - 이벤트 데이터
 * @returns {string} Outlook Web URL
 */
export function generateOutlookUrl(eventData) {
  const { title, timeString, columnIndex } = eventData;
  
  // 특별 이벤트 시간 확인 (실제 시간 범위 사용)
  const specialEventTime = getSpecialEventTime(title, columnIndex);
  console.log('Outlook URL 생성:', title, 'columnIndex:', columnIndex, 'timeString:', timeString, 'specialEventTime:', specialEventTime);
  
  let startDate, endDate, location;
  
  if (specialEventTime) {
    console.log('특별 이벤트 시간 사용 (Outlook):', specialEventTime.startTime, '-', specialEventTime.endTime);
    // 특별 이벤트의 경우 실제 시간 사용
    const baseDate = DATE_MAPPING[specialEventTime.date];
    const { startHour, startMinute, endHour, endMinute } = parseTimeString(`${specialEventTime.startTime} - ${specialEventTime.endTime}`);
    
    startDate = new Date(baseDate);
    startDate.setHours(startHour, startMinute, 0, 0);
    
    endDate = new Date(baseDate);
    endDate.setHours(endHour, endMinute, 0, 0);
    
    location = specialEventTime.location;
  } else {
    // 일반 이벤트의 경우 기존 로직 사용
  const dateStr = COLUMN_TO_DATE[columnIndex];
  const baseDate = DATE_MAPPING[dateStr];
  const { startHour, startMinute, endHour, endMinute } = parseTimeString(timeString);
  
    startDate = new Date(baseDate);
  startDate.setHours(startHour, startMinute, 0, 0);
  
    endDate = new Date(baseDate);
  endDate.setHours(endHour, endMinute, 0, 0);
  
  // 장소 정보
  const venueInfo = getEventSpecificVenue(title, columnIndex);
    location = venueInfo.location;
  }
  
  // URL 파라미터 생성
  const params = new URLSearchParams({
    subject: cleanEventTitle(title),
    startdt: startDate.toISOString(),
    enddt: endDate.toISOString(),
    body: `ISMIR 2025 Conference Event\n\nLocation: ${location}\nWebsite: https://ismir2025.ismir.net/`,
    location: location
  });
  
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

/**
 * Apple Calendar URL 생성 (iOS Safari에서 작동)
 * @param {Object} eventData - 이벤트 데이터
 * @returns {string} Apple Calendar URL
 */
export function generateAppleCalendarUrl(eventData) {
  // Apple Calendar는 ICS 파일을 data URL로 제공하는 방식 사용
  const icsContent = generateICSContent(eventData);
  const dataUrl = `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
  return dataUrl;
}

/**
 * 캘린더 옵션 목록 생성
 * @returns {Array} 사용 가능한 캘린더 옵션들
 */
export function getAvailableCalendarOptions() {
  const userAgent = navigator.userAgent;
  const options = [
    {
      id: 'google',
      name: 'Google Calendar',
      icon: '📅',
      color: '#4285f4',
      supported: true,
      handler: generateGoogleCalendarUrl
    },
    {
      id: 'outlook',
      name: 'Outlook',
      icon: '📧',
      color: '#0078d4',
      supported: true,
      handler: generateOutlookUrl
    }
  ];
  
  // iOS 사용자에게만 Apple Calendar 옵션 제공
  if (/iPhone|iPad|iPod/.test(userAgent)) {
    options.push({
      id: 'apple',
      name: 'Apple Calendar',
      icon: '📱',
      color: '#007aff',
      supported: true,
      handler: generateAppleCalendarUrl
    });
  }
  
  // 항상 ICS 다운로드 옵션 제공 (호환성 보장)
  options.push({
    id: 'download',
    name: 'ICS 다운로드',
    icon: '⬇️',
    color: '#6c757d',
    supported: true,
    handler: downloadICSFile
  });
  
  return options;
}

export default {
  generateICSContent,
  downloadICSFile,
  generateGoogleCalendarUrl,
  generateOutlookUrl,
  generateAppleCalendarUrl,
  getAvailableCalendarOptions,
  isValidEvent,
};
