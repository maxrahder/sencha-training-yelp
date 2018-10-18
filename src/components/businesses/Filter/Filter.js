import React, { Component } from "react";
import {
  Container,
  Button,
  SearchField,
  TextField,
  Spacer,
  Toolbar,
  Panel
} from "@sencha/ext-modern";

class Filter extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Toolbar {...this.props}>
        <TextField labelAlign="placeholder" label="City" name="foo" />
        <Spacer width={8} />
        <TextField labelAlign="placeholder" label="Category" name="foo" />
      </Toolbar>
    );
  }
}
export default Filter;
