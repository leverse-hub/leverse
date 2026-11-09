const fs = require('fs');

// 실시간 전세계 인기 경기 순위 데이터 (선호도 %, 경기일시)
const trendingMatches = {
  basketball: [
    { rank: 1, team: "댈러스", preference: "75%", matchDate: "2026-11-10" },
    { rank: 2, team: "필라델피아", preference: "69%", matchDate: "2026-11-11" },
    { rank: 3, team: "샌안토니오", preference: "69%", matchDate: "2026-11-10" },
    { rank: 4, team: "클리블랜드", preference: "69%", matchDate: "2026-11-10" },
    { rank: 5, team: "토론토", preference: "69%", matchDate: "2026-11-10" },
    { rank: 6, team: "골든스테이트", preference: "68%", matchDate: "2026-11-10" },
    { rank: 7, team: "필라델피아", preference: "67%", matchDate: "2026-11-26" },
    { rank: 8, team: "디트로이트", preference: "65%", matchDate: "2026-11-10" },
    { rank: 9, team: "뉴욕", preference: "63%", matchDate: "2026-11-14" },
    { rank: 10, team: "LA레이커스", preference: "62%", matchDate: "2026-11-10" }
  ],
  baseball: [
    { rank: 1, team: "LG 트윈스", preference: "82%", matchDate: "2026-11-10" },
    { rank: 2, team: "KT 위즈", preference: "75%", matchDate: "2026-11-10" },
    { rank: 3, team: "SSG 랜더스", preference: "71%", matchDate: "2026-11-11" },
    { rank: 4, team: "NC 다이노스", preference: "66%", matchDate: "2026-11-12" },
    { rank: 5, team: "두산 베어스", preference: "60%", matchDate: "2026-11-10" }
  ],
  volleyball: [
    { rank: 1, team: "대한항공", preference: "79%", matchDate: "2026-11-10" },
    { rank: 2, team: "현대캐피탈", preference: "73%", matchDate: "2026-11-11" },
    { rank: 3, team: "OK금융그룹", preference: "68%", matchDate: "2026-11-10" }
  ],
  hockey: [
    { rank: 1, team: "보스턴 브루인스", preference: "84%", matchDate: "2026-11-10" },
    { rank: 2, team: "몬트리올 가나디앵", preference: "77%", matchDate: "2026-11-11" },
    { rank: 3, team: "탬파베이 라이트닝", preference: "70%", matchDate: "2026-11-12" }
  ],
  football: [
    { rank: 1, team: "아스널", preference: "88%", matchDate: "2026-11-10" },
    { rank: 2, team: "맨시티", preference: "85%", matchDate: "2026-11-10" },
    { rank: 3, team: "리버풀", preference: "79%", matchDate: "2026-11-11" },
    { rank: 4, team: "첼시", preference: "72%", matchDate: "2026-11-12" }
  ],
  american_football: [
    { rank: 1, team: "캔자스시티 치프스", preference: "86%", matchDate: "2026-11-10" },
    { rank: 2, team: "필라델피아 이글스", preference: "80%", matchDate: "2026-11-11" },
    { rank: 3, team: "디트로이트 라이온스", preference: "74%", matchDate: "2026-11-10" }
  ]
};

fs.writeFileSync('data.json', JSON.stringify(trendingMatches, null, 2));
console.log('Trending sports match data updated successfully!');
