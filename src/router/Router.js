import React, { Component } from "react";
import { BrowserRouter as Switch, Redirect, Route} from "react-router-dom";
import Contact from "../component/Contact";
import Home from "../component/Home";
import Menu from "../component/Menu";
import MenuDetail from "./component/MenuDetail";

class RouterURL extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Redirect to="/home" /> 
            )
          }}
        />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/menu/:title/:id" >
          <MenuDetail />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    );
  }
}

export default RouterURL;