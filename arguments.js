/*let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);*/

/*let getScoreText = function (name = "Ann", score = 0) {
  return "Name: " + name + " - Score: " + score;
};
let scoreText = getScoreText(undefined, 50);
console.log(scoreText);*/

//CHALLENGE

let getTip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be $${tip}`;
};

let tipAmount = getTip(40, 0.25);
console.log(tipAmount);

/*let name = "Cash";
let age = 3;
console.log(`Hey, my name is ${name}! I am ${age} years old!`);*/
