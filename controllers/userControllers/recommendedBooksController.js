const recommendedBooksController = (books, users) => {
  const recommendedBooks = (username) => {
    const existingUser = users.find((user) => user.username === username);
    if (!existingUser) {
      console.log(`user with username:${username} not found`);
      return;
    }
    const bookGenres = existingUser.borrowedBooks.map((book) => book.genre);
    const bookIds = existingUser.borrowedBooks.map((book) => book.bookId);
    const borrowedGenres = new Set(bookGenres);
    const borrowedIds = new Set(bookIds);

    const recommendedBooks = books.filter((book) => {
      return borrowedGenres.has(book.genre) && !borrowedIds.has(book.bookId);
    });

    return recommendedBooks.sort((book1, book2) => book2.rating - book1.rating);
  };

  return recommendedBooks;
};

export default recommendedBooksController;
