import React, { Component } from "react";
import "./ControlPanel.css";

class ControlPanel extends Component {
  render() {
    const { fontWeight, fontStyle, textDecoration } = this.props;
    return (
      <div id="control-panel">
        <div id="format-actions">
          <button onClick={fontWeight} className="format-action" type="button">
            <b>B</b>
          </button>
          <button onClick={fontStyle} className="format-action" type="button">
            <i>I</i>
          </button>
          <button
            onClick={textDecoration}
            className="format-action"
            type="button"
          >
            <u>U</u>
          </button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
