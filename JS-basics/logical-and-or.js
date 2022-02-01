let guestOneVegan = false;
let guestTwo = false;

if (guestOneVegan && guestTwo) {
  console.log("Only Vegan Options");
} else if (guestOneVegan || guestTwo) {
  console.log("Some vegan options");
} else {
  console.log("Regular Menu");
}
