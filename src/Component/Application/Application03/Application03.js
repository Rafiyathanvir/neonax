import React from 'react'
import './Application03.css'

export default function Application03() {
  return (
    <>
      <div className="engy_meter">
      <div className="top_bannerA3">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>Smart Electricity Meter</h2>
        </div>
        <div className="mtr_head" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
          <h1>Smart Electricity Meter Solution</h1>
          <div className="devide"></div>
        </div>
        <div className="mtr_content" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
          <div className='mtr_content_01'>
          <ul>
            <li>
              Smart meters, part of an advanced metering infrastructure are the
              single largest source of data. The success of smart metering
              depends up on strong and reliable communication technology.
            </li>
            <li>
              The reliable connectivity in last mile scenarios like individual
              energy meter in the network connecting to the data concentrator in
              turn to the meter data management systems (MDMS).
            </li>
            <li>
              There are emerging low power WAN technologies such as Wi-SUN-in
              licensed band, that can provide alternative long-range
              connectivity option for realizing IoT networks. Also, option of RF
              and PLC include in same application.
            </li>
            <li>
              Further, we highlight how emerging communication technologies will
              help in building a reliable, low cost, low power, long range, last
              mile technology for smart energy metering solutions.
            </li>
          </ul>
          </div>
          <div className='mtr_content_02'>
          <img src="./assets/image19.png" alt=""></img>
          </div>
        </div>
        <div className="engy_features" data-aos="flip-right" data-aos-duration="3000">
          <h1>FEATURES</h1>
          <ul className="tilesWrap">
            <li>
              <h2>01</h2>
              <p>
                Monitoring & Control <br /> Network Administration <br /> Load Profile Service
              </p>
            </li>
            <li>
              <h2>02</h2>
              <p>
                Porting & Analysis <br /> Remote monitoring <br /> Consumer Portal Service
              </p>
            </li>
            <li>
              <h2>03</h2>
              <p>
                Network Diagram <br /> Tampering and Events Detection Service <br />
                Billing Data Service
              </p>
            </li>
            <li>
              <h2>04</h2>
              <p>
                Executive Dashboard Instantaneous Reading Service
                On-Demand Data Request Service
              </p>
            </li>   
          </ul>
        </div>
      </div>
    </>
  )
}
