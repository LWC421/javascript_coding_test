class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor(parentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop(); //마지막 노드 root로 올리기

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        //오른쪽 노드랑 SWAP
        [this.heap[currentIndex], this.heap[rightIndex]] = [
          this.heap[rightIndex],
          this.heap[currentIndex],
        ];
        currentIndex = rightIndex;
      } else {
        //왼쪽 노드랑 SWAP
        [this.heap[currentIndex], this.heap[leftIndex]] = [
          this.heap[leftIndex],
          this.heap[currentIndex],
        ];
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const solution = (n, works) => {
  const heap = new MaxHeap();
  works.forEach((work) => {
    //일단 힙에 다 넣기
    heap.push(work);
  });

  for (let i = 0; i < n; i++) {
    const target = heap.pop();
    if (target === 0) {
      //root가 0이라는 뜻은 모든 작업이 0이므로 중단하면 됨
      break;
    }
    heap.push(target - 1);
  }
  //제곱하여 계산
  const result = heap.heap.reduce((prev, current) => {
    return prev + current ** 2;
  }, 0);

  return result;
};
