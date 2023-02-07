const gcd = (a, b) => {
  while (b > 0) {
    const r = a % b;
    a = b;
    b = r;
  }

  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const solution = (arr) => {
  return arr.reduce((acc, current) => lcm(acc, current), 1);
};

const arr1 = [2, 6, 8, 14];

console.log(solution(arr1));
