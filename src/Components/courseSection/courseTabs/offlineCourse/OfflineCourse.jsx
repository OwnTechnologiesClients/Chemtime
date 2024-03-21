import React from 'react'
import "./OfflineCourse.scss";
import img1 from '../../../../assets/homepage/course/c1.jpg'
import img2 from '../../../../assets/homepage/course/c2.jpg'
import img3 from '../../../../assets/homepage/course/c3.jpg'
import img4 from '../../../../assets/homepage/course/c4.jpg'
import { CourseCard } from '../../../cardsOffline/CardsOffline';
import { Link } from 'react-router-dom';



const OfflineCourse = () => {

    const courseCardDetails = [
        {
            courseImg: img2,
            cardHeading: "CSIR-NET Chemical Sciences",
            cardDetail: "Welcome to ASAP Institute's CSIR NET Chemical Sciences Online Batches, designed to pave your way to success in the CSIR NET Chemical Sciences examination.",
            price: 299,
            navigation: "/offlinecourses/csir-net"
        },
        {
            courseImg: img1,
            cardHeading: "GATE Chemistry",
            cardDetail: "Whether you are a working professional, a student, or someone seeking to master GATE Chemistry, our courses are designed to meet your specific needs.",
            price: 299,
            navigation: "/offlinecourses/gate"
        },
        {
            courseImg: img4,
            cardHeading: "IIT-JAM Chemistry",
            cardDetail: "Welcome to the IIT-JAM Chemistry Online Batch by ASAP Institute, a transformative voyage towards conquering the IIT-JAM Chemistry examination.",
            price: 299,
            navigation: "/offlinecourses/iit-jam"
        },
        {
            courseImg: img3,
            cardHeading: "CUET (PG) Chemistry",
            cardDetail: "Whether you are a working professional, a dedicated student, or someone looking to conquer the CUET(PG) Chemistry exam, our courses are tailored to meet your unique needs.",
            price: 299,
            navigation: "/offlinecourses/cuet"

        },


    ]

    return (

        <div className='offline-courses-container'>


            <div className="course-button">
                {courseCardDetails.map((item, index) => {
                    return <Link key={index} className="course-button" to={item.navigation}>
                        {item.cardHeading}
                    </Link>
                })}
            </div>


            <div className='parent-card'>
                <div className="cards">


                    {courseCardDetails.map((item, index) => {
                        return <CourseCard
                            key={index}
                            imgSrc={item.courseImg}
                            price={item.price}
                            homeCourseHeading={item.cardHeading}
                            homeCourseDetail={item.cardDetail}
                            pageNavigate={item.navigation} />
                    })}

                </div>
            </div>
        </div>


    )
}

export default OfflineCourse