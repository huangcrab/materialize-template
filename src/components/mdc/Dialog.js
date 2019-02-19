import React, { Component } from "react";
import M from "materialize-css";
export default class Dialog extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  onFirstClick = () => {
    M.toast({ html: "I am toast" });
  };

  onSecClick = () => {
    M.toast({ html: "I am toast", classes: "rounded" });
  };

  onThirdClick = () => {
    M.toast({
      html: "I am toast",
      classes: "rounded",
      completeCallback: function() {
        alert("toast gone");
      }
    });
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.onFirstClick} className="btn">
          Show Toast
        </button>
        <button onClick={this.onSecClick} className="btn">
          Rounded Toast
        </button>
        <button onClick={this.onThirdClick} className="btn">
          Toast With Callback
        </button>
        <br />
        <br />
        <button
          className="btn tooltipped"
          data-position="bottom"
          data-tooltip="I m a tooltip"
        >
          Bottom Tooltip
        </button>

        <button
          className="btn tooltipped"
          data-position="left"
          data-tooltip="I m a tooltip"
        >
          Bottom Tooltip
        </button>

        <button
          className="btn tooltipped"
          data-position="top"
          data-tooltip="I m a tooltip"
        >
          Bottom Tooltip
        </button>

        <button
          className="btn tooltipped"
          data-position="right"
          data-tooltip="I m a tooltip"
        >
          Bottom Tooltip
        </button>
      </div>
    );
  }
}
