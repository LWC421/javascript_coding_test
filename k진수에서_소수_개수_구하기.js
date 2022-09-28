function solution(n, k) {
  const numbers = n
    .toString(k)
    .split("0")
    .filter((num) => num.length !== 0)
    .map((num) => parseInt(num))
    .filter((num) => isPrime(num));

  return numbers.length;
}

const isPrime = (number) => {
  if (number === 1) return false;
  const endNumber = Math.floor(Math.sqrt(number));
  for (let division = 2; division <= endNumber; division++) {
    if (number % division === 0) return false;
  }

  return true;
};

const n1 = 437674;
const k1 = 3;

const n2 = 110011;
const k2 = 10;

console.log(solution(n2, k2));

isPrime(5);
