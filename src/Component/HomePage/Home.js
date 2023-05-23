import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';


//import { SwipeableCards } from 'react-swipeable-cards';

import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
const imagess = [
  './assets/homepic3.png',
  './assets/homepic3.png',
  './assets/homepic3.png',
];

export default function Home() {
  const [counterOn, setCounterOn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);












  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const images = [
    {
      src: './assets/homepic3.png',
      title: 'Asset Tracking System'
    },
    {
      src: './assets/homepic3.png',
      title: 'Mobile App Development'
    },
    {
      src: './assets/homepic3.png',
      title: 'Embedded Systems'
    },
    {
      src: './assets/homepic3.png',
      title: 'IT Training'
    },


  ];

  return (
    <>
      <div className="hero">
        <video autoPlay muted loop src='./assets/Earth-animii.mp4' type='video/mp4' />

        <div className="hero_content">
          <h2 className='slide-left01'>Future Digital World</h2>
          <br /><br />
          <p className='slide2'>We are an experienced team members with advance ideas on business strategies in both private and government sector providing with latest technology on different vertical of business</p>
          <br />
          <a className='slide-left01' href="#Home">Read more</a>
        </div>
        {/* ro */}

        {/*  */}
      </div>
      {/* homecard  */}
      <div id="Home">

        <div style={{ textAlign: 'center' }}>
          <h1 >Our <span style={{ color: "#028FC8", }}> Expertise</span></h1>
        </div>
        {/* image card */}
        <div className='expertise'>
          <div style={{}}>


            <div className="container">
              {images.map((image, index) => (
                <div key={index} className="column1">
                  <h2 className="heading">{image.title}</h2>
                  <div className='imgdiv'>
                    <img loading='lazy' src={image.src} alt={image.title} className="image" />
                  </div>
                </div>
              ))}
            </div>
            <div className="container2">
              {images.map((image, index) => (
                <div key={index} className="column2">

                  <h2 className="heading">{image.title}</h2>
                  <div className='imgdiv'>

                    <img loading='lazy' src={image.src} alt={image.title} className="image" />
                  </div>
                </div>

              ))}

            </div>
          </div>
        </div>

        {/* left and right contaniner */}

        <div className="containercard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>
            <div className={`content ${isHovered ? 'move-right' : ''}`}>
              <h2>WE DO NOT DESIGN <span style={{ color: "#028FC8" }}>PRODUCTS </span>
                WE DESIGN <span style={{ color: "#028FC8" }}>DREAMS</span></h2>
              <br />
              <p className='contentpara'>
                Neonax is a global IT solutions provider with its headquarters located at Dubai.
                With the backbone of a bunch of experienced professionals in the software industry we are inspired to diversify our
                skills in various domains such as Asset Tracking & Management System, Perimeter Security System, ERP Solutions, Mobile Application Development,
                Web Development, Branding, SEO, Internet marketing, IoT solutions etc.</p>
              <a className='slide-left01' href="#aboutus">About Us</a>

            </div>

            <div className={`images ${isHovered ? 'move-left' : ''}`}>
              <img src="./assets/paraimg.png" alt="Image"
              />


            </div>
          </div>

        </div>
        <br />
        <br />
        {/* end */}

        {/* swipe card start*/}
        <div>
          <h2 style={{ textAlign: "center" }}>OUR WORK <span style={{ color: "#028FC8" }}>FLOW</span></h2>
          <br />

          <Swiper
            modules={[A11y, Scrollbar]}
            spaceBetween={30}
            slidesPerView="auto"
          >
            <br />
            <SwiperSlide className="res-slide">
              <div className='swipeimg'>
                <img src="./assets/homepic3.png"></img>
                <hr className='hrswipe' />

                <h1>Discovering & Requirement Gathering​</h1>
                <p>Possibilities arise for those who
                  are in search of it .We work in
                  close association with our clients
                  to identify business opportunities
                  which help in mutual growth and
                  value creation , before getting
                  started with any project
                  ,requirement gathering process is
                  undertaken to have a clear
                  understanding of the expectations
                  from the client.</p>
              </div>


            </SwiperSlide>


            <SwiperSlide className="res-slide">
              <div className='swipeimg'>
                <img src="./assets/homepic3.png"></img>
                <hr className='hrswipe' />

                <h1>Discovering & Requirement Gathering​</h1>
                <p>Possibilities arise for those who
                  are in search of it .We work in
                  close association with our clients
                  to identify business opportunities
                  which help in mutual growth and
                  value creation , before getting
                  started with any project
                  ,requirement gathering process is
                  undertaken to have a clear
                  understanding of the expectations
                  from the client.</p>
              </div>


            </SwiperSlide>


            <SwiperSlide className="res-slide">
              <div className='swipeimg'>
                <img src="./assets/homepic3.png"></img>
                <hr className='hrswipe' />

                <h1>Discovering & Requirement Gathering​</h1>
                <p>Possibilities arise for those who
                  are in search of it .We work in
                  close association with our clients
                  to identify business opportunities
                  which help in mutual growth and
                  value creation , before getting
                  started with any project
                  ,requirement gathering process is
                  undertaken to have a clear
                  understanding of the expectations
                  from the client.</p>
              </div>


            </SwiperSlide>
            <SwiperSlide className="res-slide">
              <div className='swipeimg'>
                <img src="./assets/homepic3.png"></img>
                <hr className='hrswipe' />

                <h1>Discovering & Requirement Gathering​</h1>
                <p>Possibilities arise for those who
                  are in search of it .We work in
                  close association with our clients
                  to identify business opportunities
                  which help in mutual growth and
                  value creation , before getting
                  started with any project
                  ,requirement gathering process is
                  undertaken to have a clear
                  understanding of the expectations
                  from the client.</p>
              </div>


            </SwiperSlide>

            <SwiperSlide className="res-slide">
              <div className='swipeimg'>
                <img src="./assets/homepic3.png"></img>
                <hr className='hrswipe' />

                <h1>Discovering & Requirement Gathering​</h1>
                <p>Possibilities arise for those who
                  are in search of it .We work in
                  close association with our clients
                  to identify business opportunities
                  which help in mutual growth and
                  value creation , before getting
                  started with any project
                  ,requirement gathering process is
                  undertaken to have a clear
                  understanding of the expectations
                  from the client.</p>
              </div>


            </SwiperSlide>

            <SwiperSlide className="res-slide">
              <div className='swipeimg'>
                <img src="./assets/homepic3.png"></img>
                <hr className='hrswipe' />

                <h1>Discovering & Requirement Gathering​</h1>
                <p>Possibilities arise for those who
                  are in search of it .We work in
                  close association with our clients
                  to identify business opportunities
                  which help in mutual growth and
                  value creation , before getting
                  started with any project
                  ,requirement gathering process is
                  undertaken to have a clear
                  understanding of the expectations
                  from the client.</p>
              </div>


            </SwiperSlide>

            <SwiperSlide className="res-slide">
              <div className='swipeimg'>
                <img src="./assets/homepic3.png"></img>
                <hr className='hrswipe' />

                <h1>Discovering & Requirement Gathering​</h1>
                <p>Possibilities arise for those who
                  are in search of it .We work in
                  close association with our clients
                  to identify business opportunities
                  which help in mutual growth and
                  value creation , before getting
                  started with any project
                  ,requirement gathering process is
                  undertaken to have a clear
                  understanding of the expectations
                  from the client.</p>
              </div>


            </SwiperSlide>
            <SwiperSlide className="res-slide">
              <div className='swipeimg'>
                <img src="./assets/homepic3.png"></img>
                <hr className='hrswipe' />

                <h1>Discovering & Requirement Gathering​</h1>
                <p>Possibilities arise for those who
                  are in search of it .We work in
                  close association with our clients
                  to identify business opportunities
                  which help in mutual growth and
                  value creation , before getting
                  started with any project
                  ,requirement gathering process is
                  undertaken to have a clear
                  understanding of the expectations
                  from the client.</p>
              </div>

            </SwiperSlide>
          </Swiper>
        </div>




        {/*end  */}

        {/* dream no change start */}
        <div className="Dreams">

          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

            <div className="row-item">
              <div className="container-box" data-aos="flip-right" data-aos-duration="3000">
                <div className="container-img">
                  <img loading='lazy' src="./assets/internet.png" alt="" />
                </div>
                <h4>
                  {counterOn && <CountUp start={0} end={250} duration={3} delay={0} />}
                  + </h4>
                <p>Clients Worldwide</p>
              </div>
              <div className="container-box" data-aos="flip-right" data-aos-duration="2500">
                <div className="container-img">
                  <img loading='lazy' src="./assets/increase.png" alt="" />
                </div>
                <h4>
                  {counterOn && <CountUp start={0} end={300} duration={3} delay={0} />}
                  +</h4>
                <p>Projects Delivered</p>
              </div>
              <div className="container-box" data-aos="flip-right" data-aos-duration="2000">
                <div className="container-img">
                  <img src="./assets/department.png" alt="" />
                </div>
                <h4>
                  {counterOn && <CountUp start={0} end={40} duration={3} delay={0} />}
                  +</h4>
                <p>In House Resources</p>
              </div>
              <div className="container-box" data-aos="flip-right" data-aos-duration="1500">
                <div className="container-img">
                  <img src="./assets/business.png" alt="" />
                </div>
                <h4>
                  {counterOn && <CountUp start={0} end={12} duration={3} delay={0} />}
                  +</h4>
                <p>Years of Expertise</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        {/* end */}

      </div>
      
    </>
  )
}
