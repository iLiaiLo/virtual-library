const getMostPopularBooksController = (books) => {
  function getMostPopularBooks(limit) {
    if (!Number.isInteger(limit) || limit <= 0) {
      console.log("Limit must be positive integer");
      return;
    }
    return [...books]
      .sort((book1, book2) => book2.borrowedCount - book1.borrowedCount)
      .slice(0, limit);
  }
  return getMostPopularBooks;
};

export default getMostPopularBooksController;
