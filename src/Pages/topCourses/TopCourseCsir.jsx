import React, { useState } from "react";
import "./TopCourses.scss";
import { Header1, Header2 } from "../../components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../Components/footer/Footer";
import CourseLinks from "../../components/courseLinks/CourseLinks";
// import courseImg from "../../assets/bg3.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";



const TopCourseCsir = () => {
  const [activeLink, setActiveLink] = useState("");
  const [coursesOpened, setCoursesOpened] = useState(false);
  const handleLinksOpen = () => {
    setCoursesOpened(!coursesOpened);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const badges = [
    {
      linkName: "CSIR ONLINE",
      link: "/onlinecourses/csir-net"
    },
    {
      linkName: "CSIR OFFLINE",
      link: "/offlinecourses/csir-net"
    },
    {
      linkName: "CSIR TEST SERIES",
      link: "/testseries/csir-net"
    },
    {
      linkName: "CSIR STUDY MATERIAL",
      link: "/studymaterial/csir-net"
    },
  ]

  return (
    <div className="top-courses">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Best Online and Offline Coaching for CSIR-NET/JRF in India - ASAP Institute</title>
        <meta name="description" content="ASAP Institute offers CSIR-NET/JRF Coaching at very affordable prices. Check study materials, video lectures, mock tests from Best CSIR-NET/JRF Coaching in India." />
        <link rel="canonical" href="https://chemtime.co.in/csir-net-jrf" />
        <meta name="keywords" content="CSIR NET Coaching in Delhi, JRF Coaching Institutes, CSIR NET Coaching Centers in India, CSIR NET Mock Tests, CSIR NET Exam Guidance, CSIR NET Coaching Batch Timings, Best Online Coaching For Iit Jam Chemistry, Csir Net Chemical Science Coaching" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Best Online and Offline Coaching for CSIR-NET/JRF in India - ASAP Institute" />
        <meta property="og:description" content="ASAP Institute offers CSIR-NET/JRF Coaching at very affordable prices. Check study materials, video lectures, mock tests from Best CSIR-NET/JRF Coaching in India." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://chemtime.co.in/" />
        <meta name="locale" content="en_US" />
        <meta property="og:site_name" content="Chemtime" />
        <meta property="og:image" content="/src/assets/ogImage.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2694" />
        <meta property="og:image:height" content="1402" />



        {/* Breadcrumb json */}
        <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                  {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://chemtime.co.in/"
                  },
                  {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "CSIR-NET/JRF Coaching",
                      "item": "https://chemtime.co.in/csir-net-jrf"
                  }
              ]
   
  }
                    `}</script>


        {/* FAQ json */}
        <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Is ASAP Institute good for CSIR NET/JRF?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ASAP Institute CSIR NET/JRF Coaching provides the best coaching experience for aspirants preparing for the CSIR NET/JRF exam."
                }
              },{
                "@type": "Question",
                "name": "What is the success rate of JRF?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The success rate is even lower for those who want to be eligible for both JRF and Assistant Professor, which is 0.5%."
                }
              },{
                "@type": "Question",
                "name": "Which is the best online coaching for CSIR NET/JRF?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ASAP Institute offers the best CSIR NET/JRF course at affordable prices."
                }
              }]
            }
                `}</script>
      </Helmet>

      <Header1 />
      <Header2 />

      <Navbar />

      <div className="container-123">
        <CourseLinks
          activeLink={activeLink}
          coursesOpened={coursesOpened}
          handleLinkClick={handleLinkClick}
          handleLinksOpen={handleLinksOpen}
        />
        <div className="top-courses-container">
          {/* <img src={courseImg} alt="" /> */}

          <div className="badges">
            {badges.map((item, index) => {
              return <Link key={index} className="badge" to={item.link}>{item.linkName} </Link>
            })}
          </div>

          <header>
            <h1>CSIR-NET/JRF Coaching at ASAP Institute (formerly CHEMTIME)</h1>
          </header>

          <section id="introduction">
            <p>
              Welcome to ASAP Institute, your ultimate destination for excelling
              in the CSIR-NET/JRF examination. With a legacy of over 5 years as
              CHEMTIME, we bring unparalleled expertise to coach and guide
              aspiring candidates for competitive exams in Chemistry. Our
              CSIR-NET/JRF coaching program is meticulously designed to empower
              students and provide them with a solid foundation for success.
            </p>
          </section>

          <section id="why-asap">
            <h3>Why Choose ASAP Institute for CSIR-NET/JRF Coaching?</h3>
            <ul>
              <li>
                <strong>Experienced Faculty:</strong> Our dedicated team of
                educators, with years of experience, ensures that you receive
                top-notch guidance. Our faculty is committed to providing
                personalized attention and fostering a student-centric learning
                environment.
              </li>
              <li>
                <strong>Comprehensive Syllabus Coverage:</strong> We delve into
                every aspect of the CSIR-NET/JRF syllabus, ensuring an in-depth
                understanding of core concepts.
              </li>
              <li>
                <strong>Effective Teaching Methods:</strong> We employ a variety
                of teaching techniques, including interactive classes,
                problem-solving sessions, and discussions, making the learning
                process engaging and effective.
              </li>
              <li>
                <strong>Regular Practice:</strong> Success in CSIR-NET/JRF
                requires consistent practice. Our program includes a wide range
                of practice materials, including mock tests and a comprehensive
                test series, to help you sharpen your problem-solving skills and
                gain confidence.
              </li>
              <li>
                <strong>Quality Study Materials:</strong> Expertly curated study
                materials complement classroom learning, incorporating
                subtopic-wise Previous Year Questions (PYQs), assignments, and
                theory booklets. These materials enhance clarity on complex
                topics, facilitating effective self-study.
              </li>
              <li>
                <strong>Test Series:</strong> Our comprehensive test series is
                designed to simulate the actual exam environment, allowing you
                to gauge your progress, identify areas for improvement, and
                fine-tune your exam strategy.
              </li>
            </ul>
          </section>

          <section id="deliverables">
            <h3>CSIR-NET/JRF Coaching Deliverables at ASAP Institute:</h3>
            <ol>
              <li>
                <strong>Offline Coaching:</strong> Attend classes at our center
                in Delhi with options for both Regular and Weekend batches.
              </li>
              <li>
                <strong>Online Live Classes:</strong> Join our Regular Morning
                and Evening batches or opt for weekend classes for the
                flexibility to learn from anywhere.
              </li>
              <li>
                <strong>Online Recorded Courses:</strong> Access recorded
                lectures at your convenience, allowing for Self-paced learning.
              </li>
              <li>
                <strong>Study Material:</strong> Our high-quality study
                materials are designed to enhance your understanding of critical
                concepts and aid in effective exam preparation.
              </li>
              <li>
                <strong>Test Series:</strong> Practice extensively with our
                comprehensive test series, preparing yourself thoroughly for the
                CSIR-NET/JRF examination.
              </li>
            </ol>
          </section>

          <section id="enrollment">
            <p>
              Enroll with ASAP Institute to embark on your journey to success in
              CSIR-NET/JRF. Our commitment is to empower your dreams and help
              you achieve your goals in the field of Chemistry.
            </p>
          </section>


          <h2>Frequently Asked Questions (FAQs):</h2>
          <ol>
            <li>
              <h6>1. Is ASAP Institute good for CSIR NET/JRF?</h6>
              <p>ASAP Institute CSIR NET/JRF Coaching provides the best coaching experience for aspirants preparing for the CSIR NET/JRF exam.</p>
            </li>
            <li>
              <h6>2. What is the success rate of JRF?</h6>
              <p>The success rate is even lower for those who want to be eligible for both JRF and Assistant Professor, which is 0.5%.</p>
            </li>
            <li>
              <h6>3. Which is the best online coaching for CSIR NET/JRF?</h6>
              <p>ASAP Institute offers the best CSIR NET/JRF course at affordable prices.</p>
            </li>

          </ol>
        </div>
      </div>

      <WhatsappIcon />

      <Footer />
    </div>
  );
};

export default TopCourseCsir;
