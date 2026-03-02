//create an object of express router
const router = require("express").Router();

//require the product controller
const productController = require("../controllers/ProductController");

router.get("/products", productController.getAllProducts);

module.exports = router;
