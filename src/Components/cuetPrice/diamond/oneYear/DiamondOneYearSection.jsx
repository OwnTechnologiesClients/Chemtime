import React, { useState } from "react";
import "../DiamondSection.scss";
import Tick from "../../../../assets/icons/diamond-tick.png";
import Cross from "../../../../assets/icons/diamond-cross.png";
import { Link } from 'react-router-dom';


const DiamondOneYearSection = () => {
  const [showAll, setShowAll] = useState(false);

  const handleReadMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <main className="diamond-price-container">
      <div className="price-template">
        <section className="head-section">
          <h3 className="text-head">Diamond 1 Year</h3>
        </section>

        <section className="col-section">
          <div className="value">
            <span className="right-value">₹ 35,000</span>
            <span className="left-value">₹ 60,000</span>


          </div>

          <Link to='https://rzp.io/l/JpP35yi' target="_blank">
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
              <img src={Cross} alt="" />
              <p style={{ color: "#628EA4" }}>Pre Recorded Lectures</p>
            </div>
            <p style={{ color: "#628EA4" }} className="inr">₹ 6999</p>
          </div>
          <div className="live">
            <div className="img-text">
              <img src={Cross} alt="" />
              <p style={{ color: "#628EA4" }}>Live Sessions</p>
            </div>
            <p style={{ color: "#628EA4" }}>₹ 9999</p>
          </div>
          <div className="live">
            <div className="img-text">
              <img src={Cross} alt="" />
              <p style={{ color: "#628EA4" }}>Recording of Live Sessions</p>
            </div>
            <p style={{ color: "#628EA4" }}>₹ 7999</p>
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Teacher Handouts</p>
            </div>
            <p className="inr">₹ 999</p>
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p >
                3000+ Questions <br />
                Practice Books Soft Copy
              </p>
            </div>
            <p className="inr">₹ 1999</p>
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
              <p >Unitwise Tests</p>
            </div>
            <p className="inr">
              ₹ 499 Per <br /> 39*1 Tests
            </p>
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p >Final Mock Test</p>
            </div>
            <p className="inr">₹ 499</p>
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
                  <p >
                    Subtopicwise <br />
                    PYQs Books Soft Copy
                  </p>
                </div>
                <p className="inr">₹ 600</p>
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
                  <img src={Tick} alt="" />
                  <p>Theory Booklets</p>
                </div>
                <p>₹ 6000</p>
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
                  <p >General Aptitude </p>
                </div>
                <p className="inr">₹ 999</p>
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p >24x7 Doubt Resolution</p>
                </div>
                <p className="inr">Priceless</p>
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p >Price (Inc. GST)</p>
                </div>
                <p className="inr">18%</p>
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

export default DiamondOneYearSection;
