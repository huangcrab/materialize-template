import React, { Component } from "react";
import M from "materialize-css";

export default class Collapsible extends Component {
  constructor(props) {
    super(props);

    this.expand = React.createRef();
  }

  componentDidMount() {
    M.AutoInit();
    M.Collapsible.init(this.expand.current, {
      accordion: false
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <ul className="collapsible">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>First
              </div>
              <div className="collapsible-body">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet praesentium laborum sunt dolores voluptate cumque.
                </span>
              </div>
            </li>
            <li className="active">
              <div className="collapsible-header">
                <i className="material-icons">place</i>Two
              </div>
              <div className="collapsible-body">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet praesentium laborum sunt dolores voluptate cumque.
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">help</i>Three
              </div>
              <div className="collapsible-body">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet praesentium laborum sunt dolores voluptate cumque.
                </span>
              </div>
            </li>
          </ul>

          <ul className="collapsible" ref={this.expand}>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>First
              </div>
              <div className="collapsible-body">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet praesentium laborum sunt dolores voluptate cumque.
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">place</i>Two
              </div>
              <div className="collapsible-body">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet praesentium laborum sunt dolores voluptate cumque.
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">help</i>Three
              </div>
              <div className="collapsible-body">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet praesentium laborum sunt dolores voluptate cumque.
                </span>
              </div>
            </li>
          </ul>

          <ul className="collapsible popout">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>First
              </div>
              <div className="collapsible-body">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet praesentium laborum sunt dolores voluptate cumque.
                </span>
              </div>
            </li>
            <li className="active">
              <div className="collapsible-header">
                <i className="material-icons">place</i>Two
              </div>
              <div className="collapsible-body">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet praesentium laborum sunt dolores voluptate cumque.
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">help</i>Three
              </div>
              <div className="collapsible-body">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet praesentium laborum sunt dolores voluptate cumque.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
