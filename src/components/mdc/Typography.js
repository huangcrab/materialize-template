import React from "react";

function Typography() {
  return (
    <div>
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <h5>Heading Five</h5>
      <h6>Heading Six</h6>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem id
        eius reiciendis!
      </p>

      <blockquote>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam temporibus
        delectus dolor. Sapiente, alias quisquam perferendis totam repellendus
        iure ea?
      </blockquote>

      <p className="flow-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque iure
        reprehenderit doloremque? Perferendis natus consequatur iste architecto
        sequi asperiores minus?
      </p>

      <h5 className="left-align">Left Aligned text</h5>
      <h5 className="right-align">Right Aligned text</h5>
      <h5 className="center-align">Center Aligned text</h5>

      <div
        style={{ height: "400px", background: "#f4f4f4" }}
        className="valign-wrapper"
      >
        <h5>This should be veritically aligned</h5>
      </div>

      <p className="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        non veniam alias quaerat? Repellat fuga provident, mollitia accusantium
        amet hic!
      </p>
      <p className="right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        non veniam alias quaerat? Repellat fuga provident, mollitia accusantium
        amet hic!
      </p>
      <div className="clearfix" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        consectetur mollitia voluptatibus quia quasi assumenda incidunt vel
        alias dolores corrupti?
      </p>
    </div>
  );
}

export default Typography;
