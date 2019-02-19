import React, { Component } from "react";

export default class SideNav extends Component {
  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <a class="sidenav-close">
              <i className="material-icons left">close</i>
            </a>
          </li>
          <li>
            <div className="user-view">
              <div className="background">
                <img src="img/img3.jpg" alt="" />
              </div>
              <a href="#!">
                <img src="img/img2.jpg" alt="" className="circle" />
              </a>
              <a href="#!">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#!">
                <span className="white-text email">jd@gmail.com</span>
              </a>
            </div>
          </li>

          <li>
            <a href="#!">
              <i className="material-icons">dashboard</i>Dashboard
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="material-icons">dashboard</i>Posts
            </a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a href="#!" className="subheader">
              Account Info
            </a>
          </li>
          <li>
            <a href="#!" className="waves-effect">
              Logout
            </a>
          </li>
        </ul>

        <button data-target="slide-out" className="btn sidenav-trigger">
          <i className="material-icons">menu</i>
        </button>
      </div>
    );
  }
}
