function solution(msg) {
  const answer = [];
  const dict = {};
  let currentNumber = 27;

  for (let i = 0; i < 26; i++) {
    dict[String.fromCharCode("A".charCodeAt() + i)] = i + 1;
  }

  const maxLength = msg.length;

  let index = 0;

  while (index < maxLength) {
    let length = 1;
    while (
      Object.keys(dict).includes(msg.substr(index, length)) &&
      index + length <= maxLength
    ) {
      length++;
    }
    length--;
    answer.push(dict[msg.substr(index, length)]);
    dict[msg.substr(index, length + 1)] = currentNumber;
    currentNumber++;
    index += length;
  }

  return answer;
}

const msg1 = "KAKAO";
const msg2 = "TOBEORNOTTOBEORTOBEORNOT";
console.log(solution(msg2));
