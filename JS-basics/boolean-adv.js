let isAccountLocked = false;
let userRole = "user";

if (isAccountLocked) {
  console.log("Is account locked");
} else if (userRole === "admin") {
  console.log("Welcome");
} else console.log("Error");
