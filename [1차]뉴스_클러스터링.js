function solution(str1, str2) {
  const strSet1 = getSet(str1);
  const strSet2 = getSet(str2);

  const intersection = getIntersection(strSet1, strSet2);
  const union = getUnion(strSet1, strSet2);

  if (union.length === 0) {
    return 65536;
  }
  if (intersection.length === 0) {
    return 0;
  }

  const jakard = intersection.length / union.length;

  return Math.floor(jakard * 65536);
}

const getSet = (str) => {
  const lowerStr = str.toLowerCase();
  const strSet = [];

  for (let i = 0; i < lowerStr.length - 1; i++) {
    const currentStr = lowerStr.substr(i, 2);
    if (currentStr.search(/[^a-z]/g) >= 0) {
      continue;
    } else {
      strSet.push(currentStr);
    }
  }

  return strSet.sort();
};

const getIntersection = (set1, set2) => {
  return set1.filter((str) => set2.indexOf(str) !== -1);
};

const getUnion = (set1, set2) => {
  const inter = getIntersection(set1, set2);
  const union = [...set1, ...set2].sort();

  inter.forEach((str) => {
    union.splice(union.indexOf(str), 1);
  });

  return union;
};

const str1 = "E=M*C^2";
const str2 = "e=m*c^2";

console.log(solution(str1, str2));
