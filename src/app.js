const express = require("express");
const app = express();


app.use(express.json());
app.use("/books", require("./routes/book.routes"));



app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
