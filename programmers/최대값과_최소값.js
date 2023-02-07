function solution(s) {
  const numbers = s.split(" ");

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return min + " " + max;
}
