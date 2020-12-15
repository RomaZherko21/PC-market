import { connect } from "react-redux";
import ShoppingCart from './ShoppingCart'
import { actions } from '../../../redux/reducers/shoppingCart-reducer'

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart,
        currentUser: state.logIn.currentUser,
    }
}

const DiscountsContainer = connect(mapStateToProps, {
    removeShoppingCartGood: actions.removeShoppingCartGood,
    plusCurrentGoodAmount: actions.plusCurrentGoodAmount,
    minusCurrentGoodAmount: actions.minusCurrentGoodAmount,
})(ShoppingCart);

export default DiscountsContainer;