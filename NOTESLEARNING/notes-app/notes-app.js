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

const filters = {
  searchText: "",
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("body").appendChild(noteEl);
  });
};

renderNotes(notes, filters);

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
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
