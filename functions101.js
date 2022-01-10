//Challenge

let convertFarToCel = function (far) {
  let result = ((far - 32) * 5) / 9;
  return result;
};

let converted = convertFarToCel(-27);

console.log(converted);
