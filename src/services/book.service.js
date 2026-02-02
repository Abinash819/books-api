const Book = require("../models/book.model");

exports.createBook = async (data) => {
  return Book.create(data);
};
