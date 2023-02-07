class Node {
  constructor(value, isWord = false) {
    this.value = value;
    this.children = new Map();
    this.isWord = isWord;
  }
}

class Trie {
  constructor() {
    this.root = new Node("");
  }

  insert(string) {
    let currentNode = this.root;

    //마지막 글자 전까지 순회
    for (let char of string.slice(0, string.length - 1)) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(
          char,
          new Node(currentNode.value + char, false)
        );
      }
      currentNode = currentNode.children.get(char);
    }

    //마지막 글자는 따로 처리
    const char = string.slice(-1);
    if (!currentNode.children.has(char)) {
      currentNode.children.set(char, new Node(currentNode.value + char, true));
    } else {
      //해당 조합이 단어임을 표시
      const target = currentNode.children.get(char);
      target.isWord = true;
    }
  }

  isOnlyOne(string) {
    let currentNode = this.root;

    //일단 해당 글자까지 접근
    for (let char of string) {
      if (!currentNode.children.has(char)) {
        return 0;
      }
      currentNode = currentNode.children.get(char);
    }

    const nodeList = [currentNode];
    while (nodeList.length > 0) {
      const current = nodeList.pop();
      const numberOfChild = [...current.children.keys()].length;
      if (numberOfChild + (current.isWord && 1) > 1) {
        return false;
      }
      if (numberOfChild > 0) {
        for (let key of [...current.children.keys()]) {
          nodeList.push(current.children.get(key));
        }
      }
    }

    return true;
  }
}

const solution = (words) => {
  let result = 0;
  const trie = new Trie();
  words.forEach((word) => {
    trie.insert(word);
  });

  words.forEach((word) => {
    let isFinish = false;
    for (let length = 1; length < word.length + 1; length++) {
      const source = word.slice(0, length);
      if (trie.isOnlyOne(source)) {
        //만약 추천이 가능하면
        result += length;
        isFinish = true;
        break;
      }
    }
    if (!isFinish) {
      result += word.length;
    }
  });

  return result;
};

const words3 = ["word", "war", "warrior", "world"];

console.log(solution(words3));
