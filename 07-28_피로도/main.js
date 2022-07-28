const solution = (k, dungeons) => {
  const countList = []; //던전 방문 횟수를 기록
  const length = dungeons.length;

  const nextSearch = (stamina, index, searched, count) => {
    const [minimum, use] = dungeons[index]; //해당 던전의 피로도들을 가져옴
    if (stamina < minimum) {
      countList.push(count - 1);
      return;
    } //던전을 진행할 수 없으면 return

    const nextStamina = stamina - use; //stamina를 사용
    if (searched.indexOf(false) === -1) {
      //모든 던전을 돌았을 경우
      countList.push(count);
      return;
    }

    for (let next = 0; next < length; next++) {
      if (searched[next] === false) {
        //돌지 않은 던전일 경우에만 진행
        const nextSearched = [...searched];
        const nextCount = count + 1;
        nextSearched[next] = true; //해당 던전을 돌것이라고 표기

        nextSearch(nextStamina, next, nextSearched, nextCount);
      }
    }
  };

  // 현재 어느 던전을 갔는지 확인, false로 초기화
  for (let initial = 0; initial < length; initial++) {
    const currentSearched = Array(dungeons.length).fill(false);
    currentSearched[initial] = true;
    nextSearch(k, initial, currentSearched, 1);
  }

  return Math.max(...countList);
};

const k = 80;
const dungeons = [
  // [최소 필요 피로도, 소모 피로도]
  [80, 20],
  [50, 40],
  [30, 10],
];

console.log(solution(k, dungeons));
