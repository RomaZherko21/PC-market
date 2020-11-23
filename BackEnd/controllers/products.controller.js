const ProductService = require("../services/products.service");

class ProductsController {
  async getProducts(req, res) {
    let goods = await ProductService.getProducts(req.query.type);
    res.json(goods);
  }
  async getSearchedProducts(req, res) {
    let goods = await ProductService.getSearchedProducts(JSON.parse(req.query.params));
    res.json(goods);
  }
}

module.exports = new ProductsController();
