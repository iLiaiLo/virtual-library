const getTopRatedBooksController = (books) => {
  const getTopRatedBooks = (limit) => {
    if (!Number.isInteger(limit) || limit <= 0) {
      console.log("Limit must be positive integer");
      return;
    }

    return [...books]
      .sort((book1, book2) => book2.rating - book1.rating)
      .slice(0, limit);
  };

  return getTopRatedBooks;
};

export default getTopRatedBooksController;
