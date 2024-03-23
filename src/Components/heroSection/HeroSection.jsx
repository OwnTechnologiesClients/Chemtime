import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import imgSrc1 from '../../assets/bg1.jpg'
import imgSrc2 from '../../assets/bg2.jpg'
import imgSrc3 from '../../assets/bg3.jpg'
import imgSrc4 from '../../assets/bg4.jpg'
// import imgSrc3 from '../../assets/bg3.jpeg'
// import imgSrc3 from '../../assets/batches-banner.jpeg'
import mb1 from '../../assets/mb-hero-1.jpg'
import mb2 from '../../assets/mb-hero-2.jpg'
import mb3 from '../../assets/mb-hero-3.jpg'
import mb4 from '../../assets/mb-hero-4.jpg'
// import imgSrc3 from '../../assets/bg5.png'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const HeroSection = ({ imgSrc, hd1, hd2 }) => {
    const [autoplay, setAutoplay] = useState(true);

    const startAutoplay = () => {
        setAutoplay(true);
    };

    const toggleAutoplay = () => {
        setAutoplay((prevAutoplay) => !prevAutoplay);
    };

    return (
        <div className="hero-section">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={
                    autoplay
                        ? {
                            delay: 2500,
                        }
                        : false
                }
                pagination={{
                    clickable: true,
                }}
                disableOnInteraction={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                onClick={toggleAutoplay} // Toggle autoplay on click
                onMouseLeave={startAutoplay}

            >
                {/* <SwiperSlide>
                    <img src={imgSrc1} className="heroimage" alt="" />
                </SwiperSlide> */}
                {/* <SwiperSlide>
                    <img src={imgSrc2} className="heroimage" alt="" />
                </SwiperSlide> */}
                {console.log(window.innerWidth)}
                {
                    window.innerWidth > 600 ? (
                        <>
                            <SwiperSlide>
                                <LazyLoadImage
                                    alt="banner-image-1"
                                    src={imgSrc1} // use normal <img> attributes as props
                                    effect="blur"
                                    width="100%"
                                    
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <LazyLoadImage
                                    alt="banner-image-2"
                                    src={imgSrc2} // use normal <img> attributes as props
                                    effect="blur"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <LazyLoadImage
                                    alt="banner-image-2"
                                    src={imgSrc3} // use normal <img> attributes as props
                                    effect="blur"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <LazyLoadImage
                                    alt="banner-image-2"
                                    src={imgSrc4} // use normal <img> attributes as props
                                    effect="blur"
                                />
                            </SwiperSlide>
                            {/* <SwiperSlide>
                                <img src={imgSrc5} className="heroimage" alt="" />
                            </SwiperSlide> */}
                        </>
                    ) : (
                        <>
                            <SwiperSlide>
                                <LazyLoadImage
                                    alt="banner-image-1"
                                    src={mb1} // use normal <img> attributes as props
                                    effect="blur"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <LazyLoadImage
                                    alt="banner-image-2"
                                    src={mb2} // use normal <img> attributes as props
                                    effect="blur"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <LazyLoadImage
                                    alt="banner-image-3"
                                    src={mb3} // use normal <img> attributes as props
                                    effect="blur"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <LazyLoadImage
                                    alt="banner-image-4"
                                    src={mb4} // use normal <img> attributes as props
                                    effect="blur"
                                />
                            </SwiperSlide>
                        </>
                    )
                }

            </Swiper>

            <div className="detail">
                <h1>{hd1}</h1>
                <h2>{hd2}</h2>
                <p>Our institute is committed to providing the best education to students</p>
                <p>and helping them achieve their goals</p>
            </div>
        </div>
    );
};

export default HeroSection;
