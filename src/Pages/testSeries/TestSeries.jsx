import React, { useEffect, useState } from "react";
import Navbar from "../../Components/navbar/Navbar";
import { Header1, Header2 } from "../../components/header/Header";
import "./TestSeries.scss";
import CourseLinks from "../../components/courseLinks/CourseLinks";
import courseDetailImg from "../../assets/courseDetail.png";
import TestSeriesTable from "../../components/courseTable/TestSeriesTable";
import Footer from "../../Components/footer/Footer";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import testSeriesData from "./TestSeriesData.json";
import TestSeriesCourseDetail from "../../components/courseDetail/TestSeriesCourseDetail";
import { useNavigate, useParams } from "react-router-dom";
import TestSeriesTabs from "./testSeriesPrice/tabs/TestSeriesTabs";


const TestSeries = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("CSIR-NET Chemical Sciences");
  const [activeUrl, setActiveUrl] = useState("");
  const [coursesOpened, setCoursesOpened] = useState(false);
  const handleLinksOpen = () => {
    setCoursesOpened(!coursesOpened);
  };
  const handleLinkClick = (link) => {
    setActiveUrl(link);
  };

  const modeOfTable = {
    "CSIR-NET Chemical Sciences": "Test Series",
    "GATE Chemistry": "Test Series for GATE 2024",
    "IIT-JAM Chemistry": "Test Series for IIT-JAM 2024",
    "BARC (Chemistry)": "Test Series for BARC",
    "TIFR (Chemistry)": "Test Series for TIFR",
  };

  const tableFields = {
    "CSIR-NET Chemical Sciences": [
      ["Inorganic Chemistry + Full Length Tests", "d.pdf", "1 Year", 499],
      ["Organic Chemistry + Full Length Tests", "d.pdf", "2 Years", 499],
      ["Physical Chemistry + Full Length Tests", "d.pdf", "6 Months", 499],
      ["General Aptitude + Full Length Tests", "d.pdf", "1 Year", 399],
      ["Full Length Tests", "d.pdf", "1 Year", 299],
      ["CSIR NET Complete Test Series", "d.pdf", "1 Year", 1499],
      ["CSIR NET & GATE Complete Test Series", "d.pdf", "1 Year", 2499],
    ],
    "GATE Chemistry": [
      ["Inorganic Chemistry + Full Length Tests", "d.pdf", "1 Year", 499],
      ["Organic Chemistry + Full Length Tests", "d.pdf", "2 Years", 499],
      ["Physical Chemistry + Full Length Tests", "d.pdf", "6 Months", 499],
      ["General Aptitude + Full Length Tests", "d.pdf", "1 Year", 399],
      ["Full Length Tests", "d.pdf", "1 Year", 299],
      ["GATE Complete Test Series", "d.pdf", "1 Year", 1499],
      ["CSIR NET & GATE Complete Test Series", "d.pdf", "1 Year", 2499],
    ],
    "IIT-JAM Chemistry": [
      ["Inorganic Chemistry + Full Length Tests", "d.pdf", "1 Year", 399],
      ["Organic Chemistry + Full Length Tests", "d.pdf", "2 Years", 399],
      ["Physical Chemistry + Full Length Tests", "d.pdf", "6 Months", 399],
      ["Full Length Tests", "d.pdf", "1 Year", 199],
      ["IIT JAM Complete Test Series", "d.pdf", "1 Year", 499],
    ],
    "BARC (Chemistry)": [
      ["BARC Complete Test Series", "d.pdf", "1 Year", 1099],
    ],
    "TIFR (Chemistry)": [["TIDR Complete Test Series", "d.pdf", "1 Year", 499]],
  };

  useEffect(() => {
    if (id === "csir-net") {
      setActiveUrl("/testseries/CSIR-NET Chemical Sciences");
      setActiveLink("CSIR-NET Chemical Sciences");
    } else if (id === "gate") {
      setActiveUrl("/testseries/GATE Chemistry");
      setActiveLink("GATE Chemistry");
    } else if (id === "iit-jam") {
      setActiveUrl("/testseries/IIT-JAM Chemistry");
      setActiveLink("IIT-JAM Chemistry");
    } else if (id === "barc") {
      setActiveUrl("/testseries/BARC (Chemistry)");
      setActiveLink("BARC (Chemistry)");
    } else if (id === "tifr") {
      setActiveUrl("/testseries/TIFR (Chemistry)");
      setActiveLink("TIFR (Chemistry)");
    } else {
      navigate("/");
    }
  }, [id]);

  return (
    <div className="test-series-page">
      <Header1 />
      <Header2 />
      <Navbar />

      {/* <HeroSection
                imgSrc={bg3}
                hd1={"TEST SERIES"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}
      <div className="test-series-section">
        <CourseLinks
          activeLink={activeUrl}
          coursesOpened={coursesOpened}
          handleLinkClick={handleLinkClick}
          handleLinksOpen={handleLinksOpen}
        />
        <div className="test-series-section-right-nav">
          <TestSeriesCourseDetail
            imgSrc={courseDetailImg}
            heading1={activeLink}
            detailData={testSeriesData}
          />

          <div className="course-idea">
            {/* <h2 className="under-bar">CourseIdea</h2> */}

            <TestSeriesTabs />




            {/* <TestSeriesTable
              mode={modeOfTable[activeLink]}
              tableFields={tableFields[activeLink]}
            /> */}
            <p>
              Note: 18% GST is applicable extra on above fees as per govt.
              norms.
            </p>{" "}
            <br></br>
            <br></br>



            <h3>Registration Procedure:</h3>
            <p>To enroll in our CSIR NET Chemical Sciences offline course, you can follow these simple steps:</p>
            <ul>
              <li> • <strong>Online Registration:</strong> Click on the "Enroll Now" link provided on our website to register online.</li>
              <li> • <strong>In-Person Registration:</strong> You may also visit the ASAP Institute office in Jia Sarai, Delhi. Fill out a detailed application form and submit it along with two passport-size photographs and a self-attested copy of your identity proof (Aadhar Card or Voter ID Card).</li>
              <li> • <strong>Fee Payment:</strong> Deposit the course fee in any branch of HDFC Bank from anywhere in India by cash deposit or net banking in favor of " <h5>ASAP CHEM TIME PVT. LTD.</h5> " in the account number: <h5>50200066588261</h5> Use NEFT/IFSC: <h5>HDFC0000032</h5> and the branch is located in <h5>SDA, New Delhi.</h5></li>
            </ul>

            <p>Join ASAP Institute's CSIR NET Chemical Sciences offline course to embark on your journey to success in the field of chemical sciences.</p>


            <h3>Contact Information:</h3>
            <div className="phone-number">
              <ul>
                <li> • <strong>Phone:</strong> <strong>8595764714, 7011767872, 9026800325</strong></li>
              </ul>
            </div>

            <h2>Frequently Asked Questions (FAQs):</h2>
            <ol>
              <li>
                <strong>1. Where can I find the CSIR UGC NET Test Series?</strong>
                <p>The candidates can find the CSIR NET Test Series on chemtime Website</p>
              </li>
              <li>
                <strong>2. What are the tests included in the CSIR NET test series?</strong>
                <p>Subject-wise tests, Full-length tests, and previous year papers are included in the CSIR NET test series.</p>
              </li>
              <li>
                <strong>3. Do ASAP institute also provide solutions for the questions?</strong>
                <p>Yes, detailed solutions will be available to you after you finish the test. You will be able to access these solutions anytime after you have taken the test.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default TestSeries;
