import React from "react";

function FeatureShowcase({ imgURL, title, body, linkURL, scrollIntoView }) {
  const handleClick = (e) => {
    if (scrollIntoView) {
      e.preventDefault(); // Prevent default link behavior if scrollIntoView is true
      const element = document.getElementById(scrollIntoView);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div className="landing-feature">
      <div className="landing-feature-wrapper">
        <img src={imgURL} alt="My Image" />
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{body}</p>
      </div>
      {linkURL ? (
        <a href={linkURL}>
          <img src={require("../img/icon_right.png")} alt="" />
          <span>Learn more</span>
        </a>
      ) : (
        <a  >
          <img src={require("../img/icon_right.png")} alt="" />
          <span>Learn more</span>
        </a>
      )}
    </div>
  );
}

export default FeatureShowcase;
