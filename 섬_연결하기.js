const find = (parent, x) => {
  if (parent[x] === x) {
    return x;
  }

  return (parent[x] = find(parent, parent[x]));
};

const union = (parent, a, b) => {
  a = find(parent, a);
  b = find(parent, b);
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
};

const compare = (parent, a, b) => {
  a = find(parent, a);
  b = find(parent, b);
  return a === b;
};

const solution = (n, costs) => {
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, index) => index);
  let costSum = 0;
  sortedCosts.forEach(([src, dest, cost]) => {
    if (!compare(parent, src, dest)) {
      costSum += cost;
      union(parent, src, dest);
    }
  });

  return costSum;
};

const n = 4;
const costs = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
];

console.log(solution(n, costs));
