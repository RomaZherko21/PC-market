import NavBar from './NavBar'

import { connect } from 'react-redux'
import {actions} from '../../../redux/reducers/logIn-reducer'
import { AppStateType } from "../../../redux/redux-store";
import { compose } from "redux";

import { getNewGoodsThunkCreator } from '../../../redux/reducers/allGoods-reducer'

const mapStateToProps = (state: AppStateType) => {
  return {
    shoppingCartLength: state.shoppingCart.shoppingCartGoods.length,
    currentUser: state.logIn.currentUser,
  }
}

export default compose<AppStateType>(
  connect(mapStateToProps, {
    onLogOut: actions.onLogOut,
    getNewGoodsThunkCreator,
  })
)(NavBar);



