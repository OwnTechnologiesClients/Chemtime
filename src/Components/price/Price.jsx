import React from "react";
import "./price.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import BronzeSection from "./bronze/BronzeSection";
import Gold from "./gold/GoldSection";
import Platinum from "./platinum/PlatinumSection";
import Silver from "./silver/SilverSection";

const Price = () => {
  return (
    <div>
      <Navbar />

      <div className="all-section">
        <div className="first">
          <BronzeSection />
          <Gold />
        </div>
        <div className="second">
          <Platinum />
          <Silver />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Price;
