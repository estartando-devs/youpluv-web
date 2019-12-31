import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './Screens/Home/Home';

export default function Routers() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}