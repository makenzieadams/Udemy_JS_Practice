let myBook = {
  title: "1948",
  author: "George Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723,
};

//Pass an object into a functin
//Create function
//single argument

/*let getSummary = function (book) {
  console.log(`${book.title} by ${book.author}`);
};

getSummary(myBook);
getSummary(otherBook);*/

//return an object from a function
//to be able to return multiple values

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

//By returning objects from functions, able to pass back multiple values in this case to strings

//Challenge area

//create function - take far in - return object with all 3
//return object with far, with converted cel value, and with converted kel value

let getFar = function (far) {
  return {
    far: far,
    kelvin: (far + 459.67) * (5 / 9),
    celsius: (far - 32) * (5 / 9),
  };
};

let temps = getFar(32);
console.log(temps);
