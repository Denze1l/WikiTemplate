import React, { Component } from "react";
import "./App.css";
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from "./text.service";

class App extends Component {
  state = {
    chosenWeight: "",
    chosenStyle: "",
    chosenDecoration: ""
  };

  fontWeight = e => {
    const { chosenWeight } = this.state;
    if (!chosenWeight) {
      this.setState({
        chosenWeight: e.target.tagName
      });
    }
    if (chosenWeight) {
      this.setState({ chosenWeight: "" });
    }
  };

  fontStyle = e => {
    const { chosenStyle } = this.state;
    if (!chosenStyle) {
      this.setState({
        chosenStyle: e.target.tagName
      });
    }
    if (chosenStyle) {
      this.setState({ chosenStyle: "" });
    }
  };

  textDecoration = e => {
    const { chosenDecoration } = this.state;
    if (!chosenDecoration) {
      this.setState({
        chosenDecoration: e.target.tagName
      });
    }
    if (chosenDecoration) {
      this.setState({ chosenDecoration: "" });
    }
  };

  getText() {
    getMockText().then(function(result) {
      console.log(result);
    });
  }
  render() {
    const { chosenWeight, chosenStyle, chosenDecoration } = this.state;
    // console.log(TextColor);
    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel
            fontWeight={this.fontWeight}
            fontStyle={this.fontStyle}
            textDecoration={this.textDecoration}
          />
          <FileZone
            chosenWeight={chosenWeight}
            chosenStyle={chosenStyle}
            chosenDecoration={chosenDecoration}
          />
        </main>
      </div>
    );
  }
}

export default App;
