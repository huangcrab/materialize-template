import React, { Component } from "react";
import M from "materialize-css";
export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.tabs = React.createRef();
  }
  componentDidMount() {
    M.Tabs.init(this.tabs.current, {
      swipeable: true
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <ul className="tabs" ref={this.tabs}>
              <li className="tab col s3">
                <a href="#test1">Tab1</a>
              </li>
              <li className="tab col s3">
                <a href="#test2">Tab2</a>
              </li>
              <li className="tab col s3">
                <a href="#test3">Tab3</a>
              </li>
              <li className="tab col s3">
                <a href="#test4">Tab4</a>
              </li>
            </ul>
          </div>

          <div id="test1" className="col s12">
            <h3>Tab1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quidem deleniti distinctio incidunt omnis tempora fuga, recusandae
              animi quasi quam eos ducimus velit itaque ea doloribus, cum
              impedit nobis ipsam similique sunt reprehenderit quaerat. Laborum
              repellat reiciendis facere necessitatibus nemo eaque aliquid,
              cupiditate itaque eum provident recusandae, voluptatibus, odit cum
              modi animi ipsam dolor! Doloribus consequuntur ut cupiditate
              asperiores blanditiis molestias nam minima. Natus rem eligendi
              dolor earum harum corporis voluptatibus voluptatem adipisci
              recusandae aliquid quod eaque molestias, provident commodi odit
              mollitia voluptas nesciunt voluptates atque, culpa omnis hic
              minima facere. Quae eveniet earum quibusdam quidem optio qui
              aliquid voluptatibus.
            </p>
          </div>
          <div id="test2" className="col s12">
            <h3>Tab2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quidem deleniti distinctio incidunt omnis tempora fuga, recusandae
              animi quasi quam eos ducimus velit itaque ea doloribus, cum
              impedit nobis ipsam similique sunt reprehenderit quaerat. Laborum
              repellat reiciendis facere necessitatibus nemo eaque aliquid,
              cupiditate itaque eum provident recusandae, voluptatibus, odit cum
              modi animi ipsam dolor! Doloribus consequuntur ut cupiditate
              asperiores blanditiis molestias nam minima. Natus rem eligendi
              dolor earum harum corporis voluptatibus voluptatem adipisci
              recusandae aliquid quod eaque molestias, provident commodi odit
              mollitia voluptas nesciunt voluptates atque, culpa omnis hic
              minima facere. Quae eveniet earum quibusdam quidem optio qui
              aliquid voluptatibus.
            </p>
          </div>
          <div id="test3" className="col s12">
            <h3>Tab3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quidem deleniti distinctio incidunt omnis tempora fuga, recusandae
              animi quasi quam eos ducimus velit itaque ea doloribus, cum
              impedit nobis ipsam similique sunt reprehenderit quaerat. Laborum
              repellat reiciendis facere necessitatibus nemo eaque aliquid,
              cupiditate itaque eum provident recusandae, voluptatibus, odit cum
              modi animi ipsam dolor! Doloribus consequuntur ut cupiditate
              asperiores blanditiis molestias nam minima. Natus rem eligendi
              dolor earum harum corporis voluptatibus voluptatem adipisci
              recusandae aliquid quod eaque molestias, provident commodi odit
              mollitia voluptas nesciunt voluptates atque, culpa omnis hic
              minima facere. Quae eveniet earum quibusdam quidem optio qui
              aliquid voluptatibus.
            </p>
          </div>
          <div id="test4" className="col s12">
            <h3>Tab4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              quidem deleniti distinctio incidunt omnis tempora fuga, recusandae
              animi quasi quam eos ducimus velit itaque ea doloribus, cum
              impedit nobis ipsam similique sunt reprehenderit quaerat. Laborum
              repellat reiciendis facere necessitatibus nemo eaque aliquid,
              cupiditate itaque eum provident recusandae, voluptatibus, odit cum
              modi animi ipsam dolor! Doloribus consequuntur ut cupiditate
              asperiores blanditiis molestias nam minima. Natus rem eligendi
              dolor earum harum corporis voluptatibus voluptatem adipisci
              recusandae aliquid quod eaque molestias, provident commodi odit
              mollitia voluptas nesciunt voluptates atque, culpa omnis hic
              minima facere. Quae eveniet earum quibusdam quidem optio qui
              aliquid voluptatibus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
