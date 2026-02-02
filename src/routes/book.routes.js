const router = require("express").Router();
const BookController = require("../controllers/book.controller");

router.post("/", BookController.createBook);

module.exports = router;
