import SearchGoods from './SearchGoods'
import { connect } from 'react-redux'

import { getSearchedProductsThunkCreator } from '../../../../redux/reducers/searchGoods-reducer';



const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

const SearchGoodsContainer = connect(mapStateToProps, {
  getSearchedProductsThunkCreator
})(SearchGoods);


export default SearchGoodsContainer;