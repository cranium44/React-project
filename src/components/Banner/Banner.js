import React from "react";
import "./Banner.css";
import Oculus from "../../images/oculus.png";
import iphone from "../../images/iphone6cut.png";
import cam from "../../images/cam.png";

const Banner = () => {
  return (
    <div className="banner_container container">
      <div className="banner_item_1 col-4">
        <div className="banner_item_1_text">
          <h3>iPhone 6</h3>
          <p className="block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            quae nobis nam co.
          </p>
          <span className="money">$ 399</span>
        </div>
        <div className="banner_image_first">
          <img src={iphone} alt="iphone" />
        </div>
      </div>
      <div className="banner_item_2 col-4">
        <img src={Oculus} alt="oculus" className="" />
        <div className="banner_item_2_text">
          <h3>Oculus Rift</h3>
          <span className="money">$ 349</span>
        </div>
      </div>
      <div className="banner_item_3 col-4">
        <div className="banner_item_3_text">
          <h3>Geo Pro</h3>
          <p className="block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            obcaecati officia placeat omnis.
          </p>
          <span className="money">$ 299</span>
        </div>

        <img src={cam} alt="camera" className="banner_image_third" />
      </div>
    </div>
  );
};

export default Banner;
