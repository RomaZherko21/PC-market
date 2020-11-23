import React from 'react'
import { Switch, Route } from "react-router-dom";

import PC from './pc/PC'
import Laptop from './laptop/Laptop'
import Printer from './printer/Printer'
import Monitor from './monitor/Monitor'
import Periphery from './periphery/Periphery'
import Modules from './modules/Modules'
import Accessories from './accessories/Accessories'
import SearchedProducts from './searchedProducts/SearchedProducts'



const SwitchComponents = (props) => {
  return (
    <Switch>
      <Route path="/pc">
        <PC computers={props.allGoods.pc} addShoppingCartGood={props.addShoppingCartGood} showCurrentProduct={props.showCurrentProduct} />
      </Route>
      <Route path="/laptop">
        <Laptop laptops={props.allGoods.laptop} addShoppingCartGood={props.addShoppingCartGood} showCurrentProduct={props.showCurrentProduct} />
      </Route>
      <Route path="/printer">
        <Printer printers={props.allGoods.printer} addShoppingCartGood={props.addShoppingCartGood} showCurrentProduct={props.showCurrentProduct} />
      </Route>
      <Route path="/monitor">
        <Monitor monitors={props.allGoods.monitor} addShoppingCartGood={props.addShoppingCartGood} showCurrentProduct={props.showCurrentProduct} />
      </Route>
      <Route path="/periphery">
        <Periphery periphery={props.allGoods.periphery} addShoppingCartGood={props.addShoppingCartGood} showCurrentProduct={props.showCurrentProduct} />
      </Route>
      <Route path="/modules">
        <Modules modules={props.allGoods.modules} addShoppingCartGood={props.addShoppingCartGood} showCurrentProduct={props.showCurrentProduct} />
      </Route>
      <Route path="/accessories">
        <Accessories accessories={props.allGoods.accessories} addShoppingCartGood={props.addShoppingCartGood} showCurrentProduct={props.showCurrentProduct} />
      </Route>
      <Route path="/searchedProducts">
        <SearchedProducts searchedProducts={props.searchedProducts} addShoppingCartGood={props.addShoppingCartGood} showCurrentProduct={props.showCurrentProduct} />
      </Route>
    </Switch>
  )
}

export default SwitchComponents;