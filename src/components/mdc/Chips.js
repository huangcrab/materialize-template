import React, { Component } from "react";
import M from "materialize-css";

export default class Chips extends Component {
  constructor(props) {
    super(props);

    this.chipInput = React.createRef();
  }

  componentDidMount() {
    M.Chips.init(this.chipInput.current, {
      placeholder: "Enter a Tag",
      autocompleteOptions: {
        data: {
          html: null,
          css: null
        }
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="chip">Web Development</div>
        <div className="chip">Web Design</div>
        <div className="chip">Programming</div>

        <br />
        <br />

        <div className="chip">
          <i className="material-icons close">close</i>Web Development
        </div>
        <div className="chip">
          <i className="material-icons close">close</i>Web Design
        </div>
        <div className="chip">
          <i className="material-icons close">close</i>Programming
        </div>

        <br />
        <br />
        <div className="chip">
          <img src="img/img1.jpg" alt="" />
          Web Development
        </div>
        <div className="chip">
          <img src="img/img2.jpg" alt="" />
          Web Design
        </div>
        <div className="chip">
          <img src="img/img3.jpg" alt="" />
          Programming
        </div>

        <br />
        <br />

        <div className="chips-input" ref={this.chipInput} />

        <br />
        <br />

        <ul className="pagination">
          <li className="disabled">
            <a href="#!">
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          <li className="waves-effect">
            <a href="#1">1</a>
          </li>
          <li className="waves-effect active">
            <a href="#1">2</a>
          </li>
          <li className="waves-effect">
            <a href="#1">3</a>
          </li>
          <li className="waves-effect">
            <a href="#1">4</a>
          </li>
          <li className="waves-effect">
            <a href="#1">5</a>
          </li>
          <li className="waves-effect">
            <a href="#1">
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
