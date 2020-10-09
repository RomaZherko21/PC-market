import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'


ReactDOM.render(
  <div className="kek">
    
    <Header/>
    <Sidebar/>

  </div>,
  document.getElementById('root')
);

