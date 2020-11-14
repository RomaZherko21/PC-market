class ProductsController {
    getProducts(req, res) {
      res.send("<h1>GET Products<h1/>");
    }
    getMAC(req, res) {
      res.send("<h1>GET getMAC<h1/>");
    }
  
  }
  
  module.exports = new ProductsController();
  