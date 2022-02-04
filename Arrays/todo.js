const todos = [
  "Walk the dog",
  "Buy food",
  "Groom dog",
  "Feed dog",
  "Take a walk",
];

todos.splice(2, 1);
todos.push("Go to bed");
todos.shift();

console.log(`You have ${todos.length} things to do.`);
console.log(todos);
