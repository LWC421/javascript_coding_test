const solution = (elements) => {
  const length = elements.length;
  let answer = 1;
  const map = new Map();

  elements.forEach((element) => {
    if (!map.has(element)) {
      answer++;
    }
    map.set(element, true);
  });

  elements.push(...elements.slice(0, length - 1));

  for (let i = 2; i < length; i++) {
    for (start = 0; start < length; start++) {
      let sum = 0;
      for (let target = start; target < start + i; target++) {
        sum += elements[target];
      }
      if (!map.has(sum)) {
        map.set(sum, true);
        answer++;
      }
    }
  }
  return answer;
};

const elements1 = [7, 9, 1, 1, 4];

console.log(solution(elements1));
