const removeBookController = (books) => {
  const removeBook = (bookId) => {
    const bookIndex = books.findIndex((book) => book.bookId === bookId);
    if (bookIndex === -1) {
      console.log(`book with id ${bookId} not found`);
      return;
    }
    const book = books[bookIndex];
    if (book.available) {
      books.splice(bookIndex, 1);
    } else {
      console.log("You can't remove book because it's currently borrowed");
    }
  };
  return removeBook;
};

export default removeBookController;
