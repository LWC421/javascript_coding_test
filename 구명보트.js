const solution = (people, limit) => {
  people = people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;

  let count = 1;
  let current = limit;
  while (left <= right) {
    let small = people[left];
    let big = people[right];

    if (small > current) {
      //둘다 못 타는 경우
      //구명보트 추가
      count++;
      current = limit;
    } else if (big <= current) {
      //체중이 많은 사람이 탈 수 있는 경우
      current -= big;
      right--;
    } else {
      //체중이 적은 사람만 탈 수 있는 경우
      current -= small;
      left++;
    }
  }

  return count;
};

const people = [70, 80, 50];
const limit = 100;

console.log(solution(people, limit));
