const solution = (priorities, location) => {
  const indexedPriorities = priorities.map((priority, index) => {
    return { priority, index };
  });
  let count = 0;
  while (true) {
    const first = indexedPriorities.splice(0, 1)[0];
    if (indexedPriorities.some((target) => target.priority > first.priority)) {
      indexedPriorities.push(first);
    } else {
      if (first.index === location) {
        return ++count;
      }
      count++;
    }
  }
};

const priorities = [1, 1, 9, 1, 1];
const location = 0;

console.log(solution(priorities, location));
