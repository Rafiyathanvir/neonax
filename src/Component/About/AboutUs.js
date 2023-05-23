import React, { useState } from 'react'
import './About.css'
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RouteIcon from '@mui/icons-material/Route';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from '@mui/icons-material/Facebook';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);



  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
    
        {/* left and right */}
        <div>
        <div className="containercard1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>
            <div className={`content1 ${isHovered ? 'move-right1' : ''}`}>
              <h2  style={{paddingBottom:"16px",borderBottomStyle:"solid ",borderBottomWidth:"2.1px",lineHeight:"8px",width:"fit-content"}}>Our Company</h2>
              <br />
              <p className='contentpara1'>
            Neonax is a global IT solutions provider with its headquarters
            located at Dubai. With the backbone of a bunch of experienced
            professionals in the software industry we are inspired to diversify
            our skills in various domains such as Asset Tracking & Management
            System, Perimeter Security System, ERP Solutions, Mobile Application
            Development, Web Development, Branding, SEO, Internet marketing, IoT
            solutions etc.
          </p>
          <p className='contentpara1'>
            Ranging with a client base of leading industry giants across the
            Domestic & Overseas market, Neona X concentrates on development of
            innovative products for the service sector.
          </p>
          <p className='contentpara1'>
            We assure our customers the almost satisfaction in delivering
            business values and commitment to sustainability which will help
            them to drive enterprise-wide productivity and offer differentiated
            user experience. Our goal is to be recognized by our clients to be
            their prime partner in the new application economy.
          </p>

            </div>

            <div className={`images1 ${isHovered ? 'move-left1' : ''}`}>
              <img src="./assets/paraimg.png" alt="Image"
              />


            </div>
          </div>

        </div>
        <br/>
        <br/>
        <br/>


{/* slider scrool */}
      {/* <div className="about">
      
      <div className="elementor_section">
        <div className="section_header" data-aos="zoom-out-down" data-aos-duration="3000">
          <h3>IT MAKES SENSE TO WORK WITH US</h3>
          <h2>Mission,Vision & Values</h2>
          <div className="devider"></div>
        </div> */}
      


        {/* Card slider */}
        {/* <input type="radio" name="dot" id="one"/>
        <input type="radio" name="dot" id="two"/>

        <div className="elementor_inner_section" data-aos="flip-up" data-aos-duration="3000">
          {/* card one */}
          {/* <div className="content_one">
            <div className="sub_logo">
              <DesignServicesOutlinedIcon style={{ fontSize: "50px" }} />
            </div>
            <h2>Revolutionary Designs</h2>
            <p>
              Experience creativity ! Design is what has fetched us all the
              reputation. Lot of creative thinking goes into realization of each
              work. We craft the best and this is the assurance that we give .
            </p>
          </div> */}
          {/* card two */}
          {/* <div className="content_one">
            <div className="sub_logo">
              <ContentPasteSearchOutlinedIcon style={{ fontSize: "50px"}} />
            </div>
            <h2>Prototype Verification</h2>
            <p>
              We give opportunity to the customer to get a firsthand experience
              of what can be expected from us. We don’t rush to project
              execution unless and until we have the go ahead from customer's
              end.
            </p>
          </div> */}
          {/* card three  */}
          {/* <div className="content_one">
            <div className="sub_logo">
              <AttachMoneyOutlinedIcon style={{ fontSize: "50px" }}/>
            </div>
            <h2>Transparent Pricing</h2>
            <p>
              We believe in transparency. We ensure that clients are on the same
              page with us when it comes to project billing . There are no
              unreasonable or hidden charges involved.
            </p>
          </div> */}
          {/* card four */}
          {/* <div className="content_one">
            <div className="sub_logo">
              <CurrencyPoundIcon style={{ fontSize: "50px" }} />
            </div>
            <h2>Flexible Payment</h2>
            <p>
              We understand customers and their financial compulsions well. We
              do not insist on an upfront full payment. Rather ,we give priority
              to making the customer feel comfortable while working with us.
            </p>
          </div> */}
          {/* card five */}
          {/* <div className="content_one">
            <div className="sub_logo">
              <RocketLaunchIcon style={{ fontSize: "50px" }} />
            </div>
            <h2>Post-launch Provisions</h2>
            <p>
              Our perception is that with each project launch , the story has
              only just begun. We have principled ourselves to ensure that the
              customer feels happy for the choice he has made.
            </p>
          </div> */}
          {/* card six */}
          {/* <div className="content_one">
            <div className="sub_logo">
              <RouteIcon style={{ fontSize: "50px" }} />
            </div>
            <h2>Long –Lasting Association</h2>
            <p>
              Walking together can take us for. With each project , we embark on
              a fruitful journey of long-standing association with the customer
              .Now you know why customers stay loyal with us.
            </p>
          </div> */}
        {/* </div>  */}

        {/* Slider Button */}
        {/* <div className="button">
          <label htmlFor="one" className="one active"></label>
          <label htmlFor="two" className="two"></label>
        </div>
      </div> */}

<div className='swipeslider1'>
          <h2 style={{ textAlign: "center" }}>IT MAKES SENSE TO <span style={{ color: "#028FC8" }}>WORK WITH US</span></h2>
          <br />

          <Swiper
            modules={[A11y,Scrollbar]}
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


<br/>
<br/>

{/* end */}


{/* full left and half right */}
<div className="containercard2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>
            <div className={`content2 ${isHovered ? 'move-right2' : ''}`}>
              <h2  >IT MAKES SENSE TO WORK WITH US</h2>
           
         
            </div>

            <div className={`images2 ${isHovered ? 'move-left2' : ''}`}>
              <img src="./assets/aboutusleft2.png" alt="Image"
              />


            </div>
          </div>

        </div>




{/* end */}


{/* team member start */}

      <div className="team_area">
        <div className="site_heading" data-aos="zoom-out-down" data-aos-duration="3000">
          <h2>Meet Our<span style={{ color: "#028FC8" }}> Team</span> </h2>
        </div>
        <div className="team">
        <div className="card01" >
          <div className="circle">
            <div className="imgBox01">
              <img src="./assets/image1.jpg" alt=""></img>
            </div>
          </div>
          <div className="content_logo">
            <h3>Mohamed Rashid AlMheiri</h3>
            <h4>Director</h4>
            <div className="link1">
            <a href="https://www.linkedin.com/"><LinkedInIcon className='media01' style={{fontSize:'35px'}} /></a>
            <a href="https://www.facebook.com/"><FacebookIcon className='media01' style={{fontSize:'35px'}}/></a>
            </div>
          </div>
        </div>
        <div className="card01" >
          <div className="circle">
            <div className="imgBox01" style={{alignContent:"center"}}>
              <img src="./assets/image2.jpg" alt=""></img>
            </div>
          </div>
          <div className="content_logo">
           
            <h3>Anchunath R</h3>
            <h4>Director</h4>
            <div className="link1">
            <a href="https://www.linkedin.com/"><LinkedInIcon className='media01' style={{fontSize:'35px'}}/></a>
            <a href="https://www.facebook.com/"><FacebookIcon className='media01' style={{fontSize:'35px'}}/></a>
            </div>
          </div>
        </div>
        <div className="card01" >
          <div className="circle">
            <div className="imgBox01">
              <img src="./assets/image3.jpg" alt=""></img>
            </div>
          </div>
          <div className="content_logo">
            <h3>Muhammed Yunus</h3>
            <h4>Director</h4>
            <div className="link1">
            <a href="https://www.linkedin.com/"><LinkedInIcon className='media01' style={{fontSize:'35px'}}/></a>
            <a href="https://www.facebook.com/"><FacebookIcon className='media01' style={{fontSize:'35px'}}/></a>
            </div>
          </div>
        </div>
        <div className="card01" >
          <div className="circle">
            <div className="imgBox01">
              <img src="./assets/image4.jpg" alt=""></img>
            </div>
          </div>
          <div className="content_logo">
            <h3>Shijith Mohan</h3>
            <h4>Director</h4>
            <div className="link1">
            <a href="https://www.linkedin.com/"><LinkedInIcon className='media01' style={{fontSize:'35px'}}/></a>
            <a href="https://www.facebook.com/"><FacebookIcon className='media01' style={{fontSize:'35px'}}/></a>
            </div>
            
          </div>
          </div>
        </div>
      </div>
     </div> 
    </>
  )
}
