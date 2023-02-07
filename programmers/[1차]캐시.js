const solution = (cacheSize, cities) => {
  let answer = 0;
  const cache = [];

  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((city) => {
    const lowerCity = city.toLowerCase();
    if (cache.includes(lowerCity)) {
      answer += 1;
      cache.splice(cache.indexOf(lowerCity), 1);
      cache.unshift(lowerCity);
    } else {
      answer += 5;
      if (cache.length >= cacheSize) cache.pop();
      cache.unshift(lowerCity);
    }
  });

  return answer;
};

const cacheSize1 = 3;
const cities1 = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
];

console.log(solution(cacheSize1, cities1));
