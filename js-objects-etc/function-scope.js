//Global scope (convertFartoCel, tempOne, tempTwo)
//Local scope (far, cel)
//Local scope (isFreezing)

let convertFarToCel = function (far) {
  let cel = ((far - 32) * 5) / 9;

  if (cel <= 0) {
    let isFreezing = true;
  }
  return cel;
};

let tempOne = convertFarToCel(32);
let tempTwo = convertFarToCel(68);

console.log(tempOne);
console.log(tempTwo);
