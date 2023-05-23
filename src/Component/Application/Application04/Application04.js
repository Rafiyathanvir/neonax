import React from 'react'
import "./Application04.css"

export default function Application04() {
  return (
    <>
      <div className="GAW_Meter">
      <div className="top_bannerA4">
            <img src="./assets/side_banner.jpg" alt="" />
            <h2>Smart Gas & Water Meter</h2>
        </div>
        <div className="GAW">
          <div className="GAW_head" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
            <h1>Smart Gas & Water Meter </h1>
            <div className="devide"></div>
          </div>
          <div className="GAW_content">
            <img data-aos="zoom-in" data-aos-duration="3000" src="./assets/image22.png" alt=""></img>

            <p data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="3000">
              Smart Gas and Water metering communication solutions provide
              end-to-end quality of service using optimal technology. Neona
              provide cost effective communication modules which support both in
              Hardware and Software along with Network management system for
              Smart Gas and Water metering solution. We support communication
              technologies like RF and BLE with low total cost of ownership for
              customer.
            </p>

            <h3 data-aos="flip-right" data-aos-duration="3000">FEATURES</h3>

            <ul data-aos="flip-right" data-aos-duration="3000">
              <li>
                Precise measurement and data analysis of different liquid types
                including water
              </li>
              <li>petroleum products and organic oils</li>
              <li>Contamination detection</li>
              <li>Intelligent liquid storage systems</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
