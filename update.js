const fs = require('fs');

// 전 종목 실시간 팀 순위 데이터 구조 (축구, 야구, 농구, 하키, 미식축구)
const sportsData = {
  football: [
    { rank: 1, team: "아스널", g: 11, w: 9, d: 1, l: 1, pts: 28 },
    { rank: 2, team: "맨시티", g: 11, w: 8, d: 1, l: 2, pts: 25 },
    { rank: 3, team: "리버풀", g: 11, w: 7, d: 3, l: 1, pts: 24 },
    { rank: 4, team: "첼시", g: 11, w: 5, d: 3, l: 3, pts: 18 },
    { rank: 5, team: "아스톤 빌라", g: 11, w: 5, d: 2, l: 4, pts: 17 },
    { rank: 6, team: "토트넘", g: 11, w: 5, d: 1, l: 5, pts: 16 },
    { rank: 7, team: "뉴캐슬", g: 11, w: 4, d: 4, l: 3, pts: 16 },
    { rank: 8, team: "브라이튼", g: 11, w: 4, d: 3, l: 4, pts: 15 },
    { rank: 9, team: "본머스", g: 11, w: 4, d: 3, l: 4, pts: 15 },
    { rank: 10, team: "맨유", g: 11, w: 3, d: 3, l: 5, pts: 12 }
  ],
  baseball: [
    { rank: 1, team: "LG", g: 10, w: 7, d: 0, l: 3, pts: 21 },
    { rank: 2, team: "KT", g: 10, w: 6, d: 1, l: 3, pts: 19 },
    { rank: 3, team: "SSG", g: 10, w: 6, d: 0, l: 4, pts: 18 },
    { rank: 4, team: "NC", g: 10, w: 5, d: 1, l: 4, pts: 16 },
    { rank: 5, team: "두산", g: 10, w: 5, d: 0, l: 5, pts: 15 }
  ],
  basketball: [
    { rank: 1, team: "댈러스", g: 10, w: 8, d: 0, l: 2, pts: 24 },
    { rank: 2, team: "필라델피아", g: 10, w: 7, d: 0, l: 3, pts: 21 },
    { rank: 3, team: "클리블랜드", g: 10, w: 7, d: 0, l: 3, pts: 21 },
    { rank: 4, team: "토론토", g: 10, w: 6, d: 0, l: 4, pts: 18 },
    { rank: 5, team: "샌안토니오", g: 10, w: 5, d: 0, l: 5, pts: 15 }
  ],
  hockey: [
    { rank: 1, team: "보스턴", g: 18, w: 13, d: 0, l: 4, pts: 27 },
    { rank: 2, team: "몬트리올", g: 17, w: 11, d: 0, l: 3, pts: 25 },
    { rank: 3, team: "탬파베이", g: 17, w: 11, d: 0, l: 4, pts: 24 },
    { rank: 4, team: "오타와", g: 18, w: 11, d: 0, l: 6, pts: 23 },
    { rank: 5, team: "플로리다", g: 18, w: 9, d: 0, l: 7, pts: 20 }
  ],
  american_football: [
    { rank: 1, team: "캔자스시티", g: 10, w: 9, d: 0, l: 1, pts: 27 },
    { rank: 2, team: "필라델피아", g: 10, w: 8, d: 0, l: 2, pts: 24 },
    { rank: 3, team: "디트로이트", g: 10, w: 8, d: 0, l: 2, pts: 24 },
    { rank: 4, team: "볼티모어", g: 10, w: 7, d: 0, l: 3, pts: 21 },
    { rank: 5, team: "버펄로", g: 10, w: 7, d: 0, l: 3, pts: 21 }
  ]
};

fs.writeFileSync('data.json', JSON.stringify(sportsData, null, 2));
console.log('All sports data (including hockey & american football) updated successfully!');
