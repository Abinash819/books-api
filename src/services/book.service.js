const Book = require("../models/book.model");

exports.createBook = async (data) => {
  return Book.create(data);
};

exports.exploreBooks = async (query) => {
  const {
    search,
    author,
    from,
    to,
    sortBy = "name",
    order = "asc",
    page = 1,
    limit = 10
  } = query;

  const filter = {};

  if (search) filter.$text = { $search: search };
  if (author) filter.author = new RegExp(`^${author}$`, "i");

  if (from || to) {
    filter.publishDate = {};
    if (from) filter.publishDate.$gte = new Date(from);
    if (to) filter.publishDate.$lte = new Date(to);
  }

  const skip = (page - 1) * Math.min(limit, 50);

  const results = await Book.find(filter)
    .sort({ [sortBy]: order === "desc" ? -1 : 1 })
    .skip(skip)
    .limit(Math.min(limit, 50));

  const total = await Book.countDocuments(filter);

  return { page: Number(page), total, results };
};
