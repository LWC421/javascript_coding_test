const solution = (n) => {
  let answer = n;
  const countOne = n
    .toString(2)
    .split("")
    .filter((num) => num === "1").length;
  while (true) {
    answer++;
    if (
      countOne ===
      answer
        .toString(2)
        .split("")
        .filter((num) => num === "1").length
    ) {
      break;
    }
  }

  return answer;
};
