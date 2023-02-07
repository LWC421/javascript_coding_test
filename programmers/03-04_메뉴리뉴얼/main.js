// 메뉴 리뉴얼
// https://programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  const orderList = orders.map((elem) => elem.split(''))

  const orderCombinations = Array(orders.length).fill(0).map((elem, index) => (
    getOrderCombinations(orderList[index], course)
  ))
  const counter = getCounter(orderCombinations, course)
  let answer = getMaxOrder(counter).sort()

  return answer;
}

// 조합을 구하는 함수
const getCombinations = (order, count) => {
  const result = []
  if (count === 1) {
    return order.map(element => [element]);
  }

  order.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, count - 1);
    const attached = combinations.map((element) => [fixed, ...element])
    result.push(...attached)
  })

  return result
}

// 각각의 order와 course에 따라 해당하는 course에 따라 조합을 반환
// Object의 형식으로 반환
const getOrderCombinations = (order, course) => {
  const combinations = {}

  course.forEach(elem => {
    combinations[elem] = getCombinations(order, elem).map((elem) => elem.sort().join(''))
  })

  return combinations
}

// 요리의 조합들로부터 counter를 생성하여 반환
const getCounter = (orderCombinations, course) => {
  const sumCombination = {}

  // 각 course에 해당하는 조합을 중복을 포함하여 counter에 넣습니다.
  course.forEach((elem) => {
    let allOrder = []
    orderCombinations.forEach((combinations) => {
      allOrder = [...allOrder, ...combinations[elem]];
    })
    sumCombination[elem] = allOrder
  })

  const counter = {}
  course.forEach((key) => {
    const result = {};
    sumCombination[key].forEach((combi) => {
      result[combi] = (result[combi] || 0) + 1
    })
    counter[key] = result
  })

  return counter;
}

//각각의 course에서 가장 많이 나온 조합을 배열로 return
const getMaxOrder = (counter) => {
  const result = []
  for (let key in counter) {
    const combinations = counter[key]
    const maxCount = Math.max(...Object.values(combinations))
    if (maxCount === 1) {
      continue
    }
    for (let combi in combinations) {
      if (combinations[combi] === maxCount) {
        result.push(combi)
      }
    }
  }
  return result
}

const orders = ["XYZ", "XWY", "WXA"]
const course = [2, 3, 4]

console.log(solution(orders, course))