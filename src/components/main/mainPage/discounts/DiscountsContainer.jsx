import { connect } from "react-redux";
import Discounts from './Discounts'


const mapStateToProps = (state)=>{
    return{
        discountGoods: state.mainPage.discountGoods,
    }
} 
const mapDispatchToProps = (dispatch)=>{
    return{
    }
} 


const DiscountsContainer = connect(mapStateToProps, mapDispatchToProps)(Discounts);

export default DiscountsContainer;