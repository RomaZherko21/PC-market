import Comments from './CurrentProduct'
import { connect } from 'react-redux'
import { addShoppingCartGood } from '../../../redux/reducers/shoppingCart-reducer'

const mapStateToProps = (state) => {
  return {
   currentProduct: state.shoppingCart.currentGood,
  }
}

export default connect(mapStateToProps, {addShoppingCartGood})(Comments);