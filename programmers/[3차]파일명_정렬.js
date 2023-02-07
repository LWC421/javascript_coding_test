const solution = (files) => {
  const splitted = files.map((file) => {
    return file.split(/(\d+)/);
  });

  splitted.sort((a, b) => {
    if (a[0].toLowerCase() > b[0].toLowerCase()) {
      return 1;
    } else if (a[0].toLowerCase() < b[0].toLowerCase()) {
      return -1;
    }

    if (parseInt(a[1]) > parseInt(b[1])) {
      return 1;
    } else if (parseInt(a[1]) < parseInt(b[1])) {
      return -1;
    }

    return 0;
  });

  return splitted.map((s) => {
    return s.join("");
  });
};

const files1 = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];
console.log(solution(files1));
