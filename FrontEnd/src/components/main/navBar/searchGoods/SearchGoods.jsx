import React from 'react'
import s from './SearchGoods.module.css'
import { Field, reduxForm } from 'redux-form'

import { required, maxLengthCreator } from '../../../../utils/validators/validators'
import { Input } from '../../../common/FormsControls/FormControls'
import { useHistory } from 'react-router-dom'

const maxLength30 = maxLengthCreator(30)

function SearchGoodsForm(props) {

  return (
    <form action="" className={s.search} onSubmit={props.handleSubmit}>
      <i className={`fas fa-times ${s.close}`} onClick={props.onShowSearch}></i>
      <Field component={Input} name={'name'} placeholder='Computer' validate={[required, maxLength30]} />
      <Field component={Input} name={'price'} placeholder='Max Price' validate={[required, maxLength30]} />
      <button>Search</button>
    </form>
  )
}

let SearchReduxForm = reduxForm({
  form: 'search',
})(SearchGoodsForm)


const SearchGoods = (props) => {

  let history = useHistory();

  let onSubmit = (formData) => {
    props.getSearchedProductsThunkCreator(formData);
    formData.name = '';
    formData.price = '';
    props.onShowSearch();
    history.push("/searchedProducts");
  }
  return (
    <section className={s.searchField}>
      <SearchReduxForm onSubmit={onSubmit} onShowSearch={props.onShowSearch} />
    </section>
  )
}



export default SearchGoods;