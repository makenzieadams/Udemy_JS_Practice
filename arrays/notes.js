const notes = ["Note 1", "Note 2", "Note 3"];

// console.log(notes.pop());
// notes.push("My New Note");

// console.log(notes.shift());
// notes.unshift("My first note");

// notes.splice(1, 1, "This is the new second item");

notes[2] = "This is now the new note 3";

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

console.log(notes.length);
console.log(notes);

for (let count = 2; count >= 0; count-- /* plus1 */) {
  console.log(count);
}

for (let count = notes.length - 1; count >= 0; count--) {
  console.log(notes[count]);
}
