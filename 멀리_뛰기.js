const solution = (n) => {
  let result = 0;
  const maxTwo = Math.floor(n / 2);

  for (let numTwo = 0; numTwo <= maxTwo; numTwo++) {
    const position = n - numTwo;
    const combineNumber = Math.min(numTwo, position);

    if (combineNumber === 0) {
      result++;
    } else {
      let combine = 1;
      for (let i = position; i > position - combineNumber; i--) {
        combine *= i;
      }
      for (let i = 1; i <= combineNumber; i++) {
        combine /= i;
      }
      result += combine;
    }
  }
  return result % 1234567;
};
4, 1;
console.log(solution(4));
