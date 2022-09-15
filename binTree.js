/**
 *
 * @param {Array<number>} array 오름차순으로 정렬된 배열
 * @param {number} value 찾을려는 값
 * @returns 찾는 값의 index, 없을 경우 -1
 */
const binarySearch = (array, value) => {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (array[mid] === value) {
      return mid;
    }

    if (array[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
};

/*
  Binary Search Tree
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    //Root가 없을 경우 바로 대입
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  has(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        return true;
      }
    }

    return false;
  }
}

const binTree = new BinarySearchTree();

binTree.insert(3);
binTree.insert(2);
binTree.insert(1);
binTree.insert(6);
binTree.insert(7);
binTree.insert(8);
binTree.insert(4);

console.log(binTree.has(0));
