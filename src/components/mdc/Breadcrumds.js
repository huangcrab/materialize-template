import React, { Component } from "react";

export default class Breadcrumds extends Component {
  render() {
    return (
      <div>
        <nav className="grey">
          <div className="nav-wrapper">
            <div className="container">
              <div className="col s12">
                <a href="#" className="breadcrumb">
                  Home
                </a>
                <a href="#" className="breadcrumb">
                  Users
                </a>
                <a href="#" className="breadcrumb">
                  Contact
                </a>
                <a href="#" className="breadcrumb">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>

        <footer className="page-footer grey darken-3">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <h5 className="grey-text text-lighten-3">About us</h5>
                <p className="white-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis quod voluptates soluta explicabo perferendis quam.
                </p>
              </div>
              <div className="col s12 m4 offset-m2">
                <h5 className="grey-text text-lighten-3">Contact us</h5>
                <p className="white-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  fugiat officiis eligendi, quisquam necessitatibus tempora est
                  sed aliquid totam facere incidunt! Doloribus atque sed quo
                  nostrum architecto iusto ipsa officia?
                </p>
              </div>
            </div>
          </div>

          <div className="footer-copyright grey darken-2">
            <div className="container">
              Copyright &copy; 2019
              <a href="#" className="grey-text text-lighten-3 right">
                Terms & Conditions
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
