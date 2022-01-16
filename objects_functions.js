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

//Create function
//single argument

let getSummary = function (book) {
  console.log(`${book.title} by ${book.author}`);
};

getSummary(myBook);
getSummary(otherBook);
