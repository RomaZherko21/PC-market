import NavBar from './NavBar'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    shoppingCartLength: state.shoppingCart.shoppingCartGoods.length,
  }
}



const NavBarContainer = connect(mapStateToProps, {})(NavBar)
export default NavBarContainer;