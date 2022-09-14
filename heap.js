class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(parentIndex / 2);
    }
  }

  pop() {
    //반환할 값 임시 저장
    const returnValue = this.heap[1];
    //마지막 정점 root로 올리기
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    //현재 값이 자식값들보다 작은 경우 반복(최소힙의 경우, 큰 경우 반복)
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      //오른쪽 자식 노드의 우선순위가 좌측 자식 노드보다 우선 순위가 높다면
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        [this.heap[rightIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[rightIndex],
        ];

        // const temp = this.heap[currentIndex];
        // this.heap[currentIndex] = this.heap[rightIndex];
        // this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        //왼쪽 자식 노드의 우선순위가 더 높은 경우
        [this.heap[leftIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[leftIndex],
        ];
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(1);
heap.push(4);
heap.push(3);
heap.push(2);
heap.push(5);

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
