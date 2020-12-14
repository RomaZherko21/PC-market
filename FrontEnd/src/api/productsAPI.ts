import axios from "axios";
import {product} from '../types/productTypes'
const URL = "http://127.0.0.1:5000/products";

type getSearchedProductsType = Array<product>;
type getProductsType = Array<product>;

const productsAPI = {
  async getProducts(type:string) {
    let response = await axios.get<getProductsType>(`${URL}/?type=${type}`);
    return response.data;
  },
  async getSearchedProducts(filteredParams:{name:string,price:string}) {
    let response = await axios.get<getSearchedProductsType>(`${URL}/searchedProducts/?params=${JSON.stringify(filteredParams)}`);
    console.log(response.data)
    return response.data;
  },
};

export default productsAPI;
