//소수 찾기
//https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  let answer = 0;

  const numberList = numbers.split("")  //splitted number

  let permutations = []

  //가능한 조합을 2차원 배열의 형태로 나타냄
  for (let i = 0; i < numberList.length; i++) {
    permutations = [...permutations, ...permutation(numberList, i + 1)]
  }

  let numberPermutation = permutations.map((numberArray) => numberArray.join(''))
  numberPermutation = [...new Set(numberPermutation.map((number) => parseInt(number)))]

  const primeList = []
  numberPermutation.forEach((number) => {
    if (isPrime(number)) {
      primeList.push(number)
    }
  })

  return primeList.length
}

const permutation = (numberList, select) => {
  const array = [];
  if (select === 1) {
    return numberList.map((v) => [v])
  }

  numberList.forEach((number, index, numberList) => {
    const rest = [...numberList.slice(0, index), ...numberList.slice(index + 1)]
    const permutations = permutation(rest, select - 1)
    const attach = permutations.map((permutation) => [number, ...permutation])
    array.push(...attach)
  })
  return array
}

const isPrime = (number) => {
  if (number < 2) {
    return false
  }
  const limit = Math.floor(Math.sqrt(number))
  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const numbers = "014"

console.log(solution(numbers))