import React, { Component } from "react";
import "./App.scss";
import { Panel, Button, Img, Container, Toolbar } from "@sencha/ext-react";
import { Component as ExtComponent } from "@sencha/ext-react";
import logo from "../../public/images/YelpExtplorerLogo.png";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(logo);
  }
  render() {
    return (
      <Container layout="hbox">
        <Toolbar docked="top">
          <Img docked="top" src={logo} height={47} />
        </Toolbar>
        <Panel title="Tab panel goes here" flex={1} border={true} />
        <Panel title="Detail component goes here" width={130} border={true} />
      </Container>
    );
  }
}
export default App;
