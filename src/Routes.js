import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './component/Home';

//import ProtectedRoute from './auth/protected-route';
class Routes extends Component {

    render() {
        return (
            <Router>
                <div>
                    <App />
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route path="/home" component={Home} />
                       
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;