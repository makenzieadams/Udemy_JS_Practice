// const notes = ["Note 1", "Note 2", "Note 3"];

// console.log(notes.length);
// console.log(notes[notes.length - 3]);

//*********************************************************** */

const notes = ["Note 1", "Note 2", "Note 3"];

// console.log(notes.pop());
// notes.push("My new note");

// console.log(notes.shift());
// notes.unshift("My first note");

notes.splice(1, 1, "This is the new second item");

console.log(notes.length);
console.log(notes);
