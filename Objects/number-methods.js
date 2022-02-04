// let num = 123.456;

// console.log(num.toFixed(2));

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.random(num));

// let min = 0;
// let max = 1;
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

let makeGuess = function (guess) {
  let min = 1;
  let max = 5;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomNum === guess) {
    return true;
  }
  return false;
};
console.log(makeGuess(5));
