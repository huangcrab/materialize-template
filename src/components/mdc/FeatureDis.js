import React, { Component } from "react";
import M from "materialize-css";

export default class FeatureDis extends Component {
  constructor(props) {
    super(props);

    this.tap = React.createRef();
  }

  componentDidMount() {
    let tapButton = M.TapTarget.init(this.tap.current, {});
    //tapButton.next();
    //M.AutoInit();
  }

  openClick = () => {
    //this.tap.tapTarget();
  };

  closeClick = () => {};
  render() {
    return (
      <div>
        <a onClick={this.openClick} className="btn waves-effect waves-light">
          Open Tap Target
        </a>
        <a onClick={this.closeClick} className="btn waves-effect waves-light">
          Close Tap Target
        </a>

        <div className="fixed-action-btn">
          <a id="menu" class="waves-effect waves-light btn btn-floating">
            <i class="material-icons">menu</i>
          </a>
        </div>

        <div className="tap-target-wrapper">
          <div class="tap-target cyan" data-target="menu">
            <div class="tap-target-content">
              <h5>Title</h5>
              <p>A bunch of text</p>
            </div>
          </div>

          <div className="tap-target-wave">
            <a
              href="#!"
              className="btn btn-floating btn-large cyan tap-target-origin"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
