import React, { useState } from "react";
import "../silver/SilverSection.scss";
import Tick from "../../../assets/icons/silver-tick.png";
import Cross from "../../../assets/icons/silver-cross.png";

const SilverSection = () => {
  const [showAll, setShowAll] = useState(false);

  const handleReadMoreClick = () => {
    setShowAll(!showAll);
  };

  return (
    <main className="silver-price-container">
      <div className="price-template">
        <section className="silver-head-section">
          <h3 className="text-head">SILVER</h3>
        </section>

        <section className="col-section">
          <div className="value">
            <span className="right-value">₹ 6,999</span>
            <span className="left-value">₹ 23,539</span>
          </div>

          <div className="pricing">
            <span className="pri">FEATURES</span>
            <span className="pri">PRICING</span>
          </div>

          <div className="tags">
            <div className="img-text">
              <img src={Cross} alt="" />
              <p style={{ color: "#A1A6AA" }}>Pre Recorded Lectures</p>
            </div>
            <p style={{ color: "#A1A6AA" }} className="inr">₹ 6999</p>
          </div>
          <div className="live">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p style={{ color: "#6A6E71" }}>Live Sessions</p>
            </div>
            <p style={{ color: "#6A6E71" }}>₹ 9999</p>
          </div>
          <div className="live">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p style={{ color: "#6A6E71" }}>Recording of Live Sessions</p>
            </div>
            <p style={{ color: "#6A6E71" }}>₹ 7999</p>
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
              <p>
                3000+ Questions <br />
                Practice Books Soft Copy
              </p>
            </div>
            <p className="inr">₹ 1999</p>
          </div>
          <div className="live">
            <div className="img-text">
              <img src={Cross} alt="" />
              <p>
                3000+ Questions <br />
                Practice Books hard Copy
              </p>
            </div>
            <p>₹ 2999</p>
          </div>
          <div className="live">
            <div className="img-text">
              <img src={Cross} alt="" />
              <p>Subtopicwise Tests</p>
            </div>
            <p>₹ 499</p>
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Unitwise Tests</p>
            </div>
            <p className="inr">
              ₹ 499 Per <br /> 39*1 Tests
            </p>
          </div>
          <div className="tags">
            <div className="img-text">
              <img src={Tick} alt="" />
              <p>Final Mock Test</p>
            </div>
            <p className="inr">₹ 499</p>
          </div>
          {showAll && (
            <>
              <div className="live">
                <div className="img-text">
                  <img src={Cross} alt="" />
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
                  <p>
                    Subtopicwise <br />
                    PYQs Books Soft Copy
                  </p>
                </div>
                <p className="inr">₹ 600</p>
              </div>
              <div className="live">
                <div className="img-text">
                  <img src={Cross} alt="" />
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
                  <p>Theory Booklets</p>
                </div>
                <p>₹ 6000</p>
              </div>
              <div className="live">
                <div className="img-text">
                  <img src={Cross} alt="" />
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
                  <p>General Aptitude </p>
                </div>
                <p className="inr">₹ 999</p>
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p>24x7 Doubt Resolution</p>
                </div>
                <p className="inr">Priceless</p>
              </div>
              <div className="tags">
                <div className="img-text">
                  <img src={Tick} alt="" />
                  <p>Price (Inc. GST)</p>
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

export default SilverSection;
