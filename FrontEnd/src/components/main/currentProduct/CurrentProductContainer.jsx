import Comments from './CurrentProduct'
import { connect } from 'react-redux'
import { actions } from '../../../redux/reducers/shoppingCart-reducer'

const mapStateToProps = (state) => {
  return {
    currentProduct: state.shoppingCart.currentGood,
  }
}

export default connect(mapStateToProps, { addShoppingCartGood: actions.addShoppingCartGood })(Comments);