const solution = (gems) => {
  const targets = new Set(gems);
  const targetLength = targets.size;

  let answer = [1, gems.length];
  let left = 0;
  let right = targetLength - 1;

  const collect = gems.slice(left, targetLength).reduce((map, gem, index) => {
    map.set(gem, index);

    return map;
  }, new Map());

  while (left < gems.length && right < gems.length) {
    // console.log(left, right);
    if (collect.size === targetLength) {
      if (right - left < answer[1] - answer[0]) {
        //더 짧은 경우 -> 갱신
        answer = [left + 1, right + 1];
      }
      if (collect.get(gems[left]) === left) {
        collect.delete(gems[left]);
      }
      left++; //left를 오른쪽으로
    } else {
      right++;
      collect.set(gems[right], right);
    }
  }

  return answer;
};

const gems1 = [
  "DIA",
  "RUBY",
  "RUBY",
  "DIA",
  "DIA",
  "EMERALD",
  "SAPPHIRE",
  "DIA",
];

const gems2 = ["AA", "AB", "AC", "AA", "AC"];
console.log(solution(gems2));
