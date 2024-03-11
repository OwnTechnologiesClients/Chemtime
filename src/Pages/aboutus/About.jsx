import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import './About.scss';
import Footer from '../../components/footer/Footer'
import WelcomeSection from '../../components/welcomeSection/WelcomeSection'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import { Helmet } from "react-helmet";


const About = () => {
    return (
        <div className='study-material-page'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ASAP Institute: About Us</title>
                <meta name="description" content="Expert faculty, flexible schedules, and comprehensive syllabus coverage. Enroll in our CSIR NET Chemical Sciences online Coaching for success in chemical sciences" />
                <link rel="canonical" href="https://chemtime.co.in/about" />
                <meta name="keywords" content="Online Classes for CSIR NET Chemical Sciences, CSIR NET Chemical Sciences Online Courses, Online Csir Net Coaching, Csir Net Coaching In Delhi, Csir Net Chemical Science Coaching" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <meta name="robots" content="index,follow" />

                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://chemtime.co.in/" />
                <meta name="locale" content="en_US" />
                <meta property="og:site_name" content="Chemtime" />
                <meta property="og:image" content="/src/assets/ogImage.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="2694" />
                <meta property="og:image:height" content="1402" />
            </Helmet>
            <Header1 />
            <Header2 />
            <Navbar />

            {/* <HeroSection
                imgSrc={bg5}
                hd1={"ABOUT US"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}

            {/* <WelcomeSection /> */}

            <div className="who-we-are"><br></br><br></br>
                <h2 className='under-bar'><span>WHO</span> WE ARE</h2>
                <div className="description">
                    <p>Welcome to ASAP Chemtime, a premier educational institute that provides high-quality coaching classes for competitive exams in Chemistry and Mathematics. Our institute is committed to providing the best education to students and helping them achieve their goals.</p><br />
                    <p>Our vision at ASAP Chemtime is to be the most trusted and respected educational institute for competitive exams in Chemistry and Mathematics. We aim to provide high-quality education that empowers students to achieve their full potential and build successful careers in their chosen fields.</p><br />
                    <p>Our mission at ASAP Chemtime is to provide a comprehensive and personalized learning experience to students who aspire to crack competitive exams in Chemistry and Mathematics. We offer coaching classes, study material, and test series for exams such as:</p><br />

                    <p>• GATE (Graduate Aptitude Test in Engineering)</p>
                    <p>• CSIR-NET (Council of Scientific and Industrial Research — National Eligibility Test)</p>
                    <p>• JRF (Junior Research Fellowship)</p>
                    <p>• IIT-JAM (Indian Institutes of Technology Joint Admission Test for MSc)</p>
                    <p>• CUET-PG (Central University Entrance Test for Post Graduation)</p>
                    <p>• TIFR (Tata Institute of Fundamental Research)</p>
                    <p>• BARC (Bhabha Atomic Research Centre)</p>
                    <p>• UPSC (Union Public Service Commission)</p>
                    <p>• GSI (Geological Survey of India)</p>
                    <p>• State PSC (Public Service Commission)</p>
                    <p>• State SET (State Eligibility Test)</p><br />

                    <p>At ASAP Chemtime, we believe in creating a student-centric learning environment where students can learn at their own pace and receive individual attention from experienced faculty members. We are committed to providing the best education, rigorous practice sessions, and excellent study material to help students succeed in these exams.</p><br />

                    <p>Our motto at ASAP Chemtime is “Empowering your dreams.” We believe that every student has the potential to achieve great things, and we are committed to empowering them with the knowledge and skills required to turn their dreams into reality.</p><br />

                    <p>Join us at ASAP Chemtime and take the first step towards a successful career in Chemistry and Mathematics. We are committed to helping you achieve your goals and empowering your dreams.</p>
                </div>
            </div>
            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default About