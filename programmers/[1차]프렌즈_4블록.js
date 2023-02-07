/**
    m : 높이
    n : 폭
    board : 배치 정보, 문자열로 된 1차원 배열
*/
const solution = (m, n, board) => {
  const map = new Array(m).fill(undefined);
  map.forEach((_, i) => {
    map[i] = board[i].split("");
  });

  while (remove(m, n, map)) {}

  let answer = 0;

  map.forEach((row) => {
    row.forEach((item) => {
      if (item == undefined) {
        answer++;
      }
    });
  });

  return answer;
};

const remove = (m, n, map) => {
  const removeMap = new Array(m).fill(undefined);
  removeMap.forEach((_, i) => {
    removeMap[i] = new Array(n).fill(false);
  });

  for (let y = 0; y < m - 1; y++) {
    for (let x = 0; x < n - 1; x++) {
      const target = map[y][x];
      if (isEqual(target, map[y][x + 1], map[y + 1][x], map[y + 1][x + 1])) {
        removeMap[y][x] = true;
        removeMap[y][x + 1] = true;
        removeMap[y + 1][x] = true;
        removeMap[y + 1][x + 1] = true;
      }
    }
  }

  let flag = false;

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (removeMap[y][x] === true) {
        if (y === 0) {
          map[y][x] = undefined;
        } else {
          for (let i = y; i > 0; i--) {
            map[i][x] = map[i - 1][x];
            map[i - 1][x] = undefined;
          }
        }

        flag = true;
      }
    }
  }

  return flag;
};

const isEqual = (target, a, b, c) => {
  if (target == undefined) {
    return false;
  }
  if (target === a && target === b && target === c) {
    return true;
  }

  return false;
};
