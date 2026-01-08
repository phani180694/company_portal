import React from "react";
import "./About.css";
import Capgemini_Banner from "./Capgemini-about-us-hero-banner.webp";
import Capgemini_img1 from "./Capgemini_Services_Sustainability-net-zero_Targets.webp";
import Slider from "react-slick";
import SimpleSlider from "./SimpleSlider";

const About = () => {
  return (
    <>
      {/* <div className="container"> */}
      <div className="about-us-sub-header">
        <span className="about-us-spanHeader">Home / About us ^</span>
      </div>
      <div className="about-us-banner-box">
        <img
          src={Capgemini_Banner}
          alt="capgemini_banner"
          className="about-us-banner-image"
        />
        <div className="about-us-banner-heading">
          <span className="about-us-banner-name">About Us</span>
        </div>
      </div>
      <div className="about-us-data">
        <p className="about-us-data-heading">
          Capgemini helps businesses imagine their future and make it real with
          AI, technology and people
        </p>
        <p className="about-us-data-paragraph">
          As a leading advisor and transformation partner to companies around
          the world, we have leveraged technology to enable business
          transformation for almost 60 years. We address the entire breadth of
          business needs, from strategy and design to managing operations and
          engineering, drawing on deep industry knowledge and technical
          expertise in cloud, data, artificial intelligence, connectivity,
          software, digital engineering, and platforms.​
        </p>
      </div>
      <div class="stats">
        <div class="stat">
          <h2>€22.1B</h2>
          <div class="underline"></div>
          <p class="tag">2024 revenues</p>
        </div>
        <div class="stat">
          <h2>420K</h2>
          <div class="underline"></div>
          <p>people</p>
        </div>
        <div class="stat">
          <h2>50+</h2>
          <div class="underline"></div>
          <p>countries</p>
        </div>
      </div>

      <div className="about-us-banner-box">
        <h1>Our Clients</h1>
        {/* <img
          src={Capgemini_img1}
          alt="capgemini_banner_slider"
          className="about-us-banner-image"
        /> */}

        {/* ✅ Overlay slider ON TOP of the image */}
        {/* <div className="banner-slider-overlay">
          <SimpleSlider />
        </div> */}
        <SimpleSlider />
      </div>

      {/* </div> */}
    </>
  );
};

export default About;
