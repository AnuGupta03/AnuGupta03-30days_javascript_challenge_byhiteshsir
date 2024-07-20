// Activity 1: Object Creation and access
// Task 1:
// let book = {
//     title: "Harry Potter Part-1",
//     author: "K Rowling",
//     year: 2000
// }
// console.log(book);

// Task 2:
// let book = {
//     title: "Harry Potter Part-1",
//     author: "K Rowling",
//     year: 2000
// }
// console.log(book.title);
// console.log(book.author);

// Activity 2: Object Methods
// Task 3:
// let book = {
//     title: "Harry Potter Part-1",
//     author: "K Rowling",
//     year: 2000,
//     newmethod: function(){
//         return this.title +" "+ this.author;
//     }
// }
// console.log(book.newmethod());

// Task 4:
// let book = {
//     title: "Harry Potter Part-1",
//     author: "K Rowling",
//     year: 2000,
//     newmethod: function(year){
//         this.year = year;
//         return this.title +" "+ this.author +"  "+this.year;
//     }
// }
// console.log(book.newmethod(2020));

// Activity 3: Nested Objects
// Task 5:
// let library = {
//     name: "anamika",
//     books:[
//          {title:"Harry Potter Deadly Shadows", author: "JK Rowling", year: 1949},
//          {title:"Harry Potter Deadly Shadows", author: "JK Rowling", year: 1949},
//          {title:"Harry Potter Deadly Shadows", author: "JK Rowling", year: 1949}
//     ]
// }
// console.log(library);


// Task 6: Access and log the name of the library and the title of all the books in the library

// let library = {
//     name: "anm",
//     books:[
//          {title:"Harry Potter Deadly Shadows", author: "JK Rowling", year: 1949},
//          {title:"Harry Potter Deadly Shadows", author: "JK Rowling", year: 1949},
//          {title:"Harry Potter Deadly Shadows", author: "JK Rowling", year: 1949}
// ]
// }
// console.log(library)
// library.books.forEach(book => {
//     console.log(book.title)
// })


// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

// function Book(title, year){
//     this.title= title;
//     this.year = year;
// }
// Book.prototype.getinfo = function(){
//     const info = `${this.title}, ${this.year}`;
//     const lockedInfo = Object.freeze(info);
//     return lockedInfo;
// };
// let newbook = new Book("MS dhoni ", 2000)
// let new1book = new Book("MS dhoni The Hero ", 2020)
// console.log(newbook);

// Activity 5: Object Iteration
// Task 8:

// let newvalue = {
//     name: "MS dhoni",
//     year: 2020,
//     price: 300
// }
// for (const key in newvalue) {
//         console.log(key, newvalue[key] );
// }

// Task 9:
// let newvalue = {
//     name: "MS dhoni",
//     year: 2020,
//     price: 300
// }

// const value = Object.keys(newvalue)
// const value1 = Object.values(newvalue)

// console.log(value);
// console.log(value1);



