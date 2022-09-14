const solution = (word) => {
  const hash = {
    A: 1,
    E: 2,
    I: 3,
    O: 4,
    U: 5,
  };

  const indexed = word.split("").map((w) => hash[w]);
  console.log(indexed);
};

word = "AAAE";

console.log(solution(word));

A = 1;
AA = 2;
AAA = 3;
AAE = 4;
