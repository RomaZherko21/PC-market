import React from 'react'

import loading from '../../images/loading.svg';
import s from './Loading.module.css'


function Loading(){
  return (
    <section className={s.loadingSection}>
      <img src={loading} alt=""/>
    </section>
  );
}

export default Loading;