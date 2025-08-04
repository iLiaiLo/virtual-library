const borrowBookController = (books, users) => {
  const borrowBook = (username, bookId) => {
    const existingBook = books.find((item) => item.bookId === bookId);
    if (!existingBook) {
      console.log(`Book with id ${bookId} does not exist`);
      return;
    }
    const existingUser = users.find((user) => user.username === username);

    if (!existingUser) {
      console.log(`User with username ${username} does not exist`);
      return;
    }

    if (!existingBook.available) {
      console.log(
        "Unable to borrow because someone has already borrowed this book."
      );
      return;
    }

    existingBook.available = false;
    existingBook.borrowedCount += 1;

    const borrowDate = new Date();
    const dueDate = new Date(borrowDate.getTime() + 14 * 24 * 3600 * 1000);
    const borrow = {
      borrowDate,
      dueDate,
    };

    existingUser.borrowedBooks.push({
      bookId,
      bookName: existingBook.bookName,
      genre: existingBook.genre,
      borrow,
    });

    console.log(
      `${
        existingBook.bookName
      } successfully borrowed by ${username}. Due on ${dueDate.toDateString()}`
    );
  };

  return borrowBook;
};

export default borrowBookController;
