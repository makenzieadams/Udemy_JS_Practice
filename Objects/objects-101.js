let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};
console.log(
  `${myBook.title} by ${myBook.author} has ${myBook.pageCount} pages.`
);

myBook.title = "Animal Farm";
console.log(
  `${myBook.title} by ${myBook.author} has ${myBook.pageCount} pages.`
);

//Challenge
//name, age, location
//create object and create string based on the properties

let myPerson = {
  name: "Makenize",
  age: 27,
  location: "North Carolina",
};

console.log(
  `My name is ${myPerson.name}. I am ${myPerson.age}, and I live in ${myPerson.location}.`
);
