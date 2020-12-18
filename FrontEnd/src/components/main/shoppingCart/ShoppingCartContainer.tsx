import { connect } from "react-redux";
import ShoppingCart from './ShoppingCart'
import { actions } from '../../../redux/reducers/shoppingCart-reducer'
import { AppStateType } from "../../../redux/redux-store";
import { compose } from "redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        shoppingCart: state.shoppingCart,
        currentUser: state.logIn.currentUser,
    }
}

export default compose<AppStateType>(
    connect(mapStateToProps, {
        removeShoppingCartGood: actions.removeShoppingCartGood,
        plusCurrentGoodAmount: actions.plusCurrentGoodAmount,
        minusCurrentGoodAmount: actions.minusCurrentGoodAmount,
    })
)(ShoppingCart);