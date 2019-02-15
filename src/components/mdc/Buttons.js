import React, { Component } from "react";
import M from "materialize-css";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.FAB = React.createRef();
  }

  componentDidMount() {
    let instance = M.FloatingActionButton.init(this.FAB.current, {
      direction: "left"
    });

    instance.open();
  }
  render() {
    return (
      <div>
        <button className="btn">Read More</button>
        <a href="/" className="btn">
          Read More
        </a>
        <button className="btn waves-effect waves-light">Read More</button>
        <a href="/" className="btn waves-effect waves-light">
          Read More
        </a>
        <button className="btn white red-text waves-effect waves-red">
          Read More
        </button>
        <button className="btn white teal-text waves-effect waves-teal">
          Read More
        </button>
        <button className="btn white green-text waves-effect waves-green">
          Read More
        </button>
        <button className="btn white grey-text waves-effect waves-yellow">
          Read More
        </button>
        <button className="btn white purple-text waves-effect waves-purple">
          Read More
        </button>
        <br />
        <br />
        <i className="material-icons">shopping_cart</i>
        <i className="material-icons red-text">settings</i>
        <i className="material-icons">stars</i>
        <i className="material-icons teal-text">search</i>
        <br />
        <br />
        <i className="material-icons large">shopping_cart</i>
        <i className="material-icons medium">settings</i>
        <i className="material-icons small">stars</i>
        <i className="material-icons tiny">search</i>
        <br />
        <br />
        <button className="btn waves-effect waves-light">
          <i className="material-icons right">shopping_cart</i>Buy now
        </button>
        <br />
        <br />
        <button className="btn red">Read More</button>
        <button className="btn-large red">Read More</button>
        <button className="btn-large disabled">Read More</button>

        <br />
        <br />

        <button className="btn-floating btn-large waves-effect waves-light red">
          <i className="material-icons">add</i>
        </button>

        <a
          href="/"
          className="btn-floating btn-large waves-effect waves-light blue"
        >
          <i className="material-icons">edit</i>
        </a>

        <button className="btn-floating btn-large waves-effect waves-light pulse green">
          <i className="material-icons">publish</i>
        </button>

        {/* <div className="fixed-action-btn">
          <button className="btn-large btn-floating red">
            <i className="material-icons">add</i>
          </button>
        </div> */}

        <div className="fixed-action-btn" ref={this.FAB}>
          <button className="btn-floating btn-large red">
            <i className="material-icons">mode_edit</i>
          </button>
          <ul>
            <li>
              <button className="btn-floating red">
                <i className="material-icons">insert_chart</i>
              </button>
            </li>
            <li>
              <button className="btn-floating blue">
                <i className="material-icons">format_quote</i>
              </button>
            </li>
            <li>
              <button className="btn-floating yellow">
                <i className="material-icons">publish</i>
              </button>
            </li>
            <li>
              <button className="btn-floating green">
                <i className="material-icons">attach_file</i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
