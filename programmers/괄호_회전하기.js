function solution(s) {
  let answer = 0;
  const list = s.split("");

  for (let i = 0; i < list.length; i++) {
    const rotated = rotate(list, i);
    if (check(rotated)) answer++;
  }

  return answer;
}

const rotate = (list, count) => {
  return [...list.slice(count), ...list.slice(0, count)];
};

const compare = (a, b) => {
  if (a === "(" && b === ")") return true;
  if (a === "[" && b === "]") return true;
  if (a === "{" && b === "}") return true;

  return false;
};

const check = (list) => {
  const stack = [];

  for (let c of list) {
    if (isLeft(c)) stack.push(c);
    //왼쪽괄호면 넣기
    else {
      //오른쪽괄호면
      if (stack.legnth === 0)
        return false; //검사해야되는데 stack이 비어있으면 false
      else {
        if (!compare(stack.pop(), c)) return false; //검사해서 틀리면 false
      }
    }
  }

  if (stack.length === 0) return true; //괄호가 전부 올바르게 짝지어졌으면 true
  else return false;
};

const isLeft = (c) => {
  if (c === "(" || c === "[" || c === "{") return true;
};

const s1 = "[](){}";

console.log(solution(s1));
