import React from 'react'
import "./OneYearPrice.scss";
import { Link, useNavigate } from 'react-router-dom';

import BronzeSection from '../../newBatchPrice/bronze/BronzeSection'
import BronzeOneYearSection from '../../newBatchPrice/bronze/oneYear/BronzeOneYearSection'
import SilverSection from '../../newBatchPrice/silver/SilverSection';
import GoldSection from '../../newBatchPrice/gold/GoldSection';
import PlatinumSection from '../../newBatchPrice/platinum/PlatinumSection';
import SilverOneYearSection from '../../newBatchPrice/silver/oneYear/SilverOneYearSection';
import GoldOneYearSection from '../../newBatchPrice/gold/oneYear/GoldOneYearSection';
import PlatinumOneYearSection from '../../newBatchPrice/platinum/oneYear/PlatinumOneYearSection';

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

const OneYearPrice = () => {
    return (



        <div className="new-batch-pricing-row">


            <div className="marquee-container">
                <div>
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

    )
}

export default OneYearPrice