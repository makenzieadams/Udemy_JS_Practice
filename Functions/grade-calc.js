let testScore = function (studentScore, totalPossibleScore) {
  let percent = (studentScore / totalPossibleScore) * 100;
  if (percent >= 90) {
    return `You got an A! (${percent})`;
  }
  if (percent <= 89 && percent >= 80) {
    return `You got a B! (${percent})`;
  }
  if (percent <= 79 && percent >= 70) {
    return `You got a C! (${percent})`;
  }
  if (percent <= 69 && percent >= 60) {
    return `You got a D! (${percent})`;
  } else {
    `You got an F!`;
  }
};

let score = testScore(18, 25);
console.log(score);
