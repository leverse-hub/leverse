const fs = require('fs');

// 오늘 날짜 계산 (YYYY-MM-DD)
const today = new Date();
const formatDate = (d) => d.toISOString().split('T')[0];
const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);

// 종목별 라이브스코어 기준 인기 팀 목록 및 데이터
const baseData = {
  basketball: [
    { team: "댈러스", pref: 75, date: formatDate(today) },
    { team: "필라델피아", pref: 71, date: formatDate(tomorrow) },
    { team: "샌안토니오", pref: 69, date: formatDate(today) },
    { team: "클리블랜드", pref: 68, date: formatDate(today) },
    { team: "토론토", pref: 66, date: formatDate(today) },
    { team: "골든스테이트", pref: 65, date: formatDate(today) },
    { team: "디트로이트", pref: 64, date: formatDate(today) },
    { team: "뉴욕 닉스", pref: 63, date: formatDate(tomorrow) },
    { team: "LA 레이커스", pref: 62, date: formatDate(today) },
    { team: "시카고 불스", pref: 60, date: formatDate(tomorrow) }
  ],
  baseball: [
    { team: "LG 트윈스", pref: 82, date: formatDate(today) },
    { team: "KT 위즈", pref: 76, date: formatDate(today) },
    { team: "SSG 랜더스", pref: 72, date: formatDate(tomorrow) },
    { team: "NC 다이노스", pref: 68, date: formatDate(today) },
    { team: "두산 베어스", pref: 65, date: formatDate(today) },
    { team: "KIA 타이거즈", pref: 64, date: formatDate(tomorrow) },
    { team: "롯데 자이언츠", pref: 61, date: formatDate(today) },
    { team: "삼성 라이온즈", pref: 59, date: formatDate(today) },
    { team: "한화 이글스", pref: 58, date: formatDate(tomorrow) },
    { team: "키움 히어로즈", pref: 55, date: formatDate(today) }
  ],
  volleyball: [
    { team: "대한항공", pref: 80, date: formatDate(today) },
    { team: "현대캐피탈", pref: 74, date: formatDate(tomorrow) },
    { team: "OK금융그룹", pref: 71, date: formatDate(today) },
    { team: "우리카드", pref: 67, date: formatDate(today) },
    { team: "한국전력", pref: 63, date: formatDate(today) },
    { team: "KB손해보험", pref: 60, date: formatDate(tomorrow) }
  ],
  hockey: [
    { team: "보스턴 브루인스", pref: 85, date: formatDate(today) },
    { team: "몬트리올 가나디앵", pref: 78, date: formatDate(tomorrow) },
    { team: "토론토 메이플리프스", pref: 74, date: formatDate(today) },
    { team: "뉴욕 아일랜더스", pref: 70, date: formatDate(today) },
    { team: "베이거스 나이츠", pref: 67, date: formatDate(tomorrow) }
  ],
  football: [
    { team: "아스널", pref: 89, date: formatDate(today) },
    { team: "맨시티", pref: 86, date: formatDate(today) },
    { team: "리버풀", pref: 82, date: formatDate(tomorrow) },
    { team: "바르셀로나", pref: 79, date: formatDate(today) },
    { team: "레알 마드리드", pref: 78, date: formatDate(today) },
    { team: "바이에른 뮌헨", pref: 75, date: formatDate(tomorrow) },
    { team: "토트넘", pref: 73, date: formatDate(today) },
    { team: "PSG", pref: 71, date: formatDate(today) },
    { team: "첼시", pref: 69, date: formatDate(tomorrow) },
    { team: "맨유", pref: 68, date: formatDate(today) }
  ],
  american_football: [
    { team: "캔자스시티 치프스", pref: 88, date: formatDate(today) },
    { team: "필라델피아 이글스", pref: 81, date: formatDate(tomorrow) },
    { team: "샌프란시스코 49ers", pref: 77, date: formatDate(today) },
    { team: "볼티모어 레이번스", pref: 73, date: formatDate(today) },
    { team: "달라스 카우보이스", pref: 69, date: formatDate(tomorrow) }
  ]
};

// 매일 실행 시 1~3% 내외로 선호도가 미세하게 변동되는 라이브 효과 로직
const sportsData = {};
Object.keys(baseData).forEach(sport => {
  const updatedList = baseData[sport].map((item, idx) => {
    const randomDiff = Math.floor(Math.random() * 5) - 2; // -2 ~ +2% 변동
    let newPref = Math.min(99, Math.max(40, item.pref + randomDiff));
    return {
      rank: idx + 1,
      team: item.team,
      preference: `${newPref}%`,
      matchDate: item.date
    };
  });
  // 선호도 순으로 다시 정렬 후 순위 재부여
  updatedList.sort((a, b) => parseInt(b.preference) - parseInt(a.preference));
  updatedList.forEach((item, idx) => item.rank = idx + 1);
  sportsData[sport] = updatedList;
});

fs.writeFileSync('data.json', JSON.stringify(sportsData, null, 2));
console.log(`[${new Date().toISOString()}] LiveScore style ranking updated successfully.`);
