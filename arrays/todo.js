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

//Challenge 4
//loop through array using for statement

// const todos = ["Bath", "Brush Teeth", "Dry Hair", "Paint Nails", "Makeup"];

// for (let count = 0; count < todos.length; count++) {
//   const num = count + 1;
//   const todo = todos[count];
//   console.log(`${num}. ${todo}.`);
// }

//******************************************************** */

//Challenge 5
// 1. Convert array to array of objects -> text, completed (true/false otherwise)
// 2. Create function to remove todo by text value

// const todos = [
//   {
//     text: "I need to shower.",
//     completed: "True",
//   },
//   {
//     text: "I need to dry my hair.",
//     completed: "True",
//   },
//   {
//     text: "I need to go to bed",
//     completed: "False",
//   },
// ];

// const deleteTodo = function (todos, text) {
//   const newTodos = todos.filter(function (todo) {
//     return todo.text.toLowerCase() !== text.toLowerCase();
//   });
//   return newTodos;
// };
// console.log(deleteTodo(todos, "I need to dry my hair."));

//********************************************************************** */

// const todos = [
//   {
//     text: "I need to shower.",
//     completed: true,
//   },
//   {
//     text: "I need to dry my hair.",
//     completed: true,
//   },
//   {
//     text: "I need to go to bed",
//     completed: false,
//   },
// ];

// const findToDo = function (todos, toDoText) {
//   return todos.find(function (todo, index) {
//     return todo.text.toLowerCase() === toDoText.toLowerCase();
//   });
// };

// const findToDos = function (todos, returnText) {
//   return todos.filter(function (todo) {
//     const isTextMatch = todo.text
//       .toLowerCase()
//       .includes(returnText.toLowerCase());
//     const isCompletedMatch = todo.completed
//       .toLowerCase()
//       .includes(returnText.toLowerCase());
//     return isTextMatch || isCompletedMatch;
//   });
// };

// console.log(findToDos(todos, "al"));

//*********************************************************************** */

// const todos = [
//   {
//     text: "I need to shower.",
//     completed: true,
//   },
//   {
//     text: "I need to dry my hair.",
//     completed: true,
//   },
//   {
//     text: "I need to go to bed",
//     completed: false,
//   },
// ];

// const sortToDos = function (todos) {
//   todos.sort(function (a, b) {
//     return a.completed - b.completed;
//   });
// };

// const findToDo = function (todos, toDoText) {
//   return todos.find(function (todo) {
//     return todo.text.toLowerCase() === toDoText.toLowerCase();
//   });
// };

// const findToDos = function (todos) {
//   return todos.filter(function (todo) {
//     return !todo.completed;
//   });
// };

// sortToDos(todos);
// console.log(todos);

//********************************************************************* */
