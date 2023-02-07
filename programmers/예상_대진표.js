function solution(n, a, b) {
  let count = 1;

  a = a + (a % 2);
  b = b + (b % 2);

  while (a !== b) {
    count++;
    a = Math.ceil(a / 2);
    a = a + (a % 2);
    b = Math.ceil(b / 2);
    b = b + (b % 2);
  }

  return count;
}

console.log(solution(8, 4, 8));
