const solution = (n) => {
  return n
    .toString(2)
    .split("")
    .filter((bit) => bit === "1").length;
};

console.log(solution(5000));
