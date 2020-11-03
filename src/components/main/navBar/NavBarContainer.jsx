import NavBar from './NavBar'

import { connect } from 'react-redux'
import {onLogOut} from '../../../redux/reducers/logIn-reducer'

const mapStateToProps = (state) => {
  return {
    shoppingCartLength: state.shoppingCart.shoppingCartGoods.length,
    currentUser: state.logIn.currentUser,
  }
}



const NavBarContainer = connect(mapStateToProps, {onLogOut})(NavBar)
export default NavBarContainer;