import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
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

