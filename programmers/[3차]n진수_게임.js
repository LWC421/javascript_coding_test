/**
 *
 * @param {*} n 진법
 * @param {*} t 미리 구할 숫자의 개수
 * @param {*} m 참여 인원
 * @param {*} p 자기의 순서
 */
const solution = (n, t, m, p) => {
  const turns = Array(t)
    .fill(0)
    .map((_, index) => p + index * m - 1); //자기차례

  let str = "";

  let i = 0;
  while (str.length < p + m * t - 1) {
    //진법으로 변환된 숫자들 넣기
    str += i.toString(n);
    i++;
  }

  let answer = "";
  turns.forEach((turn) => {
    //진법 변환된 문자열에서 가져오기
    answer += str[turn];
  });

  return answer.toUpperCase(); //대문자로 바꿔서 반환
};

const q1 = [2, 4, 2, 1];

console.log(solution(...q1));
