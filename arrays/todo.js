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

const todos = ["Bath", "Brush Teeth", "Dry Hair", "Paint Nails", "Makeup"];

todos.splice(2, 1);
todos.push("Go to Bed");
todos.shift();

console.log(`You have ${todos.length} todos.`);
console.log(todos);
