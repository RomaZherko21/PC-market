const Product = require("../models/Product");

const ProductService = {
  async getProducts(type) {
    let res;
    await Product.module.find({ type:type }, (err, items) => {
        res = items[0].arr;
    });
    return res;
  },
};

module.exports = ProductService;