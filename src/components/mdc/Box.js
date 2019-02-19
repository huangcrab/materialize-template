import React, { Component } from "react";

import M from "materialize-css";

export default class Box extends Component {
  componentDidMount() {
    M.Slider.init(this.slider);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <img
              src="img/img1.jpg"
              className="materialboxed"
              width="100%"
              alt=""
            />
          </div>
          <div className="col s12 m6">
            <img
              src="img/img2.jpg"
              className="materialboxed"
              width="100%"
              alt=""
              data-caption="This is a data caption"
            />
          </div>
        </div>

        <div className="slider" ref={slider => (this.slider = slider)}>
          <ul className="slides">
            <li>
              <img src="img/img3.jpg" alt="" />

              <div className="caption center-align">
                <h3>Center Caption</h3>
                <h5 className="light grey-text text-lighten-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, accusantium!
                </h5>
              </div>
            </li>

            <li>
              <img src="img/img4.jpg" alt="" />

              <div className="caption left-align">
                <h3>left Caption</h3>
                <h5 className="light grey-text text-lighten-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, accusantium!
                </h5>
              </div>
            </li>

            <li>
              <img src="img/img5.jpg" alt="" />

              <div className="caption right-align">
                <h3>right Caption</h3>
                <h5 className="light grey-text text-lighten-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, accusantium!
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
