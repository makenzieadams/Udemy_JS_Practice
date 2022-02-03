let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A People's History",
  author: "Howard Zinn",
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summary: `${book.title}, by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

//Challenge
//convert far to celsius and kelvin
//create function - take far in, return object with all three

let conversions = function (far) {
  return {
    farenheit: far,
    celsius: ((far - 32) * 5) / 9,
    kelvin: ((far + 459.67) * 5) / 9,
  };
};

let temps = conversions(74);
console.log(temps);
