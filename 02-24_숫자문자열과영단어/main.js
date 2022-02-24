// 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const words = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  }

  let newStr = s
  for (let key in words) {
    newStr = newStr.replace(new RegExp(key, 'g'), words[key])
  }

  return parseInt(newStr);
}

const s = "one4seveneight"

const result = solution(s)
console.log(result)