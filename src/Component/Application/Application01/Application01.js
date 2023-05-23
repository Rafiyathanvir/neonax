import React from 'react'
import './Application01.css'
import { Keyboard, Navigation,Pagination} from "swiper";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Application01() {
  return (
    <> 
      <div className="top_bannerA1">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>Smart Asset Tracking</h2>
        </div>
      <div className="ast">
          <div className="ast_head" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <h1>Asset Management</h1>
            <div className="devide"></div>
          </div>
        

        {/* card main division */}
        <div className="assets" data-aos="zoom-in" data-aos-duration="3000">
        <Swiper
        slidesPerView={1}
        spaceBetween={50}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        
          {/* First Card */}
          <SwiperSlide>
          <div className="ast_content">
            <div className="ast_slide">
            <img className="ast_img" src="./assets/image6.jpg" alt=""></img>

            <h1>ASSET PHYSICAL AUDIT</h1>

            <p>
            The NeonaX HUB for perpetual Asset Audit Inventory
            is a simple and complete smartphone or handheld-
            based RFID enabled solution that helps speed up the
            process of inventorying large numbers of assets of
            any kind, dispersed over multiple areas. RFID tags,
            unlike bar codes, do no need line-of-sight reading and
            equally importantly, are able to read multiple tags at
            the same time.
            </p>
            </div>
          </div>
          </SwiperSlide>
          {/* Second Card */}
          <SwiperSlide>
          <div className="ast_content">
          <div className="ast_slide">
            <img className="ast_img" src="./assets/image7.jpg" alt=""></img>

            <h1>REAL-TIME ASSET LOCATION</h1>

            <p>
            Allow industrial facilities to easily determine the exact
            location of tagged assets to reduce equipment
            shinkage/hoarding, decrease th time staff spend
            searching fo equipment. and automate PAR-level
            management. Our platform fo asset management
            and optimization solutions give ob ste valuable real
            time information including equipment location status,
            availabilty usage history and automatic alerts.
            </p>
            </div>
          </div>
          </SwiperSlide>
          {/* Third card */}
          <SwiperSlide>
          <div className="ast_content">
          <div className="ast_slide">
            <img className="ast_img" src="./assets/image8.jpg" alt=""></img>

            <h1>EQUIPMENT MAINTENANCE</h1>

            <p>
            NeonaX asset management eliminates the need for
            manual processes, spreadsheets, post-it notes and
            other ineffective methods. Accurate data helps ensure
            complance with maintenance schedules and product
            recalls by showing you an asset's Inventory. location,
            and history. With realtime data about the location and
            maintenance status of you Industral assets, ou can
            better lan and prepare thei usage to masimize your
            investment.

            </p>
            </div>
          </div>
          </SwiperSlide>

          {/* fourth Card */}
           <SwiperSlide>
          <div className="ast_content">
          <div className="ast_slide">
            <img className="ast_img" src="./assets/image9.jpg" alt=""></img>

            <h1>TOOL MANAGEMENT</h1>

            <p>
            The NeonaX HUB RFID tool tracking system organizations improve the visibility of their fixed
            assets by enabling them to automate physical asset
            inventories, track the movement of assets, and monitor assets in real time security and safekeeping.
            </p>
            </div>
          </div>
          </SwiperSlide>

          {/* fifth card   */}
          <SwiperSlide>
          <div className="ast_content">
          <div className="ast_slide">
            <img className="ast_img" src="./assets/image10.jpg" alt=""></img>

            <h1>IT ASSET TRACKING</h1>

            <p>
            NeonaX HUB RFID IT asset tracing software is a
            comprehensive solution that not only helps assets managers achieve complete visbilty of thet IT assets but also accomplishes this in an efficient, painless and accurate manner.

            The RFID IT hardware tracking solution is flexible enough to work with handheld RFID readers excusively,or by combining them with fixed RFID readers that monitor zones or portal.
            </p>
            </div>
          </div>
          </SwiperSlide>  
          </Swiper>
        </div>{/* card main division */}
       </div>{/* assets main div */}

      {/* supply main div */}
      <div className="sp" data-aos="zoom-in" data-aos-duration="3000">
        <div className="sp_head">
          <h1>Supply Chain & Logistics</h1>
          <div className="devide"></div>
        </div>


        {/* card main division */}
        <div className="sply">

        <Swiper
        slidesPerView={1}
        spaceBetween={50}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >

          {/* First Card */}
          <SwiperSlide> 
          <div className="sp_content">
          <div className="sp_slide">
            <img  src="./assets/image11.jpg" alt=""></img>

            <h1>SUPPLY CHAIN AUTOMATION</h1>

            <p>
              With end-to-end tracking across beltways and conveyers, operators gain visibility into all parts of a supply chain to know where inventory is located and can see distruptions and slow downs as they happen Unlock next-level efficiency and new insights with visiblity into every thing moving within and across all locations in your supply chain.
            </p>
            </div>
          </div>
          </SwiperSlide> 

          {/* Second Card */}
          <SwiperSlide> 
          <div className="sp_content">
          <div className="sp_slide">
            <img  src="./assets/image12.jpg" alt=""></img>

            <h1>SHIPPING VERIFICATION</h1>

            <p>
              Automate tracting parts and goods moving between plants for maximum operational efficiency, Easily identify both an item and its location within your warehouse to help workers find what they're looking for and confirm that its the right thing-eliminating errors and providing for flexible storage plans.
              The NeonaX HUB platform easily integrates into your current software and enables the real-time data collection needed to work at the pace of modern business. 
            </p>
            </div>
          </div>
          </SwiperSlide> 

          {/* Third card */}
          <SwiperSlide> 
          <div className="sp_content">
          <div className="sp_slide">
            <img src="./assets/image13.jpg" alt=""></img>

            <h1>TRACK RETURNABLE ASSETS</h1>

            <p>
              NeonaX HUB provides real-time visbility and control of RTIs and rental assets (eg. oil/gas cylinder, crates, racks, pallets etc) in a 3-tier (supplier, distributor, retailer) supply chain. It tracks shipping, returning and receiving of inventory, validates inventory storage, manages the processing of inventory (repair, maintains the viabbility of RTI content, and ensures accountability of supply chain parters)
            </p>
            </div>
          </div>
          </SwiperSlide> 
          </Swiper>
        </div> {/* card main division */}
      </div>{/* supply main div */}

      <div className="workforce" data-aos="zoom-in" data-aos-duration="3000">
        <div className="wrk_head">
          <h1>Workforce safety Management</h1>
          <div className="devide"></div>
        </div>

        {/* card main division */}
        <div className="works">

        <Swiper
        slidesPerView={1}
        spaceBetween={50}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >

          {/* First Card */}
          <SwiperSlide> 
          <div className="wrk_content">
            <div className="wrk_slide">
            <img  src="./assets/image14.jpg" alt=""></img>

            <h1>MUSTERING ROLL-CALL</h1>

            <p>
              The completely of the process multiplies with the size of the facility, the number of floors within buildings, and the amount of assembly (=muster) points <strong>Digitalization of the mustering process</strong> significantly helps to decrease the time needed to complete it and brings real-time updates of those acaounted  for and those persons still missing together with an instant evacuation list.
            </p>
            </div>
          </div>
          </SwiperSlide> 

          {/* second Card */}
          <SwiperSlide> 
          <div className="wrk_content">
          <div className="wrk_slide">
            <img  src="./assets/image15.jpg" alt=""></img>

            <h1>PEOPLE ROLL-CALL</h1>

            <p>
              The systems reveal the dwell-time patterns and highlight waiting times, allowing an increase of <strong>Operational efficiency through process, space and workflow optimization</strong> knowing at which location and zone people spent their time can also be used for automatic workhours reconcillation for subcontractors.
            </p>
            </div>
          </div>
          </SwiperSlide> 

          {/* Third Card */}
          <SwiperSlide> 
          <div className="wrk_content">
          <div className="wrk_slide">
            <img  src="./assets/image16.jpg" alt=""></img>

            <h1>UNIFORM & PPE TRACKING</h1>

            <p>
              By placing a special passive RFID laundry tag in each grown, the industries and laundry service provider can track the location of each item, how many they have sent and recieved and also how many times the items have been used and cleaned, Tags are designed to withstand cleaning procedures and other laundry processes. 
            </p>
            </div>
          </div>
          </SwiperSlide> 
          </Swiper>
        </div>
    </div>
    </>
  )
}
