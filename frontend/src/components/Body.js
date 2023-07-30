import React from "react";
import "./body.css";
import camel from "../img/camel.png";

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="left-content">
        <h1>
          Schools Might be <br />
          Closed, Not Your
          <br />
          Curiosity
        </h1>
        <div>
          <p className="learnmore">
            Learn something new about the <br /> world from your favorite travel{" "}
            <br />
            creators.
            <br />
            <br />
            <button className="learn-more-btn">Learn More &#9662;</button>
          </p>
        </div>

        <div className="quote">
          <p className="quotep">HOW PEOPLE LIVES IN POLES</p>
          <p className="quotep">A DAY AT THE SAHARA DESERT</p>
          <hr />
          <p className="quotep">HOBIT, A REAL PLACE</p>
          <p className="quotep">MATADORS & RED CLOTH</p>
        </div>
      </div>
      <div className="body-container">
        <div className="review-section">
          <div className="reviewBody">
            <h3>What's Exciting Here</h3>
            <div className="ratings">
              <span className="start-icon">⭐</span>
              <span className="overall-rating">
                <strong>4.6</strong> <br /> overall rating
              </span>
              <br />
            </div>
            <div className="students">
              <span className="student-icon">🎓</span>
              <span className="student-count">
                <strong> 3M+</strong> <br />
                Students
              </span>
            </div>
            <div className="instructors">
              <span className="instructor-icon">👨‍🏫</span>
              <span className="instructor-count">
                <strong>526</strong> <br /> Instructors
              </span>
            </div>
          </div>
          <div className="camel">
            <img src={camel} alt="" width="500px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
