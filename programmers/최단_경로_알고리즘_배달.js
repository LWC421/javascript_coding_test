class MinHeap {
  constructor() {
    this.heap = [null];
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor(parentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    const root = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;
    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] &&
        this.heap[currentIndex].cost > this.heap[rightIndex].cost)
    ) {
      if (this.heap[leftIndex] === undefined) {
        [this.heap[currentIndex], this.heap[rightIndex]] = [
          this.heap[rightIndex],
          this.heap[currentIndex],
        ];
        currentIndex = rightIndex;
      } else if (this.heap[rightIndex] === undefined) {
        [this.heap[currentIndex], this.heap[leftIndex]] = [
          this.heap[leftIndex],
          this.heap[currentIndex],
        ];
        currentIndex = leftIndex;
      } else if (this.heap[leftIndex].cost < this.heap[rightIndex].cost) {
        [this.heap[currentIndex], this.heap[leftIndex]] = [
          this.heap[leftIndex],
          this.heap[currentIndex],
        ];
        currentIndex = leftIndex;
      } else {
        [this.heap[currentIndex], this.heap[rightIndex]] = [
          this.heap[rightIndex],
          this.heap[currentIndex],
        ];
        currentIndex = rightIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return root;
  }
}

const solution = (N, road, K) => {
  const distance = Array(N + 1).fill(Infinity);
  distance[1] = 0;
  const heap = new MinHeap();
  heap.push({ node: 1, weight: 0 });

  while (!heap.isEmpty()) {
    const { node: currentNode, weight: currentWeight } = heap.pop();
    for (const [src, dest, weight] of road) {
      const nextWeight = currentWeight + weight;
      if (src === currentNode && nextWeight < distance[dest]) {
        distance[dest] = nextWeight;
        heap.push({ node: dest, weight: nextWeight });
      } else if (dest === currentNode && nextWeight < distance[src]) {
        distance[src] = nextWeight;
        heap.push({ node: src, weight: nextWeight });
      }
    }
  }

  return distance.filter((dist) => dist <= K).length;
};

const N = 5;
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
const K = 3;

console.log(solution(N, road, K));
