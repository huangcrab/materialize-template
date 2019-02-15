import React, { Component } from "react";

class Collections extends Component {
  render() {
    return (
      <div className="container">
        <ul className="collection">
          <li className="collection-item">First Item</li>
          <li className="collection-item">Second Item</li>
          <li className="collection-item">Third Item</li>
          <li className="collection-item">Fourth Item</li>
        </ul>
        <br />

        <div className="collection">
          <a href="#!" className="collection-item">
            First Item
          </a>
          <a href="#!" className="collection-item">
            Second Item
          </a>
          <a href="#!" className="collection-item">
            Third Item
          </a>
          <a href="#!" className="collection-item">
            Fourth Item
            <span className="badge">45</span>
          </a>
          <a href="#!" className="collection-item">
            Fifth Item
            <span className="badge new">2</span>
          </a>
        </div>

        <br />
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Items</h4>
          </li>
          <li className="collection-item">First Item</li>
          <li className="collection-item">Second Item</li>
          <li className="collection-item">Third Item</li>
          <li className="collection-item">Fourth Item</li>
        </ul>

        <br />

        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Items</h4>
          </li>
          <li className="collection-item">
            First Item
            <a href="" className="secondary-content">
              <i className="material-icons">send</i>
            </a>
          </li>
          <li className="collection-item">
            <div>
              Second Item
              <a href="" className="secondary-content">
                <i className="material-icons">send</i>
              </a>
            </div>
          </li>
          <li className="collection-item">
            <div>
              Third Item
              <a href="" className="secondary-content">
                <i className="material-icons">send</i>
              </a>
            </div>
          </li>
          <li className="collection-item">
            <div>
              Fourth Item
              <a href="" className="secondary-content">
                <i className="material-icons">send</i>
              </a>
            </div>
          </li>
        </ul>

        <br />

        <ul className="collection ">
          <li className="collection-item avatar">
            <i className="material-icons circle orange">money</i>
            <span className="title">Title</span>
            <p>
              p1 <br /> p2
            </p>
            <a href="" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle orange">money</i>
            <span className="title">Title</span>
            <p>
              p1 <br /> p2
            </p>
            <a href="" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle orange">money</i>
            <span className="title">Title</span>
            <p>
              p1 <br /> p2
            </p>
            <a href="" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
        </ul>

        <br />

        <a data-target="dropdown1" className="btn dropdown-trigger">
          Dropdown <i className="material-icons right">arrow_drop_down</i>
        </a>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="">
              Fourth <span className="badge">44</span>
            </a>
          </li>
          <li>
            <a href="">
              Fourth <span className="badge">44</span>
            </a>
          </li>
          <li>
            <a href="#!">
              Fourt
              <span className="new badge">45</span>
            </a>
          </li>
          <li>
            <a href="">
              Fourth <span className="badge">44</span>
            </a>
          </li>
        </ul>

        <div style={{ marginTop: "1000px" }} />
      </div>
    );
  }
}

export default Collections;
