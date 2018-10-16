
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Archives from "./pages/Archives";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
    state = {
        loggedIn: false
    };

    toggleLoginUser = () => {
        window.localStorage.setItem("loggedIn", true);
        // window.localStorage.setItem("loggedIn", true);
    };

    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path="/" render={() => 
                            <Home toggleLogin={this.toggleLoginUser} />} />
                        <PrivateRoute exact path="/main" loggedIn={this.state.loggedIn} component={Books} />
                        <PrivateRoute exact path="/books" component={Books} />
                        <PrivateRoute exact path="/books/:id" component={Detail} />
                        <PrivateRoute exact path="/archives" component={Archives} />
                        <PrivateRoute component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        );
    };
};

export default App;
