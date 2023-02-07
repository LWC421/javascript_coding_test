//음양더하기
//https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let answer = 0;

  const sign = signs.map((elem) => elem === true ? +1 : -1)
  for (let i = 0; i < sign.length; i++) {
    answer += (absolutes[i] * sign[i])
  }

  return answer;
}


const absolutes = [4, 7, 12]
const signs = [true, false, true]

console.log(solution(absolutes, signs))