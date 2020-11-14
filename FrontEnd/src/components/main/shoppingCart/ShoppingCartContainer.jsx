import { connect } from "react-redux";
import ShoppingCart from './ShoppingCart'

import {removeShoppingCartGood, plusCurrentGoodAmount, minusCurrentGoodAmount} from '../../../redux/reducers/shoppingCart-reducer'


const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart,
        currentUser: state.logIn.currentUser,
    }
}

const DiscountsContainer = connect(mapStateToProps, {
    removeShoppingCartGood,
    plusCurrentGoodAmount,
    minusCurrentGoodAmount,
})(ShoppingCart);

export default DiscountsContainer;