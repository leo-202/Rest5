import React from "react";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Menu from "./component/Menu";
import MenuDetail from "./component/MenuDetail";
// import RouterURL from "./router/Router";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Redirect to="/home" /> 
            )}
          />
          <Route path="/home">
            <Home />
          </Route>
          <Route
            path="/menu"
            render={({ match: { url } }) => (
              <>
                <Route exact path={`${url}`}>
                  <Menu/>
                </Route>
                <Route path={`${url}/:title/:id`}>
                  <MenuDetail/>
                </Route>
              </>
            )}
          />
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
