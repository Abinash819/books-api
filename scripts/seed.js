require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("../src/models/Book");

(async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);

    console.log("🧹 Clearing existing books...");
    await Book.deleteMany();

    console.log("📥 Inserting books...");
    const result = await Book.insertMany([
      { name: "Clean Code", description: "Agile craftsmanship", author: "Robert C. Martin", publishDate: "2008-08-01" },
      { name: "Atomic Habits", description: "Habit building", author: "James Clear", publishDate: "2018-10-16" },
      { name: "Deep Work", description: "Focused success", author: "Cal Newport", publishDate: "2016-01-05" },
      { name: "Refactoring", description: "Improving code", author: "Martin Fowler", publishDate: "1999-07-08" },
      { name: "Design Patterns", description: "Reusable patterns", author: "Erich Gamma", publishDate: "1994-10-21" },
      { name: "The Pragmatic Programmer", description: "Programming mastery", author: "Andrew Hunt", publishDate: "1999-10-20" },
      { name: "Eloquent JavaScript", description: "JS guide", author: "Marijn Haverbeke", publishDate: "2018-12-04" },
      { name: "You Don't Know JS", description: "JS deep dive", author: "Kyle Simpson", publishDate: "2015-12-27" },
      { name: "Grokking Algorithms", description: "Algorithms simplified", author: "Aditya Bhargava", publishDate: "2016-05-01" },
      { name: "The Clean Coder", description: "Professionalism", author: "Robert C. Martin", publishDate: "2011-05-13" },
      { name: "The Mythical Man-Month", description: "Software essays", author: "Fred Brooks", publishDate: "1975-01-01" },
      { name: "Cracking the Coding Interview", description: "Interview prep", author: "Gayle McDowell", publishDate: "2015-07-01" },
      { name: "Thinking in Systems", description: "Systems thinking", author: "Donella Meadows", publishDate: "2008-12-03" },
      { name: "The Phoenix Project", description: "DevOps novel", author: "Gene Kim", publishDate: "2013-01-10" },
      { name: "Introduction to Algorithms", description: "Algorithm bible", author: "Thomas H. Cormen", publishDate: "2009-07-31" }
    ]);

    console.log(`✅ Inserted ${result.length} books`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
})();
