// 힙 구현 관련 도움 : https://nyang-in.tistory.com/153
// https://programmers.co.kr/learn/courses/30/lessons/43238
// 입국심사

class Heap {
  constructor(key) {
    this.items = [];
    this.key = key;
  }

  swap(index1, index2) {
    // let temp = Object.assign({}, this.items[index1]);
    // this.items[index1] = Object.assign({}, this.items[index2]);
    // this.items[index2] = temp;
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parent(index) {
    return this.items[this.parentIndex(index)];
  }
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;
    while (
      this.parent(index) !== undefined &&
      this.parent(index)[this.key] > this.items[index][this.key]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  bubbleDown() {
    let index = 0;
    while (
      (this.leftChild(index) !== undefined &&
        this.leftChild(index)[this.key] < this.items[index][this.key]) ||
      (this.rightChild(index) !== undefined &&
        this.rightChild(index)[this.key] < this.items[index][this.key])
    ) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) !== undefined &&
        this.rightChild(index)[this.key] < this.items[smallerIndex][this.key]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }

  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();

    return item;
  }
}

function solution(n, times) {
  const minHeap = new MinHeap("next");

  times.forEach((time) => {
    minHeap.add({ cost: time, next: time });
  });

  for (let i = 1; i < n; i++) {
    const first = minHeap.poll();
    first.next += first.cost;

    minHeap.add(first);
  }

  return minHeap.poll().next;
}

const n = 6;
const times = [7, 10];

console.log(solution(n, times));
