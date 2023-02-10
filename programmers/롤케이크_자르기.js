function solution(topping) {
  let answer = 0;

  const map1 = new Map();
  const map2 = new Map();

  //일단 전부다 넣기
  for (const top of topping) {
    if (map2.has(top)) {
      map2.set(top, map2.get(top) + 1); //카운터 횟수 올리기
    } else {
      //맵에 넣기
      map2.set(top, 1);
    }
  }

  for (const top of topping) {
    if (map1.has(top)) {
      map1.set(top, map1.get(top) + 1); //카운터 횟수 올리기
    } else {
      //맵에 넣기
      map1.set(top, 1);
    }

    if (map2.get(top) === 1) {
      //삭제 해야 되는 경우다
      map2.delete(top);
    } else {
      map2.set(top, map2.get(top) - 1);
    }

    if (map1.size === map2.size) {
      //공평하면
      answer++;
    }
  }

  // new Map() – 맵을 만듭니다.
  // map.set(key, value) – key를 이용해 value를 저장합니다.
  // map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
  // map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
  // map.delete(key) – key에 해당하는 값을 삭제합니다.
  // map.clear() – 맵 안의 모든 요소를 제거합니다.
  // map.size – 요소의 개수를 반환합니다.

  //set.add()
  //set.has()
  //set.delete()

  return answer;
}
