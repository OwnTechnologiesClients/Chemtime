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


const TopCourseIitJam = () => {
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
      linkName: "IIT-JAM ONLINE",
      link: "/onlinecourses/iit-jam"
    },
    {
      linkName: "IIT-JAM OFFLINE",
      link: "/offlinecourses/iit-jam"
    },
    {
      linkName: "IIT-JAM TEST SERIES",
      link: "/testseries/iit-jam"
    },
    {
      linkName: "IIT-JAM STUDY MATERIAL",
      link: "/studymaterial/iit-jam"
    },
  ]

  return (
    <div className="top-courses">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Top Best IIt Jam Chemistry Coaching Jia Sarai, Delhi - ASAP Institute</title>
        <meta name="description" content="Are you looking for the best coaching for IIT JAM chemistry in Jia Sarai, Delhi? We have the best solution for you all who want to join IIT JAM chemistry coaching." />
        <link rel="canonical" href="https://chemtime.co.in/iit-jam" />
        <meta name="keywords" content="IIT-JAM Chemistry Coaching, Best IIT-JAM Chemistry Coaching in Delhi, IIT-JAM Chemistry Classes, Top Coaching Institutes for IIT-JAM Chemistry, Coaching Centers for IIT-JAM Chemistry, IIT-JAM Chemistry Preparation in Delhi." />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Top Best IIt Jam Chemistry Coaching Jia Sarai, Delhi - ASAP Institute" />
        <meta property="og:description" content="Are you looking for the best coaching for IIT JAM chemistry in Jia Sarai, Delhi? We have the best solution for you all who want to join IIT JAM chemistry coaching." />
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
                      "name": "IIT-JAM Chemistry Coaching",
                      "item": "https://chemtime.co.in/iit-jam"
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
                "name": "Which coaching is best for IIT JAM Chemistry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ASAP Institute is your best choice for all scholar students. ASAP Institute provides IIT JAM chemistry coaching which is a well-known exam among all national level entrance exams in India for the aspirants who are willing to pursue post-graduation."
                }
              },{
                "@type": "Question",
                "name": "Is ASAP Institute good for IIT JAM Chemistry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ASAP Institute IIT JAM Online Courses are an excellent choice for students preparing for the IIT JAM Chemistry Exam 2024."
                }
              },{
                "@type": "Question",
                "name": "Is IIT JAM Chemistry hard?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The IIT JAM 2024 Chemistry exam is rated as Moderate to Difficult. Students who took the exam suggest that a good attempt would be around 25-30 questions with 90% accuracy."
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
            <h1>
              Best IIT-JAM Chemistry Coaching in Jia Sarai, Delhi - ASAP Institute
            </h1>
          </header>

          <section id="introduction">
            <p>
              Welcome to ASAP Institute, your trusted partner for mastering the
              Joint Admission Test for M.Sc. (IIT-JAM) Chemistry. With over 5
              years of experience as CHEMTIME, we take pride in being the top
              IIT-JAM coaching institute in Jia Sarai, Delhi.
            </p>
          </section>

          <section id="why-asap">
            <h2>Why Choose ASAP Institute for IIT-JAM Chemistry Coaching?</h2>
            <ul>
              <li>
                <strong>Best Coaching in India:</strong> Recognized as the
                premier IIT-JAM coaching institute located in Jia Sarai and Hauz
                Khas, our legacy of excellence sets us apart.
              </li>
              <li>
                <strong>Online Coaching Excellence:</strong> Explore the
                flexibility of the best online coaching for IIT-JAM Chemistry.
                Our virtual classes ensure that quality education is accessible
                from anywhere.
              </li>
              <li>
                <strong>Expert Faculty for IIT-JAM Chemistry:</strong> Our
                experienced faculty, well-versed in the IIT-JAM syllabus,
                employs effective teaching methods to make learning engaging and
                productive.
              </li>
            </ul>
          </section>

          <section id="key-features">
            <h3>Key Features of Our IIT-JAM Chemistry Coaching:</h3>
            <ul>
              <li>
                <strong>Comprehensive Study Materials:</strong> Access
                meticulously curated study materials designed to enhance your
                understanding of complex topics, complementing classroom
                learning.
              </li>
              <li>
                <strong>Mock Tests and Practice Sessions:</strong> Hone your
                problem-solving skills with our mock tests and practice
                sessions, replicating the real exam environment for optimal
                preparedness.
              </li>
              <li>
                <strong>Online Classes and Test Series:</strong> Whether
                attending offline at our center in Delhi or joining our online
                classes, benefit from a robust test series and interactive
                sessions for effective learning.
              </li>
            </ul>
          </section>

          <section id="coaching-products">
            <h3>Coaching Products at ASAP Institute:</h3>
            <ol>
              <li>
                <strong>Offline Coaching:</strong> Join our regular or weekend
                batches at our center in Jia Sarai, Delhi, for an immersive
                learning experience.
              </li>
              <li>
                <strong>Online Live Classes:</strong> Experience the best online
                coaching for IIT-JAM Chemistry, featuring regular morning
                batches, evening batches, and weekend batches for flexible
                learning.
              </li>
              <li>
                <strong>Online Recorded Courses:</strong> Access our recorded
                courses for self-paced learning, offering flexibility without
                compromising on quality.
              </li>
              <li>
                <strong>Study Material:</strong> Our comprehensive study
                material includes subtopic-wise PYQs, assignments, and theory
                booklets to support your preparation.
              </li>
              <li>
                <strong>Test Series:</strong> Hone your exam readiness with our
                meticulously designed test series, providing a thorough
                evaluation of your progress.
              </li>
            </ol>
          </section>

          <section id="admission-process">
            <h3>Admission Process and Fees:</h3>
            <p>
              Enrolling in our IIT-JAM Chemistry coaching is a seamless process.
              Visit our institute in Jia Sarai or Hauz Khas for in-person
              registration or register online.
            </p>
          </section>

          <section id="iit-jam-chemistry">
            <h3>IIT-JAM Chemistry - Your Gateway to Postgraduate Success:</h3>
            <p>
              ASAP Institute, formerly CHEMTIME, invites you to embark on your
              IIT-JAM Chemistry preparation journey with confidence and
              determination. Join us, and let's achieve success together!
            </p>
          </section>



          <h2>Frequently Asked Questions (FAQs):</h2>
          <ol>
            <li>
              <h6>1. Which coaching is best for IIT JAM Chemistry?</h6>
              <p>ASAP Institute is your best choice for all scholar students. ASAP Institute provides IIT JAM chemistry coaching which is a well-known exam among all national level entrance exams in India for the aspirants who are willing to pursue post-graduation.</p>
            </li>
            <li>
              <h6>2. Is ASAP Institute good for IIT JAM Chemistry?</h6>
              <p>ASAP Institute IIT JAM Online Courses are an excellent choice for students preparing for the IIT JAM Chemistry Exam 2024.</p>
            </li>
            <li>
              <h6>3. Is IIT JAM Chemistry hard?</h6>
              <p>The IIT JAM 2024 Chemistry exam is rated as Moderate to Difficult. Students who took the exam suggest that a good attempt would be around 25-30 questions with 90% accuracy.</p>
            </li>

          </ol>
        </div>

      </div>

      <WhatsappIcon />

      <Footer />
    </div>
  );
};

export default TopCourseIitJam;
