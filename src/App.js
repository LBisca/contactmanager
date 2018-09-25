import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddContact from "./components/contacts/AddContact1";
import EditContact from "./components/contacts/EditContact";
import Test from "./components/test/Test";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
