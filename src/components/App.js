import React from "react";
import Header from "./Header";
import DiveLogControl from "./DiveLogControl";
import Container from "react-bootstrap/Container";
import './App.css';

function App(){
  return (
    <React.Fragment>
        <Header />
      <Container style={{ marginTop: '150px'}}>
        <DiveLogControl />
      </Container>
    </React.Fragment>
  );
}

export default App;