const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputs = [];

reader
  .on("line", (input) => {
    inputs.push(...input.trim().split(" "));
  })
  .on("close", () => {
    const [N, B, ...A] = inputs.map((str) => parseInt(str));
    solution(N, B, A);
  });

function solution(N, B, A) {
  const sortedA = A.sort();
  const minimum = sortedA[0];

  let right = B;
  let left = minimum;

  let result = minimum;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    let sumCost = 0;
    for (const a of sortedA) {
      const cost = getCost(mid, a);
      if (cost === 0) {
        //더이상 계산할 필요 없으면 stop
        break;
      }
      sumCost += cost;
    }

    if (sumCost <= B) {
      //cost가 한계치보다 적으면 result를 변경시키고 left를 늘린다
      result = mid;
      left = mid + 1;
    } else {
      //cost가 더 크면 right를 줄인다
      right = mid - 1;
    }
  }

  console.log(result);
}

const getCost = (bigger, smaller) => {
  if (bigger <= smaller) {
    return 0;
  }
  const cost = Math.pow(bigger - smaller, 2);

  return cost;
};

const N1 = 4;
const B1 = 10;
const A1 = [5, 5, 6, 1];

const QnA1 = [4, 10, [5, 5, 6, 1]];
const QnA3 = [10, 10000000, [10, 2, 2, 9, 6, 1, 8, 3, 1, 9]];

const QnA4 = [100, 1000000, [1, 1, 1, 1]];

solution(...QnA4);
