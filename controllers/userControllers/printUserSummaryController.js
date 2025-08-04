const printUserSummaryController = (books, users) => {
  const printUserSummary = (username) => {
    const existingUser = users.find((user) => user.username === username);
    if (!existingUser) {
      console.log(`user with username ${username} not found`);
      return;
    }
    const today = new Date();
    console.log("borrowed books:");
    existingUser.borrowedBooks
      .map((book) => books.find((it) => it.bookId == book.bookId))
      .forEach((book) => console.log(book));

    console.log("overdue items:");
    existingUser.borrowedBooks
      .filter((book) => today > book.borrow.dueDate)
      .forEach((book) => console.log(book));

    console.log(`penalty points: ${existingUser.penalty}`);
  };

  return printUserSummary;
};

export default printUserSummaryController;
