import React from 'react'
import { Switch, Route } from "react-router-dom";
import allGoods from '../../../data/allGoods'

// import s from './Products.module.css';
import PC from './pc/PC'
import Laptop from './laptop/Laptop'
import Printer from './printer/Printer'
import Monitor from './monitor/Monitor'
import Periphery from './periphery/Periphery'
import Modules from './modules/Modules'
import Accessories from './accessories/Accessories'

const SwitchComponents = () => {

  return (
    <Switch>
      <Route path="/pc">
        <PC computers={allGoods.computers} />
      </Route>
      <Route path="/laptop">
        <Laptop laptops={allGoods.laptops} />
      </Route>
      <Route path="/printer">
        <Printer printers={allGoods.printers} />
      </Route>
      <Route path="/monitor">
        <Monitor monitors={allGoods.monitors} />
      </Route>
      <Route path="/periphery">
        <Periphery periphery={allGoods.periphery} />
      </Route>
      <Route path="/modules">
        <Modules modules={allGoods.modules} />
      </Route>
      <Route path="/accessories">
        <Accessories accessories={allGoods.accessories} />
      </Route>
    </Switch>
  )
}

export default SwitchComponents;