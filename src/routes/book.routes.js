const router = require("express").Router();
const BookController = require("../controllers/book.controller");

router.post("/", BookController.createBook);
router.get("/", BookController.exploreBooks);


module.exports = router;
