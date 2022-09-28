function solution(n, left, right) {
  const result = Array(right - left + 1)
    .fill(0)
    .map((_, index) => index + left);
  // [left, left+1, ..., right-1, right] 배열 생성

  result.forEach((num, index) => {
    const row = Math.floor(num / n);
    const col = num % n;

    result[index] = Math.max(row, col) + 1;
  });

  return result;
}

console.log(solution(4, 7, 14));
