import React, { useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import { Header1, Header2 } from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import './PopularVideos.scss';
import Videoimg from '../../assets/video.png'
import { VideoCard } from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'
import WhatsappIcon from '../../components/whatsappIcon/WhatsappIcon'
import { Helmet } from "react-helmet";


const PopularVideos = () => {

    const [activePlaylist, setactivePlaylist] = useState('Quantum Chemistry');
    const [activePlaylistLink, setactivePlaylistLink] = useState('PL2EYCqZ7oXvLKiyVMg6AaWFNYVkmmOEZj');

    let videoLinks = [
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",
        "https://www.youtube.com/embed/vi7mVuQ8-BA?si=cuPpJmw_5UMeQJ3R",
        "https://www.youtube.com/embed/4jjc6yb7af8?si=DYNPueT5B7zjva8Z",

    ]

    let playlists = [
        {
            name: "Chemical Science",
            numberofvideos: 5,
            playlistLink: "https://www.youtube.com/playlist?list=PL2EYCqZ7oXvLKiyVMg6AaWFNYVkmmOEZj"
        },
        {
            name: "Atomic Science",
            numberofvideos: 25,
            playlistLink: "https://www.youtube.com/playlist?list=PL2EYCqZ7oXvLlQZbB8xVJh0mwomAiJeGF"
        },
        {
            name: "Physical Science",
            numberofvideos: 15,
            playlistLink: "https://www.youtube.com/playlist?list=PL2EYCqZ7oXvLKiyVMg6AaWFNYVkmmOEZj"
        },
    ]

    const handleActivePlaylist = (item) => {

        const pllink = item.playlistLink

        const regex = /[?&]list=([^&]+)/;
        const match = pllink.match(regex);

        if (match) {
            const playlistId = match[1];
            setactivePlaylistLink(playlistId);
        } else {
            console.error('Invalid YouTube playlist link');
        }

        setactivePlaylist(item.name);
    }

    return (
        <div className='study-material-page'>

            <Header1 />
            <Header2 />
            <Navbar />

            {/* <HeroSection
                imgSrc={bg5}
                hd1={"POPULAR VIDEOS"}
                hd2={"FOR YOUR BETTER FUTURE"}
            /> */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>ASAP Institute: Study Material</title>
                <meta name="description" content="Expert faculty, flexible schedules, and comprehensive syllabus coverage. Enroll in our CSIR NET Chemical Sciences online Coaching for success in chemical sciences" />
                <link rel="canonical" href="https://chemtime.co.in/videos" />
                <meta name="keywords" content="Online Classes for CSIR NET Chemical Sciences, CSIR NET Chemical Sciences Online Courses, Online Csir Net Coaching, Csir Net Coaching In Delhi, Csir Net Chemical Science Coaching" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <meta name="robots" content="index,follow"/>

                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://chemtime.co.in/" />
                <meta name="locale" content="en_US" />
                <meta property="og:site_name" content="Chemtime" />
                <meta property="og:image" content="/src/assets/ogImage.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="2694" />
                <meta property="og:image:height" content="1402" />
            </Helmet>

            <div className="popular-videos-section">
                <h2 className='under-bar'><span>POPULAR</span> VIDEOS</h2>
                <div className="video-cards">
                    {videoLinks.map((link, index) => {
                        return <VideoCard key={index} videourl={link} />
                    })}
                </div>

                <h2 className='under-bar'><span>ALL PLAYLIST</span> VIDEOS</h2>
                <div className='playlist-cards'>
                    {
                        playlists.map((item, index) => {
                            return <div key={index} className="card"
                                onClick={() => handleActivePlaylist(item)}>
                                <h1>{item.numberofvideos}+ Videos</h1>
                                <iframe width='370' height="220" src={`https://www.youtube.com/embed/videoseries?si=Z02FiG3_6G0HTb2M&amp;list=${activePlaylistLink}`} title="YouTube video player" frameborder="0" ></iframe>
                                <h3>{item.name}</h3>
                            </div>
                        })
                    }
                </div>

                <div className="main-video-section">
                    <h2 className='under-bar'>{activePlaylist}</h2>
                    <iframe height="690" src={`https://www.youtube.com/embed/videoseries?si=Z02FiG3_6G0HTb2M&amp;list=${activePlaylistLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen showinfo={1}></iframe>
                </div>
            </div>

            <WhatsappIcon />
            <Footer />

        </div>
    )
}

export default PopularVideos