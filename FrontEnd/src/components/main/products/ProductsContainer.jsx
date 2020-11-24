import { connect } from "react-redux";
import Products from './Products'
import { addShoppingCartGood, showCurrentProduct } from '../../../redux/reducers/shoppingCart-reducer'

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart,
        currentUser: state.logIn.currentUser,
        searchedProducts: state.searchGoods.searchedProducts,
        allGoods: state.allGoods,
    }
}

const ProductsContainer = connect(mapStateToProps, {
    addShoppingCartGood,
    showCurrentProduct
})(Products);

export default ProductsContainer;