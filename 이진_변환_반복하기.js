const solution = (s) => {
  let count = 0;
  let removedZero = 0;

  while (s !== "1") {
    count++;
    removedZero += s.split("").filter((char) => char === "0").length;
    length = s.split("").filter((char) => char !== "0").length;
    s = parseInt(length).toString(2);
  }

  return [count, removedZero];
};

const s1 = "110010101001";

console.log(solution(s1));
