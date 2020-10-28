import SearchGoods from './SearchGoods'
import { connect } from 'react-redux'

import {onSearchGoods} from '../../../redux/reducers/searchGoods-reducer'



const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

const SearchGoodsContainer = connect(mapStateToProps, {
  onSearchGoods,
})(SearchGoods);


export default SearchGoodsContainer;