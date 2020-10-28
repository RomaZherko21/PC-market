import React from 'react'

import s from './FormsControl.module.css'


export const Input = ({input,meta, ...props})=>{
  const hadErr = meta.error && meta.touched
return (
  <div className={hadErr ? s.errorInput: ''}>
    <input {...input} {...props}/>
{hadErr && <p>{meta.error}</p>}
  </div>
)
}