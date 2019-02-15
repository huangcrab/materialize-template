import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque dolorum quia sapiente illum est labore neque asperiores
                  ex! Molestias ullam voluptatem ducimus. Error placeat, illum
                  cumque natus id aut commodi?
                </p>
              </div>
            </div>

            <div className="card black darken-2">
              <div className="card-content orange-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque dolorum quia sapiente illum est labore neque asperiores
                  ex! Molestias ullam voluptatem ducimus. Error placeat, illum
                  cumque natus id aut commodi?
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="img/img4.jpg" alt="" />
                <span className="card-title">Card Image</span>
              </div>
              <div className="card-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur illo saepe sunt odio? Deserunt aperiam ad
                  recusandae quisquam officiis alias accusamus animi, quod quia
                  aliquid impedit! Excepturi quisquam eaque corrupti?
                </p>
              </div>
              <div className="card-action">
                <a href="">Read More</a>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card ">
              <div className="card-content">
                <span className="card-title">Title</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque dolorum quia sapiente illum est labore neque asperiores
                  ex! Molestias ullam voluptatem ducimus. Error placeat, illum
                  cumque natus id aut commodi?
                </p>
              </div>
              <div className="card-action">
                <a href="">Read More</a>
                <a href="" className="green-text">
                  Read More
                </a>
              </div>
            </div>

            <div className="card blue-grey lighten-4">
              <div className="card-image ">
                <img src="img/img5.jpg" alt="" />
                <span className="card-title">Card Image</span>
                <a
                  href="#"
                  className="btn-floating halfway-fab waves-effect waves-light blue"
                >
                  <i className="material-icons">edit</i>
                </a>
              </div>
              <div className="card-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur illo saepe sunt odio? Deserunt aperiam ad
                  recusandae quisquam officiis alias accusamus animi, quod quia
                  aliquid impedit! Excepturi quisquam eaque corrupti?
                </p>
              </div>
              <div className="card-action">
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6">
            <div className="card horizontal">
              <div className="card-image">
                <img src="img/img1.jpg" alt="" />
              </div>

              <div className="card-stacked">
                <div className="card-content">
                  <span className="card-title">Horizontal Card</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    culpa possimus quas voluptas ipsum et, quibusdam repudiandae
                    natus vitae vel! Vitae facilis blanditiis delectus fugiat
                    odit eum asperiores labore. Quidem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card">
              <div className="card-image waves-effect waves-light waves-block">
                <img src="img/img2.jpg" className="activator" alt="" />
              </div>

              <div className="card-content">
                <span className="card-title  activator">
                  Reveal
                  <i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <a href="#!" className="activator">
                    Read More
                  </a>
                </p>
              </div>

              <div className="card-reveal">
                <span className="card-title">
                  Card Title
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  esse vero ducimus! Consequatur quibusdam, harum tenetur
                  voluptate atque totam molestias quasi excepturi dolorum
                  corporis dolor quia ipsam perspiciatis debitis accusantium?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem, consectetur?
                </p>
              </div>

              <div className="card-tabs">
                <ul className="tabs tabs-fixed-width">
                  <li className="tab">
                    <a href="#test1">b1</a>
                  </li>
                  <li className="tab">
                    <a href="#test2">b2</a>
                  </li>
                </ul>
              </div>

              <div className="card-content grey lighten-4">
                <div id="test1">Test1</div>
                <div id="test2">Test2</div>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card orange white-text">
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem, consectetur?
                </p>
              </div>

              <div className="card-tabs">
                <ul className="tabs tabs-fixed-width tabs-transparent">
                  <li className="tab">
                    <a href="#test3">b1</a>
                  </li>
                  <li className="tab">
                    <a href="#test4">b2</a>
                  </li>
                </ul>
              </div>

              <div className="card-content black lighten-4 ">
                <div id="test3">test3</div>
                <div id="test4">Test4</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            <div className="card small blue-grey lighten-4">
              <div className="card-image ">
                <img src="img/img5.jpg" alt="" />
                <span className="card-title">Card Image</span>
              </div>
              <div className="card-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur illo saepe sunt odio? Deserunt aperiam ad
                  recusandae quisquam officiis alias accusamus animi, quod quia
                  aliquid impedit! Excepturi quisquam eaque corrupti?
                </p>
              </div>
              <div className="card-action">
                <a href="">Read More</a>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card medium blue-grey lighten-4">
              <div className="card-image ">
                <img src="img/img5.jpg" alt="" />
                <span className="card-title">Card Image</span>
              </div>
              <div className="card-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur illo saepe sunt odio? Deserunt aperiam ad
                  recusandae quisquam officiis alias accusamus animi, quod quia
                  aliquid impedit! Excepturi quisquam eaque corrupti?
                </p>
              </div>
              <div className="card-action">
                <a href="">Read More</a>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card large blue-grey lighten-4">
              <div className="card-image ">
                <img src="img/img5.jpg" alt="" />
                <span className="card-title">Card Image</span>
              </div>
              <div className="card-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur illo saepe sunt odio? Deserunt aperiam ad
                  recusandae quisquam officiis alias accusamus animi, quod quia
                  aliquid impedit! Excepturi quisquam eaque corrupti?
                </p>
              </div>
              <div className="card-action">
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m3">
            <div className="card-panel blue z-depth-1">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                cumque ipsa vel? Placeat perspiciatis facilis officia laudantium
                labore impedit eos molestias, nesciunt quos, architecto
                reprehenderit nostrum. Aut nemo dolore eligendi?
              </span>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card-panel indigo white-text z-depth-4">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                cumque ipsa vel? Placeat perspiciatis facilis officia laudantium
                labore impedit eos molestias, nesciunt quos, architecto
                reprehenderit nostrum. Aut nemo dolore eligendi?
              </span>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card-panel cyan z-depth-3">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                cumque ipsa vel? Placeat perspiciatis facilis officia laudantium
                labore impedit eos molestias, nesciunt quos, architecto
                reprehenderit nostrum. Aut nemo dolore eligendi?
              </span>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card-panel amber z-depth-2">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                cumque ipsa vel? Placeat perspiciatis facilis officia laudantium
                labore impedit eos molestias, nesciunt quos, architecto
                reprehenderit nostrum. Aut nemo dolore eligendi?
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
