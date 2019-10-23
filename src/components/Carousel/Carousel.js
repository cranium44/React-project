import React from "react";
import Iphone from "../../../src/images/iphone.png";
import { currentSlide, plusSlides} from '../../script'
import "./Carousel.css";

const Carousel = () => {
  return (
    <div>
      <div className="carousel">
        <div className="slideshow-container">
          <div className="mySlides mySlides_none fade">
            <div className="numbertext">1 / 3</div>
            <img src={Iphone} />
            <div className="text">Caption Text</div>
          </div>

          <div className="mySlides mySlides_none fade">
            <div className="numbertext">2 / 3</div>
            <img src={Iphone} />
            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides mySlides_none fade">
            <div className="numbertext">3 / 3</div>
            <img src={Iphone} />
            <div className="text">Caption Three</div>
          </div>

          <a className="prev" onClick={plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={plusSlides(1)}>
            &#10095;
          </a>
        </div>
        <br />

        <div className="dots">
          <span className="dot" onClick={currentSlide(1)}></span>
          <span className="dot" onClick={currentSlide(2)}></span>
          <span className="dot" onClick={currentSlide(3)}></span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
