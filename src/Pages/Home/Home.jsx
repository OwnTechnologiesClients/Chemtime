import React from 'react'
import './Home.scss'
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import HeroSection from '../../components/heroSection/HeroSection';
import RegistrationSection from '../../components/registration/RegistrationSection';
import CourseSection from '../../components/courseSection/CourseSection';
import WelcomeSection, { WelcomeSubSection } from '../../components/welcomeSection/WelcomeSection';
import VideoSection from '../../components/videoSection/VideoSection'
import StatisticsSection from '../../components/statistics/StatisticsSection';
import { Header1, Header2 } from '../../components/header/Header';
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon';
import ResultSection from '../../components/resultSection/ResultSection';
import Faq from '../../Components/faq/Faq';
import ChemistryEducationChoices from '../../Components/chemistryEducationChoices/ChemistryEducationChoices';
import CsirNetPreparation from '../../Components/csirNetPreparation/CsirNetPreparation';
import IITJamAndGateCoaching from '../../Components/iiTJamAndGateCoaching/IITJamAndGateCoaching';
import { Helmet } from "react-helmet";


const Home = () => {



    return (
        <div className='home'>
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/src/assets/icons/logo.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://chemtime.co.in/" />

                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://chemtime.co.in/" />
                <meta name="locale" content="en_US" />
                <meta property="og:site_name" content="Chemtime" />
                <meta property="og:image" content="/src/assets/ogImage.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="2694" />
                <meta property="og:image:height" content="1402" />

                <title>ASAP ChemTime</title>


                {/* Breadcrumb json */}
                <script type="application/ld+json">{`
            {
                "@context": "https://schema.org/",
                "@type": "Organization",
                "name": "ASAP Institute",
                "url": "https://chemtime.co.in/",
                "logo": "https://chemtime.co.in/assets/logo-2ae917f9.ico",
                "image": "https://chemtime.co.in/assets/bg2-97888549.jpg",
                "description": "ASAP Institute (Formerly CHEMTIME) offers a variety of courses designed to prepare students for chemistry-related entrance exams. Whether you are aiming to excel in CSIR NET Chemical Sciences, GATE Chemistry, IIT JAM, TIFR Chemistry, or other PhD entrances in Chemistry",
                "address": {
                "@type": "PostalAddress",
                "postalCode": "110016",
                "streetAddress": "28-B/7/1, Near IIT Delhi, Jia Sarai",
                "addressCountry": "IN",
                "addressRegion": "Houz Khas",
                "addressLocality": "IIT Delhi"
                },
                "telephone": "8595764714",
                "sameAs": [
                "Instagram: https://www.instagram.com/asapchemtime/",
                "Youtube: https://www.youtube.com/@ASAPCHEMTIME",
                "Linkedin: https://www.linkedin.com/in/chem-time-9187841b7/",
                "Twitter: https://twitter.com/time_chem"
                ],
                "founder": {
                "@type": "Person",
                "name": "Amit Tiwari Sir, Ajay Sir",
                "image": "https://chemtime.co.in/assets/bg2-97888549.jpg",
                "url": "https://chemtime.co.in/",
                "jobTitle": "Education",
                "brand": {
                "@type": "Brand",
                "logo": {
                "@type": "ImageObject",
                "url": "https://chemtime.co.in/assets/logo-2ae917f9.ico",
                "height": "76.61",
                "width": "84"
                },
                "slogan": "Taiyari Me Hamesha Aage"
                }
                }
   
  }
        `}</script>

            </Helmet>

            <Header1 />
            <Header2 />

            <Navbar />

            <HeroSection />

            <RegistrationSection />

            <WelcomeSection />

            <CourseSection />

            <WelcomeSubSection />

            <ResultSection />

            <StatisticsSection />

            {/* <VideoSection /> */}

            <ChemistryEducationChoices />

            <CsirNetPreparation />

            <IITJamAndGateCoaching />


            <Faq />

            <WhatsappIcon />

            <Footer />
        </div>
    )
}

export default Home