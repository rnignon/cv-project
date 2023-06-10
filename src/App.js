import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Overview from "./components/Overview";
// import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div>
          <Header></Header>
          <Form></Form>
          <Overview></Overview>
        </div>
    );
  }
}

export default App;