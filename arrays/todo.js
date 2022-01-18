//Challenge 1

// Create an array with 5 "todos"
// You have 'x' todos - msg - 'x' lists the length of the array
// Print 1st and 2nd to last items

// const todos = ["Bath", "Brush Teeth", "Dry Hair", "Paint Nails", "Makeup"];

// console.log(`You have ${todos.length} todos.`);
// console.log(`Todo: ${todos[4]}, and ${todos[3]}.`);

//******************************************************** */

//Challenge 2
//Delete 3rd item
//Add new item to end
//Remove 1st item from list

// const todos = ["Bath", "Brush Teeth", "Dry Hair", "Paint Nails", "Makeup"];

// todos.splice(2, 1);
// todos.push("Go to Bed");
// todos.shift();

// console.log(`You have ${todos.length} todos.`);
// console.log(todos);

//******************************************************** */

// Challenge 3
// Replace final console.log with foreach method call
// 1. The first item
// 2. Second item

// const todos = ["Bath", "Brush Teeth", "Dry Hair", "Paint Nails", "Makeup"];

// todos.splice(2, 1);
// todos.push("Go to Bed");
// todos.shift();

// console.log(`You have ${todos.length} todos.`);
// todos.forEach(function (todo, index) {
//   const num = index + 1;
//   console.log(`${num}. ${todo}`);
// });

//******************************************************** */

//Challenge 3
//loop through array using for statement

const todos = ["Bath", "Brush Teeth", "Dry Hair", "Paint Nails", "Makeup"];

todos.splice(2, 1);
todos.push("Go to Bed");
todos.shift();

console.log(`You have ${todos.length} todos.`);
todos.forEach(function (todo, index) {
  const num = index + 1;
  console.log(`${num}. ${todo}`);
});

for (let count = 0; count < todos.length; count++) {
  const num = count + 1;
  const todo = todos[count];
  console.log(`${num}. ${todos}.`);
}
