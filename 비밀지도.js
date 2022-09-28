function solution(n, arr1, arr2) {
  const result = Array(n).fill(0);

  result.forEach((_, index) => {
    result[index] = (arr1[index] | arr2[index]).toString(2);
    result[index] =
      Array(n - result[index].length)
        .fill(" ")
        .join("") + result[index].replace(/0/gi, " ").replace(/1/gi, "#");
  });

  return result;
}

const n1 = 5;
const arr1 = [0, 0, 0, 0, 0];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n1, arr1, arr2));
