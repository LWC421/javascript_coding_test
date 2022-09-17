const solution = (number, k) => {
  const parsedNumber = number.split("").map((num) => parseInt(num));
  const stack = [];
  let remain = k;
  let next = -1;

  for (const num of parsedNumber) {
    next++;
    while (stack[stack.length - 1] < num && remain > 0) {
      remain--;
      stack.pop();
    }
    stack.push(num);
  }

  //남은 개수만큼 지워주기
  Array(remain)
    .fill(true)
    .forEach(() => stack.pop());

  return stack.join("");
};

const numbers1 = "321";
const k1 = 1;

console.log(solution(numbers1, k1));
