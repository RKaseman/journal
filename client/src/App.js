import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from "./pages/Home";
import Books from "./pages/Books";
import Archives from "./pages/Archives";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
      <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/archives" component={Archives} />
        <Route component={NoMatch} />
      </Switch>
      
      </div>
  </Router>
);

export default App;




// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Security, ImplicitCallback } from '@okta/okta-react';
// import Home from './Home';

// const config = {
  // issuer: 'https://dev-264265.oktapreview.com/oauth2/default',
  // redirect_uri: window.location.origin + '/implicit/callback',
  // client_id: '{clientId}'
// }

// class App extends Component {
  // render() {
    // return (
      // <Router>
        // <Security issuer={config.issuer}
                  // client_id={config.client_id}
                  // redirect_uri={config.redirect_uri}
        // >
          // <Route path='/' exact={true} component={Home}/>
          // <Route path='/implicit/callback' component={ImplicitCallback}/>
        // </Security>
      // </Router>
    // );
  // }
// }

// export default App;