import Comments from './CurrentProduct'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
   currentProduct: state.shoppingCart.currentGood,
  }
}

export default connect(mapStateToProps, {

})(Comments);