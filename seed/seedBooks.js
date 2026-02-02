require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("../src/models/book.model");

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Book.deleteMany();
  await Book.insertMany([
    { name: "Clean Code", description: "Clean coding practices", author: "Robert C. Martin", publishDate: "2008-08-01" },
    { name: "Atomic Habits", description: "Habit building", author: "James Clear", publishDate: "2018-10-16" }
  ]);
  console.log("Seed complete");
  process.exit();
})();
