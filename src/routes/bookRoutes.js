const router = require("express").Router();
const controller = require("../controllers/bookController");
const { validateCreateBook } = require("../middleware/validator");

router.post("/books", validateCreateBook, controller.createBook);
router.get("/books", controller.getBooks);

module.exports = router;
