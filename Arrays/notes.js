// const notes = ["Note 1", "Note 2", "Note 3"];

// console.log(notes.length);
// console.log(notes[notes.length - 3]);

//*********************************************************** */

// const notes = ["Note 1", "Note 2", "Note 3"];

// // console.log(notes.pop());
// // notes.push("My new note");

// // console.log(notes.shift());
// // notes.unshift("My first note");

// // notes.splice(1, 1, "This is the new second item");

// notes[2] = "This is now the new note three";

// console.log(notes.length);
// console.log(notes);

//************************************************************ */

// const notes = ["Note 1", "Note 2", "Note 3"];

// notes.forEach(function (item, index) {
//   console.log(index);
//   console.log(item);
// });

// notes[2] = "This is now the new note three";

// console.log(notes.length);
// console.log(notes);

//************************************************************** */

const notes = ["Note 1", "Note 2", "Note 3"];

notes.forEach(function (item, index) {
  console.log(index);
  console.log(item);
});

notes[2] = "This is now the new note three";

console.log(notes.length);
console.log(notes);

for (let count = 2; count >= 0; count--) {
  console.log(count);
}

for (let count = 0; count < notes.length; count++) {
  console.log(notes[count]);
}
