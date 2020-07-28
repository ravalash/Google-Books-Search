const router = require("express").Router();
const bookController = require("../../controllers/bookController");

//matches api/item/byid/:id
router.route("/:id")
.delete(bookController.remove);

//matches api/item/
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create)



module.exports = router;


