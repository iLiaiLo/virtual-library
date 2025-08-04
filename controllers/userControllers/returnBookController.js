const returnBookController = (books, users) => {
  const returnBook = (username, bookId) => {
    const existingBook = books.find((item) => item.bookId === bookId);
    if (!existingBook) {
      console.log(`book with id ${bookId} does not exist`);
      return;
    }
    const existingUser = users.find((user) => user.username === username);

    if (!existingUser) {
      console.log(`user with username ${username} does not exist`);
      return;
    }

    const foundBook = existingUser.borrowedBooks.find(
      (book) => book.bookId === bookId
    );

    if (!foundBook) {
      console.log(
        `user with username: ${username} does not have book with id ${bookId}`
      );
      return;
    }

    const currDate = new Date();

    existingUser.borrowedBooks = existingUser.borrowedBooks.filter(
      (book) => book.bookId !== bookId
    );

    existingBook.available = true;
    if (currDate > foundBook.dueDate) {
      existingUser.penalty += 1;
      console.log(
        `Book ${foundBook.bookName} was returned late. Penalty applied to ${username}.`
      );
    } else {
      console.log("Thank you");
    }
  };

  return returnBook;
};

export default returnBookController;
