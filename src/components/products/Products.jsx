import React from 'react'
import { Switch, Route } from "react-router-dom";

// import s from './Products.module.css';

const SwitchComponents = () => {

  return (
    <Switch>
      <Route path="/pc">
        <div>im here fuck off</div>
      </Route>
      <Route path="/laptop">
        <div>im here fuck off 2</div>
      </Route>
      <Route path="/printer">
        <div>im here fuck off 3</div>
      </Route>
      <Route path="/monitor">
        <div>im here fuck off 4</div>
      </Route>
      <Route path="/periphery">
        <div>im here fuck off 5</div>
      </Route>
      <Route path="/modules">
        <div>im here fuck off 10</div>
      </Route>
      <Route path="/accessories">
        <div>im here fuck off 111</div>
      </Route>
    </Switch>
  )
}

export default SwitchComponents;