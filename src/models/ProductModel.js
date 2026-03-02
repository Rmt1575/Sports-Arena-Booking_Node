const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productname: {
    type: String,
  },
  productprice: {
    type: Number,
  },
});

module.exports = mongoose.model("products", productSchema);
