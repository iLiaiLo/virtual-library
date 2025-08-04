const checkOverdueUsersController = (users) => {
  const checkOverdueUsers = () => {
    const today = new Date();
    return users.reduce((acc, user) => {
      const overdueBooks = user.borrowedBooks.filter((book) => {
        return today - book.borrow.dueDate > 0;
      });
      const overdueDays = overdueBooks.map((book) => {
        const dueDate = book.borrow.dueDate;
        const timeDiff = today - dueDate;
        const daysOverdue = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return { bookId: book.bookId, bookName: book.bookName, daysOverdue };
      });
      if (overdueDays.length > 0) {
        acc.push({
          name: user.username,
          overdueDays: overdueDays,
        });
      }

      return acc;
    }, []);
  };

  return checkOverdueUsers;
};

export default checkOverdueUsersController;
