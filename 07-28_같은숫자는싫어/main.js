const solution = (arr) => {
  return arr.filter((number, index) =>
    index === 0 ? true : arr[index - 1] !== number
  );
};

const arr = [1, 1, 3, 3, 0, 1, 1];

console.log(solution(arr));
