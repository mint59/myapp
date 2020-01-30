import React, { Component } from 'react';
import Login from './page/Login/Login';
import ForGot from './page/ForGot/ForGot'
import { NativeRouter, Route, Switch } from "react-router-native";
// import { createStackNavigator } from '@react-navigation/stack';

export default class App extends Component {

   render() {
      return (
         // <AppStackNavigator />
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={ForGot} />
          <Route exact path="/Login" component={Login} />
        </Switch>
    </NativeRouter>
     );
   }

}
// const AppStackNavigator = createStackNavigator({
//    forgot: ForGot,
//    login: Login
// });