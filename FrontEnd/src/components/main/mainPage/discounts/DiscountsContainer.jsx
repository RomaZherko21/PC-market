import { connect } from "react-redux";
import Discounts from './Discounts'

import { addShoppingCartGood,showCurrentProduct } from '../../../../redux/reducers/shoppingCart-reducer'
import { getNewGoodsThunkCreator } from '../../../../redux/reducers/allGoods-reducer'


const mapStateToProps = (state) => {
    return {
        discounts: state.allGoods.discounts
    }
}

const DiscountsContainer = connect(mapStateToProps, {
    addShoppingCartGood,
    showCurrentProduct,
    getNewGoodsThunkCreator
})(Discounts);

export default DiscountsContainer;