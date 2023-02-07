//짝지어 제거하기
//https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  let answer = 0;

  const alphabetList = s.split('')
  const stack = []

  alphabetList.forEach((alpha) => {
    if (stack.length === 0) { //비어있을 경우 무조건 push
      stack.push(alpha)
    }
    else if (stack[stack.length - 1] === alpha) { //같은 알파벳일 경우 pop
      stack.pop()
    }
    else {
      stack.push(alpha)
    }
  })
  answer = stack.length === 0 ? 1 : 0

  return answer;
}

s = "baabaa"

console.log(solution(s))