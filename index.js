import books from "./libraryData/books.js";
import users from "./libraryData/users.js";
import addBookController from "./controllers/bookControllers/addBook.js";
import borrowBookController from "./controllers/userControllers/borrowBook.js";
import returnBookController from "./controllers/userControllers/returnBookController.js";
import searchBooksController from "./controllers/bookControllers/searchBooksController.js";
import getTopRatedBooksController from "./controllers/bookControllers/getTopRatedBooksController.js";
import getMostPopularBooksController from "./controllers/bookControllers/getMostPopularBooksController.js";
import checkOverdueUsersController from "./controllers/userControllers/checkOverdueUsersController.js";
import recommendedBooksController from "./controllers/userControllers/recommendedBooksController.js";
import removeBookController from "./controllers/bookControllers/removeBookController.js";
import printUserSummaryController from "./controllers/userControllers/printUserSummaryController.js";

const addBook = addBookController(books);

const borrowBook = borrowBookController(books, users);

const returnBook = returnBookController(books, users);

const searchBooksBy = searchBooksController(books);

const getTopRatedBooks = getTopRatedBooksController(books);

const getMostPopularBooks = getMostPopularBooksController(books);
const checkOverdueUsers = checkOverdueUsersController(users);

const recommendedBooks = recommendedBooksController(books, users);

const removeBook = removeBookController(books);
const printUserSummary = printUserSummaryController(books, users);

// addBook({
//   bookName: "new book",
//   author: "me",
//   genre: "strange",
//   rating: 4.4,
//   year: 1900,
// });

// addBook({
//   bookName: "another book",
//   author: "other",
//   genre: "new genre",
//   rating: 3.5,
//   year: 1888,
// });

// console.log(books);

// console.log(getTopRatedBooks(4));

//console.log(books);
// borrowBook("Alice", 12);

// borrowBook("Bob", 7);

// console.log(books);

// returnBook("Alice", 12);
// returnBook("Bob", 7);

// console.log(books);

// console.log(searchBooksBy("rating", 4.5));
// console.log(searchBooksBy("afterYear", 1900));

// console.log(getTopRatedBooks(2));
// console.log(getMostPopularBooks(5));

// console.log("overdue: ", checkOverdueUsers());

// removeBook(12);
// removeBook(11);
// console.log(books);
// console.log(recommendedBooks("Charlie"));

// printUserSummary("Charlie");
