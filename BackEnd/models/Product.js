const { Schema, model, Types } = require("mongoose");

const productSchema = new Schema(
  {
    type: String,
    arr: { type: Object, unique: true },
  },
  { versionKey: false }
);
const Product = model("Product", productSchema);
exports.module = Product;
