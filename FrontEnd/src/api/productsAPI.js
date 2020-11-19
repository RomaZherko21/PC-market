import * as axios from "axios";
const URL = "http://127.0.0.1:5000/products";

const productsAPI = {
  async getProducts(type) {
    let response = await axios.get(`${URL}/?type=${type}`);
    return response.data;
  },
};

export default productsAPI;
