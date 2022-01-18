let name = "  Makenzie Adams  ";

//Length property
console.log(name.length);

//Convert to uppercase
console.log(name.toUpperCase());

//Convert to lowercase
console.log(name.toLowerCase);

//Includes method
let password = "abc123pass098";
console.log(password.includes("password"));

//Trim method - remove extra white space from the string

console.log(name.trim());

//Challenge
//function isValidPassword (true or false)
//length is more than 8 and doesn't contain 'password' - true otherwise false

let isValidPassword = function (password) {
  if (password.includes("password") || password.length > 8) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidPassword("password123456"));
console.log(isValidPassword("128abc0"));
console.log(isValidPassword("mabgca21"));
