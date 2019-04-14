import moment from "moment";
import "moment/locale/ru";
import React, { Component } from "react";
import { render } from "react-dom";

import "./index.css";
import Tab from "./Tab";
import Atlas from "./Atlas";
import Dat from "./Dat";
import But from "./But";
import Table from "./Table";
import Checkbox from "./Checkbox";

class App extends Component {
  constructor(props) {
    super(props);
    moment.locale("ru");
  }

  render() {
    return (
      <>
        <Tab />
        <Atlas />
        <But />
        <Dat />
        <Table />
        <Checkbox />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
