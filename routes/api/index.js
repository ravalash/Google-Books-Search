const router = require("express").Router();
const bookRoutes = require("./book");


// Item routes
router.use("/books", bookRoutes);



module.exports = router;
