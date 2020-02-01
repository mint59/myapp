import React, { Component } from 'react';
import Login from './page/Login/Login';
import ForGot from './page/ForGot/ForGot'
import Home from './page/Home'
import List from './page/List'
import ListAction from './page/Listaction'
import { NativeRouter, Route, Switch } from "react-router-native";

export default class App extends Component {

   render() {
      return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={ListAction} />
          <Route exact path="/f" component={ForGot} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Home" component={List} />
          <Route exact path="/Home" component={ListAction} />
        </Switch>
    </NativeRouter>
     );
   }

}
