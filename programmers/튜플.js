function solution(s) {
  const numbers = s
    .replace(/{/gi, "")
    .replace(/}/gi, "")
    .split(",")
    .map((num) => parseInt(num));

  const counter = new Map();
  for (let number of numbers) {
    if (counter.has(number)) {
      counter.set(number, counter.get(number) + 1);
    } else {
      counter.set(number, 1);
    }
  }

  // 각 원소는 [value, key]를 가짐
  const counterArray = [];
  counter.forEach((value, key) => {
    counterArray.push([value, key]);
  });

  const sorted = counterArray.sort((a, b) => b[0] - a[0]);

  return sorted.map(([_, number]) => number);
}

const s1 = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
const s2 = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
const s3 = "{{20,111},{111}}";

console.log(solution(s2));
