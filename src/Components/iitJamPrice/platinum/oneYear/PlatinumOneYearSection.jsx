import React, { useState } from "react";
import "../PlatinumSection.scss";
import Tick from "../../../../assets/icons/platinum-tick.png";
import Cross from "../../../../assets/icons/platinum-cross.png";
import { Link } from 'react-router-dom';


const PlatinumOneYearSection = () => {
  const [showAll, setShowAll] = useState(false);

  const handleReadMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <main className="platinum-price-container">
      <div className="price-template">
        <section className="head-section">
          <h3 className="text-head">PLATINUM 1 Year</h3>
        </section>

        <section className="col-section">
          <div className="value">
            <span className="right-value">₹ 14,999</span>
            <span className="left-value">₹ 25,000</span>
          </div>
          <Link to='https://rzp.io/l/qicove1' target="_blank">
            <div className="button-data">
              Enroll Now
            </div>
          </Link>
          <div className="pricing">
            <span className="pri">FEATURES</span>
            <span className="pri">PRICING</span>
          </div>

          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p style={{ color: "#000" }}>Pre Recorded Lectures</p>
            </div>
            <p style={{ color: "#000" }} className="inr">₹ 6999</p>
          </div>
          <div className="live">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Live Sessions</p>
            </div>
            <p>₹ 9999</p>
          </div>
          <div className="live">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Recording of Live Sessions</p>
            </div>
            <p>₹ 7999</p>
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p style={{ color: "#000" }}>Teacher Handouts</p>
            </div>
            <p style={{ color: "#000" }} className="inr">₹ 999</p>
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p style={{ color: "#000" }}>
                3000+ Questions <br />
                Practice Books Soft Copy
              </p>
            </div>
            <p style={{ color: "#000" }} className="inr">₹ 1999</p>
          </div>
          <div className="live">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>
                3000+ Questions <br />
                Practice Books hard Copy
              </p>
            </div>
            <p>₹ 2999</p>
          </div>
          <div className="live">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Subtopicwise Tests</p>
            </div>
            <p>₹ 499</p>
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p style={{ color: "#000" }}>Unitwise Tests</p>
            </div>
            <p style={{ color: "#000" }} className="inr">
              ₹ 499 Per <br /> 39*1 Tests
            </p>
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p style={{ color: "#000" }}>Final Mock Test</p>
            </div>
            <p style={{ color: "#000" }} className="inr">₹ 499</p>
          </div>
          {showAll && (
            <>
              <div className="live">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p>
                    Previous Year <br />
                    Questions Tests
                  </p>
                </div>
                <p>₹ 499</p>
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p style={{ color: "#000" }}>
                    Subtopicwise <br />
                    PYQs Books Soft Copy
                  </p>
                </div>
                <p style={{ color: "#000" }} className="inr">₹ 600</p>
              </div>
              <div className="live">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p>
                    Subtopicwise <br />
                    PYQs Books hard Copy
                  </p>
                </div>
                <p>₹ 1100</p>
              </div>
              <div className="live">
                <div className="img-text">
                  <img src={Cross} alt="" />
                  <p style={{ color: "#6A6E71" }}>Theory Booklets</p>
                </div>
                <p style={{ color: "#6A6E71" }}>₹ 6000</p>
              </div>
              <div className="live">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p>
                    30 Days Crash <br />
                    Course & Test Series
                  </p>
                </div>
                <p>₹ 1100</p>
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p style={{ color: "#000" }}>General Aptitude </p>
                </div>
                <p style={{ color: "#000" }} className="inr">₹ 999</p>
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p style={{ color: "#000" }}>24x7 Doubt Resolution</p>
                </div>
                <p style={{ color: "#000" }} className="inr">Priceless</p>
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p style={{ color: "#000" }}>Price (Inc. GST)</p>
                </div>
                <p style={{ color: "#000" }} className="inr">18%</p>
              </div>
            </>
          )}
          <div className="btns">
            <button className="read-more-btn" onClick={handleReadMoreClick}>
              {showAll ? "Read Less" : "Read More..."}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PlatinumOneYearSection;
