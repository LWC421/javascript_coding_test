const solution = (n) => {
  const numbers = [0, 1];

  for (let index = 2; index <= n; index++) {
    numbers.push((numbers[index - 1] + numbers[index - 2]) % 1234567);
  }

  return numbers[numbers.length - 1];
};

console.log(solution(5));
