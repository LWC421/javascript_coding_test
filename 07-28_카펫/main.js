const solution = (brown, yellow) => {
  const availableList = [];
  for (let y = 1; y < (brown + 4) / 2; y++) {
    const x = (brown + 4) / 2 - y;
    if (x < y) break; //x가 y보다 작을 경우 넘어감
    if (y < 3) continue; //y가 3보다 작으면 노란색 카펫의 영역이 없으므로 제거
    availableList.push([x, y]);
  }

  for (let index = 0; index < availableList.length; index++) {
    const [x, y] = availableList[index];
    if ((x - 2) * (y - 2) === yellow) {
      return availableList[index];
    }
  }
};

const brown = 10;
const yellow = 2;

console.log(solution(brown, yellow));
