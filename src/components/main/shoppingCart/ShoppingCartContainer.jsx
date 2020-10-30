import { connect } from "react-redux";
import ShoppingCart from './ShoppingCart'



const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart,
        currentUser: state.logIn.currentUser,
    }
}

const DiscountsContainer = connect(mapStateToProps, {
})(ShoppingCart);

export default DiscountsContainer;