import React, { Component } from "react";
import "./App.scss";
import { Img, Container, Toolbar, Panel } from "@sencha/ext-modern";
import { Component as ExtComponent } from "@sencha/ext-react";
import logo from "../../public/images/YelpExtplorerLogo.png";
import Filter from "./businesses/Filter/Filter";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(logo);
  }
  render() {
    return (
      <Panel layout="hbox">
        <Container docked="top" layout="hbox">
          <Img docked="top" src={logo} height={41} />
        </Container>
        <Filter docked="top" />
        <Panel title="Tab panel goes here" flex={1} border={true} />
        <Panel title="Detail component goes here" width={130} border={true} />
      </Panel>
    );
  }
}
export default App;
