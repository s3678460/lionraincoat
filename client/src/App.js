import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouterURL from './components/routerURL/RouterURL'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/layout/NavigationBar';
import FooterPage from './components/layout/FooterPage';
import BodyPage from './components/layout/BodyPage';

class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
        {/* <NavigationBar/> */}
        <RouterURL/>
        {/* <BodyPage/>
        <FooterPage/> */}
      </div>
      </Router>
    );
  }
}

export default App;
