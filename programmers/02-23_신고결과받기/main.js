// 신고 결과 받기
// https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  //일단 모두 0으로 초기화
  const answer = new Array(id_list.length).fill(0)
  const reported = {}

  //id_list를 기반으로 신고당한 횟수를 기록하기 위한 object생성
  id_list.map((id) => reported[id] = [])

  //report배열로부터 reported에 신고한 id를 기록
  report.map((message) => {
    const [src, dst] = message.split(" ")
    reported[dst].push(src)
  })

  for (let key in reported) {
    reported[key] = new Set(reported[key])
    reported[key] = [...reported[key]]
    if (reported[key].length >= k) {
      reported[key].map((src) => {
        answer[id_list.indexOf(src)] += 1
      })
    }
  }

  return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"]
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
const k = 2

const result = solution(id_list, report, k)

console.log(result)