import React from "react";

export default function Table() {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jone Doe</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jone Doe2</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jone Doe3</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
        </tbody>
      </table>

      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jone Doe</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jone Doe2</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jone Doe3</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
        </tbody>
      </table>

      <table className="highlight">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jone Doe</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jone Doe2</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jone Doe3</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
        </tbody>
      </table>

      <table className="centered responsive-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jone Doe</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jone Doe2</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jone Doe3</td>
            <td>1@1.com</td>
            <td>New York</td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <div className="col s6">
          <img src="img/img1.jpg" alt="" className="responsive-img " />
        </div>
        <div className="col s6">
          <img src="img/img1.jpg" alt="" className="responsive-img circle" />
        </div>
      </div>

      <div className="video-container">
        <iframe
          width="853"
          height="480"
          src="//www.youtube.com/embed/d9NF2edxy-M"
          frameborder="0"
          allowFullScreen
        />
      </div>
      <hr />
      <video className="responsive-video" controls>
        <source src="img/project.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
