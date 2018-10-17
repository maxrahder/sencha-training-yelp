import React, { Component } from "react";
import "./App.scss";
import { Panel } from "@sencha/ext-react";

class App extends Component {
  render() {
    return (
      <Panel
        title="Main View"
        padding={8}
        html="<h1>This is the main view.</h1>"
      />
    );
  }
}

export default App;
