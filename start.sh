#!/bin/bash

# ISMIR 2025 개발 서버 시작 스크립트
# 포트 4444에서 Vue.js 개발 서버를 실행합니다

echo "🚀 ISMIR 2025 개발 서버를 시작합니다..."
echo "📍 포트: 4444"
echo "🌐 로컬 URL: http://localhost:4444"
echo "🔗 프로덕션 URL: https://ismir2025.ismir.net/"
echo ""

# npm run serve 명령어를 4444 포트로 실행
npm run serve -- --port 4444 