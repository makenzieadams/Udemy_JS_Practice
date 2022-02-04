// let name = "   Makenzie Adams ";
// console.log(name.length);

// console.log(name.toLowerCase());

// let password = "abc123";
// console.log(password.includes("123"));

// console.log(name.trim());

let isValidPassword = function (password) {
  if (password.length > 8 && !password.includes("password")) {
    return true;
  }

  return false;
};

console.log(isValidPassword("password"));
