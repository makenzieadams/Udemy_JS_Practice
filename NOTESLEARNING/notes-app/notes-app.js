// Dom - Document Object Model (object in JS that models the doc)
//Query and remove

// const p = document.querySelector("h2");
// p.remove();

//Query all and remove

const ps = document.querySelectorAll("p");
ps.forEach(function (p) {
  p.textContent = "*******";
  //   console.log(p.textContent);
  //   p.remove();
});
