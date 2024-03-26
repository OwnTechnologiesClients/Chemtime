import React from 'react'
import './CourseDetail.scss'
import { Helmet } from "react-helmet";

const TestSeriesCourseDetail = ({ imgSrc, heading1, detailData }) => {
    return (
        <div className='course-detail'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Best Online Test Series For CSIR Net Chemical Science | ASAP Institute</title>
                <meta name="description" content="Prepare for CSIR NET Chemical Science with the best online test series from ASAP Institute. Sharpen your skills, track progress, and ace the exam confidently." />
                <link rel="canonical" href={"https://chemtime.co.in/testseries/" + detailData[heading1]?.url} />
                <meta name="keywords" content="Online Classes for CSIR NET Chemical Sciences, CSIR NET Chemical Sciences Online Courses, Online Csir Net Coaching, Csir Net Coaching In Delhi, Csir Net Chemical Science Coaching" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <meta name="robots" content="index,follow" />

                <meta property="og:title" content="Best Online Test Series For CSIR Net Chemical Science | ASAP Institute" />
                <meta property="og:description" content="Prepare for CSIR NET Chemical Science with the best online test series from ASAP Institute. Sharpen your skills, track progress, and ace the exam confidently." />
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
                        "name": "CSIR NET Test Series",
                        "item": "https://chemtime.co.in/testseries/csir-net"
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
                        "name": "Where can I find the CSIR UGC NET Test Series?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The candidates can find the CSIR NET Test Series on chemtime Website,"
                        }
                        },{
                        "@type": "Question",
                        "name": "What are the tests included in the CSIR NET test series?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Subject-wise tests, Full-length tests, and previous year papers are included in the CSIR NET test series."
                        }
                        },{
                        "@type": "Question",
                        "name": "Do ASAP institute also provide solutions for the questions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, detailed solutions will be available to you after you finish the test. You will be able to access these solutions anytime after you have taken the test."
                        }
                        }]
                    }
                `}</script>

            </Helmet>

            <div className="course-img">
                <img src={detailData[heading1].image} alt="" />
            </div>
            <div className="content">
                <h2>{heading1}</h2>

                <p>{detailData[heading1]?.coursedHeading}</p>
                <p style={{ color: "#000" }}>Enroll Today and Embrace Success in {heading1.replace('(', '').replace(')', '')}!</p>

                <div className="why-join-container">
                    <h3>Why Opt for ASAP Institute's {heading1.replace('(', '').replace(')', '')} Test Series?</h3>
                    {Object.keys(detailData[heading1].courseLines).map((item, index) => {
                        return <div key={index} className='why-join'>
                            <p><strong>{item}</strong>:  {detailData[heading1].courseLines[item]}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TestSeriesCourseDetail