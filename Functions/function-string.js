// let add = function (a, b, c) {
//   return a + b + c;
// };

// let result = add(10, 1, 5);
// console.log(result);

// let getScoreText = function (name = "Anonymous", score = 0) {
//   return "Name: " + name + " -Score " + score;
// };
// let scoreText = getScoreText(undefined, 50);
// console.log(scoreText);

let getTip = function (total, tipPercent) {
  let percent = tipPercent * 100;
  let tipAmount = total * tipPercent;
  return `A ${percent}% tip on $${total} would be $${tipAmount}.`;
};
let tipAmount = getTip(25, 0.2);
console.log(tipAmount);
