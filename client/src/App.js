import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import FooterPage from './components/layout/FooterPage';
import BodyPage from './components/layout/BodyPage';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <BodyPage/>
        <FooterPage/>
      </div>
    );
  }
}

export default App;
