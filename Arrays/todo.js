// const todos = [
//   "Walk the dog",
//   "Buy food",
//   "Groom dog",
//   "Feed dog",
//   "Take a walk",
// ];

// todos.splice(2, 1);
// todos.push("Go to bed");
// todos.shift();

// console.log(`You have ${todos.length} things to do.`);

// todos.forEach(function (todo, index) {
//   console.log(`${index + 1}. ${todo}`);
// });

const todos = [
  {
    text: "Walk the dog",
    completed: true,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Groom dog",
    completed: false,
  },
  {
    text: "Feed dog",
    completed: true,
  },
  {
    text: "Take a walk",
    completed: false,
  },
];

// const deleteTodo = function (text) {
//   const index = todos.findIndex((todo) => {
//     return text.toLowerCase() === todo.text.toLowerCase();
//   });

//   if (index !== -1) {
//     todos.splice(index, 1);
//   }
// };

const incompleteTodos = function (todos) {
  return todos.filter((todo) => {
    return !todo.completed;
  });
};

console.log(incompleteTodos(todos));

// deleteTodo("groom dog");
// deleteTodo("walk the dog");
// console.log(todos)
