// const notes = ["Note 1", "Note 2", "Note 3"];

// // console.log(notes.pop());
// // notes.push("My New Note");

// // console.log(notes.shift());
// // notes.unshift("My first note");

// // notes.splice(1, 1, "This is the new second item");

// // notes[2] = "This is now the new note 3";

// // notes.forEach(function (item, index) {
// //   console.log(index);
// //   console.log(item);
// // });

// console.log(notes.length);
// console.log(notes);

// const notes = [
//   {
//     title: "My next trip",
//     body: "I would like to go to Spain",
//   },
//   {
//     title: "Habits to work on",
//     body: "Exercise. Eating a bit better",
//   },
//   {
//     title: "Office modification",
//     body: "Get a new seat",
//   },
// ];

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// const note = findNote(notes, "office modification");
// console.log(note);

// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function (note, index) {
//   console.log(note);
//   return note.title === "Habits to work on";
// });
// console.log(index);

// const findNote = function (notes, noteTitle) {
//   const note = notes.find(function (note) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return note;
// };

// const note = findNote(notes, "office modification");
// console.log(note);

const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better.",
  },
  {
    title: "Office modification",
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

console.log(findNotes(notes, "eating"));
