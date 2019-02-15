import React, { Component } from "react";

class Grid extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
          <div className="col s1">
            <div className="box">1</div>
          </div>
        </div>

        <div className="row">
          <div className="col s4">
            <div className="box">4</div>
          </div>
          <div className="col s4">
            <div className="box">4</div>
          </div>
          <div className="col s4">
            <div className="box">4</div>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <div className="box">6</div>
          </div>
          <div className="col s6">
            <div className="box">6</div>
          </div>
        </div>

        <div className="row">
          <div className="col s8">
            <div className="box">8</div>
          </div>
          <div className="col s4">
            <div className="box">4</div>
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
          <div className="col m1 s12">
            <div className="box">1</div>
          </div>
        </div>

        <div className="row">
          <div className="col m4 s12">
            <div className="box">4</div>
          </div>
          <div className="col m4 s12">
            <div className="box">4</div>
          </div>
          <div className="col m4 s12">
            <div className="box">4</div>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <div className="box">6</div>
          </div>
          <div className="col s6">
            <div className="box">6</div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 l8 xl9">
            <div className="box">8</div>
          </div>
          <div className="col s12 m6 l4 xl3">
            <div className="box">4</div>
          </div>
        </div>

        <div className="row">
          <div className="col s7 push-s5">
            <div className="box">1</div>
          </div>
          <div className="col s5 pull-s7">
            <div className="box">2</div>
          </div>
        </div>

        <div className="row">
          <div className="col s6 offset-s3">
            <div className="box">1</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Grid;
