import generateId from "../../generator/idGenerator.js";

const addBookController = (books) => {
  const addBook = (book) => {
    const { bookName, author, genre, rating, year } = book;
    if (rating < 0) {
      console.log("Rating must be greater than or equal zero");
      return;
    }
    if (year <= 0) {
      console.log("Release year must be greater than zero");
      return;
    }
    const generatedId = generateId();
    const newBook = {
      bookId: generatedId,
      bookName,
      author,
      genre,
      rating,
      year,
      borrowedCount: 0,
      available: true,
    };
    books.push(newBook);
    console.log(`book with name ${bookName} added to the library`);
  };

  return addBook;
};

export default addBookController;
