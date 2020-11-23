const Product = require("../models/Product");

const ProductService = {
  async getProducts(type) {
    let res;
    await Product.module.find({ type:type }, (err, items) => {
        res = items[0].arr;
    });
    return res;
  },
  async getSearchedProducts(params) {
    let res = [];
    await Product.module.find({}, (err, allGoods) => {
        for(let item of allGoods){
          item.arr.map((good)=>{
            if(good.price<=params.price && good.name.split(' ').includes(params.name)) res.push(good);
          })
        }
    });
    return res;
  },
};

module.exports = ProductService;
