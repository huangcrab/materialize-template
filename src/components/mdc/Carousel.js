import React, { Component } from "react";
import M from "materialize-css";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.carousel = React.createRef();
  }

  componentDidMount() {
    //M.AutoInit();
    // M.Carousel.init(this.carousel.current, {
    //     fullWidth: true,
    // });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="carousel">
            <div className="carousel-item">
              <img alt="1" src="img/img1.jpg" />
            </div>
            <div className="carousel-item">
              <img alt="2" src="img/img2.jpg" />
            </div>
            <div className="carousel-item">
              <img alt="3" src="img/img3.jpg" />
            </div>
            <div className="carousel-item">
              <img alt="4" src="img/img4.jpg" />
            </div>
            <div className="carousel-item">
              <img alt="5" src="img/img5.jpg" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="carousel carousel-slider">
            <a className="carousel-item">
              <img alt="1" src="img/img1.jpg" />
            </a>
            <a className="carousel-item">
              <img alt="2" src="img/img2.jpg" />
            </a>
            <a className="carousel-item">
              <img alt="3" src="img/img3.jpg" />
            </a>
            <a className="carousel-item">
              <img alt="4" src="img/img4.jpg" />
            </a>
            <a className="carousel-item">
              <img alt="5" src="img/img5.jpg" />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="carousel carousel-slider center" ref={this.carousel}>
            <div className="carousel-item red white-text" href="#1!">
              <h2>Panel One</h2>
              <p className="black-text">This is panel one</p>
            </div>
            <div className="carousel-item amber white-text" href="#2!">
              <h2>Panel Two</h2>
              <p>This is panel 2</p>
            </div>
            <div className="carousel-item green white-text" href="#3!">
              <h2>Panel 3</h2>
              <p>This is panel 3</p>
            </div>
            <div className="carousel-item blue white-text" href="#4!">
              <h2>Panel 4</h2>
              <p>This is panel 4</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
