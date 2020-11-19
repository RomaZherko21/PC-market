const ProductService = require("../services/products.service");

class ProductsController {
  async getProducts(req, res) {
    let goods = await ProductService.getProducts(req.query.type);
    res.json(goods);
  }
}

module.exports = new ProductsController();
