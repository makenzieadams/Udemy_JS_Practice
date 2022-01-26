const the = document.querySelectorAll("p");
the.forEach(function (p) {
  if (p.textContent.includes("THE")) {
    p.remove();
  }
});
