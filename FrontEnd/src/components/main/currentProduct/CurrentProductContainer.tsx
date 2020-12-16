import CurrentProduct from './CurrentProduct'
import { connect } from 'react-redux'
import { actions } from '../../../redux/reducers/shoppingCart-reducer'
import { AppStateType } from "../../../redux/redux-store";
import { compose } from "redux";

const mapStateToProps = (state:AppStateType) => {
  return {
    currentProduct: state.shoppingCart.currentGood,
  }
}
export default compose<AppStateType>(
  connect(mapStateToProps, {
    addShoppingCartGood: actions.addShoppingCartGood 
  })
)(CurrentProduct);
