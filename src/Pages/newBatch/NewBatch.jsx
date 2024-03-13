import React, { useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import '../testSeries/TestSeries.scss';
import CourseLinks from '../../components/courseLinks/CourseLinks'
import TestSeriesTable from '../../components/courseTable/TestSeriesTable'
import Footer from '../../components/footer/Footer'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import CourseTable from '../../components/courseTable/CourseTable';
import { Link, useNavigate } from 'react-router-dom';
import './NewBatch.scss'
import { Helmet } from "react-helmet";
import NewBatchTabs from './newBatchPrice/tabs/NewBatchTabs';


const NewBatch = () => {

    const tableFields = {
        "offline": [
            [
                "CSIR NET + GATE (Chemical Science)",
                "6 Months",
                "Regular",
                29000
            ],
            [
                "CSIR NET + GATE (Chemical Science)",
                "1 Year",
                "Weekend",
                35000
            ],
            [
                "CUET",
                "6 Months",
                "Regular",
                12000
            ],
            [
                "GATE",
                "6 Months",
                "Regular",
                29000
            ],
            [
                "GATE",
                "1 Year",
                "Weekend",
                35000
            ],
            [
                "IIT-JAM",
                "6 Months",
                "Regular",
                25000
            ],
            [
                "IIT-JAM",
                "1 Year",
                "Weekend",
                25000
            ],

            [
                "IIT-JAM",
                "2 Year",
                "Weekend",
                30000
            ]
        ],
        "online": [
            [
                "CSIR NET (Chemical Science)",
                "6 Months",
                "Regular",
                17700
            ],
            [
                "CSIR NET (Chemical Science)",
                "1 Year",
                "Weekend",
                20000
            ],
            [
                "CSIR NET (Chemical Science)",
                "1 Year",
                "Regular",
                20000
            ],
            [
                "CUET",
                "6 Months",
                "Regular",
                8000
            ],
            [
                "GATE",
                "6 Months",
                "Regular",
                17700
            ],
            [
                "GATE",
                "1 Year",
                "Weekend",
                20000
            ],
            [
                "GATE",
                "1 Year",
                "Regular",
                20000
            ],
            [
                "IIT-JAM",
                "6 Months",
                "Regular",
                12000
            ],
            [
                "IIT-JAM",
                "1 Year",
                "Weekend",
                12000
            ],

            [
                "IIT-JAM",
                "2 Year",
                "Weekend",
                15000
            ],
        ],
        "recorded": [
            [
                "IIT-JAM",
                "6 Months",
                "Recorded",
                2499
            ],
            [
                "IIT-JAM",
                "1 Year",
                "Recorded",
                3999
            ],
            [
                "IIT-JAM",
                "2 Year",
                "Recorded",
                4999
            ],
            [
                "GATE",
                "6 Months",
                "Recorded",
                4999
            ],
            [
                "GATE",
                "1 Year",
                "Recorded",
                8499
            ],
            [
                "GATE",
                "2 Year",
                "Recorded",
                10999
            ],
            [
                "CUET",
                "6 Months",
                "Recorded",
                2499
            ],
            [
                "CUET",
                "1 Year",
                "Recorded",
                3999
            ],
            [
                "CUET",
                "2 Year",
                "Recorded",
                4999
            ],
            [
                "CSIR NET (Chemical Science)",
                "6 Months",
                "Recorded",
                4999
            ],
            [
                "CSIR NET (Chemical Science)",
                "1 Year",
                "Recorded",
                8499
            ],
            [
                "CSIR NET (Chemical Science)",
                "2 Year",
                "Recorded",
                10999
            ]
        ]
    }


    const [isPaused, setPaused] = useState(false);

    const handleMouseOver = () => {
        setPaused(true);
    };

    const handleMouseOut = () => {
        setPaused(false);
    };

    const newsAndUpdates = [
        {
            url: "/testseries/csir-net",
            content: "Test Series for CSIR NET Dec 2023 is now live. Sharpen your skills and boost your preparation by joining now!            "
        },
        {
            url: "/testseries/gate",
            content: "Test Series for GATE 2024 is live. Don't miss this opportunity to practice and enhance your exam readiness. Join now!            "
        },
        {
            url: "/testseries/iit-jam",
            content: "Test Series for IIT JAM 2024 is now available. Enroll today to assess your preparation and improve your performance!"
        },
        {
            url: "/offlinecourses/csir-net",
            content: "CSIR NET June 2024 Offline Batch is set to commence on January 5, 2023. Register now for in-person classes and personalized guidance."
        },
        {
            url: "/onlinecourses/csir-net",
            content: "CSIR NET June 2024 Online Batch starts on January 5, 2023. Secure your place for online learning with our experienced faculty."
        },
        {
            url: "/offlinecourses/gate",
            content: "GATE 2025 Offline Batch begins on February 18, 2023. Register early to reserve your spot for comprehensive offline coaching."
        },
        {
            url: "/onlinecourses/gate",
            content: "GATE 2025 Online Batch also starts on February 18, 2023. Join our online classes for flexible and effective exam preparation."
        },
        {
            url: "/offlinecourses/iit-jam",
            content: "IIT JAM 2025 Offline Batch is scheduled to begin on February 18, 2023. Registration is open for in-person coaching sessions."
        },
        {
            url: "/onlinecourses/iit-jam",
            content: "IIT JAM 2025 Online Batch starts on February 18, 2023. Register now for our online classes and access quality education from the comfort of your home."
        },

    ]

    const notifications = [
        {
            url: "/testseries",
            content: "Test Series"
        },
        {
            url: "/studymaterial",
            content: "Study material"
        },
        {
            url: "/new-batch",
            content: "New Batches"
        },
        {
            url: "/student-login",
            content: "Student Login"
        },
        {
            url: "/result",
            content: "Results"
        },
        {
            url: "https://blog.chemtime.co.in/",
            content: "Blogs"
        },
        {
            url: "/videos",
            content: "Popular Videos"
        },

    ]
    return (
        <div className='test-series-page new-batch-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            <Helmet>
                <meta charSet="utf-8" />
                <title>ASAP Institute: Contact Us</title>
                <meta name="description" content="Expert faculty, flexible schedules, and comprehensive syllabus coverage. Enroll in our CSIR NET Chemical Sciences online Coaching for success in chemical sciences" />
                <link rel="canonical" href="https://chemtime.co.in/contact" />
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

            {/* <HeroSection
                imgSrc={bg3}
                hd1={"TEST SERIES"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}
            <div className="test-series-section">
                {/* <CourseLinks 
                    activeLink={activeLink}
                    handleLinkClick={handleLinkClick}
                /> */}
                <div className="test-series-section-right-nav">

                    <NewBatchTabs />
                </div>

                <div className="marqueess">
                    <div className='notification-panel'>

                        <h2 >NOTICE</h2>

                        <div className="marquee-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div className={`marquee ${isPaused ? 'paused' : ''}`}>
                                {
                                    newsAndUpdates.map((item, index) => {
                                        return <div className='notification' key={index}>
                                            <Link to={item.url}> <div>⚫</div> <div className='content'>{item.content}</div></Link>
                                        </div>
                                    })
                                }
                            </div>

                        </div>
                    </div>

                    <div className='quick-panel'>

                        <h2 >QUICK LINKS</h2>

                        <div className="quick-link-marquee-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div>
                                {
                                    notifications.map((item, index) => {
                                        return <div className='notification' key={index}>
                                            <Link to={item.url}> <div>➠</div> <div className='content'>{item.content}</div></Link>
                                        </div>
                                    })
                                }
                            </div>

                        </div>
                    </div>

                </div>



            </div>
            <WhatsappIcon />
            <Footer />
        </div>
    )
}

export default NewBatch