import SearchGoods from './SearchGoods'
import { connect } from 'react-redux'

import {onSearchGoods, getSearchedProducts} from '../../../../redux/reducers/searchGoods-reducer';



const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

const SearchGoodsContainer = connect(mapStateToProps, {
  onSearchGoods,
  getSearchedProducts,
})(SearchGoods);


export default SearchGoodsContainer;