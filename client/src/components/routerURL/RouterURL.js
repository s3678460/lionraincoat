import React, { Component } from 'react';
import {Route , Switch} from 'react-router-dom'
import LandingPage from '../landingPage/LandingPage';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>

                <Route component={LandingPage} />                    
                </Switch>
                
            </div>
        );
    }
}

export default RouterURL;