import React from "react";
import "./Industries.css";
// import city from "../public/city.webp";
// import city from "../city.webp";
// import insta from "../../public/instagram.png";
import city from "../images/city.webp";
import insta from "../images/instagram.png";
import fb from "../images/facebook.png";

const industryData = [
  {
    id: 1,
    industry: "Technology",
    imageUrl: "https://picsum.photos/seed/technology/1000/667",
    title: "Cutting-edge Tech",
    description: "Futuristic technology setup.",
  },
  {
    id: 2,
    industry: "Healthcare",
    imageUrl: "https://picsum.photos/seed/healthcare/1000/667",
    title: "Modern Healthcare",
    description: "Healthcare professional at work.",
  },
  {
    id: 3,
    industry: "Finance",
    imageUrl: "https://picsum.photos/seed/finance/1000/667",
    title: "Financial Strategy",
    description: "Hands with financial documents.",
  },
  {
    id: 4,
    industry: "Education",
    imageUrl: "https://picsum.photos/seed/education/1000/667",
    title: "Interactive Learning",
    description: "Students in a collaborative session.",
  },
  {
    id: 5,
    industry: "Manufacturing",
    imageUrl: "https://picsum.photos/seed/manufacturing/1000/667",
    title: "Industrial Production",
    description: "Metalworker grinding steel in factory.",
  },
  {
    id: 6,
    industry: "Retail",
    imageUrl: "https://picsum.photos/seed/retail/1000/667",
    title: "Retail Storefront",
    description: "Vibrant retail shopping experience.",
  },
  {
    id: 7,
    industry: "Energy",
    imageUrl: "https://picsum.photos/seed/energy/1000/667",
    title: "Renewable Energy",
    description: "Solar panels under clear sky.",
  },
  {
    id: 8,
    industry: "Transportation",
    imageUrl: "https://picsum.photos/seed/transportation/1000/667",
    title: "Urban Mobility",
    description: "City transport infrastructure.",
  },
  {
    id: 9,
    industry: "Construction",
    imageUrl: "https://picsum.photos/seed/construction/1000/667",
    title: "Construction Site",
    description: "Crane on a building site.",
  },
  {
    id: 10,
    industry: "Agriculture",
    imageUrl: "https://picsum.photos/seed/agriculture/1000/667",
    title: "Agricultural Field",
    description: "Tractor working the fields.",
  },
  {
    id: 11,
    industry: "Telecommunications",
    imageUrl: "https://picsum.photos/seed/telecom/1000/667",
    title: "Network Connectivity",
    description: "High-tech telecom equipment.",
  },
  {
    id: 12,
    industry: "Entertainment",
    imageUrl: "https://picsum.photos/seed/entertainment/1000/667",
    title: "Digital Entertainment",
    description: "Streaming content on screen.",
  },
  {
    id: 13,
    industry: "Real Estate",
    imageUrl: "https://picsum.photos/seed/realestate/1000/667",
    title: "Modern Architecture",
    description: "Contemporary real estate building.",
  },
  {
    id: 14,
    industry: "Automotive",
    imageUrl: "https://picsum.photos/seed/automotive/1000/667",
    title: "Futuristic Car",
    description: "Electric concept vehicle.",
  },
  {
    id: 15,
    industry: "Food & Beverage",
    imageUrl: "https://picsum.photos/seed/foodandbeverage/1000/667",
    title: "Culinary Delight",
    description: "Artfully prepared dish.",
  },
];

const Industries = () => {
  return (
    <>
      <div className="sub-header">
        <span className="spanHeader">Home / Industries ^</span>
        <button className="headerButton">Get in touch - </button>
      </div>
      <div className="industry-box">
        <img src={city} alt="aaa" className="city-image" />
        <div className="div-box">
          <span className="industry-name">Industries</span>
        </div>
      </div>
      <div className="icons-main">
        <div className="icons">
          <img
            src={insta}
            alt="aaa"
            className="insta-image"
            height={"40px"}
            width={"40px"}
          />
          <img
            src={fb}
            alt="aaa"
            className="fb-image"
            height={"40px"}
            width={"40px"}
          />
        </div>
        <div>
          <h2>
            Every industry is different. Knowing the unique challenges that each
            industry faces is critical to business success.
          </h2>
          <span>
            You could work with service providers who have a general
            understanding of business and technology – or you can choose a
            partner with intimate knowledge of your industry. Capgemini has
            first-hand experience of partnering with clients across industries
            to help them get the future they want for their business.
          </span>
        </div>
      </div>

      <div>
        <h2>Learn more by industry</h2>
      </div>
      <div className="images-row">
        {industryData.map((data) => {
          return (
            <div key={data.id} className="image-item">
              <img src={data.imageUrl} alt={data.title} className="image" />
              <div className="data-name">
                <p className="industry-name1">{data.industry}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Industries;
