import React from 'react'
import './CourseDetail.scss'
import { Helmet } from "react-helmet";

const CourseDetail = ({ imgSrc, heading1, detailData }) => {
    return (
        <div className='course-detail'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CSIR NET Chemical Science Study Materials: Check Subject Wise, Download PDF</title>
                <meta name="description" content="Get CSIR NET Chemical Science study material PDFs for free. Download comprehensive notes, practice papers, and more to ace your exam preparation." />
                <link rel="canonical" href={"https://chemtime.co.in/studymaterial/" + detailData[heading1]?.url} />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content="Online Classes for CSIR NET Chemical Sciences, CSIR NET Chemical Sciences Online Courses, Online Csir Net Coaching, Csir Net Coaching In Delhi, Csir Net Chemical Science Coaching" />

                <meta property="og:title" content="CSIR NET Chemical Science Study Materials: Check Subject Wise, Download PDF" />
                <meta property="og:description" content="Get CSIR NET Chemical Science study material PDFs for free. Download comprehensive notes, practice papers, and more to ace your exam preparation." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://chemtime.co.in/" />
                <meta name="locale" content="en_US" />
                <meta property="og:site_name" content="Chemtime" />
                <meta property="og:image" content="/src/assets/ogImage.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="2694" />
                <meta property="og:image:height" content="1402" />
            </Helmet>
            <div className="course-img">
                <img src={detailData[heading1].image} alt="" />
            </div>
            <div className="content">
                <h2>{heading1}</h2>
                {detailData[heading1].courseLines.map((item, index) => {
                    return <p key={index} >{item}</p>
                })}
            </div>
        </div>
    )
}

export default CourseDetail