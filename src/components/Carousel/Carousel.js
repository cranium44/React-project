import React from "react";
import Iphone from "../../../src/images/iphone.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/main.css";
import "./Carousel.css";

const CarouselB = () => {
  return (
    <div className="carousel col-12">
      <div className="carousel_wrapper">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          width={"1139px"}
          showThumbs={false}
          stopOnHover={true}
          dynamicHeight={true}
          
        >
          <div className="carousel_item">
            <img src={Iphone} alt="iphone" />
            <p className="legend">Legend 1</p>
          </div>
          <div className="carousel_item">
            <img src={Iphone} alt="iphone" />
            <p className="legend">Legend 2</p>
          </div>
          <div className="carousel_item">
            <img src={Iphone} alt="iphone" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselB;
