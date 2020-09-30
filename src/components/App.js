import React from "react";
import Header from "./Header";
import DiveLogControl from "./DiveLogControl";
import Container from "react-bootstrap/Container";
import './App.css';
import Signin from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App(){
  return (
    <React.Fragment>
      <Router>
          <Header />
        <Container style={{ marginTop: '150px'}}>
          <Switch>
          <Route path="/SignIn">
            <Signin />
          </Route>
            <Route path="/">
              <DiveLogControl />
            </Route>
          </Switch>
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default App;