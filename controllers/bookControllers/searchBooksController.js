const searchBooksController = (books) => {
  const searchBooksBy = (param, value) => {
    return books.filter((book) => {
      switch (param) {
        case "author":
        case "genre":
          return book[param] === value;
        case "rating":
          return book[param] >= value;
        case "beforeYear":
          return book["year"] < value;
        case "afterYear":
          return book["year"] > value;
        default:
          return false;
      }
    });
  };

  return searchBooksBy;
};

export default searchBooksController;
