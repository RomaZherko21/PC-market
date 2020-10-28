import React from 'react'
import s from './SearchGoods.module.css'
import { Field, reduxForm } from 'redux-form'

import {required, maxLengthCreator} from '../../../utils/validators/validators'
import {Input} from '../../../components/common/FormsControls/FormControls'

const maxLength30 = maxLengthCreator(30)

function SearchGoodsForm(props) {
 
  return (
    <form action="" className={s.search} onSubmit={props.handleSubmit}>
      <Field component={Input} name={'name'} placeholder='Computer' validate={[required,maxLength30]}/>
      <Field component={'input'} name={'price'} placeholder='Price' />
      <button>Search</button>
    </form>
  )
}

let SearchReduxForm = reduxForm({
  form: 'search',
})(SearchGoodsForm)


const SearchGoods = (props) => {

  let onSubmit = (formData) => {
    console.log(formData)
    props.onSearchGoods(formData);
    formData.name = '';
    formData.price = '';
  }
  return (
    <SearchReduxForm onSubmit={onSubmit}/>
  )
}



export default SearchGoods;