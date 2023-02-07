const solution = (n, words) => {
  const dictionary = [words[0]];

  let who = -1;
  let index;
  for (index = 1; index < words.length; index++) {
    //0번째 단어는 볼 필요 없음
    const before = words[index - 1];
    const current = words[index];
    if (
      before.charAt(before.length - 1) !== current.charAt(0) ||
      dictionary.findIndex((dict) => dict === current) !== -1
    ) {
      who = index % n;
      break;
    } else {
      dictionary.push(current);
    }
  }
  if (who === -1) {
    return [0, 0];
  } else {
    return [who + 1, Math.ceil((index + 1) / n)];
  }
};

const n1 = 3;

const words1 = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

const n2 = 2;
const words2 = ["hello", "one", "even", "never", "now", "world", "draw"];

console.log(solution(n2, words2));
