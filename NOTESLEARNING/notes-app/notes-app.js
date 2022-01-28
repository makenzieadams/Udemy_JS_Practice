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

document.querySelector("#note").addEventListener("click", function (event) {
  event.target.textContent = "Hey I was clicked!";
});

document.addEventListener("click", function () {
  console.log("delete all notes");
});

document.querySelectorAll(".note").forEach(function (note) {
  note.remove();
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  console.log(e.target.value);
});

document.querySelector("#new-todo").addEventListener("input", function (event) {
  console.log(event.target.value);
});
