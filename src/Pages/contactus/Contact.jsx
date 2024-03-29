import React, { useRef } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import './Contact.scss';
import Footer from '../../components/footer/Footer'
import locationIcon from '../../assets/icons/location.png'
import callIcon from '../../assets/icons/call.png'
import mailIcon from '../../assets/icons/mail.png'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { Helmet } from "react-helmet";



const Contact = () => {
    const form = useRef();
    const formRef = useRef();

    const name = useRef();
    const course = useRef();
    const email = useRef();
    const number = useRef();
    const message = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //setIsLoading(true);

        if (
            name.current.value &&
            course.current.value &&
            email.current.value &&
            number.current.value &&
            message.current.value
        ) {
            try {
                const response = await axios({
                    method: "post",
                    url: "https://backend.chemtime.co.in/api/student/discussing",
                    data: {
                        name: name.current.value,
                        course: course.current.value,
                        email: email.current.value,
                        contactnumber: number.current.value,
                        message: message.current.value,
                    },
                    headers: {},
                    
                });
                console.log("-------<><><><>  ", response);

                toast.success("Registration successfully!", {
                    position: "bottom-right",
                    autoClose: 2000, // 3 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } catch (error) {
                console.log(error);
                toast.warning("some error occured");
                //setIsLoading(false);

                console.error("Error sending data:", error);
                // Handle error, maybe show an error message to the user
            }
        } else {
            toast.warning("Enter All fields");
            //setIsLoading(false);
            return;
        }
    };


    return (
        <div className='study-material-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            <Helmet>
                <meta charSet="utf-8" />
                <title>ASAP Institute: New Batch</title>
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
                imgSrc={bg5}
                hd1={"CONTACT US"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}

            <div className="contact-page-section">
                <div className="contact-form">
                    <h2 className='under-bar'>Interested in discussing?</h2>
                    <p>Have questions or need assistance? Contact us today. We're here to help and eager to hear from you. Your feedback and inquiries are valuable to us. We look forward to connecting with you!</p>

                    <form className="form-fields" onSubmit={handleSubmit} >
                        <input ref={name} name='name' placeholder='Enter Name' required />
                        <select ref={course} name="course" id="course">
                            <option value="" disabled selected>
                                Select Course
                            </option>
                            <option value="CSIR-NET Chemical Sciences">
                                CSIR-NET Chemical Sciences
                            </option>
                            <option value="GATE Chemistry">GATE Chemistry</option>
                            <option value="IIT-JAM Chemistry">IIT-JAM Chemistry</option>
                            <option value="CUET (PG) Chemistry">CUET (PG) Chemistry</option>
                            <option value="Scholarship Program">Scholarship Program</option>
                        </select>
                        <input ref={email} type="email" name="email" id="email" placeholder='Enter Email' required />
                        <input ref={number} type="number" name="contactnumber" id="contactnumber" placeholder='Enter Contact Number' required />
                        <textarea ref={message} name="message" rows="10" placeholder='Enter Message' required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                    <ToastContainer closeButton={false} />
                </div>
                <div className="contact-cards">
                    <div className="card">
                        <img src={locationIcon} alt="" />
                        <div>
                            <h2>OUR OFFICE LOCATION</h2>
                            <p>28 B/7/1, Lalitaksh Singh Lakra Marg, Jia Sarai, Hauz Khas, New Delhi, Delhi 110016</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={callIcon} alt="" />
                        <div>
                            <h2>OUR CONTACT NUMBER</h2>
                            <p>+91 8595764714 / 7011767872</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={mailIcon} alt="" />
                        <div>
                            <h2>OUR CONTACT EMAIL</h2>
                            <p>chemtimeinstitute@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="google-map-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7593345109117!2d77.18681967533229!3d28.546952675711545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d408a72ee1d%3A0x59c4a843f22c5df3!2sASAP%20Chemtime%20Institute%20-%20Best%20coaching%20for%20csir%20net%20%2C%20gate%2C%20iit%20jam%20chemistry%20in%20Delhi.!5e0!3m2!1sen!2sin!4v1698921931108!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>

            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default Contact