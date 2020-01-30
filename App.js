import React from 'react';
// import Login from './page/Login/Login';
import ForGot from './page/ForGot/ForGot'
import { Router, Scene } from 'react-native-router-flux'

const App = () => (
    <Router>
       <Scene key="root">
          <Scene key = "ForGot" component = {ForGot} title = "ForGot" initial = {true} />
          {/* <Scene key = "Login" component = {Login} title = "Login" /> */}
       </Scene>
    </Router>
 )
 export default App

