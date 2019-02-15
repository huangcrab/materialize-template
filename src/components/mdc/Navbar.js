import React, { Component } from "react";
import M from "materialize-css";

class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <React.Fragment>
        <nav className="teal darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                Blueprints
              </a>
              <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li className="active">
                  <a href="/">Contact</a>
                </li>

                <li>
                  <a className="btn waves-effect waves-light" href="/">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="material-icons">person</i>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="dropdown-trigger"
                    data-target="my-dropdown"
                  >
                    Dropdown
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <nav>
          <div class="nav-wrapper">
            <form>
              <div class="input-field">
                <input id="search" type="search" required />
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <ul className="dropdown-content" id="my-dropdown">
          <li>
            <a href="/">drop1</a>
          </li>
          <li>
            <a href="/">drop2</a>
          </li>
          <li>
            <a href="/">drop3</a>
          </li>
        </ul>

        <div style={{ marginTop: "1000px" }} />
      </React.Fragment>
    );
  }
}

export default Navbar;
