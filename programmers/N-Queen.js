function solution(n) {
  let answer = 0;

  const isAble = (map, current) => {
    for (let row = 0; row < current; row++) {
      if (map[row] === map[current]) return false;
      if (Math.abs(map[row] - map[current]) === current - row) return false;
    }

    return true;
  };

  const place = (map, current) => {
    let count = 0;
    if (current === n) return 1;
    for (let col = 0; col < n; col++) {
      map[current] = col;
      if (isAble(map, current)) {
        count += place(map, current + 1);
      }
    }

    return count;
  };

  for (let first = 0; first < n; first++) {
    const map = new Array(n).fill(-1);
    map[0] = first;
    answer += place(map, 1);
  }

  return answer;
}
