import React from 'react'

import s from './FormsControl.module.css'


export const Input = ({ input, meta, ...props }) => {
  const hadErr = meta.error && meta.touched
  return (
    <div className={`${s.input} ${hadErr ? s.errorInput : ''}`}>
      <input {...input} {...props} /> 
      <span><i className="fas fa-exclamation"></i></span>
      {hadErr && <p>{meta.error}</p>}
    </div>
  )
}