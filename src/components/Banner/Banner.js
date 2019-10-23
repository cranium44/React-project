import React from "react";
import "./Banner.css";
import Oculus from "../../images/oculus.png";
import iphone from "../../images/iphone6cut.png";
import cam from "../../images/cam.png";

const Banner = () => {
  return (
    <div className="banner_container container">
      <div className="banner_item_1">
        <div className="banner_item_1_text">
        <img src={iphone} alt="iphone" className="banner_image_first" />
          <h3>iPhone 6</h3>
          <p className="block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            quae nobis nam co.
          </p>
        </div>
      </div>
      <div className="banner_item_2">
        <h3>Oculus Rift</h3>
        <img src={Oculus} alt="oculus" className="" />
      </div>
      <div className="banner_item_3">
        <h3>Geo Pro</h3>
        <p className="block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          obcaecati officia placeat omnis.
        </p>
        <img src={cam} alt="camera" className="banner_image_third" />
      </div>
    </div>
  );
};

export default Banner;
