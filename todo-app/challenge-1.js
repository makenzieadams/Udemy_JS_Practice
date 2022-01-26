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

const the = document.querySelectorAll("p");
the.forEach(function (p) {
  if (p.textContent.includes("THE")) {
    p.remove();
  }
});
