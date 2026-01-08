import React from "react";
import Slider from "react-slick";
import USAA from "./USAA.png";
import DISCOVER from "./Discover.png";
import METLIFE from "./metlife.png";
import HSBC from "./HSBC.png";
/* react-slick needs these two CSS files */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600, // transition speed between slides (ms)
    cssEase: "ease-in-out", // easing function for the transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // ✅ auto-scroll
    autoplaySpeed: 3000, // time each slide stays (ms)
    pauseOnHover: true, // pause when mouse hovers
    pauseOnFocus: true, // pause when focused
  };

  const slideStyle = {
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: 600,
    color: "#1b1e25",
  };

  return (
    <div className="slider-card">
      <Slider {...settings}>
        <div>
          <div style={slideStyle}>
            {/* We work with 85% of the 200 largest companies. */}
            <img src={USAA} alt="USAA_logo" className="usaa-logo-image" />
          </div>
        </div>
        <div>
          <div style={slideStyle}>
            {/* Global presence across many regions. */}
            <img
              src={DISCOVER}
              alt="Discover_logo"
              className="discover-logo-image"
            />
          </div>
        </div>
        <div>
          <div style={slideStyle}>
            {/* Trusted by industry leaders. */}
            <img
              src={METLIFE}
              alt="metlife_logo"
              className="metlife-logo-image"
            />
          </div>
        </div>
        <div>
          <div style={slideStyle}>
            {/* Trusted by industry leaders. */}
            <img src={HSBC} alt="metlife_logo" className="metlife-logo-image" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
