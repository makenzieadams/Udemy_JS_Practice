//Global scope (convert far to cel, far, converted)
//local scope (far, cel)

let convertFarToCel = function (far) {
  let result = ((far - 32) * 5) / 9;

  if (far <= 0) {
    let isFreezing = true;
  }

  return result;
};

let converted = convertFarToCel(-27);

console.log(converted);
