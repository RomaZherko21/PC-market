import { connect } from "react-redux";
import Discounts from "./Discounts";

import {
  actions
} from "../../../../redux/reducers/shoppingCart-reducer";
import { getNewGoodsThunkCreator } from "../../../../redux/reducers/allGoods-reducer";
import { AppStateType } from "../../../../redux/redux-store";
import { compose } from "redux";

type mapStatePropsType = {
  discounts: any;
};

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    discounts: state.allGoods.discounts,
  };
};

export default compose<AppStateType>(
  connect(mapStateToProps, {
    addShoppingCartGood: actions.addShoppingCartGood,
    showCurrentProduct: actions.showCurrentProduct,
    getNewGoodsThunkCreator,
  })
)(Discounts);
