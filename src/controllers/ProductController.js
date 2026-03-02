//API Creation (Get API) for Products

//DB Model
const productSchema = require("../models/ProductModel");

//api
const getAllProducts = async (req, res) => {
  const allProducts = await productSchema.find();
  res.json({
    message: "All Products!!",
    data: allProducts,
  });
};

module.exports = {
    getAllProducts
}