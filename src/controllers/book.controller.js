const BookService = require("../services/book.service");

exports.createBook = async (req, res) => {
  const book = await BookService.createBook(req.body);
  res.status(201).json(book);
};
