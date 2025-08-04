const users = [
  {
    username: "Alice",
    penalty: 5,
    borrowedBooks: [
      {
        bookId: 1,
        bookName: "1984",
        genre: "Dystopian",
        borrow: {
          borrowDate: new Date("2025-06-01T10:00:00"),
          dueDate: new Date("2025-06-15T10:00:00"),
        },
      },
      {
        bookId: 2,
        bookName: "To Kill a Mockingbird",
        genre: "Fiction",
        borrow: {
          borrowDate: new Date("2025-07-01T14:00:00"),
          dueDate: new Date("2025-07-15T14:00:00"),
        },
      },
    ],
  },
  {
    username: "Bob",
    penalty: 0,
    borrowedBooks: [
      {
        bookId: 3,
        bookName: "The Great Gatsby",
        genre: "Classic",
        borrow: {
          borrowDate: new Date("2025-05-10T09:00:00"),
          dueDate: new Date("2025-05-24T09:00:00"),
        },
      },
    ],
  },
  {
    username: "Charlie",
    penalty: 10,
    borrowedBooks: [
      {
        bookId: 4,
        bookName: "Pride and Prejudice",
        genre: "Romance",
        borrow: {
          borrowDate: new Date("2025-04-15T12:00:00"),
          dueDate: new Date("2025-04-29T12:00:00"),
        },
      },
      {
        bookId: 5,
        bookName: "The Catcher in the Rye",
        genre: "Fiction",
        borrow: {
          borrowDate: new Date("2025-06-10T16:00:00"),
          dueDate: new Date("2025-06-24T16:00:00"),
        },
      },
    ],
  },
  {
    username: "Diana",
    penalty: 2,
    borrowedBooks: [
      {
        bookId: 6,
        bookName: "Brave New World",
        genre: "Dystopian",
        borrow: {
          borrowDate: new Date("2025-06-05T08:00:00"),
          dueDate: new Date("2025-06-19T08:00:00"),
        },
      },
    ],
  },
];

export default users;
