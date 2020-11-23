const express = require('express');
const productsRouter = express.Router();

const ProductsController = require("../controllers/products.controller");

productsRouter.get('/',ProductsController.getProducts)
productsRouter.get('/searchedProducts',ProductsController.getSearchedProducts)


module.exports = productsRouter;