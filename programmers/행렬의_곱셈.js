const rowMultCol = (arr1, arr2, r, c) => {
  const row = arr1[r];
  const col = arr2.map((row) => row[c]);

  let sum = 0;
  row.forEach((r, index) => {
    sum += r * col[index];
  });

  return sum;
};

const solution = (arr1, arr2) => {
  const answer = Array.from(Array(arr1.length), () =>
    Array(arr2[0].length).fill(0)
  );

  answer.forEach((_, r) => {
    _.forEach((_, c) => {
      answer[r][c] = rowMultCol(arr1, arr2, r, c);
    });
  });

  return answer;
};

const arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];

const arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];

console.log(solution(arr1, arr2));
