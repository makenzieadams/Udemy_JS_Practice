/*let temp = 70;

if (temp >= 60 && temp <= 90) {
  console.log("It is pretty nice out");
}

if (temp <= 0 || temp >= 120) {
  console.log("Do not go outside");
} */

//Same as:

/*if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {

} else {
    console.log('Eh. Do what you want')
}*/

let firstGuestVegan = false;
let secondGuestVegan = false;

if (firstGuestVegan && secondGuestVegan) {
  console.log("Vegan dishes only");
} else if (firstGuestVegan || secondGuestVegan) {
  console.log("Offer some vegan");
} else {
  console.log("Give regular menu");
}
