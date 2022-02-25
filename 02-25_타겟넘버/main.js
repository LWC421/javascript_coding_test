//타겟넘버
//https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  const answer = {
    result: 0
  };

  check(numbers, 0, 0, target, answer)

  return answer.result
}

const check = (numbers, currentIndex, currentValue, target, answer) => {
  // console.log(currentValue, currentIndex)
  if (currentIndex === numbers.length) {
    if (currentValue === target) {
      answer.result += 1
    }
  }
  else {
    currentValue += numbers[currentIndex]
    check(numbers, currentIndex + 1, currentValue, target, answer)

    currentValue -= (numbers[currentIndex] * 2)
    check(numbers, currentIndex + 1, currentValue, target, answer)
  }
}



const numbers = [4, 1, 2, 1]
const target = 4

console.log(solution(numbers, target))