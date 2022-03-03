// 행렬 테두리 회전하기
// https://programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  const answer = []

  const map = []  //2Dimenssion Array
  for (let i = 0; i < rows; i++) {
    map.push(new Array(columns).fill(0).map((elem, index) => columns * i + index + 1))
  } //map Initialize

  queries.forEach((query) => {
    answer.push(rotation(map, query))
  })
  return answer;
}

const rotation = (map, query) => {
  const [x1, y1, x2, y2] = query.map((elem) => elem - 1)

  // 1차원 배열을 얻은 후 한 칸씩 밀어줌
  let array = get1DArray(map, x1, y1, x2, y2)
  const last = array[array.length - 1]
  array.splice(array.length - 1, 1)
  array = [last, ...array]

  //실제로 한칸씩 회전합니다.
  fetch(map, array, x1, y1, x2, y2)

  //최소값을 반환합니다.
  return Math.min(...array)
}

//각 쿼리에 해당하는 칸들을 왼쪽위에서부터 시계방향으로 1차원 배열로 펼쳐서 반환
const get1DArray = (map, x1, y1, x2, y2) => {
  let array = []
  //네모의 위
  for (let y = y1; y < y2; y++) {
    array.push(map[x1][y])
  }
  // 네모의 오른쪽
  for (let x = x1; x < x2; x++) {
    array.push(map[x][y2])
  }
  // 네모의 아래
  for (let y = y2; y > y1; y--) {
    array.push(map[x2][y])
  }
  // 네모의 왼쪽
  for (let x = x2; x > x1; x--) {
    array.push(map[x][y1])
  }

  return array
}

//각 쿼리에 해당하는 칸들에 대해서 한칸씩 밀린 칸들을 실제로 대입해줍니다.
const fetch = (map, array, x1, y1, x2, y2) => {
  let index = 0;
  //네모의 위
  for (let y = y1; y < y2; y++) {
    map[x1][y] = array[index++]
  }
  // 네모의 오른쪽
  for (let x = x1; x < x2; x++) {
    map[x][y2] = array[index++]
  }
  // 네모의 아래
  for (let y = y2; y > y1; y--) {
    map[x2][y] = array[index++]
  }
  // 네모의 왼쪽
  for (let x = x2; x > x1; x--) {
    map[x][y1] = array[index++]
  }
}


const rows = 3
const columns = 4
const queries = [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]]

console.log(solution(rows, columns, queries))