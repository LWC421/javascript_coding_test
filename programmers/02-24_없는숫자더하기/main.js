function solution(numbers) {
  let answer = 0

  const numberList = new Array(10).fill(0).map((elem, index) => elem = index)
  const sumList = numberList.filter(number => !numbers.includes(number))

  answer = sumList.reduce((result, number) => result += number)

  return answer
}

const numbers = [1, 2, 3, 4, 6, 7, 8, 0]

console.log(solution(numbers))