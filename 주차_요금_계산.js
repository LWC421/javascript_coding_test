function solution(fees, records) {
  const answer = [];
  const [basicTime, basicCharge, unitTime, unitCharge] = fees;

  const recordObject = {};
  records.forEach((record) => {
    const [time, number, inOut] = record.split(" ");

    if (Object.keys(recordObject).includes(number)) {
      recordObject[number].push(strToTime(time));
    } else {
      recordObject[number] = [strToTime(time)];
    }
  });

  for (let number in recordObject) {
    if (recordObject[number].length % 2 === 1) {
      recordObject[number].push(strToTime("23:59"));
    }
  }

  for (let number of Object.keys(recordObject).sort()) {
    let stayTime = 0;
    for (let i = 1; i < recordObject[number].length; i += 2) {
      const [inTime, outTime] = [
        recordObject[number][i - 1],
        recordObject[number][i],
      ];
      const { hour: inHour, minute: inMinute } = inTime;
      const { hour: outHour, minute: outMinute } = outTime;

      stayTime += outHour * 60 + outMinute - (inHour * 60 + inMinute);
    }

    stayTime -= basicTime;
    if (stayTime < 0) {
      answer.push(basicCharge);
    } else {
      const addCharge = Math.ceil(stayTime / unitTime) * unitCharge;
      answer.push(basicCharge + addCharge);
    }
  }

  return answer;
}

const strToTime = (time) => {
  const [hour, minute] = time.split(":");

  return { hour: parseInt(hour), minute: parseInt(minute) };
};

const fees1 = [180, 5000, 10, 600];
const records1 = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

console.log(solution(fees1, records1));
