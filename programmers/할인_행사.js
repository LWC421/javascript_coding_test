//https://school.programmers.co.kr/learn/courses/30/lessons/131127

/**
    want : 제품명, 문자열 배열
    number : 원하는 제품의 개수, 숫자 배열
    discount : 할인 품목, 문자열 배열
*/
const solution = (want, number, discount) => {
  let answer = 0;
  
  const count = new Map()
  const final = new Map()
  for(let i = 0; i < want.length; i++){
      final.set(want[i], number[i])
  }
  
  want.forEach((w) => {
      count.set(w, 0);    //전부다 0개로 일단 초기화
  })
  
  for(let i = 0; i < 10; i++){
      const target = discount[i];
      if(count.has(target)){
          count.set(target, count.get(target)+1)
      }
  }

  if(isSuccess(want, count, final)){
      answer++;
  }
  
  
  
  for(let i = 0; i < discount.length -10; i++){
      const remove = discount[i];
      const add = discount[i+10];
      if(count.has(remove)){
          count.set(remove, count.get(remove)-1)
      }
      if(count.has(add)){
          count.set(add, count.get(add)+1)
      }
      
      if(isSuccess(want, count, final)){
          answer++;
      }
  }
  
  return answer;
}

const isSuccess = (want, src, target) => {
  for(let i = 0; i < want.length; i++){
      const w = want[i];
      if(src.get(w) < target.get(w)){
          return false;
      }
  }

  return true;
}