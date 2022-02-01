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

let tip = function (total = 20, tipPercent = 0.2) {
  //   let getTip = total * tipPercent;
  //   let grandTotal = getTip + total;
  //   return grandTotal;
  let grandTotal = total * tipPercent + total;
  return grandTotal;
};
let tipAmount = tip(undefined, 0.25);
console.log(tipAmount);
