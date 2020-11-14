import { connect } from "react-redux";
import Discounts from './Discounts'

import { addShoppingCartGood,showCurrentProduct } from '../../../../redux/reducers/shoppingCart-reducer'


const mapStateToProps = (state) => {
    return {
        discountGoods: state.mainPage.discountGoods,
        state: state,
    }
}

const DiscountsContainer = connect(mapStateToProps, {
    addShoppingCartGood,
    showCurrentProduct
})(Discounts);

export default DiscountsContainer;