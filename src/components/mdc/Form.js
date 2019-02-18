import React, { Component } from "react";
import M from "materialize-css";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.timepick = React.createRef();
    this.counter = React.createRef();
    this.autoc = React.createRef();
  }

  componentDidMount() {
    M.AutoInit();
    M.Autocomplete.init(this.autoc.current, {
      data: {
        Apple: null,
        JAVA: null,
        google: "https://placehold.it/250x250",
        ghost: null
      }
    });
    M.CharacterCounter.init(this.counter.current);
    M.Timepicker.init(this.timepick.current, {
      showClearBtn: true,
      i18n: { done: "gogogo", clear: "reset", cancel: "bye!" }
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <form action="">
                <div className="input-field">
                  <input type="text" placeholder="Name" id="name" />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                  <input type="email" id="email" placeholder="Email" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <textarea
                    id="message"
                    placeholder="Message"
                    className="materialize-textarea"
                  />
                </div>
                Number of users:
                <div className="input-field inline">
                  <input type="text" id="users_inline" className="validate" />
                  <label htmlFor="users_inline">#</label>
                  <span
                    class="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Helper text
                  </span>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">phone</i>
                  <input type="tel" id="phone" />
                  <label htmlFor="phone">Phone</label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">email</i>
                  <input type="email" id="emails" className="validate" />
                  <label htmlFor="emails">Email</label>
                  <span
                    className="helper-text"
                    data-error="Invalid"
                    data-success="Valid"
                  />
                </div>
                <div className="input-field">
                  <select name="" id="">
                    <option value="" disabled selected>
                      Select Options
                    </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
                <br />
                <br />
                <div className="input-field">
                  <select name="" id="">
                    <optgroup label="Option Group 1">
                      <option value="" disabled selected>
                        Select Options
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                    </optgroup>
                    <optgroup label="Option Group 2">
                      <option value="3">Option 3</option>
                    </optgroup>
                  </select>
                  <label htmlFor="">Option Group Select</label>
                </div>
                <br />
                <br />
                <select multiple>
                  <option value="" disabled>
                    Select Options
                  </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <p>
                  <label>
                    <input type="radio" name="gender" value="male" checked />
                    <span>Male</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="with-gap"
                    />
                    <span>Female</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" id="html" />
                    <span>HTML</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" id="css" name="tech" />
                    <span>CSS</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Javascript</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" id="java" name="tech" />
                    <span>JAVA</span>
                  </label>
                </p>
                <input type="submit" value="Submit" className="btn" />
              </form>
            </div>

            <div className="col s12 m6">
              <form action="">
                <div className="switch">
                  <label>
                    Disable
                    <input type="checkbox" name="" id="" checked />
                    <span className="lever" />
                    Enable
                  </label>
                </div>
                <div className="switch">
                  <label>
                    Disable
                    <input type="checkbox" name="" id="" />
                    <span className="lever" />
                    Enable
                  </label>
                </div>

                <div className="file-field input-field">
                  <div className="btn">
                    <span>Upload File</span>
                    <input type="file" />
                  </div>
                  <div className="file-path-wrapper">
                    <input type="text" class="file-path" />
                  </div>
                </div>
                <p>
                  <input type="range" />
                </p>
                <p class="range-field">
                  <input type="range" id="test" min="0" max="100" />
                </p>

                <div className="input-field">
                  <input type="text" id="date" className="datepicker" />
                  <label htmlFor="date">Choose a Date</label>
                </div>

                <div className="input-field">
                  <input
                    type="text"
                    id="time"
                    className="timepicker"
                    ref={this.timepick}
                  />
                  <label htmlFor="time">Choose a Time</label>
                </div>

                <div className="input-field">
                  <input
                    type="text"
                    id="post"
                    data-length="10"
                    ref={this.counter}
                  />
                  <label htmlFor="post">Post</label>
                </div>

                <div className="input-field">
                  <input
                    type="text"
                    id="fruit"
                    className="autocomplete"
                    ref={this.autoc}
                  />
                  <label htmlFor="fruit">Autocomplete</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
