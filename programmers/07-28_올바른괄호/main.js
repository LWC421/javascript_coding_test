const solution = (s) => {
  const stack = [];
  const parsedString = s.split("");

  for (index = 0; index < parsedString.length; index++) {
    const currentString = parsedString[index];
    if (stack.length === 0) {
      // 비어 있을 경우 넣는다
      stack.push(currentString);
    } else {
      // 비어 있지 않을 경우 확인 한다
      if (currentString === ")" && stack[stack.length - 1] === "(") {
        // 올바르면 stack에서 pop
        stack.pop();
      } else {
        stack.push(currentString);
      }
    }
  }
  return stack.length === 0 ? true : false;
};

const s = "(())()";

console.log(solution(s));
