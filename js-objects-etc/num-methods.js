/*let num = 103.941;

console.log(num.toFixed(1));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);*/

//Challenge
//Take in persons guess (single argument)
//generate random number
//1-5
//return true/false

let personGuess = function (guess) {
  let min = 1;
  let max = 5;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;

  if (random === guess) {
    return true;
  } else {
    return false;
  }
};

console.log(personGuess(3));