const solution = (s) => {
  const result = [];
  const splitted = s.split(" ");
  splitted.forEach((char) => {
    if (char.length >= 1) {
      result.push(char[0].toUpperCase() + char.slice(1).toLowerCase());
    } else {
      result.push(char);
    }
  });

  return result.join(" ");
};

const bestSolution = (s) => {
  return s
    .split(" ")
    .map(
      (char) => char.charAt(0).toUpperCase() + char.substring(1).toLowerCase()
    )
    .join(" ");
};

const s1 = "3people unFollowed me";
const s2 = "for the last week";
const s3 = "te   st";
const s4 = "  3d  t4ds d bcd";

console.log(solution(s4));
console.log(bestSolution(s4));
