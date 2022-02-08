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

// const notes = ["Note 1", "Note 2", "Note 3"];

// notes.forEach(function (item, index) {
//   console.log(index);
//   console.log(item);
// });

// notes[2] = "This is now the new note three";

// console.log(notes.length);
// console.log(notes);

// for (let count = 2; count >= 0; count--) {
//   console.log(count);
// }

// for (let count = 2; count < notes.length; count++) {
//   console.log(notes[count]);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count]);
//   }

//********************************************************** */

// const notes = [
//   {
//     title: "My next trip",
//     body: "I would like to go to Spain",
//   },
//   {
//     title: "Habits to work on",
//     body: "Work out",
//   },
//   {
//     title: "Office modifications",
//     body: "Get a new seat",
//   },
// ];

// notes.forEach(function (item, index) {
//   console.log(index);
//   console.log(item);
// });

// notes[2] = "This is now the new note three";

// console.log(notes.length);
// console.log(notes);

// // let someObject = {};
// // let otherObject = someObject;
// // console.log(someObject === otherObject);

// const index = notes.findIndex(function (note, index) {
//   console.log(note);
//   return note.title === "Habits to work on";
// });
// console.log(index);

//************************************************************** */

// const notes = [
//   {
//     title: "My next trip",
//     body: "I would like to go to Spain",
//   },
//   {
//     title: "Habits to work on",
//     body: "Work out",
//   },
//   {
//     title: "Office modifications",
//     body: "Get a new seat",
//   },
// ];

// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };

// // const findNote = function (notes, noteTitle) {
// //     const index = notes.findIndex(function (note, index) {
// //       return note.title.toLowerCase === noteTitle.toLowerCase;
// //     });
// //     return notes[index];
// //   };

// const note = findNote(notes, "office modifications");
// console.log(note);

// // console.log(notes.length);
// // console.log(notes);

// // const index = notes.findIndex(function (note, index) {
// //   console.log(note);
// //   return note.title === "Habits to work on";
// // });
// // console.log(index);

//****************************************************************** */

const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: "Work out",
  },
  {
    title: "Office modifications",
    body: "Get a new seat",
  },
];

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function (notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, "work"));

const note = findNote(notes, "office modifications");
console.log(note);
