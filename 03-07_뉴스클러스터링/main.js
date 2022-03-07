// [1차] 뉴스 클러스터링
// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const strSet1 = getSet(str1);
  const strSet2 = getSet(str2);

  if (strSet1.length === 0 || strSet2.length === 0) {
    return 65536;
  }

  const union = getUnion(strSet1, strSet2);
  const intersection = getIntersection(strSet1, strSet2);

  console.log(union);

  return Math.floor((intersection.length / union.length) * 65536);
}

/**
 * String을 인자로 받아 소문자로 변환한 후 집합을 반환합니다.
 * @param {String} str
 * @returns {String[]} 2글자씩 끊어진 집합을 배열의 형태로 반환
 */
const getSet = (str) => {
  const lowerStr = str.toLowerCase();
  const strSet = [];

  for (let i = 0; i < lowerStr.length - 1; i++) {
    const currentStr = lowerStr.slice(i, i + 2);
    if (currentStr.match(/[a-z][a-z]/g)) {
      //두 글자 모두 소문자일때만 push
      strSet.push(currentStr);
    }
  }

  return strSet;
};

/**
 * 두 개의 집합을 인자로 받아 합집합을 리턴
 * @param {String[]} set1 두 글자의 집합
 * @param {String[]} set2 두 글자의 집합
 * @returns {String[]} 두 집합의 합집합
 */
const getUnion = (set1, set2) => {
  let set1Tmp = [...set1];
  const result = [...set1];

  set2.forEach((str) => {
    if (set1Tmp.indexOf(str) === -1) {
      result.push(str);
    } else {
      set1Tmp.splice(set1Tmp.indexOf(str), 1);
    }
  });
  return result;
};

/**
 * 두 개의 집합을 인자로 받아 교집합을 리턴
 * @param {String[]} set1 두 글자의 집합
 * @param {String[]} set2 두 글자의 집합
 * @returns {String[]}  두 집합의 교집합
 */
const getIntersection = (set1, set2) => {
  return set1.filter((str) => set2.indexOf(str) !== -1);
};

const str1 = "abc";
const str2 = "abbb";

console.log(solution(str1, str2));
