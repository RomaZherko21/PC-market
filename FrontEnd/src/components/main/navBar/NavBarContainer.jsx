import NavBar from './NavBar'

import { connect } from 'react-redux'
import {onLogOut} from '../../../redux/reducers/logIn-reducer'

import { getNewGoodsThunkCreator } from '../../../redux/reducers/allGoods-reducer'

const mapStateToProps = (state) => {
  return {
    shoppingCartLength: state.shoppingCart.shoppingCartGoods.length,
    currentUser: state.logIn.currentUser,
  }
}

export default connect(mapStateToProps, {
  onLogOut,
  getNewGoodsThunkCreator,
})(NavBar)


