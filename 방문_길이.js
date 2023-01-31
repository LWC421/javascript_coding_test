const solution = (dirs) => {
  const dirArr = dirs.split("");
  const length = 11;

  const functions = {
    U: goUp,
    D: goDown,
    L: goLeft,
    R: goRight,
  };

  const map = Array.from(Array(length), () => Array(length).fill(undefined));
  map.forEach((_, y) => {
    _.forEach((__, x) => {
      map[y][x] = new Dot();
    });
  });

  for (let y = 0; y < length; y++) {
    for (let x = 0; x < length; x++) {
      if (!(y - 1 < 0)) {
        //위
        map[y - 1][x].down = false;
        map[y][x].up = false;
      }
      if (!(y + 1 >= length)) {
        //아래
        map[y + 1][x].up = false;
        map[y][x].down = false;
      }
      if (!(x - 1 < 0)) {
        //왼쪽
        map[y][x - 1].right = false;
        map[y][x].left = false;
      }
      if (!(x + 1 >= length)) {
        //오른쪽
        map[y][x + 1].left = false;
        map[y][x].right = false;
      }
    }
  }

  let curY = 5;
  let curX = 5;

  dirArr.forEach((dir) => {
    [curY, curX] = functions[dir](map, curY, curX);
  });

  let answer = 0;
  map.forEach((row) => {
    row.forEach((dot) => {
      answer += dot.get();
    });
  });

  return answer / 2;
};

const goUp = (map, curY, curX) => {
  if (curY - 1 < 0) {
    return [curY, curX];
  }

  map[curY][curX].up = true;
  map[curY - 1][curX].down = true;
  return [curY - 1, curX];
};

const goDown = (map, curY, curX) => {
  if (curY + 1 >= 11) {
    return [curY, curX];
  }

  map[curY][curX].down = true;
  map[curY + 1][curX].up = true;
  return [curY + 1, curX];
};

const goLeft = (map, curY, curX) => {
  if (curX - 1 < 0) {
    return [curY, curX];
  }

  map[curY][curX].left = true;
  map[curY][curX - 1].right = true;
  return [curY, curX - 1];
};

const goRight = (map, curY, curX) => {
  if (curX + 1 >= 11) {
    return [curY, curX];
  }

  map[curY][curX].right = true;
  map[curY][curX + 1].left = true;
  return [curY, curX + 1];
};

class Dot {
  constructor() {
    this.up = undefined;
    this.down = undefined;
    this.left = undefined;
    this.right = undefined;
  }

  get() {
    let count = 0;
    if (this.up == true) {
      count++;
    }
    if (this.down == true) {
      count++;
    }
    if (this.left == true) {
      count++;
    }
    if (this.right == true) {
      count++;
    }

    return count;
  }
}

const dirs1 = "ULURRDLLU";
const dirs2 = "LULLLLLLU";

console.log(solution(dirs2));
